module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'nuxt-contentful project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
    contentful: {
      'type': 'confirm',
      'message': 'Set up Contentful now?'
    },
    contentfulSetupSpaceId: {
      'when': 'contentful',
      'type': 'string',
      'required': false,
      'message': 'Space ID',
      'default': ''
    },
    contentfulSetupAccessToken: {
      'when': 'contentful',
      'type': 'string',
      'required': false,
      'message': 'Content Delivery API - access token',
      'default': ''
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};