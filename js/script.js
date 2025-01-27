const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200 && !header.classList.contains('header--shrink')) { 
        header.classList.remove('header--common-height'); 
        header.classList.add('header--shrink'); 
    } 
    if (window.scrollY < 100 && !header.classList.contains('header--common-height')) { 
        header.classList.remove('header--shrink');
        header.classList.add('header--common-height'); 

    } 
});
