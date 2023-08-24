import { header, footer } from './elements.js';

/**
 * Header, Footer 세팅
 */
fetch('../html/header.html')
    .then((res) => res.text())
    .then((data) => (header.innerHTML = data));

fetch('../html/footer.html')
    .then((res) => res.text())
    .then((data) => (footer.innerHTML = data));
