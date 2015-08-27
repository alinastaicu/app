describe("when array is empty", function() {
  var array = [];

  it("should exit in 0", function() {
    expect(crazyPeon(array)).toBe(0);
  });
});

describe("when array has a 0 on the first position", function() {
  var array = [0];

  it("should exit in 0", function() {
    expect(crazyPeon(array)).toBe(Infinity);
  });
});

describe("when array is [1]", function() {
  var array = [1];

  it("should exit in 1", function() {
    expect(crazyPeon(array)).toBe(1);
  });
});

describe("when array is [1, 1000]", function() {
  var array = [1, 1000];

  it("should exit in 2", function() {
    expect(crazyPeon(array)).toBe(2);
  });
});

describe("when array is [2, 0, 1000]", function() {
  var array = [2, 0, 1000];

  it("should exit in 2", function() {
    expect(crazyPeon(array)).toBe(2);
  });
});

describe("when array is [2, 0, -1000]", function() {
  var array = [2, 0, -1000];

  it("should exit in -2", function() {
    expect(crazyPeon(array)).toBe(-2);
  });
});

describe("when array is [2, 0, -1000]", function() {
  var array = [2, 0, -1000];

  it("should exit in -2", function() {
    expect(crazyPeon(array)).toBe(-2);
  });
});

describe("when array is [2, 4,-2]", function() {
  var array = [2, 4, -2];

  it("Infinity", function() {
    expect(crazyPeon(array)).toBe(Infinity);
  });
});



