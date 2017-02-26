import 'babel-polyfill'
import assert from 'assert'
import CurrencyInput from './'

describe('CurrencyInput', () => {
    describe('#constructor()', () => {
        it('should be a CurrencyInput instance', () => {
            const instance = new CurrencyInput()
            assert(instance instanceof CurrencyInput)
        });

        it('should the defaul value of CurrencyInput instance is 0', () => {
            const instance = new CurrencyInput()
            assert.equal(instance.value, 0)
        });


    });
});