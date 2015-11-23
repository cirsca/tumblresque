BlogPosts = new Mongo.Collection('blogposts');

var Schemas = {};

Schemas.BlogPosts = new SimpleSchema({
    title: {
        type: String,
        label: "Blog Title",
        max: 200,
        optional: true
    },
    content: {
      type: String,
      label: "Whatcha got to say?",
      autoform: {
        afFieldInput: {
          type: 'summernote',
          class: 'editor' // optional
          settings: // summernote options goes here
        }
      }
    }
});