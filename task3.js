function check(arr){
    let [n, str] = arr;
    let pos = {
        'a': -1,
        'b': -1,
        'c': -1,
        'd': -1
    }
    let left = -1;
    let right = str.length;

    for (let i=0; i<str.length; i++){
        pos[str[i]] = i;

        let leftCurr = Math.min(...Object.values(pos));

        if (leftCurr !== -1) {
            // console.log(leftCurr);
            if ((i - leftCurr) < (right - left)) {
                right = i;
                left = leftCurr;
            }
        }
        // console.log(pos);
        // console.log(left, right);
    }

    return (left !== -1 && right !== -1) ? right - left + 1 : -1;



}

let testCase = [
    [[12, 'aabbccddbadd'], 5],
    [[16, 'aaaabbbbccccdddd'], 10],
    [[7, 'dbbccca'], 7],
    [[7, 'abcabac'], -1],

]

for (let i of testCase){
    console.log(check(i[0]) === i[1]);
}