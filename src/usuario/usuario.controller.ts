/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto copy';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();

        usuarioEntity.nome = dadosUsuario.nome;
        usuarioEntity.email = dadosUsuario.email;
        usuarioEntity.senha = dadosUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);

        return {
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'usuario criado'
        }
    }

    @Get()
    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(usuario => {
            return new ListaUsuarioDTO(usuario.id, usuario.nome)
        })
        return usuariosLista;
    }

    @Put('/:id')
    async atualizarUsuario(@Param('id') id: string, @Body() dadosParaAtualizar: AtualizaUsuarioDTO) {
        const usuarioAtualizado = await this.usuarioRepository.atualizar(id, dadosParaAtualizar);
        return {
            usuario: new ListaUsuarioDTO(usuarioAtualizado.id, usuarioAtualizado.nome),
            message: 'usuario atualizado com sucesso'
        }
    }

}
