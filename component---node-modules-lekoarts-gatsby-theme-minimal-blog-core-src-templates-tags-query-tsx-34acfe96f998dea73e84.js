(self.webpackChunkminimal_blog = self.webpackChunkminimal_blog || []).push([
  [726],
  {
    38797: function (t, e, u) {
      var n = '[object Symbol]',
        r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        f = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        o = '\\u2700-\\u27bf',
        i = 'a-z\\xdf-\\xf6\\xf8-\\xff',
        a = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
        c =
          '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
        l = "['’]",
        s = '[' + c + ']',
        d = '[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]',
        b = '\\d+',
        x = '[\\u2700-\\u27bf]',
        p = '[' + i + ']',
        g = '[^\\ud800-\\udfff' + c + b + o + i + a + ']',
        O = '(?:\\ud83c[\\udde6-\\uddff]){2}',
        j = '[\\ud800-\\udbff][\\udc00-\\udfff]',
        y = '[' + a + ']',
        v = '(?:' + p + '|' + g + ')',
        m = '(?:' + y + '|' + g + ')',
        Z = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        h = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        E =
          '(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?',
        A = '[\\ufe0e\\ufe0f]?',
        I =
          A +
          E +
          ('(?:\\u200d(?:' +
            ['[^\\ud800-\\udfff]', O, j].join('|') +
            ')' +
            A +
            E +
            ')*'),
        k = '(?:' + [x, O, j].join('|') + ')' + I,
        P = RegExp(l, 'g'),
        S = RegExp(d, 'g'),
        w = RegExp(
          [
            y + '?' + p + '+' + Z + '(?=' + [s, y, '$'].join('|') + ')',
            m + '+' + h + '(?=' + [s, y + v, '$'].join('|') + ')',
            y + '?' + v + '+' + Z,
            y + '+' + h,
            b,
            k,
          ].join('|'),
          'g'
        ),
        C =
          /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        U = 'object' == typeof u.g && u.g && u.g.Object === Object && u.g,
        z = 'object' == typeof self && self && self.Object === Object && self,
        L = U || z || Function('return this')();
      var D,
        R =
          ((D = {
            À: 'A',
            Á: 'A',
            Â: 'A',
            Ã: 'A',
            Ä: 'A',
            Å: 'A',
            à: 'a',
            á: 'a',
            â: 'a',
            ã: 'a',
            ä: 'a',
            å: 'a',
            Ç: 'C',
            ç: 'c',
            Ð: 'D',
            ð: 'd',
            È: 'E',
            É: 'E',
            Ê: 'E',
            Ë: 'E',
            è: 'e',
            é: 'e',
            ê: 'e',
            ë: 'e',
            Ì: 'I',
            Í: 'I',
            Î: 'I',
            Ï: 'I',
            ì: 'i',
            í: 'i',
            î: 'i',
            ï: 'i',
            Ñ: 'N',
            ñ: 'n',
            Ò: 'O',
            Ó: 'O',
            Ô: 'O',
            Õ: 'O',
            Ö: 'O',
            Ø: 'O',
            ò: 'o',
            ó: 'o',
            ô: 'o',
            õ: 'o',
            ö: 'o',
            ø: 'o',
            Ù: 'U',
            Ú: 'U',
            Û: 'U',
            Ü: 'U',
            ù: 'u',
            ú: 'u',
            û: 'u',
            ü: 'u',
            Ý: 'Y',
            ý: 'y',
            ÿ: 'y',
            Æ: 'Ae',
            æ: 'ae',
            Þ: 'Th',
            þ: 'th',
            ß: 'ss',
            Ā: 'A',
            Ă: 'A',
            Ą: 'A',
            ā: 'a',
            ă: 'a',
            ą: 'a',
            Ć: 'C',
            Ĉ: 'C',
            Ċ: 'C',
            Č: 'C',
            ć: 'c',
            ĉ: 'c',
            ċ: 'c',
            č: 'c',
            Ď: 'D',
            Đ: 'D',
            ď: 'd',
            đ: 'd',
            Ē: 'E',
            Ĕ: 'E',
            Ė: 'E',
            Ę: 'E',
            Ě: 'E',
            ē: 'e',
            ĕ: 'e',
            ė: 'e',
            ę: 'e',
            ě: 'e',
            Ĝ: 'G',
            Ğ: 'G',
            Ġ: 'G',
            Ģ: 'G',
            ĝ: 'g',
            ğ: 'g',
            ġ: 'g',
            ģ: 'g',
            Ĥ: 'H',
            Ħ: 'H',
            ĥ: 'h',
            ħ: 'h',
            Ĩ: 'I',
            Ī: 'I',
            Ĭ: 'I',
            Į: 'I',
            İ: 'I',
            ĩ: 'i',
            ī: 'i',
            ĭ: 'i',
            į: 'i',
            ı: 'i',
            Ĵ: 'J',
            ĵ: 'j',
            Ķ: 'K',
            ķ: 'k',
            ĸ: 'k',
            Ĺ: 'L',
            Ļ: 'L',
            Ľ: 'L',
            Ŀ: 'L',
            Ł: 'L',
            ĺ: 'l',
            ļ: 'l',
            ľ: 'l',
            ŀ: 'l',
            ł: 'l',
            Ń: 'N',
            Ņ: 'N',
            Ň: 'N',
            Ŋ: 'N',
            ń: 'n',
            ņ: 'n',
            ň: 'n',
            ŋ: 'n',
            Ō: 'O',
            Ŏ: 'O',
            Ő: 'O',
            ō: 'o',
            ŏ: 'o',
            ő: 'o',
            Ŕ: 'R',
            Ŗ: 'R',
            Ř: 'R',
            ŕ: 'r',
            ŗ: 'r',
            ř: 'r',
            Ś: 'S',
            Ŝ: 'S',
            Ş: 'S',
            Š: 'S',
            ś: 's',
            ŝ: 's',
            ş: 's',
            š: 's',
            Ţ: 'T',
            Ť: 'T',
            Ŧ: 'T',
            ţ: 't',
            ť: 't',
            ŧ: 't',
            Ũ: 'U',
            Ū: 'U',
            Ŭ: 'U',
            Ů: 'U',
            Ű: 'U',
            Ų: 'U',
            ũ: 'u',
            ū: 'u',
            ŭ: 'u',
            ů: 'u',
            ű: 'u',
            ų: 'u',
            Ŵ: 'W',
            ŵ: 'w',
            Ŷ: 'Y',
            ŷ: 'y',
            Ÿ: 'Y',
            Ź: 'Z',
            Ż: 'Z',
            Ž: 'Z',
            ź: 'z',
            ż: 'z',
            ž: 'z',
            Ĳ: 'IJ',
            ĳ: 'ij',
            Œ: 'Oe',
            œ: 'oe',
            ŉ: "'n",
            ſ: 'ss',
          }),
          function (t) {
            return null == D ? void 0 : D[t];
          });
      var T = Object.prototype.toString,
        N = L.Symbol,
        G = N ? N.prototype : void 0,
        V = G ? G.toString : void 0;
      function Y(t) {
        if ('string' == typeof t) return t;
        if (
          (function (t) {
            return (
              'symbol' == typeof t ||
              ((function (t) {
                return !!t && 'object' == typeof t;
              })(t) &&
                T.call(t) == n)
            );
          })(t)
        )
          return V ? V.call(t) : '';
        var e = t + '';
        return '0' == e && 1 / t == -Infinity ? '-0' : e;
      }
      function H(t) {
        return null == t ? '' : Y(t);
      }
      var J,
        $ =
          ((J = function (t, e, u) {
            return t + (u ? '-' : '') + e.toLowerCase();
          }),
          function (t) {
            return (function (t, e, u, n) {
              var r = -1,
                f = t ? t.length : 0;
              for (n && f && (u = t[++r]); ++r < f; ) u = e(u, t[r], r, t);
              return u;
            })(
              (function (t, e, u) {
                return (
                  (t = H(t)),
                  void 0 === (e = u ? void 0 : e)
                    ? (function (t) {
                        return C.test(t);
                      })(t)
                      ? (function (t) {
                          return t.match(w) || [];
                        })(t)
                      : (function (t) {
                          return t.match(r) || [];
                        })(t)
                    : t.match(e) || []
                );
              })(
                (function (t) {
                  return (t = H(t)) && t.replace(f, R).replace(S, '');
                })(t).replace(P, '')
              ),
              J,
              ''
            );
          });
      t.exports = $;
    },
    95896: function (t, e, u) {
      'use strict';
      u.r(e),
        u.d(e, {
          default: function () {
            return O;
          },
        });
      var n = u(67294),
        r = u(4942),
        f = u(70977),
        o = u(35510),
        i = u(38797),
        a = u.n(i),
        c = u(1597),
        l = u(97274),
        s = u(99105),
        d = u(41775),
        b = u(90944);
      function x(t, e) {
        var u = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            u.push.apply(u, n);
        }
        return u;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var u = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? x(Object(u), !0).forEach(function (e) {
                (0, r.Z)(t, e, u[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(u))
            : x(Object(u)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(u, e)
                );
              });
        }
        return t;
      }
      var g = function (t) {
        var e = t.list,
          u = (0, s.Z)(),
          n = u.tagsPath,
          r = u.basePath;
        return (0, f.tZ)(
          l.Z,
          null,
          (0, f.tZ)(d.Z, { title: 'Tags' }),
          (0, f.tZ)(o.X6, { as: 'h1', variant: 'styles.h1' }, 'Tags'),
          (0, f.tZ)(
            o.xu,
            { mt: [4, 5] },
            e.map(function (t) {
              return (0, f.tZ)(
                o.kC,
                {
                  key: t.fieldValue,
                  mb: [1, 1, 2],
                  sx: { alignItems: 'center' },
                },
                (0, f.tZ)(
                  c.Link,
                  {
                    sx: function (t) {
                      var e;
                      return p(
                        p(
                          {},
                          null === (e = t.styles) || void 0 === e ? void 0 : e.a
                        ),
                        {},
                        { variant: 'links.listItem', mr: 2 }
                      );
                    },
                    to: (0, b.Z)('/' + r + '/' + n + '/' + a()(t.fieldValue)),
                  },
                  t.fieldValue,
                  ' ',
                  (0, f.tZ)(
                    'span',
                    { sx: { color: 'secondary' } },
                    '(',
                    t.totalCount,
                    ')'
                  )
                )
              );
            })
          )
        );
      };
      var O = function (t) {
        var e = Object.assign({}, t),
          u = e.data.allPost;
        return n.createElement(g, Object.assign({ list: u.group }, e));
      };
    },
  },
]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tags-query-tsx-34acfe96f998dea73e84.js.map
