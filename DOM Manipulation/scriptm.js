// DOM Manipulation Method
/*
1. Manipulasi Element
contohnya menambahkan style/CSS pada element atau tag tertentu, mengubah isi element / tag, dsb...

Method yang biasa digunakan untuk memanipulasi element antara lain :
- element.innerHTML
- element.style.<property>
- element.setAttribute()
- element.classList 
- dll...

note : pada sebuah element dapat memiliki lebih dari 1 class, sedangkan hanya boleh memiliki 1 id.

2. Manipulasi Node 
contohnya menambahkan/menyisipkan atau menghilangkan node(element/tag) tertentu.

Method yang biasa digunakan

*/


// ===== Manipulasi Element =====

//1. namaelement.innerHTML : menambahkan atau menghapus isi element/tag
/*Kalian bisa periksa perubahan source code pada elements/console browser*/

/*misal kita ingin mengubah isi element h1*/
    //const h1 = document.getElementById('judul') //selection by Id
    //const judul = document.getElementsByTagName('h1')[0] //selection by TagName
    //const judul = document.querySelector('h1') //selection by querySelector
    
// const judul = document.querySelectorAll('h1')[0] //selection by querySelectorAll
//     judul.innerHTML = '<em>Ini adalah judul.</em>' //mengubah isi tag h1


    //const sectionA = document.getElementById('a') //selection byId
//const sectionA = document.querySelector('section') //selection by querySelector element
//const sectionA = document.querySelector('#a') //selection by querySelector id (hindari penulisan seperti ini ya tapi, better dispesifik lagi)

// const sectionA   = document.querySelector('section#a')
// const p1 = sectionA.getElementsByTagName('p')[0]
//     p1.innerHTML = 'Ini adalah paragraf 9, canda hehe'


// const sectionA = document.getElementsByTagName('section')[0]
//     sectionA.innerHTML = 'Hello World ajah'



//2. element.style.propertiCSS : mengubah(menambahkan/mengurangi) style CSS
// const sectionA = document.getElementsByTagName('section')[0]
// const a        = document.getElementsByTagName('a')[0]
//     a.style.color = 'green' //mengubah warna hyperlink



//3. element.setAttribute('namaAtributnya apa', 'penamaanLinkNya') : mengubah atribut dari element.
/*Macam-macam method atribut lainnya
- element.getAttribute()
- element.setAttribut()
- element.removeAttribute()

masih ingat apa itu atribut element? contohnya id, class, hreaf, dsb...
*/

const judul = document.getElementsByTagName('h1')[0]
    judul.setAttribute('name', 'Abdill')


const a = document.querySelector(' section#a a')
    a.setAttribute('klikdisini', 'id') //ohiya btw penamaan atribut gaboleh pakai spasi ya!

// element.getAttribute : ingin mengetahui isi atribut 
/* format : element.getAttribute('apaAtributnyaMisalhref') , biasanya di run di console browser.*/

// const p2  = document.querySelectorAll(' section#a p')[1]const p2     = document.getElementsByTagName('section')
//     p2.setAttribute('class', 'label') //kenapa tidak menambahkan? melainkan menimpa?
    
    // Method khusus atribut class :
    /*  element.classList
    
    -   element.classList.add('namaClass')         : menambahkan class
    -   element.classList.remove('namaClass')      : menghapus class
    -   element.classList.toggle('namaClass')      : menambahkan jika sebelumnya blm ada atau tidak menambahkan+menghapus jika sebelumnya sudah ada.
    -   element.classList.item(i)        : memeriksa class pada item ke-n(berdasarkan indeks)-> biasanya di run di console browser, returnnya namaclass nya.
    -   element.classList.contains('namaClass')    : memeriksa class tertentu dalam sebuah element -> biasanya di run di console browser, return nya boolean.
    -   element.classList.replace('namaClassyangInginDiganti' , 'namaClassBaru')     : menggantikan class yang ada menjadi class yang baru.
    */
   
   const p2  = document.querySelectorAll(' section#a p')[1]
       p2.classList.add('label') //menambahkan
       p2.classList.toggle('label') //seharusnya menghapus label yg sblmnya di-add
    //    p2.classList.item(1) //dirun di console browser aja.




// ===== Manipulasi Node =====
/* yang sering digunakan :
-   document.createElement()    : membuat element/node
-   document.createTextNode()   : mengisi element/node
-   node.appendChild()          : allocate di akhir elemen
-   node.insertBefore()         : allocate sebelum di elemen yg dituju.
-   parentNode.removeChild()    : menghapus node
-   parentNode.replaceChild(ElementBaru, Elementyangingindiganti)   : menggantikan node
-dll....

*/

// 1. Membuat node baru + mengisi element/tag

    //membuat paragraf baru
const pBaru = document.createElement('p') //hanya baru dibuat, blm dialokasikan/placing/penempatan.
const tekspBaru = document.createTextNode('Paragraf Baru') //hanya baru menyiapkan isi node

    pBaru.appendChild(tekspBaru); //hanya baru menghubungkan

const sectionA = document.getElementById('a') //selection untuk penempatan.
sectionA.appendChild(pBaru) //selesai menambahkan paragraf baru di section A.


    //membuat li baru : setelah item 1 atau sebelum li2
const liBaru = document.createElement('li')
const isiLi  = document.createTextNode('li baru gess...')

    liBaru.appendChild(isiLi) //menghubungkan dulu

const ul = document.querySelector(' section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')
ul.insertBefore(liBaru, li2) //maksudnya : di dalam ul tolong input liBaru setelah sebelum


    //menghapus element
const link = document.getElementsByTagName('a')[0] //auto pilih a yg paling pertama
    sectionA.removeChild(link)


    //replace child
const sectionB = document.getElementById('b') //lokasi sectionB
const p4 = sectionB.querySelector('p') //menandai lokasi p4

const h2Baru = document.createElement('h2')
const isih2Baru = document.createTextNode('Judul Baru!')

h2Baru.appendChild(isih2Baru)
    sectionB.replaceChild(h2Baru, p4)



    //menandai sesuatu yg baru di dokumen
pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor    = 'lightgreen'
h2Baru.style.backgroundColor    = 'lightgreen'


/*Method Baru

-   parentNode.append()
-   parentNode.prepend()
-   childNode.before()
-   childNode.after()
-   childNode.remove()
-   childNode.replaceWith()
-   dll...

masih banyak lagi, bisa di googling apa saja beserta cara penggunaannya.
*/










