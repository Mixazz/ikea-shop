import { getData } from './getData.js'
import generateSubCatalog from './generateSubCatalog.js';

export const catalog = () => {
    const updateSubCatalog = generateSubCatalog();

    const btnBurer = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnClose = document.querySelector('.btn-close');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(overlay);

    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu = () => {
        closeSubMenu();
        catalog.classList.remove('open');
        overlay.classList.remove('active');
    }

    const hendlerCaralog = (event) => {
        event.preventDefault();
        const target = event.target;
        const itemList = event.target.closest('.catalog-list__item');
        if (itemList) {
            getData.subCatalog(target.textContent, (data) => {

                updateSubCatalog(target.textContent, data)
                subCatalog.classList.add('subopen');
            })
            if (event.target.closest('.btn-close')) {
                closeMenu();
            }

        };
    };

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    }

    btnBurer.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', hendlerCaralog);
    subCatalog.addEventListener('click', event => {
        const btnReturn = event.target.closest('.btn-return');

        if (btnBurer) closeSubMenu();
    })


    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            closeMenu();
        }
    })

}
