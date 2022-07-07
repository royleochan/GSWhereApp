// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Desk } = initSchema(schema);

export {
  Desk
};