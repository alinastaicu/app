function fizzbuzz(nr) {
  if(isFizz(nr) && isBuzz(nr)) {
    return fizz() + buzz();
  } else if(isFizz(nr)) {
    return fizz();
  } else if (isBuzz(nr)) {
    return buzz();
  }
  return nr;
}

function isFizz(nr) {
  return nr % 3 == 0;
}

function isBuzz(nr) {
  return nr % 5 == 0;
}

function fizz() {
  return 'fizz';
}

function buzz() {
  return 'buzz';
}
