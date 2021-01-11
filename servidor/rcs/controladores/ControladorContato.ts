import { Request, Response } from 'express';
import db from '../database/conexoes';

export default class ControladorContato{
  async Index(request: Request, response: Response){
    const conexoesTotais = await db('contato').count('* as total')
    const { total } = conexoesTotais[0];
    return response.json({ total });
  }
  async Criar(request: Request, response: Response){
    const { id_usuario } = request.body;
    await db('contato').insert({
      id_usuario
    })

    return response.status(201).send()
  }
}