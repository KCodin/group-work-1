function calculateArea(base, height) {
  const area = 0.5 * base * height;
  return area;
}

function calculatePerimeter(base, height) {
  const side = Math.sqrt(base ** 2 + height ** 2);
  const perimeter = base + side + height;
  return perimeter;
}

function triangle() {
  const base = parseFloat(prompt("Enter the base of the triangle"));
  const height = parseFloat(prompt("Enter the height of the triangle"));

  const area = calculateArea(base, height);
  const perimeter = calculatePerimeter(base, height);

  console.log("Area:" + area);
  console.log("Perimeter:" + perimeter);
}

triangle();

