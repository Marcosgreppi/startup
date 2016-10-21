function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function strokee() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(0,0);
  getRandomColor();
  ctx.(0, "red");
  alert("s");
  ctx.lineTo(200,100);
  ctx.stroke();
}
