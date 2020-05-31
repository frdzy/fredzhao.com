var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var jsRoot = '/public/js';

function getEntries(projectNames) {
  var entries = {};
  projectNames.forEach(function(projectName) {
    entries['/projects/' + projectName] =
      __dirname + jsRoot + '/src/projects/' + projectName + '/main.js';
  });
  return entries;
}

var projectNames = [
  'building20',
];

module.exports = {
  entry: getEntries(projectNames),
  output: {
    path: __dirname + jsRoot + '/build',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CommonsChunkPlugin({ 
      filename: 'core/commons.js', 
      names: projectNames,
      children: true,
    }),
  ],
};
