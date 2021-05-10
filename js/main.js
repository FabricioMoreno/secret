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

function isEmptyTextInput(input) {
    const text = input.textContent
    const textWithoutSpace = text.replace(/^\s+/, '').replace(/\s+$/, '')

    return textWithoutSpace === '' ? true : false
 }

function start(){
    
    //Delete all content when btn is pressed
    DISPLAY_BOX_CONTENT.innerHTML = '' 
    
    //Encrypt input text
    const textToEncrypt=  document.getElementById('textarea').value
    const encryptor = new Encryptor()
    
    const textEncrypted = encryptor.encrypt(textToEncrypt);
    showArrayIntoHtml(DISPLAY_BOX_CONTENT,textEncrypted)
    
    
    //Test if exists content to create or delete clipboard btn

    if(!isEmptyTextInput(DISPLAY_BOX_CONTENT)){
        //Test if not exists a clipboard btn to create one

        if(!document.getElementById('clipboaard-btn')){

            //Create a clipboard btn inside result box
            DISPLAY_BOX.insertAdjacentHTML( 'beforeend',`<div class="result-box_clipboard" id="result-box_clipboard">
            <button class="clipboaard-btn" id="clipboaard-btn">Copy</button>
            </div>`)
    
            //Add clipboard functionality to btn
            const CLIPBOARD_BTN = document.getElementById('clipboaard-btn')
            CLIPBOARD_BTN.addEventListener('click',()=>{clipboard(DISPLAY_BOX_CONTENT)})
        }
    }
    else{
        
        if(document.getElementById('clipboaard-btn')){
            //Remove the clipboard box
            const CLIPBOARD_BOX = document.getElementById('result-box_clipboard')
            DISPLAY_BOX.removeChild(CLIPBOARD_BOX)
        }
    }

}

secretingBtn.addEventListener('click',start)