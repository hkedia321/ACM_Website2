/*
 RequireJS 1.0.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs, require, define;
(function(s) {
    function H(b) {
        return "[object Function]" === P.call(b)
    }

    function $(b) {
        return "[object Array]" === P.call(b)
    }

    function ga(b, c, p) {
        for (var i in c)
            if (!(i in I) && (!(i in b) || p)) b[i] = c[i];
        return e
    }

    function Q(b, c, e) {
        b = Error(c + "\nhttp://requirejs.org/docs/errors.html#" + b);
        e && (b.originalError = e);
        return b
    }

    function ha(b, c, e) {
        var i, u, r;
        for (i = 0; r = c[i]; i++) {
            r = "string" === typeof r ? {
                name: r
            } : r;
            u = r.location;
            if (e && (!u || 0 !== u.indexOf("/") && -1 === u.indexOf(":"))) u = e + "/" + (u || r.name);
            b[r.name] = {
                name: r.name,
                location: u ||
                    r.name,
                main: (r.main || "main").replace(ma, "").replace(ia, "")
            }
        }
    }

    function aa(b, c) {
        b.holdReady ? b.holdReady(c) : c ? b.readyWait += 1 : b.ready(!0)
    }

    function na() {
        var b, c, e;
        if (x && "interactive" === x.readyState) return x;
        b = document.getElementsByTagName("script");
        for (c = b.length - 1; - 1 < c && (e = b[c]); c--)
            if ("interactive" === e.readyState) return x = e;
        return null
    }
    var oa = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        pa = /require\(\s*["']([^'"\s]+)["']\s*\)/g,
        ma = /^\.\//,
        ia = /\.js$/,
        P = Object.prototype.toString,
        l = Array.prototype,
        qa = l.slice,
        ra = l.splice,
        D = !!("undefined" !== typeof window && navigator && document),
        ja = !D && "undefined" !== typeof importScripts,
        sa = D && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        ka = "undefined" !== typeof opera && "[object Opera]" === opera.toString(),
        I = {},
        J = {},
        V = [],
        x = null,
        W = 0,
        R = !1,
        ta = {
            require: !0,
            module: !0,
            exports: !0
        },
        e, l = {},
        K, v, z, L, w, E, F, A, C, ba, ca;
    if ("undefined" === typeof define) {
        if ("undefined" !== typeof requirejs) {
            if (H(requirejs)) return;
            l = requirejs;
            requirejs = s
        }
        "undefined" !== typeof require && !H(require) &&
            (l = require, require = s);
        e = requirejs = function(b, c, p) {
            var i = "_",
                u;
            !$(b) && "string" !== typeof b && (u = b, $(c) ? (b = c, c = p) : b = []);
            u && u.context && (i = u.context);
            if (!(p = J[i])) {
                var r = i,
                    n = function(a, d) {
                        var g, k;
                        if (a && "." === a.charAt(0))
                            if (d) {
                                q.pkgs[d] ? d = [d] : (d = d.split("/"), d = d.slice(0, d.length - 1));
                                g = a = d.concat(a.split("/"));
                                var b;
                                for (k = 0; b = g[k]; k++)
                                    if ("." === b) g.splice(k, 1), k -= 1;
                                    else if (".." === b)
                                    if (1 === k && (".." === g[2] || ".." === g[0])) break;
                                    else 0 < k && (g.splice(k - 1, 2), k -= 2);
                                k = q.pkgs[g = a[0]];
                                a = a.join("/");
                                k && a === g + "/" + k.main &&
                                    (a = g)
                            } else 0 === a.indexOf("./") && (a = a.substring(2));
                        return a
                    },
                    l = function(a, d) {
                        var g = a ? a.indexOf("!") : -1,
                            k = null,
                            b = d ? d.name : null,
                            j = a,
                            f, e; - 1 !== g && (k = a.substring(0, g), a = a.substring(g + 1, a.length));
                        k && (k = n(k, b));
                        a && (k ? f = (g = m[k]) && g.normalize ? g.normalize(a, function(a) {
                            return n(a, b)
                        }) : n(a, b) : (f = n(a, b), e = da[f], e || (e = h.nameToUrl(a, null, d), da[f] = e)));
                        return {
                            prefix: k,
                            name: f,
                            parentMap: d,
                            url: e,
                            originalName: j,
                            fullName: k ? k + "!" + (f || "") : f
                        }
                    },
                    w = function() {
                        var a = !0,
                            d = q.priorityWait,
                            g, k;
                        if (d) {
                            for (k = 0; g = d[k]; k++)
                                if (!t[g]) {
                                    a = !1;
                                    break
                                }
                            a && delete q.priorityWait
                        }
                        return a
                    },
                    v = function(a, d, g) {
                        return function() {
                            var k = qa.call(arguments, 0),
                                b;
                            if (g && H(b = k[k.length - 1])) b.__requireJsBuild = !0;
                            k.push(d);
                            return a.apply(null, k)
                        }
                    },
                    z = function(a, d, g) {
                        d = v(g || h.require, a, d);
                        ga(d, {
                            nameToUrl: v(h.nameToUrl, a),
                            toUrl: v(h.toUrl, a),
                            defined: v(h.requireDefined, a),
                            specified: v(h.requireSpecified, a),
                            isBrowser: e.isBrowser
                        });
                        return d
                    },
                    x = function(a) {
                        var d, g, b, c = a.callback,
                            j = a.map,
                            f = j.fullName,
                            la = a.deps;
                        b = a.listeners;
                        var p = q.requireExecCb || e.execCb;
                        if (c &&
                            H(c)) {
                            if (q.catchError.define) try {
                                g = p(f, a.callback, la, m[f])
                            } catch (i) {
                                d = i
                            } else g = p(f, a.callback, la, m[f]);
                            f && ((c = a.cjsModule) && c.exports !== s && c.exports !== m[f] ? g = m[f] = a.cjsModule.exports : g === s && a.usingExports ? g = m[f] : (m[f] = g, G[f] && (X[f] = !0)))
                        } else f && (g = m[f] = c, G[f] && (X[f] = !0));
                        y[a.id] && (delete y[a.id], a.isDone = !0, h.waitCount -= 1, 0 === h.waitCount && (ea = []));
                        delete M[f];
                        if (e.onResourceLoad && !a.placeholder) e.onResourceLoad(h, j, a.depArray);
                        if (d) return g = (f ? l(f).url : "") || d.fileName || d.sourceURL, b = d.moduleTree,
                            d = Q("defineerror", 'Error evaluating module "' + f + '" at location "' + g + '":\n' + d + "\nfileName:" + g + "\nlineNumber: " + (d.lineNumber || d.line), d), d.moduleName = f, d.moduleTree = b, e.onError(d);
                        for (d = 0; c = b[d]; d++) c(g);
                        return s
                    },
                    E = function(a, d) {
                        return function(g) {
                            a.depDone[d] || (a.depDone[d] = !0, a.deps[d] = g, a.depCount -= 1, a.depCount || x(a))
                        }
                    },
                    F = function(a, d) {
                        var g = d.map,
                            b = g.fullName,
                            c = g.name,
                            j = N[a] || (N[a] = m[a]),
                            f;
                        d.loading || (d.loading = !0, f = function(a) {
                            d.callback = function() {
                                return a
                            };
                            x(d);
                            t[d.id] = !0;
                            B()
                        }, f.fromText = function(a,
                            d) {
                            var g = R;
                            t[a] = !1;
                            h.scriptCount += 1;
                            h.fake[a] = !0;
                            g && (R = !1);
                            e.exec(d);
                            g && (R = !0);
                            h.completeLoad(a)
                        }, b in m ? f(m[b]) : j.load(c, z(g.parentMap, !0, function(a, b) {
                            var k = [],
                                f, c;
                            for (f = 0; c = a[f]; f++) c = l(c, g.parentMap), a[f] = c.fullName, c.prefix || k.push(a[f]);
                            d.moduleDeps = (d.moduleDeps || []).concat(k);
                            return h.require(a, b)
                        }), f, q))
                    },
                    C = function(a) {
                        y[a.id] || (y[a.id] = a, ea.push(a), h.waitCount += 1)
                    },
                    L = function(a) {
                        this.listeners.push(a)
                    },
                    A = function(a, d) {
                        var g = a.fullName,
                            b = a.prefix,
                            c = b ? N[b] || (N[b] = m[b]) : null,
                            j, f;
                        g && (j = M[g]);
                        if (!j && (f = !0, j = {
                                id: (b && !c ? P++ + "__p@:" : "") + (g || "__r@" + P++),
                                map: a,
                                depCount: 0,
                                depDone: [],
                                depCallbacks: [],
                                deps: [],
                                listeners: [],
                                add: L
                            }, Y[j.id] = !0, g && (!b || N[b]))) M[g] = j;
                        b && !c ? (g = l(b), b in m && !m[b] && (delete m[b], delete S[g.url]), b = A(g, !0), b.add(function() {
                            var d = l(a.originalName, a.parentMap),
                                d = A(d, !0);
                            j.placeholder = !0;
                            d.add(function(a) {
                                j.callback = function() {
                                    return a
                                };
                                x(j)
                            })
                        })) : f && d && (t[j.id] = !1, h.paused.push(j), C(j));
                        return j
                    },
                    O = function(a, d, g, b) {
                        var a = l(a, b),
                            c = a.name,
                            j = a.fullName,
                            f = A(a),
                            e = f.id,
                            p = f.deps,
                            i;
                        if (j) {
                            if (j in m || !0 === t[e] || "jquery" === j && q.jQuery && q.jQuery !== g().fn.jquery) return;
                            Y[e] = !0;
                            t[e] = !0;
                            "jquery" === j && g && ba(g())
                        }
                        f.depArray = d;
                        f.callback = g;
                        for (g = 0; g < d.length; g++)
                            if (e = d[g]) e = l(e, c ? a : b), i = e.fullName, d[g] = i, "require" === i ? p[g] = z(a) : "exports" === i ? (p[g] = m[j] = {}, f.usingExports = !0) : "module" === i ? f.cjsModule = p[g] = {
                                id: c,
                                uri: c ? h.nameToUrl(c, null, b) : s,
                                exports: m[j]
                            } : i in m && !(i in y) && (!(j in G) || j in G && X[i]) ? p[g] = m[i] : (j in G && (G[i] = !0, delete m[i], S[e.url] = !1), f.depCount += 1, f.depCallbacks[g] = E(f,
                                g), A(e, !0).add(f.depCallbacks[g]));
                        f.depCount ? C(f) : x(f)
                    },
                    K = function(a, d) {
                        var g = a.map.fullName,
                            b = a.depArray,
                            c = !0,
                            e, f, h, i;
                        if (a.isDone || !g || !t[g]) return i;
                        if (d[g]) return a;
                        d[g] = !0;
                        if (b) {
                            for (e = 0; e < b.length; e++) {
                                f = b[e];
                                if (!t[f] && !ta[f]) {
                                    c = !1;
                                    break
                                }
                                if ((h = y[f]) && !h.isDone && t[f])
                                    if (i = K(h, d)) break
                            }
                            c || (i = s, delete d[g])
                        }
                        return i
                    },
                    Z = function(a, d) {
                        var b = a.map.fullName,
                            c = a.depArray,
                            e, h, f, i;
                        if (a.isDone || !b || !t[b]) return s;
                        if (b) {
                            if (d[b]) return m[b];
                            d[b] = !0
                        }
                        if (c)
                            for (e = 0; e < c.length; e++)
                                if (h = c[e])
                                    if ((f = l(h).prefix) &&
                                        (i = y[f]) && Z(i, d), (f = y[h]) && !f.isDone && t[h]) h = Z(f, d), a.depCallbacks[e](h);
                        return m[b]
                    },
                    fa = function() {
                        var a = 1E3 * q.waitSeconds,
                            a = a && h.startTime + a < (new Date).getTime(),
                            d = "",
                            b = !1,
                            c = !1,
                            i = [],
                            j, f;
                        if (0 < h.pausedCount) return s;
                        if (q.priorityWait)
                            if (w()) B();
                            else return s;
                        for (j in t)
                            if (!(j in I) && (b = !0, !t[j]))
                                if (a) d += j + " ";
                                else if (c = !0, -1 === j.indexOf("!")) {
                            i = [];
                            break
                        } else(f = M[j] && M[j].moduleDeps) && i.push.apply(i, f);
                        if (!b && !h.waitCount) return s;
                        if (a && d) return a = Q("timeout", "Load timeout for modules: " + d), a.requireType =
                            "timeout", a.requireModules = d, a.contextName = h.contextName, e.onError(a);
                        if (c && i.length)
                            for (d = 0; j = y[i[d]]; d++)
                                if (j = K(j, {})) {
                                    Z(j, {});
                                    break
                                }
                        if (!a && (c || h.scriptCount)) {
                            if ((D || ja) && !ca) ca = setTimeout(function() {
                                ca = 0;
                                fa()
                            }, 50);
                            return s
                        }
                        if (h.waitCount) {
                            for (d = 0; j = ea[d]; d++) Z(j, {});
                            h.paused.length && B();
                            5 > W && (W += 1, fa())
                        }
                        W = 0;
                        e.checkReadyState();
                        return s
                    },
                    h, B, q = {
                        waitSeconds: 7,
                        baseUrl: "./",
                        paths: {},
                        pkgs: {},
                        catchError: {}
                    },
                    T = [],
                    Y = {
                        require: !0,
                        exports: !0,
                        module: !0
                    },
                    da = {},
                    m = {},
                    t = {},
                    y = {},
                    ea = [],
                    S = {},
                    P = 0,
                    M = {},
                    N = {},
                    G = {},
                    X = {},
                    U = 0;
                ba = function(a) {
                    if (!h.jQuery && (a = a || ("undefined" !== typeof jQuery ? jQuery : null)) && !(q.jQuery && a.fn.jquery !== q.jQuery) && ("holdReady" in a || "readyWait" in a)) h.jQuery = a, O.apply(null, ["jquery", [], function() {
                        return jQuery
                    }]), h.scriptCount && (aa(a, !0), h.jQueryIncremented = !0)
                };
                B = function() {
                    var a, d, b, c, i, j;
                    h.takeGlobalQueue();
                    U += 1;
                    0 >= h.scriptCount && (h.scriptCount = 0);
                    for (; T.length;) {
                        a = T.shift();
                        if (null === a[0]) return e.onError(Q("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
                        O.apply(null,
                            a)
                    }
                    if (!q.priorityWait || w())
                        for (; h.paused.length;) {
                            i = h.paused;
                            h.pausedCount += i.length;
                            h.paused = [];
                            for (c = 0; a = i[c]; c++) d = a.map, b = d.url, j = d.fullName, d.prefix ? F(d.prefix, a) : !S[b] && !t[j] && ((q.requireLoad || e.load)(h, j, b), 0 !== b.indexOf("empty:") && (S[b] = !0));
                            h.startTime = (new Date).getTime();
                            h.pausedCount -= i.length
                        }
                    1 === U && fa();
                    U -= 1;
                    return s
                };
                h = {
                    contextName: r,
                    config: q,
                    defQueue: T,
                    waiting: y,
                    waitCount: 0,
                    specified: Y,
                    loaded: t,
                    urlMap: da,
                    urlFetched: S,
                    scriptCount: 0,
                    defined: m,
                    paused: [],
                    pausedCount: 0,
                    plugins: N,
                    needFullExec: G,
                    fake: {},
                    fullExec: X,
                    managerCallbacks: M,
                    makeModuleMap: l,
                    normalize: n,
                    configure: function(a) {
                        var d, b, c;
                        a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                        d = q.paths;
                        c = q.pkgs;
                        ga(q, a, !0);
                        if (a.paths) {
                            for (b in a.paths) b in I || (d[b] = a.paths[b]);
                            q.paths = d
                        }
                        if ((d = a.packagePaths) || a.packages) {
                            if (d)
                                for (b in d) b in I || ha(c, d[b], b);
                            a.packages && ha(c, a.packages);
                            q.pkgs = c
                        }
                        a.priority && (b = h.requireWait, h.requireWait = !1, B(), h.require(a.priority), B(), h.requireWait = b, q.priorityWait = a.priority);
                        if (a.deps ||
                            a.callback) h.require(a.deps || [], a.callback)
                    },
                    requireDefined: function(a, b) {
                        return l(a, b).fullName in m
                    },
                    requireSpecified: function(a, b) {
                        return l(a, b).fullName in Y
                    },
                    require: function(a, b, c) {
                        if ("string" === typeof a) {
                            if (H(b)) return e.onError(Q("requireargs", "Invalid require call"));
                            if (e.get) return e.get(h, a, b);
                            b = l(a, b);
                            a = b.fullName;
                            return !(a in m) ? e.onError(Q("notloaded", "Module name '" + b.fullName + "' has not been loaded yet for context: " + r)) : m[a]
                        }(a && a.length || b) && O(null, a, b, c);
                        if (!h.requireWait)
                            for (; !h.scriptCount &&
                                h.paused.length;) B();
                        return h.require
                    },
                    takeGlobalQueue: function() {
                        V.length && (ra.apply(h.defQueue, [h.defQueue.length - 1, 0].concat(V)), V = [])
                    },
                    completeLoad: function(a) {
                        var b;
                        for (h.takeGlobalQueue(); T.length;)
                            if (b = T.shift(), null === b[0]) {
                                b[0] = a;
                                break
                            } else if (b[0] === a) break;
                        else O.apply(null, b), b = null;
                        b ? O.apply(null, b) : O.apply(null, [a, [], "jquery" === a && "undefined" !== typeof jQuery ? function() {
                            return jQuery
                        } : null]);
                        e.isAsync && (h.scriptCount -= 1);
                        B();
                        e.isAsync || (h.scriptCount -= 1)
                    },
                    toUrl: function(a, b) {
                        var c = a.lastIndexOf("."),
                            e = null; - 1 !== c && (e = a.substring(c, a.length), a = a.substring(0, c));
                        return h.nameToUrl(a, e, b)
                    },
                    nameToUrl: function(a, b, c) {
                        var i, p, j, f, m = h.config,
                            a = n(a, c && c.fullName);
                        if (e.jsExtRegExp.test(a)) b = a + (b ? b : "");
                        else {
                            i = m.paths;
                            p = m.pkgs;
                            c = a.split("/");
                            for (f = c.length; 0 < f; f--)
                                if (j = c.slice(0, f).join("/"), i[j]) {
                                    c.splice(0, f, i[j]);
                                    break
                                } else if (j = p[j]) {
                                a = a === j.name ? j.location + "/" + j.main : j.location;
                                c.splice(0, f, a);
                                break
                            }
                            b = c.join("/") + (b || ".js");
                            b = ("/" === b.charAt(0) || b.match(/^[\w\+\.\-]+:/) ? "" : m.baseUrl) + b
                        }
                        return m.urlArgs ?
                            b + ((-1 === b.indexOf("?") ? "?" : "&") + m.urlArgs) : b
                    }
                };
                h.jQueryCheck = ba;
                h.resume = B;
                p = J[i] = h
            }
            i = p;
            u && i.configure(u);
            return i.require(b, c)
        };
        e.config = function(b) {
            return e(b)
        };
        require || (require = e);
        e.toUrl = function(b) {
            return J._.toUrl(b)
        };
        e.version = "1.0.8";
        e.jsExtRegExp = /^\/|:|\?|\.js$/;
        v = e.s = {
            contexts: J,
            skipAsync: {}
        };
        if (e.isAsync = e.isBrowser = D)
            if (z = v.head = document.getElementsByTagName("head")[0], L = document.getElementsByTagName("base")[0]) z = v.head = L.parentNode;
        e.onError = function(b) {
            throw b;
        };
        e.load = function(b,
            c, p) {
            e.resourcesReady(!1);
            b.scriptCount += 1;
            e.attach(p, b, c);
            b.jQuery && !b.jQueryIncremented && (aa(b.jQuery, !0), b.jQueryIncremented = !0)
        };
        define = function(b, c, e) {
            var i, l;
            "string" !== typeof b && (e = c, c = b, b = null);
            $(c) || (e = c, c = []);
            !c.length && H(e) && e.length && (e.toString().replace(oa, "").replace(pa, function(b, e) {
                c.push(e)
            }), c = (1 === e.length ? ["require"] : ["require", "exports", "module"]).concat(c));
            if (R && (i = K || na())) b || (b = i.getAttribute("data-requiremodule")), l = J[i.getAttribute("data-requirecontext")];
            (l ? l.defQueue :
                V).push([b, c, e]);
            return s
        };
        define.amd = {
            multiversion: !0,
            plugins: !0,
            jQuery: !0
        };
        e.exec = function(b) {
            return eval(b)
        };
        e.execCb = function(b, c, e, i) {
            return c.apply(i, e)
        };
        e.addScriptToDom = function(b) {
            K = b;
            L ? z.insertBefore(b, L) : z.appendChild(b);
            K = null
        };
        e.onScriptLoad = function(b) {
            var c = b.currentTarget || b.srcElement,
                p;
            if ("load" === b.type || c && sa.test(c.readyState)) x = null, b = c.getAttribute("data-requirecontext"), p = c.getAttribute("data-requiremodule"), J[b].completeLoad(p), c.detachEvent && !ka ? c.detachEvent("onreadystatechange",
                e.onScriptLoad) : c.removeEventListener("load", e.onScriptLoad, !1)
        };
        e.attach = function(b, c, p, i, l, r) {
            var n;
            if (D) return i = i || e.onScriptLoad, n = c && c.config && c.config.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), n.type = l || c && c.config.scriptType || "text/javascript", n.charset = "utf-8", n.async = !v.skipAsync[b], c && n.setAttribute("data-requirecontext", c.contextName), n.setAttribute("data-requiremodule", p), n.attachEvent && !(n.attachEvent.toString && 0 > n.attachEvent.toString().indexOf("[native code]")) &&
                !ka ? (R = !0, r ? n.onreadystatechange = function() {
                    "loaded" === n.readyState && (n.onreadystatechange = null, n.attachEvent("onreadystatechange", i), r(n))
                } : n.attachEvent("onreadystatechange", i)) : n.addEventListener("load", i, !1), n.src = b, r || e.addScriptToDom(n), n;
            ja && (importScripts(b), c.completeLoad(p));
            return null
        };
        if (D) {
            w = document.getElementsByTagName("script");
            for (A = w.length - 1; - 1 < A && (E = w[A]); A--)
                if (z || (z = E.parentNode), F = E.getAttribute("data-main")) {
                    l.baseUrl || (w = F.split("/"), E = w.pop(), w = w.length ? w.join("/") + "/" :
                        "./", l.baseUrl = w, F = E.replace(ia, ""));
                    l.deps = l.deps ? l.deps.concat(F) : [F];
                    break
                }
        }
        e.checkReadyState = function() {
            var b = v.contexts,
                c;
            for (c in b)
                if (!(c in I) && b[c].waitCount) return;
            e.resourcesReady(!0)
        };
        e.resourcesReady = function(b) {
            var c, l;
            e.resourcesDone = b;
            if (e.resourcesDone)
                for (l in b = v.contexts, b) l in I || (c = b[l], c.jQueryIncremented && (aa(c.jQuery, !1), c.jQueryIncremented = !1))
        };
        e.pageLoaded = function() {
            "complete" !== document.readyState && (document.readyState = "complete")
        };
        D && (document.addEventListener && !document.readyState) &&
            (document.readyState = "loading", window.addEventListener("load", e.pageLoaded, !1));
        e(l);
        e.isAsync && "undefined" !== typeof setTimeout && (C = v.contexts[l.context || "_"], C.requireWait = !0, setTimeout(function() {
            C.requireWait = !1;
            C.scriptCount || C.resume();
            e.checkReadyState()
        }, 0))
    }
})();

require(["jquery"], function() {
    $(document).ready(function() {
        function d() {
            $("#main-nav ul").removeAttr("style")
        }
        $("#main-nav .menu").click(function() {
            $("#main-nav .anchors").slideDown();
            $("#main-nav .close").fadeIn("slow")
        });
        $("#main-nav .close").click(function() {
            $(this).fadeOut("fast");
            $("#main-nav .anchors").slideUp()
        });
        var b;
        $(window).resize(function() {
            b && clearTimeout(b);
            b = setTimeout(d, 100)
        });
        d();
        setTimeout(function() {
            $("body, html").animate({
                scrollTop: $(window).scrollTop() + 1
            })
        }, 10);
        $("#footer .social a").click(function(a) {
            a.preventDefault();
            var a = ($(window).width() - 575) / 2,
                b = ($(window).height() - 400) / 2;
            window.open(this.href, "social", "status=1,width=575,height=400,top=" + b + ",left=" + a)
        });
        var c = "https://cdn.api.twitter.com/1/urls/count.json?callback=?&url=" + encodeURIComponent(document.URL);
        $.getJSON(c, function(a) {
            $("#footer .social .twitter span").html(a.count)
        });
        c = "https://graph.facebook.com/" + encodeURIComponent(document.URL);
        $.getJSON(c, function(a) {
            $("#footer .social .facebook span").html(a.shares)
        })
    })
});

require(["jquery"], function() {
    require(["jquery-scrollspy", "jquery.touchSwipe", "masonry", "imagesloaded"], function() {
        function e(a) {
            $("#company li").removeClass("active").eq(a).addClass("active");
            $("#company nav span").removeClass("active").eq(a).addClass("active")
        }
        $(document).ready(function() {
            function a() {
                $(".scrollable:not(.scrolled)").each(function() {
                    "testimonial" == this.id ? $("#yellow").position().top + $(this).position().top - 123 <= $(window).scrollTop() + $(window).height() && $(this).addClass("scrolled") :
                        "company" == this.id ? $("#yellow").position().top + $(this).position().top + 500 <= $(window).scrollTop() + $(window).height() && $(this).addClass("scrolled") : $(this).position().top + 200 <= $(window).scrollTop() + $(window).height() && $(this).addClass("scrolled")
                });
                $("#photo .photo-wrapper").each(function() {
                    $("#photo").position().top + $(this).position().top <= $(window).scrollTop() + $(window).height() && $(this).children("img").addClass("scrolled")
                })
            }

            function b(c) {
                $("#anim li.active").removeClass("active").delay(100).queue(function() {
                    $(this).removeClass("animate loop").find(".meta").removeClass("display");
                    $(this).dequeue();
                    f = c;
                    $("#anim li").eq(f).addClass("active animate").delay(3100).queue(function() {
                        $(this).addClass("loop").find(".meta").addClass("display");
                        $(this).dequeue()
                    });
                    $("#header .mobile span").removeClass("active").eq(f).addClass("active")
                })
            }
            var d, f = 0,
                e = $("#anim li").length,
                g = $("#photo");
            $("body").animate({
                opacity: 1
            }, 100);
            setTimeout(function() {
                $("#header header").addClass("display")
            }, 1800);
            setTimeout(function() {
                $("#header .nav, #header .mobile").addClass("display")
            }, 3200);
            g.imagesLoaded(function() {
                g.find(".left, .right").masonry({
                    itemSelector: ".photo-wrapper",
                    columnWidth: ".small"
                });
                $("#main-nav .anchors a").click(function(c) {
                    c.preventDefault();
                    c = "#company" === $(this).attr("href") ? $("#company").offset().top + 130 : $($(this).attr("href")).offset().top - 65;
                    $("body, html").animate({
                        scrollTop: c
                    }, 400);
                    $("#main-nav .close:visible").trigger("click")
                });
                $(".spied").each(function() {
                    var c = $(this),
                        a = c.position();
                    c.scrollspy({
                        min: "yellow" === c[0].id ? a.top - 220 : a.top - 68,
                        max: "video" === c[0].id ? $("#photo").position().top + $("#photo").height() - 220 : "yellow" === c[0].id ? a.top + c.height() +
                            9 : a.top + c.height() - 68,
                        onEnter: function(a) {
                            "yellow" == a.id ? $("#main-nav a[href=#company]").addClass("active") : $("#main-nav a[href=#" + a.id + "]").addClass("active")
                        },
                        onLeave: function(a) {
                            "yellow" == a.id ? $("#main-nav a[href=#company]").removeClass("active") : $("#main-nav a[href=#" + a.id + "]").removeClass("active")
                        }
                    })
                });
                $(window).scroll(function() {
                    d && clearTimeout(d);
                    d = setTimeout(a, 10)
                })
            });
            $("#main-nav .signin").click(function() {
                $("#main-nav .where").hasClass("display") ? $("#main-nav .where").removeClass("display") :
                    $("#main-nav .first-choice").toggleClass("display")
            });
            $("#main-nav a.jobseeker").click(function(a) {
                a.preventDefault();
                $("#main-nav .first-choice").removeClass("display");
                $("#main-nav .where").addClass("display")
            });
            $("#main-nav .where a, #header .slider li a, #calendar .link a").click(function() {
                $('<div id="loading"><div class="loader"><div class="dot dot1"></div><div class="dot dot2"></div><div class="dot dot3"></div><div class="dot dot4"></div></div></div>').hide().appendTo("body").fadeIn(100)
            });
            2 > e && $("#header .slider .nav").hide();
            $("#anim li:first").addClass("active animate").delay(3100).queue(function() {
                $(this).addClass("loop").find(".meta").addClass("display").dequeue();
                $(this).dequeue()
            });
            $("#header .slider .nav").click(function(a) {
                a.preventDefault();
                a = $(this).hasClass("next") ? f < e - 1 ? f + 1 : 0 : 0 < f ? f - 1 : e - 1;
                b(a)
            });
            $("#header .mobile span").click(function() {
                b($(this).index())
            });
            $("#header .slider li a").on("dragstart", function() {
                return !1
            });
            $("#header").swipe({
                swipeLeft: function() {
                    $("#header .slider .nav.next").trigger("click")
                },
                swipeRight: function() {
                    $("#header .slider .nav.prev").trigger("click")
                },
                excludedElements: "button, input, select, textarea, .noSwipe"
            });
            var h = $f($("#video-player")[0]);
            $("#video .content img").click(function() {
                $(this).fadeOut("fast");
                $("#video .video").addClass("play");
                h.api("play")
            })
        });
        var d = $("#testimonial li").length;
        $("#testimonial .button").click(function() {
            var a = $("#testimonial li.active"),
                b;
            $(this).hasClass("next") ? (b = $("#testimonial li").eq(a.index() >= d - 1 ? 0 : a.index() + 1), a.addClass("right").removeClass("active"),
                b.removeClass("left").addClass("active"), $("#testimonial li").eq(b.index() >= d - 1 ? 0 : b.index() + 1).addClass("left").removeClass("right")) : (b = $("#testimonial li").eq(0 === a.index() ? d - 1 : a.index() - 1), a.addClass("left").removeClass("active"), b.removeClass("right").addClass("active"), $("#testimonial li").eq(0 === b.index() ? d - 1 : b.index() - 1).addClass("right").removeClass("left"))
        });
        $("#company nav span").click(function() {
            e($(this).index())
        });
        $("#company").swipe({
            swipeLeft: function() {
                var a = $("#company nav span.active").index(),
                    b = $("#company li").length;
                e(a < b - 1 ? a + 1 : 0)
            },
            swipeRight: function() {
                var a = $("#company nav span.active").index(),
                    b = $("#company li").length;
                e(0 < a ? a - 1 : b - 1)
            },
            excludedElements: "button, input, select, textarea, .noSwipe"
        })
    })
});