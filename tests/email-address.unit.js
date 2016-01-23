describe('EmailAddress', function() {

  beforeEach(function() {
    this.emailAdress = new EmailAddress('dominik.guzei@gmail.com');
  });

  it('is serializable', function() {
    let copy = EJSON.parse(EJSON.stringify(this.emailAdress));
    expect(copy.equals(this.emailAdress)).to.be.true;
  });

  describe('construction', function() {

    it('assigns valid email addresses', function() {
      let email;
      email = 'dominik.guzei@gmail.com';
      expect(new EmailAddress(email).address).to.equal(email);
    });

    it('throws error if invalid email address is assigned', function() {
      expect(function() { return new EmailAddress('XX'); })
      .to.throw("Invalid email address: XX");

      expect(function() { return new EmailAddress('dominik.guzei@gmail..com'); })
      .to.throw("Invalid email address: dominik.guzei@gmail..com");

      expect(function() { return new EmailAddress('dominik.guzeigmail.com'); })
      .to.throw("Invalid email address: dominik.guzeigmail.com");
    });

  });

  describe('immutability', function() {
    it('freezes itself', function() {
      expect(Object.isFrozen(this.emailAdress)).to.be.true;
    });
  });

});
