
import { IsEmail, IsNotEmpty, IsString, MinLength, validate } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: "nome nao deve estar vazia"})
    nome: string;
    
    @IsEmail(undefined, { message: "email invalido"})
    @EmailUnico({ message: "ja existe um usuario com esse email"})
    email: string;
    
    @MinLength(6, { message: "a senha precisa ter pelo menos 6 caracteres"})
    senha: string;
}