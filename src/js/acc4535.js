(window.webpackJsonp = window.webpackJsonp || []).push([
    [56, 12, 16, 27, 34, 36, 38], {
        433: function(e, t, o) {
            e.exports = {}
        },
        434: function(e, t, o) {
            "use strict";
            o.r(t);
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
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "gsap-controls"
                    }, [t("div", {
                        staticClass: "gsap-controls__button-block button-block"
                    }, [t("div", {
                        staticClass: "gsap-controls__button",
                        on: {
                            click: e.play
                        }
                    }, [e._v("play")]), e._v(" "), t("div", {
                        staticClass: "gsap-controls__button",
                        on: {
                            click: e.pause
                        }
                    }, [e._v("pause")]), e._v(" "), t("div", {
                        staticClass: "gsap-controls__button",
                        on: {
                            click: e.reverse
                        }
                    }, [e._v("reverse")]), e._v(" "), t("div", {
                        staticClass: "gsap-controls__button",
                        on: {
                            click: e.restart
                        }
                    }, [e._v("restart")])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        436: function(e, t, o) {
            "use strict";
            o(433)
        },
        438: function(e, t, o) {
            e.exports = {}
        },
        439: function(e, t, o) {
            e.exports = {}
        },
        441: function(e, t, o) {
            e.exports = {}
        },
        443: function(e, t, o) {
            e.exports = {}
        },
        450: function(e, t, o) {
            e.exports = {}
        },
        452: function(e, t, o) {
            e.exports = {}
        },
        460: function(e, t, o) {
            "use strict";
            o(438)
        },
        461: function(e, t, o) {
            "use strict";
            o(439)
        },
        462: function(e, t, o) {
            "use strict";
            o(441)
        },
        464: function(e, t, o) {
            "use strict";
            o(443)
        },
        468: function(e, t, o) {
            "use strict";
            o.r(t);
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
                        scrollToSection: function(e) {
                            this.$scrollSmoother.scrollTo(e, !0, "top 90")
                        },
                        animateTimelines: function() {
                            this.animateContainerTimeline(), this.pinAsset()
                        },
                        animateFirstLoadTimelines: function() {
                            this.animateFirstLoadContainerTimeline(), this.pinAsset()
                        },
                        animateContainerTimeline: function() {
                            var e = this.$refs.module;
                            this.timeline = r.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(e.querySelectorAll(".standard-hero__asset"), {
                                clipPath: "inset(100% 0% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "inOut",
                                duration: .6
                            }, "+=.4").fromTo(e.querySelectorAll(".standard-hero__image"), {
                                translateY: 0
                            }, {
                                translateY: -50,
                                ease: "inOut",
                                duration: .6
                            }, "<").fromTo(e.querySelectorAll(".standard-hero__heading, .standard-hero__scroll-button"), {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "inOut",
                                duration: .6
                            }, "<")
                        },
                        animateFirstLoadContainerTimeline: function() {
                            var e = this.$refs.module;
                            this.timeline = r.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(e.querySelectorAll(".standard-hero__asset"), {
                                clipPath: "inset(100% 0% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "inOut",
                                duration: .6
                            }, "+=1.3").fromTo(e.querySelectorAll(".standard-hero__image"), {
                                translateY: 0
                            }, {
                                translateY: -50,
                                ease: "inOut",
                                duration: .6
                            }, "<").fromTo(e.querySelectorAll(".standard-hero__heading, .standard-hero__scroll-button"), {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "inOut",
                                duration: .6
                            }, "<")
                        },
                        pinAsset: function() {
                            if (Object(l.a)()) {
                                var e = this.$refs.module,
                                    t = e.querySelector(".standard-hero__asset");
                                this.timeline = r.b.timeline({
                                    scrollTrigger: {
                                        trigger: e,
                                        start: "top top",
                                        end: "bottom top",
                                        pinSpacing: !1,
                                        pin: t
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
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "standard-hero module hero",
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "standard-hero__container container"
                    }, [t("h1", {
                        staticClass: "standard-hero__heading",
                        domProps: {
                            textContent: e._s(e.module.heading)
                        }
                    }), e._v(" "), t("animatable-text", {
                        staticClass: "standard-hero__tagline",
                        attrs: {
                            "text-content": e.module.tagline.animatedText,
                            variant: e.module.tagline.variant
                        }
                    }), e._v(" "), t("asset", {
                        staticClass: "standard-hero__asset",
                        attrs: {
                            asset: e.module.asset,
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
                    }), e._v(" "), e.module.scrollLink ? t("div", {
                        ref: "scrollButton",
                        staticClass: "standard-hero__scroll-button",
                        on: {
                            click: function(t) {
                                return e.scrollToSection("#".concat(e.module.scrollLink))
                            }
                        }
                    }, [t("svg", {
                        staticClass: "standard-hero__arrow-icon",
                        attrs: {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        staticClass: "standard-hero__arrow-chevron",
                        attrs: {
                            d: "M17 8L9 16L1 8",
                            stroke: "white",
                            "stroke-width": "2"
                        }
                    }), e._v(" "), t("path", {
                        staticClass: "standard-hero__arrow-line",
                        attrs: {
                            d: "M9.17407 1.56519L9.00016 16",
                            stroke: "white",
                            "stroke-width": "2"
                        }
                    })])]) : e._e()], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        469: function(e, t, o) {
            "use strict";
            o.r(t);
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
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "tiled-asset-content module",
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "tiled-asset-content__container container"
                    }, [t("div", {
                        staticClass: "tiled-asset-content__assets"
                    }, [t("asset", {
                        staticClass: "tiled-asset-content__asset tiled-asset-content__asset--1",
                        attrs: {
                            asset: e.module.assets[0],
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
                            parallax: e.module.assets[0].parallax,
                            "data-speed": !0 === e.addDataSpeed ? "1.1" : null
                        }
                    }), e._v(" "), t("asset", {
                        staticClass: "tiled-asset-content__asset tiled-asset-content__asset--2",
                        attrs: {
                            asset: e.module.assets[1],
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
                            parallax: e.module.assets[0].parallax
                        }
                    })], 1), e._v(" "), t("content-area", {
                        staticClass: "tiled-asset-content__content-area",
                        attrs: {
                            "content-area": e.module.contentArea,
                            heading: e.module.heading,
                            "data-speed": !0 === e.addDataSpeed ? "0.9" : null
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        470: function(e, t, o) {
            "use strict";
            o.r(t);
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
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "tagline-content module",
                        class: e.module.backgroundColour ? "module--".concat(e.module.backgroundColour) : null,
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "tagline-content__container container"
                    }, [t("h2", {
                        staticClass: "tagline-content__tagline",
                        domProps: {
                            innerHTML: e._s(e.module.tagline)
                        }
                    }), e._v(" "), t("content-area", {
                        staticClass: "tagline-content__content-area",
                        attrs: {
                            "content-area": e.module.contentArea
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        472: function(e, t, o) {
            "use strict";
            o.r(t);
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
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "tabbed-assets-card"
                    }, [t("asset", {
                        staticClass: "tabbed-assets-card__asset",
                        attrs: {
                            asset: e.card.icon,
                            "img-attrs": {
                                class: "tabbed-assets-card__image"
                            },
                            "picture-class": "tabbed-assets-card__image-holder"
                        }
                    }), e._v(" "), t("h3", {
                        staticClass: "tabbed-assets-card__heading",
                        domProps: {
                            textContent: e._s(e.card.heading)
                        }
                    }), e._v(" "), t("p", {
                        staticClass: "tabbed-assets-card__text",
                        domProps: {
                            textContent: e._s(e.card.text)
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        477: function(e, t, o) {
            "use strict";
            o(450)
        },
        484: function(e, t, o) {
            "use strict";
            o(452)
        },
        501: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(4),
                r = o(207),
                l = o(162),
                c = n.a.extend({
                    components: {
                        ScrollButton: l.default,
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
                d = (o(477), o(5)),
                component = Object(d.a)(c, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "centred-content module",
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "centred-content__container container"
                    }, [t("content-area", {
                        staticClass: "centred-content__content-area",
                        attrs: {
                            "content-area": e.module.contentArea,
                            heading: e.module.heading,
                            alignment: "centre"
                        }
                    }), e._v(" "), e.module.scrollButton && e.module.scrollButton.target && e.module.scrollButton.target.length ? t("scroll-button", {
                        staticClass: "centred-content__scroll-button",
                        attrs: {
                            "scroll-target": e.module.scrollButton.target,
                            colour: e.module.scrollButton.colour && e.module.scrollButton.colour.length ? e.module.scrollButton.colour : "black"
                        }
                    }) : e._e()], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        503: function(e, t, o) {
            "use strict";
            o.r(t);
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
                        onSlideChange: function(e) {
                            this.activeSlide = e.activeSlide
                        },
                        setActiveElements: function(e, t) {
                            if (Object(r.c)().width >= 1024) {
                                if (!Object(l.a)() && "mouseover" === e.type) return;
                                this.activeSlide = t
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
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "tabbed-assets module",
                        class: e.module.variant ? "features-highlights--".concat(e.module.variant, " module--").concat(e.module.variant) : null,
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "tabbed-assets__container container"
                    }, [e.module.heading ? t("animatable-text", {
                        staticClass: "tabbed-assets__heading",
                        attrs: {
                            "text-content": e.module.heading.text,
                            variant: e.module.heading.variant
                        }
                    }) : e._e(), e._v(" "), e._l(e.module.slides, (function(o, n) {
                        return t("asset", {
                            key: n,
                            staticClass: "tabbed-assets__asset",
                            class: {
                                "tabbed-assets__asset--active": n === e.activeSlide
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
                    })), e._v(" "), t("div", {
                        ref: "carouselHolder",
                        staticClass: "tabbed-assets__carousel-outer container"
                    }, [t("div", {
                        staticClass: "tabbed-assets__carousel-holder"
                    }, [t("gsap-carousel", {
                        ref: "carousel",
                        staticClass: "tabbed-assets__carousel gsap-carousel",
                        attrs: {
                            "carousel-config": e.carouselConfig,
                            pagination: !0,
                            "on-change": e.onSlideChange,
                            "pagination-container-class": "pagination--engineered tabbed-assets__pagination",
                            "pagination-dot-class": "tabbed-assets__pagination-indicator"
                        }
                    }, [t("div", {
                        staticClass: "gsap-carousel-wrapper tabbed-assets__wrapper"
                    }, e._l(e.module.slides, (function(o, n) {
                        return t("tabbed-assets-card", {
                            key: n,
                            staticClass: "tabbed-assets__card gsap-carousel-slide",
                            class: {
                                active: e.activeSlide === n
                            },
                            attrs: {
                                card: o.card
                            },
                            nativeOn: {
                                mouseover: function(t) {
                                    return e.setActiveElements(t, n)
                                },
                                click: function(t) {
                                    return e.setActiveElements(t, n)
                                }
                            }
                        })
                    })), 1)])], 1)])], 2)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        579: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(4),
                r = o(208),
                l = o(90),
                c = o(468),
                d = o(470),
                m = o(469),
                h = o(501),
                _ = o(544),
                f = o(503),
                v = n.a.extend({
                    components: {
                        TabbedAssets: f.default,
                        FeaturesHighlights: _.default,
                        CentredContent: h.default,
                        TiledAssetContent: m.default,
                        TaglineContent: d.default,
                        StandardHero: c.default
                    },
                    data: function() {
                        return {
                            hero: {
                                heading: "Sustainability",
                                tagline: {
                                    animatedText: "Fresh thinking from the ground up",
                                    variant: "standard-hero"
                                },
                                asset: {
                                    type: "asset_image_BlockType",
                                    image: [{
                                        src: "/images/pages/sustainability/hero/1-d.jpg",
                                        alt: "a dense forest shot from above",
                                        loading: "eager"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/sustainability/hero/1-m.jpg",
                                        alt: "a dense forest shot from above",
                                        loading: "eager"
                                    }]
                                },
                                scrollLink: "new-standards"
                            },
                            taglineContent: {
                                id: "new-standards",
                                backgroundColour: "white",
                                tagline: "New standards for responsible living",
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>We create homes that not only save energy but also actively contribute to a carbon-neutral future, setting new standards for environmentally responsible living.</p><p>Our homes are better sealed and insulated to reduce the energy needed for cooling and heating. Smart building controls manage cooling and lighting more efficiently, while our roofs feature integrated solar panels to generate power directly in each home.</p>"
                                }]
                            },
                            features: {
                                variant: "dark",
                                heading: {
                                    text: 'Eco-friendly<br role="presentation">by design',
                                    variant: "h2"
                                },
                                textBlock: "Our homes are built with efficiency and sustainability in mind.",
                                cards: [{
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/sustainability/features/1-d.jpg",
                                            alt: "exterior of a Kingshaus home"
                                        }]
                                    },
                                    heading: "Resource-conscious design",
                                    description: "<p>We create homes that harness innovation to do more with fewer valuable resources.</p>"
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/sustainability/features/2-d.jpg",
                                            alt: "exterior of a Kingshaus home"
                                        }]
                                    },
                                    heading: "Energy-saving construction",
                                    description: "<p>Our homes capture and store CO2 in their timber frames so we can lower the carbon footprint of home construction by over 80%.</p>"
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/sustainability/features/3-d.jpg",
                                            alt: "interior of a kingshaus home"
                                        }]
                                    },
                                    heading: "Energy-efficient homes",
                                    description: "<p>Our homes use around 40% less energy over their lifetime than a traditional house built from brick or concrete.</p>"
                                }]
                            },
                            centredContent: {
                                heading: [{
                                    type: "h2",
                                    text: "We source from responsibly-managed, FSC&#8209;certified forests"
                                }],
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>Forest Stewardship Council (FSC) certified forests adhere to strict environmental, social, and economic standards. The wood we source is all FSC&#8209;certified. The certification confirms that the forest is being managed in a way that preserves biological diversity and benefits the lives of local people and workers, while ensuring it sustains economic viability.</p>"
                                }, {
                                    type: "logoBlock",
                                    logos: [{
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/logos/fsc.png",
                                            alt: "FSC logo",
                                            loading: "eager"
                                        }]
                                    }]
                                }],
                                scrollButton: {
                                    target: "net-zero",
                                    colour: "black"
                                }
                            },
                            tiledAssetContent: {
                                id: "net-zero",
                                heading: [{
                                    type: "h2",
                                    text: "Supporting Net Zero by 2050"
                                }],
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>The UAE is the first MENA nation to commit to net-zero emissions by 2050. This aligns with the Paris Agreement goal of reducing greenhouse gas, and the Principles of the 50, which will transform The Emirates into the world’s most dynamic economy.</p><p>Our construction methods can help provide many of the new homes needed for regional growth, while enabling the UAE’s ambitious CO2 reduction targets.</p>"
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
                                        src: "/images/pages/sustainability/tiled-assets/1-d.jpg",
                                        alt: "a person looking at a kingshaus home",
                                        loading: "eager"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/sustainability/tiled-assets/1-d.jpg",
                                        alt: "a person looking at a kingshaus home",
                                        loading: "eager"
                                    }]
                                }, {
                                    type: "asset_image_BlockType",
                                    image: [{
                                        src: "/images/pages/sustainability/tiled-assets/2-d.jpg",
                                        alt: "a turquoise sea lapping onto a sandy beach",
                                        loading: "eager"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/sustainability/tiled-assets/2-d.jpg",
                                        alt: "a turquoise sea lapping onto a sandy beach",
                                        loading: "eager"
                                    }]
                                }]
                            },
                            tabbedAssets: {
                                variant: "dark",
                                heading: {
                                    text: "Sustainable by nature",
                                    variant: "h2"
                                },
                                slides: [{
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/sustainability/tabbed-assets/1.jpg",
                                            alt: "a pile of logs",
                                            loading: "eager"
                                        }]
                                    },
                                    card: {
                                        icon: {
                                            type: "asset_image_BlockType",
                                            image: [{
                                                src: "/images/icons/renewable.svg",
                                                alt: "renewable icon",
                                                loading: "eager"
                                            }]
                                        },
                                        heading: "Renewable",
                                        text: "Wood is a fantastic and fully renewable resource."
                                    }
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/sustainability/tabbed-assets/2.jpg",
                                            alt: 'a misty forest overlaid with text that reads "A tree absorbs approximately 25kg of CO2 per year"',
                                            loading: "eager"
                                        }]
                                    },
                                    card: {
                                        icon: {
                                            type: "asset_image_BlockType",
                                            image: [{
                                                src: "/images/icons/co2-binding.svg",
                                                alt: "co2-binding icon",
                                                loading: "eager"
                                            }]
                                        },
                                        heading: "CO2 binding",
                                        text: "Trees bind atmospheric carbon through photosynthesis as they grow."
                                    }
                                }, {
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/sustainability/tabbed-assets/3.jpg",
                                            alt: 'the sky with some cloud overlaid with two icons and some text. first icon is a pile of timber with the text "x1 550 x 135 Softwood glulam". second icon is a brick with the text "x5 400 x 250 reinforced concrete". finally some additional text that says "Material energy requirements for equivalent beams in common materials"',
                                            loading: "eager"
                                        }]
                                    },
                                    card: {
                                        icon: {
                                            type: "asset_image_BlockType",
                                            image: [{
                                                src: "/images/icons/energy-efficient.svg",
                                                alt: "Energy-efficient icon",
                                                loading: "eager"
                                            }]
                                        },
                                        heading: "Energy-efficient",
                                        text: "Wood is an excellent insulator that does not retain heat or cold."
                                    }
                                }]
                            }
                        }
                    },
                    head: function() {
                        var e = "Sustainability — Kingshaus",
                            t = this.$config.APP_ROOT + this.$img("/social-card/social-card-new.jpg", {
                                width: 1200,
                                height: 630,
                                quality: 80
                            }),
                            o = this.$config.APP_ROOT;
                        return {
                            bodyAttrs: {
                                class: ""
                            },
                            title: Object(l.b)(e),
                            meta: Object(r.a)(Object(l.b)(""), Object(l.b)(e), Object(l.b)(""), t, Object(l.b)(e), Object(l.b)(""), t),
                            link: [{
                                hid: "canonical",
                                rel: "canonical",
                                href: o
                            }]
                        }
                    },
                    mounted: function() {
                        this.$scrollSmoother.parseEffects(), this.$scrollSmoother.refresh()
                    },
                    beforeDestroy: function() {
                        this.$scrollSmoother.killEffects()
                    }
                }),
                y = o(5),
                component = Object(y.a)(v, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("main", {
                        staticClass: "flow"
                    }, [t("standard-hero", {
                        attrs: {
                            module: e.hero
                        }
                    }), e._v(" "), t("tagline-content", {
                        attrs: {
                            module: e.taglineContent
                        }
                    }), e._v(" "), t("tabbed-assets", {
                        attrs: {
                            module: e.tabbedAssets
                        }
                    }), e._v(" "), t("features-highlights", {
                        attrs: {
                            module: e.features
                        }
                    }), e._v(" "), t("centred-content", {
                        attrs: {
                            module: e.centredContent
                        }
                    }), e._v(" "), t("tiled-asset-content", {
                        attrs: {
                            module: e.tiledAssetContent
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);