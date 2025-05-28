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
  const majeur = users.filter(users => users.age >= 18);
  const res = majeur.map(user => user.name);
  return res;

}

users.sort((a, b) => b.age - a.age);

function ageMoy(): number{
  let somme = users.reduce((acc , val) => acc + val.age,0);
  return somme / users.length;
 }

function plusAge(){
  users.sort((a, b) => b.age - a.age);
  console.log(`Le plus age c'est   ${users[0].name}  et il a  ${users[0].age} + ans !`);
}