let allBooks = [];

function book(title, author, numberOfPages, finished) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.finished = finished;
}

function addBookToLibrary(book) {
    allBooks.push(book);
}

function displayBooks(array) { //creates a card for every object in varable allBooks
    let cardContainer = document.querySelector('.cardContainer');
    for (i = 0; i < array.length; i++) {
        let divContainer = document.createElement('div');
        divContainer.className = "bookCard";
        cardContainer.appendChild(divContainer);
        let title = document.createElement('h1');
        title.className = "title";
        divContainer.appendChild(title)
        let content1 = document.createElement('p');
        content1.className = "content1";
        divContainer.appendChild(content1);
        let content2 = document.createElement('p');
        content2.className = "content2"
        divContainer.appendChild(content2);
        title.textContent = `${array[i].title}`
        content1.textContent = `By ${array[i].author}`
        content2.textContent = `${array[i].numberOfPages} pages`
    }
}

function displayBooksTest(singleObject) { //creates a card for just the book submitted by the user
    let cardContainer = document.querySelector('.cardContainer');

    let currentObject = singleObject;

    let divContainer = document.createElement('div');
    divContainer.className = "bookCard";
    cardContainer.appendChild(divContainer);

    let trashButton = document.createElement('button');
    trashButton.className = "trashButton";
    trashButton.innerHTML = '<img src="img/icons8-trash-48.png">'
    divContainer.appendChild(trashButton)
    console.log(trashButton);
    trashButton.addEventListener("click", () => {
        trashButton.parentElement.remove();
        //console.log(singleObject.id);
        for (i=0; i < allBooks.length; i++) {
            if (allBooks[i].id == singleObject.id) {
                allBooks.splice(i, 1);
            }
        }
        console.log(allBooks)
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

    title.textContent = `${currentObject.title}`
    content1.textContent = `By ${currentObject.author}`
    content2.textContent = `${currentObject.numberOfPages} pages`
}

function openForm() {
    document.getElementById("formContainer").style.display = "block";
}

function closeForm() {
    document.getElementById("formContainer").style.display = "none";
}


function submitForm(v) {
    v.preventDefault();
    let book = {
        title: document.getElementById('title').value, 
        author: document.getElementById('author').value, 
        numberOfPages: document.getElementById('pages').value, 
        finished: document.getElementById('finished').value, 
        id: Math.floor(Math.random() * (100 - 1 + 1) + 1)
    }
    //console.log(book);
    allBooks.push(book);
    //console.log(allBooks);
    displayBooksTest(book);
    document.forms[0].reset();

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', submitForm);
    document.getElementById('submitBtn').addEventListener('click', closeForm);
});

function readToggle() {
    this.finished = !this.finished;
}

readToggle.prototype = Object.create(book.prototype);

