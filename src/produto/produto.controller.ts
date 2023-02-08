import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository){}

    @Get()
    async listar(){
        return this.produtoRepository.listar();
    }

    @Post()
    async cadastrar(@Body() produto: CriaProdutoDTO) {
        this.produtoRepository.salvar(produto);
        return produto;
    }

}