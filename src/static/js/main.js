function crazyPeon(array) {
  var steps = 0;
  var position = 0;
  var visited = [];

  if(array.length == 0) {
    return 0;
  } else if(array[0] == 0) {
    return Infinity;
  } else if (array.length > 0) {
    while (position >= 0 && position < array.length) {
      if (visited[position] == 1) {
        return Infinity;
      }
      visited[position] = 1;
      position += array[position];
      steps = steps + 1;
    }

    if (position < 0) {
      steps = -steps;
    }
  }

  return steps;
}


function arrayContains(array, value) {
  return array.indexOf(value) != -1;
}
