import mongoose from 'mongoose';
import userSeeder from './userSeeder';
import 'dotenv/config';

mongoose.connect(process.env.MONGODB_URI);

const seed = async () => {
  await userSeeder();
};

seed().then(() => {
  console.log('Finished seeders.');
  mongoose.connection.close();
});
