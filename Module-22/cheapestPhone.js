const phones = [
    {name: 'Samsung', camera: '16', storage: '128', price: 33000, color: 'golden'},
    {name: 'Oppo', camera: '16', storage: '128', price: 28000, color: 'Pearl'},
    {name: 'Xiaomi', camera: '16', storage: '256', price: 35000, color: 'Silver'},
    {name: 'Iphone', camera: '16', storage: '128', price: 83000, color: 'green'},
    {name: 'Vivo', camera: '16', storage: '128', price: 20000, color: 'glassy'}
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }

    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);