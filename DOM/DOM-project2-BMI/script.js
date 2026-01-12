const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const height = document.querySelector('.height').value.trim();
  const weight = document.querySelector('.weight').value.trim();

  if (height === '' || height < 0 || isNaN(height)) {
    document.querySelector(
      '.result'
    ).innerHTML = `Please enter valid ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    document.querySelector(
      '.result'
    ).innerHTML = `Please enter valid ${weight}`;
  } else {
    const sqheight = height * height;
    const bmi = weight / sqheight;
    document.querySelector('.result').innerHTML = `<span>BMI is ${bmi.toFixed(
      2
    )}</span>`;
    if (bmi < 18.6) {
      bmiResult('green', 'Underweight');
    } else if (bmi > 18.6 && bmi < 24.9) {
      bmiResult('blue', 'Normal weight');
    } else if (bmi > 25 && bmi < 29.9) {
      bmiResult('orange', 'Overweight');
    } else {
      bmiResult('red', 'Obese');
    }
  }
  height.value = '';
  weight.value = '';
});

function bmiResult(color, result) {
  const span = document.createElement('span');
  span.style.color = color;
  span.style.fontSize = '20px';
  span.append(document.createTextNode(`(${result})`));
  document.querySelector('.result').appendChild(span);
}
