describe("daca numarul este 1", function() {
  it("ar trebui sa intoarca unu", function() {
    expect(numberWord(1)).toBe('unu');
  });
});

describe("daca numarul este 2", function() {
  it('ar trebui sa intoarca doi',function()  {
    expect(numberWord(2)).toBe("doi");
  });
});

describe('daca numarul este 3',function(){
  it('ar trebuie sa intoarca trei',function() {
    expect(numberWord(3)).toBe("trei");
  });
});

describe('daca numarul este 4',function(){
  it('ar trebuie sa intoarca patru',function() {
    expect(numberWord(4)).toBe("patru");
  });
});

describe('daca numarul este 5',function(){
  it('ar trebuie sa intoarca cinci',function() {
    expect(numberWord(5)).toBe("cinci");
  });
});

describe('daca numarul este 6',function(){
  it('ar trebuie sa intoarca sase',function() {
    expect(numberWord(6)).toBe("sase");
  });
});

describe('daca numarul este 7',function(){
  it('ar trebuie sa intoarca sapte',function() {
    expect(numberWord(7)).toBe("sapte");
  });
});

describe('daca numarul este 8',function(){
  it('ar trebuie sa intoarca opt',function() {
    expect(numberWord(8)).toBe("opt");
  });
});

describe('daca numarul este 9',function(){
  it('ar trebuie sa intoarca noua',function() {
    expect(numberWord(9)).toBe("noua");
  });
});

describe('daca numarul este 10',function(){
  it('ar trebuie sa intoarca zece',function() {
    expect(numberWord(10)).toBe("zece");
  });
});

describe('daca numarul este 12',function(){
  it('ar trebuie sa intoarca doisprezece',function() {
    expect(numberWord(12)).toBe("doisprezece");
  });
});

describe('daca numarul este 15',function(){
  it('ar trebuie sa intoarca cincisprezece',function() {
    expect(numberWord(15)).toBe("cincisprezece");
  });
});

describe('daca numarul este 20',function(){
  it('ar trebuie sa intoarca douazeci',function() {
    expect(numberWord(20)).toBe("douazeci");
  });
});

describe('daca numarul este 23',function(){
  it('ar trebuie sa intoarca douazeci si trei',function() {
    expect(numberWord(23)).toBe("douazeci si trei");
  });
});

describe('daca numarul este 27',function(){
  it('ar trebuie sa intoarca douazeci si sapte',function() {
    expect(numberWord(27)).toBe("douazeci si sapte");
  });
});

describe('daca numarul este 50',function(){
  it('ar trebuie sa intoarca cincizeci',function() {
    expect(numberWord(50)).toBe("cincizeci");
  });
});

describe('daca numarul este 53',function(){
  it('ar trebuie sa intoarca cincizeci si trei',function() {
    expect(numberWord(53)).toBe("cincizeci si trei");
  });
});

describe('daca numarul este 57',function(){
  it('ar trebuie sa intoarca cincizeci si sapte',function() {
    expect(numberWord(57)).toBe("cincizeci si sapte");
  });
});

