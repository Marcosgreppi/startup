function Matrix () {
  matrix = [
    ["Esteban Quito","Ecuador", "North Korea"],
    ["John Smith","Great Britain", "Japan"],
    ["Federico Lopez","Spain", "Australia"],
  ];
  return matrix;
}

function importMatrix (matrix) {
  let trNode;
  let tdNode;
  let dataNode;
  let indexTR = 0;
  let indexTD = 0;

    for(indexTR; indexTR < 3; indexTR++ ){
      trNode = document.createElement("tr");

      for (indexTD; indexTD < 3; indexTD++) {
        tdNode = document.createElement("td");
        dataNode = document.createTextNode(matrix[indexTR][indexTD]);
        tdNode.appendChild(dataNode);
        trNode.appendChild(tdNode);
      }

      document.getElementById("table").appendChild(trNode);
  }
}
