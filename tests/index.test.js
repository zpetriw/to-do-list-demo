import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('it should say hello', (done) => {
        const index = fs.readFileSync('./public/index.html', "utf-8");
        require('jsdom/lib/old-api').env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!");
            // This is for an asyncronous call so that Mocha knows it can evaluate the test, but it worked without this.
            done();
            window.close();
        });
    });
});
