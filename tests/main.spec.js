import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', function() {
  // smoke tests
  describe('Smoke tests', function(){
    it('should exist the method `sum`', function(){
      expect(sum).to.exist;
      expect(sum).to.be.a.function;
    });

    it('should exist the method `sub`', function(){
      expect(sub).to.exist;
      expect(sub).to.be.a.function;
    });

    it('should exist the method `mult`', function(){
      expect(mult).to.exist;
      expect(mult).to.be.a.function;
    });

    it('should exist the method `div`', function(){
      expect(div).to.exist;
      expect(div).to.be.a.function;
    });

  });

  describe('Sum', function() {
    it('should return 4 when `sum(2,2)`', function() {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', function() {
    it('should return 4 when `sub(6,2)`', function() {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', function() {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', function() {
    it('should return 4 when `mult(2,2)`', function() {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', function() {
    it('should return 2 when `div(4,2)`', function() {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `Não é possível divisão por zero!` when divide by 0', function() {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });
});
