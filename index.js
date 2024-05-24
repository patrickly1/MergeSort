function Merge(Arr1, Arr2) {
    let mergedArr = [];
    let Arr1Index = 0;
    let Arr2Index = 0;

    //console.log(Arr1, Arr2);
    
    while (Arr1Index < Arr1.length && Arr2Index < Arr2.length) {
        if (Arr1[Arr1Index] >= Arr2[Arr2Index]) {
            mergedArr.push(Arr2[Arr2Index]);
            Arr2Index++;
        } else if (Arr1[Arr1Index] < Arr2[Arr2Index]) {
            mergedArr.push(Arr1[Arr1Index]);
            Arr1Index++;
        }
    }

    while (Arr1Index < Arr1.length) {
        mergedArr.push(Arr1[Arr1Index]);
        Arr1Index++;
    }

    while (Arr2Index < Arr2.length) {
        mergedArr.push(Arr2[Arr2Index]);
        Arr2Index++;
    }

    return mergedArr;
}

function MergeSort(Arr) {
    if (Arr.length <= 1) {
        return Arr;
    }

    let index = Math.floor(Arr.length / 2);
    
    let Arr1 = Arr.slice(0, index);
    let Arr2 = Arr.slice(index);

    let sortedArr1 = MergeSort(Arr1);
    let sortedArr2 = MergeSort(Arr2);

    return Merge(sortedArr1, sortedArr2);
}

console.log(MergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(MergeSort([105, 79, 100, 110]))
console.log("Hello")