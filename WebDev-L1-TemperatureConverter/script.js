const form = document.getElementById('converter-form');
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const errorMessage = document.getElementById('error-message');
const results = document.getElementById('results');

const ABSOLUTE_ZERO_C = -273.15;
const ABSOLUTE_ZERO_F = -459.67;
const DECIMAL_PLACES = 2;

function formatTemperature(value) {
  return Number(value.toFixed(DECIMAL_PLACES)).toString();
}

function convertTemperature(value, unit) {
  let celsius;
  if (unit === 'C') celsius = value;
  else if (unit === 'F') celsius = (value - 32) * 5 / 9;
  else celsius = value - 273.15;

  return {
    celsius,
    fahrenheit: (celsius * 9 / 5) + 32,
    kelvin: celsius + 273.15
  };
}

function showError(message) {
  errorMessage.textContent = message;
  results.classList.remove('has-results');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  errorMessage.textContent = '';

  const rawValue = temperatureInput.value.trim();
  if (rawValue === '') {
    showError('Please enter a temperature value.');
    temperatureInput.focus();
    return;
  }

  const value = Number(rawValue);
  if (!Number.isFinite(value)) {
    showError('Please enter a valid numeric temperature.');
    temperatureInput.focus();
    return;
  }

  const unit = unitSelect.value;
  const celsiusValue = unit === 'C' ? value : unit === 'F' ? (value - 32) * 5 / 9 : value - 273.15;
  if (celsiusValue < ABSOLUTE_ZERO_C - 1e-10) {
    const limit = unit === 'C' ? `${ABSOLUTE_ZERO_C} °C` : unit === 'F' ? `${ABSOLUTE_ZERO_F} °F` : '0 K';
    showError(`This value is below absolute zero. The lowest valid value is ${limit}.`);
    return;
  }

  const converted = convertTemperature(value, unit);
  document.getElementById('celsius-result').textContent = formatTemperature(converted.celsius);
  document.getElementById('fahrenheit-result').textContent = formatTemperature(converted.fahrenheit);
  document.getElementById('kelvin-result').textContent = formatTemperature(converted.kelvin);
  results.classList.add('has-results');
});

// Clear an old validation message when the user edits the input.
temperatureInput.addEventListener('input', () => { errorMessage.textContent = ''; });
unitSelect.addEventListener('change', () => { errorMessage.textContent = ''; });
