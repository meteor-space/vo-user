describe('Password', function() {

  beforeEach(function() {
    this.password = new Password('my-password');
  });

  it('is serializable', function() {
    let copy = EJSON.parse(EJSON.stringify(this.password));
    expect(copy.equals(this.password)).to.be.true;
  });

  describe('construction', function() {

    it('assigns valid passwords', function() {
      let password = 'test';
      expect(new Password(password).value).to.equal(password);
    });

    it('throws error if empty password is assigned', function() {
      let createEmptyPassword = function() {
        return new Password('');
      };
      expect(createEmptyPassword).to.throw(Password.ERRORS.cantBeEmpty);
    });

  });

  describe('equality', function() {

    it('is equal when username is same', function() {
      let first = new Password('Bla');
      let second = new Password('Bla');
      expect(first.equals(second)).to.be.true;
      expect(second.equals(first)).to.be.true;
    });

    it('is not equal if address is different', function() {
      let first = new Password('first');
      let second = new Password('second');
      expect(first.equals(second)).to.be.false;
      expect(second.equals(first)).to.be.false;
    });

    it('is not equal if other is not an email address', function() {
      let first = new Password('first');
      let second = 'second';
      expect(first.equals(second)).to.be.false;
    });

  });

  describe('immutability', function() {
    it('freezes itself', function() {
      expect(Object.isFrozen(this.password)).to.be.true;
    });
  });

});
