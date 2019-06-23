Validate = () =>{
    if (text1.value && text3.value) {
        return true
    }else{
        alert('Chưa nhập giá trị yêu cầu')
        return false
    }
}
// clear function
document.getElementById('clear').addEventListener('click', () => {
    [text1.value, text3.value,text4.value] = ['', '', ''];
})

/////////////// New 
var table = document.getElementById('data')
var input = document.getElementById('input');
var text = document.querySelectorAll('input');
var [text1, text2, text3, text4] = text;
var cucu;
//  All var can call

updateN = (e) => {
    var valueUpdate = e.parentElement.parentElement.children;
    var ar = [];
    for (const key of valueUpdate) {
        ar.push(key.textContent)
    };
    [text1.value, text3.value,text4.value] = [ar[1], ar[3],ar[0]];
}
document.querySelector('#input').addEventListener('click',() =>{
    console.log([text1.value, text2.value, text3.value]);
})