// fonctions.ts
// Crée les fonctions suivantes :

// 1. `hello(name: string): string` => "Bonjour, name !"
// 2. `addition(a: number, b: number): number`
// 3. `isEven(n: number): boolean`
// 4. `getAverage(notes: number[]): number`

export {};
function  bjr(name: string): string{
    return `bonjour , ${name} !`;
}

function sum(a: number, b: number): number { 
    return a + b ;
}

function isEven(n: number): boolean{
    return n % 2 === 0
}

function moy(notes: number[]): number {
    
    if(notes.length === 0){return 0;}
    let somme = notes.reduce((acc, val) => acc + val, 0);
    const moyenne = somme / notes.length;
    return moyenne; 
}