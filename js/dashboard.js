


let alunos = [
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

carregarAlunos(alunos)


function carregarAlunos(alunos) {
  tabela.innerHTML = alunos.map((aluno, index) => {
    const rowBg = index % 2 === 0
      ? "bg-[#0F172A]"
      : "bg-[#111827]";

    const statusStyle = {
      "Ativo": "bg-purple-600/20 text-purple-400",
      "Trancado": "bg-yellow-600/20 text-yellow-400",
      "Formado": "bg-blue-600/20 text-blue-400"
    };

    return `
    <tr key=${index} class="grid grid-cols-6 items-center px-8 py-5 border-b border-purple-900/20 ${rowBg} hover:bg-purple-900/20 transition duration-300">
      <td class="flex items-center gap-3 font-medium text-white">
        <div class="w-9 h-9 rounded-full bg-linear-to-br from-purple-600 to-violet-500 
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

      <td class="text-left text-gray-500 hover:text-purple-400 cursor-pointer transition">
        <i class="fa-regular fa-pen-to-square" onclick="handleEdit(${aluno.id})"></i>
      </td>
    </tr>
  `;
  }).join("");
}

function handleAdd() {
  const nome = document.getElementById("nome").value
  const matricula = document.getElementById("matricula").value
  const curso = document.getElementById("curso").value
  const idade = document.getElementById("idade").value
  const modal = document.getElementById("my_modal_2")
  const status = document.getElementById("status").value
  const titleModal = document.querySelector("#titleModal")

  if (EditingAluno) {
    const aluno = alunos.find((a) => a.id === EditingAluno)

    aluno.nome = nome
    aluno.matricula = matricula
    aluno.curso = curso
    aluno.idade = idade
    aluno.status = status

    modal.style.display = "none";
    EditingAluno = null
    titleModal.innerHTML = "Adicionar Aluno"
    carregarAlunos()
  } else {
    const novoId = alunos.length + 1
    const novoAluno = { id: novoId, nome, matricula, curso, idade, status: "Ativo" }
    console.log(novoAluno)
    alunos.push(novoAluno)
    modal.style.display = "none";
    console.log(alunos)
    carregarAlunos()
  }
}

let EditingAluno = null
function handleEdit(id) {
  const tabela = document.getElementById('tabela')
  const nome = document.getElementById("nome")
  const matricula = document.getElementById("matricula")
  const curso = document.getElementById("curso")
  const idade = document.getElementById("idade")
  const modal = document.getElementById("my_modal_2")
  const status = document.getElementById("status")
  const titleModal = document.querySelector("#titleModal")

  console.log(id)
  const aluno = alunos.find((a) => a.id === id)
  console.log(aluno)
  console.log(titleModal)
  titleModal.innerHTML = "Editar Aluno"


  nome.value = aluno.nome,
    matricula.value = aluno.matricula,
    curso.value = aluno.curso,
    idade.value = aluno.idade,
    status.value = aluno.status



  EditingAluno = id;

  status.style.display = 'block';

  modal.showModal()


  console.log(titleModal)
}

function handleClose() {
  const modal = document.querySelector("#my_modal_2")
  modal.style.display = "none";
}

function handleStatus() {
  const status = document.querySelector("#statusFilter").value
  
  const alunosFiltrados = alunos.filter((a)=> a.status === status)


  console.log(alunos)

  carregarAlunos(alunosFiltrados)

}

