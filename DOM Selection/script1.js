// // DOM Selection (TITLE)


// /*Btw buat run di console browser janlup disave + refresh yaa!
// */






// // document.getElementById() -> Element
// /*Misal kita ingin memilih elemen h1 yg memiliki id pada dokumen.

// Method ini return nya sebuah element.
// */
// const judulll = document.getElementById('judul')

// judulll.style.color = 'red' ;
// judulll.style.backgroundColor = 'grey'


// // document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p')

// // p.style.backgroundColor = 'lightblue' //ini gabisa, karena css gabisa set properti dari array.
// // p[2].style.backgroundColor = 'lightblue' // ini bisa
// //kalau mau semuanya diganti? hehe, pakai looping!

// for(let i = 0; i<p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// /*Bagaimana jika kita terapkan method TagName ini ke elemen yg hanya 1?
// Hasilnya tetap dalam bentuk HTMLCollection dan berupa objek array.
// */
// // const h1 = document.getElementsByTagName('h1')
// //untuk membuat h1 ini jadi element, kita perlu menambahkan [i] disamping deklarasi method atau samping variabel.
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px'


// // document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')
// p1[0].innerHTML = 'Ini diubah dari JS'




// // querySelector() -> Element
// /*agak mirip dengan method document.getElementById()

// query secara bahasa artinya menanyakan.
// */
// const p4 = document.querySelector('#b p');
// p4.style.color = 'red'
// p4.style.fontSize = '30px'

// const li2  = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = 'orange'

// /* adakalanya lebih baik kita telah memahami css, terutama mengenai selector.
// Selain itu, adakalanya kita tidak diperkenankan menambahkan id atau class 
// pada dokumen HTML kita, maka solusinya adalah menggunakan querySelector() ini.
// */

// /*apakah bisa method querySelector() ini menginput elemen yg memiliki bnyk elemen?
// bisa saja, tetapi yg direturn hanya tag pertamanya saja, tidak semua.*/
// // const p = document.querySelector('p')
// // p.innerHTML = 'ini diubah melalui JS'

//     //kalau mau semuanya gimana?pakai querySelectorAll()



// // querySelectorAll()  -> nodelist
// /*berbeda dengan method document.getElementsByTagName() dan document.getElementsByClass().
// */
// const p = document.querySelectorAll('p') //janlup pakai indeks karena outputnya array
// p[2].innerHTML = 'ini diubah oleh JS'

// for(let i = 0; i<p.length; i++) {
//     p[i].innerHTML = 'HOHOOOHOHOHOHO!'
// }


// //Summary Selection Method :
// /*
// Dari kelima method ini, mana yang paling layak digunakan? itu tergantung kebutuhan!

// Jika elemennya memiliki id, pakai getElementById(), jika sudah memiliki class
// pakai getElementsByClass(), 

// Namun, jika kita tidak diperkenankan mengubah dokument html,
// pakai querySelector saja!


// */


// //Mengubah Node Root
// /*Ini bermanfaat untuk memanipulasi selection scoping (jika tidak pakai id, class).

// */
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p')
// p4.style.backgroundColor    = 'orange'

// //atau

// const sectionB_carakedua = document.querySelectorAll('section#b')[0];
// const p4 = sectionB_carakedua.getElementsByTagName('p')[0]
// p4.style.backgroundColor    = 'orange'