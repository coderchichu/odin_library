// 210706 Author: Stephen H, Javascript for Library project for OdinProject

let myLibrary = [];

function Book(title, author, pages, read) {
    //the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? "✅" : "❌"
}

function addBookToLibrary(book) {
   return myLibrary.push(book);
}

function render(myLibrary) {
    const library = document.getElementById('library');
    library.innerHTML = "";
    /*const oldBooks = document.querySelectorAll('li');
    library.removeChild(Array.from(oldBooks));
    //oldBooks.remove();*/
    for (let book of myLibrary) {
        let card = document.createElement('div');

        card.classList.add('card');

        Object.keys(book).forEach(prop => card.append(`${prop}: ${book[prop]} \n`));

        library.append(card);
    }
}

const lol = new Book("lol", "sh", "178", true);
addBookToLibrary(lol);

const hehe = new Book("hehe", "sH", "69", false);
addBookToLibrary(hehe);

render(myLibrary);

const btn = document.getElementById('addBook');
btn.addEventListener('click', () => {
    let title = document.getElementById('bookForm').elements['title'];
    let author = document.getElementById('bookForm').elements['author'];
    let pages = document.getElementById('bookForm').elements['pages'];
    let read = document.getElementById('bookForm').elements['read'];

    addBookToLibrary(new Book(title.value, author.value, pages.value, read.checked));

    render(myLibrary);

    console.log(title);

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});