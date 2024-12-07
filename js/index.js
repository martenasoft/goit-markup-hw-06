const buttons = document.getElementsByTagName('button');
const contacts = document.getElementsByClassName('contacts-link');

const closeModal = (button) => {
    const modal = button.closest('[data-modal]');
    if (modal === null) {
        return;
    }
    modal.classList.remove('is-open');
}

Array.from(contacts).forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal(event.target);

        const backdrop = document.getElementsByClassName('backdrop');
        Array.from(backdrop).forEach((modal) => {
            modal.classList.remove('is-open');
            modal.classList.add('is-open');
        });
    })
})
Array.from(buttons).forEach((button) => {
    const className = button.className;
    switch (className) {
        case 'modal-close-button':
            button.addEventListener('click', () => {
                closeModal(button);
            });
            break;
        case 'burger-button':
            button.addEventListener('click', () => {
                const mobileMenu = document.getElementsByClassName('mobile-menu');
                Array.from(mobileMenu).forEach((mobileMenuItem) => {
                    mobileMenuItem.classList.remove('is-open');
                    mobileMenuItem.classList.add('is-open');
                });
            });
            break;
    }

});


