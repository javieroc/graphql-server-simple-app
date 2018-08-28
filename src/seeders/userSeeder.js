import casual from 'casual';
import moment from 'moment';
import { hashSync as hash } from 'bcryptjs';
import { User } from '../models';

const userSeeder = async () => {
  const promises = Array(10)
    .fill()
    .map(() => User.create({
      email: casual.email,
      firstName: casual.first_name,
      lastName: casual.last_name,
      password: hash('secret', 10),
      phone: casual.phone,
      lifePoint: moment().toISOString(),
    }));

  await Promise.all(promises);
};

export default userSeeder;
