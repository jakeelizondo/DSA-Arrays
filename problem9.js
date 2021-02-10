// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

function removeChars(removeChar, str, curr = 0, next = 1) {
  let currentChar = str[curr];
  let nextChar = str[next];

  if (curr === str.length - 1) {
    return str;
  }

  if (str[str.length - 1] === removeChar) {
    str = str.substr(0, str.length - 1);
    return removeChars(removeChar, str, curr, next);
  } else if (currentChar === removeChar) {
    str = str.substr(0, curr) + str.substr(next, str.length);
    curr = 0;
    next = 1;
    return removeChars(removeChar, str, curr, next);
  } else {
    curr++;
    next++;
    return removeChars(removeChar, str, curr, next);
  }
}

function removeCharacters(removeString, stringToClean) {
  let strArray = [];
  for (let i = 0; i <= removeString.length; i++) {
    if (i === 0) {
      strArray[i] = removeChars(removeString[i], stringToClean);
    } else if (i < removeString.length - 1) {
      strArray[i] = removeChars(removeString[i], strArray[i - 1]);
    } else {
      return removeChars(removeString[i], strArray[i - 1]);
    }
  }
}

// console.log(removeCharacters('ae', 'pepa')); // pp

console.log(
  removeCharacters('aeiou', 'Battle of the Vowels: Hawaii vs. Grozny')
); // 'Bttl f th Vwls: Hw vs. Grzny'
// console.log(removeChars('a', 'paple')); // 'pple'
// console.log(removeChars('a', 'pepa')); // 'pep'
// console.log(removeChars('a', 'papapapapa')); // 'ppppp'

// Ian version

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }
// function removeCharacters(str, rmv) {
//   let filterString = str;
//   for (let i = 0; i < rmv.length; i++) {
//     filterString = replaceAll(filterString, rmv[i], '');
//   }
//   return filterString;
// }
