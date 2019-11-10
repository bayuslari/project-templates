import { expect } from 'chai';
import { app } from 'src/index';

describe('Feature: Title', () => {
    const expectedData = getExpectedData();

    // https://martinfowler.com/bliki/GivenWhenThen.html
    context('given pre-condition/state of the context', () => {
        context('when something happens', () => {
            it('should achieve the expected result', () => {
                expect(expectedData.dataForATestCase).to.have.property('value', app);
            });
        });
    });
});

function getExpectedData (): Record<string, object> {
    return {
        dataForATestCase: {
            value: 'debug'
        }
    };
}
