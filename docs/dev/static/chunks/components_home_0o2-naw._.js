(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/home/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* ─────────────────────────────────────────────────────────────
   HERO SECTION
   - Fullscreen 100vh con video de fondo (lavadoAuto.mp4)
   - Overlay oscuro rgba(0,0,0,0.68)
   - Eyebrow + H1 + subtítulo + CTA pair centrados
   - Scroll indicator animado al fondo

   PRODUCCIÓN: reemplazar src del video con URL de CDN
   (Cloudinary / Bunny.net / YouTube embed)
   ───────────────────────────────────────────────────────────── */ function PhoneIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.13 6.13l.95-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"
        }, void 0, false, {
            fileName: "[project]/components/home/Hero.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Hero.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PhoneIcon;
function Hero() {
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* Asegura autoplay en todos los browsers */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const vid = videoRef.current;
            if (vid) {
                vid.play().catch({
                    "Hero.useEffect": ()=>{
                    /* Fallback silencioso si el browser bloquea autoplay */ }
                }["Hero.useEffect"]);
            }
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            marginTop: "-70px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                poster: `${("TURBOPACK compile-time value", "") ?? ""}/images/portfolio/Screenshot_20260415_134651_Instagram.jpg`,
                style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: `${("TURBOPACK compile-time value", "") ?? ""}/videos/lavadoAuto.mp4`,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/components/home/Hero.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.88) 100%)",
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "120px 24px 64px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "860px",
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                display: "inline-block",
                                color: "#C9A84C",
                                fontSize: "11px",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.15em",
                                marginBottom: "20px"
                            },
                            children: "Elias Car Detailing · Fresno, CA"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                color: "#FFFFFF",
                                fontSize: "clamp(42px, 7vw, 78px)",
                                fontWeight: 900,
                                textTransform: "uppercase",
                                letterSpacing: "-0.01em",
                                lineHeight: 1.04,
                                marginBottom: "24px"
                            },
                            children: [
                                "Premium Car",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 106,
                                    columnNumber: 24
                                }, this),
                                "Detailing in",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "mobile-only"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 106,
                                    columnNumber: 42
                                }, this),
                                " ",
                                "Fresno, CA"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "56px",
                                height: "3px",
                                backgroundColor: "#C9A84C",
                                margin: "0 auto 24px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "rgba(255,255,255,0.75)",
                                fontSize: "16px",
                                lineHeight: 1.75,
                                maxWidth: "520px",
                                margin: "0 auto 40px"
                            },
                            children: "Ceramic coating, paint correction, PPF and premium interior detailing. Serving the entire Central Valley."
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cta-pair",
                            style: {
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "btn-gold",
                                    style: {
                                        fontSize: "14px",
                                        padding: "13px 32px",
                                        letterSpacing: "0.07em"
                                    },
                                    children: "Get A Free Quote"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+15595699415",
                                    className: "btn-outline",
                                    style: {
                                        fontSize: "14px",
                                        padding: "13px 32px",
                                        letterSpacing: "0.07em"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {}, void 0, false, {
                                            fileName: "[project]/components/home/Hero.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        "(559) 569-9415"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Hero.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "36px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                        animation: "hero-bounce 2.2s ease-in-out infinite"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: "9px",
                                color: "rgba(255,255,255,0.45)",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase"
                            },
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#C9A84C",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "5",
                                    x2: "12",
                                    y2: "19"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "19 12 12 19 5 12"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Hero.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Hero.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Hero, "PdMsmLAy5JKU3vCrhAlqGYQfKuA=");
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "PhoneIcon");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/StatsRow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
/* ─────────────────────────────────────────────────────────────
   STATS ROW
   - Fondo #000, conecta visualmente con el Hero
   - 3 stats con contador animado (IntersectionObserver + easeOut)
   - Una sola estructura responsive via CSS grid
   ───────────────────────────────────────────────────────────── */ const STATS = [
    {
        value: 100,
        suffix: "+",
        label: "Reviews on Google"
    },
    {
        value: 5,
        suffix: "★",
        label: "Star Rating"
    },
    {
        value: 99,
        suffix: "%",
        label: "Happy Customers"
    },
    {
        value: 5,
        suffix: "+",
        label: "Years of Experience"
    }
];
function useCountUp(target, duration = 1500, active = false) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            if (!active) return;
            let start = null;
            let raf;
            const step = {
                "useCountUp.useEffect.step": (ts)=>{
                    if (!start) start = ts;
                    const progress = Math.min((ts - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.round(eased * target));
                    if (progress < 1) raf = requestAnimationFrame(step);
                }
            }["useCountUp.useEffect.step"];
            raf = requestAnimationFrame(step);
            return ({
                "useCountUp.useEffect": ()=>cancelAnimationFrame(raf)
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        target,
        duration,
        active
    ]);
    return count;
}
_s(useCountUp, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
function StatItem({ value, suffix, label, index, active }) {
    _s1();
    const count = useCountUp(value, 1500, active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "stat-item",
        "data-index": index,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "stat-number",
                children: [
                    count,
                    suffix
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/StatsRow.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "stat-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/home/StatsRow.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/StatsRow.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s1(StatItem, "Aew1CSxoe3aC1Zreul8rQJ1thuU=", false, function() {
    return [
        useCountUp
    ];
});
_c = StatItem;
function StatsRow() {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatsRow.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "StatsRow.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setActive(true);
                        observer.disconnect();
                    }
                }
            }["StatsRow.useEffect"], {
                threshold: 0.3
            });
            observer.observe(el);
            return ({
                "StatsRow.useEffect": ()=>observer.disconnect()
            })["StatsRow.useEffect"];
        }
    }["StatsRow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .stats-row {
          background-color: #000000;
          border-top:    1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.2);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 44px 24px;
        }

        /* Separador vertical gold entre ítems */
        .stat-item:not(:last-child) {
          border-right: 1px solid rgba(201,168,76,0.35);
        }

        .stat-number {
          font-size: clamp(44px, 5vw, 56px);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 11px;
          font-weight: 600;
          color: #C9A84C;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          text-align: center;
        }

        /* ── MOBILE: grid 2×2 ────────────────────────────── */
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            padding: 0;
            margin: 0;
            max-width: 100%;
          }

          .stat-item {
            padding: 28px 12px;
            border-right: none !important;
          }

          /* Columna izquierda: borde derecho */
          .stat-item:nth-child(odd) {
            border-right: 1px solid rgba(201,168,76,0.3) !important;
          }

          /* Fila superior: borde inferior */
          .stat-item:nth-child(1),
          .stat-item:nth-child(2) {
            border-bottom: 1px solid rgba(201,168,76,0.2);
          }

          .stat-number {
            font-size: 38px;
          }

          .stat-label {
            font-size: 10px;
            letter-spacing: 0.08em;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/home/StatsRow.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: ref,
                className: "stats-row",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stats-grid",
                    children: STATS.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                            ...stat,
                            index: i,
                            active: active
                        }, stat.label, false, {
                            fileName: "[project]/components/home/StatsRow.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/StatsRow.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/StatsRow.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(StatsRow, "fx8WUJRbjFwBmrdMtUayfPpa9A4=");
_c1 = StatsRow;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatItem");
__turbopack_context__.k.register(_c1, "StatsRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/BeforeAfterSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BeforeAfterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/* ─────────────────────────────────────────────────────────────
   BEFORE / AFTER SLIDER
   - Implementación custom con clip-path (sin dependencias extra)
   - Soporte mouse + touch
   - Labels BEFORE / AFTER
   - Handle central con flechas ◄►
   ───────────────────────────────────────────────────────────── */ const PAIRS = [
    {
        before: "/images/portfolio/Screenshot_20260416_024830_Instagram.jpg",
        after: "/images/portfolio/Screenshot_20260416_024847_Instagram.jpg",
        label: "Paint Correction"
    },
    {
        before: "/images/portfolio/Screenshot_20260416_024916_Instagram.jpg",
        after: "/images/portfolio/Screenshot_20260416_024930_Instagram.jpg",
        label: "Exterior Detail"
    }
];
function Slider({ before, after }) {
    _s();
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const updatePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Slider.useCallback[updatePos]": (clientX)=>{
            const el = containerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const raw = (clientX - rect.left) / rect.width * 100;
            setPos(Math.min(Math.max(raw, 2), 98));
        }
    }["Slider.useCallback[updatePos]"], []);
    const onMouseDown = (e)=>{
        dragging.current = true;
        updatePos(e.clientX);
    };
    const onTouchStart = (e)=>{
        dragging.current = true;
        updatePos(e.touches[0].clientX);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>{
            const onMove = {
                "Slider.useEffect.onMove": (e)=>{
                    if (!dragging.current) return;
                    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
                    updatePos(x);
                }
            }["Slider.useEffect.onMove"];
            const onUp = {
                "Slider.useEffect.onUp": ()=>{
                    dragging.current = false;
                }
            }["Slider.useEffect.onUp"];
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
            window.addEventListener("touchmove", onMove, {
                passive: true
            });
            window.addEventListener("touchend", onUp);
            return ({
                "Slider.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("mouseup", onUp);
                    window.removeEventListener("touchmove", onMove);
                    window.removeEventListener("touchend", onUp);
                }
            })["Slider.useEffect"];
        }
    }["Slider.useEffect"], [
        updatePos
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "ba-slider",
        onMouseDown: onMouseDown,
        onTouchStart: onTouchStart,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: after,
                alt: "After",
                fill: true,
                style: {
                    objectFit: "cover"
                },
                sizes: "(max-width:768px) 100vw, 50vw"
            }, void 0, false, {
                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ba-before-clip",
                style: {
                    clipPath: `inset(0 ${100 - pos}% 0 0)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: before,
                    alt: "Before",
                    fill: true,
                    style: {
                        objectFit: "cover"
                    },
                    sizes: "(max-width:768px) 100vw, 50vw"
                }, void 0, false, {
                    fileName: "[project]/components/home/BeforeAfterSection.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ba-line",
                style: {
                    left: `${pos}%`
                }
            }, void 0, false, {
                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ba-handle",
                style: {
                    left: `${pos}%`
                },
                "aria-label": "Drag to compare before and after",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "15 18 9 12 15 6"
                        }, void 0, false, {
                            fileName: "[project]/components/home/BeforeAfterSection.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/BeforeAfterSection.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "9 18 15 12 9 6"
                        }, void 0, false, {
                            fileName: "[project]/components/home/BeforeAfterSection.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/BeforeAfterSection.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ba-label ba-label-before",
                children: "Before"
            }, void 0, false, {
                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ba-label ba-label-after",
                children: "After"
            }, void 0, false, {
                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/BeforeAfterSection.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(Slider, "LBjLnLr2OHZeQWIy77bVnhSbWiE=");
_c = Slider;
function BeforeAfterSection() {
    _s1();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* ── Sección ─────────────────────────────────────────── */
        .ba-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
        }

        .ba-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── Texto izquierda ────────────────────────────────── */
        .ba-text .section-h2 {
          text-align: left;
          margin-bottom: 20px;
        }

        .ba-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin-bottom: 36px;
        }

        /* Thumbnails selector */
        .ba-thumbs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ba-thumb-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          background: none;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          padding: 14px 18px;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s, background 0.2s;
        }

        .ba-thumb-btn.active {
          border-color: rgba(201,168,76,0.50);
          background-color: rgba(201,168,76,0.06);
        }

        .ba-thumb-btn:hover:not(.active) {
          border-color: rgba(255,255,255,0.15);
          background-color: rgba(255,255,255,0.03);
        }

        .ba-thumb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.2);
          flex-shrink: 0;
          transition: background-color 0.2s;
        }

        .ba-thumb-btn.active .ba-thumb-dot {
          background-color: #C9A84C;
        }

        .ba-thumb-label {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }

        .ba-thumb-btn.active .ba-thumb-label {
          color: #C9A84C;
        }

        /* ── Slider ──────────────────────────────────────────── */
        .ba-slider-wrap {
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.7);
        }

        .ba-slider {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          cursor: col-resize;
          user-select: none;
          touch-action: pan-y;
        }

        .ba-before-clip {
          position: absolute;
          inset: 0;
          transition: clip-path 0s; /* instantáneo al arrastrar */
        }

        .ba-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #FFFFFF;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 2;
        }

        .ba-handle {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 48px;
          height: 48px;
          background-color: #FFFFFF;
          border: 2px solid #C9A84C;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 3;
          pointer-events: none;
          color: #0D0D0D;
        }

        .ba-label {
          position: absolute;
          bottom: 14px;
          font-size: 11px;
          font-weight: 700;
          color: #FFFFFF;
          background-color: rgba(0,0,0,0.65);
          padding: 3px 9px;
          border-radius: 2px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          z-index: 2;
          pointer-events: none;
        }

        .ba-label-before { left: 14px; }
        .ba-label-after  { right: 14px; }

        /* ── TABLET ──────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .ba-inner {
            padding: 0 40px;
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .ba-text .section-h2,
          .ba-text .eyebrow {
            text-align: center;
          }

          .ba-desc {
            text-align: center;
          }

          .ba-thumbs {
            flex-direction: row;
            justify-content: center;
          }
        }

        /* ── MOBILE ──────────────────────────────────────────── */
        @media (max-width: 640px) {
          .ba-section {
            padding: 64px 0;
          }

          .ba-inner {
            padding: 0 20px;
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .ba-text .section-h2,
          .ba-text .eyebrow {
            text-align: center;
          }

          .ba-desc {
            text-align: center;
            font-size: 14px;
          }

          .ba-thumbs {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }

          .ba-thumb-btn {
            flex: 1;
            min-width: 0;
            justify-content: center;
          }

          .ba-thumb-label {
            font-size: 11px;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ba-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ba-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ba-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Our Results"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-h2",
                                    children: [
                                        "See The",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                            lineNumber: 337,
                                            columnNumber: 22
                                        }, this),
                                        "Difference"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "ba-desc",
                                    children: "Every vehicle tells a story before and after our hands touch it. Drag the slider to see the transformation we deliver — from dull and dirty to showroom-clean."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ba-thumbs",
                                    children: PAIRS.map((pair, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `ba-thumb-btn${active === i ? " active" : ""}`,
                                            onClick: ()=>setActive(i),
                                            type: "button",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ba-thumb-dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ba-thumb-label",
                                                    children: pair.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, pair.label, true, {
                                            fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/BeforeAfterSection.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ba-slider-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                                before: PAIRS[active].before,
                                after: PAIRS[active].after
                            }, active, false, {
                                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/BeforeAfterSection.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/BeforeAfterSection.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/BeforeAfterSection.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(BeforeAfterSection, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c1 = BeforeAfterSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "Slider");
__turbopack_context__.k.register(_c1, "BeforeAfterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
/* ─────────────────────────────────────────────────────────────
   TESTIMONIALS CAROUSEL
   - Implementación custom sin dependencias
   - Auto-scroll cada 4s, flechas manuales, loop
   - 4 cards desktop / 2 tablet / 1 mobile
   ───────────────────────────────────────────────────────────── */ const REVIEWS = [
    {
        name: "Nizar Alawamleh",
        date: "2 months ago",
        stars: 5,
        text: "Elias did an amazing job on my truck! Paint correction came out flawless — swirl marks completely gone. Highly recommend Macho Araujo for anyone who cares about their vehicle.",
        initials: "NA",
        color: "#1a73e8"
    },
    {
        name: "Safana Khan",
        date: "3 months ago",
        stars: 5,
        text: "Best detailing service in Fresno! He came to my house, was super professional, and my car looks brand new. The interior deep clean was incredible.",
        initials: "SK",
        color: "#34a853"
    },
    {
        name: "Erasmo da Silva",
        date: "1 month ago",
        stars: 5,
        text: "I've tried a few detailers in the area but Elias is on another level. The ceramic coating he applied looks absolutely stunning. Worth every penny.",
        initials: "ES",
        color: "#ea4335"
    },
    {
        name: "Priscilla",
        date: "4 months ago",
        stars: 5,
        text: "Mobile detailing at its finest. He showed up on time, was very thorough, and left my SUV looking like it just came off the lot. Will definitely book again!",
        initials: "P",
        color: "#9334e6"
    },
    {
        name: "Kevin Driscoll",
        date: "5 months ago",
        stars: 5,
        text: "Macho Araujo detailed our entire fleet of work trucks. Pricing was fair, quality was top-notch, and he worked around our schedule. Great experience.",
        initials: "KD",
        color: "#f5a623"
    },
    {
        name: "Masuflex 99",
        date: "2 months ago",
        stars: 5,
        text: "Came to my place and transformed my car completely. The attention to detail is insane — even got spots I didn't notice. Super professional and friendly.",
        initials: "M",
        color: "#0f9d58"
    },
    {
        name: "Gunshots2",
        date: "6 months ago",
        stars: 5,
        text: "I had a really dirty car after a road trip and Elias made it spotless. Quick, efficient, and the results speak for themselves. 5 stars all day.",
        initials: "G",
        color: "#db4437"
    },
    {
        name: "Alex De La Rotta PA",
        date: "3 months ago",
        stars: 5,
        text: "Professional, punctual, and the results are outstanding. My car has never looked this clean. The paint correction on my BMW was a game-changer.",
        initials: "AL",
        color: "#4285f4"
    },
    {
        name: "Protocol Wizzy",
        date: "1 month ago",
        stars: 5,
        text: "Elias is the real deal. Showed up with all his equipment, worked hard for hours, and the end result was amazing. This is what quality detailing looks like.",
        initials: "PW",
        color: "#ff6d00"
    }
];
function GoogleBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                fill: "#4285F4"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                fill: "#34A853"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",
                fill: "#FBBC05"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                fill: "#EA4335"
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Testimonials.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_c = GoogleBadge;
function Testimonials() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [perView, setPerView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Responsive slides per view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            function update() {
                if (window.innerWidth <= 640) setPerView(1);
                else if (window.innerWidth <= 1024) setPerView(2);
                else setPerView(4);
            }
            update();
            window.addEventListener("resize", update);
            return ({
                "Testimonials.useEffect": ()=>window.removeEventListener("resize", update)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], []);
    const total = REVIEWS.length;
    const maxIndex = total - perView;
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Testimonials.useCallback[next]": ()=>{
            setIndex({
                "Testimonials.useCallback[next]": (i)=>i >= maxIndex ? 0 : i + 1
            }["Testimonials.useCallback[next]"]);
        }
    }["Testimonials.useCallback[next]"], [
        maxIndex
    ]);
    const prev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Testimonials.useCallback[prev]": ()=>{
            setIndex({
                "Testimonials.useCallback[prev]": (i)=>i <= 0 ? maxIndex : i - 1
            }["Testimonials.useCallback[prev]"]);
        }
    }["Testimonials.useCallback[prev]"], [
        maxIndex
    ]);
    // Autoplay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            timerRef.current = setInterval(next, 4000);
            return ({
                "Testimonials.useEffect": ()=>{
                    if (timerRef.current) clearInterval(timerRef.current);
                }
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], [
        next
    ]);
    // Clamp index when perView changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            setIndex({
                "Testimonials.useEffect": (i)=>Math.min(i, Math.max(0, total - perView))
            }["Testimonials.useEffect"]);
        }
    }["Testimonials.useEffect"], [
        perView,
        total
    ]);
    const pct = 100 / perView;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .tc-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
          overflow: hidden;
        }

        .tc-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        .tc-heading {
          text-align: center;
          margin-bottom: 56px;
        }

        /* ── Carousel ───────────────────────────────────────── */
        .tc-viewport {
          overflow: hidden;
        }

        .tc-track {
          display: flex;
          transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tc-slide {
          flex-shrink: 0;
          padding: 0 10px;
          box-sizing: border-box;
        }

        /* ── Card ───────────────────────────────────────────── */
        .tc-card {
          background-color: #161616;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          transition: border-color 0.2s;
        }

        .tc-card:hover {
          border-color: rgba(201,168,76,0.25);
        }

        .tc-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tc-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
          flex-shrink: 0;
        }

        .tc-meta { flex: 1; min-width: 0; }

        .tc-name {
          font-size: 14px;
          font-weight: 600;
          color: #FFFFFF;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tc-date {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          margin-top: 2px;
        }

        .tc-stars {
          display: flex;
          gap: 2px;
        }

        .tc-text {
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
        }

        /* ── Nav ────────────────────────────────────────────── */
        .tc-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }

        .tc-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: none;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
        }

        .tc-btn:hover {
          background-color: #C9A84C;
          border-color: #C9A84C;
          color: #0D0D0D;
        }

        /* ── CTA ────────────────────────────────────────────── */
        .tc-cta {
          text-align: center;
          margin-top: 48px;
        }

        @media (max-width: 1024px) and (min-width: 641px) {
          .tc-inner { padding: 0 40px; }
        }

        @media (max-width: 640px) {
          .tc-section { padding: 64px 0; }
          .tc-inner { padding: 0 20px; }
          .tc-heading { margin-bottom: 40px; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "tc-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tc-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tc-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Testimonials"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Testimonials.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-h2",
                                    children: "Featured Reviews"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Testimonials.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Testimonials.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tc-viewport",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc-track",
                                style: {
                                    transform: `translateX(-${index * pct}%)`
                                },
                                children: REVIEWS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tc-slide",
                                        style: {
                                            width: `${pct}%`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tc-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tc-card-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tc-avatar",
                                                            style: {
                                                                backgroundColor: r.color
                                                            },
                                                            children: r.initials
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/Testimonials.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tc-meta",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "tc-name",
                                                                    children: r.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/Testimonials.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "tc-date",
                                                                    children: r.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/Testimonials.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/Testimonials.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleBadge, {}, void 0, false, {
                                                            fileName: "[project]/components/home/Testimonials.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/Testimonials.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tc-stars",
                                                    children: Array.from({
                                                        length: r.stars
                                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "13",
                                                            height: "13",
                                                            viewBox: "0 0 24 24",
                                                            fill: "#C9A84C",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/home/Testimonials.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/components/home/Testimonials.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/Testimonials.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "tc-text",
                                                    children: r.text
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/Testimonials.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/Testimonials.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this)
                                    }, r.name, false, {
                                        fileName: "[project]/components/home/Testimonials.tsx",
                                        lineNumber: 299,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/Testimonials.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tc-nav",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "tc-btn",
                                    onClick: prev,
                                    "aria-label": "Previous",
                                    type: "button",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "15 18 9 12 15 6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Testimonials.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Testimonials.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Testimonials.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "tc-btn",
                                    onClick: next,
                                    "aria-label": "Next",
                                    type: "button",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "9 18 15 12 9 6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Testimonials.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Testimonials.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Testimonials.tsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Testimonials.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tc-cta",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://g.page/r/machoaraujodetailing/review",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn-outline",
                                children: "Leave Us Your Review"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Testimonials.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/Testimonials.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Testimonials.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/Testimonials.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Testimonials, "fUizBa1pYnoMxxyYczvZuvZ2N5k=");
_c1 = Testimonials;
var _c, _c1;
__turbopack_context__.k.register(_c, "GoogleBadge");
__turbopack_context__.k.register(_c1, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/FAQAccordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION
   - 2 columnas desktop / 1 columna mobile
   - Toggle +/− por item, solo uno abierto a la vez
   ───────────────────────────────────────────────────────────── */ const FAQS = [
    {
        q: "What is mobile car detailing?",
        a: "Mobile car detailing is a professional cleaning and restoration service that comes directly to your location — home, office, or anywhere convenient. We bring all equipment, water, and products needed to deliver a full detail without you ever leaving."
    },
    {
        q: "What services are included in a detailing package?",
        a: "Depending on the package, services range from exterior hand wash, clay bar treatment, and tire dressing (Express) to full interior deep clean, leather conditioning, engine bay cleaning, and paint decontamination (Premium Deluxe). We tailor every detail to your vehicle's needs."
    },
    {
        q: "How does ceramic coating protect a vehicle's paint?",
        a: "Ceramic coating bonds to your paint at a molecular level, creating a hydrophobic, UV-resistant shield that repels water, dirt, and contaminants. It lasts 3+ years with proper maintenance and makes washing your car significantly easier."
    },
    {
        q: "How do I prepare my car for a mobile detailing service?",
        a: "Just make sure there's a clear parking spot with some space around the vehicle. Remove personal belongings from the interior. That's it — we handle everything else, including our own water supply and power if needed."
    },
    {
        q: "How long does paint correction last?",
        a: "A professional paint correction can last several years when properly maintained. We recommend following up with a ceramic coating or paint protection film to lock in results and extend the life of the correction significantly."
    },
    {
        q: "Is paint protection film (PPF) worth the investment?",
        a: "Absolutely. PPF provides the highest level of physical protection against rock chips, road debris, and minor abrasions. It's self-healing under heat and virtually invisible. For new vehicles or high-end cars, PPF is the best long-term investment you can make."
    },
    {
        q: "Do you offer fleet detailing services?",
        a: "Yes — fleet detailing is one of our specialties. We offer scheduled programs (weekly, biweekly, or monthly) for businesses with multiple vehicles. Competitive group rates and flexible scheduling to minimize downtime for your fleet."
    }
];
function AccordionItem({ item, isOpen, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `faq-item${isOpen ? " faq-item-open" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "faq-question",
                onClick: onToggle,
                type: "button",
                "aria-expanded": isOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "faq-q-text",
                        children: item.q
                    }, void 0, false, {
                        fileName: "[project]/components/home/FAQAccordion.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "faq-icon",
                        children: isOpen ? "−" : "+"
                    }, void 0, false, {
                        fileName: "[project]/components/home/FAQAccordion.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/FAQAccordion.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-answer-wrap",
                style: {
                    maxHeight: isOpen ? "300px" : "0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "faq-answer",
                    children: item.a
                }, void 0, false, {
                    fileName: "[project]/components/home/FAQAccordion.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/FAQAccordion.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/FAQAccordion.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = AccordionItem;
function FAQAccordion() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggle = (i)=>setOpenIndex((prev)=>prev === i ? null : i);
    const col1 = FAQS.slice(0, Math.ceil(FAQS.length / 2));
    const col2 = FAQS.slice(Math.ceil(FAQS.length / 2));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .faq-section {
          background-color: #0D0D0D;
          padding: 96px 0;
          border-top: 1px solid rgba(201,168,76,0.12);
        }

        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* ── Heading ────────────────────────────────────────── */
        .faq-heading {
          text-align: center;
          margin-bottom: 64px;
        }

        .faq-heading .section-h2 {
          margin-bottom: 0;
        }

        /* ── Grid 2 columnas ────────────────────────────────── */
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 64px;
          margin-bottom: 64px;
        }

        /* ── Item ───────────────────────────────────────────── */
        .faq-item {
          border-bottom: 1px solid #2A2A2A;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: none;
          border: none;
          padding: 20px 0;
          cursor: pointer;
          text-align: left;
        }

        .faq-q-text {
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.4;
          transition: color 0.2s;
        }

        .faq-item-open .faq-q-text {
          color: #C9A84C;
        }

        .faq-icon {
          font-size: 20px;
          font-weight: 400;
          color: #C9A84C;
          flex-shrink: 0;
          line-height: 1;
          width: 20px;
          text-align: center;
        }

        /* ── Answer ─────────────────────────────────────────── */
        .faq-answer-wrap {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          padding-bottom: 20px;
        }

        /* ── CTA ────────────────────────────────────────────── */
        .faq-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ── TABLET ─────────────────────────────────────────── */
        @media (max-width: 1024px) and (min-width: 641px) {
          .faq-inner {
            padding: 0 40px;
          }

          .faq-grid {
            gap: 0 40px;
          }
        }

        /* ── MOBILE ─────────────────────────────────────────── */
        @media (max-width: 640px) {
          .faq-section {
            padding: 64px 0;
          }

          .faq-inner {
            padding: 0 20px;
          }

          .faq-heading {
            margin-bottom: 40px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 48px;
          }

          .faq-cta {
            flex-direction: column;
            gap: 12px;
          }

          .faq-cta .btn-gold,
          .faq-cta .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/home/FAQAccordion.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "faq-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "faq-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Frequently Asked Questions"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/FAQAccordion.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-h2",
                                    children: [
                                        "Need Help?",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/home/FAQAccordion.tsx",
                                            lineNumber: 220,
                                            columnNumber: 50
                                        }, this),
                                        "We've Got Answers"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/FAQAccordion.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/FAQAccordion.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: col1.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                            item: item,
                                            isOpen: openIndex === i,
                                            onToggle: ()=>toggle(i)
                                        }, item.q, false, {
                                            fileName: "[project]/components/home/FAQAccordion.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/FAQAccordion.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: col2.map((item, i)=>{
                                        const globalIndex = col1.length + i;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                            item: item,
                                            isOpen: openIndex === globalIndex,
                                            onToggle: ()=>toggle(globalIndex)
                                        }, item.q, false, {
                                            fileName: "[project]/components/home/FAQAccordion.tsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/home/FAQAccordion.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/FAQAccordion.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-cta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "btn-gold",
                                    children: "Get A Quote"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/FAQAccordion.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+15595699415",
                                    className: "btn-outline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 A19.5 19.5 0 013.09 10.9 19.79 19.79 0 01.22 2.28 2 2 0 012.22.07h3a2 2 0 012 1.72 c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91 a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45 c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/FAQAccordion.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/FAQAccordion.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        "(559) 569-9415"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/FAQAccordion.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/FAQAccordion.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/FAQAccordion.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/FAQAccordion.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(FAQAccordion, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c1 = FAQAccordion;
var _c, _c1;
__turbopack_context__.k.register(_c, "AccordionItem");
__turbopack_context__.k.register(_c1, "FAQAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_home_0o2-naw._.js.map