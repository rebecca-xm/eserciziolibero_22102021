/********************   La funzione banale *********************************************
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.
  Esempi:
    Input: n = 2, m = 3
    Output: FALSE
    Input: n = 2, m = '2'
    Output: FALSE
    Input: n = 2, m = 2
    Output: TRUE	 
******************************************************************************************/

function input() {
    let dato = prompt ("Inserisci due elementi");
    let arr = dato.split (",");
    equal(arr [0], arr [1]);
}
input()
function equal(n, m) {
    if (n === m) {
        console.log ("true")
    } else {
        console.log ("false")
    }
}