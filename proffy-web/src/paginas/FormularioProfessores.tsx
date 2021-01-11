import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../servicos/api';

// Componentes
import Cabecalho from '../componentes/Cabecalho';
import Input from '../componentes/Input';
import Textarea from '../componentes/Textarea';
import Select from '../componentes/Select';

// Imagem
import iconAviso from '../assets/images/icons/warning.svg';

// CSS
import './FormularioProfessores.css';

function FormularioProfessores() {
  const historico = useHistory();

  const [nome, setNome] = useState('');
  const [avatar, setAvatar] = useState('');
  const [wpp, setWpp] = useState('');
  const [bio, setBio] = useState('');
  const [materia, setMateria] = useState('');
  const [custo, setCusto] = useState('');
  const [horarioItens, setHorarioItens] = useState([
    { dia_semana: 0, comeco: '', fim: '' }
  ])

  function addNovoItemHorario(){
    setHorarioItens([
      /* Tudo que já está em horarioItens mais um objeto */
      ...horarioItens,
      { dia_semana: -1, comeco: '', fim: '' }
    ])
  }

  function handlerCriarAula(e: FormEvent){
    e.preventDefault();
    
    api.post('aulas', {
      nome_usuario: nome,
      foto_usuario: avatar,
      wpp_usuario: wpp,
      bio_usuario: bio,
      materia,
      custo: Number(custo),
      horario: horarioItens
    })
    .then(() => {
      alert('Cadastro realizado com sucesso!');
      historico.push('/');
    })
    .catch(() => {
      alert('Erro ao cadastrar!')
    })
  }

  function setHorarioItemValor(posicao: number, nm_campo: string, valor: string){
    const horarioItensAtualizado = horarioItens.map((horarioItem, indice) => {
      if(indice === posicao){
        // [nm_campo] tem o nome que foi passado no segundo parametro da função setHorarioItemValor() 
        return { ...horarioItem, [nm_campo]: valor };
      } else {
        return horarioItem;
      }
    })
    setHorarioItens(horarioItensAtualizado);
  }

  return (
    <div className="container" id="pag-form-profs">
      <Cabecalho titulo="É incrível que você queira ministrar aulas!" descricao="O primeiro passo é preencher este formulário." />
      <main>
        <form onSubmit={handlerCriarAula}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              nome="nome" rotulo="Nome completo" value={nome}
              onChange={
                (e) => { setNome(e.target.value) }
              }
            />
            <Input
              nome="avatar" rotulo="Avatar" value={avatar}
              onChange={
                (e) => { setAvatar(e.target.value) }
              }
            />
            <Input
              nome="wpp" rotulo="WhatsApp" value={wpp}
              onChange={
                (e) => { setWpp(e.target.value) }
              }
            />
            <Textarea
              nome="bio" rotulo="Biografia" value={bio}
              onChange={
                (e) => { setBio(e.target.value) }
              }
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              nome="materia" rotulo="Matéria"
              opcoes={[
                { valor: 'Artes', rotulo: 'Artes' },
                { valor: 'Engenharia da Computação', rotulo: 'Engenharia da Computação' },
                { valor: 'Inglês', rotulo: 'Inglês' }
              ]}
              value={materia}
              onChange={
                (e) => { setMateria(e.target.value) }
              }
            />
            <Input
              nome="custo" rotulo="Custo (hora por aula)"
              value={custo}
              onChange={
                (e) => { setCusto(e.target.value) }
              }
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNovoItemHorario}> + Novo horário </button>
            </legend>
            {horarioItens.map((horarioItem, indice) => {
              return (
                <div key={horarioItem.dia_semana} className="item-horario">
                <Select
                  nome="dia-da-semana" rotulo="Dia da semana"
                  opcoes={[
                    { valor: '0', rotulo: 'Domingo' },
                    { valor: '1', rotulo: 'Segunda-feira' },
                    { valor: '2', rotulo: 'Terça-feira' },
                    { valor: '3', rotulo: 'Quarta-feira' },
                    { valor: '4', rotulo: 'Quinta-feira' },
                    { valor: '5', rotulo: 'Sexta-feira' },
                    { valor: '6', rotulo: 'Sábado' }
                  ]}
                  onChange={e => setHorarioItemValor(indice, 'dia_semana', e.target.value)}
                  value={horarioItem.dia_semana}
                />
                <Input
                  nome="comeco" rotulo="Das" type="time"
                  onChange={e => setHorarioItemValor(indice, 'comeco', e.target.value)}
                  value={horarioItem.comeco}
                />
                <Input
                  nome="fim" rotulo="Até" type="time"
                  onChange={e => setHorarioItemValor(indice, 'fim', e.target.value)}
                  value={horarioItem.fim}
                />
              </div>
              )
            })}
              
          </fieldset>
          <footer>
            <p>
              <img src={iconAviso} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default FormularioProfessores;