function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.log("Function C");
}

function x() {
    y();
}

function y() {
    z();
}

function z() {
    console.log("Fuction Z");
}

setTimeout(x,0);
a();