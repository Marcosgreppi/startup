window.onload = function(){
  let canvas = document.getElementById('canvas');
  console.log(document.getElementById('canvas'))
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');
    for(let i=0;i<4;i++){
      for(let j=0;j<3;j++){
        ctx.beginPath();
        let x = 50+j*50;
        let y = 50+i*50;
        let radius = 20;
        let startAngle = 0;
        let endAngle = Math.PI+(Math.PI*j)/2;
        let anticlockwise = i%2==0 ? false : true;
        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        if (i>1){
          ctx.fill();
          ctx.fillStyle = getRndColor();
        } else {
          ctx.stroke();
          ctx.strokeStyle=getRndColor();
        }
      }
    }
  }
}

function getRndColor() {
  let r = 255*Math.random()|0,
  g = 255*Math.random()|0,
  b = 255*Math.random()|0;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
