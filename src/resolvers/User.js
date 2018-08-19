import { User } from '../models';

const userResolver = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
  },
};

export default userResolver;
