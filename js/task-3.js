function getElementWidth(content, padding, border) {
  let contentValid = parseFloat(content);
  let paddingValid = parseFloat(padding);
  let borderValid = parseFloat(border);
  const result = Number(contentValid + (paddingValid + borderValid) * 2);
  return result;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
