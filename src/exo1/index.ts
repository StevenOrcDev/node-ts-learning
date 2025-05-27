// fonctions.ts
// Crée les fonctions suivantes :

// 1. `hello(name: string): string` => "Bonjour, name !"
// 2. `addition(a: number, b: number): number`
// 3. `isEven(n: number): boolean`
// 4. `getAverage(notes: number[]): number`

export {};
function  bjr(name: string): string{
    return "bonjour , " + name + "!";
}

function addition(a: number, b: number): number { 
    return a + b ;
}

function estPaire(n: number): boolean{
    if(n % 2 === 0){
        return true;
    }
    return false;
}

function moy(notes: number[]): number {
    
    if(notes.length === 0){return 0;}
    let somme = 0;
    for(let i=0;i < notes.length;i++){
        somme += notes[i];
    }
    const moyenne = somme / notes.length;
    return moyenne; 
}