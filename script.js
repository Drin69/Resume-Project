function changeBackgroundImage(Image) {
    document.getElementById('navbar').style.backgroundImage = Image;
}

function resetBackgroundColor() {
    document.getElementById('navbar').style.backgroundImage = '';
}

function showSection(sectionId) {
    var navbar = document.getElementById('navbar');
    navbar.classList.add('hidden');
    resetBackgroundImage();
    document.getElementById(sectionId).style.display = 'block';
}
