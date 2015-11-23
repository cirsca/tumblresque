Blogs = new Mongo.Collection('blogs');

var Schemas = {};

Schemas.Blogs = new SimpleSchema({
    title: {
        type: String,
        label: "Blog Title",
        max: 200
    },
    name: {
        type: String,
        label: "Blog Name"
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    },
    isPrivate: {
      type: Boolean,
      label: "Is this a private blog?",
      optional: false
    },
    blogPosts: {
      type: [Object],
      optional: true,
      blackbox: true
    }
});


