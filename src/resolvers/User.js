import { User } from '../models';

const userResolver = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    updateUser: async (parent, { userUpdated }) => {
      const { email, ...others } = userUpdated;
      const user = await User.findOneAndUpdate({ email }, { ...others }, { new: true });
      return user;
    },
  },
};

export default userResolver;
