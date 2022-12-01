function Celsius(){
    var n1 = parseInt(document.getElementById('Cel').value)
    document.getElementById('resultado').innerHTML = (n1-32)/1.8 + "ºF"
}

function Fah(){
    var n1 = parseInt(document.getElementById('Cel').value)
    document.getElementById('resultado').innerHTML = (n1*1.8)+32 + "ºC"
}
