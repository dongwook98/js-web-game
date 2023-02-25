function test() {
  let result = '';
  if (!a) {
    result = 'a';
    result += 'b';
    return result;
  }
  if (!b) {
    result = 'c';
  }
  result += 'b';
  return result;
}
