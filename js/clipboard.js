export default function clipboard(element){
    
    const elementToSelected = element
    let range = document.createRange()
    let selection = window.getSelection()

    selection.removeAllRanges()

    range.selectNodeContents(elementToSelected)

    selection.addRange(range)

    document.execCommand('copy')
    
    selection.removeAllRanges();

}