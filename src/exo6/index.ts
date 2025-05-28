// app.ts
// À partir d'un fichier `db/users.json`, créer un menu CLI avec :
// - Ajouter un user
// - Supprimer un user
// - Lister les users
// - Chercher un user par nom
interface User{
    id: number;
    nom: string;
    age: number;
}
import { readFileSync ,  writeFileSync } from 'fs'; 


const fichier = readFileSync('./user.json', "utf-8");
let user = JSON.parse(fichier); // quand je const ca met des errreurs quand je modifie dans les fonctions

// ajout 
function addUser(nom: string, age: number): void{

    user.sort((a , b)=> b.id - a.id );
    const id = user.length > 0 ? user[0].id + 1 : 1;
    const nouvelUser: User = {id, nom, age};
    user.push(nouvelUser);

}


// supprimer user
function deletUser(id: number): void{
   user = user.filter( u => u.id !== id);
}



// lister les users
function liste(){
    user.forEach(element => {
        console.log(element);
    });
}

// chercher par nom
function cherche(nom: string): number{
    let temp = user.find( u => u.name === nom);
    return temp ? temp.id : -1;
}
