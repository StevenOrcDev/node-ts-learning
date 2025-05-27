// conditions-boucles.ts
// 1. Affiche les nombres pairs de 0 à 20
// 2. Affiche "FizzBuzz" pour les nombres de 1 à 50
// 3. Implémente une fonction `findMax(numbers: number[]): number`

export {};
function pair(tab : number[]){

    for(let i=0; i< tab.length ; i++)
        {

        if(tab[i]%2 === 0 ){    
        console.log(tab[i]);
        }
    }
}

function fizzBuzz(){
    for(let i = 1 ; i<= 50; i++){
        console.log("FizzBuzz" + i);
    }
}

function Findmax(numbers: number[]): number{
    let max = numbers[0];
    for(let i = 1 ; i<numbers.length;i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}