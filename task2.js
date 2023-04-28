function check(arr){
    let [n, m, k] = arr;
    return Math.ceil(n * k / m);
}

let testCase = [
    [[3, 2, 2], 3],
    [[7, 3, 2], 5],
    [[6, 3, 3], 6],
    [[4, 2, 2], 4],
    [[3, 2, 1], 2],
]

for (let i of testCase){
    console.log(check(i[0]) === i[1]);
}
/*
n = 3
m = 2
k = 2

   1 2 3 4 5
1: 1 3 2
2: 2 1 3

n = 7
m = 3
k = 2

   1 2 3 4 5
1: 1 4 7 3 6
2: 2 5 1 4 7
3: 3 6 2 5

n = 6
m = 3
k = 3

   1 2 3 4 5 6
1: 1 4 2 5 3 6
2: 2 5 3 6 4 1
3: 3 6 4 1 5 2

n = 4
m = 2
k = 2

   1 2 3 4 5 6
1: 1 3 2 4
2: 2 4 3 1

n = 3
m = 2
k = 1

   1 2 3 4 5 6
1: 1 3
2: 2
*/