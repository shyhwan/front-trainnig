'use strict';

import { header, PickEle, CreateEle } from './elements.js';

/**
 * Header, Footer, Main 세팅
 */
await fetch('../html/header.html')
    .then((res) => res.text())
    .then((data) => {
        // PickEle('header').innerHTML = data
        header.innerHTML = data;
    });

await fetch('../html/footer.html')
    .then((res) => res.text())
    .then((data) => (PickEle('footer').innerHTML = data));

await fetch('../html/main.html')
    .then((res) => res.text())
    .then((data) => (PickEle('main').innerHTML = data));

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

/**
 * Sign-In
 */
const goSignIn = async () => {
    await fetch('signIn.html')
        .then((res) => res.text())
        .then((data) => {
            PickEle('main').innerHTML = data;
        });
};

/**
 * board
 */
const goBoard = async () => {
    await fetch('page.html')
        .then((res) => res.text())
        .then((data) => {
            PickEle('main').innerHTML = data;
        });
};

/**
 * board detail
 */
const goDetail = async () => {
    await fetch('edit.html')
        .then((res) => res.text())
        .then((data) => {
            PickEle('main').innerHTML = data;
        });
};

PickEle('#signInBtn').addEventListener('click', goSignIn);
PickEle('#loginBtn').addEventListener('click', modalShow);
PickEle('.closeBtn').addEventListener('click', modalClose);
PickEle('caption').addEventListener('click', goBoard);
PickEle('#tr').addEventListener('click', goDetail);
