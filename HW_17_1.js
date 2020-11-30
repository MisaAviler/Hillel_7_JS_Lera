let cash = [{arg1:10,arg2:20,sum:30},{arg1:50,arg2:20,sum:70}];
let result;

function checkArguments(arg1, arg2){
    if( typeof arg1 == 'string' && typeof arg2 == 'string'){
        calculateForStrings(arg1, arg2);
    }

    else{
        calculateForNumbers(arg1, arg2);
    }
}

function calculateForStrings(arg1, arg2){
    for( let i = 0; i < cash.length; i++){

        for( let key in cash[i]) {
            if(arg1 == cash[i].arg1 && arg2 == cash[i].arg2){
                console.log(`Sum of ${arg1} and ${arg2} from CASH is ${cash[i].sum}`) ;
                return true;
            }
            break;
        }
    }
    if(calculateForStrings != true){
        sumIs(arg1, arg2);
    }
}

function calculateForNumbers(arg1, arg2){

    for( let i = 0; i < cash.length; i++){

        for( let key in cash[i]) {
            if(arg1 == cash[i].arg1 && arg2 == cash[i].arg2 || arg1 == cash[i].arg2 && arg2 == cash[i].arg1 ){
                console.log(`Sum of ${arg1} and ${arg2} from CASH is ${cash[i].sum}`) ;
                return true;
            }
            break;
        }
    }
    if(calculateForNumbers != true){
        sumIs(arg1, arg2);
    }
}

function sumIs(arg1, arg2){
    let savingAllArgumentsAndSum = {};
    savingAllArgumentsAndSum.arg1 = arg1;
    savingAllArgumentsAndSum.arg2 = arg2;
    result = arg1 + arg2;
    savingAllArgumentsAndSum.sum = result;

    console.log(savingAllArgumentsAndSum);
    cash.push(savingAllArgumentsAndSum);

    console.log(`Sum of ${arg1} and ${arg2} that calculated with function is ${result}`);
    console.log(cash);
    return result;
}

checkArguments(10,250);
checkArguments(50,20);
checkArguments(10,250);
checkArguments(250,10);
checkArguments('s','tr');
checkArguments('tr','s');
checkArguments('s','tr');