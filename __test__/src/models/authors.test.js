const Authors = require('../../../src/models/authors.js');
require('@code-fellows/supergoose');

const authors = new Authors();

describe('Authors model', () => {
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
                // var testID = record._id;
            })
            .catch(err => console.error('ERROR:', err))
    })
    it('can read() all authors', () => {
        return authors.read()
            .then(record => {
                
                expect(typeof record).toBe('object');
            })
            .catch(err => console.error('ERROR:', err))
    })
    // it('can update() all authors', () => {
    //     return authors.update(testID,)
    //         .then(record => {
    //             expect(typeof record).toBe('object');
    //         })
    //         .catch(err => console.error('ERROR:', err))
    // })
})