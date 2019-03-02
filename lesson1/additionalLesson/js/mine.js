'use script'

math = {
    multiplay: (num) => { 
        var sum = Number(num[0])
        for (let i = 0; i < num.length; i+1) {
            j = i++
            if (j > num.length-2) { break; } else { console.log(`оборот ${i} ` + 'сумма: ' + sum, 'умножение: ' + sum + '*' +  num[j+1])
            console.log(sum = sum * Number(num[j+1])); }
                   
}
}, 
    plus: (num) => { 
            var sum = Number(num[0])
            
            for (let i = 0 ; i < num.length; i+1) {
                j = i++;
                if ( i > num.length-1 ) { break; } else { console.log(`оборот ${i} ` + 'сумма: ' + sum, 'сложение: ' + sum + '+' +  num[j+1])
                console.log(sum = sum + Number(num[j+1])); }
                         
    }
}}
math.multiplay("33721") 
math.plus("33721") 