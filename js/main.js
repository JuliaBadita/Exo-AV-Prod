// Définit les champs du formulaire comme ''

// function baseForm() {
//   document.getElementById('name').value = ''
//   document.getElementById('FirstName').value = ''
//   document.getElementById('email').value = ''
//   document.getElementById('phone').value = ''
// }

function lettersOnlyCheck(nom) {
  var regEx = /^[A-Za-z]+$/
  if (nom.value.match(regEx)) {
    return true
  } else {
    alert('Please enter letters only.')
    return false
  }
}
