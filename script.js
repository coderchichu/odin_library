// 210706 Author: Stephen H, Javascript for Library project for OdinProject

let myLibrary = [];

function Book(title, author, pages, read) {
    //the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    return myLibrary.push(book)
}

function render(myLibrary) {
    const library = document.getElementById('library');
    for (let book of myLibrary) {
        let card = document.createElement('li');

        Object.keys(book).forEach(prop => console.log(`${prop}: ${book[prop]}`));

        card.append('h2');
        library.append(card);
    }
}

const lol = new Book("lol", "sh", "178", true);
addBookToLibrary(lol);

const hehe = new Book("hehe", "sH", "69", false);
addBookToLibrary(hehe);

render(myLibrary);
