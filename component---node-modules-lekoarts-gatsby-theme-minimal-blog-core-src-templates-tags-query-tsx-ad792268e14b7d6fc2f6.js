(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[255],{74289:function(e,t,u){"use strict";u.r(t),u.d(t,{default:function(){return y}});var n=u(20454),r=u(58168),o=u(96540),f=u(54705),a=u(50557),c=u(25941),i=u(15019),l=u.n(i),s=u(28007),d=u(52081),b=u(63601),x=u(46232),p=u(52174);function g(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,n)}return u}function O(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?g(Object(u),!0).forEach((function(t){(0,f.A)(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):g(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}var j=e=>{let{list:t}=e;const{tagsPath:u,basePath:n}=(0,b.A)();return(0,a.Y)(d.A,null,(0,a.Y)(x.A,{title:"Tags"}),(0,a.Y)(c.DZ,{as:"h1",variant:"styles.h1"},"Tags"),(0,a.Y)(c.az,{mt:[4,5]},t.map((e=>(0,a.Y)(c.so,{key:e.fieldValue,mb:[1,1,2],sx:{alignItems:"center"}},(0,a.Y)(s.Link,{sx:e=>{var t;return O(O({},null===(t=e.styles)||void 0===t?void 0:t.a),{},{variant:"links.listItem",mr:2})},to:(0,p.A)(`/${n}/${u}/${l()(e.fieldValue)}`)},e.fieldValue," ",(0,a.Y)("span",{sx:{color:"secondary"}},"(",e.totalCount,")")))))))};var y=function(e){let t=(0,r.A)({},((0,n.A)(e),e));const{data:{allPost:u}}=t;return o.createElement(j,Object.assign({list:u.group},t))}},15019:function(e,t,u){var n="[object Symbol]",r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,f="\\ud800-\\udfff",a="\\u2700-\\u27bf",c="a-z\\xdf-\\xf6\\xf8-\\xff",i="A-Z\\xc0-\\xd6\\xd8-\\xde",l="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="['’]",d="["+l+"]",b="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",x="\\d+",p="["+a+"]",g="["+c+"]",O="[^"+f+l+x+a+c+i+"]",j="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",v="["+i+"]",A="(?:"+g+"|"+O+")",m="(?:"+v+"|"+O+")",h="(?:['’](?:d|ll|m|re|s|t|ve))?",E="(?:['’](?:D|LL|M|RE|S|T|VE))?",I="(?:"+b+"|\\ud83c[\\udffb-\\udfff])"+"?",P="[\\ufe0e\\ufe0f]?",S=P+I+("(?:\\u200d(?:"+["[^"+f+"]",j,y].join("|")+")"+P+I+")*"),k="(?:"+[p,j,y].join("|")+")"+S,w=RegExp(s,"g"),z=RegExp(b,"g"),U=RegExp([v+"?"+g+"+"+h+"(?="+[d,v,"$"].join("|")+")",m+"+"+E+"(?="+[d,v+A,"$"].join("|")+")",v+"?"+A+"+"+h,v+"+"+E,x,k].join("|"),"g"),Y=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Z="object"==typeof u.g&&u.g&&u.g.Object===Object&&u.g,C="object"==typeof self&&self&&self.Object===Object&&self,D=Z||C||Function("return this")();var L,R=(L={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==L?void 0:L[e]});var T=Object.prototype.toString,N=D.Symbol,$=N?N.prototype:void 0,G=$?$.toString:void 0;function V(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&T.call(e)==n}(e))return G?G.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function H(e){return null==e?"":V(e)}var J,_=(J=function(e,t,u){return e+(u?"-":"")+t.toLowerCase()},function(e){return function(e,t,u,n){var r=-1,o=e?e.length:0;for(n&&o&&(u=e[++r]);++r<o;)u=t(u,e[r],r,e);return u}(function(e,t,u){return e=H(e),void 0===(t=u?void 0:t)?function(e){return Y.test(e)}(e)?function(e){return e.match(U)||[]}(e):function(e){return e.match(r)||[]}(e):e.match(t)||[]}(function(e){return(e=H(e))&&e.replace(o,R).replace(z,"")}(e).replace(w,"")),J,"")});e.exports=_}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tags-query-tsx-ad792268e14b7d6fc2f6.js.map