describe("when nr is 1", function() {
  it("should return 1", function() {
    expect(fizzbuzz(1)).toBe(1);
  });
});

describe("when nr is 3", function() {
  it("should return fizz", function() {
    expect(fizzbuzz(3)).toBe("fizz");
  });
});

describe("when nr is 5", function() {
  it("should return buzz", function() {
    expect(fizzbuzz(5)).toBe("buzz");
  });
});

describe("when nr is 7", function() {
  it("should return buzz", function() {
    expect(fizzbuzz(7)).toBe(7);
  });
});

describe("when nr is 9", function() {
  it("should return fizz", function() {
    expect(fizzbuzz(9)).toBe("fizz");
  });
});

describe("when nr is 10", function() {
  it("should return buzz", function() {
    expect(fizzbuzz(10)).toBe("buzz");
  });
})

describe("when nr is 15", function() {
  it("should return fizzbuzz", function() {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
})
