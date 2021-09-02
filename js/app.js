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
// no result error function
const resultNone = displayStyle=>{document.getElementById('no-result').style.display=displayStyle;
}

const displaySearch = booksData =>{
    const books=booksData.docs

        //search volume display
        const searchVolume = document.getElementById('search-volume')
        searchVolume.textContent=''
        const p = document.createElement('p')
        p.innerText=`Result Found: ${booksData.numFound}`;
        searchVolume.appendChild(p)


        //no result error
        if(booksData.numFound===0){
            resultNone('block')
            document.getElementById('search-volume').style.display='none'
        }
        else{
            resultNone('none')
            document.getElementById('search-volume').style.display='block'
        }


        //clear search result
        const displayBookResult = document.getElementById('display-book');
        displayBookResult.textContent=''


    books.forEach(book => {
        console.log(book)
       const displayBook = document.getElementById('display-book');
       const div = document.createElement('div');
       div.classList.add('book-card')
       div.innerHTML=`
       <img src="${`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}" alt="">
       <h3>Book Name: ${book.title}</h3>
       <p>Author Name: ${book.author_name?.[0]}</p>
       <p>Publish Year: ${book.publish_year?.[0]}</p>
       `;
       displayBook.appendChild(div)
    });
}