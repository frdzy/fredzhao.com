---
layout: post
title: Hello World
---

As my Dreamhost account drew near its annual renewal date, I took the opportunity to look into other hosting options.

[GitHub Pages](https://pages.github.com/) was an obvious winner because of its unbeatable price: free! I then followed [this blog post by Joshua Lande](http://joshualande.com/jekyll-github-pages-poole/) to set up this site using Jekyll + Poole. The preview looked great!

### Custom domain name for Project Page

The only tricky part was mapping from my domain onto my [Project Page](https://github.com/frdzy/fredzhao.com) and not my GitHub [User Page](https://frdzy.github.io). A quick Google search for the term `github project page custom domain` then turned up the exact article I needed, ["Custom domain for GitHub project pages"](http://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages).

After following the steps there, it looks like the changes will take some time to propagate.

### Config adjustments for Project Page

When I previewed the new page, I noticed the CSS resources were not fetched. [The Jekyll docs](http://jekyllrb.com/docs/github-pages/#project-page-url-structure) explained how to fix this, so I ran `git grep ".css"` and manually patched up some occurrences that didn't match up with the documentation.
