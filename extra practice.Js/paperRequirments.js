// count the total paper in three different books with books quantity.

function paperRequirments(book1Quantity, book2Quantity, book3Quantity){
    const paperPerBook1 = 100;
    const paperPerBook2 = 200;
    const paperPerBook3 = 300;

    const paperBook1 = book1Quantity * paperPerBook1;
    const paperBook2 = book2Quantity * paperPerBook2;
    const paperBook3 = book3Quantity * paperPerBook3;
    const totalPaper = paperBook1 + paperBook2 + paperBook3;
    return totalPaper;
}
const bookQuantity = paperRequirments(15, 10, 7);
console.log('Total paper require =', bookQuantity)