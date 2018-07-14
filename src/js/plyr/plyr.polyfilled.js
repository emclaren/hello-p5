! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t()
}(this, function() {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var n = t(function(e) {
            var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
        }),
        i = t(function(e) {
            var t = e.exports = {
                version: "2.5.3"
            };
            "number" == typeof __e && (__e = t)
        }),
        r = (i.version, function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }),
        s = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        },
        o = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        a = !o(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        l = n.document,
        c = r(l) && r(l.createElement),
        u = function(e) {

            return c ? l.createElement(e) : {}
        },
        d = !a && !o(function() {
            return 7 != Object.defineProperty(u("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        f = function(e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        },
        h = Object.defineProperty,
        p = {
            f: a ? Object.defineProperty : function(e, t, n) {
                if (s(e), t = f(t, !0), s(n), d) try {
                    return h(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        g = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        m = a ? function(e, t, n) {
            return p.f(e, t, g(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        y = {}.hasOwnProperty,
        v = function(e, t) {
            return y.call(e, t)
        },
        b = 0,
        w = Math.random(),
        E = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++b + w).toString(36))
        },
        k = t(function(e) {
            var t = E("src"),
                r = Function.toString,
                s = ("" + r).split("toString");
            i.inspectSource = function(e) {
                return r.call(e)
            }, (e.exports = function(e, i, r, o) {
                var a = "function" == typeof r;
                a && (v(r, "name") || m(r, "name", i)), e[i] !== r && (a && (v(r, t) || m(r, t, e[i] ? "" + e[i] : s.join(String(i)))), e === n ? e[i] = r : o ? e[i] ? e[i] = r : m(e, i, r) : (delete e[i], m(e, i, r)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[t] || r.call(this)
            })
        }),
        S = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        },
        T = function(e, t, n) {
            if (S(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function(n, i, r) {
                        return e.call(t, n, i, r)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        A = function(e, t, r) {
            var s, o, a, l, c = e & A.F,
                u = e & A.G,
                d = e & A.S,
                f = e & A.P,
                h = e & A.B,
                p = u ? n : d ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
                g = u ? i : i[t] || (i[t] = {}),
                y = g.prototype || (g.prototype = {});
            for (s in u && (r = t), r) a = ((o = !c && p && void 0 !== p[s]) ? p : r)[s], l = h && o ? T(a, n) : f && "function" == typeof a ? T(Function.call, a) : a, p && k(p, s, a, e & A.U), g[s] != a && m(g, s, l), f && y[s] != a && (y[s] = a)
        };
    n.core = i, A.F = 1, A.G = 2, A.S = 4, A.P = 8, A.B = 16, A.W = 32, A.U = 64, A.R = 128;
    for (var _, C = A, P = E("typed_array"), x = E("view"), M = !(!n.ArrayBuffer || !n.DataView), L = M, N = 0, O = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); N < 9;)(_ = n[O[N++]]) ? (m(_.prototype, P, !0), m(_.prototype, x, !0)) : L = !1;
    var j = {
            ABV: M,
            CONSTR: L,
            TYPED: P,
            VIEW: x
        },
        I = function(e, t, n) {
            for (var i in t) k(e, i, t[i], n);
            return e
        },
        F = function(e, t, n, i) {
            if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
            return e
        },
        R = Math.ceil,
        q = Math.floor,
        B = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? q : R)(e)
        },
        V = Math.min,
        D = function(e) {
            return e > 0 ? V(B(e), 9007199254740991) : 0
        },
        U = function(e) {
            if (void 0 === e) return 0;
            var t = B(e),
                n = D(t);
            if (t !== n) throw RangeError("Wrong length!");
            return n
        },
        H = {}.toString,
        W = function(e) {
            return H.call(e).slice(8, -1)
        },
        z = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == W(e) ? e.split("") : Object(e)
        },
        G = function(e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        },
        Y = function(e) {
            return z(G(e))
        },
        K = Math.max,
        Q = Math.min,
        J = function(e, t) {
            return (e = B(e)) < 0 ? K(e + t, 0) : Q(e, t)
        },
        $ = function(e) {
            return function(t, n, i) {
                var r, s = Y(t),
                    o = D(s.length),
                    a = J(i, o);
                if (e && n != n) {
                    for (; o > a;)
                        if ((r = s[a++]) != r) return !0
                } else
                    for (; o > a; a++)
                        if ((e || a in s) && s[a] === n) return e || a || 0;
                return !e && -1
            }
        },
        X = n["__core-js_shared__"] || (n["__core-js_shared__"] = {}),
        Z = function(e) {
            return X[e] || (X[e] = {})
        },
        ee = Z("keys"),
        te = function(e) {
            return ee[e] || (ee[e] = E(e))
        },
        ne = $(!1),
        ie = te("IE_PROTO"),
        re = function(e, t) {
            var n, i = Y(e),
                r = 0,
                s = [];
            for (n in i) n != ie && v(i, n) && s.push(n);
            for (; t.length > r;) v(i, n = t[r++]) && (~ne(s, n) || s.push(n));
            return s
        },
        se = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        oe = se.concat("length", "prototype"),
        ae = {
            f: Object.getOwnPropertyNames || function(e) {
                return re(e, oe)
            }
        },
        le = function(e) {
            return Object(G(e))
        },
        ce = function(e) {
            for (var t = le(this), n = D(t.length), i = arguments.length, r = J(i > 1 ? arguments[1] : void 0, n), s = i > 2 ? arguments[2] : void 0, o = void 0 === s ? n : J(s, n); o > r;) t[r++] = e;
            return t
        },
        ue = t(function(e) {
            var t = Z("wks"),
                i = n.Symbol,
                r = "function" == typeof i;
            (e.exports = function(e) {
                return t[e] || (t[e] = r && i[e] || (r ? i : E)("Symbol." + e))
            }).store = t
        }),
        de = p.f,
        fe = ue("toStringTag"),
        he = function(e, t, n) {
            e && !v(e = n ? e : e.prototype, fe) && de(e, fe, {
                configurable: !0,
                value: t
            })
        },
        pe = t(function(e, t) {
            var i = ae.f,
                r = p.f,
                s = "prototype",
                l = "Wrong index!",
                c = n.ArrayBuffer,
                u = n.DataView,
                d = n.Math,
                f = n.RangeError,
                h = n.Infinity,
                g = c,
                y = d.abs,
                v = d.pow,
                b = d.floor,
                w = d.log,
                E = d.LN2,
                k = a ? "_b" : "buffer",
                S = a ? "_l" : "byteLength",
                T = a ? "_o" : "byteOffset";

            function A(e, t, n) {
                var i, r, s, o = new Array(n),
                    a = 8 * n - t - 1,
                    l = (1 << a) - 1,
                    c = l >> 1,
                    u = 23 === t ? v(2, -24) - v(2, -77) : 0,
                    d = 0,
                    f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for ((e = y(e)) != e || e === h ? (r = e != e ? 1 : 0, i = l) : (i = b(w(e) / E), e * (s = v(2, -i)) < 1 && (i--, s *= 2), (e += i + c >= 1 ? u / s : u * v(2, 1 - c)) * s >= 2 && (i++, s /= 2), i + c >= l ? (r = 0, i = l) : i + c >= 1 ? (r = (e * s - 1) * v(2, t), i += c) : (r = e * v(2, c - 1) * v(2, t), i = 0)); t >= 8; o[d++] = 255 & r, r /= 256, t -= 8);
                for (i = i << t | r, a += t; a > 0; o[d++] = 255 & i, i /= 256, a -= 8);
                return o[--d] |= 128 * f, o
            }

            function _(e, t, n) {
                var i, r = 8 * n - t - 1,
                    s = (1 << r) - 1,
                    o = s >> 1,
                    a = r - 7,
                    l = n - 1,
                    c = e[l--],
                    u = 127 & c;
                for (c >>= 7; a > 0; u = 256 * u + e[l], l--, a -= 8);
                for (i = u & (1 << -a) - 1, u >>= -a, a += t; a > 0; i = 256 * i + e[l], l--, a -= 8);
                if (0 === u) u = 1 - o;
                else {
                    if (u === s) return i ? NaN : c ? -h : h;
                    i += v(2, t), u -= o
                }
                return (c ? -1 : 1) * i * v(2, u - t)
            }

            function C(e) {
                return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
            }

            function P(e) {
                return [255 & e]
            }

            function x(e) {
                return [255 & e, e >> 8 & 255]
            }

            function M(e) {
                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
            }

            function L(e) {
                return A(e, 52, 8)
            }

            function N(e) {
                return A(e, 23, 4)
            }

            function O(e, t, n) {
                r(e[s], t, {
                    get: function() {
                        return this[n]
                    }
                })
            }

            function R(e, t, n, i) {
                var r = U(+n);
                if (r + t > e[S]) throw f(l);
                var s = e[k]._b,
                    o = r + e[T],
                    a = s.slice(o, o + t);
                return i ? a : a.reverse()
            }

            function q(e, t, n, i, r, s) {
                var o = U(+n);
                if (o + t > e[S]) throw f(l);
                for (var a = e[k]._b, c = o + e[T], u = i(+r), d = 0; d < t; d++) a[c + d] = u[s ? d : t - d - 1]
            }
            if (j.ABV) {
                if (!o(function() {
                        c(1)
                    }) || !o(function() {
                        new c(-1)
                    }) || o(function() {
                        return new c, new c(1.5), new c(NaN), "ArrayBuffer" != c.name
                    })) {
                    for (var V, H = (c = function(e) {
                            return F(this, c), new g(U(e))
                        })[s] = g[s], W = i(g), z = 0; W.length > z;)(V = W[z++]) in c || m(c, V, g[V]);
                    H.constructor = c
                }
                var G = new u(new c(2)),
                    Y = u[s].setInt8;
                G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || I(u[s], {
                    setInt8: function(e, t) {
                        Y.call(this, e, t << 24 >> 24)
                    },
                    setUint8: function(e, t) {
                        Y.call(this, e, t << 24 >> 24)
                    }
                }, !0)
            } else c = function(e) {
                F(this, c, "ArrayBuffer");
                var t = U(e);
                this._b = ce.call(new Array(t), 0), this[S] = t
            }, u = function(e, t, n) {
                F(this, u, "DataView"), F(e, c, "DataView");
                var i = e[S],
                    r = B(t);
                if (r < 0 || r > i) throw f("Wrong offset!");
                if (r + (n = void 0 === n ? i - r : D(n)) > i) throw f("Wrong length!");
                this[k] = e, this[T] = r, this[S] = n
            }, a && (O(c, "byteLength", "_l"), O(u, "buffer", "_b"), O(u, "byteLength", "_l"), O(u, "byteOffset", "_o")), I(u[s], {
                getInt8: function(e) {
                    return R(this, 1, e)[0] << 24 >> 24
                },
                getUint8: function(e) {
                    return R(this, 1, e)[0]
                },
                getInt16: function(e) {
                    var t = R(this, 2, e, arguments[1]);
                    return (t[1] << 8 | t[0]) << 16 >> 16
                },
                getUint16: function(e) {
                    var t = R(this, 2, e, arguments[1]);
                    return t[1] << 8 | t[0]
                },
                getInt32: function(e) {
                    return C(R(this, 4, e, arguments[1]))
                },
                getUint32: function(e) {
                    return C(R(this, 4, e, arguments[1])) >>> 0
                },
                getFloat32: function(e) {
                    return _(R(this, 4, e, arguments[1]), 23, 4)
                },
                getFloat64: function(e) {
                    return _(R(this, 8, e, arguments[1]), 52, 8)
                },
                setInt8: function(e, t) {
                    q(this, 1, e, P, t)
                },
                setUint8: function(e, t) {
                    q(this, 1, e, P, t)
                },
                setInt16: function(e, t) {
                    q(this, 2, e, x, t, arguments[2])
                },
                setUint16: function(e, t) {
                    q(this, 2, e, x, t, arguments[2])
                },
                setInt32: function(e, t) {
                    q(this, 4, e, M, t, arguments[2])
                },
                setUint32: function(e, t) {
                    q(this, 4, e, M, t, arguments[2])
                },
                setFloat32: function(e, t) {
                    q(this, 4, e, N, t, arguments[2])
                },
                setFloat64: function(e, t) {
                    q(this, 8, e, L, t, arguments[2])
                }
            });
            he(c, "ArrayBuffer"), he(u, "DataView"), m(u[s], j.VIEW, !0), t.ArrayBuffer = c, t.DataView = u
        }),
        ge = ue("species"),
        me = function(e, t) {
            var n, i = s(e).constructor;
            return void 0 === i || void 0 == (n = s(i)[ge]) ? t : S(n)
        },
        ye = ue("species"),
        ve = function(e) {
            var t = n[e];
            a && t && !t[ye] && p.f(t, ye, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        },
        be = n.ArrayBuffer,
        we = pe.ArrayBuffer,
        Ee = pe.DataView,
        ke = j.ABV && be.isView,
        Se = we.prototype.slice,
        Te = j.VIEW;
    C(C.G + C.W + C.F * (be !== we), {
        ArrayBuffer: we
    }), C(C.S + C.F * !j.CONSTR, "ArrayBuffer", {
        isView: function(e) {
            return ke && ke(e) || r(e) && Te in e
        }
    }), C(C.P + C.U + C.F * o(function() {
        return !new we(2).slice(1, void 0).byteLength
    }), "ArrayBuffer", {
        slice: function(e, t) {
            if (void 0 !== Se && void 0 === t) return Se.call(s(this), e);
            for (var n = s(this).byteLength, i = J(e, n), r = J(void 0 === t ? n : t, n), o = new(me(this, we))(D(r - i)), a = new Ee(this), l = new Ee(o), c = 0; i < r;) l.setUint8(c++, a.getUint8(i++));
            return o
        }
    }), ve("ArrayBuffer");
    var Ae = ue("toStringTag"),
        _e = "Arguments" == W(function() {
            return arguments
        }()),
        Ce = function(e) {
            var t, n, i;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), Ae)) ? n : _e ? W(t) : "Object" == (i = W(t)) && "function" == typeof t.callee ? "Arguments" : i
        },
        Pe = {},
        xe = ue("iterator"),
        Me = Array.prototype,
        Le = function(e) {
            return void 0 !== e && (Pe.Array === e || Me[xe] === e)
        },
        Ne = Object.keys || function(e) {
            return re(e, se)
        },
        Oe = a ? Object.defineProperties : function(e, t) {
            s(e);
            for (var n, i = Ne(t), r = i.length, o = 0; r > o;) p.f(e, n = i[o++], t[n]);
            return e
        },
        je = n.document,
        Ie = je && je.documentElement,
        Fe = te("IE_PROTO"),
        Re = function() {},
        qe = function() {
            var e, t = u("iframe"),
                n = se.length;
            for (t.style.display = "none", Ie.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), qe = e.F; n--;) delete qe.prototype[se[n]];
            return qe()
        },
        Be = Object.create || function(e, t) {
            var n;
            return null !== e ? (Re.prototype = s(e), n = new Re, Re.prototype = null, n[Fe] = e) : n = qe(), void 0 === t ? n : Oe(n, t)
        },
        Ve = te("IE_PROTO"),
        De = Object.prototype,
        Ue = Object.getPrototypeOf || function(e) {
            return e = le(e), v(e, Ve) ? e[Ve] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? De : null
        },
        He = ue("iterator"),
        We = i.getIteratorMethod = function(e) {
            if (void 0 != e) return e[He] || e["@@iterator"] || Pe[Ce(e)]
        },
        ze = Array.isArray || function(e) {
            return "Array" == W(e)
        },
        Ge = ue("species"),
        Ye = function(e, t) {
            return new(function(e) {
                var t;
                return ze(e) && ("function" != typeof(t = e.constructor) || t !== Array && !ze(t.prototype) || (t = void 0), r(t) && null === (t = t[Ge]) && (t = void 0)), void 0 === t ? Array : t
            }(e))(t)
        },
        Ke = function(e, t) {
            var n = 1 == e,
                i = 2 == e,
                r = 3 == e,
                s = 4 == e,
                o = 6 == e,
                a = 5 == e || o,
                l = t || Ye;
            return function(t, c, u) {
                for (var d, f, h = le(t), p = z(h), g = T(c, u, 3), m = D(p.length), y = 0, v = n ? l(t, m) : i ? l(t, 0) : void 0; m > y; y++)
                    if ((a || y in p) && (f = g(d = p[y], y, h), e))
                        if (n) v[y] = f;
                        else if (f) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return d;
                    case 6:
                        return y;
                    case 2:
                        v.push(d)
                } else if (s) return !1;
                return o ? -1 : r || s ? s : v
            }
        },
        Qe = ue("unscopables"),
        Je = Array.prototype;
    void 0 == Je[Qe] && m(Je, Qe, {});
    var $e = function(e) {
            Je[Qe][e] = !0
        },
        Xe = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        },
        Ze = {};
    m(Ze, ue("iterator"), function() {
        return this
    });
    var et = function(e, t, n) {
            e.prototype = Be(Ze, {
                next: g(1, n)
            }), he(e, t + " Iterator")
        },
        tt = ue("iterator"),
        nt = !([].keys && "next" in [].keys()),
        it = function() {
            return this
        },
        rt = function(e, t, n, i, r, s, o) {
            et(n, t, i);
            var a, l, c, u = function(e) {
                    if (!nt && e in p) return p[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                d = t + " Iterator",
                f = "values" == r,
                h = !1,
                p = e.prototype,
                g = p[tt] || p["@@iterator"] || r && p[r],
                y = !nt && g || u(r),
                b = r ? f ? u("entries") : y : void 0,
                w = "Array" == t && p.entries || g;
            if (w && (c = Ue(w.call(new e))) !== Object.prototype && c.next && (he(c, d, !0), v(c, tt) || m(c, tt, it)), f && g && "values" !== g.name && (h = !0, y = function() {
                    return g.call(this)
                }), (nt || h || !p[tt]) && m(p, tt, y), Pe[t] = y, Pe[d] = it, r)
                if (a = {
                        values: f ? y : u("values"),
                        keys: s ? y : u("keys"),
                        entries: b
                    }, o)
                    for (l in a) l in p || k(p, l, a[l]);
                else C(C.P + C.F * (nt || h), t, a);
            return a
        },
        st = rt(Array, "Array", function(e, t) {
            this._t = Y(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, Xe(1)) : Xe(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values");
    Pe.Arguments = Pe.Array, $e("keys"), $e("values"), $e("entries");
    var ot = ue("iterator"),
        at = !1;
    try {
        [7][ot]().return = function() {
            at = !0
        }
    } catch (e) {}
    var lt = function(e, t) {
            if (!t && !at) return !1;
            var n = !1;
            try {
                var i = [7],
                    r = i[ot]();
                r.next = function() {
                    return {
                        done: n = !0
                    }
                }, i[ot] = function() {
                    return r
                }, e(i)
            } catch (e) {}
            return n
        },
        ct = [].copyWithin || function(e, t) {
            var n = le(this),
                i = D(n.length),
                r = J(e, i),
                s = J(t, i),
                o = arguments.length > 2 ? arguments[2] : void 0,
                a = Math.min((void 0 === o ? i : J(o, i)) - s, i - r),
                l = 1;
            for (s < r && r < s + a && (l = -1, s += a - 1, r += a - 1); a-- > 0;) s in n ? n[r] = n[s] : delete n[r], r += l, s += l;
            return n
        },
        ut = {
            f: {}.propertyIsEnumerable
        },
        dt = Object.getOwnPropertyDescriptor,
        ft = {
            f: a ? dt : function(e, t) {
                if (e = Y(e), t = f(t, !0), d) try {
                    return dt(e, t)
                } catch (e) {}
                if (v(e, t)) return g(!ut.f.call(e, t), e[t])
            }
        },
        ht = t(function(e) {
            if (a) {
                var t = n,
                    i = o,
                    s = C,
                    l = j,
                    c = pe,
                    u = T,
                    d = F,
                    h = g,
                    y = m,
                    b = I,
                    w = B,
                    k = D,
                    S = U,
                    A = J,
                    _ = f,
                    P = v,
                    x = Ce,
                    M = r,
                    L = le,
                    N = Le,
                    O = Be,
                    R = Ue,
                    q = ae.f,
                    V = We,
                    H = E,
                    W = ue,
                    z = Ke,
                    G = $,
                    Y = me,
                    K = st,
                    Q = Pe,
                    X = lt,
                    Z = ve,
                    ee = ce,
                    te = ct,
                    ne = p,
                    ie = ft,
                    re = ne.f,
                    se = ie.f,
                    oe = t.RangeError,
                    de = t.TypeError,
                    fe = t.Uint8Array,
                    he = Array.prototype,
                    ge = c.ArrayBuffer,
                    ye = c.DataView,
                    be = z(0),
                    we = z(2),
                    Ee = z(3),
                    ke = z(4),
                    Se = z(5),
                    Te = z(6),
                    Ae = G(!0),
                    _e = G(!1),
                    xe = K.values,
                    Me = K.keys,
                    Ne = K.entries,
                    Oe = he.lastIndexOf,
                    je = he.reduce,
                    Ie = he.reduceRight,
                    Fe = he.join,
                    Re = he.sort,
                    qe = he.slice,
                    Ve = he.toString,
                    De = he.toLocaleString,
                    He = W("iterator"),
                    ze = W("toStringTag"),
                    Ge = H("typed_constructor"),
                    Ye = H("def_constructor"),
                    Qe = l.CONSTR,
                    Je = l.TYPED,
                    $e = l.VIEW,
                    Xe = z(1, function(e, t) {
                        return it(Y(e, e[Ye]), t)
                    }),
                    Ze = i(function() {
                        return 1 === new fe(new Uint16Array([1]).buffer)[0]
                    }),
                    et = !!fe && !!fe.prototype.set && i(function() {
                        new fe(1).set({})
                    }),
                    tt = function(e, t) {
                        var n = w(e);
                        if (n < 0 || n % t) throw oe("Wrong offset!");
                        return n
                    },
                    nt = function(e) {
                        if (M(e) && Je in e) return e;
                        throw de(e + " is not a typed array!")
                    },
                    it = function(e, t) {
                        if (!(M(e) && Ge in e)) throw de("It is not a typed array constructor!");
                        return new e(t)
                    },
                    rt = function(e, t) {
                        return ot(Y(e, e[Ye]), t)
                    },
                    ot = function(e, t) {
                        for (var n = 0, i = t.length, r = it(e, i); i > n;) r[n] = t[n++];
                        return r
                    },
                    at = function(e, t, n) {
                        re(e, t, {
                            get: function() {
                                return this._d[n]
                            }
                        })
                    },
                    ut = function(e) {
                        var t, n, i, r, s, o, a = L(e),
                            l = arguments.length,
                            c = l > 1 ? arguments[1] : void 0,
                            d = void 0 !== c,
                            f = V(a);
                        if (void 0 != f && !N(f)) {
                            for (o = f.call(a), i = [], t = 0; !(s = o.next()).done; t++) i.push(s.value);
                            a = i
                        }
                        for (d && l > 2 && (c = u(c, arguments[2], 2)), t = 0, n = k(a.length), r = it(this, n); n > t; t++) r[t] = d ? c(a[t], t) : a[t];
                        return r
                    },
                    dt = function() {
                        for (var e = 0, t = arguments.length, n = it(this, t); t > e;) n[e] = arguments[e++];
                        return n
                    },
                    ht = !!fe && i(function() {
                        De.call(new fe(1))
                    }),
                    pt = function() {
                        return De.apply(ht ? qe.call(nt(this)) : nt(this), arguments)
                    },
                    gt = {
                        copyWithin: function(e, t) {
                            return te.call(nt(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        every: function(e) {
                            return ke(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        fill: function(e) {
                            return ee.apply(nt(this), arguments)
                        },
                        filter: function(e) {
                            return rt(this, we(nt(this), e, arguments.length > 1 ? arguments[1] : void 0))
                        },
                        find: function(e) {
                            return Se(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        findIndex: function(e) {
                            return Te(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        forEach: function(e) {
                            be(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        indexOf: function(e) {
                            return _e(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        includes: function(e) {
                            return Ae(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        join: function(e) {
                            return Fe.apply(nt(this), arguments)
                        },
                        lastIndexOf: function(e) {
                            return Oe.apply(nt(this), arguments)
                        },
                        map: function(e) {
                            return Xe(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        reduce: function(e) {
                            return je.apply(nt(this), arguments)
                        },
                        reduceRight: function(e) {
                            return Ie.apply(nt(this), arguments)
                        },
                        reverse: function() {
                            for (var e, t = nt(this).length, n = Math.floor(t / 2), i = 0; i < n;) e = this[i], this[i++] = this[--t], this[t] = e;
                            return this
                        },
                        some: function(e) {
                            return Ee(nt(this), e, arguments.length > 1 ? arguments[1] : void 0)
                        },
                        sort: function(e) {
                            return Re.call(nt(this), e)
                        },
                        subarray: function(e, t) {
                            var n = nt(this),
                                i = n.length,
                                r = A(e, i);
                            return new(Y(n, n[Ye]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, k((void 0 === t ? i : A(t, i)) - r))
                        }
                    },
                    mt = function(e, t) {
                        return rt(this, qe.call(nt(this), e, t))
                    },
                    yt = function(e) {
                        nt(this);
                        var t = tt(arguments[1], 1),
                            n = this.length,
                            i = L(e),
                            r = k(i.length),
                            s = 0;
                        if (r + t > n) throw oe("Wrong length!");
                        for (; s < r;) this[t + s] = i[s++]
                    },
                    vt = {
                        entries: function() {
                            return Ne.call(nt(this))
                        },
                        keys: function() {
                            return Me.call(nt(this))
                        },
                        values: function() {
                            return xe.call(nt(this))
                        }
                    },
                    bt = function(e, t) {
                        return M(e) && e[Je] && "symbol" != typeof t && t in e && String(+t) == String(t)
                    },
                    wt = function(e, t) {
                        return bt(e, t = _(t, !0)) ? h(2, e[t]) : se(e, t)
                    },
                    Et = function(e, t, n) {
                        return !(bt(e, t = _(t, !0)) && M(n) && P(n, "value")) || P(n, "get") || P(n, "set") || n.configurable || P(n, "writable") && !n.writable || P(n, "enumerable") && !n.enumerable ? re(e, t, n) : (e[t] = n.value, e)
                    };
                Qe || (ie.f = wt, ne.f = Et), s(s.S + s.F * !Qe, "Object", {
                    getOwnPropertyDescriptor: wt,
                    defineProperty: Et
                }), i(function() {
                    Ve.call({})
                }) && (Ve = De = function() {
                    return Fe.call(this)
                });
                var kt = b({}, gt);
                b(kt, vt), y(kt, He, vt.values), b(kt, {
                    slice: mt,
                    set: yt,
                    constructor: function() {},
                    toString: Ve,
                    toLocaleString: pt
                }), at(kt, "buffer", "b"), at(kt, "byteOffset", "o"), at(kt, "byteLength", "l"), at(kt, "length", "e"), re(kt, ze, {
                    get: function() {
                        return this[Je]
                    }
                }), e.exports = function(e, n, r, o) {
                    var a = e + ((o = !!o) ? "Clamped" : "") + "Array",
                        c = "get" + e,
                        u = "set" + e,
                        f = t[a],
                        h = f || {},
                        p = f && R(f),
                        g = !f || !l.ABV,
                        m = {},
                        v = f && f.prototype,
                        b = function(e, t) {
                            re(e, t, {
                                get: function() {
                                    return function(e, t) {
                                        var i = e._d;
                                        return i.v[c](t * n + i.o, Ze)
                                    }(this, t)
                                },
                                set: function(e) {
                                    return function(e, t, i) {
                                        var r = e._d;
                                        o && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.v[u](t * n + r.o, i, Ze)
                                    }(this, t, e)
                                },
                                enumerable: !0
                            })
                        };
                    g ? (f = r(function(e, t, i, r) {
                        d(e, f, a, "_d");
                        var s, o, l, c, u = 0,
                            h = 0;
                        if (M(t)) {
                            if (!(t instanceof ge || "ArrayBuffer" == (c = x(t)) || "SharedArrayBuffer" == c)) return Je in t ? ot(f, t) : ut.call(f, t);
                            s = t, h = tt(i, n);
                            var p = t.byteLength;
                            if (void 0 === r) {
                                if (p % n) throw oe("Wrong length!");
                                if ((o = p - h) < 0) throw oe("Wrong length!")
                            } else if ((o = k(r) * n) + h > p) throw oe("Wrong length!");
                            l = o / n
                        } else l = S(t), s = new ge(o = l * n);
                        for (y(e, "_d", {
                                b: s,
                                o: h,
                                l: o,
                                e: l,
                                v: new ye(s)
                            }); u < l;) b(e, u++)
                    }), v = f.prototype = O(kt), y(v, "constructor", f)) : i(function() {
                        f(1)
                    }) && i(function() {
                        new f(-1)
                    }) && X(function(e) {
                        new f, new f(null), new f(1.5), new f(e)
                    }, !0) || (f = r(function(e, t, i, r) {
                        var s;
                        return d(e, f, a), M(t) ? t instanceof ge || "ArrayBuffer" == (s = x(t)) || "SharedArrayBuffer" == s ? void 0 !== r ? new h(t, tt(i, n), r) : void 0 !== i ? new h(t, tt(i, n)) : new h(t) : Je in t ? ot(f, t) : ut.call(f, t) : new h(S(t))
                    }), be(p !== Function.prototype ? q(h).concat(q(p)) : q(h), function(e) {
                        e in f || y(f, e, h[e])
                    }), f.prototype = v, v.constructor = f);
                    var w = v[He],
                        E = !!w && ("values" == w.name || void 0 == w.name),
                        T = vt.values;
                    y(f, Ge, !0), y(v, Je, a), y(v, $e, !0), y(v, Ye, f), (o ? new f(1)[ze] == a : ze in v) || re(v, ze, {
                        get: function() {
                            return a
                        }
                    }), m[a] = f, s(s.G + s.W + s.F * (f != h), m), s(s.S, a, {
                        BYTES_PER_ELEMENT: n
                    }), s(s.S + s.F * i(function() {
                        h.of.call(f, 1)
                    }), a, {
                        from: ut,
                        of: dt
                    }), "BYTES_PER_ELEMENT" in v || y(v, "BYTES_PER_ELEMENT", n), s(s.P, a, gt), Z(a), s(s.P + s.F * et, a, {
                        set: yt
                    }), s(s.P + s.F * !E, a, vt), v.toString != Ve && (v.toString = Ve), s(s.P + s.F * i(function() {
                        new f(1).slice()
                    }), a, {
                        slice: mt
                    }), s(s.P + s.F * (i(function() {
                        return [1, 2].toLocaleString() != new f([1, 2]).toLocaleString()
                    }) || !i(function() {
                        v.toLocaleString.call([1, 2])
                    })), a, {
                        toLocaleString: pt
                    }), Q[a] = E ? w : T, E || y(v, He, T)
                }
            } else e.exports = function() {}
        });
    ht("Int8", 1, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    }), ht("Uint8", 1, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    }), ht("Uint8", 1, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    }, !0), ht("Int16", 2, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    }), ht("Uint16", 2, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    }), ht("Int32", 4, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    }), ht("Uint32", 4, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    }), ht("Float32", 4, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    }), ht("Float64", 8, function(e) {
        return function(t, n, i) {
            return e(this, t, n, i)
        }
    });
    var pt = function(e, t, n, i) {
            try {
                return i ? t(s(n)[0], n[1]) : t(n)
            } catch (t) {
                var r = e.return;
                throw void 0 !== r && s(r.call(e)), t
            }
        },
        gt = t(function(e) {
            var t = {},
                n = {},
                i = e.exports = function(e, i, r, o, a) {
                    var l, c, u, d, f = a ? function() {
                            return e
                        } : We(e),
                        h = T(r, o, i ? 2 : 1),
                        p = 0;
                    if ("function" != typeof f) throw TypeError(e + " is not iterable!");
                    if (Le(f)) {
                        for (l = D(e.length); l > p; p++)
                            if ((d = i ? h(s(c = e[p])[0], c[1]) : h(e[p])) === t || d === n) return d
                    } else
                        for (u = f.call(e); !(c = u.next()).done;)
                            if ((d = pt(u, h, c.value, i)) === t || d === n) return d
                };
            i.BREAK = t, i.RETURN = n
        }),
        mt = t(function(e) {
            var t = E("meta"),
                n = p.f,
                i = 0,
                s = Object.isExtensible || function() {
                    return !0
                },
                a = !o(function() {
                    return s(Object.preventExtensions({}))
                }),
                l = function(e) {
                    n(e, t, {
                        value: {
                            i: "O" + ++i,
                            w: {}
                        }
                    })
                },
                c = e.exports = {
                    KEY: t,
                    NEED: !1,
                    fastKey: function(e, n) {
                        if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!v(e, t)) {
                            if (!s(e)) return "F";
                            if (!n) return "E";
                            l(e)
                        }
                        return e[t].i
                    },
                    getWeak: function(e, n) {
                        if (!v(e, t)) {
                            if (!s(e)) return !0;
                            if (!n) return !1;
                            l(e)
                        }
                        return e[t].w
                    },
                    onFreeze: function(e) {
                        return a && c.NEED && s(e) && !v(e, t) && l(e), e
                    }
                }
        }),
        yt = (mt.KEY, mt.NEED, mt.fastKey, mt.getWeak, mt.onFreeze, function(e, t) {
            if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }),
        vt = p.f,
        bt = mt.fastKey,
        wt = a ? "_s" : "size",
        Et = function(e, t) {
            var n, i = bt(t);
            if ("F" !== i) return e._i[i];
            for (n = e._f; n; n = n.n)
                if (n.k == t) return n
        },
        kt = {
            getConstructor: function(e, t, n, i) {
                var r = e(function(e, s) {
                    F(e, r, t, "_i"), e._t = t, e._i = Be(null), e._f = void 0, e._l = void 0, e[wt] = 0, void 0 != s && gt(s, n, e[i], e)
                });
                return I(r.prototype, {
                    clear: function() {
                        for (var e = yt(this, t), n = e._i, i = e._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
                        e._f = e._l = void 0, e[wt] = 0
                    },
                    delete: function(e) {
                        var n = yt(this, t),
                            i = Et(n, e);
                        if (i) {
                            var r = i.n,
                                s = i.p;
                            delete n._i[i.i], i.r = !0, s && (s.n = r), r && (r.p = s), n._f == i && (n._f = r), n._l == i && (n._l = s), n[wt]--
                        }
                        return !!i
                    },
                    forEach: function(e) {
                        yt(this, t);
                        for (var n, i = T(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                            for (i(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function(e) {
                        return !!Et(yt(this, t), e)
                    }
                }), a && vt(r.prototype, "size", {
                    get: function() {
                        return yt(this, t)[wt]
                    }
                }), r
            },
            def: function(e, t, n) {
                var i, r, s = Et(e, t);
                return s ? s.v = n : (e._l = s = {
                    i: r = bt(t, !0),
                    k: t,
                    v: n,
                    p: i = e._l,
                    n: void 0,
                    r: !1
                }, e._f || (e._f = s), i && (i.n = s), e[wt]++, "F" !== r && (e._i[r] = s)), e
            },
            getEntry: Et,
            setStrong: function(e, t, n) {
                rt(e, t, function(e, n) {
                    this._t = yt(e, t), this._k = n, this._l = void 0
                }, function() {
                    for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                    return this._t && (this._l = t = t ? t.n : this._t._f) ? Xe(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, Xe(1))
                }, n ? "entries" : "values", !n, !0), ve(t)
            }
        },
        St = function(e, t) {
            if (s(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        },
        Tt = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
                try {
                    (n = T(Function.call, ft.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                } catch (e) {
                    t = !0
                }
                return function(e, i) {
                    return St(e, i), t ? e.__proto__ = i : n(e, i), e
                }
            }({}, !1) : void 0),
            check: St
        },
        At = Tt.set,
        _t = function(e, t, i, s, a, l) {
            var c = n[e],
                u = c,
                d = a ? "set" : "add",
                f = u && u.prototype,
                h = {},
                p = function(e) {
                    var t = f[e];
                    k(f, e, "delete" == e ? function(e) {
                        return !(l && !r(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "has" == e ? function(e) {
                        return !(l && !r(e)) && t.call(this, 0 === e ? 0 : e)
                    } : "get" == e ? function(e) {
                        return l && !r(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : "add" == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : function(e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if ("function" == typeof u && (l || f.forEach && !o(function() {
                    (new u).entries().next()
                }))) {
                var g = new u,
                    m = g[d](l ? {} : -0, 1) != g,
                    y = o(function() {
                        g.has(1)
                    }),
                    v = lt(function(e) {
                        new u(e)
                    }),
                    b = !l && o(function() {
                        for (var e = new u, t = 5; t--;) e[d](t, t);
                        return !e.has(-0)
                    });
                v || ((u = t(function(t, n) {
                    F(t, u, e);
                    var i = function(e, t, n) {
                        var i, s = t.constructor;
                        return s !== n && "function" == typeof s && (i = s.prototype) !== n.prototype && r(i) && At && At(e, i), e
                    }(new c, t, u);
                    return void 0 != n && gt(n, a, i[d], i), i
                })).prototype = f, f.constructor = u), (y || b) && (p("delete"), p("has"), a && p("get")), (b || m) && p(d), l && f.clear && delete f.clear
            } else u = s.getConstructor(t, e, a, d), I(u.prototype, i), mt.NEED = !0;
            return he(u, e), h[e] = u, C(C.G + C.W + C.F * (u != c), h), l || s.setStrong(u, e, a), u
        },
        Ct = (_t("Map", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function(e) {
                var t = kt.getEntry(yt(this, "Map"), e);
                return t && t.v
            },
            set: function(e, t) {
                return kt.def(yt(this, "Map"), 0 === e ? 0 : e, t)
            }
        }, kt, !0), _t("Set", function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(e) {
                return kt.def(yt(this, "Set"), e = 0 === e ? 0 : e, e)
            }
        }, kt), {
            f: Object.getOwnPropertySymbols
        }),
        Pt = Object.assign,
        xt = !Pt || o(function() {
            var e = {},
                t = {},
                n = Symbol(),
                i = "abcdefghijklmnopqrst";
            return e[n] = 7, i.split("").forEach(function(e) {
                t[e] = e
            }), 7 != Pt({}, e)[n] || Object.keys(Pt({}, t)).join("") != i
        }) ? function(e, t) {
            for (var n = le(e), i = arguments.length, r = 1, s = Ct.f, o = ut.f; i > r;)
                for (var a, l = z(arguments[r++]), c = s ? Ne(l).concat(s(l)) : Ne(l), u = c.length, d = 0; u > d;) o.call(l, a = c[d++]) && (n[a] = l[a]);
            return n
        } : Pt,
        Mt = mt.getWeak,
        Lt = Ke(5),
        Nt = Ke(6),
        Ot = 0,
        jt = function(e) {
            return e._l || (e._l = new It)
        },
        It = function() {
            this.a = []
        },
        Ft = function(e, t) {
            return Lt(e.a, function(e) {
                return e[0] === t
            })
        };
    It.prototype = {
        get: function(e) {
            var t = Ft(this, e);
            if (t) return t[1]
        },
        has: function(e) {
            return !!Ft(this, e)
        },
        set: function(e, t) {
            var n = Ft(this, e);
            n ? n[1] = t : this.a.push([e, t])
        },
        delete: function(e) {
            var t = Nt(this.a, function(t) {
                return t[0] === e
            });
            return ~t && this.a.splice(t, 1), !!~t
        }
    };
    var Rt = {
        getConstructor: function(e, t, n, i) {
            var s = e(function(e, r) {
                F(e, s, t, "_i"), e._t = t, e._i = Ot++, e._l = void 0, void 0 != r && gt(r, n, e[i], e)
            });
            return I(s.prototype, {
                delete: function(e) {
                    if (!r(e)) return !1;
                    var n = Mt(e);
                    return !0 === n ? jt(yt(this, t)).delete(e) : n && v(n, this._i) && delete n[this._i]
                },
                has: function(e) {
                    if (!r(e)) return !1;
                    var n = Mt(e);
                    return !0 === n ? jt(yt(this, t)).has(e) : n && v(n, this._i)
                }
            }), s
        },
        def: function(e, t, n) {
            var i = Mt(s(t), !0);
            return !0 === i ? jt(e).set(t, n) : i[e._i] = n, e
        },
        ufstore: jt
    };
    t(function(e) {
        var t, n = Ke(0),
            i = mt.getWeak,
            s = Object.isExtensible,
            a = Rt.ufstore,
            l = {},
            c = function(e) {
                return function() {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            u = {
                get: function(e) {
                    if (r(e)) {
                        var t = i(e);
                        return !0 === t ? a(yt(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
                    }
                },
                set: function(e, t) {
                    return Rt.def(yt(this, "WeakMap"), e, t)
                }
            },
            d = e.exports = _t("WeakMap", c, u, Rt, !0, !0);
        o(function() {
            return 7 != (new d).set((Object.freeze || Object)(l), 7).get(l)
        }) && (t = Rt.getConstructor(c, "WeakMap"), xt(t.prototype, u), mt.NEED = !0, n(["delete", "has", "get", "set"], function(e) {
            var n = d.prototype,
                i = n[e];
            k(n, e, function(n, o) {
                if (r(n) && !s(n)) {
                    this._f || (this._f = new t);
                    var a = this._f[e](n, o);
                    return "set" == e ? this : a
                }
                return i.call(this, n, o)
            })
        }))
    });
    _t("WeakSet", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(e) {
            return Rt.def(yt(this, "WeakSet"), e, !0)
        }
    }, Rt, !1, !0);
    var qt = (n.Reflect || {}).apply,
        Bt = Function.apply;
    C(C.S + C.F * !o(function() {
        qt(function() {})
    }), "Reflect", {
        apply: function(e, t, n) {
            var i = S(e),
                r = s(n);
            return qt ? qt(i, t, r) : Bt.call(i, t, r)
        }
    });
    var Vt = function(e, t, n) {
            var i = void 0 === n;
            switch (t.length) {
                case 0:
                    return i ? e() : e.call(n);
                case 1:
                    return i ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        },
        Dt = [].slice,
        Ut = {},
        Ht = Function.bind || function(e) {
            var t = S(this),
                n = Dt.call(arguments, 1),
                i = function() {
                    var r = n.concat(Dt.call(arguments));
                    return this instanceof i ? function(e, t, n) {
                        if (!(t in Ut)) {
                            for (var i = [], r = 0; r < t; r++) i[r] = "a[" + r + "]";
                            Ut[t] = Function("F,a", "return new F(" + i.join(",") + ")")
                        }
                        return Ut[t](e, n)
                    }(t, r.length, r) : Vt(t, r, e)
                };
            return r(t.prototype) && (i.prototype = t.prototype), i
        },
        Wt = (n.Reflect || {}).construct,
        zt = o(function() {
            function e() {}
            return !(Wt(function() {}, [], e) instanceof e)
        }),
        Gt = !o(function() {
            Wt(function() {})
        });
    C(C.S + C.F * (zt || Gt), "Reflect", {
        construct: function(e, t) {
            S(e), s(t);
            var n = arguments.length < 3 ? e : S(arguments[2]);
            if (Gt && !zt) return Wt(e, t, n);
            if (e == n) {
                switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3])
                }
                var i = [null];
                return i.push.apply(i, t), new(Ht.apply(e, i))
            }
            var o = n.prototype,
                a = Be(r(o) ? o : Object.prototype),
                l = Function.apply.call(e, a, t);
            return r(l) ? l : a
        }
    }), C(C.S + C.F * o(function() {
        Reflect.defineProperty(p.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    }), "Reflect", {
        defineProperty: function(e, t, n) {
            s(e), t = f(t, !0), s(n);
            try {
                return p.f(e, t, n), !0
            } catch (e) {
                return !1
            }
        }
    });
    var Yt = ft.f;
    C(C.S, "Reflect", {
        deleteProperty: function(e, t) {
            var n = Yt(s(e), t);
            return !(n && !n.configurable) && delete e[t]
        }
    }), C(C.S, "Reflect", {
        get: function e(t, n) {
            var i, o, a = arguments.length < 3 ? t : arguments[2];
            return s(t) === a ? t[n] : (i = ft.f(t, n)) ? v(i, "value") ? i.value : void 0 !== i.get ? i.get.call(a) : void 0 : r(o = Ue(t)) ? e(o, n, a) : void 0
        }
    }), C(C.S, "Reflect", {
        getOwnPropertyDescriptor: function(e, t) {
            return ft.f(s(e), t)
        }
    }), C(C.S, "Reflect", {
        getPrototypeOf: function(e) {
            return Ue(s(e))
        }
    }), C(C.S, "Reflect", {
        has: function(e, t) {
            return t in e
        }
    });
    var Kt = Object.isExtensible;
    C(C.S, "Reflect", {
        isExtensible: function(e) {
            return s(e), !Kt || Kt(e)
        }
    });
    var Qt = n.Reflect,
        Jt = Qt && Qt.ownKeys || function(e) {
            var t = ae.f(s(e)),
                n = Ct.f;
            return n ? t.concat(n(e)) : t
        };
    C(C.S, "Reflect", {
        ownKeys: Jt
    });
    var $t = Object.preventExtensions;
    C(C.S, "Reflect", {
        preventExtensions: function(e) {
            s(e);
            try {
                return $t && $t(e), !0
            } catch (e) {
                return !1
            }
        }
    }), C(C.S, "Reflect", {
        set: function e(t, n, i) {
            var o, a, l = arguments.length < 4 ? t : arguments[3],
                c = ft.f(s(t), n);
            if (!c) {
                if (r(a = Ue(t))) return e(a, n, i, l);
                c = g(0)
            }
            return v(c, "value") ? !(!1 === c.writable || !r(l) || ((o = ft.f(l, n) || g(0)).value = i, p.f(l, n, o), 0)) : void 0 !== c.set && (c.set.call(l, i), !0)
        }
    }), Tt && C(C.S, "Reflect", {
        setPrototypeOf: function(e, t) {
            Tt.check(e, t);
            try {
                return Tt.set(e, t), !0
            } catch (e) {
                return !1
            }
        }
    });
    var Xt, Zt, en, tn = n.process,
        nn = n.setImmediate,
        rn = n.clearImmediate,
        sn = n.MessageChannel,
        on = n.Dispatch,
        an = 0,
        ln = {},
        cn = function() {
            var e = +this;
            if (ln.hasOwnProperty(e)) {
                var t = ln[e];
                delete ln[e], t()
            }
        },
        un = function(e) {
            cn.call(e.data)
        };
    nn && rn || (nn = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return ln[++an] = function() {
            Vt("function" == typeof e ? e : Function(e), t)
        }, Xt(an), an
    }, rn = function(e) {
        delete ln[e]
    }, "process" == W(tn) ? Xt = function(e) {
        tn.nextTick(T(cn, e, 1))
    } : on && on.now ? Xt = function(e) {
        on.now(T(cn, e, 1))
    } : sn ? (en = (Zt = new sn).port2, Zt.port1.onmessage = un, Xt = T(en.postMessage, en, 1)) : n.addEventListener && "function" == typeof postMessage && !n.importScripts ? (Xt = function(e) {
        n.postMessage(e + "", "*")
    }, n.addEventListener("message", un, !1)) : Xt = "onreadystatechange" in u("script") ? function(e) {
        Ie.appendChild(u("script")).onreadystatechange = function() {
            Ie.removeChild(this), cn.call(e)
        }
    } : function(e) {
        setTimeout(T(cn, e, 1), 0)
    });
    var dn = {
            set: nn,
            clear: rn
        },
        fn = dn.set,
        hn = n.MutationObserver || n.WebKitMutationObserver,
        pn = n.process,
        gn = n.Promise,
        mn = "process" == W(pn);
    var yn, vn, bn, wn, En = {
            f: function(e) {
                return new function(e) {
                    var t, n;
                    this.promise = new e(function(e, i) {
                        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                        t = e, n = i
                    }), this.resolve = S(t), this.reject = S(n)
                }(e)
            }
        },
        kn = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        },
        Sn = dn.set,
        Tn = function() {
            var e, t, i, r = function() {
                var n, r;
                for (mn && (n = pn.domain) && n.exit(); e;) {
                    r = e.fn, e = e.next;
                    try {
                        r()
                    } catch (n) {
                        throw e ? i() : t = void 0, n
                    }
                }
                t = void 0, n && n.enter()
            };
            if (mn) i = function() {
                pn.nextTick(r)
            };
            else if (!hn || n.navigator && n.navigator.standalone)
                if (gn && gn.resolve) {
                    var s = gn.resolve();
                    i = function() {
                        s.then(r)
                    }
                } else i = function() {
                    fn.call(n, r)
                };
            else {
                var o = !0,
                    a = document.createTextNode("");
                new hn(r).observe(a, {
                    characterData: !0
                }), i = function() {
                    a.data = o = !o
                }
            }
            return function(n) {
                var r = {
                    fn: n,
                    next: void 0
                };
                t && (t.next = r), e || (e = r, i()), t = r
            }
        }(),
        An = n.TypeError,
        _n = n.process,
        Cn = n.Promise,
        Pn = "process" == Ce(_n),
        xn = function() {},
        Mn = vn = En.f,
        Ln = !! function() {
            try {
                var e = Cn.resolve(1),
                    t = (e.constructor = {})[ue("species")] = function(e) {
                        e(xn, xn)
                    };
                return (Pn || "function" == typeof PromiseRejectionEvent) && e.then(xn) instanceof t
            } catch (e) {}
        }(),
        Nn = function(e) {
            var t;
            return !(!r(e) || "function" != typeof(t = e.then)) && t
        },
        On = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                Tn(function() {
                    for (var i = e._v, r = 1 == e._s, s = 0, o = function(t) {
                            var n, s, o = r ? t.ok : t.fail,
                                a = t.resolve,
                                l = t.reject,
                                c = t.domain;
                            try {
                                o ? (r || (2 == e._h && Fn(e), e._h = 1), !0 === o ? n = i : (c && c.enter(), n = o(i), c && c.exit()), n === t.promise ? l(An("Promise-chain cycle")) : (s = Nn(n)) ? s.call(n, a, l) : a(n)) : l(i)
                            } catch (e) {
                                l(e)
                            }
                        }; n.length > s;) o(n[s++]);
                    e._c = [], e._n = !1, t && !e._h && jn(e)
                })
            }
        },
        jn = function(e) {
            Sn.call(n, function() {
                var t, i, r, s = e._v,
                    o = In(e);
                if (o && (t = kn(function() {
                        Pn ? _n.emit("unhandledRejection", s, e) : (i = n.onunhandledrejection) ? i({
                            promise: e,
                            reason: s
                        }) : (r = n.console) && r.error && r.error("Unhandled promise rejection", s)
                    }), e._h = Pn || In(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
            })
        },
        In = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        Fn = function(e) {
            Sn.call(n, function() {
                var t;
                Pn ? _n.emit("rejectionHandled", e) : (t = n.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        Rn = function(e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), On(t, !0))
        },
        qn = function(e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw An("Promise can't be resolved itself");
                    (t = Nn(e)) ? Tn(function() {
                        var i = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(e, T(qn, i, 1), T(Rn, i, 1))
                        } catch (e) {
                            Rn.call(i, e)
                        }
                    }): (n._v = e, n._s = 1, On(n, !1))
                } catch (e) {
                    Rn.call({
                        _w: n,
                        _d: !1
                    }, e)
                }
            }
        };
    Ln || (Cn = function(e) {
        F(this, Cn, "Promise", "_h"), S(e), yn.call(this);
        try {
            e(T(qn, this, 1), T(Rn, this, 1))
        } catch (e) {
            Rn.call(this, e)
        }
    }, (yn = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = I(Cn.prototype, {
        then: function(e, t) {
            var n = Mn(me(this, Cn));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Pn ? _n.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && On(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), bn = function() {
        var e = new yn;
        this.promise = e, this.resolve = T(qn, e, 1), this.reject = T(Rn, e, 1)
    }, En.f = Mn = function(e) {
        return e === Cn || e === wn ? new bn(e) : vn(e)
    }), C(C.G + C.W + C.F * !Ln, {
        Promise: Cn
    }), he(Cn, "Promise"), ve("Promise"), wn = i.Promise, C(C.S + C.F * !Ln, "Promise", {
        reject: function(e) {
            var t = Mn(this);
            return (0, t.reject)(e), t.promise
        }
    }), C(C.S + C.F * !Ln, "Promise", {
        resolve: function(e) {
            return function(e, t) {
                if (s(e), r(t) && t.constructor === e) return t;
                var n = En.f(e);
                return (0, n.resolve)(t), n.promise
            }(this, e)
        }
    }), C(C.S + C.F * !(Ln && lt(function(e) {
        Cn.all(e).catch(xn)
    })), "Promise", {
        all: function(e) {
            var t = this,
                n = Mn(t),
                i = n.resolve,
                r = n.reject,
                s = kn(function() {
                    var n = [],
                        s = 0,
                        o = 1;
                    gt(e, !1, function(e) {
                        var a = s++,
                            l = !1;
                        n.push(void 0), o++, t.resolve(e).then(function(e) {
                            l || (l = !0, n[a] = e, --o || i(n))
                        }, r)
                    }), --o || i(n)
                });
            return s.e && r(s.v), n.promise
        },
        race: function(e) {
            var t = this,
                n = Mn(t),
                i = n.reject,
                r = kn(function() {
                    gt(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, i)
                    })
                });
            return r.e && i(r.v), n.promise
        }
    });
    var Bn = {
            f: ue
        },
        Vn = p.f,
        Dn = function(e) {
            var t = i.Symbol || (i.Symbol = n.Symbol || {});
            "_" == e.charAt(0) || e in t || Vn(t, e, {
                value: Bn.f(e)
            })
        },
        Un = ae.f,
        Hn = {}.toString,
        Wn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        zn = {
            f: function(e) {
                return Wn && "[object Window]" == Hn.call(e) ? function(e) {
                    try {
                        return Un(e)
                    } catch (e) {
                        return Wn.slice()
                    }
                }(e) : Un(Y(e))
            }
        },
        Gn = mt.KEY,
        Yn = ft.f,
        Kn = p.f,
        Qn = zn.f,
        Jn = n.Symbol,
        $n = n.JSON,
        Xn = $n && $n.stringify,
        Zn = ue("_hidden"),
        ei = ue("toPrimitive"),
        ti = {}.propertyIsEnumerable,
        ni = Z("symbol-registry"),
        ii = Z("symbols"),
        ri = Z("op-symbols"),
        si = Object.prototype,
        oi = "function" == typeof Jn,
        ai = n.QObject,
        li = !ai || !ai.prototype || !ai.prototype.findChild,
        ci = a && o(function() {
            return 7 != Be(Kn({}, "a", {
                get: function() {
                    return Kn(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, n) {
            var i = Yn(si, t);
            i && delete si[t], Kn(e, t, n), i && e !== si && Kn(si, t, i)
        } : Kn,
        ui = function(e) {
            var t = ii[e] = Be(Jn.prototype);
            return t._k = e, t
        },
        di = oi && "symbol" == typeof Jn.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof Jn
        },
        fi = function(e, t, n) {
            return e === si && fi(ri, t, n), s(e), t = f(t, !0), s(n), v(ii, t) ? (n.enumerable ? (v(e, Zn) && e[Zn][t] && (e[Zn][t] = !1), n = Be(n, {
                enumerable: g(0, !1)
            })) : (v(e, Zn) || Kn(e, Zn, g(1, {})), e[Zn][t] = !0), ci(e, t, n)) : Kn(e, t, n)
        },
        hi = function(e, t) {
            s(e);
            for (var n, i = function(e) {
                    var t = Ne(e),
                        n = Ct.f;
                    if (n)
                        for (var i, r = n(e), s = ut.f, o = 0; r.length > o;) s.call(e, i = r[o++]) && t.push(i);
                    return t
                }(t = Y(t)), r = 0, o = i.length; o > r;) fi(e, n = i[r++], t[n]);
            return e
        },
        pi = function(e) {
            var t = ti.call(this, e = f(e, !0));
            return !(this === si && v(ii, e) && !v(ri, e)) && (!(t || !v(this, e) || !v(ii, e) || v(this, Zn) && this[Zn][e]) || t)
        },
        gi = function(e, t) {
            if (e = Y(e), t = f(t, !0), e !== si || !v(ii, t) || v(ri, t)) {
                var n = Yn(e, t);
                return !n || !v(ii, t) || v(e, Zn) && e[Zn][t] || (n.enumerable = !0), n
            }
        },
        mi = function(e) {
            for (var t, n = Qn(Y(e)), i = [], r = 0; n.length > r;) v(ii, t = n[r++]) || t == Zn || t == Gn || i.push(t);
            return i
        },
        yi = function(e) {
            for (var t, n = e === si, i = Qn(n ? ri : Y(e)), r = [], s = 0; i.length > s;) !v(ii, t = i[s++]) || n && !v(si, t) || r.push(ii[t]);
            return r
        };
    oi || (k((Jn = function() {
        if (this instanceof Jn) throw TypeError("Symbol is not a constructor!");
        var e = E(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
                this === si && t.call(ri, n), v(this, Zn) && v(this[Zn], e) && (this[Zn][e] = !1), ci(this, e, g(1, n))
            };
        return a && li && ci(si, e, {
            configurable: !0,
            set: t
        }), ui(e)
    }).prototype, "toString", function() {
        return this._k
    }), ft.f = gi, p.f = fi, ae.f = zn.f = mi, ut.f = pi, Ct.f = yi, a && k(si, "propertyIsEnumerable", pi, !0), Bn.f = function(e) {
        return ui(ue(e))
    }), C(C.G + C.W + C.F * !oi, {
        Symbol: Jn
    });
    for (var vi = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), bi = 0; vi.length > bi;) ue(vi[bi++]);
    for (var wi = Ne(ue.store), Ei = 0; wi.length > Ei;) Dn(wi[Ei++]);
    C(C.S + C.F * !oi, "Symbol", {
        for: function(e) {
            return v(ni, e += "") ? ni[e] : ni[e] = Jn(e)
        },
        keyFor: function(e) {
            if (!di(e)) throw TypeError(e + " is not a symbol!");
            for (var t in ni)
                if (ni[t] === e) return t
        },
        useSetter: function() {
            li = !0
        },
        useSimple: function() {
            li = !1
        }
    }), C(C.S + C.F * !oi, "Object", {
        create: function(e, t) {
            return void 0 === t ? Be(e) : hi(Be(e), t)
        },
        defineProperty: fi,
        defineProperties: hi,
        getOwnPropertyDescriptor: gi,
        getOwnPropertyNames: mi,
        getOwnPropertySymbols: yi
    }), $n && C(C.S + C.F * (!oi || o(function() {
        var e = Jn();
        return "[null]" != Xn([e]) || "{}" != Xn({
            a: e
        }) || "{}" != Xn(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, n, i = [e], s = 1; arguments.length > s;) i.push(arguments[s++]);
            if (n = t = i[1], (r(t) || void 0 !== e) && !di(e)) return ze(t) || (t = function(e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !di(t)) return t
            }), i[1] = t, Xn.apply($n, i)
        }
    }), Jn.prototype[ei] || m(Jn.prototype, ei, Jn.prototype.valueOf), he(Jn, "Symbol"), he(Math, "Math", !0), he(n.JSON, "JSON", !0);
    var ki = function(e, t) {
            var n = (i.Object || {})[e] || Object[e],
                r = {};
            r[e] = t(n), C(C.S + C.F * o(function() {
                n(1)
            }), "Object", r)
        },
        Si = mt.onFreeze;
    ki("freeze", function(e) {
        return function(t) {
            return e && r(t) ? e(Si(t)) : t
        }
    });
    var Ti = mt.onFreeze;
    ki("seal", function(e) {
        return function(t) {
            return e && r(t) ? e(Ti(t)) : t
        }
    });
    var Ai = mt.onFreeze;
    ki("preventExtensions", function(e) {
        return function(t) {
            return e && r(t) ? e(Ai(t)) : t
        }
    }), ki("isFrozen", function(e) {
        return function(t) {
            return !r(t) || !!e && e(t)
        }
    }), ki("isSealed", function(e) {
        return function(t) {
            return !r(t) || !!e && e(t)
        }
    }), ki("isExtensible", function(e) {
        return function(t) {
            return !!r(t) && (!e || e(t))
        }
    });
    var _i = ft.f;
    ki("getOwnPropertyDescriptor", function() {
        return function(e, t) {
            return _i(Y(e), t)
        }
    }), ki("getPrototypeOf", function() {
        return function(e) {
            return Ue(le(e))
        }
    }), ki("keys", function() {
        return function(e) {
            return Ne(le(e))
        }
    }), ki("getOwnPropertyNames", function() {
        return zn.f
    }), C(C.S + C.F, "Object", {
        assign: xt
    });
    var Ci = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    C(C.S, "Object", {
        is: Ci
    });
    var Pi = p.f,
        xi = Function.prototype,
        Mi = /^\s*function ([^ (]*)/;
    "name" in xi || a && Pi(xi, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(Mi)[1]
            } catch (e) {
                return ""
            }
        }
    }), C(C.S, "String", {
        raw: function(e) {
            for (var t = Y(e.raw), n = D(t.length), i = arguments.length, r = [], s = 0; n > s;) r.push(String(t[s++])), s < i && r.push(String(arguments[s]));
            return r.join("")
        }
    });
    var Li = String.fromCharCode,
        Ni = String.fromCodePoint;
    C(C.S + C.F * (!!Ni && 1 != Ni.length), "String", {
        fromCodePoint: function(e) {
            for (var t, n = [], i = arguments.length, r = 0; i > r;) {
                if (t = +arguments[r++], J(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
                n.push(t < 65536 ? Li(t) : Li(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
            }
            return n.join("")
        }
    });
    var Oi, ji = (Oi = !1, function(e, t) {
        var n, i, r = String(G(e)),
            s = B(t),
            o = r.length;
        return s < 0 || s >= o ? Oi ? "" : void 0 : (n = r.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === o || (i = r.charCodeAt(s + 1)) < 56320 || i > 57343 ? Oi ? r.charAt(s) : n : Oi ? r.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
    });
    C(C.P, "String", {
        codePointAt: function(e) {
            return ji(this, e)
        }
    });
    var Ii = function(e) {
        var t = String(G(this)),
            n = "",
            i = B(e);
        if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
        for (; i > 0;
            (i >>>= 1) && (t += t)) 1 & i && (n += t);
        return n
    };
    C(C.P, "String", {
        repeat: Ii
    });
    var Fi = ue("match"),
        Ri = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[Fi]) ? !!t : "RegExp" == W(e))
        },
        qi = function(e, t, n) {
            if (Ri(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(G(e))
        },
        Bi = ue("match"),
        Vi = function(e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[Bi] = !1, !"/./" [e](t)
                } catch (e) {}
            }
            return !0
        },
        Di = "".startsWith;
    C(C.P + C.F * Vi("startsWith"), "String", {
        startsWith: function(e) {
            var t = qi(this, e, "startsWith"),
                n = D(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                i = String(e);
            return Di ? Di.call(t, i, n) : t.slice(n, n + i.length) === i
        }
    });
    var Ui = "".endsWith;
    C(C.P + C.F * Vi("endsWith"), "String", {
        endsWith: function(e) {
            var t = qi(this, e, "endsWith"),
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = D(t.length),
                r = void 0 === n ? i : Math.min(D(n), i),
                s = String(e);
            return Ui ? Ui.call(t, s, r) : t.slice(r - s.length, r) === s
        }
    });
    C(C.P + C.F * Vi("includes"), "String", {
        includes: function(e) {
            return !!~qi(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    a && "g" != /./g.flags && p.f(RegExp.prototype, "flags", {
        configurable: !0,
        get: function() {
            var e = s(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    });
    var Hi = function(e, t, n) {
        var i = ue(e),
            r = n(G, i, "" [e]),
            s = r[0],
            a = r[1];
        o(function() {
            var t = {};
            return t[i] = function() {
                return 7
            }, 7 != "" [e](t)
        }) && (k(String.prototype, e, s), m(RegExp.prototype, i, 2 == t ? function(e, t) {
            return a.call(e, this, t)
        } : function(e) {
            return a.call(e, this)
        }))
    };
    Hi("match", 1, function(e, t, n) {
        return [function(n) {
            var i = e(this),
                r = void 0 == n ? void 0 : n[t];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
        }, n]
    }), Hi("replace", 2, function(e, t, n) {
        return [function(i, r) {
            var s = e(this),
                o = void 0 == i ? void 0 : i[t];
            return void 0 !== o ? o.call(i, s, r) : n.call(String(s), i, r)
        }, n]
    }), Hi("split", 2, function(e, t, n) {
        var i = Ri,
            r = n,
            s = [].push;
        if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
            var o = void 0 === /()??/.exec("")[1];
            n = function(e, t) {
                var n = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!i(e)) return r.call(n, e, t);
                var a, l, c, u, d, f = [],
                    h = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                    p = 0,
                    g = void 0 === t ? 4294967295 : t >>> 0,
                    m = new RegExp(e.source, h + "g");
                for (o || (a = new RegExp("^" + m.source + "$(?!\\s)", h));
                    (l = m.exec(n)) && !((c = l.index + l[0].length) > p && (f.push(n.slice(p, l.index)), !o && l.length > 1 && l[0].replace(a, function() {
                        for (d = 1; d < arguments.length - 2; d++) void 0 === arguments[d] && (l[d] = void 0)
                    }), l.length > 1 && l.index < n.length && s.apply(f, l.slice(1)), u = l[0].length, p = c, f.length >= g));) m.lastIndex === l.index && m.lastIndex++;
                return p === n.length ? !u && m.test("") || f.push("") : f.push(n.slice(p)), f.length > g ? f.slice(0, g) : f
            }
        } else "0".split(void 0, 0).length && (n = function(e, t) {
            return void 0 === e && 0 === t ? [] : r.call(this, e, t)
        });
        return [function(i, r) {
            var s = e(this),
                o = void 0 == i ? void 0 : i[t];
            return void 0 !== o ? o.call(i, s, r) : n.call(String(s), i, r)
        }, n]
    }), Hi("search", 1, function(e, t, n) {
        return [function(n) {
            var i = e(this),
                r = void 0 == n ? void 0 : n[t];
            return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
        }, n]
    });
    var Wi = function(e, t, n) {
        t in e ? p.f(e, t, g(0, n)) : e[t] = n
    };
    C(C.S + C.F * !lt(function(e) {}), "Array", {
        from: function(e) {
            var t, n, i, r, s = le(e),
                o = "function" == typeof this ? this : Array,
                a = arguments.length,
                l = a > 1 ? arguments[1] : void 0,
                c = void 0 !== l,
                u = 0,
                d = We(s);
            if (c && (l = T(l, a > 2 ? arguments[2] : void 0, 2)), void 0 == d || o == Array && Le(d))
                for (n = new o(t = D(s.length)); t > u; u++) Wi(n, u, c ? l(s[u], u) : s[u]);
            else
                for (r = d.call(s), n = new o; !(i = r.next()).done; u++) Wi(n, u, c ? pt(r, l, [i.value, u], !0) : i.value);
            return n.length = u, n
        }
    }), C(C.S + C.F * o(function() {
        function e() {}
        return !(Array.of.call(e) instanceof e)
    }), "Array", { of: function() {
            for (var e = 0, t = arguments.length, n = new("function" == typeof this ? this : Array)(t); t > e;) Wi(n, e, arguments[e++]);
            return n.length = t, n
        }
    }), C(C.P, "Array", {
        copyWithin: ct
    }), $e("copyWithin");
    var zi = Ke(5),
        Gi = !0;
    "find" in [] && Array(1).find(function() {
        Gi = !1
    }), C(C.P + C.F * Gi, "Array", {
        find: function(e) {
            return zi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), $e("find");
    var Yi = Ke(6),
        Ki = !0;
    "findIndex" in [] && Array(1).findIndex(function() {
        Ki = !1
    }), C(C.P + C.F * Ki, "Array", {
        findIndex: function(e) {
            return Yi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), $e("findIndex"), C(C.P, "Array", {
        fill: ce
    }), $e("fill");
    var Qi = n.isFinite;
    C(C.S, "Number", {
        isFinite: function(e) {
            return "number" == typeof e && Qi(e)
        }
    });
    var Ji = Math.floor,
        $i = function(e) {
            return !r(e) && isFinite(e) && Ji(e) === e
        };
    C(C.S, "Number", {
        isInteger: $i
    });
    var Xi = Math.abs;
    C(C.S, "Number", {
        isSafeInteger: function(e) {
            return $i(e) && Xi(e) <= 9007199254740991
        }
    }), C(C.S, "Number", {
        isNaN: function(e) {
            return e != e
        }
    }), C(C.S, "Number", {
        EPSILON: Math.pow(2, -52)
    }), C(C.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    }), C(C.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    });
    var Zi = Math.log1p || function(e) {
            return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
        },
        er = Math.sqrt,
        tr = Math.acosh;
    C(C.S + C.F * !(tr && 710 == Math.floor(tr(Number.MAX_VALUE)) && tr(1 / 0) == 1 / 0), "Math", {
        acosh: function(e) {
            return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : Zi(e - 1 + er(e - 1) * er(e + 1))
        }
    });
    var nr = Math.asinh;
    C(C.S + C.F * !(nr && 1 / nr(0) > 0), "Math", {
        asinh: function e(t) {
            return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
        }
    });
    var ir = Math.atanh;
    C(C.S + C.F * !(ir && 1 / ir(-0) < 0), "Math", {
        atanh: function(e) {
            return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
        }
    });
    var rr = Math.sign || function(e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
    };
    C(C.S, "Math", {
        cbrt: function(e) {
            return rr(e = +e) * Math.pow(Math.abs(e), 1 / 3)
        }
    }), C(C.S, "Math", {
        clz32: function(e) {
            return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
        }
    });
    var sr = Math.exp;
    C(C.S, "Math", {
        cosh: function(e) {
            return (sr(e = +e) + sr(-e)) / 2
        }
    });
    var or = Math.expm1,
        ar = !or || or(10) > 22025.465794806718 || or(10) < 22025.465794806718 || -2e-17 != or(-2e-17) ? function(e) {
            return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
        } : or;
    C(C.S + C.F * (ar != Math.expm1), "Math", {
        expm1: ar
    });
    var lr = Math.pow,
        cr = lr(2, -52),
        ur = lr(2, -23),
        dr = lr(2, 127) * (2 - ur),
        fr = lr(2, -126),
        hr = Math.fround || function(e) {
            var t, n, i = Math.abs(e),
                r = rr(e);
            return i < fr ? r * (i / fr / ur + 1 / cr - 1 / cr) * fr * ur : (n = (t = (1 + ur / cr) * i) - (t - i)) > dr || n != n ? r * (1 / 0) : r * n
        };
    C(C.S, "Math", {
        fround: hr
    });
    var pr = Math.abs;
    C(C.S, "Math", {
        hypot: function(e, t) {
            for (var n, i, r = 0, s = 0, o = arguments.length, a = 0; s < o;) a < (n = pr(arguments[s++])) ? (r = r * (i = a / n) * i + 1, a = n) : r += n > 0 ? (i = n / a) * i : n;
            return a === 1 / 0 ? 1 / 0 : a * Math.sqrt(r)
        }
    });
    var gr = Math.imul;
    C(C.S + C.F * o(function() {
        return -5 != gr(4294967295, 5) || 2 != gr.length
    }), "Math", {
        imul: function(e, t) {
            var n = +e,
                i = +t,
                r = 65535 & n,
                s = 65535 & i;
            return 0 | r * s + ((65535 & n >>> 16) * s + r * (65535 & i >>> 16) << 16 >>> 0)
        }
    }), C(C.S, "Math", {
        log1p: Zi
    }), C(C.S, "Math", {
        log10: function(e) {
            return Math.log(e) * Math.LOG10E
        }
    }), C(C.S, "Math", {
        log2: function(e) {
            return Math.log(e) / Math.LN2
        }
    }), C(C.S, "Math", {
        sign: rr
    });
    var mr = Math.exp;
    C(C.S + C.F * o(function() {
        return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
        sinh: function(e) {
            return Math.abs(e = +e) < 1 ? (ar(e) - ar(-e)) / 2 : (mr(e - 1) - mr(-e - 1)) * (Math.E / 2)
        }
    });
    var yr = Math.exp;
    C(C.S, "Math", {
        tanh: function(e) {
            var t = ar(e = +e),
                n = ar(-e);
            return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (yr(e) + yr(-e))
        }
    }), C(C.S, "Math", {
        trunc: function(e) {
            return (e > 0 ? Math.floor : Math.ceil)(e)
        }
    });
    var vr = $(!0);
    C(C.P, "Array", {
        includes: function(e) {
            return vr(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), $e("includes");
    var br = ut.f,
        wr = function(e) {
            return function(t) {
                for (var n, i = Y(t), r = Ne(i), s = r.length, o = 0, a = []; s > o;) br.call(i, n = r[o++]) && a.push(e ? [n, i[n]] : i[n]);
                return a
            }
        },
        Er = wr(!1);
    C(C.S, "Object", {
        values: function(e) {
            return Er(e)
        }
    });
    var kr = wr(!0);
    C(C.S, "Object", {
        entries: function(e) {
            return kr(e)
        }
    }), C(C.S, "Object", {
        getOwnPropertyDescriptors: function(e) {
            for (var t, n, i = Y(e), r = ft.f, s = Jt(i), o = {}, a = 0; s.length > a;) void 0 !== (n = r(i, t = s[a++])) && Wi(o, t, n);
            return o
        }
    });
    var Sr = function(e, t, n, i) {
            var r = String(G(e)),
                s = r.length,
                o = void 0 === n ? " " : String(n),
                a = D(t);
            if (a <= s || "" == o) return r;
            var l = a - s,
                c = Ii.call(o, Math.ceil(l / o.length));
            return c.length > l && (c = c.slice(0, l)), i ? c + r : r + c
        },
        Tr = n.navigator,
        Ar = Tr && Tr.userAgent || "";
    C(C.P + C.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Ar), "String", {
        padStart: function(e) {
            return Sr(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    }), C(C.P + C.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(Ar), "String", {
        padEnd: function(e) {
            return Sr(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    });
    var _r = [].slice,
        Cr = /MSIE .\./.test(Ar),
        Pr = function(e) {
            return function(t, n) {
                var i = arguments.length > 2,
                    r = !!i && _r.call(arguments, 2);
                return e(i ? function() {
                    ("function" == typeof t ? t : Function(t)).apply(this, r)
                } : t, n)
            }
        };
    C(C.G + C.B + C.F * Cr, {
        setTimeout: Pr(n.setTimeout),
        setInterval: Pr(n.setInterval)
    }), C(C.G + C.B, {
        setImmediate: dn.set,
        clearImmediate: dn.clear
    });
    for (var xr = ue("iterator"), Mr = ue("toStringTag"), Lr = Pe.Array, Nr = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, Or = Ne(Nr), jr = 0; jr < Or.length; jr++) {
        var Ir, Fr = Or[jr],
            Rr = Nr[Fr],
            qr = n[Fr],
            Br = qr && qr.prototype;
        if (Br && (Br[xr] || m(Br, xr, Lr), Br[Mr] || m(Br, Mr, Fr), Pe[Fr] = Lr, Rr))
            for (Ir in st) Br[Ir] || k(Br, Ir, st[Ir], !0)
    }
    t(function(t) {
        ! function(e) {
            var n, i = Object.prototype,
                r = i.hasOwnProperty,
                s = "function" == typeof Symbol ? Symbol : {},
                o = s.iterator || "@@iterator",
                a = s.asyncIterator || "@@asyncIterator",
                l = s.toStringTag || "@@toStringTag",
                c = e.regeneratorRuntime;
            if (c) t.exports = c;
            else {
                (c = e.regeneratorRuntime = t.exports).wrap = b;
                var u = "suspendedStart",
                    d = "suspendedYield",
                    f = "executing",
                    h = "completed",
                    p = {},
                    g = {};
                g[o] = function() {
                    return this
                };
                var m = Object.getPrototypeOf,
                    y = m && m(m(M([])));
                y && y !== i && r.call(y, o) && (g = y);
                var v = S.prototype = E.prototype = Object.create(g);
                k.prototype = v.constructor = S, S.constructor = k, S[l] = k.displayName = "GeneratorFunction", c.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === k || "GeneratorFunction" === (t.displayName || t.name))
                }, c.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : (e.__proto__ = S, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(v), e
                }, c.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, T(A.prototype), A.prototype[a] = function() {
                    return this
                }, c.AsyncIterator = A, c.async = function(e, t, n, i) {
                    var r = new A(b(e, t, n, i));
                    return c.isGeneratorFunction(t) ? r : r.next().then(function(e) {
                        return e.done ? e.value : r.next()
                    })
                }, T(v), v[l] = "Generator", v[o] = function() {
                    return this
                }, v.toString = function() {
                    return "[object Generator]"
                }, c.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var i = t.pop();
                                if (i in e) return n.value = i, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, c.values = M, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(P), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function i(i, r) {
                            return a.type = "throw", a.arg = e, t.next = i, r && (t.method = "next", t.arg = n), !!r
                        }
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var o = this.tryEntries[s],
                                a = o.completion;
                            if ("root" === o.tryLoc) return i("end");
                            if (o.tryLoc <= this.prev) {
                                var l = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                } else if (l) {
                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var s = i;
                                break
                            }
                        }
                        s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                        var o = s ? s.completion : {};
                        return o.type = e, o.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, p) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    P(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, i) {
                        return this.delegate = {
                            iterator: M(e),
                            resultName: t,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = n), p
                    }
                }
            }

            function b(e, t, n, i) {
                var r = t && t.prototype instanceof E ? t : E,
                    s = Object.create(r.prototype),
                    o = new x(i || []);
                return s._invoke = function(e, t, n) {
                    var i = u;
                    return function(r, s) {
                        if (i === f) throw new Error("Generator is already running");
                        if (i === h) {
                            if ("throw" === r) throw s;
                            return L()
                        }
                        for (n.method = r, n.arg = s;;) {
                            var o = n.delegate;
                            if (o) {
                                var a = _(o, n);
                                if (a) {
                                    if (a === p) continue;
                                    return a
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (i === u) throw i = h, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            i = f;
                            var l = w(e, t, n);
                            if ("normal" === l.type) {
                                if (i = n.done ? h : d, l.arg === p) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (i = h, n.method = "throw", n.arg = l.arg)
                        }
                    }
                }(e, n, o), s
            }

            function w(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }

            function E() {}

            function k() {}

            function S() {}

            function T(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function A(t) {
                function n(e, i, s, o) {
                    var a = w(t[e], t, i);
                    if ("throw" !== a.type) {
                        var l = a.arg,
                            c = l.value;
                        return c && "object" == typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                            n("next", e, s, o)
                        }, function(e) {
                            n("throw", e, s, o)
                        }) : Promise.resolve(c).then(function(e) {
                            l.value = e, s(l)
                        }, o)
                    }
                    o(a.arg)
                }
                var i;
                "object" == typeof e.process && e.process.domain && (n = e.process.domain.bind(n)), this._invoke = function(e, t) {
                    function r() {
                        return new Promise(function(i, r) {
                            n(e, t, i, r)
                        })
                    }
                    return i = i ? i.then(r, r) : r()
                }
            }

            function _(e, t) {
                var i = e.iterator[t.method];
                if (i === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = n, _(e, t), "throw" === t.method)) return p;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var r = w(i, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                var s = r.arg;
                return s ? s.done ? (t[e.resultName] = s.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, p) : s : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
            }

            function C(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function P(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function x(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(C, this), this.reset(!0)
            }

            function M(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            s = function t() {
                                for (; ++i < e.length;)
                                    if (r.call(e, i)) return t.value = e[i], t.done = !1, t;
                                return t.value = n, t.done = !0, t
                            };
                        return s.next = s
                    }
                }
                return {
                    next: L
                }
            }

            function L() {
                return {
                    value: n,
                    done: !0
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : e)
    });
    try {
        var Vr = new window.CustomEvent("test");
        if (Vr.preventDefault(), !0 !== Vr.defaultPrevented) throw new Error("Could not prevent default")
    } catch (e) {
        var Dr = function(e, t) {
            var n, i;
            return t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i = n.preventDefault, n.preventDefault = function() {
                i.call(this);
                try {
                    Object.defineProperty(this, "defaultPrevented", {
                        get: function() {
                            return !0
                        }
                    })
                } catch (e) {
                    this.defaultPrevented = !0
                }
            }, n
        };
        Dr.prototype = window.Event.prototype, window.CustomEvent = Dr
    }
    var Ur, Hr = t(function(e, t) {
            var n;
            n = function() {
                var e = function() {},
                    t = {},
                    n = {},
                    i = {};

                function r(e, t) {
                    if (e) {
                        var r = i[e];
                        if (n[e] = t, r)
                            for (; r.length;) r[0](e, t), r.splice(0, 1)
                    }
                }

                function s(t, n) {
                    t.call && (t = {
                        success: t
                    }), n.length ? (t.error || e)(n) : (t.success || e)(t)
                }

                function o(t, n, i, r) {
                    var s, a, l = document,
                        c = i.async,
                        u = (i.numRetries || 0) + 1,
                        d = i.before || e,
                        f = t.replace(/^(css|img)!/, "");
                    r = r || 0, /(^css!|\.css$)/.test(t) ? (s = !0, (a = l.createElement("link")).rel = "stylesheet", a.href = f) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (a = l.createElement("img")).src = f : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function(e) {
                        var l = e.type[0];
                        if (s && "hideFocus" in a) try {
                            a.sheet.cssText.length || (l = "e")
                        } catch (e) {
                            l = "e"
                        }
                        if ("e" == l && (r += 1) < u) return o(t, n, i, r);
                        n(t, l, e.defaultPrevented)
                    }, !1 !== d(t, a) && l.head.appendChild(a)
                }

                function a(e, n, i) {
                    var a, l;
                    if (n && n.trim && (a = n), l = (a ? i : n) || {}, a) {
                        if (a in t) throw "LoadJS";
                        t[a] = !0
                    }! function(e, t, n) {
                        var i, r, s = (e = e.push ? e : [e]).length,
                            a = s,
                            l = [];
                        for (i = function(e, n, i) {
                                if ("e" == n && l.push(e), "b" == n) {
                                    if (!i) return;
                                    l.push(e)
                                }--s || t(l)
                            }, r = 0; r < a; r++) o(e[r], i, n)
                    }(e, function(e) {
                        s(l, e), r(a, e)
                    }, l)
                }
                return a.ready = function(e, t) {
                    return function(e, t) {
                        var r, s, o, a = [],
                            l = (e = e.push ? e : [e]).length,
                            c = l;
                        for (r = function(e, n) {
                                n.length && a.push(e), --c || t(a)
                            }; l--;) s = e[l], (o = n[s]) ? r(s, o) : (i[s] = i[s] || []).push(r)
                    }(e, function(e) {
                        s(t, e)
                    }), a
                }, a.done = function(e) {
                    r(e, [])
                }, a.reset = function() {
                    t = {}, n = {}, i = {}
                }, a.isDefined = function(e) {
                    return e in t
                }, a
            }, e.exports = n()
        }),
        Wr = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        zr = {
            audio: "audio",
            video: "video"
        },
        Gr = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        Yr = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        Kr = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        Qr = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        s = void 0;
                    try {
                        for (var o, a = e[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        r = !0, s = e
                    } finally {
                        try {
                            !i && a.return && a.return()
                        } finally {
                            if (r) throw s
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        Jr = {
            is: {
                plyr: function(e) {
                    return this.instanceof(e, window.Plyr)
                },
                object: function(e) {
                    return this.getConstructor(e) === Object
                },
                number: function(e) {
                    return this.getConstructor(e) === Number && !Number.isNaN(e)
                },
                string: function(e) {
                    return this.getConstructor(e) === String
                },
                boolean: function(e) {
                    return this.getConstructor(e) === Boolean
                },
                function: function(e) {
                    return this.getConstructor(e) === Function
                },
                array: function(e) {
                    return !this.nullOrUndefined(e) && Array.isArray(e)
                },
                weakMap: function(e) {
                    return this.instanceof(e, window.WeakMap)
                },
                nodeList: function(e) {
                    return this.instanceof(e, window.NodeList)
                },
                element: function(e) {
                    return this.instanceof(e, window.Element)
                },
                textNode: function(e) {
                    return this.getConstructor(e) === Text
                },
                event: function(e) {
                    return this.instanceof(e, window.Event)
                },
                cue: function(e) {
                    return this.instanceof(e, window.TextTrackCue) || this.instanceof(e, window.VTTCue)
                },
                track: function(e) {
                    return this.instanceof(e, TextTrack) || !this.nullOrUndefined(e) && this.string(e.kind)
                },
                url: function(e) {
                    return !this.nullOrUndefined(e) && /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(e)
                },
                nullOrUndefined: function(e) {
                    return null === e || void 0 === e
                },
                empty: function(e) {
                    return this.nullOrUndefined(e) || (this.string(e) || this.array(e) || this.nodeList(e)) && !e.length || this.object(e) && !Object.keys(e).length
                },
                instanceof: function(e, t) {
                    return Boolean(e && t && e instanceof t)
                },
                getConstructor: function(e) {
                    return this.nullOrUndefined(e) ? null : e.constructor
                }
            },
            getBrowser: function() {
                return {
                    isIE: !!document.documentMode,
                    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                }
            },
            fetch: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                return new Promise(function(n, i) {
                    try {
                        var r = new XMLHttpRequest;
                        if (!("withCredentials" in r)) return;
                        r.addEventListener("load", function() {
                            if ("text" === t) try {
                                n(JSON.parse(r.responseText))
                            } catch (e) {
                                n(r.responseText)
                            } else n(r.response)
                        }), r.addEventListener("error", function() {
                            throw new Error(r.statusText)
                        }), r.open("GET", e, !0), r.responseType = t, r.send()
                    } catch (e) {
                        i(e)
                    }
                })
            },
            loadScript: function(e) {
                return new Promise(function(t, n) {
                    Hr(e, {
                        success: t,
                        error: n
                    })
                })
            },
            loadSprite: function(e, t) {
                if (Jr.is.string(e)) {
                    var n = Jr.is.string(t),
                        i = function() {
                            return document.querySelectorAll("#" + t).length
                        };
                    if (!n || !i()) {
                        var r = document.createElement("div");
                        if (Jr.toggleHidden(r, !0), n && r.setAttribute("id", t), $r.storage) {
                            var s = window.localStorage.getItem("cache-" + t);
                            if (null !== s) {
                                var o = JSON.parse(s);
                                return void a.call(r, o.content)
                            }
                        }
                        Jr.fetch(e).then(function(e) {
                            Jr.is.empty(e) || ($r.storage && window.localStorage.setItem("cache-" + t, JSON.stringify({
                                content: e
                            })), a.call(r, e))
                        }).catch(function() {})
                    }
                }

                function a(e) {
                    n && i() || (this.innerHTML = e, document.body.insertBefore(this, document.body.childNodes[0]))
                }
            },
            generateId: function(e) {
                return e + "-" + Math.floor(1e4 * Math.random())
            },
            wrap: function(e, t) {
                var n = e.length ? e : [e];
                Array.from(n).reverse().forEach(function(e, n) {
                    var i = n > 0 ? t.cloneNode(!0) : t,
                        r = e.parentNode,
                        s = e.nextSibling;
                    i.appendChild(e), s ? r.insertBefore(i, s) : r.appendChild(i)
                })
            },
            createElement: function(e, t, n) {
                var i = document.createElement(e);
                return Jr.is.object(t) && Jr.setAttributes(i, t), Jr.is.string(n) && (i.textContent = n), i
            },
            insertAfter: function(e, t) {
                t.parentNode.insertBefore(e, t.nextSibling)
            },
            insertElement: function(e, t, n, i) {
                t.appendChild(Jr.createElement(e, n, i))
            },
            removeElement: function(e) {
                Jr.is.nodeList(e) || Jr.is.array(e) ? Array.from(e).forEach(Jr.removeElement) : Jr.is.element(e) && Jr.is.element(e.parentNode) && e.parentNode.removeChild(e)
            },
            emptyElement: function(e) {
                for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
            },
            replaceElement: function(e, t) {
                return Jr.is.element(t) && Jr.is.element(t.parentNode) && Jr.is.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
            },
            setAttributes: function(e, t) {
                Jr.is.element(e) && !Jr.is.empty(t) && Object.entries(t).forEach(function(t) {
                    var n = Qr(t, 2),
                        i = n[0],
                        r = n[1];
                    e.setAttribute(i, r)
                })
            },
            getAttributesFromSelector: function(e, t) {
                if (!Jr.is.string(e) || Jr.is.empty(e)) return {};
                var n = {},
                    i = t;
                return e.split(",").forEach(function(e) {
                    var t = e.trim(),
                        r = t.replace(".", ""),
                        s = t.replace(/[[\]]/g, "").split("="),
                        o = s[0],
                        a = s.length > 1 ? s[1].replace(/["']/g, "") : "";
                    switch (t.charAt(0)) {
                        case ".":
                            Jr.is.object(i) && Jr.is.string(i.class) && (i.class += " " + r), n.class = r;
                            break;
                        case "#":
                            n.id = t.replace("#", "");
                            break;
                        case "[":
                            n[o] = a
                    }
                }), n
            },
            toggleHidden: function(e, t) {
                if (Jr.is.element(e)) {
                    var n = t;
                    Jr.is.boolean(n) || (n = !e.hasAttribute("hidden")), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
                }
            },
            toggleClass: function(e, t, n) {
                if (Jr.is.element(e)) {
                    var i = e.classList.contains(t);
                    return e.classList[n ? "add" : "remove"](t), n && !i || !n && i
                }
                return null
            },
            hasClass: function(e, t) {
                return Jr.is.element(e) && e.classList.contains(t)
            },
            matches: function(e, t) {
                var n = {
                    Element: Element
                };
                var i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
                    return Array.from(document.querySelectorAll(t)).includes(this)
                };
                return i.call(e, t)
            },
            getElements: function(e) {
                return this.elements.container.querySelectorAll(e)
            },
            getElement: function(e) {
                return this.elements.container.querySelector(e)
            },
            getFocusElement: function() {
                var e = document.activeElement;
                return e = e && e !== document.body ? document.querySelector(":focus") : null
            },
            trapFocus: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (Jr.is.element(e)) {
                    var n = Jr.getElements.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
                        i = n[0],
                        r = n[n.length - 1],
                        s = function(e) {
                            if ("Tab" === e.key && 9 === e.keyCode) {
                                var t = Jr.getFocusElement();
                                t !== r || e.shiftKey ? t === i && e.shiftKey && (r.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                            }
                        };
                    t ? Jr.on(this.elements.container, "keydown", s, !1) : Jr.off(this.elements.container, "keydown", s, !1)
                }
            },
            toggleListener: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                if (!Jr.is.empty(e) && !Jr.is.empty(t) && Jr.is.function(n))
                    if (Jr.is.nodeList(e) || Jr.is.array(e)) Array.from(e).forEach(function(e) {
                        e instanceof Node && Jr.toggleListener.call(null, e, t, n, i, r, s)
                    });
                    else {
                        var o = t.split(" "),
                            a = s;
                        $r.passiveListeners && (a = {
                            passive: r,
                            capture: s
                        }), o.forEach(function(t) {
                            e[i ? "addEventListener" : "removeEventListener"](t, n, a)
                        })
                    }
            },
            on: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments[2],
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                Jr.toggleListener(e, t, n, !0, i, r)
            },
            off: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments[2],
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                Jr.toggleListener(e, t, n, !1, i, r)
            },
            dispatchEvent: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (Jr.is.element(e) && !Jr.is.empty(t)) {
                    var r = new CustomEvent(t, {
                        bubbles: n,
                        detail: Object.assign({}, i, {
                            plyr: Jr.is.plyr(this) ? this : null
                        })
                    });
                    e.dispatchEvent(r)
                }
            },
            toggleState: function(e, t) {
                if (Jr.is.array(e) || Jr.is.nodeList(e)) Array.from(e).forEach(function(e) {
                    return Jr.toggleState(e, t)
                });
                else if (Jr.is.element(e)) {
                    var n = "true" === e.getAttribute("aria-pressed"),
                        i = Jr.is.boolean(t) ? t : !n;
                    e.setAttribute("aria-pressed", i)
                }
            },
            format: function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return Jr.is.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function(e, t) {
                    return Jr.is.string(n[t]) ? n[t] : ""
                })
            },
            getPercentage: function(e, t) {
                return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
            },
            getHours: function(e) {
                return parseInt(e / 60 / 60 % 60, 10)
            },
            getMinutes: function(e) {
                return parseInt(e / 60 % 60, 10)
            },
            getSeconds: function(e) {
                return parseInt(e % 60, 10)
            },
            formatTime: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!Jr.is.number(e)) return this.formatTime(null, t, n);
                var i = function(e) {
                        return ("0" + e).slice(-2)
                    },
                    r = this.getHours(e),
                    s = this.getMinutes(e),
                    o = this.getSeconds(e);
                return t || r > 0 ? r += ":" : r = "", (n ? "-" : "") + r + i(s) + ":" + i(o)
            },
            replaceAll: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
            },
            toTitleCase: function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                })
            },
            toPascalCase: function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                return e = Jr.replaceAll(e, "-", " "), e = Jr.replaceAll(e, "_", " "), e = Jr.toTitleCase(e), Jr.replaceAll(e, " ", "")
            },
            toCamelCase: function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                return (e = Jr.toPascalCase(e)).charAt(0).toLowerCase() + e.slice(1)
            },
            extend: function() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                if (!n.length) return e;
                var r = n.shift();
                return Jr.is.object(r) ? (Object.keys(r).forEach(function(t) {
                    Jr.is.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, Kr({}, t, {})), Jr.extend(e[t], r[t])) : Object.assign(e, Kr({}, t, r[t]))
                }), Jr.extend.apply(Jr, [e].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(n)))) : e
            },
            dedupe: function(e) {
                return Jr.is.array(e) ? e.filter(function(t, n) {
                    return e.indexOf(t) === n
                }) : e
            },
            closest: function(e, t) {
                return Jr.is.array(e) && e.length ? e.reduce(function(e, n) {
                    return Math.abs(n - t) < Math.abs(e - t) ? n : e
                }) : null
            },
            getProviderByUrl: function(e) {
                return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? Wr.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Wr.vimeo : null
            },
            parseYouTubeId: function(e) {
                if (Jr.is.empty(e)) return null;
                return e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e
            },
            parseVimeoId: function(e) {
                if (Jr.is.empty(e)) return null;
                if (Jr.is.number(Number(e))) return e;
                return e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e
            },
            parseUrl: function(e) {
                var t = document.createElement("a");
                return t.href = e, t
            },
            getUrlParams: function(e) {
                var t = e;
                (e.startsWith("http://") || e.startsWith("https://")) && (t = this.parseUrl(e).search);
                return this.is.empty(t) ? null : t.slice(t.indexOf("?") + 1).split("&").reduce(function(e, t) {
                    var n = t.split("="),
                        i = Qr(n, 2),
                        r = i[0],
                        s = i[1];
                    return Object.assign(e, Kr({}, r, decodeURIComponent(s)))
                }, {})
            },
            buildUrlParams: function(e) {
                return Jr.is.object(e) ? Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&") : ""
            },
            stripHTML: function(e) {
                var t = document.createDocumentFragment(),
                    n = document.createElement("div");
                return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
            },
            getAspectRatio: function(e, t) {
                var n = function e(t, n) {
                    return 0 === n ? t : e(n, t % n)
                }(e, t);
                return e / n + ":" + t / n
            },
            get transitionEndEvent() {
                var e = document.createElement("span"),
                    t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    n = Object.keys(t).find(function(t) {
                        return void 0 !== e.style[t]
                    });
                return !!Jr.is.string(n) && t[n]
            },
            repaint: function(e) {
                setTimeout(function() {
                    Jr.toggleHidden(e, !0), e.offsetHeight, Jr.toggleHidden(e, !1)
                }, 0)
            }
        },
        $r = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function(e, t, n) {
                var i = !1,
                    r = !1,
                    s = Jr.getBrowser(),
                    o = s.isIPhone && n && $r.playsinline;
                switch (t + ":" + e) {
                    case "html5:video":
                        r = (i = $r.video) && $r.rangeInput && (!s.isIPhone || o);
                        break;
                    case "html5:audio":
                        r = (i = $r.audio) && $r.rangeInput;
                        break;
                    case "youtube:video":
                    case "vimeo:video":
                        i = !0, r = $r.rangeInput && (!s.isIPhone || o);
                        break;
                    default:
                        r = (i = $r.audio && $r.video) && $r.rangeInput
                }
                return {
                    api: i,
                    ui: r
                }
            },
            pip: !Jr.getBrowser().isIPhone && Jr.is.function(Jr.createElement("video").webkitSetPresentationMode),
            airplay: Jr.is.function(window.WebKitPlaybackTargetAvailabilityEvent),
            playsinline: "playsInline" in document.createElement("video"),
            mime: function(e) {
                var t = this.media;
                try {
                    if (!this.isHTML5 || !Jr.is.function(t.canPlayType)) return !1;
                    if (e.includes("codecs=")) return t.canPlayType(e).replace(/no/, "");
                    if (this.isVideo) switch (e) {
                        case "video/webm":
                            return t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, "");
                        case "video/mp4":
                            return t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "");
                        case "video/ogg":
                            return t.canPlayType('video/ogg; codecs="theora"').replace(/no/, "");
                        default:
                            return !1
                    } else if (this.isAudio) switch (e) {
                        case "audio/mpeg":
                            return t.canPlayType("audio/mpeg;").replace(/no/, "");
                        case "audio/ogg":
                            return t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "");
                        case "audio/wav":
                            return t.canPlayType('audio/wav; codecs="1"').replace(/no/, "");
                        default:
                            return !1
                    }
                } catch (e) {
                    return !1
                }
                return !1
            },
            textTracks: "textTracks" in document.createElement("video"),
            passiveListeners: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            return e = !0, null
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {}
                return e
            }(),
            rangeInput: (Ur = document.createElement("input"), Ur.type = "range", "range" === Ur.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== Jr.transitionEndEvent,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        Xr = {
            getSources: function() {
                return this.isHTML5 ? this.media.querySelectorAll("source") : null
            },
            getQualityOptions: function() {
                if (!this.isHTML5) return null;
                var e = Xr.getSources.call(this);
                if (Jr.is.empty(e)) return null;
                var t = Array.from(e).filter(function(e) {
                    return !Jr.is.empty(e.getAttribute("size"))
                });
                return Jr.is.empty(t) ? null : Jr.dedupe(t.map(function(e) {
                    return Number(e.getAttribute("size"))
                }))
            },
            extend: function() {
                if (this.isHTML5) {
                    var e = this;
                    Object.defineProperty(e.media, "quality", {
                        get: function() {
                            var t = Xr.getSources.call(e);
                            if (Jr.is.empty(t)) return null;
                            var n = Array.from(t).filter(function(t) {
                                return t.getAttribute("src") === e.source
                            });
                            return Jr.is.empty(n) ? null : Number(n[0].getAttribute("size"))
                        },
                        set: function(t) {
                            var n = Xr.getSources.call(e);
                            if (!Jr.is.empty(n)) {
                                var i = Array.from(n).filter(function(e) {
                                    return Number(e.getAttribute("size")) === t
                                });
                                if (!Jr.is.empty(i)) {
                                    var r = i.filter(function(t) {
                                        return $r.mime.call(e, t.getAttribute("type"))
                                    });
                                    if (!Jr.is.empty(r)) {
                                        Jr.dispatchEvent.call(e, e.media, "qualityrequested", !1, {
                                            quality: t
                                        });
                                        var s = e.currentTime,
                                            o = e.playing;
                                        e.media.src = r[0].getAttribute("src"), e.media.load(), o && e.play(), e.currentTime = s, Jr.dispatchEvent.call(e, e.media, "qualitychange", !1, {
                                            quality: t
                                        })
                                    }
                                }
                            }
                        }
                    })
                }
            },
            cancelRequests: function() {
                this.isHTML5 && (Jr.removeElement(Xr.getSources()), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
            }
        },
        Zr = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (Jr.is.empty(e) || Jr.is.empty(t) || !Object.keys(t.i18n).includes(e)) return "";
            var n = t.i18n[e],
                i = {
                    "{seektime}": t.seekTime,
                    "{title}": t.title
                };
            return Object.entries(i).forEach(function(e) {
                var t = Qr(e, 2),
                    i = t[0],
                    r = t[1];
                n = Jr.replaceAll(n, i, r)
            }), n
        },
        es = Jr.getBrowser(),
        ts = {
            addStyleHook: function() {
                Jr.toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), !0), Jr.toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function() {
                var e = this;
                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void ts.toggleNativeControls.call(this, !0);
                Jr.is.element(this.elements.controls) || (is.inject.call(this), this.listeners.controls()), ts.toggleNativeControls.call(this), rs.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, ts.updateVolume.call(this), ts.timeUpdate.call(this), ts.checkPlaying.call(this), Jr.toggleClass(this.elements.container, this.config.classNames.pip.supported, $r.pip && this.isHTML5 && this.isVideo), Jr.toggleClass(this.elements.container, this.config.classNames.airplay.supported, $r.airplay && this.isHTML5), Jr.toggleClass(this.elements.container, this.config.classNames.isIos, es.isIos), Jr.toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function() {
                    Jr.dispatchEvent.call(e, e.media, "ready")
                }, 0), ts.setTitle.call(this), ts.setPoster.call(this)
            },
            setTitle: function() {
                var e = Zr("play", this.config);
                if (Jr.is.string(this.config.title) && !Jr.is.empty(this.config.title) && (e += ", " + this.config.title, this.elements.container.setAttribute("aria-label", this.config.title)), Jr.is.nodeList(this.elements.buttons.play) && Array.from(this.elements.buttons.play).forEach(function(t) {
                        t.setAttribute("aria-label", e)
                    }), this.isEmbed) {
                    var t = Jr.getElement.call(this, "iframe");
                    if (!Jr.is.element(t)) return;
                    var n = Jr.is.empty(this.config.title) ? "video" : this.config.title,
                        i = Zr("frameTitle", this.config);
                    t.setAttribute("title", i.replace("{title}", n))
                }
            },
            setPoster: function() {
                if (Jr.is.element(this.elements.poster) && !Jr.is.empty(this.poster)) {
                    var e = this.poster.split(",");
                    this.elements.poster.style.backgroundImage = e.map(function(e) {
                        return "url('" + e + "')"
                    }).join(",")
                }
            },
            checkPlaying: function(e) {
                Jr.toggleClass(this.elements.container, this.config.classNames.playing, this.playing), Jr.toggleClass(this.elements.container, this.config.classNames.paused, this.paused), Jr.toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped), Jr.toggleState(this.elements.buttons.play, this.playing), Jr.is.event(e) && "timeupdate" === e.type || this.toggleControls(!this.playing)
            },
            checkLoading: function(e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function() {
                    Jr.toggleClass(t.elements.container, t.config.classNames.loading, t.loading), t.toggleControls(t.loading)
                }, this.loading ? 250 : 0)
            },
            checkFailed: function() {
                var e = this;
                this.failed = 3 === this.media.networkState, this.failed && (Jr.toggleClass(this.elements.container, this.config.classNames.loading, !1), Jr.toggleClass(this.elements.container, this.config.classNames.error, !0)), clearTimeout(this.timers.failed), this.timers.loading = setTimeout(function() {
                    Jr.toggleClass(e.elements.container, e.config.classNames.loading, e.loading), e.toggleControls(e.loading)
                }, this.loading ? 250 : 0)
            },
            updateVolume: function() {
                this.supported.ui && (Jr.is.element(this.elements.inputs.volume) && ts.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Jr.is.element(this.elements.buttons.mute) && Jr.toggleState(this.elements.buttons.mute, this.muted || 0 === this.volume))
            },
            setRange: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                Jr.is.element(e) && (e.value = t, is.updateRangeFill.call(this, e))
            },
            setProgress: function(e, t) {
                var n = Jr.is.number(t) ? t : 0,
                    i = Jr.is.element(e) ? e : this.elements.display.buffer;
                if (Jr.is.element(i)) {
                    i.value = n;
                    var r = i.getElementsByTagName("span")[0];
                    Jr.is.element(r) && (r.childNodes[0].nodeValue = n)
                }
            },
            updateProgress: function(e) {
                if (this.supported.ui && Jr.is.event(e)) {
                    var t = 0;
                    if (e) switch (e.type) {
                        case "timeupdate":
                        case "seeking":
                            t = Jr.getPercentage(this.currentTime, this.duration), "timeupdate" === e.type && ts.setRange.call(this, this.elements.inputs.seek, t);
                            break;
                        case "playing":
                        case "progress":
                            ts.setProgress.call(this, this.elements.display.buffer, 100 * this.buffered)
                    }
                }
            },
            updateTimeDisplay: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (Jr.is.element(e) && Jr.is.number(t)) {
                    var i = Jr.getHours(this.duration) > 0;
                    e.textContent = Jr.formatTime(t, i, n)
                }
            },
            timeUpdate: function(e) {
                var t = !Jr.is.element(this.elements.display.duration) && this.config.invertTime;
                ts.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || ts.updateProgress.call(this, e)
            },
            durationUpdate: function() {
                if (this.supported.ui) {
                    var e = Jr.is.element(this.elements.display.duration);
                    !e && this.config.displayDuration && this.paused && ts.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && ts.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), is.updateSeekTooltip.call(this)
                }
            }
        },
        ns = Jr.getBrowser(),
        is = {
            updateRangeFill: function(e) {
                var t = Jr.is.event(e) ? e.target : e;
                Jr.is.element(t) && "range" === t.getAttribute("type") && (t.setAttribute("aria-valuenow", t.value), ns.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%"))
            },
            getIconUrl: function() {
                var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || ns.isIE && !window.svg4everybody;
                return {
                    url: this.config.iconUrl,
                    cors: e
                }
            },
            findElements: function() {
                try {
                    return this.elements.controls = Jr.getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                        play: Jr.getElements.call(this, this.config.selectors.buttons.play),
                        pause: Jr.getElement.call(this, this.config.selectors.buttons.pause),
                        restart: Jr.getElement.call(this, this.config.selectors.buttons.restart),
                        rewind: Jr.getElement.call(this, this.config.selectors.buttons.rewind),
                        fastForward: Jr.getElement.call(this, this.config.selectors.buttons.fastForward),
                        mute: Jr.getElement.call(this, this.config.selectors.buttons.mute),
                        pip: Jr.getElement.call(this, this.config.selectors.buttons.pip),
                        airplay: Jr.getElement.call(this, this.config.selectors.buttons.airplay),
                        settings: Jr.getElement.call(this, this.config.selectors.buttons.settings),
                        captions: Jr.getElement.call(this, this.config.selectors.buttons.captions),
                        fullscreen: Jr.getElement.call(this, this.config.selectors.buttons.fullscreen)
                    }, this.elements.progress = Jr.getElement.call(this, this.config.selectors.progress), this.elements.inputs = {
                        seek: Jr.getElement.call(this, this.config.selectors.inputs.seek),
                        volume: Jr.getElement.call(this, this.config.selectors.inputs.volume)
                    }, this.elements.display = {
                        buffer: Jr.getElement.call(this, this.config.selectors.display.buffer),
                        currentTime: Jr.getElement.call(this, this.config.selectors.display.currentTime),
                        duration: Jr.getElement.call(this, this.config.selectors.display.duration)
                    }, Jr.is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
                } catch (e) {
                    return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                }
            },
            createIcon: function(e, t) {
                var n = is.getIconUrl.call(this),
                    i = (n.cors ? "" : n.url) + "#" + this.config.iconPrefix,
                    r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                Jr.setAttributes(r, Jr.extend(t, {
                    role: "presentation",
                    focusable: "false"
                }));
                var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                    o = i + "-" + e;
                return "href" in s ? s.setAttributeNS("http://www.w3.org/1999/xlink", "href", o) : s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), r.appendChild(s), r
            },
            createLabel: function(e, t) {
                var n = Zr(e, this.config),
                    i = Object.assign({}, t);
                switch (e) {
                    case "pip":
                        n = "PIP";
                        break;
                    case "airplay":
                        n = "AirPlay"
                }
                return "class" in i ? i.class += " " + this.config.classNames.hidden : i.class = this.config.classNames.hidden, Jr.createElement("span", i, n)
            },
            createBadge: function(e) {
                if (Jr.is.empty(e)) return null;
                var t = Jr.createElement("span", {
                    class: this.config.classNames.menu.value
                });
                return t.appendChild(Jr.createElement("span", {
                    class: this.config.classNames.menu.badge
                }, e)), t
            },
            createButton: function(e, t) {
                var n = Jr.createElement("button"),
                    i = Object.assign({}, t),
                    r = Jr.toCamelCase(e),
                    s = !1,
                    o = void 0,
                    a = void 0,
                    l = void 0,
                    c = void 0;
                switch ("type" in i || (i.type = "button"), "class" in i ? i.class.includes(this.config.classNames.control) && (i.class += " " + this.config.classNames.control) : i.class = this.config.classNames.control, e) {
                    case "play":
                        s = !0, o = "play", l = "pause", a = "play", c = "pause";
                        break;
                    case "mute":
                        s = !0, o = "mute", l = "unmute", a = "volume", c = "muted";
                        break;
                    case "captions":
                        s = !0, o = "enableCaptions", l = "disableCaptions", a = "captions-off", c = "captions-on";
                        break;
                    case "fullscreen":
                        s = !0, o = "enterFullscreen", l = "exitFullscreen", a = "enter-fullscreen", c = "exit-fullscreen";
                        break;
                    case "play-large":
                        i.class += " " + this.config.classNames.control + "--overlaid", r = "play", o = "play", a = "play";
                        break;
                    default:
                        o = r, a = e
                }
                return s ? (n.appendChild(is.createIcon.call(this, c, {
                    class: "icon--pressed"
                })), n.appendChild(is.createIcon.call(this, a, {
                    class: "icon--not-pressed"
                })), n.appendChild(is.createLabel.call(this, l, {
                    class: "label--pressed"
                })), n.appendChild(is.createLabel.call(this, o, {
                    class: "label--not-pressed"
                })), i["aria-pressed"] = !1) : (n.appendChild(is.createIcon.call(this, a)), n.appendChild(is.createLabel.call(this, o))), Jr.extend(i, Jr.getAttributesFromSelector(this.config.selectors.buttons[r], i)), Jr.setAttributes(n, i), "play" === r ? (Jr.is.array(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(n)) : this.elements.buttons[r] = n, n
            },
            createRange: function(e, t) {
                var n = Jr.createElement("label", {
                        for: t.id,
                        id: t.id + "-label",
                        class: this.config.classNames.hidden
                    }, Zr(e, this.config)),
                    i = Jr.createElement("input", Jr.extend(Jr.getAttributesFromSelector(this.config.selectors.inputs[e]), {
                        type: "range",
                        min: 0,
                        max: 100,
                        step: .01,
                        value: 0,
                        autocomplete: "off",
                        role: "slider",
                        "aria-labelledby": t.id + "-label",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": 0
                    }, t));
                return this.elements.inputs[e] = i, is.updateRangeFill.call(this, i), {
                    label: n,
                    input: i
                }
            },
            createProgress: function(e, t) {
                var n = Jr.createElement("progress", Jr.extend(Jr.getAttributesFromSelector(this.config.selectors.display[e]), {
                    min: 0,
                    max: 100,
                    value: 0,
                    role: "presentation",
                    "aria-hidden": !0
                }, t));
                if ("volume" !== e) {
                    n.appendChild(Jr.createElement("span", null, "0"));
                    var i = "";
                    switch (e) {
                        case "played":
                            i = Zr("played", this.config);
                            break;
                        case "buffer":
                            i = Zr("buffered", this.config)
                    }
                    n.textContent = "% " + i.toLowerCase()
                }
                return this.elements.display[e] = n, n
            },
            createTime: function(e) {
                var t = Jr.getAttributesFromSelector(this.config.selectors.display[e]),
                    n = Jr.createElement("div", Jr.extend(t, {
                        class: "plyr__time " + t.class,
                        "aria-label": Zr(e, this.config)
                    }), "00:00");
                return this.elements.display[e] = n, n
            },
            createMenuItem: function(e, t, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                    o = Jr.createElement("li"),
                    a = Jr.createElement("label", {
                        class: this.config.classNames.control
                    }),
                    l = Jr.createElement("input", Jr.extend(Jr.getAttributesFromSelector(this.config.selectors.inputs[n]), {
                        type: "radio",
                        name: "plyr-" + n,
                        value: e,
                        checked: s,
                        class: "plyr__sr-only"
                    })),
                    c = Jr.createElement("span", {
                        hidden: ""
                    });
                a.appendChild(l), a.appendChild(c), a.insertAdjacentHTML("beforeend", i), Jr.is.element(r) && a.appendChild(r), o.appendChild(a), t.appendChild(o)
            },
            updateSeekTooltip: function(e) {
                var t = this;
                if (this.config.tooltips.seek && Jr.is.element(this.elements.inputs.seek) && Jr.is.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
                    var n = 0,
                        i = this.elements.inputs.seek.getBoundingClientRect(),
                        r = this.config.classNames.tooltip + "--visible",
                        s = function(e) {
                            Jr.toggleClass(t.elements.display.seekTooltip, r, e)
                        };
                    if (this.touch) s(!1);
                    else {
                        if (Jr.is.event(e)) n = 100 / i.width * (e.pageX - i.left);
                        else {
                            if (!Jr.hasClass(this.elements.display.seekTooltip, r)) return;
                            n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                        }
                        n < 0 ? n = 0 : n > 100 && (n = 100), ts.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = n + "%", Jr.is.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && s("mouseenter" === e.type)
                    }
                }
            },
            toggleTab: function(e, t) {
                Jr.toggleHidden(this.elements.settings.tabs[e], !t)
            },
            setQualityMenu: function(e) {
                var t = this;
                if (Jr.is.element(this.elements.settings.panes.quality)) {
                    var n = this.elements.settings.panes.quality.querySelector("ul");
                    Jr.is.array(e) && (this.options.quality = e.filter(function(e) {
                        return t.config.quality.options.includes(e)
                    }));
                    var i = !Jr.is.empty(this.options.quality) && this.options.quality.length > 1;
                    if (is.toggleTab.call(this, "quality", i), is.checkMenu.call(this), i) {
                        Jr.emptyElement(n);
                        this.options.quality.sort(function(e, n) {
                            var i = t.config.quality.options;
                            return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                        }).forEach(function(e) {
                            var i = is.getLabel.call(t, "quality", e);
                            is.createMenuItem.call(t, e, n, "quality", i, function(e) {
                                var n = "";
                                switch (e) {
                                    case 2160:
                                        n = "4K";
                                        break;
                                    case 1440:
                                    case 1080:
                                    case 720:
                                        n = "HD";
                                        break;
                                    case 576:
                                    case 480:
                                        n = "SD"
                                }
                                return n.length ? is.createBadge.call(t, n) : null
                            }(e))
                        }), is.updateSetting.call(this, "quality", n)
                    }
                }
            },
            getLabel: function(e, t) {
                switch (e) {
                    case "speed":
                        return 1 === t ? Zr("normal", this.config) : t + "&times;";
                    case "quality":
                        return Jr.is.number(t) ? t + "p" : Jr.toTitleCase(t);
                    case "captions":
                        return rs.getLabel.call(this);
                    default:
                        return null
                }
            },
            updateSetting: function(e, t, n) {
                var i = this.elements.settings.panes[e],
                    r = null,
                    s = t;
                switch (e) {
                    case "captions":
                        r = this.captions.active ? this.options.captions.length > 2 || !this.options.captions.some(function(e) {
                            return "enabled" === e
                        }) ? this.captions.language : "enabled" : "";
                        break;
                    default:
                        if (r = Jr.is.empty(n) ? this[e] : n, Jr.is.empty(r) && (r = this.config[e].default), !Jr.is.empty(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '" + r + "' for " + e);
                        if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '" + r + "' for " + e)
                }
                if (Jr.is.element(s) || (s = i && i.querySelector("ul")), Jr.is.element(s)) {
                    this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = is.getLabel.call(this, e, r);
                    var o = s && s.querySelector('input[value="' + r + '"]');
                    Jr.is.element(o) && (o.checked = !0)
                }
            },
            setCaptionsMenu: function() {
                var e = this,
                    t = this.elements.settings.panes.captions.querySelector("ul"),
                    n = rs.getTracks.call(this).length;
                if (is.toggleTab.call(this, "captions", n), Jr.emptyElement(t), is.checkMenu.call(this), n) {
                    var i = rs.getTracks.call(this).map(function(t) {
                        return {
                            language: Jr.is.empty(t.language) ? "enabled" : t.language,
                            label: rs.getLabel.call(e, t)
                        }
                    });
                    i.unshift({
                        language: "",
                        label: Zr("disabled", this.config)
                    }), i.forEach(function(n) {
                        is.createMenuItem.call(e, n.language, t, "language", n.label, "enabled" !== n.language ? is.createBadge.call(e, n.language.toUpperCase()) : null, n.language.toLowerCase() === e.captions.language.toLowerCase())
                    }), this.options.captions = i.map(function(e) {
                        return e.language
                    }), is.updateSetting.call(this, "captions", t)
                }
            },
            setSpeedMenu: function(e) {
                var t = this;
                if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && Jr.is.element(this.elements.settings.panes.speed)) {
                    Jr.is.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function(e) {
                        return t.config.speed.options.includes(e)
                    });
                    var n = !Jr.is.empty(this.options.speed) && this.options.speed.length > 1;
                    if (is.toggleTab.call(this, "speed", n), is.checkMenu.call(this), n) {
                        var i = this.elements.settings.panes.speed.querySelector("ul");
                        Jr.emptyElement(i), this.options.speed.forEach(function(e) {
                            var n = is.getLabel.call(t, "speed", e);
                            is.createMenuItem.call(t, e, i, "speed", n)
                        }), is.updateSetting.call(this, "speed", i)
                    }
                }
            },
            checkMenu: function() {
                var e = this.elements.settings.tabs,
                    t = !Jr.is.empty(e) && Object.values(e).some(function(e) {
                        return !e.hidden
                    });
                Jr.toggleHidden(this.elements.settings.menu, !t)
            },
            toggleMenu: function(e) {
                var t = this.elements.settings.form,
                    n = this.elements.buttons.settings;
                if (Jr.is.element(t) && Jr.is.element(n)) {
                    var i = Jr.is.boolean(e) ? e : Jr.is.element(t) && t.hasAttribute("hidden");
                    if (Jr.is.event(e)) {
                        var r = Jr.is.element(t) && t.contains(e.target),
                            s = e.target === this.elements.buttons.settings;
                        if (r || !r && !s && i) return;
                        s && e.stopPropagation()
                    }
                    Jr.is.element(n) && n.setAttribute("aria-expanded", i), Jr.is.element(t) && (Jr.toggleHidden(t, !i), Jr.toggleClass(this.elements.container, this.config.classNames.menu.open, i), i ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1))
                }
            },
            getTabSize: function(e) {
                var t = e.cloneNode(!0);
                t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), Array.from(t.querySelectorAll("input[name]")).forEach(function(e) {
                    var t = e.getAttribute("name");
                    e.setAttribute("name", t + "-clone")
                }), e.parentNode.appendChild(t);
                var n = t.scrollWidth,
                    i = t.scrollHeight;
                return Jr.removeElement(t), {
                    width: n,
                    height: i
                }
            },
            showTab: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = this.elements.settings.menu,
                    n = document.getElementById(e);
                if (Jr.is.element(n) && "tabpanel" === n.getAttribute("role")) {
                    var i = t.querySelector('[role="tabpanel"]:not([hidden])'),
                        r = i.parentNode;
                    if (Array.from(t.querySelectorAll('[aria-controls="' + i.getAttribute("id") + '"]')).forEach(function(e) {
                            e.setAttribute("aria-expanded", !1)
                        }), $r.transitions && !$r.reducedMotion) {
                        r.style.width = i.scrollWidth + "px", r.style.height = i.scrollHeight + "px";
                        var s = is.getTabSize.call(this, n);
                        Jr.on(r, Jr.transitionEndEvent, function e(t) {
                            t.target === r && ["width", "height"].includes(t.propertyName) && (r.style.width = "", r.style.height = "", Jr.off(r, Jr.transitionEndEvent, e))
                        }), r.style.width = s.width + "px", r.style.height = s.height + "px"
                    }
                    Jr.toggleHidden(i, !0), i.setAttribute("tabindex", -1), Jr.toggleHidden(n, !1);
                    var o = Jr.getElements.call(this, '[aria-controls="' + e + '"]');
                    Array.from(o).forEach(function(e) {
                        e.setAttribute("aria-expanded", !0)
                    }), n.removeAttribute("tabindex"), n.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus()
                }
            },
            create: function(e) {
                var t = this;
                if (Jr.is.empty(this.config.controls)) return null;
                var n = Jr.createElement("div", Jr.getAttributesFromSelector(this.config.selectors.controls.wrapper));
                if (this.config.controls.includes("restart") && n.appendChild(is.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(is.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(is.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(is.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
                    var i = Jr.createElement("div", Jr.getAttributesFromSelector(this.config.selectors.progress)),
                        r = is.createRange.call(this, "seek", {
                            id: "plyr-seek-" + e.id
                        });
                    if (i.appendChild(r.label), i.appendChild(r.input), i.appendChild(is.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
                        var s = Jr.createElement("span", {
                            role: "tooltip",
                            class: this.config.classNames.tooltip
                        }, "00:00");
                        i.appendChild(s), this.elements.display.seekTooltip = s
                    }
                    this.elements.progress = i, n.appendChild(this.elements.progress)
                }
                if (this.config.controls.includes("current-time") && n.appendChild(is.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(is.createTime.call(this, "duration")), this.config.controls.includes("mute") && n.appendChild(is.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
                    var o = Jr.createElement("div", {
                            class: "plyr__volume"
                        }),
                        a = {
                            max: 1,
                            step: .05,
                            value: this.config.volume
                        },
                        l = is.createRange.call(this, "volume", Jr.extend(a, {
                            id: "plyr-volume-" + e.id
                        }));
                    o.appendChild(l.label), o.appendChild(l.input), this.elements.volume = o, n.appendChild(o)
                }
                if (this.config.controls.includes("captions") && n.appendChild(is.createButton.call(this, "captions")), this.config.controls.includes("settings") && !Jr.is.empty(this.config.settings)) {
                    var c = Jr.createElement("div", {
                        class: "plyr__menu",
                        hidden: ""
                    });
                    c.appendChild(is.createButton.call(this, "settings", {
                        id: "plyr-settings-toggle-" + e.id,
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-" + e.id,
                        "aria-expanded": !1
                    }));
                    var u = Jr.createElement("form", {
                            class: "plyr__menu__container",
                            id: "plyr-settings-" + e.id,
                            hidden: "",
                            "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                            role: "tablist",
                            tabindex: -1
                        }),
                        d = Jr.createElement("div"),
                        f = Jr.createElement("div", {
                            id: "plyr-settings-" + e.id + "-home",
                            "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                            role: "tabpanel"
                        }),
                        h = Jr.createElement("ul", {
                            role: "tablist"
                        });
                    this.config.settings.forEach(function(n) {
                        var i = Jr.createElement("li", {
                                role: "tab",
                                hidden: ""
                            }),
                            r = Jr.createElement("button", Jr.extend(Jr.getAttributesFromSelector(t.config.selectors.buttons.settings), {
                                type: "button",
                                class: t.config.classNames.control + " " + t.config.classNames.control + "--forward",
                                id: "plyr-settings-" + e.id + "-" + n + "-tab",
                                "aria-haspopup": !0,
                                "aria-controls": "plyr-settings-" + e.id + "-" + n,
                                "aria-expanded": !1
                            }), Zr(n, t.config)),
                            s = Jr.createElement("span", {
                                class: t.config.classNames.menu.value
                            });
                        s.innerHTML = e[n], r.appendChild(s), i.appendChild(r), h.appendChild(i), t.elements.settings.tabs[n] = i
                    }), f.appendChild(h), d.appendChild(f), this.config.settings.forEach(function(n) {
                        var i = Jr.createElement("div", {
                                id: "plyr-settings-" + e.id + "-" + n,
                                hidden: "",
                                "aria-labelled-by": "plyr-settings-" + e.id + "-" + n + "-tab",
                                role: "tabpanel",
                                tabindex: -1
                            }),
                            r = Jr.createElement("button", {
                                type: "button",
                                class: t.config.classNames.control + " " + t.config.classNames.control + "--back",
                                "aria-haspopup": !0,
                                "aria-controls": "plyr-settings-" + e.id + "-home",
                                "aria-expanded": !1
                            }, Zr(n, t.config));
                        i.appendChild(r);
                        var s = Jr.createElement("ul");
                        i.appendChild(s), d.appendChild(i), t.elements.settings.panes[n] = i
                    }), u.appendChild(d), c.appendChild(u), n.appendChild(c), this.elements.settings.form = u, this.elements.settings.menu = c
                }
                return this.config.controls.includes("pip") && $r.pip && n.appendChild(is.createButton.call(this, "pip")), this.config.controls.includes("airplay") && $r.airplay && n.appendChild(is.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && n.appendChild(is.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(is.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && is.setQualityMenu.call(this, Xr.getQualityOptions.call(this)), is.setSpeedMenu.call(this), n
            },
            inject: function() {
                var e = this;
                if (this.config.loadSprite) {
                    var t = is.getIconUrl.call(this);
                    t.cors && Jr.loadSprite(t.url, "sprite-plyr")
                }
                this.id = Math.floor(1e4 * Math.random());
                var n = null;
                this.elements.controls = null;
                var i = {
                        id: this.id,
                        seektime: this.config.seekTime,
                        title: this.config.title
                    },
                    r = !0;
                Jr.is.string(this.config.controls) || Jr.is.element(this.config.controls) ? n = this.config.controls : Jr.is.function(this.config.controls) ? n = this.config.controls.call(this, i) : (n = is.create.call(this, {
                    id: this.id,
                    seektime: this.config.seekTime,
                    speed: this.speed,
                    quality: this.quality,
                    captions: rs.getLabel.call(this)
                }), r = !1);
                var s = function(e) {
                    var t = e;
                    return Object.entries(i).forEach(function(e) {
                        var n = Qr(e, 2),
                            i = n[0],
                            r = n[1];
                        t = Jr.replaceAll(t, "{" + i + "}", r)
                    }), t
                };
                r && (Jr.is.string(this.config.controls) ? n = s(n) : Jr.is.element(n) && (n.innerHTML = s(n.innerHTML)));
                var o = void 0;
                if (Jr.is.string(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), Jr.is.element(o) || (o = this.elements.container), Jr.is.element(n) ? o.appendChild(n) : n && o.insertAdjacentHTML("beforeend", n), Jr.is.element(this.elements.controls) || is.findElements.call(this), window.navigator.userAgent.includes("Edge") && Jr.repaint(o), this.config.tooltips.controls) {
                    var a = Jr.getElements.call(this, [this.config.selectors.controls.wrapper, " ", this.config.selectors.labels, " .", this.config.classNames.hidden].join(""));
                    Array.from(a).forEach(function(t) {
                        Jr.toggleClass(t, e.config.classNames.hidden, !1), Jr.toggleClass(t, e.config.classNames.tooltip, !0), t.setAttribute("role", "tooltip")
                    })
                }
            }
        },
        rs = {
            setup: function() {
                if (this.supported.ui) {
                    var e = this.storage.get("language");
                    if (Jr.is.empty(e) || (this.captions.language = e), Jr.is.empty(this.captions.language) && (this.captions.language = this.config.captions.language.toLowerCase()), !Jr.is.boolean(this.captions.active)) {
                        var t = this.storage.get("captions");
                        Jr.is.boolean(t) ? this.captions.active = t : this.captions.active = this.config.captions.active
                    }
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !$r.textTracks) Jr.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && is.setCaptionsMenu.call(this);
                    else {
                        Jr.is.element(this.elements.captions) || (this.elements.captions = Jr.createElement("div", Jr.getAttributesFromSelector(this.config.selectors.captions)), Jr.insertAfter(this.elements.captions, this.elements.wrapper)), Jr.toggleClass(this.elements.container, this.config.classNames.captions.enabled, !Jr.is.empty(rs.getTracks.call(this)));
                        var n = rs.getTracks.call(this);
                        if (!Jr.is.empty(n)) {
                            if (Jr.getBrowser().isIE && window.URL) {
                                var i = this.media.querySelectorAll("track");
                                Array.from(i).forEach(function(e) {
                                    var t = e.getAttribute("src"),
                                        n = Jr.parseUrl(t);
                                    n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Jr.fetch(t, "blob").then(function(t) {
                                        e.setAttribute("src", window.URL.createObjectURL(t))
                                    }).catch(function() {
                                        Jr.removeElement(e)
                                    })
                                })
                            }
                            rs.setLanguage.call(this), rs.show.call(this), Jr.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && is.setCaptionsMenu.call(this)
                        }
                    }
                }
            },
            setLanguage: function() {
                var e = this;
                if (this.isHTML5 && this.isVideo) {
                    rs.getTracks.call(this).forEach(function(t) {
                        Jr.on(t, "cuechange", function(t) {
                            return rs.setCue.call(e, t)
                        }), t.mode = "hidden"
                    });
                    var t = rs.getCurrentTrack.call(this);
                    Jr.is.track(t) && Array.from(t.activeCues || []).length && rs.setCue.call(this, t)
                } else this.isVimeo && this.captions.active && this.embed.enableTextTrack(this.language)
            },
            getTracks: function() {
                return Jr.is.nullOrUndefined(this.media) ? [] : Array.from(this.media.textTracks || []).filter(function(e) {
                    return ["captions", "subtitles"].includes(e.kind)
                })
            },
            getCurrentTrack: function() {
                var e = this,
                    t = rs.getTracks.call(this);
                if (!t.length) return null;
                var n = t.find(function(t) {
                    return t.language.toLowerCase() === e.language
                });
                (n || (n = Jr.getElement.call(this, "track[default]")), n) || (n = Qr(t, 1)[0]);
                return n
            },
            getLabel: function(e) {
                var t = e;
                return !Jr.is.track(t) && $r.textTracks && this.captions.active && (t = rs.getCurrentTrack.call(this)), Jr.is.track(t) ? Jr.is.empty(t.label) ? Jr.is.empty(t.language) ? Zr("enabled", this.config) : e.language.toUpperCase() : t.label : Zr("disabled", this.config)
            },
            setCue: function(e) {
                var t = Jr.is.event(e) ? e.target : e,
                    n = t.activeCues,
                    i = n.length && n[0];
                t === rs.getCurrentTrack.call(this) && (Jr.is.cue(i) ? rs.setText.call(this, i.getCueAsHTML()) : rs.setText.call(this, null), Jr.dispatchEvent.call(this, this.media, "cuechange"))
            },
            setText: function(e) {
                if (this.supported.ui)
                    if (Jr.is.element(this.elements.captions)) {
                        var t = Jr.createElement("span");
                        Jr.emptyElement(this.elements.captions);
                        var n = Jr.is.nullOrUndefined(e) ? "" : e;
                        Jr.is.string(n) ? t.textContent = n.trim() : t.appendChild(n), this.elements.captions.appendChild(t)
                    } else this.debug.warn("No captions element to render to")
            },
            show: function() {
                var e = this.storage.get("captions");
                Jr.is.boolean(e) ? this.captions.active = e : e = this.config.captions.active, e && (Jr.toggleClass(this.elements.container, this.config.classNames.captions.active, !0), Jr.toggleState(this.elements.buttons.captions, !0))
            }
        },
        ss = function() {},
        os = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Gr(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
            }
            return Yr(e, [{
                key: "log",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : ss
                }
            }, {
                key: "warn",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : ss
                }
            }, {
                key: "error",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : ss
                }
            }]), e
        }(),
        as = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: "16:9",
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.3.7/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, "default"]
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            captions: {
                active: !1,
                language: (navigator.language || navigator.userLanguage).split("-")[0]
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad"
            },
            urls: {
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/v2/video/{0}.json"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet",
                    poster: "https://img.youtube.com/vi/{0}/maxresdefault.jpg,https://img.youtube.com/vi/{0}/hqdefault.jpg"
                },
                googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress--buffer",
                    played: ".plyr__progress--played",
                    loop: ".plyr__progress--loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                menu: {
                    quality: ".js-plyr__menu__list--quality"
                }
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                ads: "plyr__ads",
                control: "plyr__control",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                error: "plyr--has-error",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                tabFocus: "plyr__tab-focus"
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            keys: {
                google: null
            },
            ads: {
                enabled: !1,
                publisherId: ""
            }
        },
        ls = Jr.getBrowser();

    function cs() {
        if (this.enabled) {
            var e = this.player.elements.buttons.fullscreen;
            Jr.is.element(e) && Jr.toggleState(e, this.active), Jr.dispatchEvent(this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), ls.isIos || Jr.trapFocus.call(this.player, this.target, this.active)
        }
    }

    function us() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e ? this.scrollPosition = {
            x: window.scrollX || 0,
            y: window.scrollY || 0
        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", Jr.toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, e), cs.call(this)
    }
    var ds = function() {
            function e(t) {
                var n = this;
                Gr(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                    x: 0,
                    y: 0
                }, Jr.on(document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function() {
                    cs.call(n)
                }), Jr.on(this.player.elements.container, "dblclick", function(e) {
                    Jr.is.element(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle()
                }), this.update()
            }
            return Yr(e, [{
                key: "update",
                value: function() {
                    this.enabled ? this.player.debug.log((e.native ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), Jr.toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                }
            }, {
                key: "enter",
                value: function() {
                    this.enabled && (ls.isIos && this.player.config.fullscreen.iosNative ? this.player.playing && this.target.webkitEnterFullscreen() : e.native ? this.prefix ? Jr.is.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : us.call(this, !0))
                }
            }, {
                key: "exit",
                value: function() {
                    if (this.enabled)
                        if (ls.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
                        else if (e.native)
                        if (this.prefix) {
                            if (!Jr.is.empty(this.prefix)) {
                                var t = "moz" === this.prefix ? "Cancel" : "Exit";
                                document["" + this.prefix + t + this.property]()
                            }
                        } else(document.cancelFullScreen || document.exitFullscreen).call(document);
                    else us.call(this, !1)
                }
            }, {
                key: "toggle",
                value: function() {
                    this.active ? this.exit() : this.enter()
                }
            }, {
                key: "enabled",
                get: function() {
                    return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                }
            }, {
                key: "active",
                get: function() {
                    return !!this.enabled && (e.native ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : Jr.hasClass(this.target, this.player.config.classNames.fullscreen.fallback))
                }
            }, {
                key: "target",
                get: function() {
                    return ls.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
                }
            }], [{
                key: "native",
                get: function() {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                }
            }, {
                key: "prefix",
                get: function() {
                    if (Jr.is.function(document.exitFullscreen)) return "";
                    var e = "";
                    return ["webkit", "moz", "ms"].some(function(t) {
                        return !(!Jr.is.function(document[t + "ExitFullscreen"]) && !Jr.is.function(document[t + "CancelFullScreen"])) && (e = t, !0)
                    }), e
                }
            }, {
                key: "property",
                get: function() {
                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                }
            }]), e
        }(),
        fs = Jr.getBrowser(),
        hs = function() {
            function e(t) {
                Gr(this, e), this.player = t, this.lastKey = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this)
            }
            return Yr(e, [{
                key: "handleKey",
                value: function(e) {
                    var t = this,
                        n = e.keyCode ? e.keyCode : e.which,
                        i = "keydown" === e.type,
                        r = i && n === this.lastKey;
                    if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && Jr.is.number(n)) {
                        if (i) {
                            var s = Jr.getFocusElement();
                            if (Jr.is.element(s) && Jr.matches(s, this.player.config.selectors.editable)) return;
                            switch ([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67, 73, 76, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    r || (t.player.currentTime = t.player.duration / 10 * (n - 48));
                                    break;
                                case 32:
                                case 75:
                                    r || this.player.togglePlay();
                                    break;
                                case 38:
                                    this.player.increaseVolume(.1);
                                    break;
                                case 40:
                                    this.player.decreaseVolume(.1);
                                    break;
                                case 77:
                                    r || (this.player.muted = !this.player.muted);
                                    break;
                                case 39:
                                    this.player.forward();
                                    break;
                                case 37:
                                    this.player.rewind();
                                    break;
                                case 70:
                                    this.player.fullscreen.toggle();
                                    break;
                                case 67:
                                    r || this.player.toggleCaptions();
                                    break;
                                case 76:
                                    this.player.loop = !this.player.loop
                            }!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === n && this.player.fullscreen.toggle(), this.lastKey = n
                        } else this.lastKey = null
                    }
                }
            }, {
                key: "toggleMenu",
                value: function(e) {
                    is.toggleMenu.call(this.player, e)
                }
            }, {
                key: "firstTouch",
                value: function() {
                    this.player.touch = !0, Jr.toggleClass(this.player.elements.container, this.player.config.classNames.isTouch, !0), Jr.off(document.body, "touchstart", this.firstTouch)
                }
            }, {
                key: "global",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.player.config.keyboard.global && Jr.toggleListener(window, "keydown keyup", this.handleKey, e, !1), Jr.toggleListener(document.body, "click", this.toggleMenu, e), Jr.on(document.body, "touchstart", this.firstTouch)
                }
            }, {
                key: "container",
                value: function() {
                    var e = this;
                    !this.player.config.keyboard.global && this.player.config.keyboard.focused && Jr.on(this.player.elements.container, "keydown keyup", this.handleKey, !1), Jr.on(this.player.elements.container, "focusout", function(t) {
                        Jr.toggleClass(t.target, e.player.config.classNames.tabFocus, !1)
                    }), Jr.on(this.player.elements.container, "keydown", function(t) {
                        9 === t.keyCode && setTimeout(function() {
                            Jr.toggleClass(Jr.getFocusElement(), e.player.config.classNames.tabFocus, !0)
                        }, 0)
                    }), this.player.config.hideControls && Jr.on(this.player.elements.container, "mouseenter mouseleave mousemove touchstart touchend touchmove enterfullscreen exitfullscreen", function(t) {
                        e.player.toggleControls(t)
                    })
                }
            }, {
                key: "media",
                value: function() {
                    var e = this;
                    if (Jr.on(this.player.media, "timeupdate seeking", function(t) {
                            return ts.timeUpdate.call(e.player, t)
                        }), Jr.on(this.player.media, "durationchange loadeddata loadedmetadata", function(t) {
                            return ts.durationUpdate.call(e.player, t)
                        }), Jr.on(this.player.media, "loadeddata", function() {
                            Jr.toggleHidden(e.player.elements.volume, !e.player.hasAudio), Jr.toggleHidden(e.player.elements.buttons.mute, !e.player.hasAudio)
                        }), Jr.on(this.player.media, "ended", function() {
                            e.player.isHTML5 && e.player.isVideo && e.player.config.resetOnEnd && e.player.restart()
                        }), Jr.on(this.player.media, "progress playing", function(t) {
                            return ts.updateProgress.call(e.player, t)
                        }), Jr.on(this.player.media, "volumechange", function(t) {
                            return ts.updateVolume.call(e.player, t)
                        }), Jr.on(this.player.media, "playing play pause ended emptied timeupdate", function(t) {
                            return ts.checkPlaying.call(e.player, t)
                        }), Jr.on(this.player.media, "waiting canplay seeked playing", function(t) {
                            return ts.checkLoading.call(e.player, t)
                        }), Jr.on(this.player.media, "playing", function() {
                            e.player.ads && e.player.ads.enabled && !e.player.ads.initialized && e.player.ads.managerPromise.then(function() {
                                return e.player.ads.play()
                            }).catch(function() {
                                return e.player.play()
                            })
                        }), this.player.supported.ui && this.player.config.clickToPlay && !this.player.isAudio) {
                        var t = Jr.getElement.call(this.player, "." + this.player.config.classNames.video);
                        if (!Jr.is.element(t)) return;
                        Jr.on(t, "click", function() {
                            e.player.config.hideControls && e.player.touch && !e.player.paused || (e.player.paused ? e.player.play() : e.player.ended ? (e.player.restart(), e.player.play()) : e.player.pause())
                        })
                    }
                    this.player.supported.ui && this.player.config.disableContextMenu && Jr.on(this.player.elements.wrapper, "contextmenu", function(e) {
                        e.preventDefault()
                    }, !1), Jr.on(this.player.media, "volumechange", function() {
                        e.player.storage.set({
                            volume: e.player.volume,
                            muted: e.player.muted
                        })
                    }), Jr.on(this.player.media, "ratechange", function() {
                        is.updateSetting.call(e.player, "speed"), e.player.storage.set({
                            speed: e.player.speed
                        })
                    }), Jr.on(this.player.media, "qualityrequested", function(t) {
                        e.player.storage.set({
                            quality: t.detail.quality
                        })
                    }), Jr.on(this.player.media, "qualitychange", function(t) {
                        is.updateSetting.call(e.player, "quality", null, t.detail.quality)
                    }), Jr.on(this.player.media, "languagechange", function() {
                        is.updateSetting.call(e.player, "captions"), e.player.storage.set({
                            language: e.player.language
                        })
                    }), Jr.on(this.player.media, "captionsenabled captionsdisabled", function() {
                        is.updateSetting.call(e.player, "captions"), e.player.storage.set({
                            captions: e.player.captions.active
                        })
                    }), Jr.on(this.player.media, this.player.config.events.concat(["keyup", "keydown"]).join(" "), function(t) {
                        var n = {};
                        "error" === t.type && (n = e.player.media.error), Jr.dispatchEvent.call(e.player, e.player.elements.container, t.type, !0, n)
                    })
                }
            }, {
                key: "controls",
                value: function() {
                    var e = this,
                        t = fs.isIE ? "change" : "input",
                        n = function(t, n, i) {
                            var r = e.player.config.listeners[i],
                                s = !0;
                            Jr.is.function(r) && (s = r.call(e.player, t)), s && Jr.is.function(n) && n.call(e.player, t)
                        },
                        i = function(t, i, r, s) {
                            var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                a = e.player.config.listeners[s],
                                l = Jr.is.function(a);
                            Jr.on(t, i, function(e) {
                                return n(e, r, s)
                            }, o && !l)
                        };
                    i(this.player.elements.buttons.play, "click", this.player.togglePlay, "play"), i(this.player.elements.buttons.restart, "click", this.player.restart, "restart"), i(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind"), i(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward"), i(this.player.elements.buttons.mute, "click", function() {
                        e.player.muted = !e.player.muted
                    }, "mute"), i(this.player.elements.buttons.captions, "click", this.player.toggleCaptions), i(this.player.elements.buttons.fullscreen, "click", function() {
                        e.player.fullscreen.toggle()
                    }, "fullscreen"), i(this.player.elements.buttons.pip, "click", function() {
                        e.player.pip = "toggle"
                    }, "pip"), i(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay"), i(this.player.elements.buttons.settings, "click", function(t) {
                        is.toggleMenu.call(e.player, t)
                    }), i(this.player.elements.settings.form, "click", function(t) {
                        t.stopPropagation();
                        var i = function() {
                            var t = "plyr-settings-" + e.player.id + "-home";
                            is.showTab.call(e.player, t)
                        };
                        if (Jr.matches(t.target, e.player.config.selectors.inputs.language)) n(t, function() {
                            e.player.language = t.target.value, i()
                        }, "language");
                        else if (Jr.matches(t.target, e.player.config.selectors.inputs.quality)) n(t, function() {
                            e.player.quality = t.target.value, i()
                        }, "quality");
                        else if (Jr.matches(t.target, e.player.config.selectors.inputs.speed)) n(t, function() {
                            e.player.speed = parseFloat(t.target.value), i()
                        }, "speed");
                        else {
                            var r = t.target;
                            is.showTab.call(e.player, r.getAttribute("aria-controls"))
                        }
                    }), i(this.player.elements.inputs.seek, t, function(t) {
                        e.player.currentTime = t.target.value / t.target.max * e.player.duration
                    }, "seek"), this.player.config.toggleInvert && !Jr.is.element(this.player.elements.display.duration) && i(this.player.elements.display.currentTime, "click", function() {
                        0 !== e.player.currentTime && (e.player.config.invertTime = !e.player.config.invertTime, ts.timeUpdate.call(e.player))
                    }), i(this.player.elements.inputs.volume, t, function(t) {
                        e.player.volume = t.target.value
                    }, "volume"), fs.isWebkit && i(Jr.getElements.call(this.player, 'input[type="range"]'), "input", function(t) {
                        is.updateRangeFill.call(e.player, t.target)
                    }), i(this.player.elements.progress, "mouseenter mouseleave mousemove", function(t) {
                        return is.updateSeekTooltip.call(e.player, t)
                    }), this.player.config.hideControls && (i(this.player.elements.controls, "mouseenter mouseleave", function(t) {
                        e.player.elements.controls.hover = !e.player.touch && "mouseenter" === t.type
                    }), i(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function(t) {
                        e.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
                    }), i(this.player.elements.controls, "focusin focusout", function(t) {
                        e.player.toggleControls(t)
                    })), i(this.player.elements.inputs.volume, "wheel", function(t) {
                        var n = t.webkitDirectionInvertedFromDevice,
                            i = 0;
                        (t.deltaY < 0 || t.deltaX > 0) && (n ? (e.player.decreaseVolume(.02), i = -1) : (e.player.increaseVolume(.02), i = 1)), (t.deltaY > 0 || t.deltaX < 0) && (n ? (e.player.increaseVolume(.02), i = 1) : (e.player.decreaseVolume(.02), i = -1)), (1 === i && e.player.media.volume < 1 || -1 === i && e.player.media.volume > 0) && t.preventDefault()
                    }, "volume", !1)
                }
            }, {
                key: "clear",
                value: function() {
                    this.global(!1)
                }
            }]), e
        }(),
        ps = {
            setup: function() {
                var e = this;
                Jr.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), ps.setAspectRatio.call(this), Jr.is.object(window.Vimeo) ? ps.ready.call(this) : Jr.loadScript(this.config.urls.vimeo.sdk).then(function() {
                    ps.ready.call(e)
                }).catch(function(t) {
                    e.debug.warn("Vimeo API failed to load", t)
                })
            },
            setAspectRatio: function(e) {
                var t = Jr.is.string(e) ? e.split(":") : this.config.ratio.split(":"),
                    n = 100 / t[0] * t[1];
                if (this.elements.wrapper.style.paddingBottom = n + "%", this.supported.ui) {
                    var i = (240 - n) / 4.8;
                    this.media.style.transform = "translateY(-" + i + "%)"
                }
            },
            ready: function() {
                var e = this,
                    t = this,
                    n = {
                        loop: t.config.loop.active,
                        autoplay: t.autoplay,
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: 0,
                        gesture: "media",
                        playsinline: !this.config.fullscreen.iosNative
                    },
                    i = Jr.buildUrlParams(n),
                    r = t.media.getAttribute("src");
                Jr.is.empty(r) && (r = t.media.getAttribute(t.config.attributes.embed.id));
                var s = Jr.parseVimeoId(r),
                    o = Jr.createElement("iframe"),
                    a = Jr.format(t.config.urls.vimeo.iframe, s, i);
                o.setAttribute("src", a), o.setAttribute("allowfullscreen", ""), o.setAttribute("allowtransparency", ""), o.setAttribute("allow", "autoplay");
                var l = Jr.createElement("div", {
                    class: t.config.classNames.embedContainer
                });
                l.appendChild(o), t.media = Jr.replaceElement(l, t.media), Jr.fetch(Jr.format(t.config.urls.vimeo.api, s), "json").then(function(e) {
                    if (!Jr.is.empty(e)) {
                        var n = new URL(e[0].thumbnail_large);
                        n.pathname = n.pathname.split("_")[0] + ".jpg", t.media.setAttribute("poster", n.href), ts.setPoster.call(t)
                    }
                }), t.embed = new window.Vimeo.Player(o, {
                    autopause: t.config.autopause,
                    muted: t.muted
                }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                    t.embed.play().then(function() {
                        t.media.paused = !1
                    })
                }, t.media.pause = function() {
                    t.embed.pause().then(function() {
                        t.media.paused = !0
                    })
                }, t.media.stop = function() {
                    t.pause(), t.currentTime = 0
                };
                var c = t.media.currentTime;
                Object.defineProperty(t.media, "currentTime", {
                    get: function() {
                        return c
                    },
                    set: function(e) {
                        var n = t.media.paused;
                        t.media.seeking = !0, Jr.dispatchEvent.call(t, t.media, "seeking"), t.embed.setCurrentTime(e).catch(function() {}), n && t.pause()
                    }
                });
                var u = t.config.speed.selected;
                Object.defineProperty(t.media, "playbackRate", {
                    get: function() {
                        return u
                    },
                    set: function(e) {
                        t.embed.setPlaybackRate(e).then(function() {
                            u = e, Jr.dispatchEvent.call(t, t.media, "ratechange")
                        }).catch(function(e) {
                            "Error" === e.name && is.setSpeedMenu.call(t, [])
                        })
                    }
                });
                var d = t.config.volume;
                Object.defineProperty(t.media, "volume", {
                    get: function() {
                        return d
                    },
                    set: function(e) {
                        t.embed.setVolume(e).then(function() {
                            d = e, Jr.dispatchEvent.call(t, t.media, "volumechange")
                        })
                    }
                });
                var f = t.config.muted;
                Object.defineProperty(t.media, "muted", {
                    get: function() {
                        return f
                    },
                    set: function(e) {
                        var n = !!Jr.is.boolean(e) && e;
                        t.embed.setVolume(n ? 0 : t.config.volume).then(function() {
                            f = n, Jr.dispatchEvent.call(t, t.media, "volumechange")
                        })
                    }
                });
                var h = t.config.loop;
                Object.defineProperty(t.media, "loop", {
                    get: function() {
                        return h
                    },
                    set: function(e) {
                        var n = Jr.is.boolean(e) ? e : t.config.loop.active;
                        t.embed.setLoop(n).then(function() {
                            h = n
                        })
                    }
                });
                var p = void 0;
                t.embed.getVideoUrl().then(function(e) {
                    p = e
                }).catch(function(t) {
                    e.debug.warn(t)
                }), Object.defineProperty(t.media, "currentSrc", {
                    get: function() {
                        return p
                    }
                }), Object.defineProperty(t.media, "ended", {
                    get: function() {
                        return t.currentTime === t.duration
                    }
                }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function(t) {
                    var n = Jr.getAspectRatio(t[0], t[1]);
                    ps.setAspectRatio.call(e, n)
                }), t.embed.setAutopause(t.config.autopause).then(function(e) {
                    t.config.autopause = e
                }), t.embed.getVideoTitle().then(function(n) {
                    t.config.title = n, ts.setTitle.call(e)
                }), t.embed.getCurrentTime().then(function(e) {
                    c = e, Jr.dispatchEvent.call(t, t.media, "timeupdate")
                }), t.embed.getDuration().then(function(e) {
                    t.media.duration = e, Jr.dispatchEvent.call(t, t.media, "durationchange")
                }), t.embed.getTextTracks().then(function(e) {
                    t.media.textTracks = e, rs.setup.call(t)
                }), t.embed.on("cuechange", function(e) {
                    var n = null;
                    e.cues.length && (n = Jr.stripHTML(e.cues[0].text)), rs.setText.call(t, n)
                }), t.embed.on("loaded", function() {
                    Jr.is.element(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                }), t.embed.on("play", function() {
                    t.media.paused && Jr.dispatchEvent.call(t, t.media, "play"), t.media.paused = !1, Jr.dispatchEvent.call(t, t.media, "playing")
                }), t.embed.on("pause", function() {
                    t.media.paused = !0, Jr.dispatchEvent.call(t, t.media, "pause")
                }), t.embed.on("timeupdate", function(e) {
                    t.media.seeking = !1, c = e.seconds, Jr.dispatchEvent.call(t, t.media, "timeupdate")
                }), t.embed.on("progress", function(e) {
                    t.media.buffered = e.percent, Jr.dispatchEvent.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Jr.dispatchEvent.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function(e) {
                        e !== t.media.duration && (t.media.duration = e, Jr.dispatchEvent.call(t, t.media, "durationchange"))
                    })
                }), t.embed.on("seeked", function() {
                    t.media.seeking = !1, Jr.dispatchEvent.call(t, t.media, "seeked"), Jr.dispatchEvent.call(t, t.media, "play")
                }), t.embed.on("ended", function() {
                    t.media.paused = !0, Jr.dispatchEvent.call(t, t.media, "ended")
                }), t.embed.on("error", function(e) {
                    t.media.error = e, Jr.dispatchEvent.call(t, t.media, "error")
                }), setTimeout(function() {
                    return ts.build.call(t)
                }, 0)
            }
        };

    function gs(e) {
        switch (e) {
            case "hd2160":
                return 2160;
            case 2160:
                return "hd2160";
            case "hd1440":
                return 1440;
            case 1440:
                return "hd1440";
            case "hd1080":
                return 1080;
            case 1080:
                return "hd1080";
            case "hd720":
                return 720;
            case 720:
                return "hd720";
            case "large":
                return 480;
            case 480:
                return "large";
            case "medium":
                return 360;
            case 360:
                return "medium";
            case "small":
                return 240;
            case 240:
                return "small";
            default:
                return "default"
        }
    }
    var ms = {
            setup: function() {
                var e = this;
                Jr.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), ms.setAspectRatio.call(this), Jr.is.object(window.YT) && Jr.is.function(window.YT.Player) ? ms.ready.call(this) : (Jr.loadScript(this.config.urls.youtube.sdk).catch(function(t) {
                    e.debug.warn("YouTube API failed to load", t)
                }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function() {
                    ms.ready.call(e)
                }), window.onYouTubeIframeAPIReady = function() {
                    window.onYouTubeReadyCallbacks.forEach(function(e) {
                        e()
                    })
                })
            },
            getTitle: function(e) {
                var t = this;
                if (Jr.is.function(this.embed.getVideoData)) {
                    var n = this.embed.getVideoData().title;
                    if (Jr.is.empty(n)) return this.config.title = n, void ts.setTitle.call(this)
                }
                var i = this.config.keys.google;
                if (Jr.is.string(i) && !Jr.is.empty(i)) {
                    var r = Jr.format(this.config.urls.youtube.api, e, i);
                    Jr.fetch(r).then(function(e) {
                        Jr.is.object(e) && (t.config.title = e.items[0].snippet.title, ts.setTitle.call(t))
                    }).catch(function() {})
                }
            },
            setAspectRatio: function() {
                var e = this.config.ratio.split(":");
                this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%"
            },
            ready: function() {
                var e = this,
                    t = e.media.getAttribute("id");
                if (Jr.is.empty(t) || !t.startsWith("youtube-")) {
                    var n = e.media.getAttribute("src");
                    Jr.is.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                    var i = Jr.parseYouTubeId(n),
                        r = Jr.generateId(e.provider),
                        s = Jr.createElement("div", {
                            id: r
                        });
                    e.media = Jr.replaceElement(s, e.media), e.media.setAttribute("poster", Jr.format(e.config.urls.youtube.poster, i)), e.embed = new window.YT.Player(r, {
                        videoId: i,
                        playerVars: {
                            autoplay: e.config.autoplay ? 1 : 0,
                            controls: e.supported.ui ? 0 : 1,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                            modestbranding: 1,
                            disablekb: 1,
                            playsinline: 1,
                            widget_referrer: window ? window.location.href : null,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language
                        },
                        events: {
                            onError: function(t) {
                                if (!Jr.is.object(e.media.error)) {
                                    var n = {
                                        code: t.data
                                    };
                                    switch (t.data) {
                                        case 2:
                                            n.message = "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.";
                                            break;
                                        case 5:
                                            n.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
                                            break;
                                        case 100:
                                            n.message = "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";
                                            break;
                                        case 101:
                                        case 150:
                                            n.message = "The owner of the requested video does not allow it to be played in embedded players.";
                                            break;
                                        default:
                                            n.message = "An unknown error occured"
                                    }
                                    e.media.error = n, Jr.dispatchEvent.call(e, e.media, "error")
                                }
                            },
                            onPlaybackQualityChange: function() {
                                Jr.dispatchEvent.call(e, e.media, "qualitychange", !1, {
                                    quality: e.media.quality
                                })
                            },
                            onPlaybackRateChange: function(t) {
                                var n = t.target;
                                e.media.playbackRate = n.getPlaybackRate(), Jr.dispatchEvent.call(e, e.media, "ratechange")
                            },
                            onReady: function(t) {
                                var n = t.target;
                                ms.getTitle.call(e, i), e.media.play = function() {
                                    n.playVideo()
                                }, e.media.pause = function() {
                                    n.pauseVideo()
                                }, e.media.stop = function() {
                                    n.stopVideo()
                                }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                    get: function() {
                                        return Number(n.getCurrentTime())
                                    },
                                    set: function(t) {
                                        var i = e.media.paused;
                                        e.media.seeking = !0, Jr.dispatchEvent.call(e, e.media, "seeking"), n.seekTo(t), i && e.pause()
                                    }
                                }), Object.defineProperty(e.media, "playbackRate", {
                                    get: function() {
                                        return n.getPlaybackRate()
                                    },
                                    set: function(e) {
                                        n.setPlaybackRate(e)
                                    }
                                }), Object.defineProperty(e.media, "quality", {
                                    get: function() {
                                        return gs(n.getPlaybackQuality())
                                    },
                                    set: function(t) {
                                        var i = t;
                                        n.setPlaybackQuality(gs(i)), Jr.dispatchEvent.call(e, e.media, "qualityrequested", !1, {
                                            quality: i
                                        })
                                    }
                                });
                                var r = e.config.volume;
                                Object.defineProperty(e.media, "volume", {
                                    get: function() {
                                        return r
                                    },
                                    set: function(t) {
                                        r = t, n.setVolume(100 * r), Jr.dispatchEvent.call(e, e.media, "volumechange")
                                    }
                                });
                                var s = e.config.muted;
                                Object.defineProperty(e.media, "muted", {
                                    get: function() {
                                        return s
                                    },
                                    set: function(t) {
                                        var i = Jr.is.boolean(t) ? t : s;
                                        s = i, n[i ? "mute" : "unMute"](), Jr.dispatchEvent.call(e, e.media, "volumechange")
                                    }
                                }), Object.defineProperty(e.media, "currentSrc", {
                                    get: function() {
                                        return n.getVideoUrl()
                                    }
                                }), Object.defineProperty(e.media, "ended", {
                                    get: function() {
                                        return e.currentTime === e.duration
                                    }
                                }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), Jr.dispatchEvent.call(e, e.media, "timeupdate"), Jr.dispatchEvent.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function() {
                                    e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Jr.dispatchEvent.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Jr.dispatchEvent.call(e, e.media, "canplaythrough"))
                                }, 200), setTimeout(function() {
                                    return ts.build.call(e)
                                }, 50)
                            },
                            onStateChange: function(t) {
                                var n, i = t.target;
                                switch (clearInterval(e.timers.playing), t.data) {
                                    case -1:
                                        Jr.dispatchEvent.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Jr.dispatchEvent.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        e.media.paused = !0, e.media.loop ? (i.stopVideo(), i.playVideo()) : Jr.dispatchEvent.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        e.media.seeking && Jr.dispatchEvent.call(e, e.media, "seeked"), e.media.seeking = !1, e.media.paused && Jr.dispatchEvent.call(e, e.media, "play"), e.media.paused = !1, Jr.dispatchEvent.call(e, e.media, "playing"), e.timers.playing = setInterval(function() {
                                            Jr.dispatchEvent.call(e, e.media, "timeupdate")
                                        }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Jr.dispatchEvent.call(e, e.media, "durationchange")), is.setQualityMenu.call(e, (n = i.getAvailableQualityLevels(), Jr.is.empty(n) ? n : Jr.dedupe(n.map(function(e) {
                                            return gs(e)
                                        }))));
                                        break;
                                    case 2:
                                        e.media.paused = !0, Jr.dispatchEvent.call(e, e.media, "pause")
                                }
                                Jr.dispatchEvent.call(e, e.elements.container, "statechange", !1, {
                                    code: t.data
                                })
                            }
                        }
                    })
                }
            }
        },
        ys = {
            setup: function() {
                if (this.media)
                    if (Jr.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), Jr.toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && Jr.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = Jr.createElement("div", {
                            class: this.config.classNames.video
                        }), Jr.wrap(this.media, this.elements.wrapper), this.elements.poster = Jr.createElement("div", {
                            class: this.config.classNames.poster
                        }), this.elements.wrapper.appendChild(this.elements.poster)), this.isEmbed) switch (this.provider) {
                        case "youtube":
                            ms.setup.call(this);
                            break;
                        case "vimeo":
                            ps.setup.call(this)
                    } else this.isHTML5 && Xr.extend.call(this);
                    else this.debug.warn("No media element found!")
            }
        },
        vs = function() {
            function e(t) {
                var n = this;
                Gr(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
                    container: null,
                    displayContainer: null
                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function(e, t) {
                    n.on("loaded", e), n.on("error", t)
                }), this.load()
            }
            return Yr(e, [{
                key: "load",
                value: function() {
                    var e = this;
                    this.enabled && (Jr.is.object(window.google) && Jr.is.object(window.google.ima) ? this.ready() : Jr.loadScript(this.player.config.urls.googleIMA.sdk).then(function() {
                        e.ready()
                    }).catch(function() {
                        e.trigger("error", new Error("Google IMA SDK failed to load"))
                    }))
                }
            }, {
                key: "ready",
                value: function() {
                    var e = this;
                    this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function() {
                        e.clearSafetyTimer("onAdsManagerLoaded()")
                    }), this.listeners(), this.setupIMA()
                }
            }, {
                key: "setupIMA",
                value: function() {
                    this.elements.container = Jr.createElement("div", {
                        class: this.player.config.classNames.ads
                    }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
                }
            }, {
                key: "requestAds",
                value: function() {
                    var e = this,
                        t = this.player.elements.container;
                    try {
                        this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t) {
                            return e.onAdsManagerLoaded(t)
                        }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t) {
                            return e.onAdError(t)
                        }, !1);
                        var n = new google.ima.AdsRequest;
                        n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
                    } catch (e) {
                        this.onAdError(e)
                    }
                }
            }, {
                key: "pollCountdown",
                value: function() {
                    var e = this;
                    if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                    this.countdownTimer = setInterval(function() {
                        var t = Jr.formatTime(Math.max(e.manager.getRemainingTime(), 0)),
                            n = Zr("advertisement", e.player.config) + " - " + t;
                        e.elements.container.setAttribute("data-badge-text", n)
                    }, 100)
                }
            }, {
                key: "onAdsManagerLoaded",
                value: function(e) {
                    var t = this,
                        n = new google.ima.AdsRenderingSettings;
                    n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), Jr.is.empty(this.cuePoints) || this.cuePoints.forEach(function(e) {
                        if (0 !== e && -1 !== e && e < t.player.duration) {
                            var n = t.player.elements.progress;
                            if (Jr.is.element(n)) {
                                var i = 100 / t.player.duration * e,
                                    r = Jr.createElement("span", {
                                        class: t.player.config.classNames.cues
                                    });
                                r.style.left = i.toString() + "%", n.appendChild(r)
                            }
                        }
                    }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                        return t.onAdError(e)
                    }), Object.keys(google.ima.AdEvent.Type).forEach(function(e) {
                        t.manager.addEventListener(google.ima.AdEvent.Type[e], function(e) {
                            return t.onAdEvent(e)
                        })
                    }), this.trigger("loaded")
                }
            }, {
                key: "onAdEvent",
                value: function(e) {
                    var t = this,
                        n = this.player.elements.container,
                        i = e.getAd(),
                        r = function(e) {
                            var n = "ads" + e.replace(/_/g, "").toLowerCase();
                            Jr.dispatchEvent.call(t.player, t.player.media, n)
                        };
                    switch (e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            this.trigger("loaded"), r(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            r(e.type), this.loadAds();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            r(e.type), this.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            r(e.type), this.pollCountdown(), this.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                        case google.ima.AdEvent.Type.MIDPOINT:
                        case google.ima.AdEvent.Type.COMPLETE:
                        case google.ima.AdEvent.Type.IMPRESSION:
                        case google.ima.AdEvent.Type.CLICK:
                            r(e.type)
                    }
                }
            }, {
                key: "onAdError",
                value: function(e) {
                    this.cancel(), this.player.debug.warn("Ads error", e)
                }
            }, {
                key: "listeners",
                value: function() {
                    var e = this,
                        t = this.player.elements.container,
                        n = void 0;
                    this.player.on("ended", function() {
                        e.loader.contentComplete()
                    }), this.player.on("seeking", function() {
                        return n = e.player.currentTime
                    }), this.player.on("seeked", function() {
                        var t = e.player.currentTime;
                        Jr.is.empty(e.cuePoints) || e.cuePoints.forEach(function(i, r) {
                            n < i && i < t && (e.manager.discardAdBreak(), e.cuePoints.splice(r, 1))
                        })
                    }), window.addEventListener("resize", function() {
                        e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                    })
                }
            }, {
                key: "play",
                value: function() {
                    var e = this,
                        t = this.player.elements.container;
                    this.managerPromise || this.resumeContent(), this.managerPromise.then(function() {
                        e.elements.displayContainer.initialize();
                        try {
                            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                        } catch (t) {
                            e.onAdError(t)
                        }
                    }).catch(function() {})
                }
            }, {
                key: "resumeContent",
                value: function() {
                    this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
                }
            }, {
                key: "pauseContent",
                value: function() {
                    this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
                }
            }, {
                key: "cancel",
                value: function() {
                    this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                }
            }, {
                key: "loadAds",
                value: function() {
                    var e = this;
                    this.managerPromise.then(function() {
                        e.manager && e.manager.destroy(), e.managerPromise = new Promise(function(t) {
                            e.on("loaded", t), e.player.debug.log(e.manager)
                        }), e.requestAds()
                    }).catch(function() {})
                }
            }, {
                key: "trigger",
                value: function(e) {
                    for (var t = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    var s = this.events[e];
                    Jr.is.array(s) && s.forEach(function(e) {
                        Jr.is.function(e) && e.apply(t, i)
                    })
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return Jr.is.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                }
            }, {
                key: "startSafetyTimer",
                value: function(e, t) {
                    var n = this;
                    this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function() {
                        n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                    }, e)
                }
            }, {
                key: "clearSafetyTimer",
                value: function(e) {
                    Jr.is.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                }
            }, {
                key: "enabled",
                get: function() {
                    return this.player.isVideo && this.player.config.ads.enabled && !Jr.is.empty(this.publisherId)
                }
            }, {
                key: "tagUrl",
                get: function() {
                    var e = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: this.publisherId
                    };
                    return "https://go.aniview.com/api/adserver6/vast/?" + Jr.buildUrlParams(e)
                }
            }]), e
        }(),
        bs = {
            insertElements: function(e, t) {
                var n = this;
                Jr.is.string(t) ? Jr.insertElement(e, this.media, {
                    src: t
                }) : Jr.is.array(t) && t.forEach(function(t) {
                    Jr.insertElement(e, n.media, t)
                })
            },
            change: function(e) {
                var t = this;
                Jr.is.object(e) && "sources" in e && e.sources.length ? (Xr.cancelRequests.call(this), this.destroy.call(this, function() {
                    switch (t.options.quality = [], Jr.removeElement(t.media), t.media = null, Jr.is.element(t.elements.container) && t.elements.container.removeAttribute("class"), t.type = e.type, t.provider = Jr.is.empty(e.sources[0].provider) ? Wr.html5 : e.sources[0].provider, t.supported = $r.check(t.type, t.provider, t.config.playsinline), t.provider + ":" + t.type) {
                        case "html5:video":
                            t.media = Jr.createElement("video");
                            break;
                        case "html5:audio":
                            t.media = Jr.createElement("audio");
                            break;
                        case "youtube:video":
                        case "vimeo:video":
                            t.media = Jr.createElement("div", {
                                src: e.sources[0].src
                            })
                    }
                    t.elements.container.appendChild(t.media), Jr.is.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), Jr.is.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), ts.addStyleHook.call(t), t.isHTML5 && bs.insertElements.call(t, "source", e.sources), t.config.title = e.title, ys.setup.call(t), t.isHTML5 && ("tracks" in e && bs.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && ts.build.call(t), t.fullscreen.update()
                }, !0)) : this.debug.warn("Invalid source format")
            }
        },
        ws = function() {
            function e(t) {
                Gr(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
            }
            return Yr(e, [{
                key: "get",
                value: function(t) {
                    if (!e.supported) return null;
                    var n = window.localStorage.getItem(this.key);
                    if (Jr.is.empty(n)) return null;
                    var i = JSON.parse(n);
                    return Jr.is.string(t) && t.length ? i[t] : i
                }
            }, {
                key: "set",
                value: function(t) {
                    if (e.supported && this.enabled && Jr.is.object(t)) {
                        var n = this.get();
                        Jr.is.empty(n) && (n = {}), Jr.extend(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
                    }
                }
            }], [{
                key: "supported",
                get: function() {
                    try {
                        if (!("localStorage" in window)) return !1;
                        return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }();
    return function() {
        function e(t, n) {
            var i = this;
            if (Gr(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = $r.touch, this.media = t, Jr.is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Jr.is.nodeList(this.media) || Jr.is.array(this.media)) && (this.media = this.media[0]), this.config = Jr.extend({}, as, n || {}, function() {
                    try {
                        return JSON.parse(i.media.getAttribute("data-plyr-config"))
                    } catch (e) {
                        return {}
                    }
                }()), this.elements = {
                    container: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                        menu: null,
                        panes: {},
                        tabs: {}
                    },
                    captions: null
                }, this.captions = {
                    active: null,
                    currentTrack: null
                }, this.fullscreen = {
                    active: !1
                }, this.options = {
                    speed: [],
                    quality: [],
                    captions: []
                }, this.debug = new os(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", $r), !Jr.is.nullOrUndefined(this.media) && Jr.is.element(this.media))
                if (this.media.plyr) this.debug.warn("Target already setup");
                else if (this.config.enabled)
                if ($r.check().api) {
                    var r = this.media.cloneNode(!0);
                    r.autoplay = !1, this.elements.original = r;
                    var s = this.media.tagName.toLowerCase(),
                        o = null,
                        a = null,
                        l = null;
                    switch (s) {
                        case "div":
                            if (o = this.media.querySelector("iframe"), Jr.is.element(o)) {
                                if (a = o.getAttribute("src"), this.provider = Jr.getProviderByUrl(a), this.elements.container = this.media, this.media = o, this.elements.container.className = "", l = Jr.getUrlParams(a), !Jr.is.empty(l)) {
                                    var c = ["1", "true"];
                                    c.includes(l.autoplay) && (this.config.autoplay = !0), c.includes(l.loop) && (this.config.loop.active = !0), this.isYouTube ? this.config.playsinline = c.includes(l.playsinline) : this.config.playsinline = !0
                                }
                            } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (Jr.is.empty(this.provider) || !Object.keys(Wr).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                            this.type = zr.video;
                            break;
                        case "video":
                        case "audio":
                            this.type = s, this.provider = Wr.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), this.media.hasAttribute("playsinline") && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                    }
                    this.supported = $r.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.listeners = new hs(this), this.storage = new ws(this), this.media.plyr = this, Jr.is.element(this.elements.container) || (this.elements.container = Jr.createElement("div"), Jr.wrap(this.media, this.elements.container)), this.elements.container.setAttribute("tabindex", 0), ts.addStyleHook.call(this), ys.setup.call(this), this.config.debug && Jr.on(this.elements.container, this.config.events.join(" "), function(e) {
                        i.debug.log("event: " + e.type)
                    }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ts.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new ds(this), this.ads = new vs(this), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support")
                } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
            else this.debug.error("Setup failed: no suitable element passed")
        }
        return Yr(e, [{
            key: "play",
            value: function() {
                return Jr.is.function(this.media.play) ? this.media.play() : null
            }
        }, {
            key: "pause",
            value: function() {
                this.playing && Jr.is.function(this.media.pause) && this.media.pause()
            }
        }, {
            key: "togglePlay",
            value: function(e) {
                (Jr.is.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
            }
        }, {
            key: "stop",
            value: function() {
                this.isHTML5 ? (this.pause(), this.restart()) : Jr.is.function(this.media.stop) && this.media.stop()
            }
        }, {
            key: "restart",
            value: function() {
                this.currentTime = 0
            }
        }, {
            key: "rewind",
            value: function(e) {
                this.currentTime = this.currentTime - (Jr.is.number(e) ? e : this.config.seekTime)
            }
        }, {
            key: "forward",
            value: function(e) {
                this.currentTime = this.currentTime + (Jr.is.number(e) ? e : this.config.seekTime)
            }
        }, {
            key: "increaseVolume",
            value: function(e) {
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t + (Jr.is.number(e) ? e : 1)
            }
        }, {
            key: "decreaseVolume",
            value: function(e) {
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t - (Jr.is.number(e) ? e : 1)
            }
        }, {
            key: "toggleCaptions",
            value: function(e) {
                if (this.supported.ui) {
                    var t = Jr.is.boolean(e) ? e : !this.elements.container.classList.contains(this.config.classNames.captions.active);
                    this.captions.active !== t && (this.captions.active = t, Jr.toggleState(this.elements.buttons.captions, this.captions.active), Jr.toggleClass(this.elements.container, this.config.classNames.captions.active, this.captions.active), Jr.dispatchEvent.call(this, this.media, this.captions.active ? "captionsenabled" : "captionsdisabled"))
                }
            }
        }, {
            key: "airplay",
            value: function() {
                $r.airplay && this.media.webkitShowPlaybackTargetPicker()
            }
        }, {
            key: "toggleControls",
            value: function(e) {
                var t = this;
                if (Jr.is.element(this.elements.controls) && this.supported.ui && !this.isAudio) {
                    var n = 0,
                        i = e,
                        r = !1;
                    if (!Jr.is.boolean(e))
                        if (Jr.is.event(e)) {
                            r = "enterfullscreen" === e.type;
                            i = ["touchstart", "touchmove", "mouseenter", "mousemove", "focusin"].includes(e.type), ["touchmove", "touchend", "mousemove"].includes(e.type) && (n = 2e3), this.touch || "focusin" !== e.type || (n = 3e3, Jr.toggleClass(this.elements.controls, this.config.classNames.noTransition, !0))
                        } else i = Jr.hasClass(this.elements.container, this.config.classNames.hideControls);
                    if (clearTimeout(this.timers.controls), i || this.paused || this.loading) {
                        if (Jr.toggleClass(this.elements.container, this.config.classNames.hideControls, !1) && Jr.dispatchEvent.call(this, this.media, "controlsshown"), this.paused || this.loading) return;
                        this.touch && (n = 3e3)
                    }
                    i && !this.playing || (this.timers.controls = setTimeout(function() {
                        Jr.is.element(t.elements.controls) && ((!t.elements.controls.pressed && !t.elements.controls.hover || r) && (Jr.hasClass(t.elements.container, t.config.classNames.hideControls) || Jr.toggleClass(t.elements.controls, t.config.classNames.noTransition, !1), Jr.toggleClass(t.elements.container, t.config.classNames.hideControls, t.config.hideControls) && (Jr.dispatchEvent.call(t, t.media, "controlshidden"), t.config.controls.includes("settings") && !Jr.is.empty(t.config.settings) && is.toggleMenu.call(t, !1))))
                    }, n))
                }
            }
        }, {
            key: "on",
            value: function(e, t) {
                Jr.on(this.elements.container, e, t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                Jr.off(this.elements.container, e, t)
            }
        }, {
            key: "destroy",
            value: function(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.ready) {
                    var i = function() {
                        document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (Jr.removeElement(t.elements.buttons.play), Jr.removeElement(t.elements.captions), Jr.removeElement(t.elements.controls), Jr.removeElement(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), Jr.is.function(e) && e()) : (t.listeners.clear(), Jr.replaceElement(t.elements.original, t.elements.container), Jr.dispatchEvent.call(t, t.elements.original, "destroyed", !0), Jr.is.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function() {
                            t.elements = null, t.media = null
                        }, 200))
                    };
                    switch (this.stop(), this.provider + ":" + this.type) {
                        case "html5:video":
                        case "html5:audio":
                            clearTimeout(this.timers.loading), ts.toggleNativeControls.call(this, !0), i();
                            break;
                        case "youtube:video":
                            clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && Jr.is.function(this.embed.destroy) && this.embed.destroy(), i();
                            break;
                        case "vimeo:video":
                            null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200)
                    }
                }
            }
        }, {
            key: "supports",
            value: function(e) {
                return $r.mime.call(this, e)
            }
        }, {
            key: "isHTML5",
            get: function() {
                return Boolean(this.provider === Wr.html5)
            }
        }, {
            key: "isEmbed",
            get: function() {
                return Boolean(this.isYouTube || this.isVimeo)
            }
        }, {
            key: "isYouTube",
            get: function() {
                return Boolean(this.provider === Wr.youtube)
            }
        }, {
            key: "isVimeo",
            get: function() {
                return Boolean(this.provider === Wr.vimeo)
            }
        }, {
            key: "isVideo",
            get: function() {
                return Boolean(this.type === zr.video)
            }
        }, {
            key: "isAudio",
            get: function() {
                return Boolean(this.type === zr.audio)
            }
        }, {
            key: "playing",
            get: function() {
                return Boolean(this.ready && !this.paused && !this.ended)
            }
        }, {
            key: "paused",
            get: function() {
                return Boolean(this.media.paused)
            }
        }, {
            key: "stopped",
            get: function() {
                return Boolean(this.paused && 0 === this.currentTime)
            }
        }, {
            key: "ended",
            get: function() {
                return Boolean(this.media.ended)
            }
        }, {
            key: "currentTime",
            set: function(e) {
                var t = 0;
                Jr.is.number(e) && (t = e), t < 0 ? t = 0 : t > this.duration && (t = this.duration), this.media.currentTime = t, this.debug.log("Seeking to " + this.currentTime + " seconds")
            },
            get: function() {
                return Number(this.media.currentTime)
            }
        }, {
            key: "buffered",
            get: function() {
                var e = this.media.buffered;
                return Jr.is.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
            }
        }, {
            key: "seeking",
            get: function() {
                return Boolean(this.media.seeking)
            }
        }, {
            key: "duration",
            get: function() {
                var e = parseFloat(this.config.duration),
                    t = this.media ? Number(this.media.duration) : 0;
                return Number.isNaN(e) ? t : e
            }
        }, {
            key: "volume",
            set: function(e) {
                var t = e;
                Jr.is.string(t) && (t = Number(t)), Jr.is.number(t) || (t = this.storage.get("volume")), Jr.is.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !Jr.is.empty(e) && this.muted && t > 0 && (this.muted = !1)
            },
            get: function() {
                return Number(this.media.volume)
            }
        }, {
            key: "muted",
            set: function(e) {
                var t = e;
                Jr.is.boolean(t) || (t = this.storage.get("muted")), Jr.is.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            },
            get: function() {
                return Boolean(this.media.muted)
            }
        }, {
            key: "hasAudio",
            get: function() {
                return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
            }
        }, {
            key: "speed",
            set: function(e) {
                var t = null;
                Jr.is.number(e) && (t = e), Jr.is.number(t) || (t = this.storage.get("speed")), Jr.is.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")")
            },
            get: function() {
                return Number(this.media.playbackRate)
            }
        }, {
            key: "quality",
            set: function(e) {
                var t = null;
                if (Jr.is.empty(e) || (t = Number(e)), Jr.is.number(t) && 0 !== t || (t = this.storage.get("quality")), Jr.is.number(t) || (t = this.config.quality.selected), Jr.is.number(t) || (t = this.config.quality.default), this.options.quality.length) {
                    if (!this.options.quality.includes(t)) {
                        var n = Jr.closest(this.options.quality, t);
                        this.debug.warn("Unsupported quality option: " + t + ", using " + n + " instead"), t = n
                    }
                    this.config.quality.selected = t, this.media.quality = t
                }
            },
            get: function() {
                return this.media.quality
            }
        }, {
            key: "loop",
            set: function(e) {
                var t = Jr.is.boolean(e) ? e : this.config.loop.active;
                this.config.loop.active = t, this.media.loop = t
            },
            get: function() {
                return Boolean(this.media.loop)
            }
        }, {
            key: "source",
            set: function(e) {
                bs.change.call(this, e)
            },
            get: function() {
                return this.media.currentSrc
            }
        }, {
            key: "poster",
            set: function(e) {
                this.isVideo ? Jr.is.string(e) && (this.media.setAttribute("poster", e), ts.setPoster.call(this)) : this.debug.warn("Poster can only be set for video")
            },
            get: function() {
                return this.isVideo ? this.media.getAttribute("poster") : null
            }
        }, {
            key: "autoplay",
            set: function(e) {
                var t = Jr.is.boolean(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            },
            get: function() {
                return Boolean(this.config.autoplay)
            }
        }, {
            key: "language",
            set: function(e) {
                if (Jr.is.string(e))
                    if (Jr.is.empty(e)) this.toggleCaptions(!1);
                    else {
                        var t = e.toLowerCase();
                        this.options.captions.includes(t) ? (this.toggleCaptions(!0), "enabled" !== t && this.language !== t && (this.captions.language = t, rs.setText.call(this, null), rs.setLanguage.call(this), Jr.dispatchEvent.call(this, this.media, "languagechange"))) : this.debug.warn("Unsupported language option: " + t)
                    }
            },
            get: function() {
                return this.captions.language
            }
        }, {
            key: "pip",
            set: function(e) {
                var t = "picture-in-picture",
                    n = "inline";
                if ($r.pip) {
                    var i = Jr.is.boolean(e) ? e : this.pip === n;
                    this.media.webkitSetPresentationMode(i ? t : n)
                }
            },
            get: function() {
                return $r.pip ? this.media.webkitPresentationMode : null
            }
        }], [{
            key: "supported",
            value: function(e, t, n) {
                return $r.check(e, t, n)
            }
        }, {
            key: "loadSprite",
            value: function(e, t) {
                return Jr.loadSprite(e, t)
            }
        }, {
            key: "setup",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = null;
                return Jr.is.string(t) ? i = Array.from(document.querySelectorAll(t)) : Jr.is.nodeList(t) ? i = Array.from(t) : Jr.is.array(t) && (i = t.filter(function(e) {
                    return Jr.is.element(e)
                })), Jr.is.empty(i) ? null : i.map(function(t) {
                    return new e(t, n)
                })
            }
        }]), e
    }()
});
//# sourceMappingURL=plyr.polyfilled.js.map