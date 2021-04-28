let library = []

function Book(title,author,pages,status){
    this.title = title;
    this.author = author;
    this.pages  = pages;
    this.status = status;
}

Book.prototype.createCard = function(){

    const container = document.querySelector('#container');

    const div = document.createElement('div');
    div.classList.add('column');

    container.insertBefore(div,container.childNodes[0])

    const card = document.createElement('div');
    card.classList.add('card');

    div.appendChild(card);

    const bookName = document.createElement('h');
    bookName.innerText = this.title ;
    bookName.style.fontWeight = "bold";

    const authName = document.createElement('p');
    authName.innerText = "by " + this.author;

    const totPages = document.createElement('p');
    totPages.innerText = "Pages: " + this.pages;

    card.appendChild(bookName);
    card.appendChild(authName);
    card.appendChild(totPages);

    const statBtn = document.createElement('button');
    statBtn.innerText = this.status;
    statBtn.classList.add('statBtn');

    const remBtn = document.createElement('button');
    remBtn.innerText = "remove";
    remBtn.classList.add('remBtn');

    card.appendChild(statBtn);
    card.appendChild(remBtn);

    statBtn.addEventListener('click', () => {
        if(this.status == "read"){
        this.status = "not read";
        statBtn.innerText = this.status;
        console.log(this.status)
        }
        else{
        this.status = "read";
        statBtn.innerText = this.status;
        console.log(this.status)
        }
    });

    remBtn.addEventListener('click', () => {
        div.removeChild(card)
        container.removeChild(div)
        let index;
        for(const prop in library){
            if(library[prop].title == this.title && 
                library[prop].author == this.author &&
                library[prop].pages == this.pages &&
                library[prop].status == this.status){
                    index = prop
                    console.log(index)
                }
        }
        library.splice(index,1)
        console.log(library)
    });
}

function addBookToLibrary() {
    const titleTag = document.getElementById('title')
    const authorTag = document.getElementById('author')
    const pagesTag = document.getElementById('pages')
    const statusTag = document.querySelector('#status')

    if(title.validity.valid && 
        author.validity.valid &&
        pages.validity.valid ){
    
    let title = titleTag.value;
    let author = authorTag.value;
    let pages = parseInt(pagesTag.value);
    let status = statusTag.value;

    if(document.querySelector('#status').checked == false){status = "not read"}

    library.push({title: title, author: author, pages: pages, status: status});

    new Book(title,author,pages,status).createCard()
    console.log(library);
    form.style.display = 'none';
    form.reset();
    }
    
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',() => {
    let form = document.getElementById('form');
    form.style.display = 'block';
})

function libLoop(){
    for (const prop in library) {
        console.log(library[prop]);
        new Book(library[prop].title,library[prop].author,library[prop].pages,library[prop].status).createCard();;
    } 
}

libLoop()
