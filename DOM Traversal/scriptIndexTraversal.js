//DOM Traversal Method (yang sering dipakai)
/*
-   parentNode                  :   node(outputnya)
-   parentElement               :   element(outputnya)
-   nextSibling                 :   node(outputnya)
-   nextElementSibling          :   element(outputnya)
-   previousSibling             :   node(outputnya)
-   previousElementSibling      :   element(outputnya)
-   dll...

*/


//Mengapa kita perlu mempelajari DOM Traversal ?
/* DOM Traversal pada intinya membantu kita dalam penelusuran element/node di dalam DOM, atau
penelusuran antar element/node di dalam DOM.



*/

// Menggunakan Event Handling
// const   close = document.querySelector('.close')
// const   card  = document.querySelector('.card')

// close.addEventListener('click', function()  {
//     card.style.display  = 'none';
// }) //nah, pemakaian seperti ini sudah tidak disarankan lagi yaa. Mari menggunkan Traversal!




//Menggunakan DOM Traversal
const   close   = document.querySelectorAll('.close')
    //console.log(close)    //untuk mengetahui indeks Nodelist sekaligus tag apa saja yang mengandung class='close'ini. Bisa check di console browser juga yaa.
const   card    = document.querySelectorAll('.card')

// for(let i = 0; i < close.length; i++ )  {
//     close[i].addEventListener('click', function()   {
//         alert('tombol ke-' + i)
//     }) //btw klik nya tepat di simbol close-nya yaa.
// }


    //click simbol close lalu hilang

// for( let i = 0; i<close.length; i++ )   {
//     close[i].addEventListener('click', function()   {
//         card[i].style.display   = 'none';
//     }) 
// } //menggunakan eventHandling dan CSS, atau


// for( let i = 0; i<close.length; i++ )   {
//     close[i].addEventListener('click', function()   {
//         close[i].parentElement.style.display   = 'none';
//     }) 
// } //menggunakan traversal DOM Method, tetapi kurang ringkas, yang lebih ringkas sebagai berikut,



// for( let i = 0; i<close.length; i++ )   {
//     close[i].addEventListener('click', function(e)   {
//         // close[i].parentElement.style.display   = 'none';
//         //console.log(e); // untuk memeriksa event apa saja oleh parameter e , dan spesifikasi CSS lainnya.
//         // console.log(e.target); untuk memeriksa element/node apa yang menjadi target secara spesifik.
//         e.target.parentElement.style.display    = 'none';

//     }) // atau bisa juga sebagai berikut (lebih elegan),
// }

    //Penulisan yang lebih sering digunakan pada DOM Traversal Method
close.forEach(function(el)  { //sempat debugging hehe, ternyata penulisan foreach itu salah yaa gess...
    el.addEventListener('click', function(e)    {
        e.target.parentElement.style.display    = 'none';
    })
}) 


const nama  =   document.querySelector('.nama')
    // console.log(nama.nextSibling); // untuk memeriksa element yang ditelusuri secara nextsibling, dan btw 'enter' atau 'spasi' (di console browser keywordnya #text)juga termasuk node ya gess... perlu hati-hati lagi.
    // console.log(nama.previousElementSibling); secara previousSibling
    //kalau gamau terganggu node text seperti spasi atau enter pakai method khusus elementsibling
    //console.log(nama.previousElementSibling.previousElementSibling)   // hasilnya null, benar, karena memang tidak ada lagi element previous nya.




















