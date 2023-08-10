function findAddress(address) {
    if(typeof address !== 'object'){
        return "Please provide a valid object";
    }
    else{
        const street = address.street || '__,';
        const house = address.house || '__,';
        const society = address.society || '__';
        return street + house + society;
    }

}
const obj ={
    street: '10,',
    house: '15A,',
    society: 'Earth Perfect'
};

console.log(findAddress(obj));