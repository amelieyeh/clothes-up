import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/clothes-up-backend';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // how long they stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // Todo: add data seeding here
  },
  lists: createSchema({
    // Todo: Schema items go in here
  }),
  // do you allow user to access the keystone ui to manage data?
  ui: {
    // Todo: change this for roles
    isAccessAllowed: () => true,
  },
  // Todo: add session values here
});
