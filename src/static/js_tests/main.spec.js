describe('Adevarat este adevarat', function() {
  it('should be true', function() {
    expect(true).toEqual(true);
    expect(true).toBe(true);
  });
});

describe('cand array este [1, 3, 5, 7]', function() {
  it('array suma intoarce 16', function() {
    expect(arraySuma([1, 3, 5, 7])).toBe(16);
  });
});


describe('cand array este [1, 2, 3, 4]', function() {
  it('array la putere a doua intoarce[1, 4, 9, 16]', function() {
    expect(arrayLaPuterea2([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
  });
});

describe('cand array este [1, 2, 3, 4]', function() {
  it('intoarce elementele din array in ordine inversa [1, 2, 3, 4}', function() {
    expect(arrayInvers([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
});

describe('cand array este [1, 2, 3, 4]', function() {
  it('intoarce elementele din array in ordine inversa [1, 2, 3, 4}', function() {
    expect(arrayInvers([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
});


describe('secventa nr pare: max 5', function() {
  it('intoarce [2, 4]', function() {
    expect(secventaNrPare(5)).toEqual([2, 4]);
  });
});

describe('secventa nr pare: max 10', function() {
  it('intoarce [2, 4, 6, 8, 10]', function() {
    expect(secventaNrPare(10)).toEqual([2, 4, 6, 8 , 10]);
  });
});


describe('secventa nr impare: max 5', function() {
  it('intoarce [1, 3, 5]', function() {
    expect(secventaNrImpare(5)).toEqual([1, 3, 5]);
  });
});

describe('secventa nr impare: max 10', function() {
  it('intoarce [1, 3, 5, 7, 9]', function() {
    expect(secventaNrImpare(10)).toEqual([1, 3, 5, 7, 9]);
  });
});


describe('secventa nr pare in ordine inversa max = 5', function() {
  it('intoarce [4, 2]', function() {
    expect(secventaNrPareInversa(5)).toEqual([4, 2]);
  });
});


describe('secventa inversa de nr impare: max 10', function() {
  it('intoarce [9, 7, 5, 3, 1]', function() {
    expect(secventaNrImpareInversa(10)).toEqual([9, 7, 5, 3, 1]);
  });
});


describe('secventa inversa de nr impare: max 5', function() {
  it('intoarce 20', function() {
    expect(sumaPatratelorNumerelorPare(5)).toEqual(20);
  });
});


