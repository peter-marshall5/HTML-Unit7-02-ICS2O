const input = document.getElementById('num')
const button = document.getElementById('check')

function onclick () {
  if (input.value === '') {
    alert('Please enter a number')
    return
  }
  const int = parseInt(input.value)
  if (isNaN(int)) {
    alert('You entered an invalid number.')
    return
  }
  if (int === 0) {
    alert('The number you entered is zero.')
    return
  }
  input.value = ''
  if (int > 0) {
    alert('The number you entered is positive.')
  } else {
    alert('The number you entered is negative.')
  }
}

button.addEventListener('click', onclick)
