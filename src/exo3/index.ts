// types.ts
// 1. Crée un type `User` avec prénom, nom, âge et email.
// 2. Crée un `enum Role` avec ADMIN, USER, GUEST.
// 3. Crée une fonction `printUserInfo(user: User, role: Role): void` qui affiche des infos.

export {};

type User = {
    prenom: string;
    nom: string;
    age: number;
    email: string;
}
 enum Role  {
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest"

}

function printUserInfo(user: User, role: Role){
    console.log("prenom : " + user.prenom + "nom :" + user.nom + "age : " + user.age + "mail : " + user.email );
    console.log("role " + role)
}