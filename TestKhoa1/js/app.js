// // <!-- Bài 1: Đề bài:
// // Tạo một ứng dụng web, cho phép nhập vào 2 số a và b (a<b). 
// // Hiển thị tổng các số nguyên tố trong khoảng a và b. 
// // Tạo giao diện nhập 2 số và in kết quả trên giao diện web -->

// let a; 
// let b;
// let sum = 0;
// let n;

// do {
//      a = Number(prompt("Nhập vào số a :"));
//      b = Number(prompt("NHập vào số b : (b>a)"));
//      if(a>b) {
//         alert("Bạn phải nhập số b>a");
//     }
// } while (a>b);

// console.log(a);
// console.log(b);


// function checkNT(n) {

//     if(n<2) {
//         return false;
//     } else if(n == 2) {
//         return  true;
//     } else if(n%2 == 0) {
//         return  false;
//     } else {
//         for(let i = 3 ; i <= n; i+2) {
//             if(n % i == 0) {
//                 return false;
//             }
//         }
//     }
// }


// for(let i = a; i<=b; i++) {

//     if(checkNT(i)) {   
//         sum +=i;
//     }


// }

// console.log(sum);



// // Bài 2

// Viết một function có tên numberOneTriangle().
//  Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác

function numberOneTriangle(n)  {
    for(let i = 0; i < n2; i++) {
        for(let j =0; j <=i; j++) {
            document.write(" * ");
        }
        document.write("</br>");
    
    }
};
let n2 = Number(prompt("Nhập vào 1 số nguyên trong khoảng 1 đến 10:"));

numberOneTriangle(n2);
// console.log(n2);



