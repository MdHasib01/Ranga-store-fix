// search button onclick function 
const searchBook = ()=>{
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    // console.log(inputFieldText);
    searchField.value=''
    const url =`http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearch(data))
};

const displaySearch = booksData =>{
    const books=booksData.docs
    console.log(booksData.numFound)
    books.forEach(book => {
        console.log(book)
       const displayBook = document.getElementById('display-book');
       const div = document.createElement('div');
       div.classList.add('book-card')
       div.innerHTML=`
       <img src="${`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}" alt="">
       <p class=" text-center">Book Nanme: ${book.title}</p>
       <p>${book.author_name}</p>
       <p>${book.publish_year}</p>

       
      
       `;
       displayBook.appendChild(div)
    });
}