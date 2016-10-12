function Matrix(){
  matrix = [
    ["Esteban Quito","Ecuador", "North Korea"],
    ["John Smith","Great Britain", "Japan"],
    ["Federico Lopez","Spain", "Australia"],
  ];
  console.log(matrix[0][0]);
  return matrix;
}

function importMatrix(matrix) {
  console.log(matrix);

  for(var indexTR = 0; indexTR < 3; indexTR++ ){
    var trNode = document.createElement("tr");
    for (var indexTD = 0; indexTD < 3; indexTD++) {
        var tdNode = document.createElement("td");
        var dataNode = document.createTextNode(matrix[indexTR][indexTD]);
        tdNode.appendChild(dataNode);
        trNode.appendChild(tdNode);
    }
    document.getElementById("table").appendChild(trNode);
  }
}
