const hintBtn = document.querySelector('#hintBtn')
const txt = document.querySelector('#txt')
hintBtn.addEventListener('click', () => {
//txt.textContent = 'I Changed you !!!';
 writeTxt();
});
function writeTxt () {
    const text = 'to walk unsteadily, as like a baby';
    txt.textContent = '';
    let count = 0;
     const id = setInterval(() => {
        if (count === text.length - 1) clearInterval(id);
            txt.textContent += text[count];
            count++; //count++ keeps adding 1 to the value of count
    }, 100);
}
let score = 0;
const checkBtn = document.querySelector('#checkBtn');
checkBtn.addEventListener('click', () =>{
console.log('I Have just been clicked');
    document.querySelector('#cup > i').textContent = score;
    score += 5;
});
document.querySelector('#action').style.backgroundImage = `url('error_fawzi_mourad.gif')`
const tid = setTimeout(() =>{
    document.querySelector('#action').style.backgroundImage = 'none';
    clearTimeout(tid);

 },2000);

//STRING Methods
//.slice(start, end) this slices a portion of the string
//.concat(...strings) joins all chairs in a string
//.trim() it removes spaces at the beginning and end of a string
//.at(...index)//chooses the char at the index
//.length tells how many chars are in a string
//.toLowerCase() //writes all chars in lower case
//.toUpperCase() //writes all chars in upper case
//.endsWith('') //returns true if the char of the string matches the last char
//.startsWith('') returns true if the char of the string matches the first char