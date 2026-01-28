
let BDUser = [
  {
    email: "queiroz.14@hotmail.com",
    password: "1234"
  }
]

console.log(BDUser[0].email)


function login() {
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  if (email === BDUser[0].email && password === BDUser[0].password) {
      alert("Login efetuado com sucesso")
  } else {
    alert("Email ou senha incorretos")
  }
}