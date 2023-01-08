import paginas from "./paginas.js";
import verificaMaisAcessadas from "./paginasMaisAcessadas.js";

let paginasMaisAcessadas = paginas.filter(verificaMaisAcessadas);

paginasMaisAcessadas.forEach(pagina => {
    console.log(pagina.pagina.toUpperCase());
});