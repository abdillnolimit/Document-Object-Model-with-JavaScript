//Source Code dari seri DOM Traversal

const   close   = document.querySelectorAll('.close')
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




close.forEach(function(el)  { //sempat debugging hehe, ternyata penulisan foreach itu salah yaa gess...
    el.addEventListener('click', function(e)    {
        e.target.parentElement.style.display    = 'none';
        e.preventDefault();
    })
}) //nah sekarang, program telah bekerja seperti semula / aksi closing





























