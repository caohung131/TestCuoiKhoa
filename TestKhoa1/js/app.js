// // <!-- Bài 1: Đề bài:
// // Tạo một ứng dụng web, cho phép nhập vào 2 số a và b (a<b). 
// // Hiển thị tổng các số nguyên tố trong khoảng a và b. 
// // Tạo giao diện nhập 2 số và in kết quả trên giao diện web -->


    let a, b, i, j;
    let inputA_ele;
    let inputB_ele;
    let kq= '';
    let sum = 0;
    inputA_ele =  document.getElementById("a");
    inputB_ele =  document.getElementById("b");

    let button1Ele = document.getElementById("submit1");
 

    console.log( inputA_ele , inputB_ele);

    button1Ele.addEventListener("click", (event) => {
        a =inputA_ele.value;
        b = inputB_ele.value;

        if (a <= 2)
        {
            a = 2;
            if (b >= 2)
            {
                document.write(a," ");
                a++;
            }
        }
     
        if (a % 2 == 0)
            a++;
     
        for (i = a; i <= b; i = i + 2) {
     
            let flag = 1;
     
            for (j = 2; j * j <= i; ++j) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
            }
     
            if (flag == 1){
              if(i == 1)  continue;
              else
                kq = document.write(i, " + ");
                sum+= i;
            }
        }
        
        document.write("= ", sum)
        // document.write("= ", kq)
    
    });
 
   
// // Bài 2

// Viết một function có tên numberOneTriangle().
//  Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác

// function numberOneTriangle(n)  {
//     for(let i = 0; i < n2; i++) {
//         for(let j =0; j <=i; j++) {
//             document.write(" * ");
//         }
//         document.write("</br>");
    
//     }
// };
// let n2 = Number(prompt("Nhập vào 1 số nguyên trong khoảng 1 đến 10:"));

// numberOneTriangle(n2);
// // console.log(n2);



