/**
 * We have to do a bit of work upfront to allow the tests
 * to run in the browser and in Node.js. 
 */
let assert, expect;
let root;
if (typeof window === 'object') {
    // Run tests in browser
    assert = chai.assert;
    expect = chai.expect;
    mocha.setup('bdd');
    root = document;
} else {
    // Run tests in Node.js
    assert = require('assert');
    expect = require('chai').expect;
    // get filesystem module
    const fs = require("fs");
    const { parse } = require('node-html-parser');
    // using the readFileSync() function and passing the path to the file
    const buffer = fs.readFileSync('assignment/index.html');
    // use the toString() method to convert Buffer into String
    const fileContent = buffer.toString();
    root = parse(fileContent);
}

/**
 * Put all tests within this describe.
 */
describe('Automated tests', function () {

    describe('Change the title of the page to `Hello World`', function () {
        it('Change the title of the page to `Hello World`', function() {
            let title = root.querySelector('title').innerHTML;
            expect(title, '<title> not changed to `Hello World`').to.equal('Hello World');
        });
    });

    describe('Create a header element `<header>` element', function () {
        it('Create a header element `<header>` element', function () {
            let header = root.querySelector('header');
            expect(header, '<header> element not found.').to.exist;
        });
    });
    describe('Inside the `<header>`, add an `<h1>` element containing your name', function () {
        it('Inside the `<header>`, add an `<h1>` element containing your name', function () {
            let header = root.querySelector('header');
            expect(header, '<header> element not found.').to.exist;
            let h1 = header.querySelector('h1');
            expect(h1, '<h1> not in header.').to.exist;
            expect(h1.innerHTML, '<h3> was empty.').not.to.be.empty;
        });
    });
    describe('Background color added to the `<header>``', function () {
        it('Background color added to the `<header>`', function () {
            if (typeof window === 'object') {
                let header = root.querySelector('header');
                expect(header, '<header> element was not found in div.').to.exist;
                let style = window.getComputedStyle(header);
                let backgroundColor = style.getPropertyValue('background-color');
                expect(backgroundColor, '<header> element does not have background color.').not.to.be.empty;
                expect(backgroundColor, '<header> element does not have background color.').to.not.equal('rgba(0, 0, 0, 0)');
            } else {
                // Unable to test background color with node
                this.skip();
            }
        });
    });
    describe('Background color added to the `<main>``', function () {
        it('Background color added to the `<main>`', function () {
            if (typeof window === 'object') {
                let main = root.querySelector('main');
                expect(main, '<main> element was not found in div.').to.exist;
                let style = window.getComputedStyle(main);
                let backgroundColor = style.getPropertyValue('background-color');
                expect(backgroundColor, '<main> element does not have background color.').not.to.be.empty;
                expect(backgroundColor, '<main> element does not have background color.').to.not.equal('rgba(0, 0, 0, 0)');
            } else {
                // Unable to test background color with node
                this.skip();
            }
        });
    });
    describe('Include an image', function () {
        it('Include an image', function () {
            let div = root.querySelector('img');
            expect(div, '<img> not found').to.exist;
        });
    });
        describe('Image URL is a Relative URL, not Absolute', function () {
        const absolutePathError = `
         The URL you're using for your image looks like an Absolute URL, which wont work on anyone else's machine.
         Try a relative url, which will be shorter and look something like './image.png'
        `;

        it('Image URL is a Relative URL, not Absolute', function () {
            let src = root.querySelector('img').getAttribute("src");
            let absolutePath = src.match(/^\/(Users)/)
            expect(absolutePath, absolutePathError).to.not.exist;
        });
    });
    describe('Create an unordered list with 3 list items of fun facts about you', function () {
        it('Create an unordered list with 3 list items of fun facts about you', function () {
            let ul = root.querySelector('main ul');
            expect(ul, '<ul> element was not found.').to.exist;
            let liCount = ul.querySelectorAll('li').length
            expect(liCount, `${liCount} of 3 list items found`).to.be.greaterThan(2);
        });
    });
    describe('Create a `<footer>` element', function () {
        it('Create a `<footer>` element', function () {
            let footer = root.querySelector('footer');
            expect(footer, '<footer> element was not found.').to.exist;
        });
    });
    describe('Inside your `<footer>`, put a `<p>` element with your favorite quote', function () {
        it('Inside your `<footer>`, put a `<p>` element with your favorite quote', function () {
            let footer = root.querySelector('footer');
            expect(footer, '<footer> element was not found.').to.exist;
            let p = footer.querySelector('p');
            expect(p.innerHTML, '<h3> was empty.').not.to.be.empty;
        });
    });
    describe('Background color added to the `<footer>``', function () {
        it('Background color added to the `<footer>`', function () {
            if (typeof window === 'object') {
                let footer = root.querySelector('footer');
                expect(footer, '<footer> element was not found in div.').to.exist;
                let style = window.getComputedStyle(footer);
                let backgroundColor = style.getPropertyValue('background-color');
                expect(backgroundColor, '<footer> element does not have background color.').not.to.be.empty;
                expect(backgroundColor, '<footer> element does not have background color.').to.not.equal('rgba(0, 0, 0, 0)');
            } else {
                // Unable to test background color with node
                this.skip();
            }
        });
    });
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}
