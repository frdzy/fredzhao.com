'use strict';
(self.webpackChunkminimal_blog = self.webpackChunkminimal_blog || []).push([
  [366],
  {
    69181: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return w;
          },
        });
      var r = n(67294),
        o = n(70977),
        s = n(1597),
        a = n(97274),
        i = n(57296),
        c = n(3691),
        u = function (t) {
          var e = t.children;
          return (0, o.tZ)(
            'section',
            {
              sx: {
                mb: [5, 5, 6],
                ul: { margin: 0, padding: 0 },
                li: {
                  listStyle: 'none',
                  mb: 3,
                  a: { variant: 'links.listItem' },
                },
                variant: 'section_bottom',
              },
            },
            e
          );
        },
        l = n(99105),
        p = n(46938),
        f = n(90944),
        m = n(9591),
        b = n(63366),
        g = n(64983),
        O = ['components'],
        y = { _frontmatter: {} };
      function v(t) {
        var e = t.components,
          n = (0, b.Z)(t, O);
        return (0, g.mdx)(
          'wrapper',
          Object.assign({}, y, n, { components: e, mdxType: 'MDXLayout' }),
          (0, g.mdx)(
            'p',
            null,
            "Hiya ev'rybody! I'm Fred. This site is a space for me to post what's on my mind,\ncollect interesting things to read, and experiment with coding outside of work."
          )
        );
      }
      v.isMDXComponent = !0;
      var Z = ['components'],
        d = { _frontmatter: {} };
      function j(t) {
        var e = t.components,
          n = (0, b.Z)(t, Z);
        return (0, g.mdx)(
          'wrapper',
          Object.assign({}, d, n, { components: e, mdxType: 'MDXLayout' })
        );
      }
      j.isMDXComponent = !0;
      var h = function (t) {
        var e = t.posts,
          n = (0, l.Z)(),
          r = n.basePath,
          b = n.blogPath,
          g = (0, p.Z)().siteTitle;
        return (0, o.tZ)(
          a.Z,
          null,
          (0, o.tZ)('h1', { sx: m.j }, g),
          (0, o.tZ)(
            'section',
            {
              sx: {
                mb: [5, 6, 7],
                p: { fontSize: [1, 2, 3], mt: 2 },
                variant: 'section_hero',
              },
            },
            (0, o.tZ)(v, null)
          ),
          (0, o.tZ)(
            i.Z,
            { text: 'Latest Posts' },
            (0, o.tZ)(
              s.Link,
              { to: (0, f.Z)('/' + r + '/' + b) },
              'Read all posts'
            )
          ),
          (0, o.tZ)(c.Z, { posts: e, showTags: !1 }),
          (0, o.tZ)(u, null, (0, o.tZ)(j, null))
        );
      };
      var w = function (t) {
        var e = Object.assign({}, t),
          n = e.data.allPost;
        return r.createElement(h, Object.assign({ posts: n.nodes }, e));
      };
    },
    73168: function (t, e, n) {
      var r = n(4942),
        o = n(70977),
        s = n(67294),
        a = n(1597),
        i = n(99105),
        c = n(90944);
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      e.Z = function (t) {
        var e = t.tags,
          n = (0, i.Z)(),
          l = n.tagsPath,
          p = n.basePath;
        return (0, o.tZ)(
          s.Fragment,
          null,
          e.map(function (t, e) {
            return (0, o.tZ)(
              s.Fragment,
              { key: t.slug },
              !!e && ', ',
              (0, o.tZ)(
                a.Link,
                {
                  sx: function (t) {
                    var e;
                    return (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? u(Object(n), !0).forEach(function (e) {
                              (0, r.Z)(t, e, n[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : u(Object(n)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e)
                              );
                            });
                      }
                      return t;
                    })(
                      {},
                      null === (e = t.styles) || void 0 === e ? void 0 : e.a
                    );
                  },
                  to: (0, c.Z)('/' + p + '/' + l + '/' + t.slug),
                },
                t.name
              )
            );
          })
        );
      };
    },
    3691: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return f;
        },
      });
      var r = n(70977),
        o = n(4942),
        s = n(67294),
        a = n(35510),
        i = n(1597),
        c = n(73168);
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                (0, o.Z)(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = function (t) {
          var e = t.post,
            n = t.showTags,
            o = void 0 === n || n;
          return (0, r.tZ)(
            a.xu,
            { mb: 4 },
            (0, r.tZ)(
              i.Link,
              {
                to: e.slug,
                sx: function (t) {
                  var e;
                  return l(
                    l(
                      {},
                      null === (e = t.styles) || void 0 === e ? void 0 : e.a
                    ),
                    {},
                    { fontSize: [1, 2, 3], color: 'text' }
                  );
                },
              },
              e.title
            ),
            (0, r.tZ)(
              'p',
              {
                sx: {
                  color: 'secondary',
                  mt: 1,
                  a: { color: 'secondary' },
                  fontSize: [1, 1, 2],
                },
              },
              (0, r.tZ)('time', null, e.date),
              e.tags &&
                o &&
                (0, r.tZ)(
                  s.Fragment,
                  null,
                  ' — ',
                  (0, r.tZ)(c.Z, { tags: e.tags })
                )
            )
          );
        },
        f = function (t) {
          var e = t.posts,
            n = t.className,
            o = void 0 === n ? '' : n,
            s = t.showTags,
            a = void 0 === s || s;
          return (0, r.tZ)(
            'section',
            { sx: { mb: [5, 6, 7] }, className: o },
            e.map(function (t) {
              return (0, r.tZ)(p, { key: t.slug, post: t, showTags: a });
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-4b214678e9f6604c683b.js.map
