// conditions-boucles.ts
// 1. Affiche les nombres pairs de 0 à 20
// 2. Affiche "FizzBuzz" pour les nombres de 1 à 50
// 3. Implémente une fonction `findMax(numbers: number[]): number`

export {};
// affiche nombre pare d'un tableau avec reduce
function pair(tab: number[]): void {
  tab.reduce((_, val) => {
    if (val % 2 === 0) {
      console.log(val);                        
    }
    return 0;
  }, 0);
}
//affiche nombre paire de 0 a 20
function nbPaire(): void{
    for(let i=0;i<=20;i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

function fizzBuzz(): void{
    for(let i = 1 ; i<= 50; i++){
        console.log("FizzBuzz" + i);
    }
}

function Findmax(numbers: number[]): number{
    let max = numbers.reduce((acc,elem)=>{
                if(acc < elem){
                    return elem;
                }
                return acc;} 
                ,numbers[0]);
    return max;
}