const nwtgckHello = require('../index.js');
const assert      = require('assert');

describe('main package', function(){
  it('hello()', function(){
    assert.equal("hello, world", nwtgckHello.hello());
  });
});
