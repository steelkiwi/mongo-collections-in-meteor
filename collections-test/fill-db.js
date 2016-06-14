import { ProgrammingLanguages } from '/collections';

const count = ProgrammingLanguages.find().count();

if (count === 0) {
  ProgrammingLanguages.insert({
    name: 'JavaScript'
  });
  ProgrammingLanguages.insert({
    name: 'Python'
  });
  ProgrammingLanguages.insert({
    name: 'Ruby'
  });
}
