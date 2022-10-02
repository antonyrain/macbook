function showElm (a, b) {
    const button = document.getElementById(a)
    const elm = document.getElementById(b)

    var clickCounter = 0
    button.addEventListener('click', () => {
        if (clickCounter === 1) {
            elm.style.display = 'none'
            clickCounter--
        } else {
            elm.style.display = 'block'
            clickCounter++
        }
    })
}

showElm('finder','window-finder')
showElm('safari','window-safari')
showElm('settings','window-settings')
showElm('terminal','window-terminal')
showElm('code','window-code')


function showElm2 (a, b) {
    const button = document.getElementById(a)
    const elm = document.getElementById(b)

    var clickCounter = 0
    button.addEventListener('click', () => {
        if (clickCounter === 1) {
            elm.style.display = 'none'
            button.style.background = 'none'
            clickCounter--
        } else {
            elm.style.display = 'block'
            button.style.background = 'red'
            clickCounter++
        }
    })
}

showElm2('key--power', 'screen')

function clickElm (a, b) {
    const button = document.getElementById(a)
    button.addEventListener('click', () => {
        document.getElementById(b).click()
    })
}

clickElm('key--esc', 'lnk')
clickElm('letter--a', 'lnk--a')
clickElm('letter--g', 'lnk--g')
clickElm('letter--y', 'lnk--y')