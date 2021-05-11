import clipboard from './clipboard.js'
import Encryptor from './Encryptor.js'

function showArrayIntoHtml(container,content){
    for(let i=0; i<content.length ; i++){
        let pELement = document.createElement('p')
        pELement.textContent = content[i];

        container.appendChild(pELement)
    }
}

let secretingBtn = document.getElementById('btn-secreting')
const DISPLAY_BOX = document.getElementById('result-box')
const DISPLAY_BOX_CONTENT = document.getElementById('result-box_content')

function isEmptyTextInput(input,condition='input') {
    let text
    if(condition === 'input'){
        text = input.textContent
    }
    else{
        text = input
    }
    const textWithoutSpace = text.replace(/^\s+/, '').replace(/\s+$/, '')

    return textWithoutSpace === '' ? true : false
 }

function start(){

    //Get input text to encrypt
    const textToEncrypt=  document.getElementById('textarea').value

    //Test if texarea is empty if is true show a message else
    //active encryting mode

    if(isEmptyTextInput(textToEncrypt,'text')){
        //Show a message to user
        DISPLAY_BOX_CONTENT.innerHTML = ''

        DISPLAY_BOX_CONTENT.insertAdjacentHTML('beforeend','<p>Waiting your secret</p>')

        //If exists a clipborad btn delete it
        if(document.getElementById('clipboaard-btn')){
            //Remove the clipboard box
            const CLIPBOARD_BOX = document.getElementById('result-box_clipboard')
            DISPLAY_BOX.removeChild(CLIPBOARD_BOX)
        }
    }
    else
    {
        //Encrypting the text
        DISPLAY_BOX_CONTENT.innerHTML = ''

        const encryptor = new Encryptor()
        const textEncrypted = encryptor.encrypt(textToEncrypt);
        showArrayIntoHtml(DISPLAY_BOX_CONTENT,textEncrypted)

        //Test if not exists a clipboard btn to create one

        if(!document.getElementById('clipboaard-btn')){

            //Create a clipboard btn inside result box
            DISPLAY_BOX.insertAdjacentHTML( 'beforeend',`<div class="result-box_clipboard" id="result-box_clipboard">
            <button class="clipboaard-btn" id="clipboaard-btn">Copy <i class="far fa-clipboard"></i></button>
            </div>`)
    
            //Add clipboard functionality to btn
            const CLIPBOARD_BTN = document.getElementById('clipboaard-btn')
            CLIPBOARD_BTN.addEventListener('click',()=>{clipboard(DISPLAY_BOX_CONTENT)})
        }
    }

}

secretingBtn.addEventListener('click',start)