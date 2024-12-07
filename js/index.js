const buttons = document.getElementsByTagName('button');

Array.from(buttons).forEach((button) => {
    const className = button.className;
    switch (className) {
        case 'modal-close-button':
            button.addEventListener('click', () => {
                const modal = button.closest('[data-modal]');
                if (modal === null) {
                    return;
                }
                modal.classList.remove('is-open');
            });
            break;
        case 'burger-button':
            button.addEventListener('click', () => {
                const mobileMenu = document.getElementsByClassName('mobile-menu');
                Array.from(mobileMenu).forEach((mobileMenuItem) => {
                    mobileMenuItem.classList.remove('is-open');
                    mobileMenuItem.classList.add('is-open');
                });
                toggleModal(button, false);
            });
            break;
    }

});


