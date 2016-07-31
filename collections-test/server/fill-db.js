import { Meteor } from 'meteor/meteor';
import { ProgrammingLanguages } from '/collections';

Meteor.startup(() => {
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
});
