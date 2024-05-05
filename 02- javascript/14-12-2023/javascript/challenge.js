const randomArray = ["bmw", "porshe", "seat", "vw", "ferrari", "tesla", "togg", "audi"];

const sortedArray = [];
sortedArray[0] = randomArray.shift();

function sortFactory(randomArray, sortedArray){

    if(randomArray[0] < sortedArray[0]){
        sortedArray.unshift(randomArray[0]);
    }
    else{
        pushToFittedIndex(sortedArray, 0, randomArray[0]);
    }

    randomArray.shift();

    if(randomArray.length > 0){
        sortFactory(randomArray, sortedArray);
    }
    
    return sortedArray;
}

function pushToFittedIndex(sortedArray, index, value){

    if(sortedArray[index] < value){
        if(index + 1 != sortedArray.length){
            if(sortedArray[index + 1] > value){
                var indexToEndArray = sortedArray.slice(index + 1, sortedArray.length);

                sortedArray.splice(index + 1, sortedArray.length);
                sortedArray.push(value);
                insertArrayOneByOne(indexToEndArray, sortedArray);
            }
            else{
                pushToFittedIndex(sortedArray, index + 1, value);
            }
        }
        else{
            sortedArray.push(value);
        }
    }
    else{
        pushToFittedIndex(sortedArray, index + 1, value);
    }
}

function insertArrayOneByOne(indexToEndArray, sortedArray){
    if(indexToEndArray.length > 0){
        sortedArray.push(indexToEndArray[0]);
        indexToEndArray.shift();
        insertArrayOneByOne(indexToEndArray, sortedArray);
    }
}

console.log(sortFactory(randomArray, sortedArray));