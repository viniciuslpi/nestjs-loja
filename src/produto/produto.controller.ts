import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository){}

    @Get()
    async listar(){
        return this.produtoRepository.listar();
    }

    @Post()
    async cadastrar(@Body() produto) {
        this.produtoRepository.salvar(produto);
        return produto;
    }

}