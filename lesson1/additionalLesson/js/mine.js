'use scriсt'

let param = '33721'

function multiplay (num)  { 
        var sum = Number(num[0])
        for (let i = 0; i < num.length; i+1) 
        {
            j = i++
            if (j > num.length-2) { break; } else 
            {  
            sum = sum * Number(num[j+1]) 
            }
        }
  return sum 
}

let mult =  String(multiplay('33721') ** 3) 

console.log(`Умножение - ${mult[0]}${mult[1]}`)