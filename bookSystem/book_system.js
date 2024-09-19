//An empty array to store book objects.
let books = [];
//keep track of which book is being edited. It starts at -1, meaning no book is being edited initially.
let editIndex = -1;

function addBook(){
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pageNumber = parseInt(document.getElementById("pagesNumber").value);

    //Ensures that pagesNumber is a valid number (using !isNaN(pagesNumber))
    if(bookName && authorName && bookDescription && !isNaN(pageNumber)) {
        const book = {
            name : bookName,
            authorName : authorName,
            bookDescription : bookDescription,
            pageNumber : pageNumber
        }

        //If no book is being edited (i.e., editIndex is -1), the new book is added to the books array.
        if (editIndex === -1) {
            books.push(book);
        //If a book is being edited (i.e., editIndex is not -1), the book at the editIndex position in the array is updated with the new data. After updating, editIndex is reset to -1 and the "Update Book" button is changed back to "Add Book" by calling resetButton().
        } else {
            books[editIndex] = book;
            editIndex = -1;
            resetButton();
        }
        showbooks();
        clearInputs()
    //If any field is empty or if pagesNumber is not a valid number, an alert prompts the user to fill in all fields correctly.
    } else {
        alert("Please fill in all fields correctly.")
    }

}

// Iterate through the books object
function showbooks() {
    const booksDiv = books.map((book, index) =>
        `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name:</strong> ${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Boook Description:</strong> ${book.bookDescription}</p>
        <p><strong>Number of Pages:</strong> ${book.pageNumber} page(s)</p>
        <button onclick="editbook(${index})" class="btn btn-danger btn-sm" style="margin-bottom: 55px;">Edit</button>
        <button onclick="deletebook(${index})" class="btn btn-danger btn-sm" style="margin-bottom: 55px;">Delete</button>`
    )

    document.getElementById('books').innerHTML = booksDiv.join("");

}

function deletebook(del) {
    //removes a book from the books array at the specified index and then refreshes the book list by calling showbooks().
    books.splice(del, 1);
    showbooks();
}

function editbook(index) {
    //Retrieve book data from existing data
    const book = books[index];

    //populate the input fields with the data of the book to be edited.
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pageNumber;

    editIndex = index;

    //Replace Add Book button to Update Book using querryselector
    const addButton = document.querySelector('button[onclick="addBook()"]');
    addButton.textContent = 'Update Book';
    addButton.onclick = addBook;

}

//This function resets the "Update Book" button back to "Add Book" once editing is done.
function resetButton() {
    const addButton = document.querySelector('button[onclick="addBook()"]');
    addButton.textContent = 'Add Book';
    addButton.onclick = addBook;
}

//clears all the input fields after a book is added or updated.
function clearInputs() {
    document.getElementById('bookName').value = "";
    document.getElementById('authorName').value = "";
    document.getElementById('bookDescription').value = "";
    document.getElementById('pagesNumber').value = "";
}
