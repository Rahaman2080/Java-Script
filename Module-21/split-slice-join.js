
let lyrics = 'iccheri batase meghla din sese. utola ei ami kar ki jai ashe, jole ki harabe. borsha uru uru mon tumi ki hat barabe';
// console.log(lyrics);
// console kore string ta dekalam.

// -----------------Split-----------------------
// console.log(lyrics.split(' '));
// ebar split(' ') bracket er vitor space dewar karone sob word alada hoye gelo. and array er modde dekalo. split (' ') maane holo word er modde gap creat kora.

const sentences = lyrics.split('.');
// console.log(sentences);
// split dot dewar karone 3ta full stop er jonno 3ta sentence e divide hoye gece. split('.') maane holo full stop onushare sentence divide kora

const chars = lyrics.split('');
// console.log(chars);
// split('') normal quotation dewar karone each letter, each space, each komma, each full stop alada alada hoye gece.

// -------------Slice---------------
const partial = lyrics.slice(3, 10);
console.log(partial);
// character 3 theke niye 10 er agee 9 porjonto kete nibe.


// -------------substring-------------
// substring o slice er moto cut kore
const partial2 = lyrics.substring(3, 10);
console.log(partial2);
// partial and partial2 er output same. cut kora. 