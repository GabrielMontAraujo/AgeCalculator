function calculateAge() {
  const birthdate = document.getElementById('birthdate').value
  const today = new Date()
  const birthDate = new Date(birthdate)
  let age = today.getFullYear() - birthDate.getFullYear()
  let months = today.getMonth() - birthDate.getMonth()
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    age--
    months += 12
  }
  const days = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24))
  document.getElementById(
    'result'
  ).innerHTML = `Sua idade é ${age} anos, ${months} meses e ${days} dias.`
}
