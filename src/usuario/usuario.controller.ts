/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    async criaUsuario(@Body() dadosUsuario) {
        this.usuarioRepository.salvar(dadosUsuario);        
        return dadosUsuario;
    } 

    @Get()
    async listaUsuarios() {
        return this.usuarioRepository.listar();
    }
}
