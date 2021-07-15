import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const customerSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    occupation : String,
    dob: Date,
    status : String,
    bio : String,
    file: String
    
});

autoIncrement.initialize(mongoose.connection);
customerSchema.plugin(autoIncrement.plugin,'customer');

const customer = mongoose.model('customer',customerSchema);

export default customer;