describe("cand trimit 1,2,10", function() {
  it("intoarce 13", function() {
    expect(sum('1,2,10')).toBe(13);
  });
});

describe("cand trimit 1", function() {
  it("intoarce 1", function() {
    expect(sum('1')).toBe(1);
  });
});

describe("cand trimit 1,caca", function() {
  it("intoarce 1", function() {
    expect(sum('1,caca')).toBe(1);
  });
});



