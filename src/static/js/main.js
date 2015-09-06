/*
  - matrixSuma(array) - imi aduna toate elementele din matrix si intoarce suma
    eg:
    [
      [1, 2, 3],
      [7, 8, 9],
      [100, 120, 155]
    ]
        returns 405
  - matrixLaPuterea2(array) = imi intoarce valoarea elementului matrix-ului la puterea a 2-a
     eg: [
      [1, 2],
      [3, 4]
     ]
        returns [
      [1, 4],
      [9, 16]
     ]

*/
 function matrixSuma(matrix){
  var suma = 0;
  for (var i = 0;i < matrix.length ; i= i + 1) {
    for (var j = 0; j < matrix[i].length ; j = j + 1) {
        suma = suma + matrix[i][j];
    }
  }
  return suma;
 }

function matrixLaPuterea2(matrix){
  var puterea = [];
  for (var i = 0;i < matrix.length ; i= i + 1) {

    puterea[i] = [];

    for (var j = 0; j < matrix[i].length ; j = j + 1) {
      puterea[i][j] = Math.pow(matrix[i][j],2);
    }
  }
  return puterea;
}

