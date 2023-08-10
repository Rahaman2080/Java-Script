// find the largest name using function called bestFriend which parameter will take an array. The array has some names.return the largest name.

function bestFriend(namesArray){
    let largestName = namesArray[0];
    for(let i = 1; i < namesArray.length; i++){
        const name = namesArray[i].length;
        if(name > largestName.length){
            largestName = namesArray[i];
        }
    }
    return largestName;
}
const friendsArray = ['Sajid', 'Ashraf', 'Sakib-Al-Hasan', 'Ifthekhar Uddin Tahasin', 'Mamunor Rahman'];
const theLargestName = bestFriend(friendsArray);
console.log('The largest name is -->',theLargestName);