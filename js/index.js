
window.onload = function () {
    const [menuButton] = document.getElementsByClassName('open-menu')
    const closeMenu = document.getElementById('closeMobile')
    const [mobileMenu] = document.getElementsByClassName('mobile-menu')

    menuButton.addEventListener('click', () => {
        mobileMenu.style.display = 'flex'
        menuButton.style.display = 'none'
        closeMenu.style.display = 'block'
    })

    closeMenu.addEventListener('click', () => {
        mobileMenu.style.display = 'none'
        menuButton.style.display = 'flex'
        closeMenu.style.display = 'none'
    })
}