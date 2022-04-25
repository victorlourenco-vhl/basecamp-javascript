const maca = {
    value: 2,
}
const laranja = {
    value: 3, 
}

function mapComthis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,2];

console.log('this -> maca', mapComthis(nums, maca));
console.log('this -> laranja', mapComthis(nums, maca));

function mapSemThis(arr){
    return arr.map(function (item){
        return item * 2;
    });
}

const nums2 = [1, 2, 3, 4, 5];

console.log(mapSemThis(nums2));