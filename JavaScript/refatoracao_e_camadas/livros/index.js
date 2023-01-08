import livros from "./dados.Livros.js";
import verificaAutor from "./filtraAutor.js";

let livrosMakotoShinkai = livros.filter(verificaAutor);

livrosMakotoShinkai.forEach(livro => {
    console.log(livro.titulo);
});