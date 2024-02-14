const btnMenu = document.querySelector('.menu-btn')

btnMenu.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

document.addEventListener('DOMContentLoaded', () => {
    const enlaceContacto = document.querySelector('a[href= "#footer"]');
    const enlaceSobreMi = document.querySelector('a[href= "#sobreMi"]');
    const enlaceProyectos = document.querySelector('a[href= "#proyectos"]');

    enlaceSobreMi.addEventListener('click', (event) => {
        event.preventDefault();
        const sobreMi = document.querySelector('.contenido-sobreMi');

        sobreMi.scrollIntoView({ behavior: 'smooth' })
    });

    enlaceContacto.addEventListener('click', (event) => {
        event.preventDefault();
        const contacto = document.querySelector('.footer-list-description');

        contacto.scrollIntoView({ behavior: 'smooth' })
    });

    enlaceProyectos.addEventListener('click', (event) => {
        event.preventDefault();
        const proyectos = document.querySelector('.contenido-proyectos');

        proyectos.scrollIntoView( {behavior: 'smooth'} )
    })

});
