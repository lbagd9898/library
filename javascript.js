const myLibrary = [];

theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 295, false)
myLibrary.push(theHobbit);
harryPotter =new Book('Harry Potter', "J.K. Rowling", 300, true);
myLibrary.push(harryPotter)

displayBooks();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

function displayBooks() {
    const library = document.querySelector('.books')
    for (i = 0; i < myLibrary.length; i++) {
        let title = document.createElement('p')
        title.textContent = myLibrary[i].title
        let author = document.createElement('p')
        author.textContent = myLibrary[i].author
        let book = document.createElement('div')
        book.classList.add('book')
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        book.style.backgroundColor = '#' + randomColor;
        book.appendChild(title)
        book.appendChild(author)
        library.appendChild(book)
    }
}

function addBookToLibrary() {
    //
}


