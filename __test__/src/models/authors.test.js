const Authors = require('../../../src/models/authors.js');
require('@code-fellows/supergoose');

const authors = new Authors();

describe('Memes model', () => {
    it('can create() a new author', () => {
        const testObj = {
            name: 'Captain Morgan',
            handle: 'Cap M'
        }
        return authors.create(testObj)
            .then(record => {
                Object.keys(testObj).forEach(key => {
                    expect(record[key]).toEqual(testObj[key]);
                })
            })
            .catch(err => console.error('ERROR:', err))
    })
})