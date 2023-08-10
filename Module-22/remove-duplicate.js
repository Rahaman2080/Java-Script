const friends = ['Ripon', 'Rony', 'Sajjad', 'Korim', 'Rahman', 'Riyad', 'Sajjad', ' Ripon', 'Korim', 'Morshed', 'Keya', 'Ripon', 'Rony', 'Riyad', 'Rahman'];

function removeDuplicate(names){
    const unique =[];
    for (let i =0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
    const uniqueName = removeDuplicate(friends);
    console.log(uniqueName);