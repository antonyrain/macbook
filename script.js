const button = document.getElementById('bg__btn')
const body = document.body

const colors = [
    'linear-gradient(#d3cce3, #e9e4f0)',
    'linear-gradient(#c9d6ff, #e2e2e2)',
    'linear-gradient(#9796f0, #fbc7d4)',
    'linear-gradient(#ece9e6, #ffffff)',
]

button.addEventListener('click', changeBackground)

function changeBackground () {
    var colorIndex = Math.floor(Math.random() * colors.length)
    body.style.background = colors[colorIndex]
}