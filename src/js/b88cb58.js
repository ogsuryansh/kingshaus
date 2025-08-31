(window.webpackJsonp = window.webpackJsonp || []).push([
    [1, 10, 15], {
        435: function(e, t, l) {
            e.exports = {}
        },
        437: function(e, t, l) {
            "use strict";
            l.r(t);
            l(53);
            var n = l(20),
                o = (l(66), l(95), l(35), l(10), l(48), l(4)),
                r = l(56),
                d = l(36),
                h = o.a.extend({
                    components: {
                        NavigationLink: d.default
                    },
                    props: {
                        carouselConfig: {
                            type: [Object]
                        },
                        activeSlideClass: {
                            type: [String],
                            default: "active"
                        },
                        pagination: {
                            type: [Boolean],
                            default: !1
                        },
                        paginationContainerClass: {
                            type: [String]
                        },
                        paginationDotClass: {
                            type: [String]
                        },
                        onChange: {
                            type: [Function]
                        },
                        onAnimate: {
                            type: [Function]
                        },
                        onDragEnd: {
                            type: [Function]
                        },
                        paginationContent: {
                            type: [Object]
                        }
                    },
                    data: function() {
                        return {
                            slidesPerView: 1,
                            gap: 0,
                            autoplay: !1,
                            loop: !1,
                            loopedSlides: 1,
                            offsets: [],
                            slideElements: [],
                            originalSlideElements: [],
                            wrapper: null,
                            dragger: null,
                            previousSlide: 0,
                            activeSlide: 0,
                            originalActiveSlide: 0,
                            responsiveConfig: null,
                            isEnabled: !1,
                            isAnimating: !1,
                            incompleteDrags: 0,
                            slidesToMove: 0,
                            slidesToMoveOnClick: 1,
                            animationEasing: null,
                            timer: null,
                            timerDelayStart: null
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.setUpDragger()
                        }))
                    },
                    destroyed: function() {
                        this.dragger && this.dragger.length && (this.dragger[0].kill(), window.removeEventListener("resize", this.setUp))
                    },
                    watch: {
                        activeSlide: function() {
                            this.setActiveSlideClass()
                        }
                    },
                    methods: {
                        setConfigBySize: function() {
                            if (this.carouselConfig) {
                                for (var e = 0, t = 0, l = Object.keys(this.carouselConfig); t < l.length; t++) {
                                    var n = l[t];
                                    Object(r.c)().width >= n && (e = Number(n))
                                }
                                this.carouselConfig[e] && (this.responsiveConfig = this.carouselConfig[e])
                            }
                        },
                        setUpDragger: function() {
                            this.wrapper = this.$refs.carousel.querySelector(".gsap-carousel-wrapper"), this.originalSlideElements = this.$refs.carousel.querySelectorAll(".gsap-carousel-slide"), this.slideElements = this.$refs.carousel.querySelectorAll(".gsap-carousel-slide"), this.dragger = this.$Draggable.create(this.wrapper, {
                                type: "x",
                                edgeResistance: 1,
                                snap: this.offsets,
                                bounds: this.$refs.carousel,
                                inertia: !0,
                                onDragEnd: this.animateSlideEnd,
                                onDrag: this.animateSlide,
                                onThrowComplete: this.handleThrowEnd,
                                zIndexBoost: !1,
                                throwResistance: 1e7,
                                allowContextMenu: "dev" === this.$nuxt.$options.$config.ENVIRONMENT
                            }), this.wrapper && this.dragger && this.slideElements || console.error("Unable to create carousel"), this.setUp(), window.addEventListener("resize", this.setUp)
                        },
                        setValues: function() {
                            var e, t, l, n;
                            if (this.setConfigBySize(), this.responsiveConfig) {
                                if (!1 === (null === (e = this.responsiveConfig) || void 0 === e ? void 0 : e.enabled)) return this.disableCarousel(), !1;
                                this.dragger[0].enable(), this.autoplay = this.responsiveConfig.autoplay || this.autoplay, this.loop = this.responsiveConfig.loop || this.loop, this.loopedSlides = 2 * this.originalSlideElements.length, this.gap = this.responsiveConfig.gap || this.gap, this.slidesPerView = this.responsiveConfig.slidesPerView || this.slidesPerView, this.animationEasing = this.responsiveConfig.animationEasing || this.animationEasing, this.slidesToMoveOnClick = this.responsiveConfig.slidesToMoveOnClick || this.slidesToMoveOnClick, this.gap < 0 && (this.gap = 0), this.slidesPerView < 1 && (this.slidesPerView = 1), this.slidesToMoveOnClick < 1 && (this.slidesToMoveOnClick = 1), (null === (t = this.responsiveConfig) || void 0 === t ? void 0 : t.initialSlide) ? (this.originalActiveSlide = null === (l = this.responsiveConfig) || void 0 === l ? void 0 : l.initialSlide, this.goToSlide((null === (n = this.responsiveConfig) || void 0 === n ? void 0 : n.initialSlide) + (this.loop ? this.loopedSlides : 0))) : this.goToSlide(this.loop ? this.loopedSlides : 0)
                            }
                            return this.isEnabled = !0, !0
                        },
                        disableCarousel: function() {
                            var e;
                            null === (e = this.dragger[0]) || void 0 === e || e.disable(), this.$gsap.set(this.slideElements, {
                                clearProps: "all"
                            }), this.$gsap.set(this.wrapper, {
                                clearProps: "all"
                            }), this.isEnabled = !1
                        },
                        setUpLooping: function() {
                            for (var e = [], t = [], l = [], n = 0; n < this.loopedSlides; n++)
                                for (var i = 0; i < this.originalSlideElements.length; i++) t.length < this.loopedSlides && i < this.loopedSlides && t.push(this.originalSlideElements[i]), e.length < this.loopedSlides && i > this.originalSlideElements.length - this.loopedSlides - 1 && e.push(this.originalSlideElements[i]);
                            for (var o = 0; o < e.length; o++) l.push(e[o]);
                            for (var r = 0; r < this.originalSlideElements.length; r++) l.push(this.originalSlideElements[r]);
                            for (var d = 0; d < t.length; d++) l.push(t[d]);
                            this.wrapper.innerHTML = "";
                            for (var h = 0, c = l; h < c.length; h++) {
                                var f = c[h];
                                this.wrapper.innerHTML += f.outerHTML
                            }
                            this.slideElements = this.$refs.carousel.querySelectorAll(".gsap-carousel-slide")
                        },
                        handleLoopedSlideChange: function(e) {
                            var t = this,
                                l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            this.activeSlide < this.loopedSlides && e > this.activeSlide ? (this.incompleteDrags++, this.slidesToMove += e - this.activeSlide + this.loopedSlides, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
                                var i;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.incompleteDrags--, 0 === t.incompleteDrags) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            i = 0;
                                        case 4:
                                            if (!(i < t.slidesToMove)) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 7, new Promise((function(e) {
                                                return setTimeout(e, 10)
                                            }));
                                        case 7:
                                            t.wrapper.prepend(t.slideElements[t.slideElements.length - 1]), t.slideElements = t.$refs.carousel.querySelectorAll(".gsap-carousel-slide"), t.activeSlide++, t.$nextTick((function() {
                                                t.setSizes()
                                            })), t.slidesToMove--;
                                        case 12:
                                            i++, e.next = 4;
                                            break;
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), l)) : this.activeSlide >= this.loopedSlides + this.originalSlideElements.length && (this.incompleteDrags++, this.slidesToMove += this.activeSlide - e, setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
                                var i;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.incompleteDrags--, 0 === t.incompleteDrags) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            i = 0;
                                        case 4:
                                            if (!(i < t.slidesToMove)) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 7, new Promise((function(e) {
                                                return setTimeout(e, 10)
                                            }));
                                        case 7:
                                            t.wrapper.append(t.slideElements[0]), t.slideElements = t.$refs.carousel.querySelectorAll(".gsap-carousel-slide"), t.activeSlide--, t.$nextTick((function() {
                                                t.setSizes()
                                            })), t.slidesToMove--;
                                        case 12:
                                            i++, e.next = 4;
                                            break;
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), l))
                        },
                        setUp: function() {
                            this.setValues() && (this.loop && this.setUpLooping(), this.setSizes(), this.setAutoplay())
                        },
                        setAutoplay: function() {
                            var e = this;
                            this.autoplay && (this.clearAutoplay(), this.timer = setInterval((function() {
                                document.hasFocus() && (e.activeSlide === e.slideElements.length - 1 ? e.goToSlide(0) : e.nextSlide())
                            }), Number(this.autoplay)))
                        },
                        clearAutoplay: function() {
                            this.autoplay && clearInterval(this.timer)
                        },
                        setSizes: function() {
                            this.offsets = [];
                            for (var e = (this.$refs.carousel.clientWidth - this.gap * (this.slidesPerView - 1)) / this.slidesPerView, i = 0; i < this.slideElements.length; i++) {
                                this.$gsap.set(this.slideElements[i], {
                                    width: e,
                                    marginLeft: 0
                                }), i > 0 && this.gap > 0 && this.$gsap.set(this.slideElements[i], {
                                    marginLeft: this.gap
                                });
                                var t = this.slideElements[i].offsetLeft;
                                this.offsets.push(-Math.ceil(t))
                            }
                            this.$gsap.set(this.wrapper, {
                                x: this.offsets[this.getActiveSlide()],
                                width: (e + this.gap) * (this.slideElements.length * this.slidesPerView)
                            }), this.dragger[0].vars.snap = this.offsets
                        },
                        setActiveSlideClass: function() {
                            for (var i = 0; i < this.slideElements.length; i++) i === this.getActiveSlide() ? this.slideElements[i].classList.add(this.activeSlideClass) : this.slideElements[i].classList.remove(this.activeSlideClass)
                        },
                        getActiveSlide: function() {
                            return this.activeSlide
                        },
                        setAnimatePosition: function(e) {
                            this.isEnabled && (this.dragger[0].endDrag(), this.$gsap.killTweensOf(this.wrapper), this.dragger[0].update(), this.$gsap.set(this.wrapper, {
                                x: e
                            }))
                        },
                        animateToCurrentPosition: function() {
                            this.isEnabled && this.$gsap.to(this.wrapper, {
                                x: this.offsets[this.getActiveSlide()]
                            })
                        },
                        animateSlide: function() {
                            this.clearAutoplay(), this.isAnimating = !0, this.onAnimate && this.onAnimate({
                                slides: this.slideElements,
                                activeSlide: this.getActiveSlide(),
                                originalActiveSlide: this.originalActiveSlide,
                                dragger: this.dragger[0],
                                x: this.$gsap.getProperty(this.wrapper, "x"),
                                gap: this.gap
                            })
                        },
                        handleThrowEnd: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dragger";
                            console.log(e), "dragger" === t && this.throwHasEnded(this.previousSlide)
                        },
                        animateSlideEnd: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dragger",
                                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this.setAutoplay(), this.previousSlide = this.getActiveSlide();
                            var n = this.originalActiveSlide;
                            if ("dragger" === t ? (this.activeSlide = this.offsets.indexOf(this.dragger[0].endX), this.loop && (this.activeSlide > this.previousSlide ? n += this.activeSlide - this.previousSlide : this.activeSlide < this.previousSlide && (n -= this.previousSlide - this.activeSlide)), this.dragHasEnded()) : ("prevSlide" === t && (this.loop ? (this.activeSlide = this.activeSlide -= 1, n--, this.handleLoopedSlideChange(this.previousSlide, 500)) : (this.activeSlide = this.activeSlide -= this.slidesToMoveOnClick, n -= this.slidesToMoveOnClick)), "nextSlide" === t && (this.loop ? (this.activeSlide = this.activeSlide += 1, n++, this.handleLoopedSlideChange(this.previousSlide, 500)) : (this.activeSlide = this.activeSlide += this.slidesToMoveOnClick, n += this.slidesToMoveOnClick)), "manual" === t && "number" == typeof l && (this.activeSlide = l)), this.loop || (this.activeSlide = this.activeSlide < 0 ? 0 : this.activeSlide, this.activeSlide = this.activeSlide > this.slideElements.length - 1 ? this.slideElements.length - 1 : this.activeSlide), this.loop && this.loop) {
                                if (n + 1 > this.originalSlideElements.length) {
                                    var o = Math.floor(n / this.originalSlideElements.length);
                                    n -= this.originalSlideElements.length * o
                                } else if (n < -this.originalSlideElements.length) {
                                    var r = Math.floor(Math.abs(n) / this.originalSlideElements.length);
                                    n = this.originalSlideElements.length + (n + this.originalSlideElements.length * r)
                                } else n < 0 && (n = this.originalSlideElements.length + n);
                                this.originalActiveSlide = n
                            }
                            if (this.previousSlide !== this.activeSlide) {
                                if ("dragger" !== t) {
                                    var d = {
                                        x: this.offsets[this.activeSlide],
                                        rotation: .001
                                    };
                                    this.animationEasing && (d.ease = this.animationEasing), this.$gsap.to(this.wrapper, .5, d)
                                }
                                this.slideHasChanged(this.previousSlide)
                            }
                        },
                        throwHasEnded: function(e) {
                            this.isAnimating = !1, this.loop && this.handleLoopedSlideChange(e)
                        },
                        dragHasEnded: function() {
                            this.onDragEnd && this.onDragEnd({
                                slides: this.slideElements,
                                activeSlide: this.activeSlide,
                                originalActiveSlide: this.originalActiveSlide,
                                dragger: this.dragger[0]
                            })
                        },
                        slideHasChanged: function(e) {
                            this.onChange && this.onChange({
                                slides: this.slideElements,
                                activeSlide: this.activeSlide,
                                originalActiveSlide: this.originalActiveSlide,
                                dragger: this.dragger[0]
                            })
                        },
                        nextSlide: function() {
                            this.animateSlideEnd(null, "nextSlide")
                        },
                        prevSlide: function() {
                            this.animateSlideEnd(null, "prevSlide")
                        },
                        goToSlide: function(e) {
                            this.animateSlideEnd(null, "manual", e)
                        }
                    }
                }),
                c = h,
                f = (l(440), l(5)),
                component = Object(f.a)(c, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        ref: "carousel",
                        class: {
                            dragging: e.isAnimating
                        }
                    }, [e._t("default"), e._v(" "), e.pagination && e.isEnabled ? t("div", {
                        staticClass: "gsap-pagination pagination",
                        class: e.paginationContainerClass
                    }, e._l(e.slideElements, (function(l, n) {
                        return t("div", {
                            ref: "paginationDots",
                            refInFor: !0,
                            staticClass: "gsap-pagination-dot pagination__indicator",
                            class: "".concat(e.paginationDotClass).concat(n === e.getActiveSlide() ? " active" : ""),
                            on: {
                                click: function(t) {
                                    return e.goToSlide(n)
                                }
                            }
                        })
                    })), 0) : e._e()], 2)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        440: function(e, t, l) {
            "use strict";
            l(435)
        },
        483: function(e, t, l) {
            e.exports = {}
        },
        516: function(e, t, l) {
            "use strict";
            l(483)
        },
        529: function(e, t, l) {
            e.exports = {}
        },
        544: function(e, t, l) {
            "use strict";
            l.r(t);
            l(53);
            var n = l(4),
                o = l(56),
                r = l(437),
                d = l(545),
                h = l(129),
                c = l(131),
                f = n.a.extend({
                    components: {
                        AnimatableText: c.default,
                        TextBlock: h.default,
                        FeatureCard: d.default,
                        GsapCarousel: r.default
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
                                490: {
                                    slidesPerView: 1.5
                                },
                                660: {
                                    slidesPerView: 2
                                },
                                768: {
                                    slidesPerView: 2.2
                                },
                                1024: {
                                    slidesPerView: 3
                                },
                                1366: {
                                    enabled: !1
                                }
                            },
                            timeline: null
                        }
                    },
                    mounted: function() {
                        Object(o.c)().width >= 1024 && this.animateTimelines()
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
                        animateTimelines: function() {}
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                v = (l(559), l(5)),
                component = Object(v.a)(f, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "features-highlights module",
                        class: e.module.variant ? "features-highlights--".concat(e.module.variant, " module--").concat(e.module.variant) : null,
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "features-highlights__container container"
                    }, [t("div", {
                        staticClass: "features-highlights__chevron-holder"
                    }, [t("svg", {
                        staticClass: "features-highlights__chevron",
                        attrs: {
                            fill: "none",
                            height: "782",
                            viewBox: "0 0 1896 782",
                            width: "1896",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "m688.1 212.455-.243-.162 256.411-211.645258 950.332 780.852258h-513l-436.367-358.026-.318-.262-.318.264-430.283 356.807h-512.92471l686.19271-567.399z",
                            stroke: "#ffffff",
                            opacity: "0.3"
                        }
                    })])]), e._v(" "), e.module.heading ? t("animatable-text", {
                        staticClass: "features-highlights__heading",
                        attrs: {
                            "text-content": e.module.heading.text,
                            variant: e.module.heading.variant
                        }
                    }) : e._e(), e._v(" "), e.module.textBlock && e.module.textBlock.length ? t("text-block", {
                        staticClass: "features-highlights__text-block",
                        attrs: {
                            "text-block": e.module.textBlock
                        }
                    }) : e._e(), e._v(" "), t("div", {
                        ref: "carouselHolder",
                        staticClass: "features-highlights__carousel-outer container"
                    }, [t("div", {
                        staticClass: "features-highlights__carousel-holder"
                    }, [t("gsap-carousel", {
                        ref: "carousel",
                        staticClass: "features-highlights__carousel gsap-carousel",
                        attrs: {
                            "carousel-config": e.carouselConfig,
                            pagination: !0,
                            "on-change": e.onSlideChange,
                            "pagination-container-class": "pagination--white-bullets features-highlights__pagination",
                            "pagination-dot-class": "features-highlights__pagination-indicator"
                        }
                    }, [t("div", {
                        staticClass: "gsap-carousel-wrapper features-highlights__wrapper"
                    }, e._l(e.module.cards, (function(e, l) {
                        return t("feature-card", {
                            key: l,
                            staticClass: "features-highlights__card gsap-carousel-slide",
                            attrs: {
                                card: e
                            }
                        })
                    })), 1)])], 1)])], 1)])
                }), [], !1, null, "5cf29c82", null);
            t.default = component.exports
        },
        545: function(e, t, l) {
            "use strict";
            l.r(t);
            l(27), l(59);
            var n = l(4),
                o = l(36),
                r = l(79),
                d = l(129),
                h = l(56),
                c = l(130),
                f = n.a.extend({
                    components: {
                        TextBlock: d.default,
                        Asset: r.default,
                        NavigationLink: o.default
                    },
                    props: {
                        card: {
                            type: [Object],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            active: !1,
                            touchDevice: !1
                        }
                    },
                    methods: {
                        toggleContent: function() {
                            Object(h.c)().width >= 1024 && (this.active = !this.active)
                        },
                        checkDeviceType: function() {
                            Object(h.c)().width >= 1024 && !Object(c.a)() && (this.touchDevice = !0)
                        }
                    },
                    mounted: function() {
                        this.checkDeviceType()
                    }
                }),
                v = (l(516), l(5)),
                component = Object(v.a)(f, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("div", {
                        staticClass: "feature-card",
                        class: {
                            "feature-card--active": e.active || e.touchDevice
                        },
                        on: {
                            mouseenter: e.toggleContent,
                            mouseleave: e.toggleContent
                        }
                    }, [e.card.asset ? t("asset", {
                        staticClass: "feature-card__asset",
                        attrs: {
                            asset: e.card.asset,
                            "img-attrs": {
                                class: "feature-card__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "feature-card__image-holder",
                            "desktop-picture-class": "feature-card__image-holder--desktop",
                            "mobile-picture-class": "feature-card__image-holder--mobile"
                        }
                    }) : e._e(), e._v(" "), t("div", {
                        staticClass: "feature-card__heading-holder"
                    }, [t("h3", {
                        staticClass: "feature-card__heading",
                        domProps: {
                            textContent: e._s(e.card.heading)
                        }
                    })]), e._v(" "), t("div", {
                        staticClass: "feature-card__detail"
                    }, [t("div", {
                        staticClass: "feature-card__content-holder"
                    }, [t("div", {
                        staticClass: "feature-card__content"
                    }, [e.card.description ? t("text-block", {
                        ref: "featureCardContent",
                        staticClass: "feature-card__description",
                        attrs: {
                            "text-block": e.card.description
                        }
                    }) : e._e()], 1)])])], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        559: function(e, t, l) {
            "use strict";
            l(529)
        }
    }
]);