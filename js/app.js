



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
