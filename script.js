function convertTemperature() {
  //  user input and selected units
  const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  //  temperature conversion
  let result;
  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = (inputTemperature * 9/5) + 32;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = (inputTemperature - 32) * 5/9;
  } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      result = inputTemperature + 273.15;
  } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      result = inputTemperature - 273.15;
  } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      result = (inputTemperature + 459.67) * 5/9;
  } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      result = (inputTemperature * 9/5) - 459.67;
  } else {
      // If the units are the same, no conversion needed
      result = inputTemperature;
  }

  // Display result
  document.getElementById("result").textContent = `Result: ${result} ${toUnit}`;
}