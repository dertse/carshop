// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  name: {type: String, required: true},
  pass: {type: String, required: true}
});

module.exports = m.mongoose.model("Employee", Schema);