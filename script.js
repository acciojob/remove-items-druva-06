//your JS code here. If required.

const rmvClrBtn = document.getElementsByTagName('input')[0]

rmvClrBtn.addEventListener('click',() => {
    const colorSelect = document.getElementById('colorSelect')

    const clr = colorSelect.value
    
    let clrElements = colorSelect.children

    for(let i = 0; i < clrElements.length; i++){
        if(clrElements[i].value == clr){
            clrElements[i].remove()
        }
    }

})