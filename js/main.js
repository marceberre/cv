document.getElementById('logo1').addEventListener('mouseover',function(){
    mostrar_info('Hola, mi nombre es','Marcelo Berretta');
})
document.getElementById('logo2').addEventListener('mouseover',function(){
    mostrar_info('Mi mail','marcelo.berretta@hotmail.com');
})
document.getElementById('logo3').addEventListener('mouseover',function(){
    mostrar_info('Mi dirección','Roca 123, CABA');
})
document.getElementById('logo4').addEventListener('mouseover',function(){
    mostrar_info('Mi teléfono','2966 xxxxxx');
})
document.getElementById('logo5').addEventListener('mouseover',function(){
    mostrar_info('Mi fecha de nacimiento','27 de febrero de 1964');
})





function mostrar_info(a,b){
    document.getElementById('dato1').innerHTML = a;
    document.getElementById('dato2').innerHTML = b;
}
