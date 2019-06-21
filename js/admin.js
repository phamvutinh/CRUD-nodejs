// var table = document.getElementById('data')
// var input = document.getElementById('input');
// var text = document.querySelectorAll('input');
// var tinhtinh = 1;
// var cucu;
// var [text1, text2, text3, text4] = text;
// //  All var can call


// deleteN = count => {
//     // var valueDelete = count.parentElement.parentElement.rowIndex;
//     // table.deleteRow(valueDelete);
//     $.ajax({
//         url: 'http://localhost:3000/data',
//         complete: function (data) {
//             var json = data.responseJSON.products;
//             delete json[count];
//             data.responseJSON.products = data.responseJSON.products.filter((product) => { return product.index !== count });

//         }
//     });
// }


// updateN = (e) => {
//     var valueUpdate = table.rows[e].cells;
//     var ar = [];
//     for (const key of valueUpdate) {
//         ar.push(key.textContent)
//     };
//     [text1.value, text2.value, text3.value] = [ar[1], valueUpdate[2].querySelector('img').src, ar[3]];
//     cucu = e;

// }

// check = n => {
//     var nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
//     if (nameRegex.test(n))
//         return true;
//     else
//         alert('Trường tên nhập chữ cái từ A -> Z không có số hoặc để trống');
//     return false;
// }
// checkMail = n => {
//     var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//     if (emailReg.test(n))
//         return true;
//     else
//         alert('Sai email kìa');
//     return false;
// }
// checkNum = n => {
//     if (n <= 10 && n >= 0) {
//         return true
//     } else
//         alert('Chỉ được nhập điểm từ 0-10 thui')
//     return false
// }

// function click
// input.addEventListener('click', () => {
//     if (check(text1.value) && checkMail(text4.value) && checkNum(text2.value)) {
//         inputfn(text1.value, text2.value, text3.value, text4.value);
//     }
// })
// // clear function
// document.getElementById('clear').addEventListener('click', () => {
//     [text1.value, text2.value, text3.value, text4.value] = ['', '', '', ''];
// })
// document.querySelector('#hihi').addEventListener('click', function () {
//     var ar2 = [];
//     console.log(cucu);
//     for (const key2 of table.rows[cucu].cells) {
//         ar2.push(key2)
//     }
//     [ar2[0].textContent, ar2[1].textContent, ar2[2].textContent, ar2[3].textContent] = [text1.value, text2.value, text3.value, text4.value];
//     table.rows[cucu].cells[4].textContent = (ar2[1].textContent >= 9) ? 'Giỏi' : (ar2[1].textContent >= 8) ? 'Khá' : (ar2[1].textContent > 6.5) ? 'Trung bình' : 'Ngu'
// })





/////////////// New 
// const fs = require('fs');
var table = document.getElementById('data')
var input = document.getElementById('input');
var text = document.querySelectorAll('input');
var [text1, text2, text3, text4] = text;
// var tinhtinh = 1;
var cucu;
//  All var can call

updateN = (e) => {
    var valueUpdate = e.parentElement.parentElement.children;
    var ar = [];
    for (const key of valueUpdate) {
        ar.push(key.textContent)
    };
    [text1.value, text2.value, text3.value,text4.value] = [ar[1], valueUpdate[2].querySelector('img').src, ar[3],ar[0]];
    
}
document.querySelector('#input').addEventListener('click',() =>{
    console.log([text1.value, text2.value, text3.value]);
})