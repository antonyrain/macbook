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