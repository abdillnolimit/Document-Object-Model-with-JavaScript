//Source Code dari seri DOM Traversal dan Prevent Default

// const   close   = document.querySelectorAll('.close')
//console.log(close)    //untuk mengetahui indeks Nodelist sekaligus tag apa saja yang mengandung class='close'ini. Bisa check di console browser juga yaa.
// const   card    = document.querySelectorAll('.card')


// close.forEach(function(el)  { //sempat debugging hehe, ternyata penulisan foreach itu salah yaa gess...
//     el.addEventListener('click', function(e)    {
    //         e.target.parentElement.style.display    = 'none';
    //     })
    // }) 
    
    
    
    // Apa itu Prevent Defaulf (event.preventDefault() ) ???
    /*
    adalah sebuah method yang ada di dalam object event function(e) ini.
    Tujuannya adalah untuk menghentikan aksi default yang dilakukan oleh sebuah element.
    
    Mari kita liat study case nya.
    
    Sekarang, coba misalkan kita mendapati situasi di mana terdapat tag a yang berisi href dan digunakan sebagai
    tombol close. Hayoloh, seharusnya berganti page dong(melakukan aksi href) ??? memang iya!
    Bagaimana caranya mengatasi supaya tombol close tetap berfungsi sebagaimana mestinya (tag a tidak melakukan aksi default)?
    Selain itu, juga terdapat underlined seperti pada tag a beratribut href seperti biasanya.
    
    Nah, Prevent Default inilah yang akan menonaktifkan aksi default suatu element.
    
    Mari kita coba!
    */
   
   
   
   
   // close.forEach(function(el)  { //sempat debugging hehe, ternyata penulisan foreach itu salah yaa gess...
   //     el.addEventListener('click', function(e)    {
       //         e.target.parentElement.style.display    = 'none';
       //         e.preventDefault();
       //     })
       // }) //nah sekarang, program telah bekerja seperti semula / aksi closing
       
       
       
       
       // Event Bubbling   itu apa?
       /*
       Perlu diketahui bahwa jika kita menginputkan event pada element child, kemudian juga menginputkan event pada element pembungkusnya/parent-nya,
       terlepas event - nya sama atau tidak sama, maka program akan mengeksekusi dari child hingga parent di atasnya terus hingga parent ke-n.
       Cara eksekusi inilah yang dinamakan sebagai Event Bubbling.
       
       
       */
      
      
      
    //   const   close   = document.querySelectorAll('.close')
    //   const cards     = document.querySelectorAll('.card')
      
    //   close.forEach(function(el)  { //sempat debugging hehe, ternyata penulisan foreach itu salah yaa gess...
    //     el.addEventListener('click', function(e)    {
    //         e.target.parentElement.style.display    = 'none';
    //         e.preventDefault();
    //         e.stopPropagation();
    //     })
    // }) 

    // cards.forEach(function(card)    {
    //     card.addEventListener('click', function(e)  {
    //         alert('ok');
    //     })
    // }) // hasilnya : ketika diclick lalu alert dulu kemudian closing. Begitulah fenomena event bubbling hehehe.


    //kalau gamau dijalankan aksi dari elemen parent-nya, maka gunakan method e.stopPropagation() pada element child nya.



//Program yang lebih efektif
/*Misal saya kembalikan tag a beratribut href untuk tombol close pada dokumen HTML menjadi tag span seperti semula.


Misalkan, study case :
- kita menambahkan 1 tag div lagi yang isinya card juga sama seperti 4 tag div lainnya yg memiiki class='card', tetapi ketika kita
jalankan programnya  di browser, card yang baru tidak dapat diclose. Why???
btw kalian bisa coba di elements browser dlu aja, copas code-nya.



Ok, mari kita selesaikan.

Jika sebelumnya event bubbling itu mengeksekusi program dari child ke parent, bagaimana jika kita balik???
Bisa dong! dan kita dapat menginput satu event saja pada element parent lalu berlaku ke semua element child-nya.
*/

    // Misal kita pakai element parent yang memiliki class = ' container', satu tag div untuk membungkus 4 tag div child-nya.

const container = document.querySelector('.container')

container.addEventListener('click', function(e) {
    console.log(e.target);
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display    = 'none'
        e.preventDefault() //untuk mencegah aksi default oleh element lain yang tidak diharapkan.
    }
})






    
















