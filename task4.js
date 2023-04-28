function check(inputArr){
    let [n, arr] = inputArr;
    let maxL = 0;
    let counter = {};
    let mn = n;
    let mx = 0
    function isBoring(){
        if (mx === mn + 1){
            if( Object.values(counter)
                .filter(item => item === mx).length === 1) return true;
        }
        if (mx === mn && mx === 1){
            return true;
        }
        if (mn === 1){
            if (Object.values(counter)
                .filter(item => item === mn).length === 1) return true ;
        }
        return false;
    }

    for (let i=0; i<n; i++){
        if (!(arr[i] in Object.keys(counter))){
            mn = 1;
            counter[arr[i]] = 1;
            mx = Math.max(...Object.values(counter));
        } else {
            counter[arr[i]] += 1;
            if (counter[arr[i]] > mx) mx = counter[arr[i]];
            mn = Math.min(...Object.values(counter));
        }
        let bor = isBoring();
        // console.log(bor)
        if (bor) maxL = i + 1;
    }
    // console.log(arr, maxL);
    return maxL;
}

let testCase = [
    [[13, [1, 2, 3, 1, 2, 2, 3, 3, 3, 1, 4, 4, 5]], 10],
    [[10, [1, 2, 4, 2, 3, 1, 3, 9, 15, 23]], 7],
    [[5, [1, 2, 3, 4, 5]], 5],

]

for (let i of testCase){
    console.log(check(i[0]) === i[1]);
}