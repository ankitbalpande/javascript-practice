// function clock() {
//   const newDate = new Date();
//   console.log(newDate);
// }

// clock();

const clock = document.querySelector('#clock');

setInterval(() => {
  const date = new Date();
  const hr = date.getHours();

  const min = date.getMinutes();
  const sec = date.getSeconds();
  clock.innerHTML = `${hr} : ${min} : ${sec}`;
  // console.log(date.getHours());
}, 1000);
