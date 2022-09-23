
const{
    User,
    Post,
    Comment
} = require('../models');


const users = [
    {
        username:'brenda',
        password: 'passw122'
    },

    {
        username:'Gloricel',
        password:'verano12'
    },

    {
        username:'Joe',
        password:'kdod134'
    },
]

const posts = [
    {
        title: 'What airplanes fly',
        content: ' they fly ',
        user_id: 2
    },

    {
       title: 'today is Friday',
        content: ' friday are fun',
        user_id: 1
    },

    {

        title: 'I dont agree',
        content: ' we have opinions ',
        user_id: 3
    },
]

const comments = [
    {
        content: ' this is a bad idea',
        user_id: 2
    },

    {
        content: 'I love it ',
        user_id: 1
    },
]

(async () => {

    await User.bulkCreate(users); //bulkCreate() method allows you to insert multiple records to your database table with a single function call.
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comment);
});