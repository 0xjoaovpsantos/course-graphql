const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Basta retornar uma string'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado(){
        return {
            id: 1,
            nome: 'Joao',
            email: "emaildojoao",
            idade: 23,
            salario_real: 1234.56,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Jogo',
            preco: 20.00,
            desconto: 0.5,
        }
    },
    numerosMegaSena() {
        // return [4, 5, 6, 7, 8, 9]
        const crescente = (a, b) => a - b;
        return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    },
    usuarios(){
        return usuarios;
    },
    usuario(_, { id }){
        const selecionados = usuarios
        .filter(u => u.id === id)
        return selecionados ? selecionados[0] : null;
    },
    perfis(){
        return perfis;
    },
    perfil(_, { id }){
        const selecionados = perfis
        .filter(u => u.id === id);
        return selecionados ? selecionados[0] : null;
    }
}
