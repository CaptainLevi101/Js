  ## project1
  const colors = ['blue', 'yellow', 'white', 'grey'];
const colorElements = colors.map(color => document.getElementById(color));

colors.forEach((color, index) => {
  colorElements[index].addEventListener('click', function () {
    document.body.style.backgroundColor = color;
  });
});

## project2
const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //now what all i want is values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.getElementById('weight').value);
  console.log(height);
  const result = document.querySelector('#results');
  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please enter correct Height';
  }
  if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please enter correct weight';
  } else {
    const div = document.createElement('div');
    const bmi = (weight / (height * height)) * 10000;
    div.appendChild(document.createTextNode(bmi));
    form.appendChild(div);
  }
});

## project3
const clock = document.getElementById('clock');

function upDate() {
  const ne = document.createElement('span');
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerHTML = `${hour} : ${min} : ${seconds}`;
}

// upDate(ne);

// Use setInterval to call upDate every second (1000 milliseconds)
setInterval(upDate, 1000);

## project 4

