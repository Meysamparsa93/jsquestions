// 1

function fliter(str, badWords) {
  const regex = new RegExp(badWords.join('|'), 'gi');
  const words = str.split(' ');
  const filteredWords = words.map(word => {
    if (badWords.includes(word.toLowerCase())) {
      return '*'.repeat(word.length);
    }
    return word;
  });
  return filteredWords.join(' ');
}


//   2

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 3

function toFarsi(str) {
  const farsiDigits = '۰۱۲۳۴۵۶۷۸۹';
  let farsiStr = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      const farsiDigit = farsiDigits[charCode - 48];
      farsiStr += farsiDigit;
    } else {
      farsiStr += str[i];
    }
  }
  return farsiStr;
}


// 4

function findMostRepeatedChar(str) {
  const charCount = {};
  let maxCount = 0;
  let mostRepeatedChar = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostRepeatedChar = char;
    } else if (charCount[char] === maxCount && char < mostRepeatedChar) {
      mostRepeatedChar = char;
    }
  }

  return { character: mostRepeatedChar, count: maxCount };
}


//   5

function areStringsRoots(str1, str2) {
  const charCount1 = {};
  const charCount2 = {};

  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i].toLowerCase();
    if (charCount1[char]) {
      charCount1[char]++;
    } else {
      charCount1[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i].toLowerCase();
    if (charCount2[char]) {
      charCount2[char]++;
    } else {
      charCount2[char] = 1;
    }
  }

  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}


//   6

function formatNumber(str) {
  if (str.length <= 3) {
    return str;
  } else {
    const formatted = [];
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      formatted.unshift(str[i]);
      count++;
      if (count === 3 && i !== 0) {
        formatted.unshift(',');
        count = 0;
      }
    }
    return formatted.join('');
  }
}


//   7

function isValidParentheses(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push('(');
    } else if (str[i] === ')') {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}


//   8

function removeDuplicates(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}


//   9

function passwordStrengthChecker(password, commonWordsList) {
  let score = 0;

  if (commonWordsList.includes(password)) {
    return 0;
  }
  score += password.length;
  const uppercaseRegex = /[A-Z]/g;
  if (password.match(uppercaseRegex)) {
    score += 2;
  }

  const lowercaseRegex = /[a-z]/g;
  if (password.match(lowercaseRegex)) {
    score += 1;
  }
  const numberRegex = /[0-9]/g;
  if (password.match(numberRegex)) {
    score += 2;
  }
  return score;
}


//   10

function replaceAll(input, replaceThis, replaceTo) {
  if (replaceThis === '' || replaceTo === '') {
    return input;
  }
  let output = input;
  while (output.includes(replaceThis)) {
    output = output.replace(replaceThis, replaceTo);
  }
  return output;
}
