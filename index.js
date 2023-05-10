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
function titleCased() {
  const titleCase = tutorials.map((tutorials) => {
    const words = tutorials.split(' ');

    const capitalTitles = words.map((words) => {
      return words.charAt(0).toUpperCase() + words.slice(1);
    });

    const weDone = capitalTitles.join(' ');
    return weDone;
});

  return titleCase;
}  
console.log(titleCased);
