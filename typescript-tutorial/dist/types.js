"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 10;
// array (type[] Ex: number[], string[])
var items;
items = [1, 2, 3];
var values; // generic
values = [1, 2, 3];
// tuple (define tamanho e tipo)
var title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) Não é legal utilizar
var coisa;
coisa = true;
// void (vazio) não tem retorno
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error("error");
}
// object
var cart;
cart = {
    key: "fi",
};
// Type Inference (Não é necessário passar o tipo da variável)
var message2 = "mensagm teste";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
