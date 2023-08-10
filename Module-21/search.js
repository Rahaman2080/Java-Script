let lyrics = 'iccheri batase meghla din sese utola ei ami kar ki jai ashe, jole ki harabe? borsha uru uru mon tumi ki hat barabe';
console.log(lyrics.includes('din'));
// output true. that means ache. include diyee search korlam just ache kina. thakle true na thakle false

console.log(lyrics.indexOf('bOrsha'));
// output 76. string er borsha element ti koto number position e ahce ta dekar jonno indexOf use kora. na thakle output -1 dekabe.

console.log(lyrics.startsWith('iccheri'));
// output true. karon iccheri diye string ta start hoyce. onno word dile output fales asbe.

console.log(lyrics.endsWith('Barabe'));
// output false. karon string er last word ta small letter b ache. ar ekhane UperCase dici. tai fales
