let email = "exemplo@devmedia.com.br";

let dominio = (email.substr(6).valueOf('').indexOf("@") + 1);

console.log(dominio);