function getCount(arr) {
    arr.sort();
    for (var i = arr.length - 1; i > 0; i--) {
        result = arr[arr.length - 1] + arr[i];
        if (result % 2 == 0) {
            return result;
        }
    }
}
var arr = [1, 2, 3, 8, 5, 6, 7, 9];
console.log('Result', getCount(arr));