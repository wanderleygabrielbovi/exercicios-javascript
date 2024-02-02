var infoslivro = {
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    autor: "J. K. Rowling",
    anoPublicação: "1999",
    genero: "Fantasia",
    ISBN: "9788869186127"
}

function printBook(livro) {
    console.log("Título: " + livro.titulo);
    console.log("Autor: " + livro.autor);
    console.log("Ano de Publicação: " + livro.anoPublicação);
    console.log("Gênero: " + livro.genero);
    console.log("ISBN: " + livro.ISBN);
}

printBook(infoslivro);