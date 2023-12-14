// Design an online bookstore system using object-oriented principles.


// The Author constructor should take name, birthYear, and nationality as arguments.


let container=document.querySelector("#container ")

function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}


// The Book constructor should take title, author (an Author object), genre, and price as arguments.

function Book(title, Author, genre, price) {
    this.title = title;
    this.author = Author;
    this.genre = genre;
    this.prince = price;
}


// getBookInfo - to print the book's title, author's name, genre, and price.

Book.prototype.getBookInfor = function () {
    console.log(this.title, this.author, this.genre, this.prince)
}

// Creating instances of Author
const author1 = new Author('J.K. Rowling', 1965, 'British');
const author2 = new Author('George R.R. Martin', 1948, 'American');
const author3 = new Author('Harper Lee', 1948, 'American');
const author4 = new Author('F.Scott Fitzgerald', 1948, 'American');
const author5 = new Author('George Orwell', 1948, 'American');
const author6 = new Author('J.D.Salinger', 1948, 'American');
const author7 = new Author('Jane Austen', 1948, 'American');
const author8 = new Author('J.K.Rowling', 1948, 'American');

// Creating instances of Book
const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, 'Fantasy', 20.99);
const book2 = new Book('A Game of Thrones', author2, 'Fantasy', 25.50);
const book3 = new Book('To Kill a Mockingbird', author2, 'Classic', 30.50);
const book4 = new Book('The Great Gatsby', author2, 'Fiction', 90.50);
const book5 = new Book('"1984"', author2, 'Dystopian', 50.50);
const book6 = new Book('The Catcher-of-age-,Fiction', author2, 'Comic-of-age,Fiction', 55.50);
const book7 = new Book('Pride and Prejudice', author2, 'Classic,Romance', 67.50);
const book8 = new Book('The Harry Potter Series', author2, 'Fantasy', 77.50);

let Arr = []
Arr.push(book1, book2, book3, book4, book5,book6,book7,book8)

Arr.map((ele) => {
    
    let Div=document.createElement("div")
    let h1=document.createElement("h1")
    let H1=document.createElement("h1")
    let h3=document.createElement("h3")
    h1.innerText=ele.title
    H1.innerText=ele.genre
    h3.innerText=ele.prince
    
    Div.append(h1,H1,h3,)
   
    container.append(Div)


   

})


book6.getBookInfor()

