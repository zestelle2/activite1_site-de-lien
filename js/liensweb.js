/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

listeLiens.forEach(function (listeLiens) { //for (var i = 0; i < listeLiens.length; i++)
    var newdivElt = document.createElement("div"); //creer un éléments
    newdivElt.className = "lien"; //cree  sa classe
    document.getElementById("contenu").appendChild(newdivElt); // Insertion du nouvel élément dans contenue

    var lien = document.createElement("h4");
    lien.innerHTML = "<a href="+ listeLiens.url+" style='color:#428bca;'>"  +listeLiens.titre  +"</a>"  + " <span>" + listeLiens.url + "<br>"  +listeLiens.auteur + "</span>";
    newdivElt.appendChild(lien);
});

/*
for (var i = 0; i < listeLiens.length; i++) { //parcours //listeLiens.forEach (function (listeLiens){
    var newdivElt = document.createElement("div"); //creer une éléments
    newdivElt.className= "liens"; //cree  sa classe
    document.getElementById("contenu").appendChild(newdivElt); // Insertion du nouvel élément dans contenue

    var liens = document.createElement("h4");
    liens.innerHTML = "<a href =" +listeLiens[i].url +" style='color:#428bca';>" + listeLiens[i].titre + "</a>" + "<span>" + listeLiens[i].url + "<br>" + listeLiens[i].auteur + "</span>";
    newdivElt.appendChild(liens);
};
*/