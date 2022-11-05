//opsi
const opsi = document.querySelector('#opsi');
const navMenu = document.querySelector('#nav-menu');

opsi.addEventListener('click', function() {
    opsi.classList.toggle('opsi-active');
    navMenu.classList.toggle('hidden');
})

//Navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if(window.pageYOffset > fixNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//education
const smp = document.querySelector('#smp');
const smk = document.querySelector('#smk');
const kuliah = document.querySelector('#kuliah');
const progress = document.querySelector('#progress');
const sltp = document.querySelector('#sltp');
const slta = document.querySelector('#slta');
const ptn = document.querySelector('#ptn');

smp.addEventListener('click', function(){
    smp.classList.add('toggle-active');
    smk.classList.remove('toggle-active');
    kuliah.classList.remove('toggle-active');
    progress.classList.add('toggle-active1');
    progress.classList.remove('toggle-active2');
    progress.classList.remove('toggle-active3');
    slta.classList.add('hidden');
    ptn.classList.add('hidden');
    sltp.classList.remove('hidden');
})
smk.addEventListener('click', function(){
    smk.classList.add('toggle-active');
    kuliah.classList.remove('toggle-active');
    progress.classList.add('toggle-active2');
    progress.classList.remove('toggle-active3');
    slta.classList.remove('hidden');
    ptn.classList.add('hidden');
    sltp.classList.add('hidden');
})
kuliah.addEventListener('click', function(){
    smk.classList.add('toggle-active');
    kuliah.classList.add('toggle-active');
    progress.classList.add('toggle-active3');
    slta.classList.add('hidden');
    ptn.classList.remove('hidden');
    sltp.classList.add('hidden');
})

//dark mode
const DarkToggle = document.querySelector('#theme-toggle');
const DarkMode = document.querySelector('#dark-mode');
const LightMode = document.querySelector('#light-mode');
const Dark = document.querySelector('#html');

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

DarkToggle.addEventListener('click', function() {
    DarkMode.classList.toggle('hidden');
    LightMode.classList.toggle('hidden');
    document.documentElement.classList.toggle('dark');
})

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
