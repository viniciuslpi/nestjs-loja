
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, validate } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class AtualizaUsuarioDTO {

    @IsNotEmpty({ message: "nome nao deve estar vazia"})
    @IsOptional()
    nome: string;
    
    @IsEmail(undefined, { message: "email invalido"})
    @EmailUnico({ message: "ja existe um usuario com esse email"})
    @IsOptional()
    email: string;
    
    @MinLength(6, { message: "a senha precisa ter pelo menos 6 caracteres"})
    @IsOptional()
    senha: string;
}