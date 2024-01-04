//2667. Create Hello World Function
//https://leetcode.com/problems/create-hello-world-function/
//way1

function createHelloWorld() {
    return f;
    function f(...args){
        return "Hello World";
    }
}

//way2 Function Syntax
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};



//way3 Arrow Syntax
var createHelloWorld = function() {
    return () => "Hello World";
};

//way4 Arrow Syntax + Rest Arguments fastest
var createHelloWorld = function() {
    return (...args) => "Hello World";
};

