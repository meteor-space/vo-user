describe('EmailAddress', function() {

  beforeEach(function() {
    this.emailAdress = new EmailAddress('dominik.guzei@gmail.com');
  });

  it('is serializable', function() {
    var copy = EJSON.parse(EJSON.stringify(this.emailAdress));
    expect(copy.equals(this.emailAdress)).to.be.true;
  });

  describe('construction', function() {

    it('assigns valid email addresses', function() {
      var email;
      email = 'dominik.guzei@gmail.com';
       expect(new EmailAddress(email).address).to.equal(email);
    });

    it('throws error if invalid email address is assigned', function() {
      expect(function() { new EmailAddress('XX'); })
        .to.throw("Invalid email address: XX");

      expect(function() { new EmailAddress('dominik.guzei@gmail..com'); })
        .to.throw("Invalid email address: dominik.guzei@gmail..com");

      expect(function() { new EmailAddress('dominik.guzeigmail.com'); })
        .to.throw("Invalid email address: dominik.guzeigmail.com");
    });

  });

  describe('equality', function() {

    it('is equal when address is same', function() {
      var first = new EmailAddress('test@bla.com');
      var second = new EmailAddress('test@bla.com');
      expect(first.equals(second)).to.be.true;
      expect(second.equals(first)).to.be.true;
    });

    it('is not equal if address is different', function() {
      var first = new EmailAddress('test@bla.com');
      var second = new EmailAddress('test@blub.com');
      expect(first.equals(second)).to.be.false;
      expect(second.equals(first)).to.be.false;
    });

    it('is not equal if other is not an email address', function() {
      var first = new EmailAddress('test@bla.com');
      var second = 'test@blub.com';
      expect(first.equals(second)).to.be.false;
    });

  });

  describe('immutability', function() {
    it('freezes itself', function() {
      expect(Object.isFrozen(this.emailAdress)).to.be.true;
    });
  });

});
