
let BDUser = [
  {
    nome: "Nayara",
    email: "queiroz.14@hotmail.com",
    telefone: "85 9 9999-9999",
    password: "1234"
  },
  {
    nome: "Daniele",
    email: "dani@hotmail.com",
    telefone: "85 9 9999-9999",
    password: "5678"
  },
  {
    nome: "Samuel",
    email: "samuel@hotmail.com",
    telefone: "85 9 9999-9999",
    password: "9101112"
  },
  {
    nome: "Beatriz",
    email: "beatriz@hotmail.com",
    telefone: "85 9 9999-9999",
    password: "13141516"
  },
  {
    nome: "João",
    email: "joao@hotmail.com",
    telefone: "85 9 9999-9999",
    password: "17181920"
  }
]

console.log(BDUser[0].email)


function login() {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value


let naoEncontrado = true
let tentativas = 3
  for (let i = 0; i < BDUser.length;i++) {
    console.log("usuario:", BDUser[i])
    if (email === BDUser[i].email && password === BDUser[i].password) {
      alert("Login efetuado com sucesso")
      naoEncontrado = false
      break;
    } 
  }
  console.log(naoEncontrado)
  while (tentativas >= 1) {
    if (naoEncontrado) {
    alert("email ou senha incorretos")
    tentativas--
    }
    if (tentativas === 0) {
    alert("Você excedeu o número de tentativas. Tente novamente daqui 10 minutos")
    }
  }
}