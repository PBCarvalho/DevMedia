import mangas from "./dadosManga.js";
import verificaEditora from "./filtraEditora.js";

let mangasPanini = mangas.filter(verificaEditora);

mangasPanini.forEach(manga => {
 console.log(manga.titulo);
});