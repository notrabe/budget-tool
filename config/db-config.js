const mongoose = require('mongoose');
const uri =
  'mongodb+srv://user1:user1password@budget-tool.qk0za.mongodb.net/?retryWrites=true&w=majority';
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
