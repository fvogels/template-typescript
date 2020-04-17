/* tslint:disable */

import { expect } from 'chai';
import { sample } from '@/sample';

describe('sample', function() {
    it('should return greeting', function() {
        expect(sample()).to.be.equal("Hello world");
    });
});
