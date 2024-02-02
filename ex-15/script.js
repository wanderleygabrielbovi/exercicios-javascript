var JSON_faculdade = {
    nomeDoCurso: "Análise e Desenvolvimento de Sistemas",
    materia: "Front-End",
    professor: "Guilherme Vicentini",
    idAluno: 1524
}

function toObject(json) {
    console.log(JSON.parse(json));
}

toObject(JSON.stringify(JSON_faculdade));