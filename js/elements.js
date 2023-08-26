'use strict';

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');
const a = document.querySelector('a');
const div = document.querySelector('div');
const span = document.querySelector('span');
const p = document.querySelector('p');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const h5 = document.querySelector('h5');
const h6 = document.querySelector('h6');
const img = document.querySelector('img');
const body = document.querySelector('body');
const table = document.querySelector('table');
const tr = document.querySelector('tr');
const td = document.querySelector('td');
const th = document.querySelector('th');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
const nav = document.querySelector('nav');

const cHeader = document.createElement('header');
const cFooter = document.createElement('footer');
const cMain = document.createElement('main');
const cA = document.createElement('a');
const cDiv = document.createElement('div');
const cSpan = document.createElement('span');
const cP = document.createElement('p');
const cH1 = document.createElement('h1');
const cH2 = document.createElement('h2');
const cH3 = document.createElement('h3');
const cH4 = document.createElement('h4');
const cH5 = document.createElement('h5');
const cH6 = document.createElement('h6');
const cImg = document.createElement('img');
const cBody = document.createElement('body');
const cTable = document.createElement('table');
const cTr = document.createElement('tr');
const cTd = document.createElement('td');
const cTh = document.createElement('th');
const cUl = document.createElement('ul');
const cLi = document.createElement('li');
const cNav = document.createElement('nav');

const PickEle = (element) => {
    const ele = document.querySelector(element);
    return ele;
};

const CreateEle = (element) => {
    const ele = document.createElement(element);
    return ele;
};

export {
    PickEle,
    CreateEle,
    header,
    footer,
    main,
    a,
    div,
    span,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    img,
    body,
    table,
    tr,
    td,
    th,
    ul,
    li,
    nav,
    cHeader,
    cFooter,
    cMain,
    cA,
    cDiv,
    cSpan,
    cP,
    cH1,
    cH2,
    cH3,
    cH4,
    cH5,
    cH6,
    cImg,
    cBody,
    cTable,
    cTr,
    cTd,
    cTh,
    cUl,
    cLi,
    cNav,
};
