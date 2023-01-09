import alunos from "./dadosAlunos.js";
import {filtraAlunosMaiores, retornaNomesAlunos, imprimeNomesAlunos} from "./trataDadosAlunos.js";

let alunosMaiores = filtraAlunosMaiores(alunos);
let nomesAlunos = retornaNomesAlunos(alunosMaiores);
imprimeNomesAlunos(nomesAlunos);