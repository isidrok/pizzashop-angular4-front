import {multiply} from './demo';
describe('Testing multiplication', () => {
  it('should multiply normal numbers', () => {
    expect(multiply(2, 2)).toEqual(2 * 2);
  });
  it('should multiply correctly by 0', () => {
    expect(multiply(0, 5)).toEqual(0 * 5);
    expect(multiply(5, 0)).toEqual(5 * 0);
  });
  it('- * - should be +', () => {
    expect(multiply(-1, -1)).toEqual(-1 * -1);
  });
  it('- * + shoulde be -', () => {
    expect(multiply(-1, 2)).toEqual(-1 * 2);
    expect(multiply(0, -0)).toEqual(0*-0);
  });
});
