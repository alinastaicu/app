 describe('imi aduce toate elementele din matrix[1, 2, 3],[7, 8, 9],[100, 120, 155]', function() {
    it('matrix intoarce 405', function() {
      expect(matrixSuma([[1, 2, 3],[7, 8, 9],[100, 120, 155]])).toBe(405);
        });
 });


describe('imi intoarce valoarea elementului matrix-ului la puterea a 2-a[1, 2],[3, 4]', function() {
  it ('matrix intoarce [1, 4, 9, 16]',function(){
    expect(matrixLaPuterea2([[1, 2],[3, 4]])).toEqual([[1, 4],[9, 16]]);
  });
});
