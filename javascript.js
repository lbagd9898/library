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
    let name = document.querySelector('#name').value;
    let author = document.querySelector('#author').value;
    let pages = Number(document.querySelector('#pages').value);
    let read = document.querySelector('#read').checked;
    console.log(typeof read)
    newRead = new Book(name, author, pages, read);
    myLibrary.push(newRead);
    addBookToLibrary(newRead);
    document.querySelector('form').reset();
    console.log(myLibrary)
    dialog.close();
    
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
        book.classList.add(i)
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        book.style.backgroundColor = '#' + randomColor;
        let height = myLibrary[i].pages / 6
        book.style.height = height + 'px'
        if (myLibrary[i].read === true) {
            book.style.border = '3px solid lightgreen';
        }
        read = document.createElement('button');
        read.textContent = 'Read'
        read.classList.add('read')
        read.setAttribute('id', i)
        remove = document.createElement('button');
        remove.textContent = 'Remove'
        remove.classList.add('remove')
        remove.setAttribute('id', i)
        book.appendChild(title)
        book.appendChild(read)
        book.appendChild(remove)
        book.appendChild(author)
        library.appendChild(book)
    }
}

function addBookToLibrary(book) {
    const library = document.querySelector('.books')
    const index = myLibrary.length -1;
    console.log(index)
    let title = document.createElement('p')
        title.textContent = book.title
        let author = document.createElement('p')
        author.textContent = book.author
        let bookDiv = document.createElement('div')
        bookDiv.classList.add('book')
        bookDiv.classList.add(index)
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        bookDiv.style.backgroundColor = '#' + randomColor;
        let height = Math.max(30, (book.pages / 6));
        bookDiv.style.height = height + 'px'
        if (book.read === true) {
            bookDiv.style.border = '3px solid lightgreen';
        }
        read = document.createElement('button');
        read.textContent = 'Read'
        read.classList.add('read')
        read.setAttribute('id', index)
        remove = document.createElement('button');
        remove.textContent = 'Remove'
        remove.classList.add('remove')
        remove.setAttribute('id', index)
        bookDiv.appendChild(title)
        bookDiv.appendChild(read)
        bookDiv.appendChild(remove)
        bookDiv.appendChild(author)
        library.appendChild(bookDiv)
}

document.querySelectorAll('.read').forEach(function(button){
    button.addEventListener('click', () => {
        console.log('hi')
        let id = button.getAttribute('id');
        elements = document.getElementsByClassName(id);
        if (myLibrary[id].read === false) {
            elements[id].style.border = '3px solid lightgreen';
            Object.defineProperty(myLibrary[id], 'read', {value: true})
        }
    })
})

document.querySelectorAll('.remove').forEach(function(button) { 
    button.addEventListener('click', () => {
        let id = button.getAttribute('id');
        elements = document.getElementsByClassName(id);
        elements[0].remove();
    })
})


