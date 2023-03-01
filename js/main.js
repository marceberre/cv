document.getElementById('logo1').addEventListener('mouseover',function(){
    mostrar_info('Hola, mi nombre es','Marcelo Berretta');
})
document.getElementById('logo2').addEventListener('mouseover',function(){
    mostrar_info('Mi mail','mrcb@live.com.ar');
})
document.getElementById('logo3').addEventListener('mouseover',function(){
    mostrar_info('Mi dirección','El Calafate SC');
})
document.getElementById('logo4').addEventListener('mouseover',function(){
    mostrar_info('Mi teléfono','2966 640433');
})
document.getElementById('logo5').addEventListener('mouseover',function(){
    mostrar_info('Mi fecha de nacimiento','27 de febrero');
})





function mostrar_info(a,b){
    document.getElementById('dato1').innerHTML = a;
    document.getElementById('dato2').innerHTML = b;
}
