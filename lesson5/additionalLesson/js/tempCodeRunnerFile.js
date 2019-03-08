arr = []


 
for ( let i = 0; i < 7; i++ ) { 
    arr.push(Math.floor(Math.random()))
}

for ( let i in arr ) 
{ 
 return console.log(arr[i])
}