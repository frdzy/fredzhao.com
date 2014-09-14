---
layout: post
title: Hello World
---

As my Dreamhost account drew near its annual renewal date, I took the opportunity to look into other hosting options.

[GitHub Pages](https://pages.github.com/) was an obvious winner because of its unbeatable price: free! I then followed [this blog post by Joshua Lande](http://joshualande.com/jekyll-github-pages-poole/) to set up this site using Jekyll + Poole. The preview looked great!

### Custom domain name for Project Page

The only tricky part was mapping from my domain onto my [Project Page](https://github.com/frdzy/fredzhao.com) and not my GitHub [User Page](https://frdzy.github.io). A quick Google search for the term `github project page custom domain` then turned up the exact article I needed, ["Custom domain for GitHub project pages"](http://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages).

One point of confusion I had was that, in all of the articles, they explained that the DNS records should point to the GitHub User Page, but it wasn't clear how this connected to the Project Page. The second-highest answer on the Stack Overflow page explained this more in detail:

> For the CNAME record, point www to yourusername.github.io. Note the trailing full stop. Note also, this is the username, not the project name. You don't need to specify the project name yet. Github will use the CNAME file to determine which project to ship content for.

After following the steps there, it looks like the changes will take some time to propagate.

### Config adjustments for Project Page

When I previewed the new page on the `github.io` domain, I noticed the CSS resources were not fetched. [The Jekyll docs](http://jekyllrb.com/docs/github-pages/#project-page-url-structure) explained how to fix this, so I ran

```
$ sed -i -e 's:baseurl }}\([^{/]\):baseurl }}/\1:' \
  $(git grep "baseurl }}[^{/]" | cut -d: -f1 | uniq)
```

to manually patched up all the occurrences that didn't match up with the documentation.

As a sanity check, I made sure these all worked (including serving up the page with the correct CSS):

* Clicking on a post permalink
* Clicking back to the homepage
* Clicking "Older" to see an older post
* Clicking "Older" again to see an even older post
* Clicking "Newer" to step back
* Clicking "Newer" to step back one more time
* Loading `/atom.xml`
* Loading `/derp` (which doesn't exist) and make sure the "Head back home" works

```
baseurl=/
GET http://0.0.0.0:4000/2014/09/14/hello-world/public/css/poole.css [Status: 404]

baseurl=/fredzhao.com
GET http://fredzhao.com/fredzhao.com/public/css/poole.css [Status: 404]

baseurl=/
GET http://public/css/poole.css net::ERR_NAME_NOT_RESOLVED
```
