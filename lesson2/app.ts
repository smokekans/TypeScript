let age: number;
let namePerson: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
let callback: (a: number) => number;

age = 50;
namePerson = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a };

console.log(callback(6));

let anything: any;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number];
console.log(person = ['Max', 21]);

enum Status {LOADING, READY};

const page = {
  status: Status.LOADING,
}

if (page.status === Status.LOADING) {
  console.log('Сторінка завантажується');
}
if (page.status === Status.READY) {
  console.log('Сторінка завантажена');
}

let worb: string | number;

console.log(worb = 'Some text');
console.log(worb = 21);


function combine(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(combine(3, 4));
console.log(combine('i like', ' typescript'));

function combine2(a: string | number, b: string | number) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(combine2(7, 65));
console.log(combine2('i dislike', ' typescript'));

let literal: 'enable' | 'disable';

function chooseValue (action: 'enable' | 'disable') {
  if (action === 'enable') {
    console.log('This enable');
  } else {
    console.log('This disable');
    
  }
}

function showMessage(message: string): void {
  console.log(message);
}

showMessage('Watch this message')


function calc(num1: number, num2: number):number {
  return num1 + num2;
}

calc(1,5)

function customError(): never {
  throw new Error('Error');
}

// customError()

type PageType = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: string,
    updateAt: string,
  }
}

const page1: PageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: PageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

console.log(page1, page2);
