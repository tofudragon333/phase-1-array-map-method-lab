const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => tutorials.map(title => {
    const individualWords = title.split(" ");
    const capitalizedWords = individualWords.map(capitalizeFirstLetter);
    return capitalizedWords.join(" ");
});

console.log(titleCased);
// take each element in an array and iterate it so you can see each title separately.

// const titlesAsWordsArray = tutorials.map(title => title.split(' '));

// console.log(titlesAsWordsArray);


// for each iteration, which is one individual title, iterate it again so we have an array of words.

// apply charAt() for each word in the 2nd order iteration level

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
  
}

// const titlesAsWords = titlesAsWordsArray.map(words => {
//   // console.log(words);
//   const capitalizedWords = words.map(capitalizeFirstLetter);
//   return capitalizedWords.join(' ');
// });


// join everything back together into the titleCased variable

