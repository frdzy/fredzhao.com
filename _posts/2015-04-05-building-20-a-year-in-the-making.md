---
layout: post
title: Building 20&#58; A Year in the Making
customjs:
 - build/react-with-addons-0.13.1.js
 - build/photo_data.js
 - build/building20.js
thumbnail: /public/images/10203517579964389.jpg
---

In the months leading up to the construction of the Facebook campus's new
Building 20, I was pursuing a project of my own: run 500 miles in 2014.
After I finished each run in front of Building 19 -- the company gym -- I
also took a photo of Building 20 emerging from its scaffolding across the
highway.

<div id="read-more" />
Here is the resulting time lapse.
<!-- more -->
<div id="build20-canvas"></div>


### Building this post!

This was also an interesting experiment to try out Jekyll's Javascript embedding
feature. To summarize the choices I made:

* Everything is implemented via [React](https://facebook.github.io/react/)
* Manual step to process JS: `babel --presets /usr/local/lib/node_modules/babel-preset-react public/js/src/ --out-dir public/js/build/`

There are several improvements I could make here: browser-side transformations,
build scripts, etc. I chose to forego them all and also incur the cost of some
antipatterns (e.g. checking in `build/` contents), just to isolate the behaviors
of Jekyll.

A few helpful articles I referenced while making of this post:

* [Official Jekyll documentation](http://jekyllrb.com/docs/frontmatter/)
* [User-created Jekyll summary](http://jekyllbootstrap.com/lessons/jekyll-introduction.html) that's very useful and very frank
* [Tip on implementing "Read More" on the generated homepage](http://www.seanbuscay.com/blog/jekyll-teaser-pager-and-read-more/)
* [Debugging "Read More"](https://github.com/jekyll/jekyll/issues/4070): Restart `jekyll serve` when updating `excerpt_separator`
* [Debugging `excerpt_separator`](http://stackoverflow.com/a/28083299): Switch the markdown renderer out of `redcarpet`

*Note: This post was cleaned up and finally published on 19 Jan 2016.*
