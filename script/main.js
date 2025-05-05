const frases = [
    "¿Estás segura?",
    "¿Segura de eso?",
    "¿Totalmente segura?",
    "¿Segura que quieres hacerlo?",
    "¿No lo estás segura aún?",
    "¿Segura de tu decisión?",
    "¿Lo tienes claro?",
    "¿Ya decidiste?",
    "¿Convencida?",
    "¿Vas con todo?",
    "¿Sin dudas?",
    "¿Es tu decisión final?",
    "¿Segura, segura?",
    "¿100% segura?"
  ];

  let indice = 0;
  const btnCambiante = document.getElementsByClassName("no");
  const btnIzquierdo = document.getElementsByClassName("yes");

  btnCambiante.addEventListener("click", () => {
    // Cambiar el texto del botón
    indice = (indice + 1) % frases.length;
    btnCambiante.textContent = frases[indice];

    // Aumentar el tamaño del botón izquierdo
    const currentFontSize = parseFloat(window.getComputedStyle(btnIzquierdo).fontSize);
    const currentPadding = parseFloat(window.getComputedStyle(btnIzquierdo).padding);
    
    btnIzquierdo.style.fontSize = (currentFontSize + 2) + "vw";
    btnIzquierdo.style.padding = (currentPadding + 5) + "vw";
  });
  btnIzquierdo.addEventListener("click",function(){

  })