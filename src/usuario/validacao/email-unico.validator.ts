import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface{

    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioExiste = await this.usuarioRepository.existeComEmail(value);
        return !usuarioExiste;
    }

}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator
        });
    }
}