import { UserInputError } from 'apollo-server';
import { hashSync as hash, compareSync as comparePasswords } from 'bcryptjs';
import moment from 'moment';
import { User } from '../models';
import { createToken } from '../services';

const userResolver = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    signIn: async (parent, { signInData }, { secret }) => {
      const { email, password } = signInData;
      const user = await User.findOne({ email });

      if (!user) {
        throw new UserInputError('Invalid Email!', {
          invalidArgs: ['email'],
        });
      }

      if (!comparePasswords(password, user.password)) {
        throw new UserInputError('Invalid Password', {
          invalidArgs: ['password'],
        });
      }

      const token = await createToken(user, secret);
      return {
        token,
        user,
      };
    },
    signUp: async (parent, { signUpData }, { secret }) => {
      const { email, password, ...others } = signUpData;
      const photo = `https://robohash.org/${email}`;

      const user = await User.create({
        email,
        password: hash(password, 10),
        photo,
        lifePoint: moment().toISOString(),
        ...others,
      });

      const token = await createToken(user, secret);
      return {
        token,
        user,
      };
    },
    updateUser: async (parent, { userUpdated }) => {
      const { email, ...others } = userUpdated;
      const user = await User.findOneAndUpdate({ email }, { ...others }, { new: true });
      return user;
    },
  },
};

export default userResolver;
