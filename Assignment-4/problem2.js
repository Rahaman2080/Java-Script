function matchFinder(string1, string2) {
    if( typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'invalid input'
    }
    else{
        const findMatching = string1.includes(string2);
        return findMatching;
    }
}
console.log(matchFinder('John Doe', 'ohn'));
console.log(matchFinder('JavaScript', 'code'));
console.log(matchFinder('Peter Parker', 'Pen'));
console.log(matchFinder('Peter Parker', 'Pet'));