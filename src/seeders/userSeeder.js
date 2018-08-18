import casual from 'casual';
import { hashSync as hash } from 'bcryptjs';
import { User } from '../models';

const userSeeder = async () => {
  const promises = Array(2).fill().map(() => User.create({
    email: casual.email,
    firstName: casual.first_name,
    lastName: casual.last_name,
    password: hash('secret', 10),
    phome: casual.phone,
  }));

  await Promise.all(promises);
};

export default userSeeder;
