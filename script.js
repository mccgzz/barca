document.getElementById("quiz").addEventListener("submit", function(event) {
    event.preventDefault();
    var respuestasCorrectas = 0;
  
    // Pregunta 1
    var respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
    if (respuesta1 && respuesta1.value === "1899") {
      respuestasCorrectas++;
    }
  
    // Pregunta 2
    var respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
    if (respuesta2 && respuesta2.value === "Camp Nou") {
      respuestasCorrectas++;
    }
  
    // Pregunta 3
    var respuesta3 = document.querySelector('input[name="pregunta3"]:checked');
    if (respuesta3 && respuesta3.value === "5") {
      respuestasCorrectas++;
    }
  
    // Pregunta 4
    var respuesta4 = document.querySelector('input[name="pregunta4"]:checked');
    if (respuesta4 && respuesta4.value === "Lionel Messi") {
      respuestasCorrectas++;
    }
  
    // Pregunta 5
    var respuesta5 = document.querySelector('input[name="pregunta5"]:checked');
    if (respuesta5 && respuesta5.value === "3") {
      respuestasCorrectas++;
    }
  
    // Pregunta 6
    var respuesta6 = document.querySelector('input[name="pregunta6"]:checked');
    if (respuesta6 && respuesta6.value === "2009-2010") {
      respuestasCorrectas++;
    }
  
    // Pregunta 7
    var respuesta7 = document.querySelector('input[name="pregunta7"]:checked');
    if (respuesta7 && respuesta7.value === "2018-2019") {
        respuestasCorrectas++;
    }
  
    // Pregunta 8
    var respuesta8 = document.querySelector('input[name="pregunta8"]:checked');
    if (respuesta8 && respuesta8.value === "Azulgranas") {
      respuestasCorrectas++;
    }
  
    // Pregunta 9 
    var respuesta9 = document.querySelector('input[name="pregunta9"]:checked');
    if (respuesta9 && respuesta9.value === "Manchester City 0 - 1 Chelsea") {
        respuestasCorrectas++;
    }
  
    // Pregunta 10
    var respuesta10 = document.querySelector('input[name="pregunta10"]:checked');
    if (respuesta10 && respuesta10.value === "Lionel Messi") {
      respuestasCorrectas++;
    }
  
    alert("Has respondido correctamente " + respuestasCorrectas + " de 10 preguntas.");
  });
  
  // Smooth scrolling para los enlaces del menú de navegación
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });