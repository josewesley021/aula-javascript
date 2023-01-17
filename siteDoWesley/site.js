// var nome = prompt('digite seu nome')
// let resposta = confirm(`o seu nome é ${nome} ?`)

// if(resposta == true) {
    // alert(`Bem Vindo(a) ${nome}`)
// }else {
    // var nomen = prompt('digite seu nome novamente')
    // alert(`Bem Vindo(a) ${nomen}`)
// }



function bt(){
    var n1 = document.getElementById('n1prt')
    var n2 = document.getElementById('n2prt')
    var n3 = document.getElementById('n3prt')
    var n4 = document.getElementById('n4prt')

    let nn1 = Number(n1.value)
    let nn2 = Number(n2.value)
    let nn3 = Number(n3.value)
    let nn4 = Number(n4.value)
    res = (nn1 + nn2 + nn3 + nn4)/4

    if(res<6) {
        alert(`você está reprovado sua nota de português é ${res}`)
    }else{
        res>6
        alert(`você passou sua nota de português é ${res}`)
    }   

    var n1 = document.getElementById('n1mtm')
    var n2 = document.getElementById('n2mtm')
    var n3 = document.getElementById('n3mtm')
    var n4 = document.getElementById('n4mtm')

    let nnn1 = Number(n1.value)
    let nnn2 = Number(n2.value)
    let nnn3 = Number(n3.value)
    let nnn4 = Number(n4.value)
    res = (nnn1 + nnn2 + nnn3 + nnn4)/4

    if(res<6) {
        alert(`você está reprovado sua nota de matemàtica é ${res}`)
    }else{
        res>6
        alert(`você passou sua nota de matemàtica é ${res}`)
    } 
    
    var n1 = document.getElementById('n1hst')
    var n2 = document.getElementById('n2hst')
    var n3 = document.getElementById('n3hst')
    var n4 = document.getElementById('n4hst')

    let nnnn1 = Number(n1.value)
    let nnnn2 = Number(n2.value)
    let nnnn3 = Number(n3.value)
    let nnnn4 = Number(n4.value)
    res = (nnnn1 + nnnn2 + nnnn3 + nnnn4)/4

    if(res<6) {
        alert(`você está reprovado sua nota de história é ${res}`)
    }else{
        res>6
        alert(`você passou sua nota de história é ${res}`)
    }  
    
    var n1 = document.getElementById('n1cnc')
    var n2 = document.getElementById('n2cnc')
    var n3 = document.getElementById('n3cnc')
    var n4 = document.getElementById('n4cnc')

    let nnnnn1 = Number(n1.value)
    let nnnnn2 = Number(n2.value)
    let nnnnn3 = Number(n3.value)
    let nnnnn4 = Number(n4.value)
    res = (nnnnn1 + nnnnn2 + nnnnn3 + nnnnn4)/4
    
    if(res<6) {
        alert(`você está reprovado sua nota de ciência é ${res}`)
    }else{
        res>6
        alert(`você passou sua nota de ciência é ${res}`)
    }

    var n1 = document.getElementById('n1edf')
    var n2 = document.getElementById('n2edf')
    var n3 = document.getElementById('n3edf')
    var n4 = document.getElementById('n4edf')

    let enn1 = Number(n1.value)
    let enn2 = Number(n2.value)
    let enn3 = Number(n3.value)
    let enn4 = Number(n4.value)
    res = (enn1 + enn2 + enn3 + enn4)/4

    if(res<6) {
        alert(`você está reprovado sua nota de educação física é ${res}`)
    }else{
        res>6
        alert(`você passou sua nota de educação física é ${res}`)
    }

    var n1 = document.getElementById('n1eng')
    var n2 = document.getElementById('n2eng')
    var n3 = document.getElementById('n3eng')
    var n4 = document.getElementById('n4eng')

    let pnn1 = Number(n1.value)
    let pnn2 = Number(n2.value)
    let pnn3 = Number(n3.value)
    let pnn4 = Number(n4.value)
    res = (pnn1 + pnn2 + pnn3 + pnn4)/4

    if(res<6) {
        alert(`você está reprovado sua nota de english é ${res}`)
    }else{
        res>6
        alert(`você passou sua nota de english é ${res}`)
    }  
    
    var n1 = document.getElementById('n1geg')
    var n2 = document.getElementById('n2geg')
    var n3 = document.getElementById('n3geg')
    var n4 = document.getElementById('n4geg')

    let gnn1 = Number(n1.value)
    let gnn2 = Number(n2.value)
    let gnn3 = Number(n3.value)
    let gnn4 = Number(n4.value)
    res = (gnn1 + gnn2 + gnn3 + gnn4)/4

    if(res<6) {
        alert(`você está reprovado sua nota de geografia é ${res}`)
    }else{
        res>6
        alert(`você passou sua nota de geografia é ${res}`)
    }  
}






