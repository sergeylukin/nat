!(function t(e, n, r) {
  function i(a, s) {
    if (!n[a]) {
      if (!e[a]) {
        var l = "function" == typeof require && require;
        if (!s && l) return l(a, !0);
        if (o) return o(a, !0);
        var u = new Error("Cannot find module '" + a + "'");
        throw ((u.code = "MODULE_NOT_FOUND"), u);
      }
      var c = (n[a] = { exports: {} });
      e[a][0].call(
        c.exports,
        function (t) {
          var n = e[a][1][t];
          return i(n ? n : t);
        },
        c,
        c.exports,
        t,
        e,
        n,
        r
      );
    }
    return n[a].exports;
  }
  for (
    var o = "function" == typeof require && require, a = 0;
    a < r.length;
    a++
  )
    i(r[a]);
  return i;
})(
  {
    1: [
      function (t, e, n) {
        t("modernizr"), t("skrollr"), t("pace"), t("picturefill");
        var r = t("./modules/scrolling"),
          i = t("./modules/city"),
          o = t("./modules/svgstars"),
          a = t("./modules/viewport"),
          s = t("./modules/device"),
          l = t("./modules/debounce"),
          u = t("./modules/soundtrack");
        if (
          (r.disable(),
          document.getElementById("YGLF-intro").classList.remove("is-hidden"),
          Modernizr.svg)
        )
          o.initPaper(),
            o.initFrame(),
            o.initStars(),
            o.initBackgroundGradient();
        else {
          var c = document.querySelector(".js-logo");
          (c.dataset[400] = "opacity: 1; display: inline;"),
            c.removeAttribute("data-1000"),
            c.removeAttribute("data-1100");
          var f = document.getElementById("City");
          f.removeAttribute("data-900"), f.removeAttribute("data-901");
          var d = document.getElementById("PlayButton");
          (d.dataset[400] = "opacity: 0;"),
            (d.dataset[401] = "opacity: 1; transform:translate(0px, 0em);"),
            (d.dataset[450] = "transform:translate(0px, 3em);"),
            d.removeAttribute("data-1200"),
            d.removeAttribute("data-1201"),
            d.removeAttribute("data-1350");
        }
        Pace.on("done", function () {
          var t = skrollr.init(),
            e = l(function () {
              o.updatePaper(),
                o.updateFrame(),
                o.positionFrameInCenter(),
                o.removeStars(),
                o.addStars(),
                o.updateBackgroundGradient(),
                t.refresh(),
                t.getScrollTop() > 129 &&
                  t.getScrollTop() < 1010 &&
                  t.setScrollTop(129),
                i.adjustToScreen();
            }, 250);
          window.addEventListener("resize", e),
            window.addEventListener("orientationchange", e),
            r.enable(),
            document
              .getElementById("ScrollingHelpfulMessage")
              .classList.remove("is-hidden"),
            i.adjustToScreen(),
            u.init();
        });
      },
      {
        "./modules/city": 5,
        "./modules/debounce": 6,
        "./modules/device": 7,
        "./modules/scrolling": 10,
        "./modules/soundtrack": 11,
        "./modules/svgstars": 12,
        "./modules/viewport": 13,
        modernizr: 14,
        pace: 14,
        picturefill: 3,
        skrollr: 4,
      },
    ],
    2: [
      function (t, e, n) {
        (function (n) {
          var r = t;
          (function (t, e, n, i, o) {
            !(function (e) {
              var n,
                r,
                o = "0.4.2",
                a = "hasOwnProperty",
                s = /[\.\/]/,
                l = /\s*,\s*/,
                u = "*",
                c = function (t, e) {
                  return t - e;
                },
                f = { n: {} },
                d = function () {
                  for (var t = 0, e = this.length; e > t; t++)
                    if ("undefined" != typeof this[t]) return this[t];
                },
                h = function () {
                  for (var t = this.length; --t; )
                    if ("undefined" != typeof this[t]) return this[t];
                },
                p = function (t, e) {
                  t = String(t);
                  var i,
                    o = r,
                    a = Array.prototype.slice.call(arguments, 2),
                    s = p.listeners(t),
                    l = 0,
                    u = [],
                    f = {},
                    g = [],
                    m = n;
                  (g.firstDefined = d), (g.lastDefined = h), (n = t), (r = 0);
                  for (var v = 0, y = s.length; y > v; v++)
                    "zIndex" in s[v] &&
                      (u.push(s[v].zIndex),
                      s[v].zIndex < 0 && (f[s[v].zIndex] = s[v]));
                  for (u.sort(c); u[l] < 0; )
                    if (((i = f[u[l++]]), g.push(i.apply(e, a)), r))
                      return (r = o), g;
                  for (v = 0; y > v; v++)
                    if (((i = s[v]), "zIndex" in i))
                      if (i.zIndex == u[l]) {
                        if ((g.push(i.apply(e, a)), r)) break;
                        do
                          if (
                            (l++, (i = f[u[l]]), i && g.push(i.apply(e, a)), r)
                          )
                            break;
                        while (i);
                      } else f[i.zIndex] = i;
                    else if ((g.push(i.apply(e, a)), r)) break;
                  return (r = o), (n = m), g;
                };
              (p._events = f),
                (p.listeners = function (t) {
                  var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    l,
                    c,
                    d = t.split(s),
                    h = f,
                    p = [h],
                    g = [];
                  for (i = 0, o = d.length; o > i; i++) {
                    for (c = [], a = 0, l = p.length; l > a; a++)
                      for (h = p[a].n, n = [h[d[i]], h[u]], r = 2; r--; )
                        (e = n[r]), e && (c.push(e), (g = g.concat(e.f || [])));
                    p = c;
                  }
                  return g;
                }),
                (p.on = function (t, e) {
                  if (((t = String(t)), "function" != typeof e))
                    return function () {};
                  for (var n = t.split(l), r = 0, i = n.length; i > r; r++)
                    !(function (t) {
                      for (
                        var n, r = t.split(s), i = f, o = 0, a = r.length;
                        a > o;
                        o++
                      )
                        (i = i.n),
                          (i =
                            (i.hasOwnProperty(r[o]) && i[r[o]]) ||
                            (i[r[o]] = { n: {} }));
                      for (i.f = i.f || [], o = 0, a = i.f.length; a > o; o++)
                        if (i.f[o] == e) {
                          n = !0;
                          break;
                        }
                      !n && i.f.push(e);
                    })(n[r]);
                  return function (t) {
                    +t == +t && (e.zIndex = +t);
                  };
                }),
                (p.f = function (t) {
                  var e = [].slice.call(arguments, 1);
                  return function () {
                    p.apply(
                      null,
                      [t, null].concat(e).concat([].slice.call(arguments, 0))
                    );
                  };
                }),
                (p.stop = function () {
                  r = 1;
                }),
                (p.nt = function (t) {
                  return t
                    ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(n)
                    : n;
                }),
                (p.nts = function () {
                  return n.split(s);
                }),
                (p.off = p.unbind =
                  function (t, e) {
                    if (!t) return void (p._events = f = { n: {} });
                    var n = t.split(l);
                    if (n.length > 1)
                      for (var r = 0, i = n.length; i > r; r++) p.off(n[r], e);
                    else {
                      n = t.split(s);
                      var o,
                        c,
                        d,
                        r,
                        i,
                        h,
                        g,
                        m = [f];
                      for (r = 0, i = n.length; i > r; r++)
                        for (h = 0; h < m.length; h += d.length - 2) {
                          if (((d = [h, 1]), (o = m[h].n), n[r] != u))
                            o[n[r]] && d.push(o[n[r]]);
                          else for (c in o) o[a](c) && d.push(o[c]);
                          m.splice.apply(m, d);
                        }
                      for (r = 0, i = m.length; i > r; r++)
                        for (o = m[r]; o.n; ) {
                          if (e) {
                            if (o.f) {
                              for (h = 0, g = o.f.length; g > h; h++)
                                if (o.f[h] == e) {
                                  o.f.splice(h, 1);
                                  break;
                                }
                              !o.f.length && delete o.f;
                            }
                            for (c in o.n)
                              if (o.n[a](c) && o.n[c].f) {
                                var v = o.n[c].f;
                                for (h = 0, g = v.length; g > h; h++)
                                  if (v[h] == e) {
                                    v.splice(h, 1);
                                    break;
                                  }
                                !v.length && delete o.n[c].f;
                              }
                          } else {
                            delete o.f;
                            for (c in o.n)
                              o.n[a](c) && o.n[c].f && delete o.n[c].f;
                          }
                          o = o.n;
                        }
                    }
                  }),
                (p.once = function (t, e) {
                  var n = function () {
                    return p.unbind(t, n), e.apply(this, arguments);
                  };
                  return p.on(t, n);
                }),
                (p.version = o),
                (p.toString = function () {
                  return "You are running Eve " + o;
                }),
                "undefined" != typeof t && t.exports
                  ? (t.exports = p)
                  : "function" == typeof i && i.amd
                  ? i("eve", [], function () {
                      return p;
                    })
                  : (e.eve = p);
            })(this),
              (function (n, o) {
                if ("function" == typeof i && i.amd)
                  i(["eve"], function (t) {
                    return o(n, t);
                  });
                else if ("undefined" != typeof e) {
                  var a = r("eve");
                  t.exports = o(n, a);
                } else o(n, n.eve);
              })(window || this, function (t, e) {
                var n = (function (e) {
                    var n = {},
                      r =
                        t.requestAnimationFrame ||
                        t.webkitRequestAnimationFrame ||
                        t.mozRequestAnimationFrame ||
                        t.oRequestAnimationFrame ||
                        t.msRequestAnimationFrame ||
                        function (t) {
                          setTimeout(t, 16);
                        },
                      i =
                        Array.isArray ||
                        function (t) {
                          return (
                            t instanceof Array ||
                            "[object Array]" ==
                              Object.prototype.toString.call(t)
                          );
                        },
                      o = 0,
                      a = "M" + (+new Date()).toString(36),
                      s = function () {
                        return a + (o++).toString(36);
                      },
                      l =
                        Date.now ||
                        function () {
                          return +new Date();
                        },
                      u = function (t) {
                        var e = this;
                        if (null == t) return e.s;
                        var n = e.s - t;
                        (e.b += e.dur * n), (e.B += e.dur * n), (e.s = t);
                      },
                      c = function (t) {
                        var e = this;
                        return null == t ? e.spd : void (e.spd = t);
                      },
                      f = function (t) {
                        var e = this;
                        return null == t
                          ? e.dur
                          : ((e.s = (e.s * t) / e.dur), void (e.dur = t));
                      },
                      d = function () {
                        var t = this;
                        delete n[t.id], t.update(), e("mina.stop." + t.id, t);
                      },
                      h = function () {
                        var t = this;
                        t.pdif ||
                          (delete n[t.id],
                          t.update(),
                          (t.pdif = t.get() - t.b));
                      },
                      p = function () {
                        var t = this;
                        t.pdif &&
                          ((t.b = t.get() - t.pdif),
                          delete t.pdif,
                          (n[t.id] = t));
                      },
                      g = function () {
                        var t,
                          e = this;
                        if (i(e.start)) {
                          t = [];
                          for (var n = 0, r = e.start.length; r > n; n++)
                            t[n] =
                              +e.start[n] +
                              (e.end[n] - e.start[n]) * e.easing(e.s);
                        } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                        e.set(t);
                      },
                      m = function () {
                        var t = 0;
                        for (var i in n)
                          if (n.hasOwnProperty(i)) {
                            var o = n[i],
                              a = o.get();
                            t++,
                              (o.s = (a - o.b) / (o.dur / o.spd)),
                              o.s >= 1 &&
                                (delete n[i],
                                (o.s = 1),
                                t--,
                                (function (t) {
                                  setTimeout(function () {
                                    e("mina.finish." + t.id, t);
                                  });
                                })(o)),
                              o.update();
                          }
                        t && r(m);
                      },
                      v = function (t, e, i, o, a, l, y) {
                        var x = {
                          id: s(),
                          start: t,
                          end: e,
                          b: i,
                          s: 0,
                          dur: o - i,
                          spd: 1,
                          get: a,
                          set: l,
                          easing: y || v.linear,
                          status: u,
                          speed: c,
                          duration: f,
                          stop: d,
                          pause: h,
                          resume: p,
                          update: g,
                        };
                        n[x.id] = x;
                        var b,
                          w = 0;
                        for (b in n)
                          if (n.hasOwnProperty(b) && (w++, 2 == w)) break;
                        return 1 == w && r(m), x;
                      };
                    return (
                      (v.time = l),
                      (v.getById = function (t) {
                        return n[t] || null;
                      }),
                      (v.linear = function (t) {
                        return t;
                      }),
                      (v.easeout = function (t) {
                        return Math.pow(t, 1.7);
                      }),
                      (v.easein = function (t) {
                        return Math.pow(t, 0.48);
                      }),
                      (v.easeinout = function (t) {
                        if (1 == t) return 1;
                        if (0 == t) return 0;
                        var e = 0.48 - t / 1.04,
                          n = Math.sqrt(0.1734 + e * e),
                          r = n - e,
                          i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
                          o = -n - e,
                          a = Math.pow(Math.abs(o), 1 / 3) * (0 > o ? -1 : 1),
                          s = i + a + 0.5;
                        return 3 * (1 - s) * s * s + s * s * s;
                      }),
                      (v.backin = function (t) {
                        if (1 == t) return 1;
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e);
                      }),
                      (v.backout = function (t) {
                        if (0 == t) return 0;
                        t -= 1;
                        var e = 1.70158;
                        return t * t * ((e + 1) * t + e) + 1;
                      }),
                      (v.elastic = function (t) {
                        return t == !!t
                          ? t
                          : Math.pow(2, -10 * t) *
                              Math.sin((2 * (t - 0.075) * Math.PI) / 0.3) +
                              1;
                      }),
                      (v.bounce = function (t) {
                        var e,
                          n = 7.5625,
                          r = 2.75;
                        return (
                          1 / r > t
                            ? (e = n * t * t)
                            : 2 / r > t
                            ? ((t -= 1.5 / r), (e = n * t * t + 0.75))
                            : 2.5 / r > t
                            ? ((t -= 2.25 / r), (e = n * t * t + 0.9375))
                            : ((t -= 2.625 / r), (e = n * t * t + 0.984375)),
                          e
                        );
                      }),
                      (t.mina = v),
                      v
                    );
                  })("undefined" == typeof e ? function () {} : e),
                  r = (function (t) {
                    function n(t, e) {
                      if (t) {
                        if (t.nodeType) return S(t);
                        if (i(t, "array") && n.set) return n.set.apply(n, t);
                        if (t instanceof y) return t;
                        if (null == e)
                          return (t = C.doc.querySelector(String(t))), S(t);
                      }
                      return (
                        (t = null == t ? "100%" : t),
                        (e = null == e ? "100%" : e),
                        new w(t, e)
                      );
                    }
                    function r(t, e) {
                      if (e) {
                        if (
                          ("#text" == t &&
                            (t = C.doc.createTextNode(
                              e.text || e["#text"] || ""
                            )),
                          "#comment" == t &&
                            (t = C.doc.createComment(
                              e.text || e["#text"] || ""
                            )),
                          "string" == typeof t && (t = r(t)),
                          "string" == typeof e)
                        )
                          return 1 == t.nodeType
                            ? "xlink:" == e.substring(0, 6)
                              ? t.getAttributeNS(U, e.substring(6))
                              : "xml:" == e.substring(0, 4)
                              ? t.getAttributeNS($, e.substring(4))
                              : t.getAttribute(e)
                            : "text" == e
                            ? t.nodeValue
                            : null;
                        if (1 == t.nodeType) {
                          for (var n in e)
                            if (e[T](n)) {
                              var i = A(e[n]);
                              i
                                ? "xlink:" == n.substring(0, 6)
                                  ? t.setAttributeNS(U, n.substring(6), i)
                                  : "xml:" == n.substring(0, 4)
                                  ? t.setAttributeNS($, n.substring(4), i)
                                  : t.setAttribute(n, i)
                                : t.removeAttribute(n);
                            }
                        } else "text" in e && (t.nodeValue = e.text);
                      } else t = C.doc.createElementNS($, t);
                      return t;
                    }
                    function i(t, e) {
                      return (
                        (e = A.prototype.toLowerCase.call(e)),
                        "finite" == e
                          ? isFinite(t)
                          : "array" == e &&
                            (t instanceof Array ||
                              (Array.isArray && Array.isArray(t)))
                          ? !0
                          : ("null" == e && null === t) ||
                            (e == typeof t && null !== t) ||
                            ("object" == e && t === Object(t)) ||
                            P.call(t).slice(8, -1).toLowerCase() == e
                      );
                    }
                    function o(t) {
                      if ("function" == typeof t || Object(t) !== t) return t;
                      var e = new t.constructor();
                      for (var n in t) t[T](n) && (e[n] = o(t[n]));
                      return e;
                    }
                    function a(t, e) {
                      for (var n = 0, r = t.length; r > n; n++)
                        if (t[n] === e) return t.push(t.splice(n, 1)[0]);
                    }
                    function s(t, e, n) {
                      function r() {
                        var i = Array.prototype.slice.call(arguments, 0),
                          o = i.join("␀"),
                          s = (r.cache = r.cache || {}),
                          l = (r.count = r.count || []);
                        return s[T](o)
                          ? (a(l, o), n ? n(s[o]) : s[o])
                          : (l.length >= 1e3 && delete s[l.shift()],
                            l.push(o),
                            (s[o] = t.apply(e, i)),
                            n ? n(s[o]) : s[o]);
                      }
                      return r;
                    }
                    function l(t, e, n, r, i, o) {
                      if (null == i) {
                        var a = t - n,
                          s = e - r;
                        return a || s
                          ? (180 + (180 * E.atan2(-s, -a)) / _ + 360) % 360
                          : 0;
                      }
                      return l(t, e, i, o) - l(n, r, i, o);
                    }
                    function u(t) {
                      return ((t % 360) * _) / 180;
                    }
                    function c(t) {
                      return ((180 * t) / _) % 360;
                    }
                    function f(t) {
                      var e = [];
                      return (
                        (t = t.replace(
                          /(?:^|\s)(\w+)\(([^)]+)\)/g,
                          function (t, n, r) {
                            return (
                              (r = r.split(/\s*,\s*|\s+/)),
                              "rotate" == n && 1 == r.length && r.push(0, 0),
                              "scale" == n &&
                                (r.length > 2
                                  ? (r = r.slice(0, 2))
                                  : 2 == r.length && r.push(0, 0),
                                1 == r.length && r.push(r[0], 0, 0)),
                              e.push(
                                "skewX" == n
                                  ? ["m", 1, 0, E.tan(u(r[0])), 1, 0, 0]
                                  : "skewY" == n
                                  ? ["m", 1, E.tan(u(r[0])), 0, 1, 0, 0]
                                  : [n.charAt(0)].concat(r)
                              ),
                              t
                            );
                          }
                        )),
                        e
                      );
                    }
                    function d(t, e) {
                      var r = tt(t),
                        i = new n.Matrix();
                      if (r)
                        for (var o = 0, a = r.length; a > o; o++) {
                          var s,
                            l,
                            u,
                            c,
                            f,
                            d = r[o],
                            h = d.length,
                            p = A(d[0]).toLowerCase(),
                            g = d[0] != p,
                            m = g ? i.invert() : 0;
                          "t" == p && 2 == h
                            ? i.translate(d[1], 0)
                            : "t" == p && 3 == h
                            ? g
                              ? ((s = m.x(0, 0)),
                                (l = m.y(0, 0)),
                                (u = m.x(d[1], d[2])),
                                (c = m.y(d[1], d[2])),
                                i.translate(u - s, c - l))
                              : i.translate(d[1], d[2])
                            : "r" == p
                            ? 2 == h
                              ? ((f = f || e),
                                i.rotate(
                                  d[1],
                                  f.x + f.width / 2,
                                  f.y + f.height / 2
                                ))
                              : 4 == h &&
                                (g
                                  ? ((u = m.x(d[2], d[3])),
                                    (c = m.y(d[2], d[3])),
                                    i.rotate(d[1], u, c))
                                  : i.rotate(d[1], d[2], d[3]))
                            : "s" == p
                            ? 2 == h || 3 == h
                              ? ((f = f || e),
                                i.scale(
                                  d[1],
                                  d[h - 1],
                                  f.x + f.width / 2,
                                  f.y + f.height / 2
                                ))
                              : 4 == h
                              ? g
                                ? ((u = m.x(d[2], d[3])),
                                  (c = m.y(d[2], d[3])),
                                  i.scale(d[1], d[1], u, c))
                                : i.scale(d[1], d[1], d[2], d[3])
                              : 5 == h &&
                                (g
                                  ? ((u = m.x(d[3], d[4])),
                                    (c = m.y(d[3], d[4])),
                                    i.scale(d[1], d[2], u, c))
                                  : i.scale(d[1], d[2], d[3], d[4]))
                            : "m" == p &&
                              7 == h &&
                              i.add(d[1], d[2], d[3], d[4], d[5], d[6]);
                        }
                      return i;
                    }
                    function h(t) {
                      var e =
                          (t.node.ownerSVGElement &&
                            S(t.node.ownerSVGElement)) ||
                          (t.node.parentNode && S(t.node.parentNode)) ||
                          n.select("svg") ||
                          n(0, 0),
                        r = e.select("defs"),
                        i = null == r ? !1 : r.node;
                      return i || (i = b("defs", e.node).node), i;
                    }
                    function p(t) {
                      return (
                        (t.node.ownerSVGElement && S(t.node.ownerSVGElement)) ||
                        n.select("svg")
                      );
                    }
                    function m(t, e, n) {
                      function i(t) {
                        if (null == t) return L;
                        if (t == +t) return t;
                        r(u, { width: t });
                        try {
                          return u.getBBox().width;
                        } catch (e) {
                          return 0;
                        }
                      }
                      function o(t) {
                        if (null == t) return L;
                        if (t == +t) return t;
                        r(u, { height: t });
                        try {
                          return u.getBBox().height;
                        } catch (e) {
                          return 0;
                        }
                      }
                      function a(r, i) {
                        null == e
                          ? (l[r] = i(t.attr(r) || 0))
                          : r == e && (l = i(null == n ? t.attr(r) || 0 : n));
                      }
                      var s = p(t).node,
                        l = {},
                        u = s.querySelector(".svg---mgr");
                      switch (
                        (u ||
                          ((u = r("rect")),
                          r(u, {
                            x: -9e9,
                            y: -9e9,
                            width: 10,
                            height: 10,
                            class: "svg---mgr",
                            fill: "none",
                          }),
                          s.appendChild(u)),
                        t.type)
                      ) {
                        case "rect":
                          a("rx", i), a("ry", o);
                        case "image":
                          a("width", i), a("height", o);
                        case "text":
                          a("x", i), a("y", o);
                          break;
                        case "circle":
                          a("cx", i), a("cy", o), a("r", i);
                          break;
                        case "ellipse":
                          a("cx", i), a("cy", o), a("rx", i), a("ry", o);
                          break;
                        case "line":
                          a("x1", i), a("x2", i), a("y1", o), a("y2", o);
                          break;
                        case "marker":
                          a("refX", i),
                            a("markerWidth", i),
                            a("refY", o),
                            a("markerHeight", o);
                          break;
                        case "radialGradient":
                          a("fx", i), a("fy", o);
                          break;
                        case "tspan":
                          a("dx", i), a("dy", o);
                          break;
                        default:
                          a(e, i);
                      }
                      return s.removeChild(u), l;
                    }
                    function v(t) {
                      i(t, "array") ||
                        (t = Array.prototype.slice.call(arguments, 0));
                      for (var e = 0, n = 0, r = this.node; this[e]; )
                        delete this[e++];
                      for (e = 0; e < t.length; e++)
                        "set" == t[e].type
                          ? t[e].forEach(function (t) {
                              r.appendChild(t.node);
                            })
                          : r.appendChild(t[e].node);
                      var o = r.childNodes;
                      for (e = 0; e < o.length; e++) this[n++] = S(o[e]);
                      return this;
                    }
                    function y(t) {
                      if (t.snap in X) return X[t.snap];
                      var e;
                      try {
                        e = t.ownerSVGElement;
                      } catch (n) {}
                      (this.node = t),
                        e && (this.paper = new w(e)),
                        (this.type = t.tagName || t.nodeName);
                      var r = (this.id = H(this));
                      if (
                        ((this.anims = {}),
                        (this._ = { transform: [] }),
                        (t.snap = r),
                        (X[r] = this),
                        "g" == this.type && (this.add = v),
                        this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 })
                      )
                        for (var i in w.prototype)
                          w.prototype[T](i) && (this[i] = w.prototype[i]);
                    }
                    function x(t) {
                      this.node = t;
                    }
                    function b(t, e) {
                      var n = r(t);
                      e.appendChild(n);
                      var i = S(n);
                      return i;
                    }
                    function w(t, e) {
                      var n,
                        i,
                        o,
                        a = w.prototype;
                      if (t && "svg" == t.tagName) {
                        if (t.snap in X) return X[t.snap];
                        var s = t.ownerDocument;
                        (n = new y(t)),
                          (i = t.getElementsByTagName("desc")[0]),
                          (o = t.getElementsByTagName("defs")[0]),
                          i ||
                            ((i = r("desc")),
                            i.appendChild(
                              s.createTextNode("Created with Snap")
                            ),
                            n.node.appendChild(i)),
                          o || ((o = r("defs")), n.node.appendChild(o)),
                          (n.defs = o);
                        for (var l in a) a[T](l) && (n[l] = a[l]);
                        n.paper = n.root = n;
                      } else
                        (n = b("svg", C.doc.body)),
                          r(n.node, {
                            height: e,
                            version: 1.1,
                            width: t,
                            xmlns: $,
                          });
                      return n;
                    }
                    function S(t) {
                      return t
                        ? t instanceof y || t instanceof x
                          ? t
                          : t.tagName && "svg" == t.tagName.toLowerCase()
                          ? new w(t)
                          : t.tagName &&
                            "object" == t.tagName.toLowerCase() &&
                            "image/svg+xml" == t.type
                          ? new w(
                              t.contentDocument.getElementsByTagName("svg")[0]
                            )
                          : new y(t)
                        : t;
                    }
                    function k(t, e) {
                      for (var n = 0, r = t.length; r > n; n++) {
                        var i = { type: t[n].type, attr: t[n].attr() },
                          o = t[n].children();
                        e.push(i), o.length && k(o, (i.childNodes = []));
                      }
                    }
                    (n.version = "0.4.0"),
                      (n.toString = function () {
                        return "Snap v" + this.version;
                      }),
                      (n._ = {});
                    var C = { win: t.window, doc: t.window.document };
                    n._.glob = C;
                    {
                      var T = "hasOwnProperty",
                        A = String,
                        M = parseFloat,
                        F = parseInt,
                        E = Math,
                        B = E.max,
                        z = E.min,
                        N = E.abs,
                        _ = (E.pow, E.PI),
                        L = (E.round, ""),
                        P = Object.prototype.toString,
                        j =
                          /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                        V = ((n._.separator = /[,\s]+/), /[\s]*,[\s]*/),
                        q = { hs: 1, rg: 1 },
                        I =
                          /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                        D =
                          /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                        O = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
                        G = 0,
                        R = "S" + (+new Date()).toString(36),
                        H = function (t) {
                          return (
                            (t && t.type ? t.type : L) + R + (G++).toString(36)
                          );
                        },
                        U = "http://www.w3.org/1999/xlink",
                        $ = "http://www.w3.org/2000/svg",
                        X = {};
                      n.url = function (t) {
                        return "url('#" + t + "')";
                      };
                    }
                    (n._.$ = r),
                      (n._.id = H),
                      (n.format = (function () {
                        var t = /\{([^\}]+)\}/g,
                          e =
                            /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                          n = function (t, n, r) {
                            var i = r;
                            return (
                              n.replace(e, function (t, e, n, r, o) {
                                (e = e || r),
                                  i &&
                                    (e in i && (i = i[e]),
                                    "function" == typeof i && o && (i = i()));
                              }),
                              (i = (null == i || i == r ? t : i) + "")
                            );
                          };
                        return function (e, r) {
                          return A(e).replace(t, function (t, e) {
                            return n(t, e, r);
                          });
                        };
                      })()),
                      (n._.clone = o),
                      (n._.cacher = s),
                      (n.rad = u),
                      (n.deg = c),
                      (n.sin = function (t) {
                        return E.sin(n.rad(t));
                      }),
                      (n.tan = function (t) {
                        return E.tan(n.rad(t));
                      }),
                      (n.cos = function (t) {
                        return E.cos(n.rad(t));
                      }),
                      (n.asin = function (t) {
                        return n.deg(E.asin(t));
                      }),
                      (n.acos = function (t) {
                        return n.deg(E.acos(t));
                      }),
                      (n.atan = function (t) {
                        return n.deg(E.atan(t));
                      }),
                      (n.atan2 = function (t) {
                        return n.deg(E.atan2(t));
                      }),
                      (n.angle = l),
                      (n.len = function (t, e, r, i) {
                        return Math.sqrt(n.len2(t, e, r, i));
                      }),
                      (n.len2 = function (t, e, n, r) {
                        return (t - n) * (t - n) + (e - r) * (e - r);
                      }),
                      (n.closestPoint = function (t, e, n) {
                        function r(t) {
                          var r = t.x - e,
                            i = t.y - n;
                          return r * r + i * i;
                        }
                        for (
                          var i,
                            o,
                            a,
                            s,
                            l = t.node,
                            u = l.getTotalLength(),
                            c = (u / l.pathSegList.numberOfItems) * 0.125,
                            f = 1 / 0,
                            d = 0;
                          u >= d;
                          d += c
                        )
                          (s = r((a = l.getPointAtLength(d)))) < f &&
                            ((i = a), (o = d), (f = s));
                        for (c *= 0.5; c > 0.5; ) {
                          var h, p, g, m, v, y;
                          (g = o - c) >= 0 &&
                          (v = r((h = l.getPointAtLength(g)))) < f
                            ? ((i = h), (o = g), (f = v))
                            : (m = o + c) <= u &&
                              (y = r((p = l.getPointAtLength(m)))) < f
                            ? ((i = p), (o = m), (f = y))
                            : (c *= 0.5);
                        }
                        return (i = {
                          x: i.x,
                          y: i.y,
                          length: o,
                          distance: Math.sqrt(f),
                        });
                      }),
                      (n.is = i),
                      (n.snapTo = function (t, e, n) {
                        if (((n = i(n, "finite") ? n : 10), i(t, "array"))) {
                          for (var r = t.length; r--; )
                            if (N(t[r] - e) <= n) return t[r];
                        } else {
                          t = +t;
                          var o = e % t;
                          if (n > o) return e - o;
                          if (o > t - n) return e - o + t;
                        }
                        return e;
                      }),
                      (n.getRGB = s(function (t) {
                        if (!t || (t = A(t)).indexOf("-") + 1)
                          return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: Q,
                          };
                        if ("none" == t)
                          return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            toString: Q,
                          };
                        if (
                          (!(
                            q[T](t.toLowerCase().substring(0, 2)) ||
                            "#" == t.charAt()
                          ) && (t = W(t)),
                          !t)
                        )
                          return {
                            r: -1,
                            g: -1,
                            b: -1,
                            hex: "none",
                            error: 1,
                            toString: Q,
                          };
                        var e,
                          r,
                          o,
                          a,
                          s,
                          l,
                          u = t.match(j);
                        return u
                          ? (u[2] &&
                              ((o = F(u[2].substring(5), 16)),
                              (r = F(u[2].substring(3, 5), 16)),
                              (e = F(u[2].substring(1, 3), 16))),
                            u[3] &&
                              ((o = F((s = u[3].charAt(3)) + s, 16)),
                              (r = F((s = u[3].charAt(2)) + s, 16)),
                              (e = F((s = u[3].charAt(1)) + s, 16))),
                            u[4] &&
                              ((l = u[4].split(V)),
                              (e = M(l[0])),
                              "%" == l[0].slice(-1) && (e *= 2.55),
                              (r = M(l[1])),
                              "%" == l[1].slice(-1) && (r *= 2.55),
                              (o = M(l[2])),
                              "%" == l[2].slice(-1) && (o *= 2.55),
                              "rgba" == u[1].toLowerCase().slice(0, 4) &&
                                (a = M(l[3])),
                              l[3] && "%" == l[3].slice(-1) && (a /= 100)),
                            u[5]
                              ? ((l = u[5].split(V)),
                                (e = M(l[0])),
                                "%" == l[0].slice(-1) && (e /= 100),
                                (r = M(l[1])),
                                "%" == l[1].slice(-1) && (r /= 100),
                                (o = M(l[2])),
                                "%" == l[2].slice(-1) && (o /= 100),
                                ("deg" == l[0].slice(-3) ||
                                  "°" == l[0].slice(-1)) &&
                                  (e /= 360),
                                "hsba" == u[1].toLowerCase().slice(0, 4) &&
                                  (a = M(l[3])),
                                l[3] && "%" == l[3].slice(-1) && (a /= 100),
                                n.hsb2rgb(e, r, o, a))
                              : u[6]
                              ? ((l = u[6].split(V)),
                                (e = M(l[0])),
                                "%" == l[0].slice(-1) && (e /= 100),
                                (r = M(l[1])),
                                "%" == l[1].slice(-1) && (r /= 100),
                                (o = M(l[2])),
                                "%" == l[2].slice(-1) && (o /= 100),
                                ("deg" == l[0].slice(-3) ||
                                  "°" == l[0].slice(-1)) &&
                                  (e /= 360),
                                "hsla" == u[1].toLowerCase().slice(0, 4) &&
                                  (a = M(l[3])),
                                l[3] && "%" == l[3].slice(-1) && (a /= 100),
                                n.hsl2rgb(e, r, o, a))
                              : ((e = z(E.round(e), 255)),
                                (r = z(E.round(r), 255)),
                                (o = z(E.round(o), 255)),
                                (a = z(B(a, 0), 1)),
                                (u = { r: e, g: r, b: o, toString: Q }),
                                (u.hex =
                                  "#" +
                                  (16777216 | o | (r << 8) | (e << 16))
                                    .toString(16)
                                    .slice(1)),
                                (u.opacity = i(a, "finite") ? a : 1),
                                u))
                          : {
                              r: -1,
                              g: -1,
                              b: -1,
                              hex: "none",
                              error: 1,
                              toString: Q,
                            };
                      }, n)),
                      (n.hsb = s(function (t, e, r) {
                        return n.hsb2rgb(t, e, r).hex;
                      })),
                      (n.hsl = s(function (t, e, r) {
                        return n.hsl2rgb(t, e, r).hex;
                      })),
                      (n.rgb = s(function (t, e, n, r) {
                        if (i(r, "finite")) {
                          var o = E.round;
                          return (
                            "rgba(" + [o(t), o(e), o(n), +r.toFixed(2)] + ")"
                          );
                        }
                        return (
                          "#" +
                          (16777216 | n | (e << 8) | (t << 16))
                            .toString(16)
                            .slice(1)
                        );
                      }));
                    var W = function (t) {
                        var e =
                            C.doc.getElementsByTagName("head")[0] ||
                            C.doc.getElementsByTagName("svg")[0],
                          n = "rgb(255, 0, 0)";
                        return (W = s(function (t) {
                          if ("red" == t.toLowerCase()) return n;
                          (e.style.color = n), (e.style.color = t);
                          var r = C.doc.defaultView
                            .getComputedStyle(e, L)
                            .getPropertyValue("color");
                          return r == n ? null : r;
                        }))(t);
                      },
                      Y = function () {
                        return "hsb(" + [this.h, this.s, this.b] + ")";
                      },
                      Z = function () {
                        return "hsl(" + [this.h, this.s, this.l] + ")";
                      },
                      Q = function () {
                        return 1 == this.opacity || null == this.opacity
                          ? this.hex
                          : "rgba(" +
                              [this.r, this.g, this.b, this.opacity] +
                              ")";
                      },
                      K = function (t, e, r) {
                        if (
                          (null == e &&
                            i(t, "object") &&
                            "r" in t &&
                            "g" in t &&
                            "b" in t &&
                            ((r = t.b), (e = t.g), (t = t.r)),
                          null == e && i(t, string))
                        ) {
                          var o = n.getRGB(t);
                          (t = o.r), (e = o.g), (r = o.b);
                        }
                        return (
                          (t > 1 || e > 1 || r > 1) &&
                            ((t /= 255), (e /= 255), (r /= 255)),
                          [t, e, r]
                        );
                      },
                      J = function (t, e, r, o) {
                        (t = E.round(255 * t)),
                          (e = E.round(255 * e)),
                          (r = E.round(255 * r));
                        var a = {
                          r: t,
                          g: e,
                          b: r,
                          opacity: i(o, "finite") ? o : 1,
                          hex: n.rgb(t, e, r),
                          toString: Q,
                        };
                        return i(o, "finite") && (a.opacity = o), a;
                      };
                    (n.color = function (t) {
                      var e;
                      return (
                        i(t, "object") && "h" in t && "s" in t && "b" in t
                          ? ((e = n.hsb2rgb(t)),
                            (t.r = e.r),
                            (t.g = e.g),
                            (t.b = e.b),
                            (t.opacity = 1),
                            (t.hex = e.hex))
                          : i(t, "object") && "h" in t && "s" in t && "l" in t
                          ? ((e = n.hsl2rgb(t)),
                            (t.r = e.r),
                            (t.g = e.g),
                            (t.b = e.b),
                            (t.opacity = 1),
                            (t.hex = e.hex))
                          : (i(t, "string") && (t = n.getRGB(t)),
                            i(t, "object") &&
                            "r" in t &&
                            "g" in t &&
                            "b" in t &&
                            !("error" in t)
                              ? ((e = n.rgb2hsl(t)),
                                (t.h = e.h),
                                (t.s = e.s),
                                (t.l = e.l),
                                (e = n.rgb2hsb(t)),
                                (t.v = e.b))
                              : ((t = { hex: "none" }),
                                (t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1),
                                (t.error = 1))),
                        (t.toString = Q),
                        t
                      );
                    }),
                      (n.hsb2rgb = function (t, e, n, r) {
                        i(t, "object") &&
                          "h" in t &&
                          "s" in t &&
                          "b" in t &&
                          ((n = t.b), (e = t.s), (r = t.o), (t = t.h)),
                          (t *= 360);
                        var o, a, s, l, u;
                        return (
                          (t = (t % 360) / 60),
                          (u = n * e),
                          (l = u * (1 - N((t % 2) - 1))),
                          (o = a = s = n - u),
                          (t = ~~t),
                          (o += [u, l, 0, 0, l, u][t]),
                          (a += [l, u, u, l, 0, 0][t]),
                          (s += [0, 0, l, u, u, l][t]),
                          J(o, a, s, r)
                        );
                      }),
                      (n.hsl2rgb = function (t, e, n, r) {
                        i(t, "object") &&
                          "h" in t &&
                          "s" in t &&
                          "l" in t &&
                          ((n = t.l), (e = t.s), (t = t.h)),
                          (t > 1 || e > 1 || n > 1) &&
                            ((t /= 360), (e /= 100), (n /= 100)),
                          (t *= 360);
                        var o, a, s, l, u;
                        return (
                          (t = (t % 360) / 60),
                          (u = 2 * e * (0.5 > n ? n : 1 - n)),
                          (l = u * (1 - N((t % 2) - 1))),
                          (o = a = s = n - u / 2),
                          (t = ~~t),
                          (o += [u, l, 0, 0, l, u][t]),
                          (a += [l, u, u, l, 0, 0][t]),
                          (s += [0, 0, l, u, u, l][t]),
                          J(o, a, s, r)
                        );
                      }),
                      (n.rgb2hsb = function (t, e, n) {
                        (n = K(t, e, n)), (t = n[0]), (e = n[1]), (n = n[2]);
                        var r, i, o, a;
                        return (
                          (o = B(t, e, n)),
                          (a = o - z(t, e, n)),
                          (r =
                            0 == a
                              ? null
                              : o == t
                              ? (e - n) / a
                              : o == e
                              ? (n - t) / a + 2
                              : (t - e) / a + 4),
                          (r = (((r + 360) % 6) * 60) / 360),
                          (i = 0 == a ? 0 : a / o),
                          { h: r, s: i, b: o, toString: Y }
                        );
                      }),
                      (n.rgb2hsl = function (t, e, n) {
                        (n = K(t, e, n)), (t = n[0]), (e = n[1]), (n = n[2]);
                        var r, i, o, a, s, l;
                        return (
                          (a = B(t, e, n)),
                          (s = z(t, e, n)),
                          (l = a - s),
                          (r =
                            0 == l
                              ? null
                              : a == t
                              ? (e - n) / l
                              : a == e
                              ? (n - t) / l + 2
                              : (t - e) / l + 4),
                          (r = (((r + 360) % 6) * 60) / 360),
                          (o = (a + s) / 2),
                          (i =
                            0 == l
                              ? 0
                              : 0.5 > o
                              ? l / (2 * o)
                              : l / (2 - 2 * o)),
                          { h: r, s: i, l: o, toString: Z }
                        );
                      }),
                      (n.parsePathString = function (t) {
                        if (!t) return null;
                        var e = n.path(t);
                        if (e.arr) return n.path.clone(e.arr);
                        var r = {
                            a: 7,
                            c: 6,
                            o: 2,
                            h: 1,
                            l: 2,
                            m: 2,
                            r: 4,
                            q: 4,
                            s: 4,
                            t: 2,
                            v: 1,
                            u: 3,
                            z: 0,
                          },
                          o = [];
                        return (
                          i(t, "array") &&
                            i(t[0], "array") &&
                            (o = n.path.clone(t)),
                          o.length ||
                            A(t).replace(I, function (t, e, n) {
                              var i = [],
                                a = e.toLowerCase();
                              if (
                                (n.replace(O, function (t, e) {
                                  e && i.push(+e);
                                }),
                                "m" == a &&
                                  i.length > 2 &&
                                  (o.push([e].concat(i.splice(0, 2))),
                                  (a = "l"),
                                  (e = "m" == e ? "l" : "L")),
                                "o" == a && 1 == i.length && o.push([e, i[0]]),
                                "r" == a)
                              )
                                o.push([e].concat(i));
                              else
                                for (
                                  ;
                                  i.length >= r[a] &&
                                  (o.push([e].concat(i.splice(0, r[a]))), r[a]);

                                );
                            }),
                          (o.toString = n.path.toString),
                          (e.arr = n.path.clone(o)),
                          o
                        );
                      });
                    var tt = (n.parseTransformString = function (t) {
                      if (!t) return null;
                      var e = [];
                      return (
                        i(t, "array") &&
                          i(t[0], "array") &&
                          (e = n.path.clone(t)),
                        e.length ||
                          A(t).replace(D, function (t, n, r) {
                            {
                              var i = [];
                              n.toLowerCase();
                            }
                            r.replace(O, function (t, e) {
                              e && i.push(+e);
                            }),
                              e.push([n].concat(i));
                          }),
                        (e.toString = n.path.toString),
                        e
                      );
                    });
                    (n._.svgTransform2string = f),
                      (n._.rgTransform = /^[a-z][\s]*-?\.?\d/i),
                      (n._.transform2matrix = d),
                      (n._unit2px = m);
                    C.doc.contains || C.doc.compareDocumentPosition
                      ? function (t, e) {
                          var n = 9 == t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode;
                          return (
                            t == r ||
                            !(
                              !r ||
                              1 != r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (t, e) {
                          if (e)
                            for (; e; )
                              if (((e = e.parentNode), e == t)) return !0;
                          return !1;
                        };
                    (n._.getSomeDefs = h),
                      (n._.getSomeSVG = p),
                      (n.select = function (t) {
                        return (
                          (t = A(t).replace(/([^\\]):/g, "$1\\:")),
                          S(C.doc.querySelector(t))
                        );
                      }),
                      (n.selectAll = function (t) {
                        for (
                          var e = C.doc.querySelectorAll(t),
                            r = (n.set || Array)(),
                            i = 0;
                          i < e.length;
                          i++
                        )
                          r.push(S(e[i]));
                        return r;
                      }),
                      setInterval(function () {
                        for (var t in X)
                          if (X[T](t)) {
                            var e = X[t],
                              n = e.node;
                            (("svg" != e.type && !n.ownerSVGElement) ||
                              ("svg" == e.type &&
                                (!n.parentNode ||
                                  ("ownerSVGElement" in n.parentNode &&
                                    !n.ownerSVGElement)))) &&
                              delete X[t];
                          }
                      }, 1e4),
                      (y.prototype.attr = function (t, n) {
                        var r = this,
                          o = r.node;
                        if (!t) {
                          if (1 != o.nodeType) return { text: o.nodeValue };
                          for (
                            var a = o.attributes, s = {}, l = 0, u = a.length;
                            u > l;
                            l++
                          )
                            s[a[l].nodeName] = a[l].nodeValue;
                          return s;
                        }
                        if (i(t, "string")) {
                          if (!(arguments.length > 1))
                            return e(
                              "snap.util.getattr." + t,
                              r
                            ).firstDefined();
                          var c = {};
                          (c[t] = n), (t = c);
                        }
                        for (var f in t)
                          t[T](f) && e("snap.util.attr." + f, r, t[f]);
                        return r;
                      }),
                      (n.parse = function (t) {
                        var e = C.doc.createDocumentFragment(),
                          n = !0,
                          r = C.doc.createElement("div");
                        if (
                          ((t = A(t)),
                          t.match(/^\s*<\s*svg(?:\s|>)/) ||
                            ((t = "<svg>" + t + "</svg>"), (n = !1)),
                          (r.innerHTML = t),
                          (t = r.getElementsByTagName("svg")[0]))
                        )
                          if (n) e = t;
                          else
                            for (; t.firstChild; ) e.appendChild(t.firstChild);
                        return new x(e);
                      }),
                      (n.fragment = function () {
                        for (
                          var t = Array.prototype.slice.call(arguments, 0),
                            e = C.doc.createDocumentFragment(),
                            r = 0,
                            i = t.length;
                          i > r;
                          r++
                        ) {
                          var o = t[r];
                          o.node && o.node.nodeType && e.appendChild(o.node),
                            o.nodeType && e.appendChild(o),
                            "string" == typeof o &&
                              e.appendChild(n.parse(o).node);
                        }
                        return new x(e);
                      }),
                      (n._.make = b),
                      (n._.wrap = S),
                      (w.prototype.el = function (t, e) {
                        var n = b(t, this.node);
                        return e && n.attr(e), n;
                      }),
                      (y.prototype.children = function () {
                        for (
                          var t = [],
                            e = this.node.childNodes,
                            r = 0,
                            i = e.length;
                          i > r;
                          r++
                        )
                          t[r] = n(e[r]);
                        return t;
                      }),
                      (y.prototype.toJSON = function () {
                        var t = [];
                        return k([this], t), t[0];
                      }),
                      e.on("snap.util.getattr", function () {
                        var t = e.nt();
                        t = t.substring(t.lastIndexOf(".") + 1);
                        var n = t.replace(/[A-Z]/g, function (t) {
                          return "-" + t.toLowerCase();
                        });
                        return et[T](n)
                          ? this.node.ownerDocument.defaultView
                              .getComputedStyle(this.node, null)
                              .getPropertyValue(n)
                          : r(this.node, t);
                      });
                    var et = {
                      "alignment-baseline": 0,
                      "baseline-shift": 0,
                      clip: 0,
                      "clip-path": 0,
                      "clip-rule": 0,
                      color: 0,
                      "color-interpolation": 0,
                      "color-interpolation-filters": 0,
                      "color-profile": 0,
                      "color-rendering": 0,
                      cursor: 0,
                      direction: 0,
                      display: 0,
                      "dominant-baseline": 0,
                      "enable-background": 0,
                      fill: 0,
                      "fill-opacity": 0,
                      "fill-rule": 0,
                      filter: 0,
                      "flood-color": 0,
                      "flood-opacity": 0,
                      font: 0,
                      "font-family": 0,
                      "font-size": 0,
                      "font-size-adjust": 0,
                      "font-stretch": 0,
                      "font-style": 0,
                      "font-variant": 0,
                      "font-weight": 0,
                      "glyph-orientation-horizontal": 0,
                      "glyph-orientation-vertical": 0,
                      "image-rendering": 0,
                      kerning: 0,
                      "letter-spacing": 0,
                      "lighting-color": 0,
                      marker: 0,
                      "marker-end": 0,
                      "marker-mid": 0,
                      "marker-start": 0,
                      mask: 0,
                      opacity: 0,
                      overflow: 0,
                      "pointer-events": 0,
                      "shape-rendering": 0,
                      "stop-color": 0,
                      "stop-opacity": 0,
                      stroke: 0,
                      "stroke-dasharray": 0,
                      "stroke-dashoffset": 0,
                      "stroke-linecap": 0,
                      "stroke-linejoin": 0,
                      "stroke-miterlimit": 0,
                      "stroke-opacity": 0,
                      "stroke-width": 0,
                      "text-anchor": 0,
                      "text-decoration": 0,
                      "text-rendering": 0,
                      "unicode-bidi": 0,
                      visibility: 0,
                      "word-spacing": 0,
                      "writing-mode": 0,
                    };
                    e.on("snap.util.attr", function (t) {
                      var n = e.nt(),
                        i = {};
                      (n = n.substring(n.lastIndexOf(".") + 1)), (i[n] = t);
                      var o = n.replace(/-(\w)/gi, function (t, e) {
                          return e.toUpperCase();
                        }),
                        a = n.replace(/[A-Z]/g, function (t) {
                          return "-" + t.toLowerCase();
                        });
                      et[T](a)
                        ? (this.node.style[o] = null == t ? L : t)
                        : r(this.node, i);
                    }),
                      (function (t) {})(w.prototype),
                      (n.ajax = function (t, n, r, o) {
                        var a = new XMLHttpRequest(),
                          s = H();
                        if (a) {
                          if (i(n, "function")) (o = r), (r = n), (n = null);
                          else if (i(n, "object")) {
                            var l = [];
                            for (var u in n)
                              n.hasOwnProperty(u) &&
                                l.push(
                                  encodeURIComponent(u) +
                                    "=" +
                                    encodeURIComponent(n[u])
                                );
                            n = l.join("&");
                          }
                          return (
                            a.open(n ? "POST" : "GET", t, !0),
                            n &&
                              (a.setRequestHeader(
                                "X-Requested-With",
                                "XMLHttpRequest"
                              ),
                              a.setRequestHeader(
                                "Content-type",
                                "application/x-www-form-urlencoded"
                              )),
                            r &&
                              (e.once("snap.ajax." + s + ".0", r),
                              e.once("snap.ajax." + s + ".200", r),
                              e.once("snap.ajax." + s + ".304", r)),
                            (a.onreadystatechange = function () {
                              4 == a.readyState &&
                                e("snap.ajax." + s + "." + a.status, o, a);
                            }),
                            4 == a.readyState ? a : (a.send(n), a)
                          );
                        }
                      }),
                      (n.load = function (t, e, r) {
                        n.ajax(t, function (t) {
                          var i = n.parse(t.responseText);
                          r ? e.call(r, i) : e(i);
                        });
                      });
                    var nt = function (t) {
                      var e = t.getBoundingClientRect(),
                        n = t.ownerDocument,
                        r = n.body,
                        i = n.documentElement,
                        o = i.clientTop || r.clientTop || 0,
                        a = i.clientLeft || r.clientLeft || 0,
                        s =
                          e.top +
                          (g.win.pageYOffset || i.scrollTop || r.scrollTop) -
                          o,
                        l =
                          e.left +
                          (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) -
                          a;
                      return { y: s, x: l };
                    };
                    return (
                      (n.getElementByPoint = function (t, e) {
                        var n = this,
                          r = (n.canvas, C.doc.elementFromPoint(t, e));
                        if (C.win.opera && "svg" == r.tagName) {
                          var i = nt(r),
                            o = r.createSVGRect();
                          (o.x = t - i.x),
                            (o.y = e - i.y),
                            (o.width = o.height = 1);
                          var a = r.getIntersectionList(o, null);
                          a.length && (r = a[a.length - 1]);
                        }
                        return r ? S(r) : null;
                      }),
                      (n.plugin = function (t) {
                        t(n, y, w, C, x);
                      }),
                      (C.win.Snap = n),
                      n
                    );
                  })(t || this);
                return (
                  r.plugin(function (r, i, o, a, s) {
                    function l(t, e) {
                      if (null == e) {
                        var n = !0;
                        if (
                          ((e = t.node.getAttribute(
                            "linearGradient" == t.type ||
                              "radialGradient" == t.type
                              ? "gradientTransform"
                              : "pattern" == t.type
                              ? "patternTransform"
                              : "transform"
                          )),
                          !e)
                        )
                          return new r.Matrix();
                        e = r._.svgTransform2string(e);
                      } else (e = r._.rgTransform.test(e) ? p(e).replace(/\.{3}|\u2026/g, t._.transform || "") : r._.svgTransform2string(e)), h(e, "array") && (e = r.path ? r.path.toString.call(e) : p(e)), (t._.transform = e);
                      var i = r._.transform2matrix(e, t.getBBox(1));
                      return n ? i : void (t.matrix = i);
                    }
                    function u(t) {
                      function e(t, e) {
                        var n = m(t.node, e);
                        (n = n && n.match(o)),
                          (n = n && n[2]),
                          n &&
                            "#" == n.charAt() &&
                            ((n = n.substring(1)),
                            n &&
                              (s[n] = (s[n] || []).concat(function (n) {
                                var r = {};
                                (r[e] = URL(n)), m(t.node, r);
                              })));
                      }
                      function n(t) {
                        var e = m(t.node, "xlink:href");
                        e &&
                          "#" == e.charAt() &&
                          ((e = e.substring(1)),
                          e &&
                            (s[e] = (s[e] || []).concat(function (e) {
                              t.attr("xlink:href", "#" + e);
                            })));
                      }
                      for (
                        var r,
                          i = t.selectAll("*"),
                          o = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                          a = [],
                          s = {},
                          l = 0,
                          u = i.length;
                        u > l;
                        l++
                      ) {
                        (r = i[l]),
                          e(r, "fill"),
                          e(r, "stroke"),
                          e(r, "filter"),
                          e(r, "mask"),
                          e(r, "clip-path"),
                          n(r);
                        var c = m(r.node, "id");
                        c &&
                          (m(r.node, { id: r.id }),
                          a.push({ old: c, id: r.id }));
                      }
                      for (l = 0, u = a.length; u > l; l++) {
                        var f = s[a[l].old];
                        if (f)
                          for (var d = 0, h = f.length; h > d; d++)
                            f[d](a[l].id);
                      }
                    }
                    function c(t, e, n) {
                      return function (r) {
                        var i = r.slice(t, e);
                        return 1 == i.length && (i = i[0]), n ? n(i) : i;
                      };
                    }
                    function f(t) {
                      return function () {
                        var e = t ? "<" + this.type : "",
                          n = this.node.attributes,
                          r = this.node.childNodes;
                        if (t)
                          for (var i = 0, o = n.length; o > i; i++)
                            e +=
                              " " +
                              n[i].name +
                              '="' +
                              n[i].value.replace(/"/g, '\\"') +
                              '"';
                        if (r.length) {
                          for (t && (e += ">"), i = 0, o = r.length; o > i; i++)
                            3 == r[i].nodeType
                              ? (e += r[i].nodeValue)
                              : 1 == r[i].nodeType && (e += b(r[i]).toString());
                          t && (e += "</" + this.type + ">");
                        } else t && (e += "/>");
                        return e;
                      };
                    }
                    var d = i.prototype,
                      h = r.is,
                      p = String,
                      g = r._unit2px,
                      m = r._.$,
                      v = r._.make,
                      y = r._.getSomeDefs,
                      x = "hasOwnProperty",
                      b = r._.wrap;
                    d.getBBox = function (t) {
                      if (!r.Matrix || !r.path) return this.node.getBBox();
                      var e = this,
                        n = new r.Matrix();
                      if (e.removed) return r._.box();
                      for (; "use" == e.type; )
                        if (
                          (t ||
                            (n = n.add(
                              e
                                .transform()
                                .localMatrix.translate(
                                  e.attr("x") || 0,
                                  e.attr("y") || 0
                                )
                            )),
                          e.original)
                        )
                          e = e.original;
                        else {
                          var i = e.attr("xlink:href");
                          e = e.original = e.node.ownerDocument.getElementById(
                            i.substring(i.indexOf("#") + 1)
                          );
                        }
                      var o = e._,
                        a = r.path.get[e.type] || r.path.get.deflt;
                      try {
                        return t
                          ? ((o.bboxwt = a
                              ? r.path.getBBox((e.realPath = a(e)))
                              : r._.box(e.node.getBBox())),
                            r._.box(o.bboxwt))
                          : ((e.realPath = a(e)),
                            (e.matrix = e.transform().localMatrix),
                            (o.bbox = r.path.getBBox(
                              r.path.map(e.realPath, n.add(e.matrix))
                            )),
                            r._.box(o.bbox));
                      } catch (s) {
                        return r._.box();
                      }
                    };
                    var w = function () {
                      return this.string;
                    };
                    (d.transform = function (t) {
                      var e = this._;
                      if (null == t) {
                        for (
                          var n,
                            i = this,
                            o = new r.Matrix(this.node.getCTM()),
                            a = l(this),
                            s = [a],
                            u = new r.Matrix(),
                            c = a.toTransformString(),
                            f = p(a) == p(this.matrix) ? p(e.transform) : c;
                          "svg" != i.type && (i = i.parent());

                        )
                          s.push(l(i));
                        for (n = s.length; n--; ) u.add(s[n]);
                        return {
                          string: f,
                          globalMatrix: o,
                          totalMatrix: u,
                          localMatrix: a,
                          diffMatrix: o.clone().add(a.invert()),
                          global: o.toTransformString(),
                          total: u.toTransformString(),
                          local: c,
                          toString: w,
                        };
                      }
                      return (
                        t instanceof r.Matrix
                          ? ((this.matrix = t),
                            (this._.transform = t.toTransformString()))
                          : l(this, t),
                        this.node &&
                          ("linearGradient" == this.type ||
                          "radialGradient" == this.type
                            ? m(this.node, { gradientTransform: this.matrix })
                            : "pattern" == this.type
                            ? m(this.node, { patternTransform: this.matrix })
                            : m(this.node, { transform: this.matrix })),
                        this
                      );
                    }),
                      (d.parent = function () {
                        return b(this.node.parentNode);
                      }),
                      (d.append = d.add =
                        function (t) {
                          if (t) {
                            if ("set" == t.type) {
                              var e = this;
                              return (
                                t.forEach(function (t) {
                                  e.add(t);
                                }),
                                this
                              );
                            }
                            (t = b(t)),
                              this.node.appendChild(t.node),
                              (t.paper = this.paper);
                          }
                          return this;
                        }),
                      (d.appendTo = function (t) {
                        return t && ((t = b(t)), t.append(this)), this;
                      }),
                      (d.prepend = function (t) {
                        if (t) {
                          if ("set" == t.type) {
                            var e,
                              n = this;
                            return (
                              t.forEach(function (t) {
                                e ? e.after(t) : n.prepend(t), (e = t);
                              }),
                              this
                            );
                          }
                          t = b(t);
                          var r = t.parent();
                          this.node.insertBefore(t.node, this.node.firstChild),
                            this.add && this.add(),
                            (t.paper = this.paper),
                            this.parent() && this.parent().add(),
                            r && r.add();
                        }
                        return this;
                      }),
                      (d.prependTo = function (t) {
                        return (t = b(t)), t.prepend(this), this;
                      }),
                      (d.before = function (t) {
                        if ("set" == t.type) {
                          var e = this;
                          return (
                            t.forEach(function (t) {
                              var n = t.parent();
                              e.node.parentNode.insertBefore(t.node, e.node),
                                n && n.add();
                            }),
                            this.parent().add(),
                            this
                          );
                        }
                        t = b(t);
                        var n = t.parent();
                        return (
                          this.node.parentNode.insertBefore(t.node, this.node),
                          this.parent() && this.parent().add(),
                          n && n.add(),
                          (t.paper = this.paper),
                          this
                        );
                      }),
                      (d.after = function (t) {
                        t = b(t);
                        var e = t.parent();
                        return (
                          this.node.nextSibling
                            ? this.node.parentNode.insertBefore(
                                t.node,
                                this.node.nextSibling
                              )
                            : this.node.parentNode.appendChild(t.node),
                          this.parent() && this.parent().add(),
                          e && e.add(),
                          (t.paper = this.paper),
                          this
                        );
                      }),
                      (d.insertBefore = function (t) {
                        t = b(t);
                        var e = this.parent();
                        return (
                          t.node.parentNode.insertBefore(this.node, t.node),
                          (this.paper = t.paper),
                          e && e.add(),
                          t.parent() && t.parent().add(),
                          this
                        );
                      }),
                      (d.insertAfter = function (t) {
                        t = b(t);
                        var e = this.parent();
                        return (
                          t.node.parentNode.insertBefore(
                            this.node,
                            t.node.nextSibling
                          ),
                          (this.paper = t.paper),
                          e && e.add(),
                          t.parent() && t.parent().add(),
                          this
                        );
                      }),
                      (d.remove = function () {
                        var t = this.parent();
                        return (
                          this.node.parentNode &&
                            this.node.parentNode.removeChild(this.node),
                          delete this.paper,
                          (this.removed = !0),
                          t && t.add(),
                          this
                        );
                      }),
                      (d.select = function (t) {
                        return b(this.node.querySelector(t));
                      }),
                      (d.selectAll = function (t) {
                        for (
                          var e = this.node.querySelectorAll(t),
                            n = (r.set || Array)(),
                            i = 0;
                          i < e.length;
                          i++
                        )
                          n.push(b(e[i]));
                        return n;
                      }),
                      (d.asPX = function (t, e) {
                        return null == e && (e = this.attr(t)), +g(this, t, e);
                      }),
                      (d.use = function () {
                        var t,
                          e = this.node.id;
                        return (
                          e || ((e = this.id), m(this.node, { id: e })),
                          (t =
                            "linearGradient" == this.type ||
                            "radialGradient" == this.type ||
                            "pattern" == this.type
                              ? v(this.type, this.node.parentNode)
                              : v("use", this.node.parentNode)),
                          m(t.node, { "xlink:href": "#" + e }),
                          (t.original = this),
                          t
                        );
                      }),
                      (d.clone = function () {
                        var t = b(this.node.cloneNode(!0));
                        return (
                          m(t.node, "id") && m(t.node, { id: t.id }),
                          u(t),
                          t.insertAfter(this),
                          t
                        );
                      }),
                      (d.toDefs = function () {
                        var t = y(this);
                        return t.appendChild(this.node), this;
                      }),
                      (d.pattern = d.toPattern =
                        function (t, e, n, r) {
                          var i = v("pattern", y(this));
                          return (
                            null == t && (t = this.getBBox()),
                            h(t, "object") &&
                              "x" in t &&
                              ((e = t.y),
                              (n = t.width),
                              (r = t.height),
                              (t = t.x)),
                            m(i.node, {
                              x: t,
                              y: e,
                              width: n,
                              height: r,
                              patternUnits: "userSpaceOnUse",
                              id: i.id,
                              viewBox: [t, e, n, r].join(" "),
                            }),
                            i.node.appendChild(this.node),
                            i
                          );
                        }),
                      (d.marker = function (t, e, n, r, i, o) {
                        var a = v("marker", y(this));
                        return (
                          null == t && (t = this.getBBox()),
                          h(t, "object") &&
                            "x" in t &&
                            ((e = t.y),
                            (n = t.width),
                            (r = t.height),
                            (i = t.refX || t.cx),
                            (o = t.refY || t.cy),
                            (t = t.x)),
                          m(a.node, {
                            viewBox: [t, e, n, r].join(" "),
                            markerWidth: n,
                            markerHeight: r,
                            orient: "auto",
                            refX: i || 0,
                            refY: o || 0,
                            id: a.id,
                          }),
                          a.node.appendChild(this.node),
                          a
                        );
                      });
                    var S = function (t, e, r, i) {
                      "function" != typeof r ||
                        r.length ||
                        ((i = r), (r = n.linear)),
                        (this.attr = t),
                        (this.dur = e),
                        r && (this.easing = r),
                        i && (this.callback = i);
                    };
                    (r._.Animation = S),
                      (r.animation = function (t, e, n, r) {
                        return new S(t, e, n, r);
                      }),
                      (d.inAnim = function () {
                        var t = this,
                          e = [];
                        for (var n in t.anims)
                          t.anims[x](n) &&
                            !(function (t) {
                              e.push({
                                anim: new S(
                                  t._attrs,
                                  t.dur,
                                  t.easing,
                                  t._callback
                                ),
                                mina: t,
                                curStatus: t.status(),
                                status: function (e) {
                                  return t.status(e);
                                },
                                stop: function () {
                                  t.stop();
                                },
                              });
                            })(t.anims[n]);
                        return e;
                      }),
                      (r.animate = function (t, r, i, o, a, s) {
                        "function" != typeof a ||
                          a.length ||
                          ((s = a), (a = n.linear));
                        var l = n.time(),
                          u = n(t, r, l, l + o, n.time, i, a);
                        return s && e.once("mina.finish." + u.id, s), u;
                      }),
                      (d.stop = function () {
                        for (
                          var t = this.inAnim(), e = 0, n = t.length;
                          n > e;
                          e++
                        )
                          t[e].stop();
                        return this;
                      }),
                      (d.animate = function (t, r, i, o) {
                        "function" != typeof i ||
                          i.length ||
                          ((o = i), (i = n.linear)),
                          t instanceof S &&
                            ((o = t.callback),
                            (i = t.easing),
                            (r = t.dur),
                            (t = t.attr));
                        var a,
                          s,
                          l,
                          u,
                          f = [],
                          d = [],
                          g = {},
                          m = this;
                        for (var v in t)
                          if (t[x](v)) {
                            m.equal
                              ? ((u = m.equal(v, p(t[v]))),
                                (a = u.from),
                                (s = u.to),
                                (l = u.f))
                              : ((a = +m.attr(v)), (s = +t[v]));
                            var y = h(a, "array") ? a.length : 1;
                            (g[v] = c(f.length, f.length + y, l)),
                              (f = f.concat(a)),
                              (d = d.concat(s));
                          }
                        var b = n.time(),
                          w = n(
                            f,
                            d,
                            b,
                            b + r,
                            n.time,
                            function (t) {
                              var e = {};
                              for (var n in g) g[x](n) && (e[n] = g[n](t));
                              m.attr(e);
                            },
                            i
                          );
                        return (
                          (m.anims[w.id] = w),
                          (w._attrs = t),
                          (w._callback = o),
                          e("snap.animcreated." + m.id, w),
                          e.once("mina.finish." + w.id, function () {
                            delete m.anims[w.id], o && o.call(m);
                          }),
                          e.once("mina.stop." + w.id, function () {
                            delete m.anims[w.id];
                          }),
                          m
                        );
                      });
                    var k = {};
                    (d.data = function (t, n) {
                      var i = (k[this.id] = k[this.id] || {});
                      if (0 == arguments.length)
                        return e("snap.data.get." + this.id, this, i, null), i;
                      if (1 == arguments.length) {
                        if (r.is(t, "object")) {
                          for (var o in t) t[x](o) && this.data(o, t[o]);
                          return this;
                        }
                        return (
                          e("snap.data.get." + this.id, this, i[t], t), i[t]
                        );
                      }
                      return (
                        (i[t] = n),
                        e("snap.data.set." + this.id, this, n, t),
                        this
                      );
                    }),
                      (d.removeData = function (t) {
                        return (
                          null == t
                            ? (k[this.id] = {})
                            : k[this.id] && delete k[this.id][t],
                          this
                        );
                      }),
                      (d.outerSVG = d.toString = f(1)),
                      (d.innerSVG = f()),
                      (d.toDataURL = function () {
                        if (t && t.btoa) {
                          var e = this.getBBox(),
                            n = r.format(
                              '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',
                              {
                                x: +e.x.toFixed(3),
                                y: +e.y.toFixed(3),
                                width: +e.width.toFixed(3),
                                height: +e.height.toFixed(3),
                                contents: this.outerSVG(),
                              }
                            );
                          return (
                            "data:image/svg+xml;base64," +
                            btoa(unescape(encodeURIComponent(n)))
                          );
                        }
                      }),
                      (s.prototype.select = d.select),
                      (s.prototype.selectAll = d.selectAll);
                  }),
                  r.plugin(function (t, e, n, r, i) {
                    function o(t, e, n, r, i, o) {
                      return null == e && "[object SVGMatrix]" == a.call(t)
                        ? ((this.a = t.a),
                          (this.b = t.b),
                          (this.c = t.c),
                          (this.d = t.d),
                          (this.e = t.e),
                          void (this.f = t.f))
                        : void (null != t
                            ? ((this.a = +t),
                              (this.b = +e),
                              (this.c = +n),
                              (this.d = +r),
                              (this.e = +i),
                              (this.f = +o))
                            : ((this.a = 1),
                              (this.b = 0),
                              (this.c = 0),
                              (this.d = 1),
                              (this.e = 0),
                              (this.f = 0)));
                    }
                    var a = Object.prototype.toString,
                      s = String,
                      l = Math,
                      u = "";
                    !(function (e) {
                      function n(t) {
                        return t[0] * t[0] + t[1] * t[1];
                      }
                      function r(t) {
                        var e = l.sqrt(n(t));
                        t[0] && (t[0] /= e), t[1] && (t[1] /= e);
                      }
                      (e.add = function (t, e, n, r, i, a) {
                        var s,
                          l,
                          u,
                          c,
                          f = [[], [], []],
                          d = [
                            [this.a, this.c, this.e],
                            [this.b, this.d, this.f],
                            [0, 0, 1],
                          ],
                          h = [
                            [t, n, i],
                            [e, r, a],
                            [0, 0, 1],
                          ];
                        for (
                          t &&
                            t instanceof o &&
                            (h = [
                              [t.a, t.c, t.e],
                              [t.b, t.d, t.f],
                              [0, 0, 1],
                            ]),
                            s = 0;
                          3 > s;
                          s++
                        )
                          for (l = 0; 3 > l; l++) {
                            for (c = 0, u = 0; 3 > u; u++)
                              c += d[s][u] * h[u][l];
                            f[s][l] = c;
                          }
                        return (
                          (this.a = f[0][0]),
                          (this.b = f[1][0]),
                          (this.c = f[0][1]),
                          (this.d = f[1][1]),
                          (this.e = f[0][2]),
                          (this.f = f[1][2]),
                          this
                        );
                      }),
                        (e.invert = function () {
                          var t = this,
                            e = t.a * t.d - t.b * t.c;
                          return new o(
                            t.d / e,
                            -t.b / e,
                            -t.c / e,
                            t.a / e,
                            (t.c * t.f - t.d * t.e) / e,
                            (t.b * t.e - t.a * t.f) / e
                          );
                        }),
                        (e.clone = function () {
                          return new o(
                            this.a,
                            this.b,
                            this.c,
                            this.d,
                            this.e,
                            this.f
                          );
                        }),
                        (e.translate = function (t, e) {
                          return this.add(1, 0, 0, 1, t, e);
                        }),
                        (e.scale = function (t, e, n, r) {
                          return (
                            null == e && (e = t),
                            (n || r) && this.add(1, 0, 0, 1, n, r),
                            this.add(t, 0, 0, e, 0, 0),
                            (n || r) && this.add(1, 0, 0, 1, -n, -r),
                            this
                          );
                        }),
                        (e.rotate = function (e, n, r) {
                          (e = t.rad(e)), (n = n || 0), (r = r || 0);
                          var i = +l.cos(e).toFixed(9),
                            o = +l.sin(e).toFixed(9);
                          return (
                            this.add(i, o, -o, i, n, r),
                            this.add(1, 0, 0, 1, -n, -r)
                          );
                        }),
                        (e.x = function (t, e) {
                          return t * this.a + e * this.c + this.e;
                        }),
                        (e.y = function (t, e) {
                          return t * this.b + e * this.d + this.f;
                        }),
                        (e.get = function (t) {
                          return +this[s.fromCharCode(97 + t)].toFixed(4);
                        }),
                        (e.toString = function () {
                          return (
                            "matrix(" +
                            [
                              this.get(0),
                              this.get(1),
                              this.get(2),
                              this.get(3),
                              this.get(4),
                              this.get(5),
                            ].join() +
                            ")"
                          );
                        }),
                        (e.offset = function () {
                          return [this.e.toFixed(4), this.f.toFixed(4)];
                        }),
                        (e.determinant = function () {
                          return this.a * this.d - this.b * this.c;
                        }),
                        (e.split = function () {
                          var e = {};
                          (e.dx = this.e), (e.dy = this.f);
                          var i = [
                            [this.a, this.c],
                            [this.b, this.d],
                          ];
                          (e.scalex = l.sqrt(n(i[0]))),
                            r(i[0]),
                            (e.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1]),
                            (i[1] = [
                              i[1][0] - i[0][0] * e.shear,
                              i[1][1] - i[0][1] * e.shear,
                            ]),
                            (e.scaley = l.sqrt(n(i[1]))),
                            r(i[1]),
                            (e.shear /= e.scaley),
                            this.determinant() < 0 && (e.scalex = -e.scalex);
                          var o = -i[0][1],
                            a = i[1][1];
                          return (
                            0 > a
                              ? ((e.rotate = t.deg(l.acos(a))),
                                0 > o && (e.rotate = 360 - e.rotate))
                              : (e.rotate = t.deg(l.asin(o))),
                            (e.isSimple = !(
                              +e.shear.toFixed(9) ||
                              (e.scalex.toFixed(9) != e.scaley.toFixed(9) &&
                                e.rotate)
                            )),
                            (e.isSuperSimple =
                              !+e.shear.toFixed(9) &&
                              e.scalex.toFixed(9) == e.scaley.toFixed(9) &&
                              !e.rotate),
                            (e.noRotation = !+e.shear.toFixed(9) && !e.rotate),
                            e
                          );
                        }),
                        (e.toTransformString = function (t) {
                          var e = t || this.split();
                          return +e.shear.toFixed(9)
                            ? "m" +
                                [
                                  this.get(0),
                                  this.get(1),
                                  this.get(2),
                                  this.get(3),
                                  this.get(4),
                                  this.get(5),
                                ]
                            : ((e.scalex = +e.scalex.toFixed(4)),
                              (e.scaley = +e.scaley.toFixed(4)),
                              (e.rotate = +e.rotate.toFixed(4)),
                              (e.dx || e.dy
                                ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)]
                                : u) +
                                (1 != e.scalex || 1 != e.scaley
                                  ? "s" + [e.scalex, e.scaley, 0, 0]
                                  : u) +
                                (e.rotate
                                  ? "r" + [+e.rotate.toFixed(4), 0, 0]
                                  : u));
                        });
                    })(o.prototype),
                      (t.Matrix = o),
                      (t.matrix = function (t, e, n, r, i, a) {
                        return new o(t, e, n, r, i, a);
                      });
                  }),
                  r.plugin(function (t, n, r, i, o) {
                    function a(r) {
                      return function (i) {
                        if (
                          (e.stop(),
                          i instanceof o &&
                            1 == i.node.childNodes.length &&
                            ("radialGradient" == i.node.firstChild.tagName ||
                              "linearGradient" == i.node.firstChild.tagName ||
                              "pattern" == i.node.firstChild.tagName) &&
                            ((i = i.node.firstChild),
                            h(this).appendChild(i),
                            (i = f(i))),
                          i instanceof n)
                        )
                          if (
                            "radialGradient" == i.type ||
                            "linearGradient" == i.type ||
                            "pattern" == i.type
                          ) {
                            i.node.id || g(i.node, { id: i.id });
                            var a = m(i.node.id);
                          } else a = i.attr(r);
                        else if (((a = t.color(i)), a.error)) {
                          var s = t(h(this).ownerSVGElement).gradient(i);
                          s
                            ? (s.node.id || g(s.node, { id: s.id }),
                              (a = m(s.node.id)))
                            : (a = i);
                        } else a = v(a);
                        var l = {};
                        (l[r] = a), g(this.node, l), (this.node.style[r] = x);
                      };
                    }
                    function s(t) {
                      e.stop(),
                        t == +t && (t += "px"),
                        (this.node.style.fontSize = t);
                    }
                    function l(t) {
                      for (
                        var e = [], n = t.childNodes, r = 0, i = n.length;
                        i > r;
                        r++
                      ) {
                        var o = n[r];
                        3 == o.nodeType && e.push(o.nodeValue),
                          "tspan" == o.tagName &&
                            e.push(
                              1 == o.childNodes.length &&
                                3 == o.firstChild.nodeType
                                ? o.firstChild.nodeValue
                                : l(o)
                            );
                      }
                      return e;
                    }
                    function u() {
                      return e.stop(), this.node.style.fontSize;
                    }
                    var c = t._.make,
                      f = t._.wrap,
                      d = t.is,
                      h = t._.getSomeDefs,
                      p = /^url\(#?([^)]+)\)$/,
                      g = t._.$,
                      m = t.url,
                      v = String,
                      y = t._.separator,
                      x = "";
                    e.on("snap.util.attr.mask", function (t) {
                      if (t instanceof n || t instanceof o) {
                        if (
                          (e.stop(),
                          t instanceof o &&
                            1 == t.node.childNodes.length &&
                            ((t = t.node.firstChild),
                            h(this).appendChild(t),
                            (t = f(t))),
                          "mask" == t.type)
                        )
                          var r = t;
                        else
                          (r = c("mask", h(this))), r.node.appendChild(t.node);
                        !r.node.id && g(r.node, { id: r.id }),
                          g(this.node, { mask: m(r.id) });
                      }
                    }),
                      (function (t) {
                        e.on("snap.util.attr.clip", t),
                          e.on("snap.util.attr.clip-path", t),
                          e.on("snap.util.attr.clipPath", t);
                      })(function (t) {
                        if (t instanceof n || t instanceof o) {
                          if ((e.stop(), "clipPath" == t.type)) var r = t;
                          else
                            (r = c("clipPath", h(this))),
                              r.node.appendChild(t.node),
                              !r.node.id && g(r.node, { id: r.id });
                          g(this.node, { "clip-path": m(r.node.id || r.id) });
                        }
                      }),
                      e.on("snap.util.attr.fill", a("fill")),
                      e.on("snap.util.attr.stroke", a("stroke"));
                    var b = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
                    e.on("snap.util.grad.parse", function (t) {
                      t = v(t);
                      var e = t.match(b);
                      if (!e) return null;
                      var n = e[1],
                        r = e[2],
                        i = e[3];
                      return (
                        (r = r.split(/\s*,\s*/).map(function (t) {
                          return +t == t ? +t : t;
                        })),
                        1 == r.length && 0 == r[0] && (r = []),
                        (i = i.split("-")),
                        (i = i.map(function (t) {
                          t = t.split(":");
                          var e = { color: t[0] };
                          return t[1] && (e.offset = parseFloat(t[1])), e;
                        })),
                        { type: n, params: r, stops: i }
                      );
                    }),
                      e.on("snap.util.attr.d", function (n) {
                        e.stop(),
                          d(n, "array") &&
                            d(n[0], "array") &&
                            (n = t.path.toString.call(n)),
                          (n = v(n)),
                          n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)),
                          g(this.node, { d: n });
                      })(-1),
                      e.on("snap.util.attr.#text", function (t) {
                        e.stop(), (t = v(t));
                        for (
                          var n = i.doc.createTextNode(t);
                          this.node.firstChild;

                        )
                          this.node.removeChild(this.node.firstChild);
                        this.node.appendChild(n);
                      })(-1),
                      e.on("snap.util.attr.path", function (t) {
                        e.stop(), this.attr({ d: t });
                      })(-1),
                      e.on("snap.util.attr.class", function (t) {
                        e.stop(), (this.node.className.baseVal = t);
                      })(-1),
                      e.on("snap.util.attr.viewBox", function (t) {
                        var n;
                        (n =
                          d(t, "object") && "x" in t
                            ? [t.x, t.y, t.width, t.height].join(" ")
                            : d(t, "array")
                            ? t.join(" ")
                            : t),
                          g(this.node, { viewBox: n }),
                          e.stop();
                      })(-1),
                      e.on("snap.util.attr.transform", function (t) {
                        this.transform(t), e.stop();
                      })(-1),
                      e.on("snap.util.attr.r", function (t) {
                        "rect" == this.type &&
                          (e.stop(), g(this.node, { rx: t, ry: t }));
                      })(-1),
                      e.on("snap.util.attr.textpath", function (t) {
                        if ((e.stop(), "text" == this.type)) {
                          var r, i, o;
                          if (!t && this.textPath) {
                            for (i = this.textPath; i.node.firstChild; )
                              this.node.appendChild(i.node.firstChild);
                            return i.remove(), void delete this.textPath;
                          }
                          if (d(t, "string")) {
                            var a = h(this),
                              s = f(a.parentNode).path(t);
                            a.appendChild(s.node),
                              (r = s.id),
                              s.attr({ id: r });
                          } else
                            (t = f(t)),
                              t instanceof n &&
                                ((r = t.attr("id")),
                                r || ((r = t.id), t.attr({ id: r })));
                          if (r)
                            if (((i = this.textPath), (o = this.node), i))
                              i.attr({ "xlink:href": "#" + r });
                            else {
                              for (
                                i = g("textPath", { "xlink:href": "#" + r });
                                o.firstChild;

                              )
                                i.appendChild(o.firstChild);
                              o.appendChild(i), (this.textPath = f(i));
                            }
                        }
                      })(-1),
                      e.on("snap.util.attr.text", function (t) {
                        if ("text" == this.type) {
                          for (
                            var n = this.node,
                              r = function (t) {
                                var e = g("tspan");
                                if (d(t, "array"))
                                  for (var n = 0; n < t.length; n++)
                                    e.appendChild(r(t[n]));
                                else e.appendChild(i.doc.createTextNode(t));
                                return e.normalize && e.normalize(), e;
                              };
                            n.firstChild;

                          )
                            n.removeChild(n.firstChild);
                          for (var o = r(t); o.firstChild; )
                            n.appendChild(o.firstChild);
                        }
                        e.stop();
                      })(-1),
                      e.on("snap.util.attr.fontSize", s)(-1),
                      e.on("snap.util.attr.font-size", s)(-1),
                      e.on("snap.util.getattr.transform", function () {
                        return e.stop(), this.transform();
                      })(-1),
                      e.on("snap.util.getattr.textpath", function () {
                        return e.stop(), this.textPath;
                      })(-1),
                      (function () {
                        function n(n) {
                          return function () {
                            e.stop();
                            var r = i.doc.defaultView
                              .getComputedStyle(this.node, null)
                              .getPropertyValue("marker-" + n);
                            return "none" == r
                              ? r
                              : t(i.doc.getElementById(r.match(p)[1]));
                          };
                        }
                        function r(t) {
                          return function (n) {
                            e.stop();
                            var r =
                              "marker" +
                              t.charAt(0).toUpperCase() +
                              t.substring(1);
                            if ("" == n || !n)
                              return void (this.node.style[r] = "none");
                            if ("marker" == n.type) {
                              var i = n.node.id;
                              return (
                                i || g(n.node, { id: n.id }),
                                void (this.node.style[r] = m(i))
                              );
                            }
                          };
                        }
                        e.on("snap.util.getattr.marker-end", n("end"))(-1),
                          e.on("snap.util.getattr.markerEnd", n("end"))(-1),
                          e.on(
                            "snap.util.getattr.marker-start",
                            n("start")
                          )(-1),
                          e.on("snap.util.getattr.markerStart", n("start"))(-1),
                          e.on("snap.util.getattr.marker-mid", n("mid"))(-1),
                          e.on("snap.util.getattr.markerMid", n("mid"))(-1),
                          e.on("snap.util.attr.marker-end", r("end"))(-1),
                          e.on("snap.util.attr.markerEnd", r("end"))(-1),
                          e.on("snap.util.attr.marker-start", r("start"))(-1),
                          e.on("snap.util.attr.markerStart", r("start"))(-1),
                          e.on("snap.util.attr.marker-mid", r("mid"))(-1),
                          e.on("snap.util.attr.markerMid", r("mid"))(-1);
                      })(),
                      e.on("snap.util.getattr.r", function () {
                        return "rect" == this.type &&
                          g(this.node, "rx") == g(this.node, "ry")
                          ? (e.stop(), g(this.node, "rx"))
                          : void 0;
                      })(-1),
                      e.on("snap.util.getattr.text", function () {
                        if ("text" == this.type || "tspan" == this.type) {
                          e.stop();
                          var t = l(this.node);
                          return 1 == t.length ? t[0] : t;
                        }
                      })(-1),
                      e.on("snap.util.getattr.#text", function () {
                        return this.node.textContent;
                      })(-1),
                      e.on("snap.util.getattr.viewBox", function () {
                        e.stop();
                        var n = g(this.node, "viewBox");
                        return n
                          ? ((n = n.split(y)),
                            t._.box(+n[0], +n[1], +n[2], +n[3]))
                          : void 0;
                      })(-1),
                      e.on("snap.util.getattr.points", function () {
                        var t = g(this.node, "points");
                        return e.stop(), t ? t.split(y) : void 0;
                      })(-1),
                      e.on("snap.util.getattr.path", function () {
                        var t = g(this.node, "d");
                        return e.stop(), t;
                      })(-1),
                      e.on("snap.util.getattr.class", function () {
                        return this.node.className.baseVal;
                      })(-1),
                      e.on("snap.util.getattr.fontSize", u)(-1),
                      e.on("snap.util.getattr.font-size", u)(-1);
                  }),
                  r.plugin(function (t, e, n, r, i) {
                    var o = /\S+/g,
                      a = String,
                      s = e.prototype;
                    (s.addClass = function (t) {
                      var e,
                        n,
                        r,
                        i,
                        s = a(t || "").match(o) || [],
                        l = this.node,
                        u = l.className.baseVal,
                        c = u.match(o) || [];
                      if (s.length) {
                        for (e = 0; (r = s[e++]); )
                          (n = c.indexOf(r)), ~n || c.push(r);
                        (i = c.join(" ")), u != i && (l.className.baseVal = i);
                      }
                      return this;
                    }),
                      (s.removeClass = function (t) {
                        var e,
                          n,
                          r,
                          i,
                          s = a(t || "").match(o) || [],
                          l = this.node,
                          u = l.className.baseVal,
                          c = u.match(o) || [];
                        if (c.length) {
                          for (e = 0; (r = s[e++]); )
                            (n = c.indexOf(r)), ~n && c.splice(n, 1);
                          (i = c.join(" ")),
                            u != i && (l.className.baseVal = i);
                        }
                        return this;
                      }),
                      (s.hasClass = function (t) {
                        var e = this.node,
                          n = e.className.baseVal,
                          r = n.match(o) || [];
                        return !!~r.indexOf(t);
                      }),
                      (s.toggleClass = function (t, e) {
                        if (null != e)
                          return e ? this.addClass(t) : this.removeClass(t);
                        var n,
                          r,
                          i,
                          a,
                          s = (t || "").match(o) || [],
                          l = this.node,
                          u = l.className.baseVal,
                          c = u.match(o) || [];
                        for (n = 0; (i = s[n++]); )
                          (r = c.indexOf(i)), ~r ? c.splice(r, 1) : c.push(i);
                        return (
                          (a = c.join(" ")),
                          u != a && (l.className.baseVal = a),
                          this
                        );
                      });
                  }),
                  r.plugin(function (t, n, r, i, o) {
                    function a(t) {
                      return t;
                    }
                    function s(t) {
                      return function (e) {
                        return +e.toFixed(3) + t;
                      };
                    }
                    var l = {
                        "+": function (t, e) {
                          return t + e;
                        },
                        "-": function (t, e) {
                          return t - e;
                        },
                        "/": function (t, e) {
                          return t / e;
                        },
                        "*": function (t, e) {
                          return t * e;
                        },
                      },
                      u = String,
                      c = /[a-z]+$/i,
                      f =
                        /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
                    e.on("snap.util.attr", function (t) {
                      var n = u(t).match(f);
                      if (n) {
                        var r = e.nt(),
                          i = r.substring(r.lastIndexOf(".") + 1),
                          o = this.attr(i),
                          a = {};
                        e.stop();
                        var s = n[3] || "",
                          d = o.match(c),
                          h = l[n[1]];
                        if (
                          (d && d == s
                            ? (t = h(parseFloat(o), +n[2]))
                            : ((o = this.asPX(i)),
                              (t = h(this.asPX(i), this.asPX(i, n[2] + s)))),
                          isNaN(o) || isNaN(t))
                        )
                          return;
                        (a[i] = t), this.attr(a);
                      }
                    })(-10),
                      e.on("snap.util.equal", function (t, n) {
                        var r = u(this.attr(t) || ""),
                          i = u(n).match(f);
                        if (i) {
                          e.stop();
                          var o = i[3] || "",
                            d = r.match(c),
                            h = l[i[1]];
                          return d && d == o
                            ? {
                                from: parseFloat(r),
                                to: h(parseFloat(r), +i[2]),
                                f: s(d),
                              }
                            : ((r = this.asPX(t)),
                              {
                                from: r,
                                to: h(r, this.asPX(t, i[2] + o)),
                                f: a,
                              });
                        }
                      })(-10);
                  }),
                  r.plugin(function (n, r, i, o, a) {
                    var s = i.prototype,
                      l = n.is;
                    (s.rect = function (t, e, n, r, i, o) {
                      var a;
                      return (
                        null == o && (o = i),
                        l(t, "object") && "[object Object]" == t
                          ? (a = t)
                          : null != t &&
                            ((a = { x: t, y: e, width: n, height: r }),
                            null != i && ((a.rx = i), (a.ry = o))),
                        this.el("rect", a)
                      );
                    }),
                      (s.circle = function (t, e, n) {
                        var r;
                        return (
                          l(t, "object") && "[object Object]" == t
                            ? (r = t)
                            : null != t && (r = { cx: t, cy: e, r: n }),
                          this.el("circle", r)
                        );
                      });
                    var u = (function () {
                      function t() {
                        this.parentNode.removeChild(this);
                      }
                      return function (e, n) {
                        var r = o.doc.createElement("img"),
                          i = o.doc.body;
                        (r.style.cssText =
                          "position:absolute;left:-9999em;top:-9999em"),
                          (r.onload = function () {
                            n.call(r),
                              (r.onload = r.onerror = null),
                              i.removeChild(r);
                          }),
                          (r.onerror = t),
                          i.appendChild(r),
                          (r.src = e);
                      };
                    })();
                    (s.image = function (t, e, r, i, o) {
                      var a = this.el("image");
                      if (l(t, "object") && "src" in t) a.attr(t);
                      else if (null != t) {
                        var s = {
                          "xlink:href": t,
                          preserveAspectRatio: "none",
                        };
                        null != e && null != r && ((s.x = e), (s.y = r)),
                          null != i && null != o
                            ? ((s.width = i), (s.height = o))
                            : u(t, function () {
                                n._.$(a.node, {
                                  width: this.offsetWidth,
                                  height: this.offsetHeight,
                                });
                              }),
                          n._.$(a.node, s);
                      }
                      return a;
                    }),
                      (s.ellipse = function (t, e, n, r) {
                        var i;
                        return (
                          l(t, "object") && "[object Object]" == t
                            ? (i = t)
                            : null != t && (i = { cx: t, cy: e, rx: n, ry: r }),
                          this.el("ellipse", i)
                        );
                      }),
                      (s.path = function (t) {
                        var e;
                        return (
                          l(t, "object") && !l(t, "array")
                            ? (e = t)
                            : t && (e = { d: t }),
                          this.el("path", e)
                        );
                      }),
                      (s.group = s.g =
                        function (t) {
                          var e = this.el("g");
                          return (
                            1 == arguments.length && t && !t.type
                              ? e.attr(t)
                              : arguments.length &&
                                e.add(Array.prototype.slice.call(arguments, 0)),
                            e
                          );
                        }),
                      (s.svg = function (t, e, n, r, i, o, a, s) {
                        var u = {};
                        return (
                          l(t, "object") && null == e
                            ? (u = t)
                            : (null != t && (u.x = t),
                              null != e && (u.y = e),
                              null != n && (u.width = n),
                              null != r && (u.height = r),
                              null != i &&
                                null != o &&
                                null != a &&
                                null != s &&
                                (u.viewBox = [i, o, a, s])),
                          this.el("svg", u)
                        );
                      }),
                      (s.mask = function (t) {
                        var e = this.el("mask");
                        return (
                          1 == arguments.length && t && !t.type
                            ? e.attr(t)
                            : arguments.length &&
                              e.add(Array.prototype.slice.call(arguments, 0)),
                          e
                        );
                      }),
                      (s.ptrn = function (t, e, n, r, i, o, a, s) {
                        if (l(t, "object")) var u = t;
                        else
                          (u = { patternUnits: "userSpaceOnUse" }),
                            t && (u.x = t),
                            e && (u.y = e),
                            null != n && (u.width = n),
                            null != r && (u.height = r),
                            (u.viewBox =
                              null != i && null != o && null != a && null != s
                                ? [i, o, a, s]
                                : [t || 0, e || 0, n || 0, r || 0]);
                        return this.el("pattern", u);
                      }),
                      (s.use = function (t) {
                        return null != t
                          ? (t instanceof r &&
                              (t.attr("id") || t.attr({ id: n._.id(t) }),
                              (t = t.attr("id"))),
                            "#" == String(t).charAt() && (t = t.substring(1)),
                            this.el("use", { "xlink:href": "#" + t }))
                          : r.prototype.use.call(this);
                      }),
                      (s.symbol = function (t, e, n, r) {
                        var i = {};
                        return (
                          null != t &&
                            null != e &&
                            null != n &&
                            null != r &&
                            (i.viewBox = [t, e, n, r]),
                          this.el("symbol", i)
                        );
                      }),
                      (s.text = function (t, e, n) {
                        var r = {};
                        return (
                          l(t, "object")
                            ? (r = t)
                            : null != t && (r = { x: t, y: e, text: n || "" }),
                          this.el("text", r)
                        );
                      }),
                      (s.line = function (t, e, n, r) {
                        var i = {};
                        return (
                          l(t, "object")
                            ? (i = t)
                            : null != t && (i = { x1: t, x2: n, y1: e, y2: r }),
                          this.el("line", i)
                        );
                      }),
                      (s.polyline = function (t) {
                        arguments.length > 1 &&
                          (t = Array.prototype.slice.call(arguments, 0));
                        var e = {};
                        return (
                          l(t, "object") && !l(t, "array")
                            ? (e = t)
                            : null != t && (e = { points: t }),
                          this.el("polyline", e)
                        );
                      }),
                      (s.polygon = function (t) {
                        arguments.length > 1 &&
                          (t = Array.prototype.slice.call(arguments, 0));
                        var e = {};
                        return (
                          l(t, "object") && !l(t, "array")
                            ? (e = t)
                            : null != t && (e = { points: t }),
                          this.el("polygon", e)
                        );
                      }),
                      (function () {
                        function r() {
                          return this.selectAll("stop");
                        }
                        function i(t, e) {
                          var r = c("stop"),
                            i = { offset: +e + "%" };
                          return (
                            (t = n.color(t)),
                            (i["stop-color"] = t.hex),
                            t.opacity < 1 && (i["stop-opacity"] = t.opacity),
                            c(r, i),
                            this.node.appendChild(r),
                            this
                          );
                        }
                        function o() {
                          if ("linearGradient" == this.type) {
                            var t = c(this.node, "x1") || 0,
                              e = c(this.node, "x2") || 1,
                              r = c(this.node, "y1") || 0,
                              i = c(this.node, "y2") || 0;
                            return n._.box(
                              t,
                              r,
                              math.abs(e - t),
                              math.abs(i - r)
                            );
                          }
                          var o = this.node.cx || 0.5,
                            a = this.node.cy || 0.5,
                            s = this.node.r || 0;
                          return n._.box(o - s, a - s, 2 * s, 2 * s);
                        }
                        function a(t, n) {
                          function r(t, e) {
                            for (var n = (e - f) / (t - d), r = d; t > r; r++)
                              a[r].offset = +(+f + n * (r - d)).toFixed(2);
                            (d = t), (f = e);
                          }
                          var i,
                            o = e(
                              "snap.util.grad.parse",
                              null,
                              n
                            ).firstDefined();
                          if (!o) return null;
                          o.params.unshift(t),
                            (i =
                              "l" == o.type.toLowerCase()
                                ? l.apply(0, o.params)
                                : u.apply(0, o.params)),
                            o.type != o.type.toLowerCase() &&
                              c(i.node, { gradientUnits: "userSpaceOnUse" });
                          var a = o.stops,
                            s = a.length,
                            f = 0,
                            d = 0;
                          s--;
                          for (var h = 0; s > h; h++)
                            "offset" in a[h] && r(h, a[h].offset);
                          for (
                            a[s].offset = a[s].offset || 100,
                              r(s, a[s].offset),
                              h = 0;
                            s >= h;
                            h++
                          ) {
                            var p = a[h];
                            i.addStop(p.color, p.offset);
                          }
                          return i;
                        }
                        function l(t, e, a, s, l) {
                          var u = n._.make("linearGradient", t);
                          return (
                            (u.stops = r),
                            (u.addStop = i),
                            (u.getBBox = o),
                            null != e &&
                              c(u.node, { x1: e, y1: a, x2: s, y2: l }),
                            u
                          );
                        }
                        function u(t, e, a, s, l, u) {
                          var f = n._.make("radialGradient", t);
                          return (
                            (f.stops = r),
                            (f.addStop = i),
                            (f.getBBox = o),
                            null != e && c(f.node, { cx: e, cy: a, r: s }),
                            null != l &&
                              null != u &&
                              c(f.node, { fx: l, fy: u }),
                            f
                          );
                        }
                        var c = n._.$;
                        (s.gradient = function (t) {
                          return a(this.defs, t);
                        }),
                          (s.gradientLinear = function (t, e, n, r) {
                            return l(this.defs, t, e, n, r);
                          }),
                          (s.gradientRadial = function (t, e, n, r, i) {
                            return u(this.defs, t, e, n, r, i);
                          }),
                          (s.toString = function () {
                            var t,
                              e = this.node.ownerDocument,
                              r = e.createDocumentFragment(),
                              i = e.createElement("div"),
                              o = this.node.cloneNode(!0);
                            return (
                              r.appendChild(i),
                              i.appendChild(o),
                              n._.$(o, { xmlns: "http://www.w3.org/2000/svg" }),
                              (t = i.innerHTML),
                              r.removeChild(r.firstChild),
                              t
                            );
                          }),
                          (s.toDataURL = function () {
                            return t && t.btoa
                              ? "data:image/svg+xml;base64," +
                                  btoa(unescape(encodeURIComponent(this)))
                              : void 0;
                          }),
                          (s.clear = function () {
                            for (var t, e = this.node.firstChild; e; )
                              (t = e.nextSibling),
                                "defs" != e.tagName
                                  ? e.parentNode.removeChild(e)
                                  : s.clear.call({ node: e }),
                                (e = t);
                          });
                      })();
                  }),
                  r.plugin(function (t, e, n, r) {
                    function i(t) {
                      var e = (i.ps = i.ps || {});
                      return (
                        e[t] ? (e[t].sleep = 100) : (e[t] = { sleep: 100 }),
                        setTimeout(function () {
                          for (var n in e)
                            e[q](n) &&
                              n != t &&
                              (e[n].sleep--, !e[n].sleep && delete e[n]);
                        }),
                        e[t]
                      );
                    }
                    function o(t, e, n, r) {
                      return (
                        null == t && (t = e = n = r = 0),
                        null == e &&
                          ((e = t.y), (n = t.width), (r = t.height), (t = t.x)),
                        {
                          x: t,
                          y: e,
                          width: n,
                          w: n,
                          height: r,
                          h: r,
                          x2: t + n,
                          y2: e + r,
                          cx: t + n / 2,
                          cy: e + r / 2,
                          r1: O.min(n, r) / 2,
                          r2: O.max(n, r) / 2,
                          r0: O.sqrt(n * n + r * r) / 2,
                          path: C(t, e, n, r),
                          vb: [t, e, n, r].join(" "),
                        }
                      );
                    }
                    function a() {
                      return this.join(",").replace(I, "$1");
                    }
                    function s(t) {
                      var e = V(t);
                      return (e.toString = a), e;
                    }
                    function l(t, e, n, r, i, o, a, s, l) {
                      return null == l
                        ? g(t, e, n, r, i, o, a, s)
                        : c(
                            t,
                            e,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            m(t, e, n, r, i, o, a, s, l)
                          );
                    }
                    function u(n, r) {
                      function i(t) {
                        return +(+t).toFixed(3);
                      }
                      return t._.cacher(
                        function (t, o, a) {
                          t instanceof e && (t = t.attr("d")), (t = N(t));
                          for (
                            var s,
                              u,
                              f,
                              d,
                              h,
                              p = "",
                              g = {},
                              m = 0,
                              v = 0,
                              y = t.length;
                            y > v;
                            v++
                          ) {
                            if (((f = t[v]), "M" == f[0]))
                              (s = +f[1]), (u = +f[2]);
                            else {
                              if (
                                ((d = l(
                                  s,
                                  u,
                                  f[1],
                                  f[2],
                                  f[3],
                                  f[4],
                                  f[5],
                                  f[6]
                                )),
                                m + d > o)
                              ) {
                                if (r && !g.start) {
                                  if (
                                    ((h = l(
                                      s,
                                      u,
                                      f[1],
                                      f[2],
                                      f[3],
                                      f[4],
                                      f[5],
                                      f[6],
                                      o - m
                                    )),
                                    (p += [
                                      "C" + i(h.start.x),
                                      i(h.start.y),
                                      i(h.m.x),
                                      i(h.m.y),
                                      i(h.x),
                                      i(h.y),
                                    ]),
                                    a)
                                  )
                                    return p;
                                  (g.start = p),
                                    (p = [
                                      "M" + i(h.x),
                                      i(h.y) + "C" + i(h.n.x),
                                      i(h.n.y),
                                      i(h.end.x),
                                      i(h.end.y),
                                      i(f[5]),
                                      i(f[6]),
                                    ].join()),
                                    (m += d),
                                    (s = +f[5]),
                                    (u = +f[6]);
                                  continue;
                                }
                                if (!n && !r)
                                  return (h = l(
                                    s,
                                    u,
                                    f[1],
                                    f[2],
                                    f[3],
                                    f[4],
                                    f[5],
                                    f[6],
                                    o - m
                                  ));
                              }
                              (m += d), (s = +f[5]), (u = +f[6]);
                            }
                            p += f.shift() + f;
                          }
                          return (
                            (g.end = p),
                            (h = n
                              ? m
                              : r
                              ? g
                              : c(s, u, f[0], f[1], f[2], f[3], f[4], f[5], 1))
                          );
                        },
                        null,
                        t._.clone
                      );
                    }
                    function c(t, e, n, r, i, o, a, s, l) {
                      var u = 1 - l,
                        c = U(u, 3),
                        f = U(u, 2),
                        d = l * l,
                        h = d * l,
                        p = c * t + 3 * f * l * n + 3 * u * l * l * i + h * a,
                        g = c * e + 3 * f * l * r + 3 * u * l * l * o + h * s,
                        m = t + 2 * l * (n - t) + d * (i - 2 * n + t),
                        v = e + 2 * l * (r - e) + d * (o - 2 * r + e),
                        y = n + 2 * l * (i - n) + d * (a - 2 * i + n),
                        x = r + 2 * l * (o - r) + d * (s - 2 * o + r),
                        b = u * t + l * n,
                        w = u * e + l * r,
                        S = u * i + l * a,
                        k = u * o + l * s,
                        C = 90 - (180 * O.atan2(m - y, v - x)) / G;
                      return {
                        x: p,
                        y: g,
                        m: { x: m, y: v },
                        n: { x: y, y: x },
                        start: { x: b, y: w },
                        end: { x: S, y: k },
                        alpha: C,
                      };
                    }
                    function f(e, n, r, i, a, s, l, u) {
                      t.is(e, "array") || (e = [e, n, r, i, a, s, l, u]);
                      var c = z.apply(null, e);
                      return o(
                        c.min.x,
                        c.min.y,
                        c.max.x - c.min.x,
                        c.max.y - c.min.y
                      );
                    }
                    function d(t, e, n) {
                      return (
                        e >= t.x &&
                        e <= t.x + t.width &&
                        n >= t.y &&
                        n <= t.y + t.height
                      );
                    }
                    function h(t, e) {
                      return (
                        (t = o(t)),
                        (e = o(e)),
                        d(e, t.x, t.y) ||
                          d(e, t.x2, t.y) ||
                          d(e, t.x, t.y2) ||
                          d(e, t.x2, t.y2) ||
                          d(t, e.x, e.y) ||
                          d(t, e.x2, e.y) ||
                          d(t, e.x, e.y2) ||
                          d(t, e.x2, e.y2) ||
                          (((t.x < e.x2 && t.x > e.x) ||
                            (e.x < t.x2 && e.x > t.x)) &&
                            ((t.y < e.y2 && t.y > e.y) ||
                              (e.y < t.y2 && e.y > t.y)))
                      );
                    }
                    function p(t, e, n, r, i) {
                      var o = -3 * e + 9 * n - 9 * r + 3 * i,
                        a = t * o + 6 * e - 12 * n + 6 * r;
                      return t * a - 3 * e + 3 * n;
                    }
                    function g(t, e, n, r, i, o, a, s, l) {
                      null == l && (l = 1), (l = l > 1 ? 1 : 0 > l ? 0 : l);
                      for (
                        var u = l / 2,
                          c = 12,
                          f = [
                            -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873,
                            -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
                          ],
                          d = [
                            0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032,
                            0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472,
                          ],
                          h = 0,
                          g = 0;
                        c > g;
                        g++
                      ) {
                        var m = u * f[g] + u,
                          v = p(m, t, n, i, a),
                          y = p(m, e, r, o, s),
                          x = v * v + y * y;
                        h += d[g] * O.sqrt(x);
                      }
                      return u * h;
                    }
                    function m(t, e, n, r, i, o, a, s, l) {
                      if (!(0 > l || g(t, e, n, r, i, o, a, s) < l)) {
                        var u,
                          c = 1,
                          f = c / 2,
                          d = c - f,
                          h = 0.01;
                        for (u = g(t, e, n, r, i, o, a, s, d); $(u - l) > h; )
                          (f /= 2),
                            (d += (l > u ? 1 : -1) * f),
                            (u = g(t, e, n, r, i, o, a, s, d));
                        return d;
                      }
                    }
                    function v(t, e, n, r, i, o, a, s) {
                      if (
                        !(
                          H(t, n) < R(i, a) ||
                          R(t, n) > H(i, a) ||
                          H(e, r) < R(o, s) ||
                          R(e, r) > H(o, s)
                        )
                      ) {
                        var l =
                            (t * r - e * n) * (i - a) -
                            (t - n) * (i * s - o * a),
                          u =
                            (t * r - e * n) * (o - s) -
                            (e - r) * (i * s - o * a),
                          c = (t - n) * (o - s) - (e - r) * (i - a);
                        if (c) {
                          var f = l / c,
                            d = u / c,
                            h = +f.toFixed(2),
                            p = +d.toFixed(2);
                          if (
                            !(
                              h < +R(t, n).toFixed(2) ||
                              h > +H(t, n).toFixed(2) ||
                              h < +R(i, a).toFixed(2) ||
                              h > +H(i, a).toFixed(2) ||
                              p < +R(e, r).toFixed(2) ||
                              p > +H(e, r).toFixed(2) ||
                              p < +R(o, s).toFixed(2) ||
                              p > +H(o, s).toFixed(2)
                            )
                          )
                            return { x: f, y: d };
                        }
                      }
                    }
                    function y(t, e, n) {
                      var r = f(t),
                        i = f(e);
                      if (!h(r, i)) return n ? 0 : [];
                      for (
                        var o = g.apply(0, t),
                          a = g.apply(0, e),
                          s = ~~(o / 8),
                          l = ~~(a / 8),
                          u = [],
                          d = [],
                          p = {},
                          m = n ? 0 : [],
                          y = 0;
                        s + 1 > y;
                        y++
                      ) {
                        var x = c.apply(0, t.concat(y / s));
                        u.push({ x: x.x, y: x.y, t: y / s });
                      }
                      for (y = 0; l + 1 > y; y++)
                        (x = c.apply(0, e.concat(y / l))),
                          d.push({ x: x.x, y: x.y, t: y / l });
                      for (y = 0; s > y; y++)
                        for (var b = 0; l > b; b++) {
                          var w = u[y],
                            S = u[y + 1],
                            k = d[b],
                            C = d[b + 1],
                            T = $(S.x - w.x) < 0.001 ? "y" : "x",
                            A = $(C.x - k.x) < 0.001 ? "y" : "x",
                            M = v(w.x, w.y, S.x, S.y, k.x, k.y, C.x, C.y);
                          if (M) {
                            if (p[M.x.toFixed(4)] == M.y.toFixed(4)) continue;
                            p[M.x.toFixed(4)] = M.y.toFixed(4);
                            var F =
                                w.t +
                                $((M[T] - w[T]) / (S[T] - w[T])) * (S.t - w.t),
                              E =
                                k.t +
                                $((M[A] - k[A]) / (C[A] - k[A])) * (C.t - k.t);
                            F >= 0 &&
                              1 >= F &&
                              E >= 0 &&
                              1 >= E &&
                              (n
                                ? m++
                                : m.push({ x: M.x, y: M.y, t1: F, t2: E }));
                          }
                        }
                      return m;
                    }
                    function x(t, e) {
                      return w(t, e);
                    }
                    function b(t, e) {
                      return w(t, e, 1);
                    }
                    function w(t, e, n) {
                      (t = N(t)), (e = N(e));
                      for (
                        var r,
                          i,
                          o,
                          a,
                          s,
                          l,
                          u,
                          c,
                          f,
                          d,
                          h = n ? 0 : [],
                          p = 0,
                          g = t.length;
                        g > p;
                        p++
                      ) {
                        var m = t[p];
                        if ("M" == m[0]) (r = s = m[1]), (i = l = m[2]);
                        else {
                          "C" == m[0]
                            ? ((f = [r, i].concat(m.slice(1))),
                              (r = f[6]),
                              (i = f[7]))
                            : ((f = [r, i, r, i, s, l, s, l]),
                              (r = s),
                              (i = l));
                          for (var v = 0, x = e.length; x > v; v++) {
                            var b = e[v];
                            if ("M" == b[0]) (o = u = b[1]), (a = c = b[2]);
                            else {
                              "C" == b[0]
                                ? ((d = [o, a].concat(b.slice(1))),
                                  (o = d[6]),
                                  (a = d[7]))
                                : ((d = [o, a, o, a, u, c, u, c]),
                                  (o = u),
                                  (a = c));
                              var w = y(f, d, n);
                              if (n) h += w;
                              else {
                                for (var S = 0, k = w.length; k > S; S++)
                                  (w[S].segment1 = p),
                                    (w[S].segment2 = v),
                                    (w[S].bez1 = f),
                                    (w[S].bez2 = d);
                                h = h.concat(w);
                              }
                            }
                          }
                        }
                      }
                      return h;
                    }
                    function S(t, e, n) {
                      var r = k(t);
                      return (
                        d(r, e, n) &&
                        w(
                          t,
                          [
                            ["M", e, n],
                            ["H", r.x2 + 10],
                          ],
                          1
                        ) %
                          2 ==
                          1
                      );
                    }
                    function k(t) {
                      var e = i(t);
                      if (e.bbox) return V(e.bbox);
                      if (!t) return o();
                      t = N(t);
                      for (
                        var n,
                          r = 0,
                          a = 0,
                          s = [],
                          l = [],
                          u = 0,
                          c = t.length;
                        c > u;
                        u++
                      )
                        if (((n = t[u]), "M" == n[0]))
                          (r = n[1]), (a = n[2]), s.push(r), l.push(a);
                        else {
                          var f = z(r, a, n[1], n[2], n[3], n[4], n[5], n[6]);
                          (s = s.concat(f.min.x, f.max.x)),
                            (l = l.concat(f.min.y, f.max.y)),
                            (r = n[5]),
                            (a = n[6]);
                        }
                      var d = R.apply(0, s),
                        h = R.apply(0, l),
                        p = H.apply(0, s),
                        g = H.apply(0, l),
                        m = o(d, h, p - d, g - h);
                      return (e.bbox = V(m)), m;
                    }
                    function C(t, e, n, r, i) {
                      if (i)
                        return [
                          ["M", +t + +i, e],
                          ["l", n - 2 * i, 0],
                          ["a", i, i, 0, 0, 1, i, i],
                          ["l", 0, r - 2 * i],
                          ["a", i, i, 0, 0, 1, -i, i],
                          ["l", 2 * i - n, 0],
                          ["a", i, i, 0, 0, 1, -i, -i],
                          ["l", 0, 2 * i - r],
                          ["a", i, i, 0, 0, 1, i, -i],
                          ["z"],
                        ];
                      var o = [
                        ["M", t, e],
                        ["l", n, 0],
                        ["l", 0, r],
                        ["l", -n, 0],
                        ["z"],
                      ];
                      return (o.toString = a), o;
                    }
                    function T(t, e, n, r, i) {
                      if (
                        (null == i && null == r && (r = n),
                        (t = +t),
                        (e = +e),
                        (n = +n),
                        (r = +r),
                        null != i)
                      )
                        var o = Math.PI / 180,
                          s = t + n * Math.cos(-r * o),
                          l = t + n * Math.cos(-i * o),
                          u = e + n * Math.sin(-r * o),
                          c = e + n * Math.sin(-i * o),
                          f = [
                            ["M", s, u],
                            ["A", n, n, 0, +(i - r > 180), 0, l, c],
                          ];
                      else
                        f = [
                          ["M", t, e],
                          ["m", 0, -r],
                          ["a", n, r, 0, 1, 1, 0, 2 * r],
                          ["a", n, r, 0, 1, 1, 0, -2 * r],
                          ["z"],
                        ];
                      return (f.toString = a), f;
                    }
                    function A(e) {
                      var n = i(e),
                        r = String.prototype.toLowerCase;
                      if (n.rel) return s(n.rel);
                      (t.is(e, "array") && t.is(e && e[0], "array")) ||
                        (e = t.parsePathString(e));
                      var o = [],
                        l = 0,
                        u = 0,
                        c = 0,
                        f = 0,
                        d = 0;
                      "M" == e[0][0] &&
                        ((l = e[0][1]),
                        (u = e[0][2]),
                        (c = l),
                        (f = u),
                        d++,
                        o.push(["M", l, u]));
                      for (var h = d, p = e.length; p > h; h++) {
                        var g = (o[h] = []),
                          m = e[h];
                        if (m[0] != r.call(m[0]))
                          switch (((g[0] = r.call(m[0])), g[0])) {
                            case "a":
                              (g[1] = m[1]),
                                (g[2] = m[2]),
                                (g[3] = m[3]),
                                (g[4] = m[4]),
                                (g[5] = m[5]),
                                (g[6] = +(m[6] - l).toFixed(3)),
                                (g[7] = +(m[7] - u).toFixed(3));
                              break;
                            case "v":
                              g[1] = +(m[1] - u).toFixed(3);
                              break;
                            case "m":
                              (c = m[1]), (f = m[2]);
                            default:
                              for (var v = 1, y = m.length; y > v; v++)
                                g[v] = +(m[v] - (v % 2 ? l : u)).toFixed(3);
                          }
                        else {
                          (g = o[h] = []),
                            "m" == m[0] && ((c = m[1] + l), (f = m[2] + u));
                          for (var x = 0, b = m.length; b > x; x++)
                            o[h][x] = m[x];
                        }
                        var w = o[h].length;
                        switch (o[h][0]) {
                          case "z":
                            (l = c), (u = f);
                            break;
                          case "h":
                            l += +o[h][w - 1];
                            break;
                          case "v":
                            u += +o[h][w - 1];
                            break;
                          default:
                            (l += +o[h][w - 2]), (u += +o[h][w - 1]);
                        }
                      }
                      return (o.toString = a), (n.rel = s(o)), o;
                    }
                    function M(e) {
                      var n = i(e);
                      if (n.abs) return s(n.abs);
                      if (
                        ((j(e, "array") && j(e && e[0], "array")) ||
                          (e = t.parsePathString(e)),
                        !e || !e.length)
                      )
                        return [["M", 0, 0]];
                      var r,
                        o = [],
                        l = 0,
                        u = 0,
                        c = 0,
                        f = 0,
                        d = 0;
                      "M" == e[0][0] &&
                        ((l = +e[0][1]),
                        (u = +e[0][2]),
                        (c = l),
                        (f = u),
                        d++,
                        (o[0] = ["M", l, u]));
                      for (
                        var h,
                          p,
                          g =
                            3 == e.length &&
                            "M" == e[0][0] &&
                            "R" == e[1][0].toUpperCase() &&
                            "Z" == e[2][0].toUpperCase(),
                          m = d,
                          v = e.length;
                        v > m;
                        m++
                      ) {
                        if (
                          (o.push((h = [])),
                          (p = e[m]),
                          (r = p[0]),
                          r != r.toUpperCase())
                        )
                          switch (((h[0] = r.toUpperCase()), h[0])) {
                            case "A":
                              (h[1] = p[1]),
                                (h[2] = p[2]),
                                (h[3] = p[3]),
                                (h[4] = p[4]),
                                (h[5] = p[5]),
                                (h[6] = +p[6] + l),
                                (h[7] = +p[7] + u);
                              break;
                            case "V":
                              h[1] = +p[1] + u;
                              break;
                            case "H":
                              h[1] = +p[1] + l;
                              break;
                            case "R":
                              for (
                                var y = [l, u].concat(p.slice(1)),
                                  x = 2,
                                  b = y.length;
                                b > x;
                                x++
                              )
                                (y[x] = +y[x] + l), (y[++x] = +y[x] + u);
                              o.pop(), (o = o.concat(L(y, g)));
                              break;
                            case "O":
                              o.pop(),
                                (y = T(l, u, p[1], p[2])),
                                y.push(y[0]),
                                (o = o.concat(y));
                              break;
                            case "U":
                              o.pop(),
                                (o = o.concat(T(l, u, p[1], p[2], p[3]))),
                                (h = ["U"].concat(o[o.length - 1].slice(-2)));
                              break;
                            case "M":
                              (c = +p[1] + l), (f = +p[2] + u);
                            default:
                              for (x = 1, b = p.length; b > x; x++)
                                h[x] = +p[x] + (x % 2 ? l : u);
                          }
                        else if ("R" == r)
                          (y = [l, u].concat(p.slice(1))),
                            o.pop(),
                            (o = o.concat(L(y, g))),
                            (h = ["R"].concat(p.slice(-2)));
                        else if ("O" == r)
                          o.pop(),
                            (y = T(l, u, p[1], p[2])),
                            y.push(y[0]),
                            (o = o.concat(y));
                        else if ("U" == r)
                          o.pop(),
                            (o = o.concat(T(l, u, p[1], p[2], p[3]))),
                            (h = ["U"].concat(o[o.length - 1].slice(-2)));
                        else
                          for (var w = 0, S = p.length; S > w; w++) h[w] = p[w];
                        if (((r = r.toUpperCase()), "O" != r))
                          switch (h[0]) {
                            case "Z":
                              (l = +c), (u = +f);
                              break;
                            case "H":
                              l = h[1];
                              break;
                            case "V":
                              u = h[1];
                              break;
                            case "M":
                              (c = h[h.length - 2]), (f = h[h.length - 1]);
                            default:
                              (l = h[h.length - 2]), (u = h[h.length - 1]);
                          }
                      }
                      return (o.toString = a), (n.abs = s(o)), o;
                    }
                    function F(t, e, n, r) {
                      return [t, e, n, r, n, r];
                    }
                    function E(t, e, n, r, i, o) {
                      var a = 1 / 3,
                        s = 2 / 3;
                      return [
                        a * t + s * n,
                        a * e + s * r,
                        a * i + s * n,
                        a * o + s * r,
                        i,
                        o,
                      ];
                    }
                    function B(e, n, r, i, o, a, s, l, u, c) {
                      var f,
                        d = (120 * G) / 180,
                        h = (G / 180) * (+o || 0),
                        p = [],
                        g = t._.cacher(function (t, e, n) {
                          var r = t * O.cos(n) - e * O.sin(n),
                            i = t * O.sin(n) + e * O.cos(n);
                          return { x: r, y: i };
                        });
                      if (c) (C = c[0]), (T = c[1]), (S = c[2]), (k = c[3]);
                      else {
                        (f = g(e, n, -h)),
                          (e = f.x),
                          (n = f.y),
                          (f = g(l, u, -h)),
                          (l = f.x),
                          (u = f.y);
                        var m =
                            (O.cos((G / 180) * o),
                            O.sin((G / 180) * o),
                            (e - l) / 2),
                          v = (n - u) / 2,
                          y = (m * m) / (r * r) + (v * v) / (i * i);
                        y > 1 && ((y = O.sqrt(y)), (r = y * r), (i = y * i));
                        var x = r * r,
                          b = i * i,
                          w =
                            (a == s ? -1 : 1) *
                            O.sqrt(
                              $(
                                (x * b - x * v * v - b * m * m) /
                                  (x * v * v + b * m * m)
                              )
                            ),
                          S = (w * r * v) / i + (e + l) / 2,
                          k = (w * -i * m) / r + (n + u) / 2,
                          C = O.asin(((n - k) / i).toFixed(9)),
                          T = O.asin(((u - k) / i).toFixed(9));
                        (C = S > e ? G - C : C),
                          (T = S > l ? G - T : T),
                          0 > C && (C = 2 * G + C),
                          0 > T && (T = 2 * G + T),
                          s && C > T && (C -= 2 * G),
                          !s && T > C && (T -= 2 * G);
                      }
                      var A = T - C;
                      if ($(A) > d) {
                        var M = T,
                          F = l,
                          E = u;
                        (T = C + d * (s && T > C ? 1 : -1)),
                          (l = S + r * O.cos(T)),
                          (u = k + i * O.sin(T)),
                          (p = B(l, u, r, i, o, 0, s, F, E, [T, M, S, k]));
                      }
                      A = T - C;
                      var z = O.cos(C),
                        N = O.sin(C),
                        _ = O.cos(T),
                        L = O.sin(T),
                        P = O.tan(A / 4),
                        j = (4 / 3) * r * P,
                        V = (4 / 3) * i * P,
                        q = [e, n],
                        I = [e + j * N, n - V * z],
                        D = [l + j * L, u - V * _],
                        R = [l, u];
                      if (
                        ((I[0] = 2 * q[0] - I[0]), (I[1] = 2 * q[1] - I[1]), c)
                      )
                        return [I, D, R].concat(p);
                      p = [I, D, R].concat(p).join().split(",");
                      for (var H = [], U = 0, X = p.length; X > U; U++)
                        H[U] =
                          U % 2
                            ? g(p[U - 1], p[U], h).y
                            : g(p[U], p[U + 1], h).x;
                      return H;
                    }
                    function z(t, e, n, r, i, o, a, s) {
                      for (
                        var l, u, c, f, d, h, p, g, m = [], v = [[], []], y = 0;
                        2 > y;
                        ++y
                      )
                        if (
                          (0 == y
                            ? ((u = 6 * t - 12 * n + 6 * i),
                              (l = -3 * t + 9 * n - 9 * i + 3 * a),
                              (c = 3 * n - 3 * t))
                            : ((u = 6 * e - 12 * r + 6 * o),
                              (l = -3 * e + 9 * r - 9 * o + 3 * s),
                              (c = 3 * r - 3 * e)),
                          $(l) < 1e-12)
                        ) {
                          if ($(u) < 1e-12) continue;
                          (f = -c / u), f > 0 && 1 > f && m.push(f);
                        } else
                          (p = u * u - 4 * c * l),
                            (g = O.sqrt(p)),
                            0 > p ||
                              ((d = (-u + g) / (2 * l)),
                              d > 0 && 1 > d && m.push(d),
                              (h = (-u - g) / (2 * l)),
                              h > 0 && 1 > h && m.push(h));
                      for (var x, b = m.length, w = b; b--; )
                        (f = m[b]),
                          (x = 1 - f),
                          (v[0][b] =
                            x * x * x * t +
                            3 * x * x * f * n +
                            3 * x * f * f * i +
                            f * f * f * a),
                          (v[1][b] =
                            x * x * x * e +
                            3 * x * x * f * r +
                            3 * x * f * f * o +
                            f * f * f * s);
                      return (
                        (v[0][w] = t),
                        (v[1][w] = e),
                        (v[0][w + 1] = a),
                        (v[1][w + 1] = s),
                        (v[0].length = v[1].length = w + 2),
                        {
                          min: { x: R.apply(0, v[0]), y: R.apply(0, v[1]) },
                          max: { x: H.apply(0, v[0]), y: H.apply(0, v[1]) },
                        }
                      );
                    }
                    function N(t, e) {
                      var n = !e && i(t);
                      if (!e && n.curve) return s(n.curve);
                      for (
                        var r = M(t),
                          o = e && M(e),
                          a = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null,
                          },
                          l = {
                            x: 0,
                            y: 0,
                            bx: 0,
                            by: 0,
                            X: 0,
                            Y: 0,
                            qx: null,
                            qy: null,
                          },
                          u = function (t, e, n) {
                            var r, i;
                            if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                            switch (
                              (!(t[0] in { T: 1, Q: 1 }) &&
                                (e.qx = e.qy = null),
                              t[0])
                            ) {
                              case "M":
                                (e.X = t[1]), (e.Y = t[2]);
                                break;
                              case "A":
                                t = ["C"].concat(
                                  B.apply(0, [e.x, e.y].concat(t.slice(1)))
                                );
                                break;
                              case "S":
                                "C" == n || "S" == n
                                  ? ((r = 2 * e.x - e.bx), (i = 2 * e.y - e.by))
                                  : ((r = e.x), (i = e.y)),
                                  (t = ["C", r, i].concat(t.slice(1)));
                                break;
                              case "T":
                                "Q" == n || "T" == n
                                  ? ((e.qx = 2 * e.x - e.qx),
                                    (e.qy = 2 * e.y - e.qy))
                                  : ((e.qx = e.x), (e.qy = e.y)),
                                  (t = ["C"].concat(
                                    E(e.x, e.y, e.qx, e.qy, t[1], t[2])
                                  ));
                                break;
                              case "Q":
                                (e.qx = t[1]),
                                  (e.qy = t[2]),
                                  (t = ["C"].concat(
                                    E(e.x, e.y, t[1], t[2], t[3], t[4])
                                  ));
                                break;
                              case "L":
                                t = ["C"].concat(F(e.x, e.y, t[1], t[2]));
                                break;
                              case "H":
                                t = ["C"].concat(F(e.x, e.y, t[1], e.y));
                                break;
                              case "V":
                                t = ["C"].concat(F(e.x, e.y, e.x, t[1]));
                                break;
                              case "Z":
                                t = ["C"].concat(F(e.x, e.y, e.X, e.Y));
                            }
                            return t;
                          },
                          c = function (t, e) {
                            if (t[e].length > 7) {
                              t[e].shift();
                              for (var n = t[e]; n.length; )
                                (d[e] = "A"),
                                  o && (h[e] = "A"),
                                  t.splice(
                                    e++,
                                    0,
                                    ["C"].concat(n.splice(0, 6))
                                  );
                              t.splice(e, 1),
                                (v = H(r.length, (o && o.length) || 0));
                            }
                          },
                          f = function (t, e, n, i, a) {
                            t &&
                              e &&
                              "M" == t[a][0] &&
                              "M" != e[a][0] &&
                              (e.splice(a, 0, ["M", i.x, i.y]),
                              (n.bx = 0),
                              (n.by = 0),
                              (n.x = t[a][1]),
                              (n.y = t[a][2]),
                              (v = H(r.length, (o && o.length) || 0)));
                          },
                          d = [],
                          h = [],
                          p = "",
                          g = "",
                          m = 0,
                          v = H(r.length, (o && o.length) || 0);
                        v > m;
                        m++
                      ) {
                        r[m] && (p = r[m][0]),
                          "C" != p && ((d[m] = p), m && (g = d[m - 1])),
                          (r[m] = u(r[m], a, g)),
                          "A" != d[m] && "C" == p && (d[m] = "C"),
                          c(r, m),
                          o &&
                            (o[m] && (p = o[m][0]),
                            "C" != p && ((h[m] = p), m && (g = h[m - 1])),
                            (o[m] = u(o[m], l, g)),
                            "A" != h[m] && "C" == p && (h[m] = "C"),
                            c(o, m)),
                          f(r, o, a, l, m),
                          f(o, r, l, a, m);
                        var y = r[m],
                          x = o && o[m],
                          b = y.length,
                          w = o && x.length;
                        (a.x = y[b - 2]),
                          (a.y = y[b - 1]),
                          (a.bx = D(y[b - 4]) || a.x),
                          (a.by = D(y[b - 3]) || a.y),
                          (l.bx = o && (D(x[w - 4]) || l.x)),
                          (l.by = o && (D(x[w - 3]) || l.y)),
                          (l.x = o && x[w - 2]),
                          (l.y = o && x[w - 1]);
                      }
                      return o || (n.curve = s(r)), o ? [r, o] : r;
                    }
                    function _(t, e) {
                      if (!e) return t;
                      var n, r, i, o, a, s, l;
                      for (t = N(t), i = 0, a = t.length; a > i; i++)
                        for (l = t[i], o = 1, s = l.length; s > o; o += 2)
                          (n = e.x(l[o], l[o + 1])),
                            (r = e.y(l[o], l[o + 1])),
                            (l[o] = n),
                            (l[o + 1] = r);
                      return t;
                    }
                    function L(t, e) {
                      for (
                        var n = [], r = 0, i = t.length;
                        i - 2 * !e > r;
                        r += 2
                      ) {
                        var o = [
                          { x: +t[r - 2], y: +t[r - 1] },
                          { x: +t[r], y: +t[r + 1] },
                          { x: +t[r + 2], y: +t[r + 3] },
                          { x: +t[r + 4], y: +t[r + 5] },
                        ];
                        e
                          ? r
                            ? i - 4 == r
                              ? (o[3] = { x: +t[0], y: +t[1] })
                              : i - 2 == r &&
                                ((o[2] = { x: +t[0], y: +t[1] }),
                                (o[3] = { x: +t[2], y: +t[3] }))
                            : (o[0] = { x: +t[i - 2], y: +t[i - 1] })
                          : i - 4 == r
                          ? (o[3] = o[2])
                          : r || (o[0] = { x: +t[r], y: +t[r + 1] }),
                          n.push([
                            "C",
                            (-o[0].x + 6 * o[1].x + o[2].x) / 6,
                            (-o[0].y + 6 * o[1].y + o[2].y) / 6,
                            (o[1].x + 6 * o[2].x - o[3].x) / 6,
                            (o[1].y + 6 * o[2].y - o[3].y) / 6,
                            o[2].x,
                            o[2].y,
                          ]);
                      }
                      return n;
                    }
                    var P = e.prototype,
                      j = t.is,
                      V = t._.clone,
                      q = "hasOwnProperty",
                      I = /,?([a-z]),?/gi,
                      D = parseFloat,
                      O = Math,
                      G = O.PI,
                      R = O.min,
                      H = O.max,
                      U = O.pow,
                      $ = O.abs,
                      X = u(1),
                      W = u(),
                      Y = u(0, 1),
                      Z = t._unit2px,
                      Q = {
                        path: function (t) {
                          return t.attr("path");
                        },
                        circle: function (t) {
                          var e = Z(t);
                          return T(e.cx, e.cy, e.r);
                        },
                        ellipse: function (t) {
                          var e = Z(t);
                          return T(e.cx || 0, e.cy || 0, e.rx, e.ry);
                        },
                        rect: function (t) {
                          var e = Z(t);
                          return C(
                            e.x || 0,
                            e.y || 0,
                            e.width,
                            e.height,
                            e.rx,
                            e.ry
                          );
                        },
                        image: function (t) {
                          var e = Z(t);
                          return C(e.x || 0, e.y || 0, e.width, e.height);
                        },
                        line: function (t) {
                          return (
                            "M" +
                            [
                              t.attr("x1") || 0,
                              t.attr("y1") || 0,
                              t.attr("x2"),
                              t.attr("y2"),
                            ]
                          );
                        },
                        polyline: function (t) {
                          return "M" + t.attr("points");
                        },
                        polygon: function (t) {
                          return "M" + t.attr("points") + "z";
                        },
                        deflt: function (t) {
                          var e = t.node.getBBox();
                          return C(e.x, e.y, e.width, e.height);
                        },
                      };
                    (t.path = i),
                      (t.path.getTotalLength = X),
                      (t.path.getPointAtLength = W),
                      (t.path.getSubpath = function (t, e, n) {
                        if (this.getTotalLength(t) - n < 1e-6)
                          return Y(t, e).end;
                        var r = Y(t, n, 1);
                        return e ? Y(r, e).end : r;
                      }),
                      (P.getTotalLength = function () {
                        return this.node.getTotalLength
                          ? this.node.getTotalLength()
                          : void 0;
                      }),
                      (P.getPointAtLength = function (t) {
                        return W(this.attr("d"), t);
                      }),
                      (P.getSubpath = function (e, n) {
                        return t.path.getSubpath(this.attr("d"), e, n);
                      }),
                      (t._.box = o),
                      (t.path.findDotsAtSegment = c),
                      (t.path.bezierBBox = f),
                      (t.path.isPointInsideBBox = d),
                      (t.closest = function (e, n, r, i) {
                        for (
                          var a = 100,
                            s = o(e - a / 2, n - a / 2, a, a),
                            l = [],
                            u = r[0].hasOwnProperty("x")
                              ? function (t) {
                                  return { x: r[t].x, y: r[t].y };
                                }
                              : function (t) {
                                  return { x: r[t], y: i[t] };
                                },
                            c = 0;
                          1e6 >= a && !c;

                        ) {
                          for (var f = 0, h = r.length; h > f; f++) {
                            var p = u(f);
                            if (d(s, p.x, p.y)) {
                              c++, l.push(p);
                              break;
                            }
                          }
                          c || ((a *= 2), (s = o(e - a / 2, n - a / 2, a, a)));
                        }
                        if (1e6 != a) {
                          var g,
                            m = 1 / 0;
                          for (f = 0, h = l.length; h > f; f++) {
                            var v = t.len(e, n, l[f].x, l[f].y);
                            m > v && ((m = v), (l[f].len = v), (g = l[f]));
                          }
                          return g;
                        }
                      }),
                      (t.path.isBBoxIntersect = h),
                      (t.path.intersection = x),
                      (t.path.intersectionNumber = b),
                      (t.path.isPointInside = S),
                      (t.path.getBBox = k),
                      (t.path.get = Q),
                      (t.path.toRelative = A),
                      (t.path.toAbsolute = M),
                      (t.path.toCubic = N),
                      (t.path.map = _),
                      (t.path.toString = a),
                      (t.path.clone = s);
                  }),
                  r.plugin(function (t, r, i, o) {
                    var a = Math.max,
                      s = Math.min,
                      l = function (t) {
                        if (
                          ((this.items = []),
                          (this.bindings = {}),
                          (this.length = 0),
                          (this.type = "set"),
                          t)
                        )
                          for (var e = 0, n = t.length; n > e; e++)
                            t[e] &&
                              ((this[this.items.length] = this.items[
                                this.items.length
                              ] =
                                t[e]),
                              this.length++);
                      },
                      u = l.prototype;
                    (u.push = function () {
                      for (var t, e, n = 0, r = arguments.length; r > n; n++)
                        (t = arguments[n]),
                          t &&
                            ((e = this.items.length),
                            (this[e] = this.items[e] = t),
                            this.length++);
                      return this;
                    }),
                      (u.pop = function () {
                        return (
                          this.length && delete this[this.length--],
                          this.items.pop()
                        );
                      }),
                      (u.forEach = function (t, e) {
                        for (var n = 0, r = this.items.length; r > n; n++)
                          if (t.call(e, this.items[n], n) === !1) return this;
                        return this;
                      }),
                      (u.animate = function (r, i, o, a) {
                        "function" != typeof o ||
                          o.length ||
                          ((a = o), (o = n.linear)),
                          r instanceof t._.Animation &&
                            ((a = r.callback),
                            (o = r.easing),
                            (i = o.dur),
                            (r = r.attr));
                        var s = arguments;
                        if (t.is(r, "array") && t.is(s[s.length - 1], "array"))
                          var l = !0;
                        var u,
                          c = function () {
                            u ? (this.b = u) : (u = this.b);
                          },
                          f = 0,
                          d = this,
                          h =
                            a &&
                            function () {
                              ++f == d.length && a.call(this);
                            };
                        return this.forEach(function (t, n) {
                          e.once("snap.animcreated." + t.id, c),
                            l
                              ? s[n] && t.animate.apply(t, s[n])
                              : t.animate(r, i, o, h);
                        });
                      }),
                      (u.remove = function () {
                        for (; this.length; ) this.pop().remove();
                        return this;
                      }),
                      (u.bind = function (t, e, n) {
                        var r = {};
                        if ("function" == typeof e) this.bindings[t] = e;
                        else {
                          var i = n || t;
                          this.bindings[t] = function (t) {
                            (r[i] = t), e.attr(r);
                          };
                        }
                        return this;
                      }),
                      (u.attr = function (t) {
                        var e = {};
                        for (var n in t)
                          this.bindings[n]
                            ? this.bindings[n](t[n])
                            : (e[n] = t[n]);
                        for (var r = 0, i = this.items.length; i > r; r++)
                          this.items[r].attr(e);
                        return this;
                      }),
                      (u.clear = function () {
                        for (; this.length; ) this.pop();
                      }),
                      (u.splice = function (t, e, n) {
                        (t = 0 > t ? a(this.length + t, 0) : t),
                          (e = a(0, s(this.length - t, e)));
                        var r,
                          i = [],
                          o = [],
                          u = [];
                        for (r = 2; r < arguments.length; r++)
                          u.push(arguments[r]);
                        for (r = 0; e > r; r++) o.push(this[t + r]);
                        for (; r < this.length - t; r++) i.push(this[t + r]);
                        var c = u.length;
                        for (r = 0; r < c + i.length; r++)
                          this.items[t + r] = this[t + r] =
                            c > r ? u[r] : i[r - c];
                        for (
                          r = this.items.length = this.length -= e - c;
                          this[r];

                        )
                          delete this[r++];
                        return new l(o);
                      }),
                      (u.exclude = function (t) {
                        for (var e = 0, n = this.length; n > e; e++)
                          if (this[e] == t) return this.splice(e, 1), !0;
                        return !1;
                      }),
                      (u.insertAfter = function (t) {
                        for (var e = this.items.length; e--; )
                          this.items[e].insertAfter(t);
                        return this;
                      }),
                      (u.getBBox = function () {
                        for (
                          var t = [],
                            e = [],
                            n = [],
                            r = [],
                            i = this.items.length;
                          i--;

                        )
                          if (!this.items[i].removed) {
                            var o = this.items[i].getBBox();
                            t.push(o.x),
                              e.push(o.y),
                              n.push(o.x + o.width),
                              r.push(o.y + o.height);
                          }
                        return (
                          (t = s.apply(0, t)),
                          (e = s.apply(0, e)),
                          (n = a.apply(0, n)),
                          (r = a.apply(0, r)),
                          {
                            x: t,
                            y: e,
                            x2: n,
                            y2: r,
                            width: n - t,
                            height: r - e,
                            cx: t + (n - t) / 2,
                            cy: e + (r - e) / 2,
                          }
                        );
                      }),
                      (u.clone = function (t) {
                        t = new l();
                        for (var e = 0, n = this.items.length; n > e; e++)
                          t.push(this.items[e].clone());
                        return t;
                      }),
                      (u.toString = function () {
                        return "Snap‘s set";
                      }),
                      (u.type = "set"),
                      (t.Set = l),
                      (t.set = function () {
                        var t = new l();
                        return (
                          arguments.length &&
                            t.push.apply(
                              t,
                              Array.prototype.slice.call(arguments, 0)
                            ),
                          t
                        );
                      });
                  }),
                  r.plugin(function (t, n, r, i) {
                    function o(t) {
                      var e = t[0];
                      switch (e.toLowerCase()) {
                        case "t":
                          return [e, 0, 0];
                        case "m":
                          return [e, 1, 0, 0, 1, 0, 0];
                        case "r":
                          return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                        case "s":
                          return 5 == t.length
                            ? [e, 1, 1, t[3], t[4]]
                            : 3 == t.length
                            ? [e, 1, 1]
                            : [e, 1];
                      }
                    }
                    function a(e, n, r) {
                      (n = v(n).replace(/\.{3}|\u2026/g, e)),
                        (e = t.parseTransformString(e) || []),
                        (n = t.parseTransformString(n) || []);
                      for (
                        var i,
                          a,
                          s,
                          l,
                          u = Math.max(e.length, n.length),
                          c = [],
                          h = [],
                          p = 0;
                        u > p;
                        p++
                      ) {
                        if (
                          ((s = e[p] || o(n[p])),
                          (l = n[p] || o(s)),
                          s[0] != l[0] ||
                            ("r" == s[0].toLowerCase() &&
                              (s[2] != l[2] || s[3] != l[3])) ||
                            ("s" == s[0].toLowerCase() &&
                              (s[3] != l[3] || s[4] != l[4])))
                        ) {
                          (e = t._.transform2matrix(e, r())),
                            (n = t._.transform2matrix(n, r())),
                            (c = [["m", e.a, e.b, e.c, e.d, e.e, e.f]]),
                            (h = [["m", n.a, n.b, n.c, n.d, n.e, n.f]]);
                          break;
                        }
                        for (
                          c[p] = [],
                            h[p] = [],
                            i = 0,
                            a = Math.max(s.length, l.length);
                          a > i;
                          i++
                        )
                          i in s && (c[p][i] = s[i]),
                            i in l && (h[p][i] = l[i]);
                      }
                      return { from: d(c), to: d(h), f: f(c) };
                    }
                    function s(t) {
                      return t;
                    }
                    function l(t) {
                      return function (e) {
                        return +e.toFixed(3) + t;
                      };
                    }
                    function u(t) {
                      return t.join(" ");
                    }
                    function c(e) {
                      return t.rgb(e[0], e[1], e[2]);
                    }
                    function f(t) {
                      var e,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s = 0,
                        l = [];
                      for (e = 0, n = t.length; n > e; e++) {
                        for (
                          o = "[",
                            a = ['"' + t[e][0] + '"'],
                            r = 1,
                            i = t[e].length;
                          i > r;
                          r++
                        )
                          a[r] = "val[" + s++ + "]";
                        (o += a + "]"), (l[e] = o);
                      }
                      return Function(
                        "val",
                        "return Snap.path.toString.call([" + l + "])"
                      );
                    }
                    function d(t) {
                      for (var e = [], n = 0, r = t.length; r > n; n++)
                        for (var i = 1, o = t[n].length; o > i; i++)
                          e.push(t[n][i]);
                      return e;
                    }
                    function h(t) {
                      return isFinite(parseFloat(t));
                    }
                    function p(e, n) {
                      return t.is(e, "array") && t.is(n, "array")
                        ? e.toString() == n.toString()
                        : !1;
                    }
                    var g = {},
                      m = /[a-z]+$/i,
                      v = String;
                    (g.stroke = g.fill = "colour"),
                      (n.prototype.equal = function (t, n) {
                        return e("snap.util.equal", this, t, n).firstDefined();
                      }),
                      e.on("snap.util.equal", function (e, n) {
                        var r,
                          i,
                          o = v(this.attr(e) || ""),
                          y = this;
                        if (h(o) && h(n))
                          return {
                            from: parseFloat(o),
                            to: parseFloat(n),
                            f: s,
                          };
                        if ("colour" == g[e])
                          return (
                            (r = t.color(o)),
                            (i = t.color(n)),
                            {
                              from: [r.r, r.g, r.b, r.opacity],
                              to: [i.r, i.g, i.b, i.opacity],
                              f: c,
                            }
                          );
                        if ("viewBox" == e)
                          return (
                            (r = this.attr(e).vb.split(" ").map(Number)),
                            (i = n.split(" ").map(Number)),
                            { from: r, to: i, f: u }
                          );
                        if (
                          "transform" == e ||
                          "gradientTransform" == e ||
                          "patternTransform" == e
                        )
                          return (
                            n instanceof t.Matrix &&
                              (n = n.toTransformString()),
                            t._.rgTransform.test(n) ||
                              (n = t._.svgTransform2string(n)),
                            a(o, n, function () {
                              return y.getBBox(1);
                            })
                          );
                        if ("d" == e || "path" == e)
                          return (
                            (r = t.path.toCubic(o, n)),
                            { from: d(r[0]), to: d(r[1]), f: f(r[0]) }
                          );
                        if ("points" == e)
                          return (
                            (r = v(o).split(t._.separator)),
                            (i = v(n).split(t._.separator)),
                            {
                              from: r,
                              to: i,
                              f: function (t) {
                                return t;
                              },
                            }
                          );
                        var x = o.match(m),
                          b = v(n).match(m);
                        return x && p(x, b)
                          ? { from: parseFloat(o), to: parseFloat(n), f: l(x) }
                          : { from: this.asPX(e), to: this.asPX(e, n), f: s };
                      });
                  }),
                  r.plugin(function (t, n, r, i) {
                    for (
                      var o = n.prototype,
                        a = "hasOwnProperty",
                        s = ("createTouch" in i.doc),
                        l = [
                          "click",
                          "dblclick",
                          "mousedown",
                          "mousemove",
                          "mouseout",
                          "mouseover",
                          "mouseup",
                          "touchstart",
                          "touchmove",
                          "touchend",
                          "touchcancel",
                        ],
                        u = {
                          mousedown: "touchstart",
                          mousemove: "touchmove",
                          mouseup: "touchend",
                        },
                        c = function (t, e) {
                          var n = "y" == t ? "scrollTop" : "scrollLeft",
                            r = e && e.node ? e.node.ownerDocument : i.doc;
                          return r[
                            (n in r.documentElement)
                              ? "documentElement"
                              : "body"
                          ][n];
                        },
                        f = function () {
                          return this.originalEvent.preventDefault();
                        },
                        d = function () {
                          return this.originalEvent.stopPropagation();
                        },
                        h = function (t, e, n, r) {
                          var i = s && u[e] ? u[e] : e,
                            o = function (i) {
                              var o = c("y", r),
                                l = c("x", r);
                              if (s && u[a](e))
                                for (
                                  var h = 0,
                                    p =
                                      i.targetTouches && i.targetTouches.length;
                                  p > h;
                                  h++
                                )
                                  if (
                                    i.targetTouches[h].target == t ||
                                    t.contains(i.targetTouches[h].target)
                                  ) {
                                    var g = i;
                                    (i = i.targetTouches[h]),
                                      (i.originalEvent = g),
                                      (i.preventDefault = f),
                                      (i.stopPropagation = d);
                                    break;
                                  }
                              var m = i.clientX + l,
                                v = i.clientY + o;
                              return n.call(r, i, m, v);
                            };
                          return (
                            e !== i && t.addEventListener(e, o, !1),
                            t.addEventListener(i, o, !1),
                            function () {
                              return (
                                e !== i && t.removeEventListener(e, o, !1),
                                t.removeEventListener(i, o, !1),
                                !0
                              );
                            }
                          );
                        },
                        p = [],
                        g = function (t) {
                          for (
                            var n,
                              r = t.clientX,
                              i = t.clientY,
                              o = c("y"),
                              a = c("x"),
                              l = p.length;
                            l--;

                          ) {
                            if (((n = p[l]), s)) {
                              for (
                                var u, f = t.touches && t.touches.length;
                                f--;

                              )
                                if (
                                  ((u = t.touches[f]),
                                  u.identifier == n.el._drag.id ||
                                    n.el.node.contains(u.target))
                                ) {
                                  (r = u.clientX),
                                    (i = u.clientY),
                                    (t.originalEvent
                                      ? t.originalEvent
                                      : t
                                    ).preventDefault();
                                  break;
                                }
                            } else t.preventDefault();
                            {
                              var d = n.el.node;
                              d.nextSibling, d.parentNode, d.style.display;
                            }
                            (r += a),
                              (i += o),
                              e(
                                "snap.drag.move." + n.el.id,
                                n.move_scope || n.el,
                                r - n.el._drag.x,
                                i - n.el._drag.y,
                                r,
                                i,
                                t
                              );
                          }
                        },
                        m = function (n) {
                          t.unmousemove(g).unmouseup(m);
                          for (var r, i = p.length; i--; )
                            (r = p[i]),
                              (r.el._drag = {}),
                              e(
                                "snap.drag.end." + r.el.id,
                                r.end_scope ||
                                  r.start_scope ||
                                  r.move_scope ||
                                  r.el,
                                n
                              ),
                              e.off("snap.drag.*." + r.el.id);
                          p = [];
                        },
                        v = l.length;
                      v--;

                    )
                      !(function (e) {
                        (t[e] = o[e] =
                          function (n, r) {
                            if (t.is(n, "function"))
                              (this.events = this.events || []),
                                this.events.push({
                                  name: e,
                                  f: n,
                                  unbind: h(
                                    this.node || document,
                                    e,
                                    n,
                                    r || this
                                  ),
                                });
                            else
                              for (
                                var i = 0, o = this.events.length;
                                o > i;
                                i++
                              )
                                if (this.events[i].name == e)
                                  try {
                                    this.events[i].f.call(this);
                                  } catch (a) {}
                            return this;
                          }),
                          (t["un" + e] = o["un" + e] =
                            function (t) {
                              for (
                                var n = this.events || [], r = n.length;
                                r--;

                              )
                                if (n[r].name == e && (n[r].f == t || !t))
                                  return (
                                    n[r].unbind(),
                                    n.splice(r, 1),
                                    !n.length && delete this.events,
                                    this
                                  );
                              return this;
                            });
                      })(l[v]);
                    (o.hover = function (t, e, n, r) {
                      return this.mouseover(t, n).mouseout(e, r || n);
                    }),
                      (o.unhover = function (t, e) {
                        return this.unmouseover(t).unmouseout(e);
                      });
                    var y = [];
                    (o.drag = function (n, r, i, o, a, s) {
                      function l(l, u, f) {
                        (l.originalEvent || l).preventDefault(),
                          (c._drag.x = u),
                          (c._drag.y = f),
                          (c._drag.id = l.identifier),
                          !p.length && t.mousemove(g).mouseup(m),
                          p.push({
                            el: c,
                            move_scope: o,
                            start_scope: a,
                            end_scope: s,
                          }),
                          r && e.on("snap.drag.start." + c.id, r),
                          n && e.on("snap.drag.move." + c.id, n),
                          i && e.on("snap.drag.end." + c.id, i),
                          e("snap.drag.start." + c.id, a || o || c, u, f, l);
                      }
                      function u(t, n, r) {
                        e("snap.draginit." + c.id, c, t, n, r);
                      }
                      var c = this;
                      if (!arguments.length) {
                        var f;
                        return c.drag(
                          function (t, e) {
                            this.attr({
                              transform: f + (f ? "T" : "t") + [t, e],
                            });
                          },
                          function () {
                            f = this.transform().local;
                          }
                        );
                      }
                      return (
                        e.on("snap.draginit." + c.id, l),
                        (c._drag = {}),
                        y.push({ el: c, start: l, init: u }),
                        c.mousedown(u),
                        c
                      );
                    }),
                      (o.undrag = function () {
                        for (var n = y.length; n--; )
                          y[n].el == this &&
                            (this.unmousedown(y[n].init),
                            y.splice(n, 1),
                            e.unbind("snap.drag.*." + this.id),
                            e.unbind("snap.draginit." + this.id));
                        return !y.length && t.unmousemove(g).unmouseup(m), this;
                      });
                  }),
                  r.plugin(function (t, n, r, i) {
                    var o = (n.prototype, r.prototype),
                      a = /^\s*url\((.+)\)/,
                      s = String,
                      l = t._.$;
                    (t.filter = {}),
                      (o.filter = function (e) {
                        var r = this;
                        "svg" != r.type && (r = r.paper);
                        var i = t.parse(s(e)),
                          o = t._.id(),
                          a =
                            (r.node.offsetWidth,
                            r.node.offsetHeight,
                            l("filter"));
                        return (
                          l(a, { id: o, filterUnits: "userSpaceOnUse" }),
                          a.appendChild(i.node),
                          r.defs.appendChild(a),
                          new n(a)
                        );
                      }),
                      e.on("snap.util.getattr.filter", function () {
                        e.stop();
                        var n = l(this.node, "filter");
                        if (n) {
                          var r = s(n).match(a);
                          return r && t.select(r[1]);
                        }
                      }),
                      e.on("snap.util.attr.filter", function (r) {
                        if (r instanceof n && "filter" == r.type) {
                          e.stop();
                          var i = r.node.id;
                          i || (l(r.node, { id: r.id }), (i = r.id)),
                            l(this.node, { filter: t.url(i) });
                        }
                        (r && "none" != r) ||
                          (e.stop(), this.node.removeAttribute("filter"));
                      }),
                      (t.filter.blur = function (e, n) {
                        null == e && (e = 2);
                        var r = null == n ? e : [e, n];
                        return t.format(
                          '<feGaussianBlur stdDeviation="{def}"/>',
                          { def: r }
                        );
                      }),
                      (t.filter.blur.toString = function () {
                        return this();
                      }),
                      (t.filter.shadow = function (e, n, r, i, o) {
                        return (
                          "string" == typeof r && ((i = r), (o = i), (r = 4)),
                          "string" != typeof i && ((o = i), (i = "#000")),
                          (i = i || "#000"),
                          null == r && (r = 4),
                          null == o && (o = 1),
                          null == e && ((e = 0), (n = 2)),
                          null == n && (n = e),
                          (i = t.color(i)),
                          t.format(
                            '<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
                            { color: i, dx: e, dy: n, blur: r, opacity: o }
                          )
                        );
                      }),
                      (t.filter.shadow.toString = function () {
                        return this();
                      }),
                      (t.filter.grayscale = function (e) {
                        return (
                          null == e && (e = 1),
                          t.format(
                            '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
                            {
                              a: 0.2126 + 0.7874 * (1 - e),
                              b: 0.7152 - 0.7152 * (1 - e),
                              c: 0.0722 - 0.0722 * (1 - e),
                              d: 0.2126 - 0.2126 * (1 - e),
                              e: 0.7152 + 0.2848 * (1 - e),
                              f: 0.0722 - 0.0722 * (1 - e),
                              g: 0.2126 - 0.2126 * (1 - e),
                              h: 0.0722 + 0.9278 * (1 - e),
                            }
                          )
                        );
                      }),
                      (t.filter.grayscale.toString = function () {
                        return this();
                      }),
                      (t.filter.sepia = function (e) {
                        return (
                          null == e && (e = 1),
                          t.format(
                            '<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
                            {
                              a: 0.393 + 0.607 * (1 - e),
                              b: 0.769 - 0.769 * (1 - e),
                              c: 0.189 - 0.189 * (1 - e),
                              d: 0.349 - 0.349 * (1 - e),
                              e: 0.686 + 0.314 * (1 - e),
                              f: 0.168 - 0.168 * (1 - e),
                              g: 0.272 - 0.272 * (1 - e),
                              h: 0.534 - 0.534 * (1 - e),
                              i: 0.131 + 0.869 * (1 - e),
                            }
                          )
                        );
                      }),
                      (t.filter.sepia.toString = function () {
                        return this();
                      }),
                      (t.filter.saturate = function (e) {
                        return (
                          null == e && (e = 1),
                          t.format(
                            '<feColorMatrix type="saturate" values="{amount}"/>',
                            { amount: 1 - e }
                          )
                        );
                      }),
                      (t.filter.saturate.toString = function () {
                        return this();
                      }),
                      (t.filter.hueRotate = function (e) {
                        return (
                          (e = e || 0),
                          t.format(
                            '<feColorMatrix type="hueRotate" values="{angle}"/>',
                            { angle: e }
                          )
                        );
                      }),
                      (t.filter.hueRotate.toString = function () {
                        return this();
                      }),
                      (t.filter.invert = function (e) {
                        return (
                          null == e && (e = 1),
                          t.format(
                            '<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
                            { amount: e, amount2: 1 - e }
                          )
                        );
                      }),
                      (t.filter.invert.toString = function () {
                        return this();
                      }),
                      (t.filter.brightness = function (e) {
                        return (
                          null == e && (e = 1),
                          t.format(
                            '<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
                            { amount: e }
                          )
                        );
                      }),
                      (t.filter.brightness.toString = function () {
                        return this();
                      }),
                      (t.filter.contrast = function (e) {
                        return (
                          null == e && (e = 1),
                          t.format(
                            '<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
                            { amount: e, amount2: 0.5 - e / 2 }
                          )
                        );
                      }),
                      (t.filter.contrast.toString = function () {
                        return this();
                      });
                  }),
                  r.plugin(function (t, e, n, r, i) {
                    var o = t._.box,
                      a = t.is,
                      s = /^[^a-z]*([tbmlrc])/i,
                      l = function () {
                        return "T" + this.dx + "," + this.dy;
                      };
                    (e.prototype.getAlign = function (t, e) {
                      null == e && a(t, "string") && ((e = t), (t = null)),
                        (t = t || this.paper);
                      var n = t.getBBox ? t.getBBox() : o(t),
                        r = this.getBBox(),
                        i = {};
                      switch (
                        ((e = e && e.match(s)),
                        (e = e ? e[1].toLowerCase() : "c"))
                      ) {
                        case "t":
                          (i.dx = 0), (i.dy = n.y - r.y);
                          break;
                        case "b":
                          (i.dx = 0), (i.dy = n.y2 - r.y2);
                          break;
                        case "m":
                          (i.dx = 0), (i.dy = n.cy - r.cy);
                          break;
                        case "l":
                          (i.dx = n.x - r.x), (i.dy = 0);
                          break;
                        case "r":
                          (i.dx = n.x2 - r.x2), (i.dy = 0);
                          break;
                        default:
                          (i.dx = n.cx - r.cx), (i.dy = 0);
                      }
                      return (i.toString = l), i;
                    }),
                      (e.prototype.align = function (t, e) {
                        return this.transform("..." + this.getAlign(t, e));
                      });
                  }),
                  r
                );
              }),
              o("undefined" != typeof Snap ? Snap : window.Snap);
          }.call(n, void 0, void 0, void 0, void 0, function (t) {
            e.exports = t;
          }));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    3: [
      function (t, e, n) {
        (function (t) {
          (function (t, e, n, r, i) {
            window.matchMedia ||
              (window.matchMedia = (function () {
                "use strict";
                var t = window.styleMedia || window.media;
                if (!t) {
                  var e = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    r = null;
                  (e.type = "text/css"),
                    (e.id = "matchmediajs-test"),
                    n.parentNode.insertBefore(e, n),
                    (r =
                      ("getComputedStyle" in window &&
                        window.getComputedStyle(e, null)) ||
                      e.currentStyle),
                    (t = {
                      matchMedium: function (t) {
                        var n =
                          "@media " +
                          t +
                          "{ #matchmediajs-test { width: 1px; } }";
                        return (
                          e.styleSheet
                            ? (e.styleSheet.cssText = n)
                            : (e.textContent = n),
                          "1px" === r.width
                        );
                      },
                    });
                }
                return function (e) {
                  return {
                    matches: t.matchMedium(e || "all"),
                    media: e || "all",
                  };
                };
              })()),
              (function (e, n, i) {
                "use strict";
                function o(n) {
                  "object" == typeof t && "object" == typeof t.exports
                    ? (t.exports = n)
                    : "function" == typeof r &&
                      r.amd &&
                      r("picturefill", function () {
                        return n;
                      }),
                    "object" == typeof e && (e.picturefill = n);
                }
                function a(t) {
                  var e,
                    n,
                    r,
                    i,
                    o,
                    a = t || {};
                  e = a.elements || l.getAllElements();
                  for (var s = 0, c = e.length; c > s; s++)
                    if (
                      ((n = e[s]),
                      (r = n.parentNode),
                      (i = void 0),
                      (o = void 0),
                      "IMG" === n.nodeName.toUpperCase() &&
                        (n[l.ns] || (n[l.ns] = {}),
                        a.reevaluate || !n[l.ns].evaluated))
                    ) {
                      if (r && "PICTURE" === r.nodeName.toUpperCase()) {
                        if (
                          (l.removeVideoShim(r),
                          (i = l.getMatch(n, r)),
                          i === !1)
                        )
                          continue;
                      } else i = void 0;
                      ((r && "PICTURE" === r.nodeName.toUpperCase()) ||
                        (!l.sizesSupported && n.srcset && u.test(n.srcset))) &&
                        l.dodgeSrcset(n),
                        i
                          ? ((o = l.processSourceSet(i)),
                            l.applyBestCandidate(o, n))
                          : ((o = l.processSourceSet(n)),
                            (void 0 === n.srcset || n[l.ns].srcset) &&
                              l.applyBestCandidate(o, n)),
                        (n[l.ns].evaluated = !0);
                    }
                }
                function s() {
                  function t() {
                    clearTimeout(r), (r = setTimeout(o, 60));
                  }
                  l.initTypeDetects(), a();
                  var r,
                    i = setInterval(function () {
                      return (
                        a(),
                        /^loaded|^i|^c/.test(n.readyState)
                          ? void clearInterval(i)
                          : void 0
                      );
                    }, 250),
                    o = function () {
                      a({ reevaluate: !0 });
                    };
                  e.addEventListener
                    ? e.addEventListener("resize", t, !1)
                    : e.attachEvent && e.attachEvent("onresize", t);
                }
                if (e.HTMLPictureElement) return void o(function () {});
                n.createElement("picture");
                var l = e.picturefill || {},
                  u = /\s+\+?\d+(e\d+)?w/;
                (l.ns = "picturefill"),
                  (function () {
                    (l.srcsetSupported = "srcset" in i),
                      (l.sizesSupported = "sizes" in i),
                      (l.curSrcSupported = "currentSrc" in i);
                  })(),
                  (l.trim = function (t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                  }),
                  (l.makeUrl = (function () {
                    var t = n.createElement("a");
                    return function (e) {
                      return (t.href = e), t.href;
                    };
                  })()),
                  (l.restrictsMixedContent = function () {
                    return "https:" === e.location.protocol;
                  }),
                  (l.matchesMedia = function (t) {
                    return e.matchMedia && e.matchMedia(t).matches;
                  }),
                  (l.getDpr = function () {
                    return e.devicePixelRatio || 1;
                  }),
                  (l.getWidthFromLength = function (t) {
                    var e;
                    if (
                      !t ||
                      t.indexOf("%") > -1 != !1 ||
                      !(parseFloat(t) > 0 || t.indexOf("calc(") > -1)
                    )
                      return !1;
                    (t = t.replace("vw", "%")),
                      l.lengthEl ||
                        ((l.lengthEl = n.createElement("div")),
                        (l.lengthEl.style.cssText =
                          "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden"),
                        (l.lengthEl.className = "helper-from-picturefill-js")),
                      (l.lengthEl.style.width = "0px");
                    try {
                      l.lengthEl.style.width = t;
                    } catch (r) {}
                    return (
                      n.body.appendChild(l.lengthEl),
                      (e = l.lengthEl.offsetWidth),
                      0 >= e && (e = !1),
                      n.body.removeChild(l.lengthEl),
                      e
                    );
                  }),
                  (l.detectTypeSupport = function (t, n) {
                    var r = new e.Image();
                    return (
                      (r.onerror = function () {
                        (l.types[t] = !1), a();
                      }),
                      (r.onload = function () {
                        (l.types[t] = 1 === r.width), a();
                      }),
                      (r.src = n),
                      "pending"
                    );
                  }),
                  (l.types = l.types || {}),
                  (l.initTypeDetects = function () {
                    (l.types["image/jpeg"] = !0),
                      (l.types["image/gif"] = !0),
                      (l.types["image/png"] = !0),
                      (l.types["image/svg+xml"] = n.implementation.hasFeature(
                        "http://www.w3.org/TR/SVG11/feature#Image",
                        "1.1"
                      )),
                      (l.types["image/webp"] = l.detectTypeSupport(
                        "image/webp",
                        "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
                      ));
                  }),
                  (l.verifyTypeSupport = function (t) {
                    var e = t.getAttribute("type");
                    if (null === e || "" === e) return !0;
                    var n = l.types[e];
                    return "string" == typeof n && "pending" !== n
                      ? ((l.types[e] = l.detectTypeSupport(e, n)), "pending")
                      : "function" == typeof n
                      ? (n(), "pending")
                      : n;
                  }),
                  (l.parseSize = function (t) {
                    var e = /(\([^)]+\))?\s*(.+)/g.exec(t);
                    return { media: e && e[1], length: e && e[2] };
                  }),
                  (l.findWidthFromSourceSize = function (t) {
                    for (
                      var r,
                        i = l.trim(t).split(/\s*,\s*/),
                        o = 0,
                        a = i.length;
                      a > o;
                      o++
                    ) {
                      var s = i[o],
                        u = l.parseSize(s),
                        c = u.length,
                        f = u.media;
                      if (
                        c &&
                        (!f || l.matchesMedia(f)) &&
                        (r = l.getWidthFromLength(c))
                      )
                        break;
                    }
                    return (
                      r ||
                      Math.max(e.innerWidth || 0, n.documentElement.clientWidth)
                    );
                  }),
                  (l.parseSrcset = function (t) {
                    for (var e = []; "" !== t; ) {
                      t = t.replace(/^\s+/g, "");
                      var n,
                        r = t.search(/\s/g),
                        i = null;
                      if (-1 !== r) {
                        n = t.slice(0, r);
                        var o = n.slice(-1);
                        if (
                          (("," === o || "" === n) &&
                            ((n = n.replace(/,+$/, "")), (i = "")),
                          (t = t.slice(r + 1)),
                          null === i)
                        ) {
                          var a = t.indexOf(",");
                          -1 !== a
                            ? ((i = t.slice(0, a)), (t = t.slice(a + 1)))
                            : ((i = t), (t = ""));
                        }
                      } else (n = t), (t = "");
                      (n || i) && e.push({ url: n, descriptor: i });
                    }
                    return e;
                  }),
                  (l.parseDescriptor = function (t, e) {
                    var n,
                      r = e || "100vw",
                      i = t && t.replace(/(^\s+|\s+$)/g, ""),
                      o = l.findWidthFromSourceSize(r);
                    if (i)
                      for (
                        var a = i.split(" "), s = a.length - 1;
                        s >= 0;
                        s--
                      ) {
                        var u = a[s],
                          c = u && u.slice(u.length - 1);
                        if (("h" !== c && "w" !== c) || l.sizesSupported) {
                          if ("x" === c) {
                            var f = u && parseFloat(u, 10);
                            n = f && !isNaN(f) ? f : 1;
                          }
                        } else n = parseFloat(parseInt(u, 10) / o);
                      }
                    return n || 1;
                  }),
                  (l.getCandidatesFromSourceSet = function (t, e) {
                    for (
                      var n = l.parseSrcset(t), r = [], i = 0, o = n.length;
                      o > i;
                      i++
                    ) {
                      var a = n[i];
                      r.push({
                        url: a.url,
                        resolution: l.parseDescriptor(a.descriptor, e),
                      });
                    }
                    return r;
                  }),
                  (l.dodgeSrcset = function (t) {
                    t.srcset &&
                      ((t[l.ns].srcset = t.srcset),
                      (t.srcset = ""),
                      t.setAttribute("data-pfsrcset", t[l.ns].srcset));
                  }),
                  (l.processSourceSet = function (t) {
                    var e = t.getAttribute("srcset"),
                      n = t.getAttribute("sizes"),
                      r = [];
                    return (
                      "IMG" === t.nodeName.toUpperCase() &&
                        t[l.ns] &&
                        t[l.ns].srcset &&
                        (e = t[l.ns].srcset),
                      e && (r = l.getCandidatesFromSourceSet(e, n)),
                      r
                    );
                  }),
                  (l.backfaceVisibilityFix = function (t) {
                    var e = t.style || {},
                      n = "webkitBackfaceVisibility" in e,
                      r = e.zoom;
                    n && ((e.zoom = ".999"), (n = t.offsetWidth), (e.zoom = r));
                  }),
                  (l.setIntrinsicSize = (function () {
                    var t = {},
                      r = function (t, e, n) {
                        e && t.setAttribute("width", parseInt(e / n, 10));
                      };
                    return function (i, o) {
                      var a;
                      i[l.ns] &&
                        !e.pfStopIntrinsicSize &&
                        (void 0 === i[l.ns].dims &&
                          (i[l.ns].dims =
                            i.getAttribute("width") ||
                            i.getAttribute("height")),
                        i[l.ns].dims ||
                          (o.url in t
                            ? r(i, t[o.url], o.resolution)
                            : ((a = n.createElement("img")),
                              (a.onload = function () {
                                if (((t[o.url] = a.width), !t[o.url]))
                                  try {
                                    n.body.appendChild(a),
                                      (t[o.url] = a.width || a.offsetWidth),
                                      n.body.removeChild(a);
                                  } catch (e) {}
                                i.src === o.url && r(i, t[o.url], o.resolution),
                                  (i = null),
                                  (a.onload = null),
                                  (a = null);
                              }),
                              (a.src = o.url))));
                    };
                  })()),
                  (l.applyBestCandidate = function (t, e) {
                    var n, r, i;
                    t.sort(l.ascendingSort), (r = t.length), (i = t[r - 1]);
                    for (var o = 0; r > o; o++)
                      if (((n = t[o]), n.resolution >= l.getDpr())) {
                        i = n;
                        break;
                      }
                    i &&
                      ((i.url = l.makeUrl(i.url)),
                      e.src !== i.url &&
                        (l.restrictsMixedContent() &&
                        "http:" ===
                          i.url.substr(0, "http:".length).toLowerCase()
                          ? void 0 !== window.console &&
                            console.warn("Blocked mixed content image " + i.url)
                          : ((e.src = i.url),
                            l.curSrcSupported || (e.currentSrc = e.src),
                            l.backfaceVisibilityFix(e))),
                      l.setIntrinsicSize(e, i));
                  }),
                  (l.ascendingSort = function (t, e) {
                    return t.resolution - e.resolution;
                  }),
                  (l.removeVideoShim = function (t) {
                    var e = t.getElementsByTagName("video");
                    if (e.length) {
                      for (
                        var n = e[0], r = n.getElementsByTagName("source");
                        r.length;

                      )
                        t.insertBefore(r[0], n);
                      n.parentNode.removeChild(n);
                    }
                  }),
                  (l.getAllElements = function () {
                    for (
                      var t = [],
                        e = n.getElementsByTagName("img"),
                        r = 0,
                        i = e.length;
                      i > r;
                      r++
                    ) {
                      var o = e[r];
                      ("PICTURE" === o.parentNode.nodeName.toUpperCase() ||
                        null !== o.getAttribute("srcset") ||
                        (o[l.ns] && null !== o[l.ns].srcset)) &&
                        t.push(o);
                    }
                    return t;
                  }),
                  (l.getMatch = function (t, e) {
                    for (
                      var n, r = e.childNodes, i = 0, o = r.length;
                      o > i;
                      i++
                    ) {
                      var a = r[i];
                      if (1 === a.nodeType) {
                        if (a === t) return n;
                        if ("SOURCE" === a.nodeName.toUpperCase()) {
                          null !== a.getAttribute("src") &&
                            void 0 !== typeof console &&
                            console.warn(
                              "The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`."
                            );
                          var s = a.getAttribute("media");
                          if (
                            a.getAttribute("srcset") &&
                            (!s || l.matchesMedia(s))
                          ) {
                            var u = l.verifyTypeSupport(a);
                            if (u === !0) {
                              n = a;
                              break;
                            }
                            if ("pending" === u) return !1;
                          }
                        }
                      }
                    }
                    return n;
                  }),
                  s(),
                  (a._ = l),
                  o(a);
              })(window, window.document, new window.Image()),
              i(
                "undefined" != typeof picturefill
                  ? picturefill
                  : window.picturefill
              );
          }.call(t, void 0, void 0, void 0, void 0, function (t) {
            e.exports = t;
          }));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    4: [
      function (t, e, n) {
        (function (t) {
          (function (t, e, n, r, i) {
            !(function (e, n, i) {
              "use strict";
              function o(t) {
                if (
                  ((a = n.documentElement),
                  (s = n.body),
                  X(),
                  (ut = this),
                  (t = t || {}),
                  (pt = t.constants || {}),
                  t.easing)
                )
                  for (var r in t.easing) Z[r] = t.easing[r];
                (wt = t.edgeStrategy || "set"),
                  (dt = {
                    beforerender: t.beforerender,
                    render: t.render,
                    keyframe: t.keyframe,
                  }),
                  (ht = t.forceHeight !== !1),
                  ht && (qt = t.scale || 1),
                  (gt = t.mobileDeceleration || A),
                  (vt = t.smoothScrolling !== !1),
                  (yt = t.smoothScrollingDuration || F),
                  (xt = { targetTop: ut.getScrollTop() }),
                  ($t = (
                    t.mobileCheck ||
                    function () {
                      return /Android|iPhone|iPad|iPod|BlackBerry/i.test(
                        navigator.userAgent || navigator.vendor || e.opera
                      );
                    }
                  )()),
                  $t
                    ? ((ft = n.getElementById(t.skrollrBody || M)),
                      ft && lt(),
                      Q(),
                      Nt(a, [b, k], [w]))
                    : Nt(a, [b, S], [w]),
                  ut.refresh(),
                  Ct(e, "resize orientationchange", function () {
                    var t = a.clientWidth,
                      e = a.clientHeight;
                    (e !== Rt || t !== Gt) && ((Rt = e), (Gt = t), (Ht = !0));
                  });
                var i = W();
                return (
                  (function o() {
                    tt(), (kt = i(o));
                  })(),
                  ut
                );
              }
              var a,
                s,
                l = {
                  get: function () {
                    return ut;
                  },
                  init: function (t) {
                    return ut || new o(t);
                  },
                  VERSION: "0.6.29",
                },
                u = Object.prototype.hasOwnProperty,
                c = e.Math,
                f = e.getComputedStyle,
                d = "touchstart",
                h = "touchmove",
                p = "touchcancel",
                g = "touchend",
                m = "skrollable",
                v = m + "-before",
                y = m + "-between",
                x = m + "-after",
                b = "skrollr",
                w = "no-" + b,
                S = b + "-desktop",
                k = b + "-mobile",
                C = "linear",
                T = 1e3,
                A = 0.004,
                M = "skrollr-body",
                F = 200,
                E = "start",
                B = "end",
                z = "center",
                N = "bottom",
                _ = "___skrollable_id",
                L = /^(?:input|textarea|button|select)$/i,
                P = /^\s+|\s+$/g,
                j =
                  /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
                V = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
                q = /^(@?[a-z\-]+)\[(\w+)\]$/,
                I = /-([a-z0-9_])/g,
                D = function (t, e) {
                  return e.toUpperCase();
                },
                O = /[\-+]?[\d]*\.?[\d]+/g,
                G = /\{\?\}/g,
                R = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
                H = /[a-z\-]+-gradient/g,
                U = "",
                $ = "",
                X = function () {
                  var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                  if (f) {
                    var e = f(s, null);
                    for (var n in e)
                      if ((U = n.match(t) || (+n == n && e[n].match(t)))) break;
                    if (!U) return void (U = $ = "");
                    (U = U[0]),
                      "-" === U.slice(0, 1)
                        ? (($ = U),
                          (U = {
                            "-webkit-": "webkit",
                            "-moz-": "Moz",
                            "-ms-": "ms",
                            "-o-": "O",
                          }[U]))
                        : ($ = "-" + U.toLowerCase() + "-");
                  }
                },
                W = function () {
                  var t =
                      e.requestAnimationFrame ||
                      e[U.toLowerCase() + "RequestAnimationFrame"],
                    n = Pt();
                  return (
                    ($t || !t) &&
                      (t = function (t) {
                        var r = Pt() - n,
                          i = c.max(0, 1e3 / 60 - r);
                        return e.setTimeout(function () {
                          (n = Pt()), t();
                        }, i);
                      }),
                    t
                  );
                },
                Y = function () {
                  var t =
                    e.cancelAnimationFrame ||
                    e[U.toLowerCase() + "CancelAnimationFrame"];
                  return (
                    ($t || !t) &&
                      (t = function (t) {
                        return e.clearTimeout(t);
                      }),
                    t
                  );
                },
                Z = {
                  begin: function () {
                    return 0;
                  },
                  end: function () {
                    return 1;
                  },
                  linear: function (t) {
                    return t;
                  },
                  quadratic: function (t) {
                    return t * t;
                  },
                  cubic: function (t) {
                    return t * t * t;
                  },
                  swing: function (t) {
                    return -c.cos(t * c.PI) / 2 + 0.5;
                  },
                  sqrt: function (t) {
                    return c.sqrt(t);
                  },
                  outCubic: function (t) {
                    return c.pow(t - 1, 3) + 1;
                  },
                  bounce: function (t) {
                    var e;
                    if (0.5083 >= t) e = 3;
                    else if (0.8489 >= t) e = 9;
                    else if (0.96208 >= t) e = 27;
                    else {
                      if (!(0.99981 >= t)) return 1;
                      e = 91;
                    }
                    return 1 - c.abs((3 * c.cos(t * e * 1.028)) / e);
                  },
                };
              (o.prototype.refresh = function (t) {
                var e,
                  r,
                  o = !1;
                for (
                  t === i
                    ? ((o = !0),
                      (ct = []),
                      (Ut = 0),
                      (t = n.getElementsByTagName("*")))
                    : t.length === i && (t = [t]),
                    e = 0,
                    r = t.length;
                  r > e;
                  e++
                ) {
                  var a = t[e],
                    s = a,
                    l = [],
                    u = vt,
                    c = wt,
                    f = !1;
                  if ((o && _ in a && delete a[_], a.attributes)) {
                    for (var d = 0, h = a.attributes.length; h > d; d++) {
                      var p = a.attributes[d];
                      if ("data-anchor-target" !== p.name)
                        if ("data-smooth-scrolling" !== p.name)
                          if ("data-edge-strategy" !== p.name)
                            if ("data-emit-events" !== p.name) {
                              var g = p.name.match(j);
                              if (null !== g) {
                                var v = {
                                  props: p.value,
                                  element: a,
                                  eventType: p.name.replace(I, D),
                                };
                                l.push(v);
                                var y = g[1];
                                y && (v.constant = y.substr(1));
                                var x = g[2];
                                /p$/.test(x)
                                  ? ((v.isPercentage = !0),
                                    (v.offset = (0 | x.slice(0, -1)) / 100))
                                  : (v.offset = 0 | x);
                                var b = g[3],
                                  w = g[4] || b;
                                b && b !== E && b !== B
                                  ? ((v.mode = "relative"),
                                    (v.anchors = [b, w]))
                                  : ((v.mode = "absolute"),
                                    b === B
                                      ? (v.isEnd = !0)
                                      : v.isPercentage ||
                                        (v.offset = v.offset * qt));
                              }
                            } else f = !0;
                          else c = p.value;
                        else u = "off" !== p.value;
                      else if (((s = n.querySelector(p.value)), null === s))
                        throw 'Unable to find anchor target "' + p.value + '"';
                    }
                    if (l.length) {
                      var S, k, C;
                      !o && _ in a
                        ? ((C = a[_]),
                          (S = ct[C].styleAttr),
                          (k = ct[C].classAttr))
                        : ((C = a[_] = Ut++),
                          (S = a.style.cssText),
                          (k = zt(a))),
                        (ct[C] = {
                          element: a,
                          styleAttr: S,
                          classAttr: k,
                          anchorTarget: s,
                          keyFrames: l,
                          smoothScrolling: u,
                          edgeStrategy: c,
                          emitEvents: f,
                          lastFrameIndex: -1,
                        }),
                        Nt(a, [m], []);
                    }
                  }
                }
                for (Ft(), e = 0, r = t.length; r > e; e++) {
                  var T = ct[t[e][_]];
                  T !== i && (et(T), rt(T));
                }
                return ut;
              }),
                (o.prototype.relativeToAbsolute = function (t, e, n) {
                  var r = a.clientHeight,
                    i = t.getBoundingClientRect(),
                    o = i.top,
                    s = i.bottom - i.top;
                  return (
                    e === N ? (o -= r) : e === z && (o -= r / 2),
                    n === N ? (o += s) : n === z && (o += s / 2),
                    (o += ut.getScrollTop()),
                    (o + 0.5) | 0
                  );
                }),
                (o.prototype.animateTo = function (t, e) {
                  e = e || {};
                  var n = Pt(),
                    r = ut.getScrollTop();
                  return (
                    (mt = {
                      startTop: r,
                      topDiff: t - r,
                      targetTop: t,
                      duration: e.duration || T,
                      startTime: n,
                      endTime: n + (e.duration || T),
                      easing: Z[e.easing || C],
                      done: e.done,
                    }),
                    mt.topDiff || (mt.done && mt.done.call(ut, !1), (mt = i)),
                    ut
                  );
                }),
                (o.prototype.stopAnimateTo = function () {
                  mt && mt.done && mt.done.call(ut, !0), (mt = i);
                }),
                (o.prototype.isAnimatingTo = function () {
                  return !!mt;
                }),
                (o.prototype.isMobile = function () {
                  return $t;
                }),
                (o.prototype.setScrollTop = function (t, n) {
                  return (
                    (bt = n === !0),
                    $t ? (Xt = c.min(c.max(t, 0), Vt)) : e.scrollTo(0, t),
                    ut
                  );
                }),
                (o.prototype.getScrollTop = function () {
                  return $t
                    ? Xt
                    : e.pageYOffset || a.scrollTop || s.scrollTop || 0;
                }),
                (o.prototype.getMaxScrollTop = function () {
                  return Vt;
                }),
                (o.prototype.on = function (t, e) {
                  return (dt[t] = e), ut;
                }),
                (o.prototype.off = function (t) {
                  return delete dt[t], ut;
                }),
                (o.prototype.destroy = function () {
                  var t = Y();
                  t(kt), At(), Nt(a, [w], [b, S, k]);
                  for (var e = 0, n = ct.length; n > e; e++) st(ct[e].element);
                  (a.style.overflow = s.style.overflow = ""),
                    (a.style.height = s.style.height = ""),
                    ft && l.setStyle(ft, "transform", "none"),
                    (ut = i),
                    (ft = i),
                    (dt = i),
                    (ht = i),
                    (Vt = 0),
                    (qt = 1),
                    (pt = i),
                    (gt = i),
                    (It = "down"),
                    (Dt = -1),
                    (Gt = 0),
                    (Rt = 0),
                    (Ht = !1),
                    (mt = i),
                    (vt = i),
                    (yt = i),
                    (xt = i),
                    (bt = i),
                    (Ut = 0),
                    (wt = i),
                    ($t = !1),
                    (Xt = 0),
                    (St = i);
                });
              var Q = function () {
                  var t, r, o, l, u, f, m, v, y, x, b, w;
                  Ct(a, [d, h, p, g].join(" "), function (e) {
                    var a = e.changedTouches[0];
                    for (l = e.target; 3 === l.nodeType; ) l = l.parentNode;
                    switch (
                      ((u = a.clientY),
                      (f = a.clientX),
                      (x = e.timeStamp),
                      L.test(l.tagName) || e.preventDefault(),
                      e.type)
                    ) {
                      case d:
                        t && t.blur(),
                          ut.stopAnimateTo(),
                          (t = l),
                          (r = m = u),
                          (o = f),
                          (y = x);
                        break;
                      case h:
                        L.test(l.tagName) &&
                          n.activeElement !== l &&
                          e.preventDefault(),
                          (v = u - m),
                          (w = x - b),
                          ut.setScrollTop(Xt - v, !0),
                          (m = u),
                          (b = x);
                        break;
                      default:
                      case p:
                      case g:
                        var s = r - u,
                          S = o - f,
                          k = S * S + s * s;
                        if (49 > k) {
                          if (!L.test(t.tagName)) {
                            t.focus();
                            var C = n.createEvent("MouseEvents");
                            C.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              e.view,
                              1,
                              a.screenX,
                              a.screenY,
                              a.clientX,
                              a.clientY,
                              e.ctrlKey,
                              e.altKey,
                              e.shiftKey,
                              e.metaKey,
                              0,
                              null
                            ),
                              t.dispatchEvent(C);
                          }
                          return;
                        }
                        t = i;
                        var T = v / w;
                        T = c.max(c.min(T, 3), -3);
                        var A = c.abs(T / gt),
                          M = T * A + 0.5 * gt * A * A,
                          F = ut.getScrollTop() - M,
                          E = 0;
                        F > Vt
                          ? ((E = (Vt - F) / M), (F = Vt))
                          : 0 > F && ((E = -F / M), (F = 0)),
                          (A *= 1 - E),
                          ut.animateTo((F + 0.5) | 0, {
                            easing: "outCubic",
                            duration: A,
                          });
                    }
                  }),
                    e.scrollTo(0, 0),
                    (a.style.overflow = s.style.overflow = "hidden");
                },
                K = function () {
                  var t,
                    e,
                    n,
                    r,
                    i,
                    o,
                    s,
                    l,
                    u,
                    f,
                    d,
                    h = a.clientHeight,
                    p = Et();
                  for (l = 0, u = ct.length; u > l; l++)
                    for (
                      t = ct[l],
                        e = t.element,
                        n = t.anchorTarget,
                        r = t.keyFrames,
                        i = 0,
                        o = r.length;
                      o > i;
                      i++
                    )
                      (s = r[i]),
                        (f = s.offset),
                        (d = p[s.constant] || 0),
                        (s.frame = f),
                        s.isPercentage && ((f *= h), (s.frame = f)),
                        "relative" === s.mode &&
                          (st(e),
                          (s.frame =
                            ut.relativeToAbsolute(
                              n,
                              s.anchors[0],
                              s.anchors[1]
                            ) - f),
                          st(e, !0)),
                        (s.frame += d),
                        ht && !s.isEnd && s.frame > Vt && (Vt = s.frame);
                  for (Vt = c.max(Vt, Bt()), l = 0, u = ct.length; u > l; l++) {
                    for (
                      t = ct[l], r = t.keyFrames, i = 0, o = r.length;
                      o > i;
                      i++
                    )
                      (s = r[i]),
                        (d = p[s.constant] || 0),
                        s.isEnd && (s.frame = Vt - s.offset + d);
                    t.keyFrames.sort(jt);
                  }
                },
                J = function (t, e) {
                  for (var n = 0, r = ct.length; r > n; n++) {
                    var i,
                      o,
                      a = ct[n],
                      s = a.element,
                      c = a.smoothScrolling ? t : e,
                      f = a.keyFrames,
                      d = f.length,
                      h = f[0],
                      p = f[f.length - 1],
                      g = c < h.frame,
                      b = c > p.frame,
                      w = g ? h : p,
                      S = a.emitEvents,
                      k = a.lastFrameIndex;
                    if (g || b) {
                      if ((g && -1 === a.edge) || (b && 1 === a.edge)) continue;
                      switch (
                        (g
                          ? (Nt(s, [v], [x, y]),
                            S &&
                              k > -1 &&
                              (Mt(s, h.eventType, It), (a.lastFrameIndex = -1)))
                          : (Nt(s, [x], [v, y]),
                            S &&
                              d > k &&
                              (Mt(s, p.eventType, It), (a.lastFrameIndex = d))),
                        (a.edge = g ? -1 : 1),
                        a.edgeStrategy)
                      ) {
                        case "reset":
                          st(s);
                          continue;
                        case "ease":
                          c = w.frame;
                          break;
                        default:
                        case "set":
                          var C = w.props;
                          for (i in C)
                            u.call(C, i) &&
                              ((o = at(C[i].value)),
                              0 === i.indexOf("@")
                                ? s.setAttribute(i.substr(1), o)
                                : l.setStyle(s, i, o));
                          continue;
                      }
                    } else
                      0 !== a.edge && (Nt(s, [m, y], [v, x]), (a.edge = 0));
                    for (var T = 0; d - 1 > T; T++)
                      if (c >= f[T].frame && c <= f[T + 1].frame) {
                        var A = f[T],
                          M = f[T + 1];
                        for (i in A.props)
                          if (u.call(A.props, i)) {
                            var F = (c - A.frame) / (M.frame - A.frame);
                            (F = A.props[i].easing(F)),
                              (o = ot(A.props[i].value, M.props[i].value, F)),
                              (o = at(o)),
                              0 === i.indexOf("@")
                                ? s.setAttribute(i.substr(1), o)
                                : l.setStyle(s, i, o);
                          }
                        S &&
                          k !== T &&
                          ("down" === It
                            ? Mt(s, A.eventType, It)
                            : Mt(s, M.eventType, It),
                          (a.lastFrameIndex = T));
                        break;
                      }
                  }
                },
                tt = function () {
                  Ht && ((Ht = !1), Ft());
                  var t,
                    e,
                    n = ut.getScrollTop(),
                    r = Pt();
                  if (mt)
                    r >= mt.endTime
                      ? ((n = mt.targetTop), (t = mt.done), (mt = i))
                      : ((e = mt.easing((r - mt.startTime) / mt.duration)),
                        (n = (mt.startTop + e * mt.topDiff) | 0)),
                      ut.setScrollTop(n, !0);
                  else if (!bt) {
                    var o = xt.targetTop - n;
                    o &&
                      (xt = {
                        startTop: Dt,
                        topDiff: n - Dt,
                        targetTop: n,
                        startTime: Ot,
                        endTime: Ot + yt,
                      }),
                      r <= xt.endTime &&
                        ((e = Z.sqrt((r - xt.startTime) / yt)),
                        (n = (xt.startTop + e * xt.topDiff) | 0));
                  }
                  if (
                    ($t &&
                      ft &&
                      l.setStyle(
                        ft,
                        "transform",
                        "translate(0, " + -Xt + "px) " + St
                      ),
                    bt || Dt !== n)
                  ) {
                    (It = n > Dt ? "down" : Dt > n ? "up" : It), (bt = !1);
                    var a = {
                        curTop: n,
                        lastTop: Dt,
                        maxTop: Vt,
                        direction: It,
                      },
                      s = dt.beforerender && dt.beforerender.call(ut, a);
                    s !== !1 &&
                      (J(n, ut.getScrollTop()),
                      (Dt = n),
                      dt.render && dt.render.call(ut, a)),
                      t && t.call(ut, !1);
                  }
                  Ot = r;
                },
                et = function (t) {
                  for (var e = 0, n = t.keyFrames.length; n > e; e++) {
                    for (
                      var r, i, o, a, s = t.keyFrames[e], l = {};
                      null !== (a = V.exec(s.props));

                    )
                      (o = a[1]),
                        (i = a[2]),
                        (r = o.match(q)),
                        null !== r ? ((o = r[1]), (r = r[2])) : (r = C),
                        (i = i.indexOf("!") ? nt(i) : [i.slice(1)]),
                        (l[o] = { value: i, easing: Z[r] });
                    s.props = l;
                  }
                },
                nt = function (t) {
                  var e = [];
                  return (
                    (R.lastIndex = 0),
                    (t = t.replace(R, function (t) {
                      return t.replace(O, function (t) {
                        return (t / 255) * 100 + "%";
                      });
                    })),
                    $ &&
                      ((H.lastIndex = 0),
                      (t = t.replace(H, function (t) {
                        return $ + t;
                      }))),
                    (t = t.replace(O, function (t) {
                      return e.push(+t), "{?}";
                    })),
                    e.unshift(t),
                    e
                  );
                },
                rt = function (t) {
                  var e,
                    n,
                    r = {};
                  for (e = 0, n = t.keyFrames.length; n > e; e++)
                    it(t.keyFrames[e], r);
                  for (r = {}, e = t.keyFrames.length - 1; e >= 0; e--)
                    it(t.keyFrames[e], r);
                },
                it = function (t, e) {
                  var n;
                  for (n in e) u.call(t.props, n) || (t.props[n] = e[n]);
                  for (n in t.props) e[n] = t.props[n];
                },
                ot = function (t, e, n) {
                  var r,
                    i = t.length;
                  if (i !== e.length)
                    throw (
                      "Can't interpolate between \"" +
                      t[0] +
                      '" and "' +
                      e[0] +
                      '"'
                    );
                  var o = [t[0]];
                  for (r = 1; i > r; r++) o[r] = t[r] + (e[r] - t[r]) * n;
                  return o;
                },
                at = function (t) {
                  var e = 1;
                  return (
                    (G.lastIndex = 0),
                    t[0].replace(G, function () {
                      return t[e++];
                    })
                  );
                },
                st = function (t, e) {
                  t = [].concat(t);
                  for (var n, r, i = 0, o = t.length; o > i; i++)
                    (r = t[i]),
                      (n = ct[r[_]]),
                      n &&
                        (e
                          ? ((r.style.cssText = n.dirtyStyleAttr),
                            Nt(r, n.dirtyClassAttr))
                          : ((n.dirtyStyleAttr = r.style.cssText),
                            (n.dirtyClassAttr = zt(r)),
                            (r.style.cssText = n.styleAttr),
                            Nt(r, n.classAttr)));
                },
                lt = function () {
                  (St = "translateZ(0)"), l.setStyle(ft, "transform", St);
                  var t = f(ft),
                    e = t.getPropertyValue("transform"),
                    n = t.getPropertyValue($ + "transform"),
                    r = (e && "none" !== e) || (n && "none" !== n);
                  r || (St = "");
                };
              l.setStyle = function (t, e, n) {
                var r = t.style;
                if (((e = e.replace(I, D).replace("-", "")), "zIndex" === e))
                  r[e] = isNaN(n) ? n : "" + (0 | n);
                else if ("float" === e) r.styleFloat = r.cssFloat = n;
                else
                  try {
                    U && (r[U + e.slice(0, 1).toUpperCase() + e.slice(1)] = n),
                      (r[e] = n);
                  } catch (i) {}
              };
              var ut,
                ct,
                ft,
                dt,
                ht,
                pt,
                gt,
                mt,
                vt,
                yt,
                xt,
                bt,
                wt,
                St,
                kt,
                Ct = (l.addEvent = function (t, n, r) {
                  var i = function (t) {
                    return (
                      (t = t || e.event),
                      t.target || (t.target = t.srcElement),
                      t.preventDefault ||
                        (t.preventDefault = function () {
                          (t.returnValue = !1), (t.defaultPrevented = !0);
                        }),
                      r.call(this, t)
                    );
                  };
                  n = n.split(" ");
                  for (var o, a = 0, s = n.length; s > a; a++)
                    (o = n[a]),
                      t.addEventListener
                        ? t.addEventListener(o, r, !1)
                        : t.attachEvent("on" + o, i),
                      Wt.push({ element: t, name: o, listener: r });
                }),
                Tt = (l.removeEvent = function (t, e, n) {
                  e = e.split(" ");
                  for (var r = 0, i = e.length; i > r; r++)
                    t.removeEventListener
                      ? t.removeEventListener(e[r], n, !1)
                      : t.detachEvent("on" + e[r], n);
                }),
                At = function () {
                  for (var t, e = 0, n = Wt.length; n > e; e++)
                    (t = Wt[e]), Tt(t.element, t.name, t.listener);
                  Wt = [];
                },
                Mt = function (t, e, n) {
                  dt.keyframe && dt.keyframe.call(ut, t, e, n);
                },
                Ft = function () {
                  var t = ut.getScrollTop();
                  (Vt = 0),
                    ht && !$t && (s.style.height = ""),
                    K(),
                    ht && !$t && (s.style.height = Vt + a.clientHeight + "px"),
                    $t
                      ? ut.setScrollTop(c.min(ut.getScrollTop(), Vt))
                      : ut.setScrollTop(t, !0),
                    (bt = !0);
                },
                Et = function () {
                  var t,
                    e,
                    n = a.clientHeight,
                    r = {};
                  for (t in pt)
                    (e = pt[t]),
                      "function" == typeof e
                        ? (e = e.call(ut))
                        : /p$/.test(e) && (e = (e.slice(0, -1) / 100) * n),
                      (r[t] = e);
                  return r;
                },
                Bt = function () {
                  var t,
                    e = 0;
                  return (
                    ft && (e = c.max(ft.offsetHeight, ft.scrollHeight)),
                    (t = c.max(
                      e,
                      s.scrollHeight,
                      s.offsetHeight,
                      a.scrollHeight,
                      a.offsetHeight,
                      a.clientHeight
                    )),
                    t - a.clientHeight
                  );
                },
                zt = function (t) {
                  var n = "className";
                  return (
                    e.SVGElement &&
                      t instanceof e.SVGElement &&
                      ((t = t[n]), (n = "baseVal")),
                    t[n]
                  );
                },
                Nt = function (t, n, r) {
                  var o = "className";
                  if (
                    (e.SVGElement &&
                      t instanceof e.SVGElement &&
                      ((t = t[o]), (o = "baseVal")),
                    r === i)
                  )
                    return void (t[o] = n);
                  for (var a = t[o], s = 0, l = r.length; l > s; s++)
                    a = Lt(a).replace(Lt(r[s]), " ");
                  a = _t(a);
                  for (var u = 0, c = n.length; c > u; u++)
                    -1 === Lt(a).indexOf(Lt(n[u])) && (a += " " + n[u]);
                  t[o] = _t(a);
                },
                _t = function (t) {
                  return t.replace(P, "");
                },
                Lt = function (t) {
                  return " " + t + " ";
                },
                Pt =
                  Date.now ||
                  function () {
                    return +new Date();
                  },
                jt = function (t, e) {
                  return t.frame - e.frame;
                },
                Vt = 0,
                qt = 1,
                It = "down",
                Dt = -1,
                Ot = Pt(),
                Gt = 0,
                Rt = 0,
                Ht = !1,
                Ut = 0,
                $t = !1,
                Xt = 0,
                Wt = [];
              "function" == typeof r && r.amd
                ? r([], function () {
                    return l;
                  })
                : "undefined" != typeof t && t.exports
                ? (t.exports = l)
                : (e.skrollr = l);
            })(window, document),
              i("undefined" != typeof skrollr ? skrollr : window.skrollr);
          }.call(t, void 0, void 0, void 0, void 0, function (t) {
            e.exports = t;
          }));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    5: [
      function (t, e, n) {
        var r = t("./viewport");
        e.exports = {
          adjustToScreen: function () {
            var t = document.getElementById("Telaviv"),
              e = t.clientHeight,
              n = r.height();
            (availableSpaceFromTop = n - e),
              (desiredSpaceFromTop = 0.5 * n),
              availableSpaceFromTop < desiredSpaceFromTop
                ? ((t.style.top = desiredSpaceFromTop + "px"),
                  (t.style.bottom = "auto"))
                : ((t.style.top = "auto"), (t.style.bottom = 0));
          },
        };
      },
      { "./viewport": 13 },
    ],
    6: [
      function (t, e, n) {
        e.exports = function (t, e, n) {
          var r;
          return function () {
            var i = this,
              o = arguments,
              a = function () {
                (r = null), n || t.apply(i, o);
              },
              s = n && !r;
            clearTimeout(r), (r = setTimeout(a, e)), s && t.apply(i, o);
          };
        };
      },
      {},
    ],
    7: [
      function (t, e, n) {
        e.exports = {
          isMobileOrTablet: function () {
            var t = !1;
            return (
              (function (e) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                  e
                ) ||
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    e.substr(0, 4)
                  )) &&
                  (t = !0);
              })(navigator.userAgent || navigator.vendor || window.opera),
              t
            );
          },
        };
      },
      {},
    ],
    8: [
      function (t, e, n) {
        e.exports = [
          "M113.5,135.5l-9.8-17h3.8l7.6,13.3l7.7-13.3h3.8l-9.9,17v12.8h-3.3V135.5z",
          "M141.6,133.4c0-8.9,6.9-15.4,15.5-15.4s15.5,6.5,15.5,15.4c0,8.8-6.9,15.4-15.5,15.4C148.5,148.8,141.6,142.2,141.6,133.4z M145,133.4c0,6.8,5.4,12.3,12.1,12.3s12.1-5.4,12.1-12.3s-5.4-12.3-12.1-12.3S145,126.6,145,133.4z",
          "M191.8,136.8c0,2.5,0,5.2,2.4,7.2c1.2,1,3.3,1.7,4.9,1.7c1.7,0,3.7-0.7,4.9-1.7c2.4-2,2.4-4.7,2.4-7.2v-18.3h3.3v19.2c0,2.5-0.3,4.9-1.9,7.1c-1.8,2.5-4.9,4-8.7,4c-3.8,0-6.9-1.6-8.7-4c-1.6-2.2-1.9-4.6-1.9-7.1v-19.2h3.3V136.8z",
          "M114.4,236.9v26.7h8.2v3.1h-11.5v-29.8H114.4z",
          "M141.6,251.8c0-8.9,6.9-15.4,15.5-15.4s15.5,6.5,15.5,15.4c0,8.8-6.9,15.4-15.5,15.4C148.5,267.2,141.6,260.6,141.6,251.8z M145,251.8c0,6.8,5.4,12.3,12.1,12.3s12.1-5.4,12.1-12.3c0-6.8-5.4-12.3-12.1-12.3S145,244.9,145,251.8z",
          "M117.5,192.5h12.4v0.7c0,3.3-1,6.9-2.9,9.4c-0.9,1.2-4.2,5.4-11.1,5.4c-8.8,0-15.5-6.7-15.5-15.4s6.7-15.4,15.5-15.4c2.9,0,6.2,0.7,9.1,2.9c1.3,1,2.6,2.4,3.4,3.5l-2.5,2.2c-0.8-1.2-1.8-2.3-2.8-3.1c-1.4-1.2-3.7-2.5-7.2-2.5c-7.2,0-12.2,5.4-12.2,12.3c0,8.1,6.5,12.2,12.1,12.2c4,0,7.4-2,9.1-5c0.5-0.9,1.1-2.4,1.2-4.2h-8.8V192.5z",
          "M141.6,192.6c0-8.9,6.9-15.4,15.5-15.4s15.5,6.5,15.5,15.4c0,8.8-6.9,15.4-15.5,15.4C148.5,208,141.6,201.4,141.6,192.6z M145,192.6c0,6.8,5.4,12.3,12.1,12.3s12.1-5.4,12.1-12.3s-5.4-12.3-12.1-12.3S145,185.8,145,192.6z",
          "M200.7,180.8v26.7h-3.3v-26.7h-7.2v-3.1h17.8v3.1H200.7z",
          "M242.6,180.8v26.7h-3.3v-26.7h-7.2v-3.1h17.8v3.1H242.6z",
          "M289.2,199.1h-12.7l-3.6,8.4h-3.7l13.7-31.2l13.4,31.2h-3.7L289.2,199.1z M287.9,195.9l-5-11.9l-5.1,11.9H287.9z",
          "M190.6,236.9l8.4,22.7l8.4-22.7h3.7L199,268.4L187,236.9H190.6z",
          "M249.5,240h-12.1v8.8h11.8v3.1h-11.8v11.6h12.1v3.1H234v-29.8h15.5V240z",
          "M123,299.2h-10.3v8.8h9.9v3.1h-9.9v14.7h-3.3V296H123V299.2z",
          "M154.5,296c2,0,5,0.1,7.2,1.7c1.7,1.2,3.3,3.4,3.3,6.6c0,4.6-3,7.9-7.5,8.2l9.5,13.3h-4l-9.1-13h-0.8v13h-3.3V296H154.5z M153.1,309.8h2.1c4.1,0,6.6-2,6.6-5.4c0-1.7-0.5-3.3-2.4-4.4c-1.3-0.8-2.9-0.8-4.3-0.8h-2V309.8z",
          "M183.5,311c0-8.9,6.9-15.4,15.5-15.4s15.5,6.5,15.5,15.4c0,8.8-6.9,15.4-15.5,15.4C190.4,326.4,183.5,319.8,183.5,311z M186.9,311c0,6.8,5.4,12.3,12.1,12.3s12.1-5.4,12.1-12.3c0-6.8-5.4-12.3-12.1-12.3S186.9,304.1,186.9,311z",
          "M227.7,325.8v-31l23.2,24.3V296h3.3v31.1L231,302.8v23H227.7z",
          "M284.5,299.2v26.7h-3.3v-26.7H274V296h17.8v3.1H284.5z",
          "M325.4,299.2h-12.1v8.8h11.8v3.1h-11.8v11.6h12.1v3.1H310V296h15.5V299.2z",
          "M344,325.8v-31l23.2,24.3V296h3.3v31.1l-23.2-24.3v23H344z",
          "M387.3,296h6.1c3,0,7.2,0.3,11,3.5c2.7,2.3,5.1,6.1,5.1,11.4c0,6.3-3.1,9.6-5.2,11.4c-2.7,2.3-5.6,3.4-10.9,3.4h-6V296z M390.6,322.7h2.9c2.4,0,5.6-0.3,8.5-2.7c2.2-1.9,4-4.8,4-9.1c0-7.1-5-11.8-12.6-11.8h-2.9V322.7z",
        ];
      },
      {},
    ],
    9: [
      function (t, e, n) {
        e.exports = function (t, e) {
          return Math.random() * (e - t) + t;
        };
      },
      {},
    ],
    10: [
      function (t, e, n) {
        function r(t) {
          (t = t || window.event),
            t.preventDefault && t.preventDefault(),
            (t.returnValue = !1);
        }
        function i(t) {
          for (var e = a.length; e--; )
            if (t.keyCode === a[e]) return void r(t);
        }
        function o(t) {
          r(t);
        }
        var a = [38, 40, 32, 33, 34, 35, 36];
        e.exports = {
          disable: function () {
            window.addEventListener &&
              window.addEventListener("DOMMouseScroll", o, !1),
              (window.onmousewheel = document.onmousewheel = o),
              (document.onkeydown = i);
          },
          enable: function () {
            window.removeEventListener &&
              window.removeEventListener("DOMMouseScroll", o, !1),
              (window.onmousewheel =
                document.onmousewheel =
                document.onkeydown =
                  null);
          },
        };
      },
      {},
    ],
    11: [
      function (t, e, n) {
        var r = t("./viewport");
        e.exports = {
          init: function () {
            var t,
              e = document.getElementById("Soundtrack");
            if (Modernizr.webaudio) {
              var n = new (window.AudioContext || window.webkitAudioContext)(),
                i = n.createAnalyser();
              (i.minDecibels = -90),
                (i.maxDecibels = -10),
                (i.smoothingTimeConstant = 0.85);
              var o = n.createMediaElementSource(e);
              o.connect(i), i.connect(n.destination);
              var a = document.getElementById("Visualizer"),
                s = a.getContext("2d"),
                l = a.width,
                u = a.height,
                c = function (e) {
                  i.fftSize = 512;
                  var n = i.frequencyBinCount,
                    r = new Uint8Array(n),
                    o = function () {
                      (t = requestAnimationFrame(o)),
                        i.getByteFrequencyData(r),
                        s.clearRect(0, 0, l, u),
                        (s.lineCap = "round");
                      for (
                        var e,
                          a = 2,
                          c = 80,
                          f = (l - a * (c - 1)) / c,
                          d = 0,
                          h = 0;
                        n > h;
                        ++h
                      )
                        h + 1 === c && (f -= 0.35),
                          (e = r[h]),
                          (s.fillStyle = "#fff"),
                          s.fillRect(d, u, f, -e / 5),
                          (d += f + a);
                    };
                  o();
                },
                f = function () {
                  e.paused && t && cancelAnimationFrame(t);
                };
            }
            var d = function () {
              var t = document.getElementById("LogoImg"),
                e = t.clientWidth,
                n = t.clientHeight,
                i = t.getBoundingClientRect().left;
              Modernizr.webaudio &&
                (a.setAttribute("width", e),
                (a.style.left = i + "px"),
                (a.style.top = r.height() / 2 - n / 2 - a.height + "px"),
                (a.style.width = e + "px"),
                (l = e));
              var o = document.querySelector(".js-player");
              o.classList.remove("is-hidden"),
                (o.style.left = i + "px"),
                (o.style.top =
                  r.height() / 2 + n / 2 - o.clientHeight - 1 + "px");
            };
            d(),
              window.addEventListener("resize", function (t) {
                d();
              });
            var h = document.getElementById("PlayButton");
            h.addEventListener("click", function (t) {
              t.preventDefault(),
                e.paused
                  ? (e.play(),
                    Modernizr.webaudio && c(),
                    h.classList.remove("icon-play"),
                    h.classList.add("icon-pause"))
                  : (e.pause(),
                    Modernizr.webaudio &&
                      setTimeout(function () {
                        f();
                      }, 1e4),
                    h.classList.remove("icon-pause"),
                    h.classList.add("icon-play"));
            }),
              e.addEventListener("ended", function (t) {
                Modernizr.webaudio &&
                  setTimeout(function () {
                    f();
                  }, 1e4),
                  h.classList.contains("icon-pause") &&
                    (h.classList.remove("icon-pause"),
                    h.classList.add("icon-play"));
              });
          },
        };
      },
      { "./viewport": 13 },
    ],
    12: [
      function (t, e, n) {
        t("snap");
        var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          d,
          h,
          p,
          g = t("./viewport"),
          m = t("./letters"),
          v = t("./rand"),
          y = [];
        e.exports = {
          initPaper: function () {
            (r = Snap(g.width(), g.height())),
              r.appendTo(document.getElementById("YGLF-intro")),
              (r.node.style.position = "fixed"),
              this.updateLogoSizes(),
              (o = r.g()),
              this.updateGroup();
          },
          updatePaper: function () {
            r.attr({ width: g.width(), height: g.height() }),
              this.updateLogoSizes(),
              this.updateGroup();
          },
          updateLogoSizes: function () {
            (s = -68),
              (l = -82),
              (u = 383),
              (c = 275),
              (f = 0.1 * g.width()),
              (d = 0.1 * g.height()),
              (h = g.width() / 2 - u / 2),
              (p = g.height() / 2 - c / 2);
          },
          initFrame: function () {
            (i = r.rect(g.width() / 2 - u / 2, g.height() / 2 - c / 2, u, c)),
              i.attr({ stroke: "white", fill: "none" }),
              this.updateFrame(),
              o.add(i);
          },
          updateFrame: function () {
            i.attr({
              width: u,
              height: c,
              "data-200":
                "@transform[cubic]: translate(" +
                g.width() / 2 +
                " " +
                g.height() / 2 +
                ") scale(0) rotate(0 " +
                g.width() / 2 +
                " " +
                g.height() / 2 +
                ");",
              "data-900":
                "@transform[cubic]: translate(-" +
                (h - f) +
                " -" +
                (p - d) +
                ") scale(1) rotate(-180 " +
                g.width() / 2 +
                " " +
                g.height() / 2 +
                ");",
            });
          },
          positionFrameInCenter: function () {
            i.attr({ x: g.width() / 2 - u / 2, y: g.height() / 2 - c / 2 });
          },
          initStars: function () {
            this.addStars();
          },
          addStars: function () {
            Array.prototype.forEach.call(m, function (t) {
              for (var e = 0; e < Snap.path.getTotalLength(t); e += 4) {
                var n = Snap.path.getPointAtLength(t, e),
                  i = n.x + s + f,
                  a = n.y + l + d,
                  u = i + v(v(-400, -200), v(200, 1e3)),
                  c = a + v(v(-300, -100), v(300, 600)),
                  g = (n.x + s + h, n.y + l + p, v(0.01, 0.99)),
                  m = r.circle(i, a, 1);
                m.attr({
                  fill: "white",
                  opacity: g,
                  cx: u,
                  cy: c,
                  "data-200": "@cx: " + u + ";@cy: " + c + ";opacity: " + g,
                  "data-900": "@cx: " + i + ";@cy: " + a + ";opacity: 1",
                }),
                  y.push(m),
                  o.add(m);
              }
            });
          },
          removeStars: function () {
            Array.prototype.forEach.call(y, function (t) {
              t.remove();
            });
          },
          updateGroup: function () {
            o.attr({
              "data-600": "opacity: 1;@transform[cubic]: translate(0 0);",
              "data-1000":
                "@transform[cubic]: translate(" +
                (h - f) +
                " " +
                (p - d) +
                ");",
              "data-1300": "opacity: 0",
            });
          },
          initBackgroundGradient: function () {
            var t = r.gradient(
              "l(.5, 0, .5, 1)#0000EF-#005BC7-#00ACA4-#00CB96"
            );
            (a = r.rect(0, 0, g.width(), g.height())),
              a.attr({
                opacity: 0,
                fill: t,
                "data-1000": "opacity: 0",
                "data-1200": "opacity: .4",
              });
          },
          updateBackgroundGradient: function () {
            a.attr({ width: g.width(), height: g.height() });
          },
        };
      },
      { "./letters": 8, "./rand": 9, "./viewport": 13, snap: 2 },
    ],
    13: [
      function (t, e, n) {
        var r = window,
          i = document,
          o = i.documentElement,
          a = i.getElementsByTagName("body")[0];
        e.exports = {
          width: function () {
            return r.innerWidth || o.clientWidth || a.clientWidth;
          },
          height: function () {
            return r.innerHeight || o.clientHeight || a.clientHeight;
          },
        };
      },
      {},
    ],
    14: [function (t, e, n) {}, {}],
  },
  {},
  [1]
);

