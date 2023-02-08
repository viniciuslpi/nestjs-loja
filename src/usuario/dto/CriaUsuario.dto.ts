
import { IsEmail, IsNotEmpty, IsString, MinLength, validate } from 'class-validator';

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: "nome nao deve estar vazia"})
    nome: string;
    
    @IsEmail(undefined, { message: "email invalido"})
    email: string;
    
    @MinLength(6, { message: "a senha precisa ter pelo menos 6 caracteres"})
    senha: string;
}