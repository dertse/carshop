// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  SSN: {type: String, require: true},
  address: {type: String, require: true},
  email: {type: String, require: true},
  phone: {type: String, require: true}
  // a relation
  // doneBy: [{ type: m.mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = m.mongoose.model("Customer", Schema);