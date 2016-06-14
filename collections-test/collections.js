import { Mongo } from 'meteor/mongo';

const pl = new Mongo.Collection('programmingLanguages');

export { pl as ProgrammingLanguages };
