import { ProgrammingLanguages } from '/collections';

const count = ProgrammingLanguages.find().count();

if (count === 0) {
  ProgrammingLanguages.insert({
    name: 'JavaScript',
    stars: 0
  });
  ProgrammingLanguages.insert({
    name: 'Python',
    stars: 0
  });
  ProgrammingLanguages.insert({
    name: 'Ruby',
    stars: 0
  });
}
