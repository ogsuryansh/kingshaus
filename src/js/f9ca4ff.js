(window.webpackJsonp = window.webpackJsonp || []).push([
    [52, 9, 12, 16, 25, 29, 34, 36, 38, 49], {
        433: function(t, e, o) {
            t.exports = {}
        },
        434: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = {
                    props: {
                        play: Function,
                        pause: Function,
                        reverse: Function,
                        restart: Function
                    }
                },
                r = (o(436), o(5)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "gsap-controls"
                    }, [e("div", {
                        staticClass: "gsap-controls__button-block button-block"
                    }, [e("div", {
                        staticClass: "gsap-controls__button",
                        on: {
                            click: t.play
                        }
                    }, [t._v("play")]), t._v(" "), e("div", {
                        staticClass: "gsap-controls__button",
                        on: {
                            click: t.pause
                        }
                    }, [t._v("pause")]), t._v(" "), e("div", {
                        staticClass: "gsap-controls__button",
                        on: {
                            click: t.reverse
                        }
                    }, [t._v("reverse")]), t._v(" "), e("div", {
                        staticClass: "gsap-controls__button",
                        on: {
                            click: t.restart
                        }
                    }, [t._v("restart")])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        436: function(t, e, o) {
            "use strict";
            o(433)
        },
        438: function(t, e, o) {
            t.exports = {}
        },
        439: function(t, e, o) {
            t.exports = {}
        },
        441: function(t, e, o) {
            t.exports = {}
        },
        442: function(t, e, o) {
            t.exports = {}
        },
        443: function(t, e, o) {
            t.exports = {}
        },
        451: function(t, e, o) {
            t.exports = {}
        },
        452: function(t, e, o) {
            t.exports = {}
        },
        460: function(t, e, o) {
            "use strict";
            o(438)
        },
        461: function(t, e, o) {
            "use strict";
            o(439)
        },
        462: function(t, e, o) {
            "use strict";
            o(441)
        },
        463: function(t, e, o) {
            "use strict";
            o(442)
        },
        464: function(t, e, o) {
            "use strict";
            o(443)
        },
        468: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(4),
                r = o(30),
                l = o(130),
                c = o(131),
                d = o(79),
                m = o(434),
                h = n.a.extend({
                    components: {
                        GsapControls: m.default,
                        Asset: d.default,
                        AnimatableText: c.default
                    },
                    props: {
                        module: {
                            type: [Object],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            timeline: null
                        }
                    },
                    methods: {
                        scrollToSection: function(t) {
                            this.$scrollSmoother.scrollTo(t, !0, "top 90")
                        },
                        animateTimelines: function() {
                            this.animateContainerTimeline(), this.pinAsset()
                        },
                        animateFirstLoadTimelines: function() {
                            this.animateFirstLoadContainerTimeline(), this.pinAsset()
                        },
                        animateContainerTimeline: function() {
                            var t = this.$refs.module;
                            this.timeline = r.b.timeline({
                                scrollTrigger: {
                                    trigger: t,
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(t.querySelectorAll(".standard-hero__asset"), {
                                clipPath: "inset(100% 0% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "inOut",
                                duration: .6
                            }, "+=.4").fromTo(t.querySelectorAll(".standard-hero__image"), {
                                translateY: 0
                            }, {
                                translateY: -50,
                                ease: "inOut",
                                duration: .6
                            }, "<").fromTo(t.querySelectorAll(".standard-hero__heading, .standard-hero__scroll-button"), {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "inOut",
                                duration: .6
                            }, "<")
                        },
                        animateFirstLoadContainerTimeline: function() {
                            var t = this.$refs.module;
                            this.timeline = r.b.timeline({
                                scrollTrigger: {
                                    trigger: t,
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(t.querySelectorAll(".standard-hero__asset"), {
                                clipPath: "inset(100% 0% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "inOut",
                                duration: .6
                            }, "+=1.3").fromTo(t.querySelectorAll(".standard-hero__image"), {
                                translateY: 0
                            }, {
                                translateY: -50,
                                ease: "inOut",
                                duration: .6
                            }, "<").fromTo(t.querySelectorAll(".standard-hero__heading, .standard-hero__scroll-button"), {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "inOut",
                                duration: .6
                            }, "<")
                        },
                        pinAsset: function() {
                            if (Object(l.a)()) {
                                var t = this.$refs.module,
                                    e = t.querySelector(".standard-hero__asset");
                                this.timeline = r.b.timeline({
                                    scrollTrigger: {
                                        trigger: t,
                                        start: "top top",
                                        end: "bottom top",
                                        pinSpacing: !1,
                                        pin: e
                                    }
                                })
                            }
                        }
                    },
                    mounted: function() {
                        this.$store.state.appData.showLoadingComponent ? (this.animateFirstLoadTimelines(), console.log()) : this.animateTimelines()
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                _ = h,
                f = (o(460), o(5)),
                component = Object(f.a)(_, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        ref: "module",
                        staticClass: "standard-hero module hero",
                        attrs: {
                            id: t.module.id ? t.module.id : null
                        }
                    }, [e("div", {
                        staticClass: "standard-hero__container container"
                    }, [e("h1", {
                        staticClass: "standard-hero__heading",
                        domProps: {
                            textContent: t._s(t.module.heading)
                        }
                    }), t._v(" "), e("animatable-text", {
                        staticClass: "standard-hero__tagline",
                        attrs: {
                            "text-content": t.module.tagline.animatedText,
                            variant: t.module.tagline.variant
                        }
                    }), t._v(" "), e("asset", {
                        staticClass: "standard-hero__asset",
                        attrs: {
                            asset: t.module.asset,
                            "img-attrs": {
                                class: "standard-hero__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "standard-hero__image-holder",
                            "desktop-picture-class": "standard-hero__image-holder--desktop",
                            "mobile-picture-class": "standard-hero__image-holder--mobile",
                            "video-class": "standard-hero__video",
                            "desktop-video-class": "standard-hero__video--desktop",
                            "mobile-video-class": "standard-hero__video--mobile"
                        }
                    }), t._v(" "), t.module.scrollLink ? e("div", {
                        ref: "scrollButton",
                        staticClass: "standard-hero__scroll-button",
                        on: {
                            click: function(e) {
                                return t.scrollToSection("#".concat(t.module.scrollLink))
                            }
                        }
                    }, [e("svg", {
                        staticClass: "standard-hero__arrow-icon",
                        attrs: {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("path", {
                        staticClass: "standard-hero__arrow-chevron",
                        attrs: {
                            d: "M17 8L9 16L1 8",
                            stroke: "white",
                            "stroke-width": "2"
                        }
                    }), t._v(" "), e("path", {
                        staticClass: "standard-hero__arrow-line",
                        attrs: {
                            d: "M9.17407 1.56519L9.00016 16",
                            stroke: "white",
                            "stroke-width": "2"
                        }
                    })])]) : t._e()], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        469: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(4),
                r = o(79),
                l = o(207),
                c = o(209),
                d = o(56),
                m = o(434),
                h = n.a.extend({
                    components: {
                        GsapControls: m.default,
                        Heading: c.default,
                        ContentArea: l.default,
                        Asset: r.default
                    },
                    props: {
                        module: {
                            type: [Object],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            timeline: null,
                            addDataSpeed: !1
                        }
                    },
                    beforeMount: function() {
                        Object(d.c)().width >= 768 && (this.addDataSpeed = !0)
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                _ = (o(461), o(5)),
                component = Object(_.a)(h, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        ref: "module",
                        staticClass: "tiled-asset-content module",
                        attrs: {
                            id: t.module.id ? t.module.id : null
                        }
                    }, [e("div", {
                        staticClass: "tiled-asset-content__container container"
                    }, [e("div", {
                        staticClass: "tiled-asset-content__assets"
                    }, [e("asset", {
                        staticClass: "tiled-asset-content__asset tiled-asset-content__asset--1",
                        attrs: {
                            asset: t.module.assets[0],
                            "img-attrs": {
                                class: "tiled-asset-content__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "tiled-asset-content__image-holder",
                            "desktop-picture-class": "tiled-asset-content__image-holder--desktop",
                            "mobile-picture-class": "tiled-asset-content__image-holder--mobile",
                            "video-class": "tiled-asset-content__video",
                            "desktop-video-class": "tiled-asset-content__video--desktop",
                            "mobile-video-class": "tiled-asset-content__video--mobile",
                            parallax: t.module.assets[0].parallax,
                            "data-speed": !0 === t.addDataSpeed ? "1.1" : null
                        }
                    }), t._v(" "), e("asset", {
                        staticClass: "tiled-asset-content__asset tiled-asset-content__asset--2",
                        attrs: {
                            asset: t.module.assets[1],
                            "img-attrs": {
                                class: "tiled-asset-content__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "tiled-asset-content__image-holder",
                            "desktop-picture-class": "tiled-asset-content__image-holder--desktop",
                            "mobile-picture-class": "tiled-asset-content__image-holder--mobile",
                            "video-class": "tiled-asset-content__video",
                            "desktop-video-class": "tiled-asset-content__video--desktop",
                            "mobile-video-class": "tiled-asset-content__video--mobile",
                            parallax: t.module.assets[0].parallax
                        }
                    })], 1), t._v(" "), e("content-area", {
                        staticClass: "tiled-asset-content__content-area",
                        attrs: {
                            "content-area": t.module.contentArea,
                            heading: t.module.heading,
                            "data-speed": !0 === t.addDataSpeed ? "0.9" : null
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        470: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(4),
                r = o(207),
                l = n.a.extend({
                    components: {
                        ContentArea: r.default
                    },
                    props: {
                        module: {
                            type: [Object],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            timeline: null
                        }
                    },
                    methods: {},
                    mounted: function() {},
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                c = (o(462), o(5)),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        ref: "module",
                        staticClass: "tagline-content module",
                        class: t.module.backgroundColour ? "module--".concat(t.module.backgroundColour) : null,
                        attrs: {
                            id: t.module.id ? t.module.id : null
                        }
                    }, [e("div", {
                        staticClass: "tagline-content__container container"
                    }, [e("h2", {
                        staticClass: "tagline-content__tagline",
                        domProps: {
                            innerHTML: t._s(t.module.tagline)
                        }
                    }), t._v(" "), e("content-area", {
                        staticClass: "tagline-content__content-area",
                        attrs: {
                            "content-area": t.module.contentArea
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        471: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(4).a.extend({
                    props: {},
                    beforeDestroy: function() {}
                }),
                r = (o(463), o(5)),
                component = Object(r.a)(n, (function() {
                    var t = this._self._c;
                    this._self._setupProxy;
                    return t("div")
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        472: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(4),
                r = o(79),
                l = n.a.extend({
                    components: {
                        Asset: r.default
                    },
                    props: {
                        card: {
                            type: [Object],
                            required: !0
                        }
                    },
                    beforeDestroy: function() {}
                }),
                c = (o(464), o(5)),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("div", {
                        staticClass: "tabbed-assets-card"
                    }, [e("asset", {
                        staticClass: "tabbed-assets-card__asset",
                        attrs: {
                            asset: t.card.icon,
                            "img-attrs": {
                                class: "tabbed-assets-card__image"
                            },
                            "picture-class": "tabbed-assets-card__image-holder"
                        }
                    }), t._v(" "), e("h3", {
                        staticClass: "tabbed-assets-card__heading",
                        domProps: {
                            textContent: t._s(t.card.heading)
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "tabbed-assets-card__text",
                        domProps: {
                            textContent: t._s(t.card.text)
                        }
                    })], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        480: function(t, e, o) {
            "use strict";
            o(451)
        },
        481: function(t, e, o) {
            t.exports = {}
        },
        482: function(t, e, o) {
            t.exports = {}
        },
        484: function(t, e, o) {
            "use strict";
            o(452)
        },
        502: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(4),
                r = o(129),
                l = o(471),
                c = n.a.extend({
                    components: {
                        PlusSign: l.default,
                        TextBlock: r.default
                    },
                    props: {
                        accordion: {
                            type: [Array],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            activeItem: 0
                        }
                    },
                    methods: {
                        toggleContentItem: function(t) {
                            this.activeItem = t
                        }
                    }
                }),
                d = (o(480), o(5)),
                component = Object(d.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("dl", {
                        staticClass: "accordion"
                    }, t._l(t.accordion, (function(o, n) {
                        return e("div", {
                            key: n,
                            ref: "accordionTrigger",
                            refInFor: !0,
                            staticClass: "accordion__item",
                            class: {
                                "accordion__item--active": n === t.activeItem
                            },
                            on: {
                                click: function(e) {
                                    return t.toggleContentItem(n)
                                }
                            }
                        }, [o.heading ? e("dt", {
                            staticClass: "accordion__term"
                        }, [e("span", {
                            staticClass: "accordion__term-text",
                            domProps: {
                                textContent: t._s(o.heading)
                            }
                        }), t._v(" "), e("svg", {
                            staticClass: "accordion__icon",
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "40",
                                height: "40",
                                viewBox: "0 0 40 40",
                                fill: "none"
                            }
                        }, [e("path", {
                            staticClass: "accordion__icon-path",
                            attrs: {
                                d: "M19.1667 20.8333H10V19.1667H19.1667V10H20.8333V19.1667H30V20.8333H20.8333V30H19.1667V20.8333Z"
                            }
                        })])]) : t._e(), t._v(" "), e("dd", {
                            staticClass: "accordion__detail"
                        }, [e("div", {
                            staticClass: "accordion__content-holder"
                        }, [e("div", {
                            staticClass: "accordion__content"
                        }, [o.text ? e("text-block", {
                            ref: "accordionContent",
                            refInFor: !0,
                            staticClass: "accordion__text",
                            attrs: {
                                "text-block": o.text
                            }
                        }) : t._e()], 1)])])])
                    })), 0)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        503: function(t, e, o) {
            "use strict";
            o.r(e);
            o(53);
            var n = o(4),
                r = o(56),
                l = o(130),
                c = o(79),
                d = o(437),
                m = o(472),
                h = o(131),
                _ = n.a.extend({
                    components: {
                        AnimatableText: h.default,
                        TabbedAssetsCard: m.default,
                        GsapCarousel: d.default,
                        Asset: c.default
                    },
                    props: {
                        module: {
                            type: [Object],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            activeSlide: 0,
                            carouselConfig: {
                                0: {
                                    slidesPerView: 1
                                },
                                1024: {
                                    enabled: !1
                                }
                            }
                        }
                    },
                    methods: {
                        isLastSlide: function() {
                            return !(!this.$refs.carousel || !this.$refs.carousel.offsets) && this.activeSlide === this.$refs.carousel.offsets.length - 1
                        },
                        nextSlide: function() {
                            this.$refs.carousel.nextSlide()
                        },
                        prevSlide: function() {
                            this.$refs.carousel.prevSlide()
                        },
                        onSlideChange: function(t) {
                            this.activeSlide = t.activeSlide
                        },
                        setActiveElements: function(t, e) {
                            if (Object(r.c)().width >= 1024) {
                                if (!Object(l.a)() && "mouseover" === t.type) return;
                                this.activeSlide = e
                            }
                        }
                    },
                    mounted: function() {},
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                f = (o(484), o(5)),
                component = Object(f.a)(_, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        ref: "module",
                        staticClass: "tabbed-assets module",
                        class: t.module.variant ? "features-highlights--".concat(t.module.variant, " module--").concat(t.module.variant) : null,
                        attrs: {
                            id: t.module.id ? t.module.id : null
                        }
                    }, [e("div", {
                        staticClass: "tabbed-assets__container container"
                    }, [t.module.heading ? e("animatable-text", {
                        staticClass: "tabbed-assets__heading",
                        attrs: {
                            "text-content": t.module.heading.text,
                            variant: t.module.heading.variant
                        }
                    }) : t._e(), t._v(" "), t._l(t.module.slides, (function(o, n) {
                        return e("asset", {
                            key: n,
                            staticClass: "tabbed-assets__asset",
                            class: {
                                "tabbed-assets__asset--active": n === t.activeSlide
                            },
                            attrs: {
                                asset: o.asset,
                                "img-attrs": {
                                    class: "tabbed-assets__image"
                                },
                                "mobile-img-attrs": {},
                                "desktop-img-attrs": {},
                                "picture-class": "tabbed-assets__image-holder",
                                "desktop-picture-class": "tabbed-assets__image-holder--desktop",
                                "mobile-picture-class": "tabbed-assets__image-holder--mobile",
                                "video-class": "tabbed-assets__video",
                                "desktop-video-class": "tabbed-assets__video--desktop",
                                "mobile-video-class": "tabbed-assets__video--mobile"
                            }
                        })
                    })), t._v(" "), e("div", {
                        ref: "carouselHolder",
                        staticClass: "tabbed-assets__carousel-outer container"
                    }, [e("div", {
                        staticClass: "tabbed-assets__carousel-holder"
                    }, [e("gsap-carousel", {
                        ref: "carousel",
                        staticClass: "tabbed-assets__carousel gsap-carousel",
                        attrs: {
                            "carousel-config": t.carouselConfig,
                            pagination: !0,
                            "on-change": t.onSlideChange,
                            "pagination-container-class": "pagination--engineered tabbed-assets__pagination",
                            "pagination-dot-class": "tabbed-assets__pagination-indicator"
                        }
                    }, [e("div", {
                        staticClass: "gsap-carousel-wrapper tabbed-assets__wrapper"
                    }, t._l(t.module.slides, (function(o, n) {
                        return e("tabbed-assets-card", {
                            key: n,
                            staticClass: "tabbed-assets__card gsap-carousel-slide",
                            class: {
                                active: t.activeSlide === n
                            },
                            attrs: {
                                card: o.card
                            },
                            nativeOn: {
                                mouseover: function(e) {
                                    return t.setActiveElements(e, n)
                                },
                                click: function(e) {
                                    return t.setActiveElements(e, n)
                                }
                            }
                        })
                    })), 1)])], 1)])], 2)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        514: function(t, e, o) {
            "use strict";
            o(481)
        },
        515: function(t, e, o) {
            "use strict";
            o(482)
        },
        542: function(t, e, o) {
            "use strict";
            o.r(e);
            o(53);
            var n = o(4),
                r = o(207),
                l = o(79),
                c = o(129),
                d = o(434),
                m = o(56),
                h = o(502),
                _ = n.a.extend({
                    components: {
                        Accordion: h.default,
                        GsapControls: d.default,
                        TextBlock: c.default,
                        Asset: l.default,
                        ContentArea: r.default
                    },
                    props: {
                        module: {
                            type: [Object],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            timeline: null
                        }
                    },
                    mounted: function() {
                        Object(m.c)().width >= 1024 && this.animateTimelines()
                    },
                    methods: {
                        animateTimelines: function() {
                            if (this.module.variant) switch (this.module.variant) {
                                case "home":
                                    this.animateVariant1Timeline();
                                    break;
                                case "inner":
                                    this.animateVariant2Timeline();
                                    break;
                                case void 0:
                                    this.animateVariant1Timeline()
                            } else this.animateVariant1Timeline()
                        },
                        animateVariant1Timeline: function() {
                            var t = this.$refs.module;
                            this.timeline = this.$gsap.timeline({
                                scrollTrigger: {
                                    trigger: t,
                                    start: "center bottom",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(t.querySelector(".content-accordion-asset__content-area"), {
                                opacity: 0,
                                x: 50
                            }, {
                                opacity: 1,
                                x: 0,
                                ease: "inOut",
                                duration: .8
                            }).fromTo(t.querySelector(".content-accordion-asset__accordion"), {
                                opacity: 0,
                                x: 50
                            }, {
                                opacity: 1,
                                x: 0,
                                ease: "inOut",
                                duration: .8
                            }, "<").fromTo(t.querySelector(".content-accordion-asset__image-holder"), {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "inOut",
                                duration: .8
                            }, "<+.4").fromTo(t.querySelector(".content-accordion-asset__gradient-video"), {
                                opacity: 0,
                                clipPath: "inset(0 0 0 0)"
                            }, {
                                clipPath: "inset(0 0 calc(100% - 100px) 0)",
                                opacity: 1,
                                ease: "inOut",
                                duration: .8
                            }, "<")
                        },
                        animateVariant2Timeline: function() {
                            var t = this.$refs.module;
                            this.timeline = this.$gsap.timeline({
                                scrollTrigger: {
                                    trigger: t,
                                    start: "center bottom",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(t.querySelector(".content-accordion-asset__content-area"), {
                                opacity: 0,
                                x: 50
                            }, {
                                opacity: 1,
                                x: 0,
                                ease: "inOut",
                                duration: .8
                            }).fromTo(t.querySelector(".content-accordion-asset__accordion"), {
                                opacity: 0,
                                x: 50
                            }, {
                                opacity: 1,
                                x: 0,
                                ease: "inOut",
                                duration: .8
                            }, "<").fromTo(t.querySelector(".content-accordion-asset__image-holder"), {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "inOut",
                                duration: .8
                            }, "<+.4")
                        }
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                f = _,
                v = (o(514), o(5)),
                component = Object(v.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        ref: "module",
                        staticClass: "content-accordion-asset module",
                        class: t.module.variant ? "content-accordion-asset--".concat(t.module.variant, " module--").concat(t.module.variant) : null,
                        attrs: {
                            id: t.module.id ? t.module.id : null
                        }
                    }, [e("div", {
                        staticClass: "content-accordion-asset__container container"
                    }, [e("asset", {
                        staticClass: "content-accordion-asset__asset",
                        attrs: {
                            asset: t.module.asset,
                            "img-attrs": {
                                class: "content-accordion-asset__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "content-accordion-asset__image-holder",
                            "desktop-picture-class": "content-accordion-asset__image-holder--desktop",
                            "mobile-picture-class": "content-accordion-asset__image-holder--mobile",
                            "video-class": "content-accordion-asset__video",
                            "desktop-video-class": "content-accordion-asset__video--desktop",
                            "mobile-video-class": "content-accordion-asset__video--mobile"
                        }
                    }), t._v(" "), e("content-area", {
                        staticClass: "content-accordion-asset__content-area",
                        attrs: {
                            "content-area": t.module.contentArea,
                            heading: t.module.heading
                        }
                    }), t._v(" "), e("accordion", {
                        staticClass: "content-accordion-asset__accordion",
                        class: t.module.variant ? "accordion--".concat(t.module.variant) : null,
                        attrs: {
                            accordion: t.module.accordion
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        543: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(4),
                r = o(30),
                l = o(129),
                c = n.a.extend({
                    components: {
                        TextBlock: l.default
                    },
                    props: {
                        module: {
                            type: [Object],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            timeline: null
                        }
                    },
                    methods: {
                        animateTimelines: function() {
                            this.chartLineAnimationTimeline()
                        },
                        chartLineAnimationTimeline: function() {
                            var t = this.$refs.module,
                                e = this.$refs.chart;
                            this.timeline = r.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "bottom 90%",
                                    end: "top center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(t.querySelector(".callout-chart__line--1"), {
                                clipPath: "inset(0% 100% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "none"
                            }).fromTo(t.querySelector(".callout-chart__line--2"), {
                                clipPath: "inset(0% 100% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "none"
                            }).fromTo(t.querySelector(".callout-chart__line--3"), {
                                clipPath: "inset(0% 100% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "none"
                            })
                        }
                    },
                    mounted: function() {
                        this.animateTimelines()
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                d = c,
                m = (o(515), o(5)),
                component = Object(m.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("section", {
                        ref: "module",
                        staticClass: "callout-chart module",
                        attrs: {
                            id: t.module.id ? t.module.id : null
                        }
                    }, [e("div", {
                        staticClass: "callout-chart__container container"
                    }, [e("h2", {
                        staticClass: "callout-chart__heading",
                        domProps: {
                            textContent: t._s(t.module.heading)
                        }
                    }), t._v(" "), e("text-block", {
                        staticClass: "callout-chart__text-block",
                        attrs: {
                            "text-block": t.module.textBlock,
                            alignment: "centre"
                        }
                    }), t._v(" "), e("div", {
                        ref: "chart",
                        staticClass: "callout-chart__chart"
                    }, [e("div", {
                        staticClass: "callout-chart__element callout-chart__element--1"
                    }, [e("svg", {
                        staticClass: "callout-chart__point",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "6",
                            height: "6",
                            viewBox: "0 0 6 6",
                            fill: "none"
                        }
                    }, [e("circle", {
                        attrs: {
                            cx: "3",
                            cy: "3",
                            r: "3",
                            fill: "#354D43"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "callout-chart__line callout-chart__line--1"
                    }), t._v(" "), e("p", {
                        staticClass: "callout-chart__text"
                    }, [t._v("0m")])]), t._v(" "), e("div", {
                        staticClass: "callout-chart__element callout-chart__element--2"
                    }, [e("svg", {
                        staticClass: "callout-chart__point",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "6",
                            height: "6",
                            viewBox: "0 0 6 6",
                            fill: "none"
                        }
                    }, [e("circle", {
                        attrs: {
                            cx: "3",
                            cy: "3",
                            r: "3",
                            fill: "#354D43"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "callout-chart__line callout-chart__line--2"
                    }), t._v(" "), e("p", {
                        staticClass: "callout-chart__text"
                    }, [t._v("6m")])]), t._v(" "), e("div", {
                        staticClass: "callout-chart__element callout-chart__element--3"
                    }, [e("svg", {
                        staticClass: "callout-chart__point",
                        attrs: {
                            width: "6",
                            height: "10",
                            viewBox: "0 0 6 10",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M 1 1 L 5 5",
                            stroke: "black",
                            "stroke-width": "1",
                            "stroke-linecap": "round"
                        }
                    }), t._v(" "), e("path", {
                        attrs: {
                            d: "M 1 9 L 5 5",
                            stroke: "black",
                            "stroke-width": "1",
                            "stroke-linecap": "round"
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "callout-chart__line callout-chart__line--3"
                    }), t._v(" "), e("p", {
                        staticClass: "callout-chart__text"
                    }, [t._v("12m")])])]), t._v(" "), t._m(0)], 1)])
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("p", {
                        staticClass: "callout-chart__legend"
                    }, [e("span", {
                        staticClass: "callout-chart__legend-text callout-chart__legend-text--kingshaus"
                    }, [t._v("Kingshaus")]), t._v(" "), e("span", {
                        staticClass: "callout-chart__legend-text callout-chart__legend-text--vs"
                    }, [t._v("vs")]), t._v(" "), e("span", {
                        staticClass: "callout-chart__legend-text callout-chart__legend-text--traditional"
                    }, [t._v("Traditional")])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        577: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(4),
                r = o(208),
                l = o(90),
                c = o(468),
                d = o(470),
                m = o(469),
                h = o(542),
                _ = o(543),
                f = o(544),
                v = o(503),
                y = n.a.extend({
                    components: {
                        TabbedAssets: v.default,
                        FeaturesHighlights: f.default,
                        CalloutChart: _.default,
                        TiledAssetContent: m.default,
                        TaglineContent: d.default,
                        StandardHero: c.default,
                        ContentAccordionAsset: h.default
                    },
                    data: function() {
                        return {
                            hero: {
                                heading: "Build smarter",
                                tagline: {
                                    animatedText: "A better approach to building homes",
                                    variant: "standard-hero"
                                },
                                asset: {
                                    type: "asset_image_BlockType",
                                    image: [{
                                        src: "/images/pages/build-smarter/hero/1-d.jpg",
                                        alt: "a white, flat-roofed, Mediterranean-style villa with a swimming pool shot from above",
                                        loading: "eager"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/build-smarter/hero/1-m.jpg",
                                        alt: "a white, flat-roofed, Mediterranean-style villa with a swimming pool shot from above",
                                        loading: "eager"
                                    }]
                                },
                                scrollLink: "partner-with-us"
                            },
                            taglineContent: {
                                id: "partner-with-us",
                                backgroundColour: "white",
                                tagline: "We pre-construct our homes offsite",
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>We build homes offsite in quality-controlled environments to save valuable resources, including time, energy, and manpower.</p><p>It allows us to maximise efficiency and deliver energy efficient homes at the highest quality in under six months, with minimal wastage.</p>"
                                }, {
                                    type: "buttonBlock",
                                    buttons: [{
                                        link: {
                                            url: "/contact/",
                                            text: "Partner with us"
                                        },
                                        type: "link-green"
                                    }]
                                }]
                            },
                            contentAccordionAssetLight: {
                                variant: "white",
                                heading: [{
                                    type: "h2",
                                    text: "We manage every aspect of homebuilding"
                                }],
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>From planning to final handover, we manage turnkey home construction at the highest international standards. This end-to-end control means we guarantee price, product quality and delivery time.</p>"
                                }],
                                accordion: [{
                                    heading: "Design & Planning",
                                    text: "From planning and designing one villa to entire residential developments, we partner with leading international architects."
                                }, {
                                    heading: "Offsite production",
                                    text: "We build villas, townhouses and four-story apartment buildings using modular and frame-based, structural platforms."
                                }, {
                                    heading: "Logistics",
                                    text: "From our facilities in Sweden, and soon also in the UAE, we manage every aspect of shipping and logistics."
                                }, {
                                    heading: "Onsite assembly",
                                    text: "Our skilled engineers assemble the modules onsite quickly and efficiently, with far less labour required than traditional construction methods."
                                }, {
                                    heading: "Completion & Delivery",
                                    text: "From the finest interior finishes to kitchens and landscaping, we have everything covered."
                                }],
                                asset: {
                                    type: "asset_image_BlockType",
                                    image: [{
                                        src: "/images/pages/build-smarter/accordion/1-d.jpg",
                                        alt: "a person working in a factory"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/build-smarter/accordion/1-m.jpg",
                                        alt: "a person working in a factory"
                                    }]
                                }
                            },
                            calloutChart: {
                                heading: "The right balance between speed, quality and cost",
                                textBlock: "You no longer need to compromise between speed and quality, or even cost. We deliver the highest-quality homes in only four to six months. That’s over twice as fast as traditional construction methods. And the costs are practically the same."
                            },
                            contentAccordionAssetDark: {
                                variant: "dark",
                                heading: [{
                                    type: "h2",
                                    text: "Panelized or modular"
                                }],
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>We produce houses from two different platforms. Flat modules for single family homes and volumetric modules for apartment buildings.</p>"
                                }],
                                accordion: [{
                                    heading: "Panelized",
                                    text: "Our multilayered panels for two-storey villas and townhouses are produced offsite, then transported flat and assembled onsite."
                                }, {
                                    heading: "Modular",
                                    text: "Using box type modules we can build townhouses and apartment buildings of up to four storeys, quickly and efficiently."
                                }],
                                asset: {
                                    type: "asset_image_BlockType",
                                    image: [{
                                        src: "/images/pages/build-smarter/accordion/2-d.jpg",
                                        alt: "people working in a factory"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/build-smarter/accordion/2-m.jpg",
                                        alt: "people working in a factory"
                                    }]
                                }
                            },
                            features: {
                                variant: "dark",
                                heading: {
                                    text: 'Renewable<br role="presentation">resource',
                                    variant: "h2"
                                },
                                textBlock: "Our Swedish pinewood is a renewable resource and fully certified by the Forest Stewardship Council.",
                                cards: [{
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/build-smarter/features/1-d.jpg",
                                            alt: "exterior of a Kingshaus home"
                                        }]
                                    },
                                    heading: "Strong",
                                    description: "<p>Wood is lightweight with a high strength-to-weight ratio. It can be treated to further enhance its resistance to environmental factors.</p>"
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/build-smarter/features/2-d.jpg",
                                            alt: "exterior of a Kingshaus home"
                                        }]
                                    },
                                    heading: "Versatile",
                                    description: "<p>Wood is a versatile material. It is easier to make alterations to the building in the future, if needed.</p>"
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/build-smarter/features/3-d.jpg",
                                            alt: "interior of a kingshaus home"
                                        }]
                                    },
                                    heading: "Safe",
                                    description: "<p>Our wooden frames are well-protected to ensure they maintain their load-bearing capacity and stability in the event of a fire.</p>"
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/build-smarter/features/4-d.jpg",
                                            alt: "interior of a kingshaus home"
                                        }]
                                    },
                                    heading: "Energy-efficient",
                                    description: "<p>Wood saves energy during construction. It is also an excellent insulator and does not retain heat or cold, so our homes also save energy over their lifetime. </p>"
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/build-smarter/features/5-d.jpg",
                                            alt: "placeholder"
                                        }]
                                    },
                                    heading: "Sustainable",
                                    description: "<p>Trees absorb carbon dioxide through photosynthesis during growth. Building with wood traps carbon and helps to counteract the greenhouse effect. </p>"
                                }]
                            },
                            tiledAssetContent: {
                                heading: [{
                                    type: "h2",
                                    text: "The future of home construction"
                                }],
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>Our technologically advanced facilities in Sweden can produce around 500 villas, townhouses, or apartment buildings each year.</p><p>Our semi-automated production lines manufacture structural elements as modules, including walls, beams, and roofing. New facilities will soon be added in Dubai.</p>"
                                }, {
                                    type: "buttonBlock",
                                    buttons: [{
                                        link: {
                                            url: "/contact/",
                                            text: "Work with us"
                                        },
                                        type: "link-green"
                                    }]
                                }],
                                assets: [{
                                    type: "asset_image_BlockType",
                                    image: [{
                                        src: "/images/pages/build-smarter/tiled-assets/1-d.jpg",
                                        alt: "machines in a factory",
                                        loading: "eager"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/build-smarter/tiled-assets/1-d.jpg",
                                        alt: "machines in a factory",
                                        loading: "eager"
                                    }]
                                }, {
                                    type: "asset_image_BlockType",
                                    image: [{
                                        src: "/images/pages/build-smarter/tiled-assets/2-d.jpg",
                                        alt: "pre-fabricated panels",
                                        loading: "eager"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/build-smarter/tiled-assets/2-d.jpg",
                                        alt: "pre-fabricated panels",
                                        loading: "eager"
                                    }]
                                }]
                            },
                            tabbedAssets: {
                                variant: "dark",
                                heading: {
                                    text: "Engineered to perfection",
                                    variant: "h2"
                                },
                                slides: [{
                                    asset: {
                                        type: "asset_video_BlockType",
                                        video: [{
                                            type: "video/mp4",
                                            src: "https://cms.brand.kingshaus.ryze.uk/uploads/videos/1-d.mp4",
                                            preload: !0
                                        }]
                                    },
                                    card: {
                                        icon: {
                                            type: "asset_image_BlockType",
                                            image: [{
                                                src: "/images/icons/frame.svg",
                                                alt: "frame icon",
                                                loading: "eager"
                                            }]
                                        },
                                        heading: "Frame",
                                        text: "The exterior walls consist of sturdy wooden joists and dimensionally stable boards."
                                    }
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/build-smarter/tabbed-assets/2.jpg",
                                            alt: "someone adding a block of insulation into a timber frame",
                                            loading: "eager"
                                        }]
                                    },
                                    card: {
                                        icon: {
                                            type: "asset_image_BlockType",
                                            image: [{
                                                src: "/images/icons/insulation.svg",
                                                alt: "insulation icon",
                                                loading: "eager"
                                            }]
                                        },
                                        heading: "Insulation",
                                        text: "Multiple layers of insulation ensure homes always stay warm or cool, as required."
                                    }
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/build-smarter/tabbed-assets/3.jpg",
                                            alt: "a bright bedroom decorated predominantly in white",
                                            loading: "eager"
                                        }]
                                    },
                                    card: {
                                        icon: {
                                            type: "asset_image_BlockType",
                                            image: [{
                                                src: "/images/icons/ventilation.svg",
                                                alt: "ventilation icon",
                                                loading: "eager"
                                            }]
                                        },
                                        heading: "Ventilation",
                                        text: "Protective vapour barriers allow for breathability and a better indoor climate."
                                    }
                                }]
                            }
                        }
                    },
                    head: function() {
                        var t = "Build Smarter — Kingshaus",
                            e = this.$config.APP_ROOT + this.$img("/social-card/social-card-new.jpg", {
                                width: 1200,
                                height: 630,
                                quality: 80
                            }),
                            o = this.$config.APP_ROOT;
                        return {
                            bodyAttrs: {
                                class: ""
                            },
                            title: Object(l.b)(t),
                            meta: Object(r.a)(Object(l.b)(""), Object(l.b)(t), Object(l.b)(""), e, Object(l.b)(t), Object(l.b)(""), e),
                            link: [{
                                hid: "canonical",
                                rel: "canonical",
                                href: o
                            }]
                        }
                    },
                    methods: {},
                    mounted: function() {
                        this.$setActivatedSections(), this.$scrollSmoother.parseEffects(), this.$scrollSmoother.refresh()
                    },
                    beforeDestroy: function() {
                        this.$scrollSmoother.killEffects()
                    }
                }),
                x = o(5),
                component = Object(x.a)(y, (function() {
                    var t = this,
                        e = t._self._c;
                    t._self._setupProxy;
                    return e("main", {
                        staticClass: "flow"
                    }, [e("standard-hero", {
                        attrs: {
                            module: t.hero
                        }
                    }), t._v(" "), e("tagline-content", {
                        attrs: {
                            module: t.taglineContent
                        }
                    }), t._v(" "), e("content-accordion-asset", {
                        attrs: {
                            module: t.contentAccordionAssetLight
                        }
                    }), t._v(" "), e("callout-chart", {
                        attrs: {
                            module: t.calloutChart
                        }
                    }), t._v(" "), e("tabbed-assets", {
                        attrs: {
                            module: t.tabbedAssets
                        }
                    }), t._v(" "), e("content-accordion-asset", {
                        attrs: {
                            module: t.contentAccordionAssetDark
                        }
                    }), t._v(" "), e("features-highlights", {
                        attrs: {
                            module: t.features
                        }
                    }), t._v(" "), e("tiled-asset-content", {
                        attrs: {
                            module: t.tiledAssetContent
                        }
                    })], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        }
    }
]);