function getElementByInputField(elementId) {
    const getValue = document.getElementById(elementId);
        const getValueString = getValue.value;
        const getValueNew = parseFloat(getValueString);
        getValue.value= '';
        return getValueNew;
}

function getElementByTextField(elementId) {
    const getElemnt = document.getElementById(elementId);
    const getElemntString = getElemnt.innerText;
    const setElementNumber = parseFloat(getElemntString);
    return setElementNumber;
}

function setTextElementById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue; 
    return textElement;
}

document.getElementById('per-player-calculate').addEventListener('click',function(){
    const inputField = getElementByInputField('per-player');
    const textField = getElementByTextField('total-player');
    const list = document.getElementById('name-list');
    const listLength = list.childNodes.length-1;
    const totalPlayer = textField+ inputField*listLength;
    setTextElementById('total-player', totalPlayer);
})






const buttons = document.getElementsByClassName('player');
for (const button of buttons) {
    button.addEventListener('click',function(event){
        
        const list = document.getElementById('name-list');
        if (list.childNodes.length<=5) {
            event.target.setAttribute('disabled','disabled');
            const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
            
            const li = document.createElement('li')
            li.innerText=playerName;
            list.appendChild(li);
            

        } else {
            alert('You Already added five member')
        }

    })


}
