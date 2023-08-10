// write the price of the books that you have. display the price if the price which are only lower than 200

let books = [320, 180, 210, 230, 170, 150, 350, 100];
for(let i =0; i < books.length; i++){
    let book = books[i];
    if( book > 200){
        continue;
    }
    console.log(book);
}