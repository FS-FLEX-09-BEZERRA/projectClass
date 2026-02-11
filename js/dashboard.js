const tabela = document.getElementById('tabela')
let alunos = [
  {
    id: 1,
    nome: "Samuel",
    ativo: true
  }, 
  {
    id: 2,
    nome: "Mariana",
    ativo: true
  }, 
  {
    id: 3,
    nome: "Tiago",
    ativo: false
  }, 
]


alunos.map((aluno)=> (
  tabela.innerHTML += `
  <tr>
    <td>${aluno.id}</td>
    <td>${aluno.nome}</td>
    <td>${aluno.ativo}</td>
  </tr>
  `
))