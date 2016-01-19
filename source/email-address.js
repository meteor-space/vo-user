EmailAddress = Space.domain.ValueObject.extend('EmailAddress', {

  Constructor(data) {

    const address = (data && data.address) ? data.address : data;

    if (!EmailAddress.isValid(address)) {
      throw new Error(`Invalid email address: ${address}`);
    }

    this.address = address;
    Object.freeze(this);
  },

  // EJSON serializable fields
  fields() {
    return {
      address: String
    };
  },

  toString() {
    return '' + this.address;
  }

});

EmailAddress.isValid = function(value) {
  // taken from: https://github.com/jzaefferer/jquery-validation/blob/master/src/core.js
  return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(value);
};
