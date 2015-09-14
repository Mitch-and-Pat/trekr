function Officer (full_name, email, user_name) {
  this.full_name = full_name;
  this.email = email;
  this.user_name = user_name;
  this.transmissions = [];
}

Officer.prototype.getTransmissions = function() {
  return this.transmissions;
};


module.exports = Officer;
