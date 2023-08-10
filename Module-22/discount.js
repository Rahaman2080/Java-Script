/*
১.যদি টিকেটের সংখ্যা ১০০ এর কম হয়, তাহলে প্রতিটি টিকেটের মূল্য ১০০ টাকা,
২. যদি টিকেটের সংখ্যা ১০০ এর বেশি এবং ২০০ এর কম হয়, তাহলে ১০০ এর পরে অবশিষ্ট     প্রতিটি টিকিটের মূল্য ৯০ টাকা
৩. যদি টিকেটের সংখ্যা ২০০ এর বেশি হয় তাহলে প্রতিটি টিকিটের মূল্য ৭০ টাকা
first 100 ---> 100tk
101-200 ---> 90tk
200+ ---> 70tk

*/ 
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100 ){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    if(ticketQuantity <= 200 ){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice =first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price =100 * second100Rate;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const costs =ticketPrice(220);
console.log('Total cost =', costs, 'tk.');