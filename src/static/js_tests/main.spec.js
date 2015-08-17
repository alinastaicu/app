describe("Initial state", function() {
  it("should have player1 defined", function() {
    expect(player1).toBeDefined();
  });

  it("should have player1 Liviu", function() {
    expect(player1.name).toBe('Liviu');
  });

  it("shoud have player2 defined", function() {
    expect(player2).toBeDefined();
  });

  it("should have player2 Alina", function() {
    expect(player2.name).toBe("Alina");
  });
  it("should have table whidth 3", function() {
    expect(table.length).toBe(3);
  });

  it("player with x should not have won", function() {
    expect(playerWon('x')).toBe(false);
  });
});

describe("when player did first line", function() {
  beforeEach(function() {
    table[0][0] = 'x';
    table[0][1] = 'x';
    table[0][2] = 'x';
  });

  it("player with x should have won", function() {
    expect(playerWon('x')).toBe(true);
  });
});
