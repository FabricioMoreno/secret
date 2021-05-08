export default class Encryptor{
    constructor(text){
        this.ALPHABET = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];        
    }
    getAlphabetRandomNumber(){
        const NUMBER_SPANISH_ALPHABET_LETTERS = 27
        return Math.floor(Math.random()* (NUMBER_SPANISH_ALPHABET_LETTERS)) //[0,29) -> Beginning INCLUDED | Final EXCLUDED
    }
    getLetterPositionArray(letter){
        const indexLetter = this.ALPHABET.indexOf(letter)
        if(indexLetter === -1){
            return letter
        }
        return indexLetter
    }
    getLetterALphabet(indexLetterPositon){
        if(typeof indexLetterPositon !== 'number'){
            return indexLetterPositon
        }
        return this.ALPHABET[indexLetterPositon]
    }

    encrypt(text){

        const textToEncrypt = text.toLowerCase().split('')

        const textEncrypted = textToEncrypt.map((letter)=>{

            const letterPosition = this.getLetterPositionArray(letter)
            const randomLetterPosition = this.getAlphabetRandomNumber()

            if(letterPosition > randomLetterPosition){
                const range = letterPosition - randomLetterPosition
                //const message = `${this.getLetterALphabet(randomLetterPosition)}+${range} :::::${letter} ->> ${randomLetterPosition}`
                const message = `${this.getLetterALphabet(randomLetterPosition)}+${range}`
                //console.log(message)
                return message
            }
            else if(letterPosition < randomLetterPosition){
                const range = randomLetterPosition - letterPosition
                //const message = `${this.getLetterALphabet(randomLetterPosition)}-${range} :::::${letter} ->> ${randomLetterPosition}`
                const message = `${this.getLetterALphabet(randomLetterPosition)}-${range}`
                //console.log(message)
                return message 
            }      
            return letter 
        })

        return textEncrypted
    }
}