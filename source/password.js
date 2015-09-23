Password = Space.messaging.Serializable.extend('Password', {

  Constructor: function (data) {
    var value = (data && data.value) ? data.value : data;

    if(!Password.isValid(value)) {
      throw new Error(Password.ERRORS.cantBeEmpty);
    }

    this.value = value;
    Object.freeze(this);
  },

  toString: function() {
    return this.value;
  },

  equals: function(other) {
    return (other instanceof Password) && other.value === this.value;
  }

});

Password.ERRORS = {
  cantBeEmpty: "Passwords can't be empty"
};

Password.type('Password');

Password.fields = {
  value: String
};

Password.isValid = function (value) {
  return _.isString(value) && value !== '';
};
