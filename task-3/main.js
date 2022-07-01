const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var arr = input.split(','); // ['5', '2 4 7 12 9']
    
max = 0;
min = arr[0];
let index1;
let index2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>max) {
        max = arr[i];
        index1 = i;
    }
    else if (arr[i]<min) {
       min = arr[i] ;
       index2=i;
    }
}

let temp1 = arr[index1]
arr[index1] = arr[index2]
arr[index2] = temp1


console.log(arr);
 });
