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

    async atualizar(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        const usuario = this.buscaPorId(id);
        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') return;
            usuario[chave] = valor;
        })
        return usuario;
    }

    async remover(id: string) {
        const usuario = this.buscaPorId(id);
        this.usuarios = this.usuarios.filter(usuarioSalvo => usuarioSalvo.id !== id);
        return usuario;

    }

    private buscaPorId(id: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.id === id);
        if (!possivelUsuario) {
            throw new Error('Usuario nao existe')
        }

        return possivelUsuario;
    }

}