const setActualYear = function(screen) {

    let arr = [];
    

    for( let i = 0; i < screen.length; i++){
        for( let x = 0; x < screen[i].days.length; x++){
            arr = arr.concat(screen[i].days[x].year)
        }
    }
    console.log(arr);

    let x = arr[0]
    let arr1 = [];
    let arr2 = [];

    for ( let i = 0; i < arr.length; i++ ){
        arr[i] === x ? arr1 = arr1.concat(arr[i]) :
        arr[i] === (+x + 1) + '' ? arr2 = arr2.concat(arr[i]) : null
    }


   let result = arr1.length > arr2.length ? arr1[0] : arr2[0]

    

    return result;
}

export default setActualYear