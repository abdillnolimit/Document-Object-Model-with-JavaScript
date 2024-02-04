// Events DOM Lengkap :     https://developer.mozilla.org/en-US/docs/Web/Events 




// onclick lalu berubah warna/style
const p3    = document.querySelector('.p3')
    // p3.style.backgroundColor    = 'lightblue' //default active
const p2    = document.querySelector('.p2')

function ubahWarnaP2()    {
    p2.style.backgroundColor    = 'lightblue'
}
    p2.onclick  = ubahWarnaP2

function ubahWarnaP3()    {
    p3.style.backgroundColor    = 'lightblue'
}
    p3.onclick  = ubahWarnaP3
    
    //capek ga? woiya jelas! next kita bahas cara elegannya, yaitu pakai addEventListener()
    
    
    // onclick lalu membuat alert dan element baru
    const p4 = document.querySelector(' section#b p')
    p4.addEventListener('click', function() {
        alert(('ok'))
    })
    
    
    
    p4.addEventListener('click', function() {
        const ul    = document.querySelector(' section#b ul')
        const liBaru = document.createElement('li')
        const teksLiBaru = document.createTextNode('item baru')
        liBaru.appendChild(teksLiBaru)
        ul.appendChild(liBaru)
    })
    
    
    //Apa perbedaan EvendHandler dan EventListener ?
    /*
    EventHandler adalah cara lama, dan faktanya apa yang bisa dilakukan eventhandler
    juga bisa dilakukan oleh eventlistener.
    
Perbedannya? pada pemberian lebih dari 1 perubahan pada sebuah effect.
- EventHandler  : perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya, sedangkan
- EventListener : perubahan yang terakhir dilakukan akan ditambahkan.

*/


//Pembuktian EventHandler

p3.onclick = function ubahWarnaP3()    {
    p3.style.backgroundColor    = 'lightblue'
}

p3.onclick  = function()    {
    p3.style.color = 'red'
}   //terlihat bahwa aksi yang terjadi adalah function terakhir ini.


    // menggunakan eventlistener
p3.addEventListener('click', function() {
    p3.style.backgroundColor    = 'lightblue'
})

p3.addEventListener('click', function() {
    p3.style.color    = 'red'
})



// Daftar Event DOM by JS
/*
-   Mouse Event
-   Keyboard Event
-   Resources Event
-   Focus Event
-   View Event
-   Form Event
-   CSS Animation & Transition Event
-   Drag &  Event
-   dll...

Mouse Event :
-   click
-   dblclick
-   mouseover
-   mouseenter
-   mouseleave
-   mouseup
-   wheel
-   dll...

keyboard event :
-   keydown
-   keypress
-   keyup
-   dll...

View Event  :
-   resize
-   scroll
-   dll...

Form Event :
-   reset
-   submit
-   dll...
*/


    //cobain mouseenter dan mouseleave hehe
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor    = 'lightblue'
})

p3.addEventListener('mouseleave', function() {
    p3.style.color    = 'black';
    p3.style.backgroundColor = 'white'
})  //keren abiss hehehe






















