function fizzbuzz (name){
  if (name == 1) {
    return 1;
  }
  else if(name % 3 == 0 && name % 5 == 0) {
    return 'fizzbuzz';
  }
  else if (name % 3 == 0) {
    return 'fizz';
  }
  else if(name % 5 == 0) {
    return 'buzz';
  }else{
    return name;
  }
}
