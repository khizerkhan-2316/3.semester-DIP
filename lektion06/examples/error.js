//	error.js
function function1() {
    function2()
}

function function2() {
    function3()
}

function function3() {
    function4()
}

function function4() {
    //throw 'This is a string	as exception';
    throw Error('This is an Error as exception');
}

function1()