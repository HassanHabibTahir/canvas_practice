const canvas = document.getElementById("imge-canvas");
const context = canvas.getContext("2d");

//drawImage(img,dx,dy);
//drawImage(img,dx,dy,dw,dh);
// img ---> image source;
//sx ---> source sx;(is the top left corner of the image)
//sy ---> source sy;(is the top left corner of the image)

//drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
var Img = new Image();
Img.src = "regularshow.png";
Img.onload = function () {
  //img, sx, sy,  sw,  sh,  dx,  dy, dw,  dh
  context.drawImage(Img, 40, 100, 150, 140, 250, 50, 250, 300);
};
