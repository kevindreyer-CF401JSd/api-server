const Categories = require('../../../src/models/categories.js');
require('@code-fellows/supergoose');

const categories = new Categories();
const testObj1 = {
    subject: 'cats',
    keywords: ['kittens','felines','lolcats','kats'],
    description: 'Everything about cats'
}
const testObj2 = {
    subject: 'dogs',
    keywords: ['k9s','canines','loldogs','puppies'],
    description: 'Everything about dogs'
}
let testID1;
let testID2;

describe('categories model', () => {
    it('can create() a new categories truthy', () => {
        const testObj = testObj1
        return categories.create(testObj)
            .then(record => {
                Object.keys(testObj).forEach(key => {
                    expect(record[key]).toBeTruthy();
                })
                testID1 = record._id;
            })
            .catch(err => console.error('ERROR:', err))
        
    })
    it('can create() a new categories', () => {
        const testObj = testObj2
        return categories.create(testObj)
            .then(record => {
                Object.keys(testObj).forEach(key => {
                    if (testObj[key] instanceof Array) {
                        Object.keys(testObj[key]).forEach(subkey => {
                            expect(record[key][subkey]).toEqual(testObj[key][subkey])
                        })
                    }
                    else {
                        expect(record[key]).toEqual(testObj[key]);
                    }
                })
                testID2 = record._id;
            })
            .catch(err => console.error('ERROR:', err))
        
    })
    it('can read() all categories', () => {
        return categories.read()
            .then(record => {
                expect(typeof record).toBe('object');
                // console.log('record',record);
            })
            .catch(err => console.error('ERROR:', err))
    })
    it('can read() a single categories from create test', () => {
        return categories.read(testID1)
            .then(record => {
                expect(record[0].name).toBe(testObj1.name);
            })
            .catch(err => console.error('ERROR:', err))
    })
    it('can update() an categories', () => {
        updateRecord = {
            subject: 'dogs',
            keywords: ['k9s','canines','loldogs','puppies','dog parks'],
            description: 'Everything about dogs, plus dog people'
        }
        return categories.update(testID2,updateRecord)
            .then(record => {
                Object.keys(updateRecord).forEach(key => {
                    if (updateRecord[key] instanceof Array) {
                        Object.keys(updateRecord[key]).forEach(subkey => {
                            expect(record[key][subkey]).toEqual(updateRecord[key][subkey])
                        })
                    }
                    else {
                        expect(record[key]).toEqual(updateRecord[key]);
                    }
                })
            })
            .catch(err => console.error('ERROR:', err))
    })
    it('can delete() an categories', () => {
        return categories.delete(testID2)
            .then(record => {
                expect(record._id).toEqual(testID2);
            })
            .catch(err => console.error('ERROR:', err))
    })
})