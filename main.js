const btnMenu = document.querySelector('.menu-btn')

btnMenu.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

document.addEventListener('DOMContentLoaded', () => {
    const enlaceContacto = document.querySelector('a[href= "#footer"]');
    const enlaceSobreMi = document.querySelector('a[href= "#body"]')

    enlaceSobreMi.addEventListener('click', (event) => {
        event.preventDefault();
        const sobreMi = document.querySelector('.container-body')
        sobreMi.scrollIntoView( {behavior: 'smooth'} )

    });
    
    enlaceContacto.addEventListener('click', (event) => {
        event.preventDefault();
        const contacto = document.querySelector('.footer-list-description');

        contacto.scrollIntoView( {behavior: 'smooth'} )
    });
});

