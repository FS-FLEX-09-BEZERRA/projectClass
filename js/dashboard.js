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


tabela.innerHTML = alunos.map((aluno, index) => {

  const rowBg = index % 2 === 0
    ? "bg-[#0F172A]"
    : "bg-[#111827]";

  const statusStyle = {
    "Ativo": "bg-purple-600/20 text-purple-400",
    "Trancado": "bg-yellow-600/20 text-yellow-400",
    "Formando": "bg-blue-600/20 text-blue-400"
  };

  return `
    <tr class="grid grid-cols-6 items-center px-8 py-5 border-b border-purple-900/20 ${rowBg} hover:bg-purple-900/20 transition duration-300">
      <td class="flex items-center gap-3 font-medium text-white">
        <div class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 
                    flex items-center justify-center text-xs font-bold">
          ${aluno.nome.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        ${aluno.nome}
      </td>

      <td class="text-gray-300">${aluno.matricula}</td>
      <td class="text-gray-300">${aluno.curso}</td>
      <td class="text-gray-300">${aluno.idade}</td>

      <td>
        <span class="px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[aluno.status]}">
          ${aluno.status}
        </span>
      </td>

      <td class="text-right text-gray-500 hover:text-purple-400 cursor-pointer transition">
        ▾
      </td>
    </tr>
  `;
}).join("");