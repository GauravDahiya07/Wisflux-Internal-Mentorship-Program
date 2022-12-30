
function f2c(fahrenheit) 
{
  const fah = fahrenheit;
  const cel = (fah - 32) * 5 / 9;
  const output = `${fah}\u00B0F is ${cel}\u00B0C.`;
    console.log(output);
} 

function c2f(celsius) 
{
  const cel = celsius;
  const fah = cel * 9 / 5 + 32;
  const output = `${cel}\u00B0C is ${fah}\u00B0F.`;
    console.log(output);
}

c2f(60);
f2c(45);