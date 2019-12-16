var a = 1; //le minimum
var b = 1000; //le maximum
var m = 0; //l'intervalle
var k = 0; //nb recherché
var compteur = 0;

do {
    k = parseInt(prompt("Saisir un nombre entre 1 et 1000 :"));
    if (k > 1000) {
        alert("Nombre trop grand !");
    } else if (k <= 0) {
        alert("Nombre inférieur ou égal à zéro !")
    }
} while (k > 1000 || k <= 0);


while (m != k) {
    m = parseInt((b + a) / 2);
    if (m < k) {
        a = m;
    } else if (m > k) {
        b = m;
    }
    compteur++;
}
document.write("Nombre trouvé en " + compteur + " essai(s) !")
alert(m);