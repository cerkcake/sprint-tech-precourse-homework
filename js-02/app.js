const toCelsius = (fahrenheit) => {
  let value = ((fahrenheit - 32) * 5) / 9;
  return value.toFixed(2) + " " + "°C";
}
const toFahrenheit = (celsius) => {
  let value = (celsius * 9) / 5 + 32;
  return `${value.toFixed(2)} °F`;
};
let display = document.getElementById("display");
// function toCelsiusProgram(value) {
//   alert(toCelsius(value));
// }
// function toFahrenheitProgram(value) {
//   alert(toFahrenheit(value));
// }
const toCelsiusProgram = (value) =>
  (display.innerHTML = `${value} °F = ${toCelsius(value)}`);

const toFahrenheitProgram = (value) =>
  (display.innerHTML = `${value} °C = ${toFahrenheit(value)}`);
