describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.createCipherWithOffset, 'function');
    });

    const withOffsetEncode = window.cipher.createCipherWithOffset(18);
    const encodeMessage = withOffsetEncode.encode('laboratoria');

    it('deberia retornar "DSTGJSLGJAS" para "laboratoria" con offset 18', () => {
      assert.equal(encodeMessage, 'DSTGJSLGJAS');
    });

    const whithOffsetDecode = window.cipher.createCipherWithOffset(18);
    const decodeMessage = whithOffsetDecode.decode('dstgjslgjas');

    it('debería retornar "LABORATORIA" para "dstgjslgjas" con offset 18', () => {
      assert.equal(decodeMessage, 'LABORATORIA');
    });
  });
});