
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

  for (let i = 0; i < BDUser.length;) {  
    console.log("usuario:", BDUser[i])
  if (email === BDUser[i].email && password === BDUser[i].password) {
    window.location.href = './pages/dashboard.html'
    break;
  }
  i++
  if (i === BDUser.length) {
    alert("Email ou senha incorretos")
  }
}
}