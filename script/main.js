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
    "¿100% segura?",
    "Lo pensaste bien?",
    "¿Segura de continuar?",
    "¿Estás completamente segura?",
    "¿Te sientes lista?",
    "¿Vas en serio?",
    "¿Lo decidiste tú?",
    "¿Esto es lo que quieres?",
    "¿No te arrepientes?",
    "¿Te suena bien?",
    "¿Nada que pensar?",
    "¿Con el corazón?",
    "¿No hay vuelta atrás?",
    "¿Eso sientes?",
    "¿Así lo deseas?",
    "¿Va en firme?",
    "¿Estás convencida?",
    "¿Lo tienes decidido?",
    "¿Estás dispuesta?",
    "¿No tienes dudas?"
  ];

  let indice = 0;
  const btnCambiante = document.getElementById("NO");
  const btnIzquierdo = document.getElementById("YES");

  btnCambiante.addEventListener("click", () => {
    // Cambiar el texto del botón
    indice = (indice + 1) % frases.length;
    btnCambiante.textContent = frases[indice];

    // Aumentar el tamaño del botón izquierdo
    const currentFontSize = parseFloat(window.getComputedStyle(btnIzquierdo).fontSize);
    const currentPadding = parseFloat(window.getComputedStyle(btnIzquierdo).padding);
    
    btnIzquierdo.style.fontSize = (currentFontSize + 5) + "px";
    btnIzquierdo.style.padding = (currentPadding + 10) + "px";
  });
