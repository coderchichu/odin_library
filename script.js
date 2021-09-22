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

/*function addBookToLibrary(book) {
    return myLibrary.push(book);
 }*/

function render(myLibrary) {
    const library = document.getElementById('library');

    //resetting the render; doesn't cause render to be additive
    library.innerHTML = "";

    for (let [index, book] of myLibrary.entries()) {
        let card = document.createElement('div');
        let closeBtn = document.createElement('button');

        //giving the card a class of "card"
        card.classList.add('card');
        card.id = index;

        //creating a close button
        closeBtn.title = "click to delete";
        closeBtn.innerText = 'x';
        closeBtn.id = index;

        /*
        //giving a global link to the card, can make it link someone if req'd
        link.href = "#no";
        link.id = index;
        link.onclick = "toggleRead()";
        link.innerText = "yoza"; //not needed ofc lmao
        */

        //giving all the properties to our card
        Object.keys(book).forEach(prop => card.append(`${prop}: ${book[prop]} \n`));

        //appending our elements to the card
        card.appendChild(closeBtn);

        //appending our card into the library
        library.append(card);
    }
}

const lol = new Book("lol", "sh", "178", true);
addBookToLibrary(lol);

const hehe = new Book("hehe", "sH", "69", false);
addBookToLibrary(hehe);

render(myLibrary);

//add book to library
const btn = document.getElementById('addBook');
btn.addEventListener('click', () => {
    let title = document.getElementById('bookForm').elements['title'];
    let author = document.getElementById('bookForm').elements['author'];
    let pages = document.getElementById('bookForm').elements['pages'];
    let read = document.getElementById('bookForm').elements['read'];

    addBookToLibrary(new Book(title.value, author.value, pages.value, read.checked));

    render(myLibrary);

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});

//toggle read function and delete book function
function toggleRead(evt) {

    let chosen = evt.target.nodeName;
    let bookId = evt.target.id;

    if (chosen === "DIV") {
        let read = myLibrary[bookId].read;
        myLibrary[bookId].read = read === '✅' ? '❌' : '✅';
    }

    if (chosen === "BUTTON") {
        myLibrary.splice(bookId,1);
    }

    render(myLibrary);
}

const ul = document.querySelector('ul');
ul.addEventListener('click', toggleRead, false);
