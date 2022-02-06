// opg 2.1

const list = [10, 54, 23, 3, 200, 504, 234, 0];

const bubbleSort = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
};

console.log('Bubblesort the following array: ' + list);
bubbleSort(list);
console.log('sorted list: ' + list);

const linearSearch = (list, element) => {
  /*for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return i;
    }
  }

  return -1; */

  return list.indexOf(element);
};

console.log('Searching for index of 10 in the list: ' + linearSearch(list, 10));

//opg 2.2

/* Programmer nedenstående funktioner, hvor array indeholder nogle tal:
• max(array): returnerer det største element i arrayet.
• contains(array, element): returnerer true hvis elementet findes i arrayet, ellers false
• sum(array): returnerer summen af elementerne i arrayet. */

const max = (array) => {
  /*let max = Number.MIN_VALUE;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }  

  return max; */

  return Math.max(...array);
};

const contains = (array, searchElement) => {
  return array.filter((element) => element === searchElement).length > 0;
};

const sum = (array) => {
  /*
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;  */

  return array.reduce((accumulator, curr) => accumulator + curr);
};

console.log('Max in array: ' + max(list));

console.log('Does the list contains the number 20: ' + contains(list, 10));

console.log('Sum of the array: ' + sum(list));

//opg 2.3
const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum vehicula erat ornare pretium. Duis nec condimentum ex. Etiam sed aliquet erat. Donec tempor urna vel tempus gravida. Donec aliquet orci arcu, et lacinia nibh suscipit eu. Donec placerat justo vestibulum ligula venenatis lacinia. Vivamus vitae erat nisl.';
/*Lav en string variabel med en længere tekst.
 Brug metoden split() til at opdele teksten i ord. Find antal
Brug metoden split() til at opdele teksten i sætninger. Find antal */

const findWords = (text) => {
  return text.split(' ').length;
};

const findSentences = (text) => {
  return text.split('.').length;
};

console.log('Antal ord i teksten: ' + findWords(text));
console.log('Antal sætninger i teksten: ' + findSentences(text));
// opg 2.4

/* Svarende til Java’s Comparator#compare(…) metode, skal der her laves nogle compare-funktioner, der tager to parametre, og returnerer -1, 0 eller 1 alt efter om den første parameter er mindre end, lig med eller større en den anden parameter.
Der skal laves følgende compare-funktioner:
• compare(s1, s2): Sammenligner de to tekststrenge leksikografisk.
• compareLen(s1, s2): Sammenligner de to tekststrenge på deres længde
• compareIgnoreCase(s1, s2): Sammenligner to tekststrenge leksikografisk uden at tage hensyn til store og små bogstaver
Modificer dernæst bubbleSort funktionen fra opgave 2.1, så den nu får en compare-funktion som ekstra parameter. Sammenligningen i bubbleSort funktionen skal nu ske med denne compare-funktion. */

const compare = (s1, s2) => {
  return s1 > s2 ? 1 : s1 === s2 ? 0 : -1;
};

const compareLen = (s1, s2) => {
  return s1.length > s2.length ? 1 : s1.length === s2.length ? 0 : -1;
};

const compareIgnoreCase = (s1, s2) => {
  return s1.toLowerCase() > s2.toLowerCase()
    ? 1
    : s1.toLowerCase() === s2.toLowerCase()
    ? 0
    : -1;
};

console.log(compare('df', 'AD'));

console.log(compareLen('hej', 'ses'));

console.log(compareIgnoreCase('df', 'AD'));

// opg 2.5
/* Lav et array med en række person objekter. Hver person skal have et navn, en e-mail og et mobilnummer. Afprøv CRUD på dette array. */

const persons = [
  { name: 'Anders Mikkelsen', mail: 'Anders@test.dk', phonenumber: '45631458' },
  { name: 'Lars Jørgensen', mail: 'Lars@test.dk', phonenumber: '23654896' },
  {
    name: 'Pauline Andersen',
    mail: 'Pauline@test.dk',
    phonenumber: '46236489',
  },
];

// add person to array:

const createAndAddPersonToList = (list, name, mail, number) => {
  list.push({ name: name, mail: mail, number: number });
};

createAndAddPersonToList(
  persons,
  'Peter Jensen',
  'Peter@test.dk',
  '56 46 65 98'
);

// remove last person
list.pop();

// remove first person from list
list.shift();

// opg 2.6
/* Lav en string variabel der indeholder noget kode med nogle parenteser – (), {} og []. Lav dernæst en funktion, der skal afgøre, om parenteserne i koden er balancerede.
Som datastruktur anvendes en stak (et array). Når der mødes en venstre parenteser i koden, skal den sættes på stakken – og når der mødes en højre parentes, skal det kontrolleres, om den tilsvarende venstre parentes er øverst på stakken. Brug metoderne push() og pop(). */

let string = '[{(a,3.dad)}]';

const validateSymbols = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c == '(' || c == '{' || c == '[') {
      stack.push(c);
    } else if (c == ')' || c == '}' || c == ']') {
      if (stack.length == 0) {
        return false;
      }
      const top = stack.pop();
      if (c == ')' && top != '(') {
        return false;
      } else if (c == '}' && top != '{') {
        return false;
      } else if (c == ']' && top != '[') {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(
  'Er der balancen i følgende tekststring mht. symboler ' +
    string +
    ' :' +
    validateSymbols(string)
);

string = '{[]}}';

console.log(
  'Er der balancen i følgende tekststring mht. symboler ' +
    string +
    ' :' +
    validateSymbols(string)
);

// opg 2.7
const array = [];

for (let i = 0; i < 10; i++) {
  let random = Math.floor(Math.random() * 1000 + 1);
  array.push(random);
}

console.log('Array: ' + array);

console.log('Max in array: ' + max(array));

console.log('Does the list contains the number 20: ' + contains(array, 20));

console.log('Sum of the array: ' + sum(array));
