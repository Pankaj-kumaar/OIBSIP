# Tempwise Temperature Converter | OIBSIP Web Development Level 1 - Task 3

A responsive temperature conversion tool that converts an entered value between Celsius, Fahrenheit and Kelvin.

## Tech stack
- HTML5
- CSS3
- Vanilla JavaScript

## Features
- Numeric temperature input with validation
- Input unit selector for Celsius, Fahrenheit and Kelvin
- Convert button
- Displays all three converted values together
- Handles empty and invalid numeric input
- Rejects values below absolute zero
- Responsive layout for desktop and mobile

## Conversion formulas
- Celsius to Fahrenheit: `(C × 9/5) + 32`
- Fahrenheit to Celsius: `(F − 32) × 5/9`
- Celsius to Kelvin: `C + 273.15`
- Kelvin to Celsius: `K − 273.15`

The app converts the selected input unit to Celsius first, then calculates Fahrenheit and Kelvin. Results are rounded to at most two decimal places for display.

## Run locally
Open `index.html` in a modern browser. No build tools or dependencies are required.

## Folder
`OIBSIP/WebDev-L1-TemperatureConverter/`

## Demo video checklist
Begin with a static 2-second title card showing:
- Full Name: Pankaj Kumar
- Assigned Track: Web Development & Designing
- Task Title: Temperature Converter Website

Then demonstrate a normal conversion (for example, 25 Celsius), switch the input unit, and show validation for an empty value and a value below absolute zero.
