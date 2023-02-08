/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { v4 as uuid } from 'uuid';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();

        usuarioEntity.nome  = dadosUsuario.nome;
        usuarioEntity.email = dadosUsuario.email;
        usuarioEntity.senha = dadosUsuario.senha;
        usuarioEntity.id    = uuid();
        
        this.usuarioRepository.salvar(usuarioEntity);    

        return { 
            id: usuarioEntity.id,
            message: 'usuario criado'
        }
    } 

    @Get()
    async listaUsuarios() {
        return this.usuarioRepository.listar();
    }
}
