function factorial(n) {
  if (n < 0) return "Error: negative number";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

const arg = parseInt(process.argv[2]);
if (isNaN(arg)) {
  console.log("Missing number");
} else {
  console.log(factorial(arg));
}
