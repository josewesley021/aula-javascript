function number(numero){
     if(typeof numero !== 'number') return numero
     if(numero % 3 === 0 && numero % 5 ===0 ) return'fizzbuzz'
     if(numero % 3 === 0 ) return'fizz'
     if(numero % 5 ===0 ) return'buzz'
     if(! numero % 3 % 5 === 0 ) return'NAN'
     return numero    
}








for(let i = 0; i <= 100; i++){
    console.log(i, number(i))
}