import mongoose from 'mongoose';
const projectSchema = mongoose.Schema({
  apicultor: String,
  colmena: String,
  ultimaCosesha: String,
});

const CosechaModel = mongoose.model('CosechaModel', projectSchema);

export default CosechaModel;
