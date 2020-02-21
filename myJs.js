var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var r = 113/2;
var height = 98;

context.strokeStyle = "orange";



function drawHexagon(positionX, positionY){
  context.beginPath();
  context.moveTo(positionX, positionY);
  context.lineTo(positionX + r * 0.5, positionY - height / 2);
  context.lineTo(positionX + r * 1.5, positionY - height / 2);
  context.lineTo(positionX + r * 2, positionY);
  context.lineTo(positionX + r * 1.5, positionY + height / 2);
  context.lineTo(positionX + r * 0.5, positionY + height / 2);
  context.lineTo(positionX, positionY);
  context.strokeStyle = "orange";
          context.stroke();
    }
      drawHexagon(76, 120);
      drawHexagon(76, 230);
      drawHexagon(168.5, 65);
      drawHexagon(168.5, 175);
      drawHexagon(168.5, 285);
      drawHexagon(261, 120);
      drawHexagon(261, 230);

      context.fillStyle = 'orange';
      context.fill();
