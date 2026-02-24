const tabela = document.getElementById('tabela')


const alunos = [
  {
    id: 1,
    nome: "Ana Silva",
    matricula: "2023001",
    curso: "Engenharia",
    idade: 21,
    status: "Ativo"
  },
  {
    id: 2,
    nome: "Carlos Souza",
    matricula: "2023002",
    curso: "Direito",
    idade: 24,
    status: "Trancado"
  },
  {
    id: 3,
    nome: "Mariana Lima",
    matricula: "2023003",
    curso: "Medicina",
    idade: 22,
    status: "Formado"
  },
  {
    id: 4,
    nome: "Lucas Andrade",
    matricula: "2023004",
    curso: "Arquitetura",
    idade: 23,
    status: "Ativo"
  }
];

const statusColor = {
    "Ativo": "bg-green-900 text-green-300",
    "Trancado": "bg-yellow-900 text-yellow-300",
    "Formado": "bg-blue-900 text-blue-300"
  };

tabela.innerHTML = alunos.map((aluno, index) => (
  `
      <tr class="
        ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}
        hover:bg-purple-900/40
        transition duration-300
      ">
        <td class="px-6 py-4 font-medium text-purple-300">${aluno.nome}</td>
        <td class="px-6 py-4 text-gray-400">${aluno.matricula}</td>
        <td class="px-6 py-4 text-gray-400">${aluno.curso}</td>
        <td class="px-6 py-4 text-gray-400">${aluno.idade}</td>
        <td class="px-6 py-4">
          <span class="px-3 py-1 text-xs rounded-full font-semibold ${statusColor[aluno.status]}">
            ${aluno.status}
          </span>
        </td>
      </tr>
    `
)).join("");