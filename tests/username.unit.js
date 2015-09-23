describe('Username', function() {

  beforeEach(function() {
    this.username = new Username('Dominik');
  });

  it('is serializable', function() {
    var copy = EJSON.parse(EJSON.stringify(this.username));
    expect(copy.equals(this.username)).to.be.true;
  });

  describe('construction', function() {

    it('assigns valid usernames', function() {
      var username = 'TestUser';
      expect(new Username(username).value).to.equal(username);
    });

    it('throws error if empty username is assigned', function() {
      expect(function() { new Username(''); }).to.throw(Username.ERRORS.cantBeEmpty);
    });

  });

  describe('equality', function() {

    it('is equal when username is same', function() {
      var first = new Username('Dominik');
      var second = new Username('Dominik');
      expect(first.equals(second)).to.be.true;
      expect(second.equals(first)).to.be.true;
    });

    it('is not equal if address is different', function() {
      var first = new Username('Dominik');
      var second = new Username('Rhys');
      expect(first.equals(second)).to.be.false;
      expect(second.equals(first)).to.be.false;
    });

    it('is not equal if other is not an email address', function() {
      var first = new Username('Dominik');
      var second = 'Dominik';
      expect(first.equals(second)).to.be.false;
    });

  });

  describe('immutability', function() {
    it('freezes itself', function() {
      expect(Object.isFrozen(this.username)).to.be.true;
    });
  });

});
