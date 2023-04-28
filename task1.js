function check(arr){
    let neYb = arr[0] >= arr[1] && arr[1] >= arr[2]
        && arr[2] >= arr[3];
    let neVoz = arr[0] <= arr[1] && arr[1] <= arr[2]
        && arr[2] <= arr[3];
   
    return (neYb || neVoz)  ?  'YES': 'NO';
}

let testCase = [
    [[1, 2, 3, 4], 'YES'],
    [[7, 6, 5, 5], 'YES'],
    [[4, 4, 4, 4], 'YES'],
    [[5, 2, 3, 1], 'NO']
]

for (let i of testCase){
    console.log(check(i[0]) === i[1]);
}
