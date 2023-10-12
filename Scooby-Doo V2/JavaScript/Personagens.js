function MenuShow(){
    document.getElementById("Mobile_Nav").style.display = 'block';
}
function CloseMenu(){
    document.getElementById("Mobile_Nav").style.display = 'none';
}

function AbrirPopUp() {
  // reference the button that was clicked
  var botao = this;
  // select all elements with the class "Content"
  var elementos = document.querySelectorAll('.Content');

  // hide all elements
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }

  // display the correct element based on the value of the button's "name" attribute
  if (botao.name === 'Scooby') {
    document.getElementById('Content_Scooby').style.display = 'block';
  } else if (botao.name === 'Salsicha') {
    document.getElementById('Content_Salsicha').style.display = 'block';
  } else if (botao.name === 'Daphine') {
    document.getElementById('Content_Daphine').style.display = 'block';
  } else if (botao.name === 'Velma') {
    document.getElementById('Content_Velma').style.display = 'block';
  } else if (botao.name === 'Fred') {
    document.getElementById('Content_Fred').style.display = 'block';
  }
}


function Close_PopUp() {
  // select all elements with the class "Content"
  var elementos = document.querySelectorAll('.Content');

  // hide all elements
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }
}
