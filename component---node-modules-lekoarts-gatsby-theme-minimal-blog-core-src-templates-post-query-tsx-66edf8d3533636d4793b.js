(self.webpackChunkminimal_blog = self.webpackChunkminimal_blog || []).push([
  [688],
  {
    67228: function (t) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    23646: function (t, e, r) {
      var n = r(67228);
      (t.exports = function (t) {
        if (Array.isArray(t)) return n(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    69100: function (t, e, r) {
      var n = r(99489),
        o = r(57067);
      function u(e, r, c) {
        return (
          o()
            ? ((t.exports = u = Reflect.construct),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports))
            : ((t.exports = u =
                function (t, e, r) {
                  var o = [null];
                  o.push.apply(o, e);
                  var u = new (Function.bind.apply(t, o))();
                  return r && n(u, r.prototype), u;
                }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports)),
          u.apply(null, arguments)
        );
      }
      (t.exports = u),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    57067: function (t) {
      (t.exports = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    46860: function (t) {
      (t.exports = function (t) {
        if (
          ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t['@@iterator']
        )
          return Array.from(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    98206: function (t) {
      (t.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    319: function (t, e, r) {
      var n = r(23646),
        o = r(46860),
        u = r(60379),
        c = r(98206);
      (t.exports = function (t) {
        return n(t) || o(t) || u(t) || c();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    60379: function (t, e, r) {
      var n = r(67228);
      (t.exports = function (t, e) {
        if (t) {
          if ('string' == typeof t) return n(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? n(t, e)
              : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    92102: function (t, e, r) {
      var n = r(92632);
      t.exports = { MDXRenderer: n };
    },
    92632: function (t, e, r) {
      var n = r(69100),
        o = r(319),
        u = r(59713),
        c = r(37316),
        a = ['scope', 'children'];
      function s(t, e) {
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
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(r), !0).forEach(function (e) {
                u(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var p = r(67294),
        l = r(64983).mdx,
        f = r(76948).useMDXScope;
      t.exports = function (t) {
        var e = t.scope,
          r = t.children,
          u = c(t, a),
          s = f(e),
          d = p.useMemo(
            function () {
              if (!r) return null;
              var t = i({ React: p, mdx: l }, s),
                e = Object.keys(t),
                u = e.map(function (e) {
                  return t[e];
                });
              return n(Function, ['_fn'].concat(o(e), ['' + r])).apply(
                void 0,
                [{}].concat(o(u))
              );
            },
            [r, e]
          );
        return p.createElement(d, i({}, u));
      };
    },
    12186: function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          default: function () {
            return d;
          },
        });
      var n = r(67294),
        o = r(70977),
        u = r(35510),
        c = r(92102),
        a = r(97274),
        s = r(73168),
        i = r(41775),
        p = function (t) {
          t.post;
          return null;
        },
        l = ['32px', '16px', '8px', '4px'].map(function (t) {
          return 'rgba(0, 0, 0, 0.15) 0px ' + t + ' ' + t + ' 0px';
        }),
        f = function (t) {
          var e,
            r,
            f,
            d = t.data.post;
          return (0, o.tZ)(
            a.Z,
            null,
            (0, o.tZ)(i.Z, {
              title: d.title,
              description: d.description ? d.description : d.excerpt,
              image: d.banner
                ? null === (e = d.banner) ||
                  void 0 === e ||
                  null === (r = e.childImageSharp) ||
                  void 0 === r ||
                  null === (f = r.resize) ||
                  void 0 === f
                  ? void 0
                  : f.src
                : void 0,
              pathname: d.slug,
              canonicalUrl: d.canonicalUrl,
            }),
            (0, o.tZ)(u.X6, { as: 'h1', variant: 'styles.h1' }, d.title),
            (0, o.tZ)(
              'p',
              {
                sx: {
                  color: 'secondary',
                  mt: 3,
                  a: { color: 'secondary' },
                  fontSize: [1, 1, 2],
                },
              },
              (0, o.tZ)('time', null, d.date),
              d.tags &&
                (0, o.tZ)(
                  n.Fragment,
                  null,
                  ' — ',
                  (0, o.tZ)(s.Z, { tags: d.tags })
                ),
              d.timeToRead && ' — ',
              d.timeToRead && (0, o.tZ)('span', null, d.timeToRead, ' min read')
            ),
            (0, o.tZ)(
              'section',
              {
                sx: {
                  my: 5,
                  '.gatsby-resp-image-wrapper': {
                    my: [4, 4, 5],
                    boxShadow: l.join(', '),
                  },
                  variant: 'layout.content',
                },
              },
              (0, o.tZ)(c.MDXRenderer, null, d.body)
            ),
            (0, o.tZ)(p, { post: d })
          );
        };
      var d = function (t) {
        var e = Object.assign({}, t);
        return n.createElement(f, e);
      };
    },
    73168: function (t, e, r) {
      'use strict';
      var n = r(4942),
        o = r(70977),
        u = r(67294),
        c = r(1597),
        a = r(99105),
        s = r(90944);
      function i(t, e) {
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
          p = r.tagsPath,
          l = r.basePath;
        return (0, o.tZ)(
          u.Fragment,
          null,
          e.map(function (t, e) {
            return (0, o.tZ)(
              u.Fragment,
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
                          ? i(Object(r), !0).forEach(function (e) {
                              (0, n.Z)(t, e, r[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : i(Object(r)).forEach(function (e) {
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
                  to: (0, s.Z)('/' + l + '/' + p + '/' + t.slug),
                },
                t.name
              )
            );
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-66edf8d3533636d4793b.js.map
