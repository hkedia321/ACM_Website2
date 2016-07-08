/*
 HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
window.Modernizr = function(g, d, q) {
    function n(a, b) {
        return typeof a === b
    }

    function I(a, b) {
        for (var c in a) {
            var f = a[c];
            if (!~("" + f).indexOf("-") && i[f] !== q) return "pfx" == b ? f : !0
        }
        return !1
    }

    function j(a, b, c) {
        var f = a.charAt(0).toUpperCase() + a.slice(1),
            d = (a + " " + J.join(f + " ") + f).split(" ");
        if (n(b, "string") || n(b, "undefined")) return I(d, b);
        d = (a + " " + K.join(f + " ") + f).split(" ");
        a: {
            var a = d,
                e;
            for (e in a)
                if (f = b[a[e]], f !== q) {
                    if (!1 === c) {
                        b = a[e];
                        break a
                    }
                    if (n(f, "function")) {
                        b = f.bind(c || b);
                        break a
                    }
                    b = f;
                    break a
                }
            b = !1
        }
        return b
    }
    var e = {},
        m = d.documentElement,
        h = d.createElement("modernizr"),
        i = h.style,
        h = d.createElement("input"),
        L = {}.toString,
        v = " -webkit- -moz- -o- -ms- ".split(" "),
        J = ["Webkit", "Moz", "O", "ms"],
        K = ["webkit", "moz", "o", "ms"],
        c = {},
        r = {},
        p = {},
        x = [],
        y = x.slice,
        k, s = function(a, b, c, f) {
            var e, h, g = d.createElement("div"),
                j = d.body,
                i = j || d.createElement("body");
            if (parseInt(c, 10))
                for (; c--;) e = d.createElement("div"), e.id = f ? f[c] : "modernizr" + (c + 1), g.appendChild(e);
            c = ['&#173;<style id="smodernizr">', a, "</style>"].join("");
            g.id = "modernizr";
            (j ?
                g : i).innerHTML += c;
            i.appendChild(g);
            j || (i.style.background = "", i.style.overflow = "hidden", h = m.style.overflow, m.style.overflow = "hidden", m.appendChild(i));
            a = b(g, a);
            j ? g.parentNode.removeChild(g) : (i.parentNode.removeChild(i), m.style.overflow = h);
            return !!a
        },
        z, Q = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
    z = function(a, b) {
        var b = b || d.createElement(Q[a] || "div"),
            a = "on" + a,
            c = a in b;
        c || (b.setAttribute || (b = d.createElement("div")), b.setAttribute && b.removeAttribute &&
            (b.setAttribute(a, ""), c = n(b[a], "function"), n(b[a], "undefined") || (b[a] = q), b.removeAttribute(a)));
        return c
    };
    var A = {}.hasOwnProperty,
        B;
    B = !n(A, "undefined") && !n(A.call, "undefined") ? function(a, b) {
        return A.call(a, b)
    } : function(a, b) {
        return b in a && n(a.constructor.prototype[b], "undefined")
    };
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = y.call(arguments, 1),
            f = function() {
                if (this instanceof f) {
                    var d = function() {};
                    d.prototype = b.prototype;
                    var d = new d,
                        e = b.apply(d, c.concat(y.call(arguments)));
                    return Object(e) === e ? e : d
                }
                return b.apply(a, c.concat(y.call(arguments)))
            };
        return f
    });
    c.flexbox = function() {
        return j("flexWrap")
    };
    c.flexboxlegacy = function() {
        return j("boxDirection")
    };
    c.canvas = function() {
        var a = d.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    };
    c.canvastext = function() {
        return !(!e.canvas || !n(d.createElement("canvas").getContext("2d").fillText, "function"))
    };
    c.webgl = function() {
        return !!g.WebGLRenderingContext
    };
    c.touch =
        function() {
            var a;
            "ontouchstart" in g || g.DocumentTouch && d instanceof DocumentTouch ? a = !0 : s(["@media (", v.join("touch-enabled),("), "modernizr){#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
                a = 9 === b.offsetTop
            });
            return a
        };
    c.geolocation = function() {
        return "geolocation" in navigator
    };
    c.postmessage = function() {
        return !!g.postMessage
    };
    c.websqldatabase = function() {
        return !!g.openDatabase
    };
    c.indexedDB = function() {
        return !!j("indexedDB", g)
    };
    c.hashchange = function() {
        return z("hashchange", g) && (d.documentMode ===
            q || 7 < d.documentMode)
    };
    c.history = function() {
        return !(!g.history || !history.pushState)
    };
    c.draganddrop = function() {
        var a = d.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    };
    c.websockets = function() {
        return "WebSocket" in g || "MozWebSocket" in g
    };
    c.rgba = function() {
        i.cssText = "background-color:rgba(150,255,150,.5)";
        return !!~("" + i.backgroundColor).indexOf("rgba")
    };
    c.hsla = function() {
        i.cssText = "background-color:hsla(120,40%,100%,.5)";
        return !!~("" + i.backgroundColor).indexOf("rgba") || !!~("" +
            i.backgroundColor).indexOf("hsla")
    };
    c.multiplebgs = function() {
        i.cssText = "background:url(https://),url(https://),red url(https://)";
        return /(url\s*\(.*?){3}/.test(i.background)
    };
    c.backgroundsize = function() {
        return j("backgroundSize")
    };
    c.borderimage = function() {
        return j("borderImage")
    };
    c.borderradius = function() {
        return j("borderRadius")
    };
    c.boxshadow = function() {
        return j("boxShadow")
    };
    c.textshadow = function() {
        return "" === d.createElement("div").style.textShadow
    };
    c.opacity = function() {
        var a = v.join("opacity:.55;") +
            "";
        i.cssText = a;
        return /^0.55$/.test(i.opacity)
    };
    c.cssanimations = function() {
        return j("animationName")
    };
    c.csscolumns = function() {
        return j("columnCount")
    };
    c.cssgradients = function() {
        var a = ("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:" + v.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        i.cssText = a;
        return !!~("" + i.backgroundImage).indexOf("gradient")
    };
    c.cssreflections = function() {
        return j("boxReflect")
    };
    c.csstransforms =
        function() {
            return !!j("transform")
        };
    c.csstransforms3d = function() {
        var a = !!j("perspective");
        a && "webkitPerspective" in m.style && s("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        });
        return a
    };
    c.csstransitions = function() {
        return j("transition")
    };
    c.fontface = function() {
        var a;
        s('@font-face {font-family:"font";src:url("https://")}', function(b, c) {
            var f = d.getElementById("smodernizr"),
                f = (f = f.sheet || f.styleSheet) ?
                f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(f) && 0 === f.indexOf(c.split(" ")[0])
        });
        return a
    };
    c.generatedcontent = function() {
        var a;
        s('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:3px/1 a}', function(b) {
            a = 3 <= b.offsetHeight
        });
        return a
    };
    c.video = function() {
        var a = d.createElement("video"),
            b = !1;
        try {
            if (b = !!a.canPlayType) b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,
                ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (c) {}
        return b
    };
    c.audio = function() {
        var a = d.createElement("audio"),
            b = !1;
        try {
            if (b = !!a.canPlayType) b = new Boolean(b), b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), b.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), b.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), b.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (c) {}
        return b
    };
    c.localstorage =
        function() {
            try {
                return localStorage.setItem("modernizr", "modernizr"), localStorage.removeItem("modernizr"), !0
            } catch (a) {
                return !1
            }
        };
    c.sessionstorage = function() {
        try {
            return sessionStorage.setItem("modernizr", "modernizr"), sessionStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    c.webworkers = function() {
        return !!g.Worker
    };
    c.applicationcache = function() {
        return !!g.applicationCache
    };
    c.svg = function() {
        return !!d.createElementNS && !!d.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    };
    c.inlinesvg =
        function() {
            var a = d.createElement("div");
            a.innerHTML = "<svg/>";
            return "http://www.w3.org/2000/svg" == (a.firstChild && a.firstChild.namespaceURI)
        };
    c.smil = function() {
        return !!d.createElementNS && /SVGAnimate/.test(L.call(d.createElementNS("http://www.w3.org/2000/svg", "animate")))
    };
    c.svgclippaths = function() {
        return !!d.createElementNS && /SVGClipPath/.test(L.call(d.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    };
    for (var l in c) B(c, l) && (k = l.toLowerCase(), e[k] = c[l](), x.push((e[k] ? "" : "no-") + k));
    if (!e.input) {
        l =
            "autocomplete autofocus list placeholder max min multiple pattern required step".split(" ");
        c = 0;
        for (k = l.length; c < k; c++) p[l[c]] = !!(l[c] in h);
        p.list && (p.list = !(!d.createElement("datalist") || !g.HTMLDataListElement));
        e.input = p;
        p = "search tel url email datetime date month week time datetime-local number range color".split(" ");
        l = 0;
        for (var w, c = p.length; l < c; l++) {
            h.setAttribute("type", w = p[l]);
            if (k = "text" !== h.type) h.value = ":)", h.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(w) && h.style.WebkitAppearance !==
                q ? (m.appendChild(h), k = d.defaultView, k = k.getComputedStyle && "textfield" !== k.getComputedStyle(h, null).WebkitAppearance && 0 !== h.offsetHeight, m.removeChild(h)) : /^(search|tel)$/.test(w) || (k = /^(url|email)$/.test(w) ? h.checkValidity && !1 === h.checkValidity() : ":)" != h.value);
            r[p[l]] = !!k
        }
        e.inputtypes = r
    }
    e.addTest = function(a, b) {
        if ("object" == typeof a)
            for (var c in a) B(a, c) && e.addTest(c, a[c]);
        else {
            a = a.toLowerCase();
            if (e[a] !== q) return e;
            b = "function" == typeof b ? b() : b;
            m.className += " " + (b ? "" : "no-") + a;
            e[a] = b
        }
        return e
    };
    i.cssText =
        "";
    var h = h = null,
        M = function() {
            var a = u.elements;
            return "string" == typeof a ? a.split(" ") : a
        },
        D = function(a) {
            var b = N[a[O]];
            b || (b = {}, C++, a[O] = C, N[C] = b);
            return b
        },
        P = function(a, b, c) {
            b || (b = d);
            if (t) return b.createElement(a);
            c || (c = D(b));
            b = c.cache[a] ? c.cache[a].cloneNode() : R.test(a) ? (c.cache[a] = c.createElem(a)).cloneNode() : c.createElem(a);
            return b.canHaveChildren && !S.test(a) && !b.tagUrn ? c.frag.appendChild(b) : b
        },
        h = function(a) {
            a || (a = d);
            var b = D(a);
            if (u.shivCSS && !E && !b.hasCSS) {
                var c, f = a;
                c = f.createElement("p");
                f = f.getElementsByTagName("head")[0] ||
                    f.documentElement;
                c.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
                c = f.insertBefore(c.lastChild, f.firstChild);
                b.hasCSS = !!c
            }
            if (!t) {
                var e = a;
                b.cache || (b.cache = {}, b.createElem = e.createElement, b.createFrag = e.createDocumentFragment, b.frag = b.createFrag());
                e.createElement = function(a) {
                    return !u.shivMethods ? b.createElem(a) : P(a, e, b)
                };
                e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                    M().join().replace(/[\w\-]+/g, function(a) {
                        b.createElem(a);
                        b.frag.createElement(a);
                        return 'c("' + a + '")'
                    }) + ");return n}")(u, b.frag)
            }
            return a
        },
        r = this.html5 || {},
        S = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        R = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        E, O = "_html5shiv",
        C = 0,
        N = {},
        t;
    try {
        var F = d.createElement("a");
        F.innerHTML = "<xyz></xyz>";
        E = "hidden" in F;
        var G;
        if (!(G = 1 == F.childNodes.length)) {
            d.createElement("a");
            var H =
                d.createDocumentFragment();
            G = "undefined" == typeof H.cloneNode || "undefined" == typeof H.createDocumentFragment || "undefined" == typeof H.createElement
        }
        t = G
    } catch (T) {
        t = E = !0
    }
    var u = {
        elements: r.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== r.shivCSS,
        supportsUnknownElements: t,
        shivMethods: !1 !== r.shivMethods,
        type: "default",
        shivDocument: h,
        createElement: P,
        createDocumentFragment: function(a, b) {
            a || (a = d);
            if (t) return a.createDocumentFragment();
            for (var b = b || D(a), c = b.frag.cloneNode(), f = 0, e = M(), g = e.length; f < g; f++) c.createElement(e[f]);
            return c
        }
    };
    this.html5 = u;
    h(d);
    e._version = "2.8.3";
    e._prefixes = v;
    e._domPrefixes = K;
    e._cssomPrefixes = J;
    e.mq = function(a) {
        var b = g.matchMedia || g.msMatchMedia;
        if (b) return b(a) && b(a).matches || !1;
        var c;
        s("@media " + a + " { #modernizr { position: absolute; } }", function(a) {
            c = "absolute" == (g.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).position
        });
        return c
    };
    e.hasEvent = z;
    e.testProp = function(a) {
        return I([a])
    };
    e.testAllProps = j;
    e.testStyles = s;
    e.prefixed = function(a, b, c) {
        return b ? j(a, b, c) : j(a, "pfx")
    };
    m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + x.join(" "));
    return e
}(this, this.document);