export const multiply = function(a, b) {
  let aAbs = Math.abs(a);
  let bAbs = Math.abs(b);
  if (aAbs === 0 || bAbs === 0) {
    if ((a === -0 && b === -0) || (a === 0 && b === -0)) {
      return -0;
    }
    return 0;
  }
  for (let i = 1; i < aAbs; i++) {
    bAbs += bAbs;
  }
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return 0 - bAbs;
  }
  return bAbs;
};
