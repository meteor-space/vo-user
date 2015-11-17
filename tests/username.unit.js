describe('Username', function() {

  beforeEach(function() {
    this.username = new Username('Dominik');
  });

  it('is serializable', function() {
    let copy = EJSON.parse(EJSON.stringify(this.username));
    expect(copy.equals(this.username)).to.be.true;
  });

  describe('construction', function() {

    it('assigns valid usernames', function() {
      let username = 'TestUser';
      expect(new Username(username).value).to.equal(username);
    });

    it('throws error if empty username is assigned', function() {
      expect(function() { return new Username(''); }).to.throw(Username.ERRORS.cantBeEmpty);
    });

  });

  describe('equality', function() {

    it('is equal when username is same', function() {
      let first = new Username('Dominik');
      let second = new Username('Dominik');
      expect(first.equals(second)).to.be.true;
      expect(second.equals(first)).to.be.true;
    });

    it('is not equal if address is different', function() {
      let first = new Username('Dominik');
      let second = new Username('Rhys');
      expect(first.equals(second)).to.be.false;
      expect(second.equals(first)).to.be.false;
    });

    it('is not equal if other is not an email address', function() {
      let first = new Username('Dominik');
      let second = 'Dominik';
      expect(first.equals(second)).to.be.false;
    });

  });

  describe('immutability', function() {
    it('freezes itself', function() {
      expect(Object.isFrozen(this.username)).to.be.true;
    });
  });

});
