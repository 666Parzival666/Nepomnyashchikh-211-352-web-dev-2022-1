function gsd (x, y) {
  if (y > x) return gsd(y, x);
  if (!y) return x;
  return gsd(y, x % y);
}
x = prompt("Первое число?", ' ')
y = prompt("Второе число?", ' ')
alert("Наибольший общий делитель = " +gsd(x, y))