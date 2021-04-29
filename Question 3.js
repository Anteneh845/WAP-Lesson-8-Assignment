let numberArray = [40, 1, 5, 200];

Array.prototype.sort = function () {
    let arr = this;
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
    return arr;
};

console.log(numberArray.sort());
