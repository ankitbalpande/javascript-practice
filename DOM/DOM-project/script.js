clickColor();
const intro = document.querySelector('.intro');

const introOut = setTimeout(() => {
  intro.style.display = 'none';
}, 10000);
const addBox = document.querySelector('#addBox');

addBox.addEventListener('click', () => {
  const input = document.querySelector('#input');
  const getInput = input.value.trim();
  if (getInput) {
    const createElement = document.createElement('span');
    createElement.className = 'button';
    createElement.id = getInput;
    createElement.style.backgroundColor = getInput;
    const colorBox = document.querySelector('.colorBox');
    colorBox.appendChild(createElement);
    input.value = '';
    clickColor();
  } else {
    alert('Please enter Color name');
  }
  clickColor();
});

function clickColor() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      switch (e.target.id) {
        case e.target.id:
          document.body.style.backgroundColor = e.target.id;
          break;
      }
    });
  });
}

clickColor();
