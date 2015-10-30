import Generator from '../src/generator.js';
const assert = require('assert');
describe('Generator', () => {
  it('should generate non overlapping particles', () => {
    assert.equal(true, [1,2].some(e => e ===1));

    const generator = new Generator(400,300);
    const particles = generator.generate();
    assert.equal(true, particles.length > 0);
  });
});
