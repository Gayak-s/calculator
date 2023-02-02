
    // to display content each key 
    function displayContent(content) {
        display.value += content
    }

    function allClear() {
        display.value = ""
    }
    function evaluateExpr() {
        display.value = eval(display.value)
    }
    function backSpace() {
        display.value = display.value.slice(0,-1)

    }
    function exponential() {
        display.value += '*10**'
    }