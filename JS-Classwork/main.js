function plusK(arr, k){
    let cicle = arr.length;
    for(let i = 0; i < cicle-k; i++) {
        for (let a = 0; a < cicle; a++){
            let x = arr[a - 1];
            arr[a - 1] = arr[a];
            arr[a] = x;
        }
        console.log(arr);
    }
    return arr;
}
arr = prompt("array?", ' ') .split("")
k = prompt("k?", ' ') 
alert(plusK(arr, k))