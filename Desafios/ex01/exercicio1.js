const { gets, print } = require('./funcoes-auxiliares-ex1');

const mediaAluno = gets();

if ((mediaAluno >= 0) && (mediaAluno < 5)) {
    console.log('Reprovado');
} else if ((mediaAluno >= 5) && (mediaAluno < 7)) {
    console.log('Recuperação');
} else if ((mediaAluno >= 7) && (mediaAluno <= 10)) {
    console.log('Aprovado');
} else {
    console.log('Erro');
}
