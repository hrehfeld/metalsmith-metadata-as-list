# metalsmith-metadata-as-list

  A metalsmith plugin to split a metadata field into a list at delimiter.

## Installation

    $ npm install metalsmith-metadata-as-list

## Description in Pages

  In your pages:

```
---
title: This is page with tags
tags: tagged, page, metalsmith, plugin
---

Hello World
```

You can use different handle for the tags, by configuring the `handle` option. `tags` is the default.


## CLI Usage

  Install the node modules and then add the `metalsmith-tags` key to your `metalsmith.json` plugins. The simplest use case just requires tag handle you want to use:

```json
{
  "plugins": {
    "metalsmith-metadata-as-list": {
      "handle": "tags",
    }
  }
}
```

## JavaScript Usage

  Pass the plugin to `Metalsmith#use`:

```js
var split = require('metalsmith-metadata-as-list');

metalsmith
    .use(split({
        handle: 'tags',                  // yaml key for tag list in you pages
        path:'topics/:tag.html',                   // path for result pages
        template:'/partials/tag.hbt',    // template to use for tag listing
        sortBy: 'date',                  // provide posts sorted by 'date' (optional)
        reverse: true                    // sort direction (optional)
    }));
```
## Contribution

  Feel free to contribute to this plug-in. Fork, commit, send pull request.
  Issues, suggestions and bugs are more than welcome.

  In case you add functionality, please write corresponding test. Test using `npm test`.

  Thanks!

## License

  MIT
