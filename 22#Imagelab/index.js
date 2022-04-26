window.onload = function () {
  //Definatons
  const canvas = document.getElementById("img-canva-pokeman");
  const context = canvas.getContext("2d");
  //drawImage(img,dx,dy);
  //drawImage(img,dx,dy,dw,dh);
  // img ---> image source;
  //drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
  var pokemanTitle = new Image();
  pokemanTitle.src = "pokemons.png";
  pokemanTitle.onload = function () {
    //Pikachu
    // img, sx, sy,  sw,  sh,  dx,  dy, dw,  dh
    context.drawImage(pokemanTitle, 0, 0, 200, 200, 0, 0, 150, 150);
    //squirtle
    context.drawImage(pokemanTitle, 400, 180, 200, 200, 150, 0, 150, 150);
    //charmander
    // context.drawImage(pokemanTitle, 400, 0, 200, 200, 300, 0, 150, 150);
    // context.drawImage(pokemanTitle, 600, 0, 200, 200, 450, 0, 150, 150);
    context.drawImage(pokemanTitle, 1000, 0, 200, 200, 300, 0, 150, 150);
  };
};
