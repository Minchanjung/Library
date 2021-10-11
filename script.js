let allBooks = [
{title: 'hi', 
author: 'Bob', 
numberOfPages: '111', 
finished: true}, 
{title: 'Hunger Games', 
author: 'Suzanne Collins', 
numberOfPages: "220", 
finished: true}
];

function book(title, author, numberOfPages, finished) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.finished = finished;
}

function addBookToLibrary(book) {
    allBooks.push(book);
}

function displayBooks(array) {
    let cardContainer = document.querySelector('.cardContainer');
    for (i = 0; i < array.length; i++) {
        let divContainer = document.createElement('div');
        divContainer.className = "bookCard";
        cardContainer.appendChild(divContainer);
        let title = document.createElement('h1');
        title.className = "title";
        divContainer.appendChild(title)
        let content = document.createElement('p');
        content.className = "content";
        divContainer.appendChild(content);
        title.textContent = `${array[i].title}`
        content.textContent = `By ${array[i].author} ${array[i].numberOfPages} pages`
    }
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
        finished: document.getElementById('finished').value
    }
    console.log(book);
    allBooks.push(book);
    console.log(allBooks);
    displayBooks(allBooks);
    document.forms[0].reset();

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', submitForm);
});

