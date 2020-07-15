const usuarios = [
    {
        id: 1,
        nome: 'Joao',
        email: 'joao@joao.com',
        idade: 18,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: 2,
        nome: 'Maria',
        email: 'maria@maria.com',
        idade: 20,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: 3,
        nome: 'Kaue',
        email: 'kaue@kaura.com',
        idade: 28,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
]

const perfis = [
    {
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
]

module.exports = {
    usuarios, perfis
}
