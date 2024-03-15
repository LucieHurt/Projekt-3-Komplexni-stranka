//Rozbalovací menu// 

const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-bars")
const heroText = document.querySelector(".hero-text")


menuIcon.addEventListener("click", () => {
   if (hamburgerIcon.classList[1] === "fa-bars") {
       hamburgerIcon.classList.add("fa-chevron-up")
       hamburgerIcon.classList.remove("fa-bars")
       menuList.style.display = "block"
       heroText.style.display = "none"

   } else {
       hamburgerIcon.classList.add("fa-bars")
       hamburgerIcon.classList.remove("fa-chevron-up")
       menuList.style.display = "none"
       heroText.style.display = "block"
   }
})

//Dark a Light mode//

const lightMode = document.querySelector(".modeToggle")

const mainText = document.querySelector(".hero-text")
const infoSection = document.querySelector(".info-section")
const formSection = document.querySelector(".form-section")
const logo = document.querySelector(".logo img")
const formInputs = document.querySelectorAll("input")


lightMode.addEventListener('click', () => {
    if (lightMode.classList.contains('light-mode')) {
        mainText.style.color = ''; 
        infoSection.style.backgroundColor = ''; 
        formSection.style.backgroundColor = '';
        logo.style.backgroundColor = '';

        formInputs.forEach(input => {
            input.style.backgroundColor = '';
            input.style.color = '';
        });

lightMode.classList.remove('light-mode'); // Odebereme třídu light-mode
    } else {
        // Přepneme na light mode
        mainText.style.color = '#708090'; 
        infoSection.style.backgroundColor = '#708090'; 
        formSection.style.backgroundColor = '#708090';
        logo.style.backgroundColor = '#708090';

        formInputs.forEach(input => {
            input.style.backgroundColor = 'white';
            input.style.color = 'black';
        });

        // Přidáme třídu light-mode
        lightMode.classList.add('light-mode'); 
    }
});


//Formulář//

const form = document.querySelector("form")
const fullName = document.querySelector(".fullName")
const email = document.querySelector(".email")
const number = document.querySelector(".phoneNumber")
const notName = document.querySelector(".notificationName")
const notEmail = document.querySelector(".notificationEmail")
const notNumber = document.querySelector(".notificationNumber")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    notName.style.display = fullName.value === "" ? "block" : "none";
    notEmail.style.display = email.value === "" ? "block" : "none";
    notNumber.style.display = number.value === "" ? "block" : "none"; 
})


//Kontrola shody hesel// 

document.querySelector("form").addEventListener('submit', function(event) {
   
    const password = document.querySelector(".password").value;
    const passwordControl = document.querySelector(".passwordControl").value;

    
    if (password !== passwordControl) {
        // Pokud se hesla neshodují, vyskočí upozornění
        event.preventDefault();
        document.querySelector(".text").textContent = 'HESLA SE NESHODUJÍ!';
    } else {
        // Když jsou hesla shodná, vymaže se text
        document.querySelector(".text").textContent = '';
    }
});


//Zvětšování obrázků při přejetí// 

function extendPhoto() {
    this.classList.add('zvetseno');
}
function reducePhoto() {
    this.classList.remove('zvetseno');
}

const photos = document.querySelectorAll('.photo');

    //Zachycení události přejetí
photos.forEach(function(photo) {
    photo.addEventListener('mouseenter', extendPhoto);
    photo.addEventListener('mouseleave', reducePhoto);
});



//Funkce pro zobrazení šipky//

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
})

//Funkce pro posunutí stránky nahoru//

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
