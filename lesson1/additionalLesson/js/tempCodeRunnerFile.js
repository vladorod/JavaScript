math = {
    multiplay: (num) => { 
        var sum = Number(num[0])
        for (let i = 0; i < num.length; i+1) {
            j = i++
            console.log(`оборот ${i} ` + 'сумма: ' + sum, 'умножение: ' + sum + '*' +  num[j+1])
            console.log(sum = sum * Number(num[j+1]));            
}
}, 
    plus: (num) => { 
            var sum = Number(num[0])
            for (let i = 0 ; i < num.length; i+1) {
                j = i++;
                if ( j < num.length ) { break; } else { console.log(`оборот ${i} ` + 'сумма: ' + sum, 'сложение: ' + sum + '+' +  num[j+1])
                console.log(sum = sum + Number(num[j+1])); }
                         
    }
}}
math.plus("33721") 