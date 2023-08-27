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
    const body = PickEle('body');
    const gardeDiv = CreateEle('div');

    if (modal.style.display === 'none') {
        gardeDiv.id = 'garde';
        body.appendChild(gardeDiv);
        modal.style.display = '';
    } else {
        PickEle('#garde').remove();
        modal.style.display = 'none';
    }
};

const modalClose = () => {
    const modal = PickEle('.modal');
    modal.style.display = 'none';
    PickEle('#garde').remove();
};

PickEle('#loginBtn').addEventListener('click', modalShow);
PickEle('.closeBtn').addEventListener('click', modalClose);
