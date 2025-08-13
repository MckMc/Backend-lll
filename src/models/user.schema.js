import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: { type:String, required:true },
  last_name:  { type:String, required:true },
  email:      { type:String, required:true, unique:true, index:true },
  age:        { type:Number, default:0 },
  password:   { type:String, required:true },
  cart:       { type: mongoose.Schema.Types.ObjectId, ref:'Cart' },
  role:       { type:String, enum:['user','admin'], default:'user' },
  pwdChangedAt: { type: Date },
  documents: [{
    name: { type:String, required:true },
    reference: { type:String, required:true } // ruta o URL
  }],
  last_connection: { type: Date, default: null }
}, { timestamps:true });

export const UserModel = mongoose.model('User', userSchema);
