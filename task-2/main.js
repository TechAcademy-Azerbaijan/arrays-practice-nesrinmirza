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
    
    index = []
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i]>arr[i-1] && arr[i]>arr[i+1] && arr!=undefined) {
           index.push(arr[i]);
        }
        
    }
    console.log(index.length);
 });
