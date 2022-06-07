import mongoose from 'mongoose';
const projectSchema = mongoose.Schema({
  apicultor: String,
  colmena: String,
  gramosMiel: Number,
  fechaUltimaCosecha: String,
});

const CosechaModel = mongoose.model('CosechaModel', projectSchema);

export default CosechaModel;
