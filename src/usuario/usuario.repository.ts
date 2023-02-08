import { UsuarioEntity } from "./usuario.entity";

export class UsuarioRepository {
    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }
}