Password = Space.domain.ValueObject.extend('Password', {

  Constructor(data) {

    const value = (data && data.value) ? data.value : data;

    if (!Password.isValid(value)) {
      throw new Error(Password.ERRORS.cantBeEmpty);
    }

    this.value = value;
    Object.freeze(this);
  },

  toString() {
    return this.value;
  },

  // EJSON serializable fields
  fields() {
    return {
      value: String
    };
  }

});

Password.type('Password');

Password.ERRORS = {
  cantBeEmpty: `Passwords can't be empty'`
};

Password.isValid = function(value) {
  return _.isString(value) && value !== '';
};
