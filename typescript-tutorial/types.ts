// boolean (true / false)

let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 10

// array (type[] Ex: number[], string[])
let items: number[]
items = [1, 2, 3]

let values: Array<number> // generic
values = [1, 2, 3]

// tuple (define tamanho e tipo)
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) Não é legal utilizar
let coisa: any
coisa = true

// void (vazio) não tem retorno
function logger(): void {
    console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
    throw new Error("error")
}

// object
let cart: object
cart = {}
