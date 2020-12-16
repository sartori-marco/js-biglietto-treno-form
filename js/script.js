// BOTTONE GENERA

var bottoneGenera = document.getElementById("genera");
bottoneGenera.addEventListener('click',
function() {
  // VARIABILI
  var nomeInput = document.getElementById('nome').value;
  var distanza  = document.getElementById('chilometri').value;
  var eta = document.getElementById('eta').value;




  var prezzoBiglietto = 0.21 * distanza;
  var tipoOfferta = 'Tariffa standard';



  // IF
  if (eta == 'minorenne') {
    prezzoBiglietto -= prezzoBiglietto * 20 / 100;
    tipoOfferta = 'Sconto minorenne'
  }
  else if (eta == 'over'){
    prezzoBiglietto -= prezzoBiglietto * 40 / 100;
    tipoOfferta = 'Sconto silver'
  }


  // VALORI
  document.getElementById('nome-passeggero').innerHTML = nomeInput;

  document.getElementById('offerta').innerHTML = tipoOfferta;

  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()* 9) + 1;

  document.getElementById('codice-cp').innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;

  document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto.toFixed(2) + ' ' + '€';

  document.getElementById('biglietto').className = 'show'
}
);



// BOTONE ANNULLA
var bottoneAnnulla = document.getElementById("annulla");
bottoneAnnulla.addEventListener('click',
function() {
  document.getElementById('nome-passeggero').innerHTML = '';

  document.getElementById('offerta').innerHTML = '';

  document.getElementById('carrozza').innerHTML = '';

  document.getElementById('codice-cp').innerHTML = '';

  document.getElementById('costo-biglietto').innerHTML = '';

  document.getElementById('nome').value = '';

  document.getElementById('chilometri').value = '';

  document.getElementById('eta').value = '';

  document.getElementById('biglietto').className = 'hidden'
});
