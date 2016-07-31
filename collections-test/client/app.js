import { Template } from 'meteor/templating';
import './app.html';
import { ProgrammingLanguages } from '../collections.js';

Template.body.helpers({
    programmingLanguages() {
        return ProgrammingLanguages.find({});
    }
});

Template.programmingLanguage.events({
    'click .pl-star'(event, template) {
        event.preventDefault();
        ProgrammingLanguages.update({
            _id: this._id
        }, {
            '$inc': {
                stars: 1
            }
        });
    }
});
