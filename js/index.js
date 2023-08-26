'use strict';

import { header, footer, PickEle, CreateEle } from './elements.js';

/**
 * Header, Footer 세팅
 */
await fetch('../html/header.html')
    .then((res) => res.text())
    .then((data) => {
        // PickEle('header').innerHTML = data
        header.innerHTML = data;
    });

fetch('../html/footer.html')
    .then((res) => res.text())
    .then((data) => (PickEle('footer').innerHTML = data));

/**
 * Modal
 */
const modalShow = () => {
    const modal = PickEle('.modal');
    if (modal.style.display === 'none') {
        modal.style.display = '';
    } else {
        modal.style.display = 'none';
    }
};

const modalClose = () => {
    const modal = PickEle('.modal');
    modal.style.display = 'none';
};

PickEle('#loginBtn').addEventListener('click', modalShow);
PickEle('.closeBtn').addEventListener('click', modalClose);
