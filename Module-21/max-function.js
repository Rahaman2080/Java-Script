// find out maximum number using function with if-else

const jim = 84;
const dela = 90;
const chinku = 97;

function maxTopper(jim, dela, chinku){
    if ( jim > dela && jim > chinku){
        return 'Jim will get the cake.';
    }
    else if ( dela > jim && dela > chinku){
        return 'Dela will get the cake.';
    }
    else {
         return 'Chinku will get the cake';
    }
}
const whogets = maxTopper(jim, dela, chinku);
// console.log(whogets);

// find out maximum number using function with Math.max()

function whoWillGet (Jim, Dela, Chinku){
    return Math.max(Jim, Dela, Chinku);
}
const result = whoWillGet (jim, dela, chinku);
console.log(result);