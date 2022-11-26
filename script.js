// // kita gunakan fetch dalam kita ambil data sample.txt yang sudah kita buat
// fetch('https://sheetdb.io/api/v1/dip2zg3wqt21o')
//     // kita buat response menjadi json
//     .then((response) => response.json())
//     // lalu data nya kita ambil dan kita masuken ke p id output
//     .then((data) => {
//         // kita buat variabel output 
//         let output = '';
//         // kita console.log agar mengetahui apakah data nya sudah masuk atau belum
//         console.log(data);
//         // forEach ini adalah looping dan dinamakan user
//         data.forEach((user) => {
//             // kita tambahkan output-nya jangan lupa gunakan backslash `` yang di sebelah angka nomer 1
//             // kita panggil id name email didapat dari users.json
//             output += `
//             <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" data-aos="zoom-in-up" data-aos-duration="600">
//                 <div class="w-96 bg-base-100 shadow-xl rounded-xl">
//                     <figure class="px-10 pt-10">
//                         <img src="${user.gambar}" alt="${user.gambar}" class="rounded-xl" data-aos="zoom-in-up" data-aos-duration="600">
//                     </figure>
//                     <div class="card-body items-center text-center">
//                         <h2 class="card-title"  data-aos="zoom-in-up" data-aos-duration="600">${user.judul}</h2>
//                         <p  data-aos="zoom-in-up" data-aos-duration="600">${user.deskripsi}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         })
//         // kita panggil id output agar bisa di tampilkan ke browser saat di klik
//         document.getElementById('output').innerHTML = output;
//     })
//     // membuat catch jadi kalau ada yang error langsung ketawan
//     .catch((err) => console.log(err));


        var scrollpos = window.scrollY;
        var header = document.getElementById("header");
        var navcontent = document.getElementById("nav-content");
        var navaction = document.getElementById("navAction");
        var brandname = document.getElementById("brandname");
        var toToggle = document.querySelectorAll(".toggleColour");

        document.addEventListener("scroll", function () {
            /*Apply classes for slide in bar*/
            scrollpos = window.scrollY;

            if (scrollpos > 10) {
                header.classList.add("bg-white");
                navaction.classList.remove("bg-white");
                navaction.classList.add("btn-gradient");
                navaction.classList.remove("text-gray-800");
                navaction.classList.add("text-white");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-gray-800");
                    toToggle[i].classList.remove("text-white");
                }
                header.classList.add("shadow");
                navcontent.classList.remove("bg-gray-100");
                navcontent.classList.add("bg-white");
            } else {
                header.classList.remove("bg-white");
                navaction.classList.remove("gradient");
                navaction.classList.add("bg-white");
                navaction.classList.remove("text-white");
                navaction.classList.add("text-gray-800");
                //Use to switch toggleColour colours
                for (var i = 0; i < toToggle.length; i++) {
                    toToggle[i].classList.add("text-white");
                    toToggle[i].classList.remove("text-gray-800");
                }

                header.classList.remove("shadow");
                navcontent.classList.remove("bg-white");
                navcontent.classList.add("bg-gray-100");
            }
        });
      
        /*Toggle dropdown list*/
        /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

        var navMenuDiv = document.getElementById("nav-content");
        var navMenu = document.getElementById("nav-toggle");

        document.onclick = check;

        function check(e) {
            var target = (e && e.target) || (event && event.srcElement);

            //Nav Menu
            if (!checkParent(target, navMenuDiv)) {
                // click NOT on the menu
                if (checkParent(target, navMenu)) {
                    // click on the link
                    if (navMenuDiv.classList.contains("hidden")) {
                        navMenuDiv.classList.remove("hidden");
                    } else {
                        navMenuDiv.classList.add("hidden");
                    }
                } else {
                    // click both outside link and outside menu, hide menu
                    navMenuDiv.classList.add("hidden");
                }
            }
        }

        function checkParent(t, elm) {
            while (t.parentNode) {
                if (t == elm) {
                    return true;
                }
                t = t.parentNode;
            }
            return false;
        };

        window.addEventListener('scroll', () => {
            let parent = document.getElementById('parallax-container');
            let children = parent.getElementsByTagName('div');
            for (let i = 0; i < children.length; i++) {
                children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
            }
        }, false);
        
