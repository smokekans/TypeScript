var age;
var namePerson;
var toggle;
var empty;
var notInitialize;
var callback;
age = 50;
namePerson = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = function (a) { return 100 + a; };
console.log(callback(6));
var anything;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
var person;
console.log(person = ['Max', 21]);
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
var page = {
    status: Status.LOADING,
};
if (page.status === Status.LOADING) {
    console.log('Сторінка завантажується');
}
if (page.status === Status.READY) {
    console.log('Сторінка завантажена');
}
var worb;
console.log(worb = 'Some text');
console.log(worb = 21);
function combine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(combine(3, 4));
console.log(combine('i like', ' typescript'));
function combine2(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine2(7, 65));
console.log(combine2('i dislike', ' typescript'));
var literal;
function chooseValue(action) {
    if (action === 'enable') {
        console.log('This enable');
    }
    else {
        console.log('This disable');
    }
}
function showMessage(message) {
    console.log(message);
}
showMessage('Watch this message');
function calc(num1, num2) {
    return num1 + num2;
}
calc(1, 5);
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
console.log(page1, page2);
