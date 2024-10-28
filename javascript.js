const myLibrary = [];
const newBook = document.querySelector('.new-book')
const dialog = document.querySelector('dialog')
const closeButton = document.querySelector('.close')
const submitButton = document.querySelector('button[type="submit"]')

theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 295, false)
myLibrary.push(theHobbit);
harryPotter =new Book('Harry Potter', "J.K. Rowling", 400, true);
myLibrary.push(harryPotter)

displayBooks();

newBook.addEventListener('click', () => {
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    dialog.close();
})

submitButton.addEventListener('click', () => {
    
    event.preventDefault()
})

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
        let height = myLibrary[i].pages / 6
        book.style.height = height + 'px'
        if (myLibrary[i].read === true) {
            book.style.border = '3px solid lightgreen';
        }
        book.appendChild(title)
        book.appendChild(author)
        library.appendChild(book)
    }
}

function addBookToLibrary(book) {
    //
}


