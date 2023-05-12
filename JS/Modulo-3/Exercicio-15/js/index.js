import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import themeSwitcher from "./themeSwitcher.js"
import { handleBtnClear, handleButtonPress, handleKeyDown } from "./keysHandlers.js"


document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click',handleButtonPress)
})
input.addEventListener('keydown',handleKeyDown)
document.getElementById('clear').addEventListener('click',handleBtnClear)
document.getElementById('equal').addEventListener('click',calculate)
document.getElementById('themeSwitcher').addEventListener('click',themeSwitcher)
document.getElementById('copyToClipboard').addEventListener('click',copyToClipboard)

