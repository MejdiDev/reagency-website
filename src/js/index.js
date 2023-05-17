const hideMobileNav = () => {
    document.getElementById('mobileNavbar').classList.remove('active');
    document.getElementById('overlay').style.opacity = "0";

    setTimeout(() => {
        document.getElementById('mobileNavbar').style.display = "none";
        document.getElementById('overlay').style.display = "none";
        document.querySelector('body').classList.remove('hidden');
    }, 400);
}

const showMobileNav = () => {
    document.getElementById('overlay').style.display = "block";
    document.getElementById('mobileNavbar').style.display = "flex";
    
    setTimeout(() => {
        document.getElementById('overlay').style.opacity = "0.7";
        document.getElementById('mobileNavbar').classList.add('active');
    }, 1);
    document.querySelector('body').classList.add('hidden');
}