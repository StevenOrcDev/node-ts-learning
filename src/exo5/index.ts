// array-objects.ts

const users = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 22 },
];

// 1. Récupère les noms des utilisateurs majeurs.
// 2. Trie les utilisateurs par âge décroissant.
// 3. Calcule l'âge moyen des utilisateurs.
// 4. Trouve l’utilisateur le plus âgé.

export {};
function majeur(): string[]{

  let res: string[]= [];
  for(let i=0; i< users.length; i++){
    if(users[i].age >= 18 ){
      res.push(users[i].name);
    }
    
  }
  return res;
}

users.sort((a, b) => b.age - a.age);

function agemoy(): number{
  let somme = 0;
  for(let i=0;i<users.length;i++){
    somme += users[i].age;
  }
  let moyenne: number = somme / users.length;
  return moyenne;
}

function plusage(){
  users.sort((a, b) => b.age - a.age);
  console.log("Le plus age c'est " + users[0].name + "et il a " + users[0].age + "ans !");
}