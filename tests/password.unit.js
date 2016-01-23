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

  describe('immutability', function() {
    it('freezes itself', function() {
      expect(Object.isFrozen(this.password)).to.be.true;
    });
  });

});
