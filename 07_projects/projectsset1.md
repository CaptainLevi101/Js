  ## project1
  const colors = ['blue', 'yellow', 'white', 'grey'];
const colorElements = colors.map(color => document.getElementById(color));

colors.forEach((color, index) => {
  colorElements[index].addEventListener('click', function () {
    document.body.style.backgroundColor = color;
  });
});

## project2

