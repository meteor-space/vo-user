Username = Space.domain.ValueObject.extend('Username', {

  Constructor(data) {

    const value = (data && data.value) ? data.value : data;

    if (!Username.isValid(value)) {
      throw new Error(Username.ERRORS.cantBeEmpty);
    }

    this.value = value;
    Object.freeze(this);
  },

  // EJSON serializable fields
  fields() {
    return {
      value: String
    };
  },

  toString() {
    return this.value;
  }

});

Username.ERRORS = {
  cantBeEmpty: `Usernames can't be empty`
};

Username.type('Username');

Username.isValid = function(value) {
  return _.isString(value) && value !== '';
};
