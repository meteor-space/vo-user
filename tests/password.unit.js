describe('Password', function() {

  beforeEach(function() {
    this.password = new Password('Dominik');
  });

  it('is serializable', function() {
    var copy = EJSON.parse(EJSON.stringify(this.password));
    expect(copy.equals(this.password)).to.be.true;
  });

  describe('construction', function() {

    it('assigns valid passwords', function() {
      var username = 'TestUser';
      expect(new Password(username).value).to.equal(username);
    });

    it('throws error if empty password is assigned', function() {
      expect(function() { new Password(''); }).to.throw(Password.ERRORS.cantBeEmpty);
    });

  });

  describe('equality', function() {

    it('is equal when username is same', function() {
      var first = new Password('Dominik');
      var second = new Password('Dominik');
      expect(first.equals(second)).to.be.true;
      expect(second.equals(first)).to.be.true;
    });

    it('is not equal if address is different', function() {
      var first = new Password('Dominik');
      var second = new Password('Rhys');
      expect(first.equals(second)).to.be.false;
      expect(second.equals(first)).to.be.false;
    });

    it('is not equal if other is not an email address', function() {
      var first = new Password('Dominik');
      var second = 'Dominik';
      expect(first.equals(second)).to.be.false;
    });

  });

  describe('immutability', function() {
    it('freezes itself', function() {
      expect(Object.isFrozen(this.password)).to.be.true;
    });
  });

});
