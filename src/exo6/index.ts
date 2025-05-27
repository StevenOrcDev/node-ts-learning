// app.ts
// À partir d'un fichier `db/users.json`, créer un menu CLI avec :
// - Ajouter un user
// - Supprimer un user
// - Lister les users
// - Chercher un user par nom
import { readFileSync, writeFileSync } from 'fs'; 

const chemin = './user.json';

const fichier = readFileSync(chemin, "utf-8");
let user = JSON.parse(fichier);

// ajout 
user.push({"name": "mika", "age": 41});
// suprimer user
user.splice(0, 1);
// lister les users
function liste() { for(let i=0; i < user.length; i++){console.log(user[i])}};
// chercher par nom
function cherche(nom: string): number{
    for(let i =0;i<user.length;i++){
        if(nom === user[i].name){
            return i;
        }
    }
    return -1;
}
