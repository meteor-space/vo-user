Username = Space.messaging.Serializable.extend('Username', {

  Constructor(data) {
    let value = (data && data.value) ? data.value : data;

    if (!Username.isValid(value)) {
      throw new Error(Username.ERRORS.cantBeEmpty);
    }

    this.value = value;
    Object.freeze(this);
  },

  toString() {
    return this.value;
  },

  equals(other) {
    return (other instanceof Username) && other.value === this.value;
  }

});

Username.ERRORS = {
  cantBeEmpty: "Usernames can't be empty"
};

Username.type('Username');

Username.fields = {
  value: String
};

Username.isValid = function(value) {
  return _.isString(value) && value !== '';
};
