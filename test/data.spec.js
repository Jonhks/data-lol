require('../src/data.js');


describe('fetchData', () => {
  it('is a function', () => {
    expect(typeof fetchData).toBe('function');
  });

  it('returns `promesa`', () => {
    expect(fetchData() instanceof Promise).toBe(true);
  });
});
