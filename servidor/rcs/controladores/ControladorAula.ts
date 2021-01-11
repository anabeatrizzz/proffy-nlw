import {Request, Response} from 'express';
import db from '../database/conexoes';

/* Converter campos comeco e fim de horario_aula para minuto */
function horaParaMinuto(time: string){
  const [hora, minuto] = time.split(':').map(Number)
  const horarioEmMinutos = (hora * 60) + minuto
  return horarioEmMinutos
}

interface CadaHorario {
  dia_semana: number;
  comeco: string;
  fim: string;
}

export default class ControladorAula {
  async Index(request: Request, response: Response){
    /* Filtros de listar aulas por materia, dia da semana e horario */
    const filtros = request.query;
    const materia = filtros.materia as string;
    const dia_semana = filtros.dia_semana as string;
    const horario = filtros.horario as string

    if(!filtros.dia_semana || !filtros.materia || !filtros.horario){
      return response.status(400).json({
        error: "Faltam filtros na pesquisa de aulas"
      })
    }

    const horarioEmMinutos = horaParaMinuto(horario);

    /* Consulta com os filtros */
    const aulas = await db('aula')
      .whereExists(function(){
        this.select('horario_aula.*')
          .from('horario_aula')
          .whereRaw('`horario_aula`.`id_aula` = `aula`.`cd_aula`')
          .whereRaw('`horario_aula`.`dia_semana_horario_aula` = ??', [Number(dia_semana)])
          .whereRaw('`horario_aula`.`comeco_horario_aula` <= ??', [horarioEmMinutos])
          .whereRaw('`horario_aula`.`fim_horario_aula` > ??', [horarioEmMinutos])
      })
      .where('aula.materia_aula', '=', materia)
      .join('usuario', 'aula.id_usuario', '=', 'usuario.cd_usuario')
      .select(['aula.*', 'usuario.*'])

    return response.json(aulas);
  }
  
  /* Metodo que vai criar uma aula */
  async Criar(request: Request, response: Response) {
  
  /* Armazenando dados que vieram do JSON em uma variavel só */
  const { nome_usuario, foto_usuario, wpp_usuario, bio_usuario, materia, custo, horario } = request.body;

  /* Se ocorrer erro ao inserir na ultima tabela, por exemplo, o transaction irá desfazer as inserções nas tabelas anteriores */
  const ta = await db.transaction();

  try {
    const idsUsuariosInseridos = await ta('usuario').insert({
      nome_usuario,
      foto_usuario,
      wpp_usuario,
      bio_usuario
    })

    /* Guardando o primeiro id_usuario */
    const id_usuario = idsUsuariosInseridos[0];
    
    const idsAulasInseridos = await ta('aula').insert({
      materia_aula: materia,
      custo_aula: custo,
      id_usuario
    })

    /* Guardando o primeiro id_aula */
    const id_aula = idsAulasInseridos[0];

    const horarioAula = horario.map((cadaHorario: CadaHorario) => {
      return {
        dia_semana_horario_aula: cadaHorario.dia_semana,
        comeco_horario_aula: horaParaMinuto(cadaHorario.comeco),
        fim_horario_aula: horaParaMinuto(cadaHorario.fim),
        id_aula
      }
    });

    /* Inserindo na tabela horario_aula */
    await ta('horario_aula').insert(horarioAula);

    /* Fazendo as alterações no banco */
    await ta.commit();

    return response.status(201).send();
  } catch(err) {
    console.log(err);
    /* Desfaz qualquer alteração feita no banco dentro do try */
    await ta.rollback();
    return response.status(400).json({
      error: "Erro inesperado ao criar nova aula"
    });
  }
}
}