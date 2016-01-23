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

  describe('immutability', function() {
    it('freezes itself', function() {
      expect(Object.isFrozen(this.username)).to.be.true;
    });
  });

});
