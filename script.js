//new class constuctor that creates the book object
class bookCreate {
    constructor(title, author, numberOfPages, finished=false, id) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.finished = finished;
    this.id = id;
    }
}

//new class with library database and methods for adding and removing
class library {
    constructor() {
        this.allBooks = [];
    }

    deleteBook(book) {
        for (let i=0; i < allBooks.length; i++) {
            if (book.title === allBooks[i].title) {
                this.allBooks.splice(i, 1);
            }
        }
    }

    addBook(book) {
        this.allBooks.push(book);
    }

    getBook(title) {
        return this.books.find((book) => book.title === title)
    }
}

const firstLibrary = new library();

function displayBooksTest(bookTitle, author, number, finished, id) { //creates a card for just the book submitted by the user
    let cardContainer = document.querySelector('.cardContainer');

    //let currentObject = singleObject;

    let divContainer = document.createElement('div');
    divContainer.className = "bookCard";
    cardContainer.appendChild(divContainer);

    let trashButton = document.createElement('button');
    trashButton.className = "trashButton";
    trashButton.innerHTML = '<img src="img/icons8-trash-48.png">'
    divContainer.appendChild(trashButton)
    trashButton.addEventListener("click", () => {
        trashButton.parentElement.remove();
        //console.log(singleObject.id);
        for (i=0; i < firstLibrary.allBooks.length; i++) {
            if (firstLibrary.allBooks[i].id == id) {
                firstLibrary.allBooks.splice(i, 1);
            }
        }
        console.log(firstLibrary.allBooks)
    });

    let title = document.createElement('h1');
    title.className = "title";
    divContainer.appendChild(title);

    let content1 = document.createElement('p');
    content1.className = "content1";
    divContainer.appendChild(content1);

    let content2 = document.createElement('p');
    content2.className = "content2";
    divContainer.appendChild(content2);

    let toggleLabel = document.createElement('label');
    toggleLabel.setAttribute('for', 'switch');
    toggleLabel.className = "toggleLabel";
    divContainer.appendChild(toggleLabel);

    let toggleContainer = document.createElement('label');
    toggleContainer.setAttribute('id', "switch");
    toggleContainer.className = "switch";
    toggleContainer.setAttribute('for', 'toggle');
    divContainer.appendChild(toggleContainer);

    let toggle = document.createElement('input');
    toggle.setAttribute('type', 'checkbox');
    toggle.setAttribute('id', "toggle");
    toggleContainer.appendChild(toggle);
    

    let slider = document.createElement('span');
    slider.className = 'slider';
    toggleContainer.appendChild(slider);

    title.textContent = `${bookTitle}`;
    content1.textContent = `By ${author}`;
    content2.textContent = `${number} pages`;
    toggleLabel.textContent = "Read";
    toggle.addEventListener('click', readToggle(finished));
}

function openForm() {
    document.getElementById("formContainer").style.display = "block";
}

function closeForm() {
    document.getElementById("formContainer").style.display = "none";
}


function submitForm(v) {
    v.preventDefault();

    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    numberOfPages = document.getElementById('pages').value;
    finished = document.getElementById('finished').value;
    id = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    console.log(title, author, numberOfPages, finished)
    newBook = new bookCreate(title, author, numberOfPages, finished, id)

    firstLibrary.addBook(newBook);
    console.log(firstLibrary.allBooks)
    displayBooksTest(title, author, numberOfPages, finished, id);
    document.forms[0].reset();

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', submitForm);
    document.getElementById('submitBtn').addEventListener('click', closeForm);
});

function readToggle() {
    this.finished = !this.finished;
}

//need to work on local storage

//function localStorage(array) {
//     window.localStorage;
//     if(!localStorage.getItem('array')) {
//         //runsomething to fill the l0cal storage
//     } else {
//         //apply what is already saved in storage
//     }
// }