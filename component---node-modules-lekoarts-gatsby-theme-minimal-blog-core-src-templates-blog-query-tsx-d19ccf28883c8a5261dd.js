'use strict';
(self.webpackChunkminimal_blog = self.webpackChunkminimal_blog || []).push([
  [303],
  {
    63635: function (t, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return y;
          },
        });
      var n = r(67294),
        o = r(4942),
        s = r(70977),
        c = r(35510),
        a = r(1597),
        i = r(97274),
        u = r(3691),
        l = r(99105),
        p = r(90944),
        f = r(41775);
      function b(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? b(Object(r), !0).forEach(function (e) {
                (0, o.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var g = function (t) {
        var e = t.posts,
          r = (0, l.Z)(),
          n = r.tagsPath,
          o = r.basePath;
        return (0, s.tZ)(
          i.Z,
          null,
          (0, s.tZ)(f.Z, { title: 'Blog' }),
          (0, s.tZ)(
            c.kC,
            {
              sx: {
                alignItems: 'center',
                justifyContent: 'space-between',
                flexFlow: 'wrap',
              },
            },
            (0, s.tZ)(
              c.X6,
              { as: 'h1', variant: 'styles.h1', sx: { marginY: 2 } },
              'Blog'
            ),
            (0, s.tZ)(
              a.Link,
              {
                sx: function (t) {
                  var e;
                  return O(
                    O(
                      {},
                      null === (e = t.styles) || void 0 === e ? void 0 : e.a
                    ),
                    {},
                    { variant: 'links.secondary', marginY: 2 }
                  );
                },
                to: (0, p.Z)('/' + o + '/' + n),
              },
              'View all tags'
            )
          ),
          (0, s.tZ)(u.Z, { posts: e, sx: { mt: [4, 5] } })
        );
      };
      var y = function (t) {
        var e = Object.assign({}, t),
          r = e.data.allPost;
        return n.createElement(g, Object.assign({ posts: r.nodes }, e));
      };
    },
    73168: function (t, e, r) {
      var n = r(4942),
        o = r(70977),
        s = r(67294),
        c = r(1597),
        a = r(99105),
        i = r(90944);
      function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      e.Z = function (t) {
        var e = t.tags,
          r = (0, a.Z)(),
          l = r.tagsPath,
          p = r.basePath;
        return (0, o.tZ)(
          s.Fragment,
          null,
          e.map(function (t, e) {
            return (0, o.tZ)(
              s.Fragment,
              { key: t.slug },
              !!e && ', ',
              (0, o.tZ)(
                c.Link,
                {
                  sx: function (t) {
                    var e;
                    return (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? u(Object(r), !0).forEach(function (e) {
                              (0, n.Z)(t, e, r[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : u(Object(r)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(r, e)
                              );
                            });
                      }
                      return t;
                    })(
                      {},
                      null === (e = t.styles) || void 0 === e ? void 0 : e.a
                    );
                  },
                  to: (0, i.Z)('/' + p + '/' + l + '/' + t.slug),
                },
                t.name
              )
            );
          })
        );
      };
    },
    3691: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return f;
        },
      });
      var n = r(70977),
        o = r(4942),
        s = r(67294),
        c = r(35510),
        a = r(1597),
        i = r(73168);
      function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(r), !0).forEach(function (e) {
                (0, o.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p = function (t) {
          var e = t.post,
            r = t.showTags,
            o = void 0 === r || r;
          return (0, n.tZ)(
            c.xu,
            { mb: 4 },
            (0, n.tZ)(
              a.Link,
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
            (0, n.tZ)(
              'p',
              {
                sx: {
                  color: 'secondary',
                  mt: 1,
                  a: { color: 'secondary' },
                  fontSize: [1, 1, 2],
                },
              },
              (0, n.tZ)('time', null, e.date),
              e.tags &&
                o &&
                (0, n.tZ)(
                  s.Fragment,
                  null,
                  ' — ',
                  (0, n.tZ)(i.Z, { tags: e.tags })
                )
            )
          );
        },
        f = function (t) {
          var e = t.posts,
            r = t.className,
            o = void 0 === r ? '' : r,
            s = t.showTags,
            c = void 0 === s || s;
          return (0, n.tZ)(
            'section',
            { sx: { mb: [5, 6, 7] }, className: o },
            e.map(function (t) {
              return (0, n.tZ)(p, { key: t.slug, post: t, showTags: c });
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-blog-query-tsx-d19ccf28883c8a5261dd.js.map
