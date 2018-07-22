
const setActualMonth = function(screen) {

    let arr = [];
    

    for( let i = 0; i < screen.length; i++){
        for( let x = 0; x < screen[i].days.length; x++){
            arr = arr.concat(screen[i].days[x].month)
        }
    }

    let x = arr[0]
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    for ( let i = 0; i < arr.length; i++ ){
        arr[i] === x ? arr1 = arr1.concat(arr[i]) :
        arr[i] === +x + 1 + '' || arr[i] === +x + 1 - 12 + '' ? arr2 = arr2.concat(arr[i]) :
        arr[i] === +x + 2 + '' || arr[i] === +x + 2 - 12 + '' ? arr3 = arr3.concat(arr[i]) : null
    }

    console.log(arr1, arr2, arr3)


   let result = arr1.length > arr2.length ? arr1.length > arr3.length ? arr1[0] : arr3[0] : arr2[0]


    let name = (function(month){
        switch (month){
            case '0': 
                return 'January';
                break;
            case '1': 
                return 'February';
                break;
            case '2': 
                return 'March';
                break;
            case '3': 
                return 'April';
                break;
            case '4': 
                return 'May';
                break;
            case '5': 
                return 'June';
                break;
            case '6': 
                return 'July';
                break;
            case '7': 
                return 'August';
                break;
            case '8': 
                return 'September';
                break;
            case '9': 
                return 'October';
                break;
            case '10': 
                return 'November';
                break;
            case '11': 
                return 'December';
                break; 

            default: return null
        }
    }(result));

    return name
}

export default setActualMonth