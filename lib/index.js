/**
 * A metalsmith plugin to split a field into a list
 *
 * @return {Function}
 */
function plugin(opts) {
  /**
   * Holds a mapping of tag names to an array of files with that tag.
   * @type {Object}
   */
  var tagList = {};

  opts = opts || {};
  opts.handle = opts.handle || 'tags';
  opts.delimiter = opts.delimiter || ',';

  return function(files, metalsmith, done) {
    function trimSafeTag(tag) {
      return tag.trim().replace(/ /g,'-');
    }

    // Find all tags and their associated files.
    Object.keys(files).forEach(function(file) {
      var data = files[file];
      var tagsData = data[opts.handle];

      // If we have tag data for this file then turn it into an array of
      // individual tags where each tag has been sanitized.
      if (tagsData) {
        if (typeof tagsData === 'string') {
          tagsData = tagsData.split(opts.delimiter);
        }

        // Save formatted tags data.
        data[opts.handle] = tagsData.map(trimSafeTag);
      }
    });

    done();
  };
}

/**
 * Expose `plugin`.
 */
module.exports = plugin;
