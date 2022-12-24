
const body = document.querySelector('body');

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElem = function () {
        let firstSymbol = selector[0];
        let elem;
        if (firstSymbol === '.') {
            elem = document.createElement('div');
            elem.style.height = height + 'px';
            elem.style.width = width + 'px';
            elem.style.backgroundColor = bg;
            elem.setAttribute('class', selector);
            body.append(elem);
        } else if (firstSymbol === '#') {
            elem = document.createElement('p');
            elem.setAttribute('id', selector);
            elem.style.cssText = `height: ${height}; width: ${width}; background-color: ${bg}; font-size: ${fontSize}; `;
            body.append(elem);
            elem.textContent = 'Hello, world';
        }
    };

    this.createMoveElem = function () {
        elem = document.createElement('div');
        elem.style.height = height + 'px';
        elem.style.width = width + 'px';
        elem.style.backgroundColor = bg;

        elem.style.position = 'absolute';

        elem.setAttribute('class', selector);
        body.append(elem);
    };

    this.moveElemtoUp = function () {
        console.log(elem.getBoundingClientRect().top);
        elem.style.top = +elem.getBoundingClientRect().top - 10 + 'px';
        console.log(elem.getBoundingClientRect().top);
    };

    this.moveElemtoDown = function () {
        console.log(elem.getBoundingClientRect().bottom);
        elem.style.bottom = +elem.getBoundingClientRect().bottom + 10 + 'px';
        console.log(elem.getBoundingClientRect().bottom);
    };

    this.moveElemtoLeft = function () {
        console.log(elem.getBoundingClientRect().left);
        elem.style.left = +elem.getBoundingClientRect().left - 10 + 'px';
        console.log(elem.getBoundingClientRect().left);
    };

    this.moveElemtoRight = function () {
        console.log(elem.getBoundingClientRect().right);
        elem.style.right = +elem.getBoundingClientRect().right + 10 + 'px';
        console.log(elem.getBoundingClientRect().right);
    };
};

const domElement1 = new DomElement('.block', 100, 300, 'blue');
domElement1.createElem();
const domElement2 = new DomElement('#block', '100px', '100vw', 'green', '45px');
domElement2.createElem();

// усложненка
const domElement3 = new DomElement('.block', 100, 100, 'pink');

window.addEventListener('DOMContentLoaded', (event) => {
    domElement3.createMoveElem();
});

body.addEventListener('keydown', moveSquare);

function moveSquare(e) {
    let eventKey = e.key;
    let direction = eventKey.substr(5, eventKey.length - 1);
    console.log(direction);

    let functionName = "moveElemto" + direction; // 'moveElemtoUp', 'moveElemtoDown', 'moveElemtoLeft','moveElemtoRight'

    if (functionName === 'moveElemtoUp') {
        domElement3.moveElemtoUp();
    } else if (functionName === 'moveElemtoDown') {
        domElement3.moveElemtoDown();
    } else if (functionName === 'moveElemtoLeft') {
        domElement3.moveElemtoLeft();
    } else if (functionName === 'moveElemtoRight') {
        domElement3.moveElemtoRight();
    }

    //domElement3.moveElemtoUp();
    //domElement3.moveElemtoDown();
    //domElement3.moveElemtoLeft();
    //domElement3.moveElemtoDown();

    /* function func1(name) {
        domElement3.name();
    };
    func1(functionName); */


}
console.log(domElement3);
