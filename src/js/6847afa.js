(window.webpackJsonp = window.webpackJsonp || []).push([
    [54, 15, 17, 21, 22, 26, 30, 31, 32, 36, 37, 39, 40, 41, 42, 43], {
        435: function(e, t, n) {
            e.exports = {}
        },
        437: function(e, t, n) {
            "use strict";
            n.r(t);
            n(53);
            var r = n(20),
                o = (n(66), n(95), n(35), n(10), n(48), n(4)),
                l = n(56),
                c = n(36),
                d = o.a.extend({
                    components: {
                        NavigationLink: c.default
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
                                for (var e = 0, t = 0, n = Object.keys(this.carouselConfig); t < n.length; t++) {
                                    var r = n[t];
                                    Object(l.c)().width >= r && (e = Number(r))
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
                            var e, t, n, r;
                            if (this.setConfigBySize(), this.responsiveConfig) {
                                if (!1 === (null === (e = this.responsiveConfig) || void 0 === e ? void 0 : e.enabled)) return this.disableCarousel(), !1;
                                this.dragger[0].enable(), this.autoplay = this.responsiveConfig.autoplay || this.autoplay, this.loop = this.responsiveConfig.loop || this.loop, this.loopedSlides = 2 * this.originalSlideElements.length, this.gap = this.responsiveConfig.gap || this.gap, this.slidesPerView = this.responsiveConfig.slidesPerView || this.slidesPerView, this.animationEasing = this.responsiveConfig.animationEasing || this.animationEasing, this.slidesToMoveOnClick = this.responsiveConfig.slidesToMoveOnClick || this.slidesToMoveOnClick, this.gap < 0 && (this.gap = 0), this.slidesPerView < 1 && (this.slidesPerView = 1), this.slidesToMoveOnClick < 1 && (this.slidesToMoveOnClick = 1), (null === (t = this.responsiveConfig) || void 0 === t ? void 0 : t.initialSlide) ? (this.originalActiveSlide = null === (n = this.responsiveConfig) || void 0 === n ? void 0 : n.initialSlide, this.goToSlide((null === (r = this.responsiveConfig) || void 0 === r ? void 0 : r.initialSlide) + (this.loop ? this.loopedSlides : 0))) : this.goToSlide(this.loop ? this.loopedSlides : 0)
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
                            for (var e = [], t = [], n = [], r = 0; r < this.loopedSlides; r++)
                                for (var i = 0; i < this.originalSlideElements.length; i++) t.length < this.loopedSlides && i < this.loopedSlides && t.push(this.originalSlideElements[i]), e.length < this.loopedSlides && i > this.originalSlideElements.length - this.loopedSlides - 1 && e.push(this.originalSlideElements[i]);
                            for (var o = 0; o < e.length; o++) n.push(e[o]);
                            for (var l = 0; l < this.originalSlideElements.length; l++) n.push(this.originalSlideElements[l]);
                            for (var c = 0; c < t.length; c++) n.push(t[c]);
                            this.wrapper.innerHTML = "";
                            for (var d = 0, h = n; d < h.length; d++) {
                                var m = h[d];
                                this.wrapper.innerHTML += m.outerHTML
                            }
                            this.slideElements = this.$refs.carousel.querySelectorAll(".gsap-carousel-slide")
                        },
                        handleLoopedSlideChange: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            this.activeSlide < this.loopedSlides && e > this.activeSlide ? (this.incompleteDrags++, this.slidesToMove += e - this.activeSlide + this.loopedSlides, setTimeout(Object(r.a)(regeneratorRuntime.mark((function e() {
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
                            }))), n)) : this.activeSlide >= this.loopedSlides + this.originalSlideElements.length && (this.incompleteDrags++, this.slidesToMove += this.activeSlide - e, setTimeout(Object(r.a)(regeneratorRuntime.mark((function e() {
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
                            }))), n))
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
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            this.setAutoplay(), this.previousSlide = this.getActiveSlide();
                            var r = this.originalActiveSlide;
                            if ("dragger" === t ? (this.activeSlide = this.offsets.indexOf(this.dragger[0].endX), this.loop && (this.activeSlide > this.previousSlide ? r += this.activeSlide - this.previousSlide : this.activeSlide < this.previousSlide && (r -= this.previousSlide - this.activeSlide)), this.dragHasEnded()) : ("prevSlide" === t && (this.loop ? (this.activeSlide = this.activeSlide -= 1, r--, this.handleLoopedSlideChange(this.previousSlide, 500)) : (this.activeSlide = this.activeSlide -= this.slidesToMoveOnClick, r -= this.slidesToMoveOnClick)), "nextSlide" === t && (this.loop ? (this.activeSlide = this.activeSlide += 1, r++, this.handleLoopedSlideChange(this.previousSlide, 500)) : (this.activeSlide = this.activeSlide += this.slidesToMoveOnClick, r += this.slidesToMoveOnClick)), "manual" === t && "number" == typeof n && (this.activeSlide = n)), this.loop || (this.activeSlide = this.activeSlide < 0 ? 0 : this.activeSlide, this.activeSlide = this.activeSlide > this.slideElements.length - 1 ? this.slideElements.length - 1 : this.activeSlide), this.loop && this.loop) {
                                if (r + 1 > this.originalSlideElements.length) {
                                    var o = Math.floor(r / this.originalSlideElements.length);
                                    r -= this.originalSlideElements.length * o
                                } else if (r < -this.originalSlideElements.length) {
                                    var l = Math.floor(Math.abs(r) / this.originalSlideElements.length);
                                    r = this.originalSlideElements.length + (r + this.originalSlideElements.length * l)
                                } else r < 0 && (r = this.originalSlideElements.length + r);
                                this.originalActiveSlide = r
                            }
                            if (this.previousSlide !== this.activeSlide) {
                                if ("dragger" !== t) {
                                    var c = {
                                        x: this.offsets[this.activeSlide],
                                        rotation: .001
                                    };
                                    this.animationEasing && (c.ease = this.animationEasing), this.$gsap.to(this.wrapper, .5, c)
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
                h = d,
                m = (n(440), n(5)),
                component = Object(m.a)(h, (function() {
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
                    }, e._l(e.slideElements, (function(n, r) {
                        return t("div", {
                            ref: "paginationDots",
                            refInFor: !0,
                            staticClass: "gsap-pagination-dot pagination__indicator",
                            class: "".concat(e.paginationDotClass).concat(r === e.getActiveSlide() ? " active" : ""),
                            on: {
                                click: function(t) {
                                    return e.goToSlide(r)
                                }
                            }
                        })
                    })), 0) : e._e()], 2)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        440: function(e, t, n) {
            "use strict";
            n(435)
        },
        441: function(e, t, n) {
            e.exports = {}
        },
        445: function(e, t, n) {
            e.exports = {}
        },
        446: function(e, t, n) {
            e.exports = {}
        },
        454: function(e, t, n) {
            e.exports = {}
        },
        455: function(e, t, n) {
            e.exports = {}
        },
        456: function(e, t, n) {
            e.exports = {}
        },
        457: function(e, t, n) {
            e.exports = {}
        },
        458: function(e, t, n) {
            e.exports = {}
        },
        459: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4).a.extend({
                    props: {},
                    beforeDestroy: function() {}
                }),
                o = (n(466), n(5)),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("svg", {
                        attrs: {
                            width: "90",
                            height: "90",
                            viewBox: "0 0 90 90",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("circle", {
                        attrs: {
                            cx: "45",
                            cy: "45",
                            r: "45",
                            fill: "white"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M41 27L49 27L49 35",
                            stroke: "#354D43",
                            "stroke-width": "2"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M41.6956 34.1304L49 26.9999",
                            stroke: "#354D43",
                            "stroke-width": "2"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M32.8163 45.632C33.2803 45.784 33.6483 46.04 33.9203 46.4C34.1923 46.752 34.3283 47.192 34.3283 47.72C34.3283 48.448 34.0483 49.012 33.4883 49.412C32.9283 49.804 32.1123 50 31.0403 50H26.8643V41.6H30.8003C31.7923 41.6 32.5563 41.796 33.0923 42.188C33.6283 42.572 33.8963 43.104 33.8963 43.784C33.8963 44.2 33.8003 44.568 33.6083 44.888C33.4163 45.208 33.1523 45.456 32.8163 45.632ZM28.4243 42.824V45.14H30.6323C31.1763 45.14 31.5923 45.044 31.8803 44.852C32.1763 44.652 32.3243 44.364 32.3243 43.988C32.3243 43.604 32.1763 43.316 31.8803 43.124C31.5923 42.924 31.1763 42.824 30.6323 42.824H28.4243ZM30.9443 48.776C32.1523 48.776 32.7563 48.372 32.7563 47.564C32.7563 46.756 32.1523 46.352 30.9443 46.352H28.4243V48.776H30.9443ZM39.6052 50.12C38.4452 50.12 37.5412 49.796 36.8932 49.148C36.2452 48.492 35.9212 47.556 35.9212 46.34V41.6H37.4812V46.28C37.4812 47.928 38.1932 48.752 39.6172 48.752C41.0332 48.752 41.7412 47.928 41.7412 46.28V41.6H43.2772V46.34C43.2772 47.556 42.9532 48.492 42.3052 49.148C41.6652 49.796 40.7652 50.12 39.6052 50.12ZM45.462 41.6H47.022V50H45.462V41.6ZM49.294 41.6H50.854V48.68H55.246V50H49.294V41.6ZM56.4776 41.6H60.1496C61.0456 41.6 61.8416 41.776 62.5376 42.128C63.2336 42.472 63.7736 42.964 64.1576 43.604C64.5416 44.236 64.7336 44.968 64.7336 45.8C64.7336 46.632 64.5416 47.368 64.1576 48.008C63.7736 48.64 63.2336 49.132 62.5376 49.484C61.8416 49.828 61.0456 50 60.1496 50H56.4776V41.6ZM60.0776 48.68C60.6936 48.68 61.2336 48.564 61.6976 48.332C62.1696 48.092 62.5296 47.756 62.7776 47.324C63.0336 46.884 63.1616 46.376 63.1616 45.8C63.1616 45.224 63.0336 44.72 62.7776 44.288C62.5296 43.848 62.1696 43.512 61.6976 43.28C61.2336 43.04 60.6936 42.92 60.0776 42.92H58.0376V48.68H60.0776ZM18.8863 62.12C18.2383 62.12 17.6103 62.028 17.0023 61.844C16.4023 61.66 15.9263 61.416 15.5743 61.112L16.1143 59.9C16.4583 60.172 16.8783 60.396 17.3743 60.572C17.8783 60.74 18.3823 60.824 18.8863 60.824C19.5103 60.824 19.9743 60.724 20.2783 60.524C20.5903 60.324 20.7463 60.06 20.7463 59.732C20.7463 59.492 20.6583 59.296 20.4823 59.144C20.3143 58.984 20.0983 58.86 19.8343 58.772C19.5703 58.684 19.2103 58.584 18.7543 58.472C18.1143 58.32 17.5943 58.168 17.1943 58.016C16.8023 57.864 16.4623 57.628 16.1743 57.308C15.8943 56.98 15.7543 56.54 15.7543 55.988C15.7543 55.524 15.8783 55.104 16.1263 54.728C16.3823 54.344 16.7623 54.04 17.2663 53.816C17.7783 53.592 18.4023 53.48 19.1383 53.48C19.6503 53.48 20.1543 53.544 20.6503 53.672C21.1463 53.8 21.5743 53.984 21.9343 54.224L21.4423 55.436C21.0743 55.22 20.6903 55.056 20.2903 54.944C19.8903 54.832 19.5023 54.776 19.1263 54.776C18.5103 54.776 18.0503 54.88 17.7463 55.088C17.4503 55.296 17.3023 55.572 17.3023 55.916C17.3023 56.156 17.3863 56.352 17.5543 56.504C17.7303 56.656 17.9503 56.776 18.2143 56.864C18.4783 56.952 18.8383 57.052 19.2943 57.164C19.9183 57.308 20.4303 57.46 20.8303 57.62C21.2303 57.772 21.5703 58.008 21.8503 58.328C22.1383 58.648 22.2823 59.08 22.2823 59.624C22.2823 60.088 22.1543 60.508 21.8983 60.884C21.6503 61.26 21.2703 61.56 20.7583 61.784C20.2463 62.008 19.6223 62.12 18.8863 62.12ZM31.5452 62L31.5332 56.432L28.7732 61.04H28.0772L25.3172 56.504V62H23.8292V53.6H25.1132L28.4492 59.168L31.7252 53.6H33.0092L33.0212 62H31.5452ZM40.7381 60.056H36.5381L35.7101 62H34.1021L37.8821 53.6H39.4181L43.2101 62H41.5781L40.7381 60.056ZM40.2221 58.832L38.6381 55.16L37.0661 58.832H40.2221ZM49.7744 62L48.0584 59.54C47.9864 59.548 47.8784 59.552 47.7344 59.552H45.8384V62H44.2784V53.6H47.7344C48.4624 53.6 49.0944 53.72 49.6304 53.96C50.1744 54.2 50.5904 54.544 50.8784 54.992C51.1664 55.44 51.3104 55.972 51.3104 56.588C51.3104 57.22 51.1544 57.764 50.8424 58.22C50.5384 58.676 50.0984 59.016 49.5224 59.24L51.4544 62H49.7744ZM49.7384 56.588C49.7384 56.052 49.5624 55.64 49.2104 55.352C48.8584 55.064 48.3424 54.92 47.6624 54.92H45.8384V58.268H47.6624C48.3424 58.268 48.8584 58.124 49.2104 57.836C49.5624 57.54 49.7384 57.124 49.7384 56.588ZM54.6425 54.92H51.8585V53.6H58.9865V54.92H56.2025V62H54.6425V54.92ZM66.4573 60.692V62H60.1573V53.6H66.2893V54.908H61.7173V57.092H65.7733V58.376H61.7173V60.692H66.4573ZM73.6924 62L71.9764 59.54C71.9044 59.548 71.7964 59.552 71.6524 59.552H69.7564V62H68.1964V53.6H71.6524C72.3804 53.6 73.0124 53.72 73.5484 53.96C74.0924 54.2 74.5084 54.544 74.7964 54.992C75.0844 55.44 75.2284 55.972 75.2284 56.588C75.2284 57.22 75.0724 57.764 74.7604 58.22C74.4564 58.676 74.0164 59.016 73.4404 59.24L75.3724 62H73.6924ZM73.6564 56.588C73.6564 56.052 73.4804 55.64 73.1284 55.352C72.7764 55.064 72.2604 54.92 71.5804 54.92H69.7564V58.268H71.5804C72.2604 58.268 72.7764 58.124 73.1284 57.836C73.4804 57.54 73.6564 57.124 73.6564 56.588Z",
                            fill: "#354D43"
                        }
                    })])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        462: function(e, t, n) {
            "use strict";
            n(441)
        },
        466: function(e, t, n) {
            "use strict";
            n(445)
        },
        467: function(e, t, n) {
            "use strict";
            n(446)
        },
        470: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                o = n(207),
                l = r.a.extend({
                    components: {
                        ContentArea: o.default
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
                c = (n(462), n(5)),
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
        474: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4).a.extend({
                    props: {},
                    beforeDestroy: function() {}
                }),
                o = (n(467), n(5)),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("svg", {
                        attrs: {
                            width: "90",
                            height: "90",
                            viewBox: "0 0 90 90",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("circle", {
                        attrs: {
                            cx: "45",
                            cy: "45",
                            r: "45",
                            fill: "white"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M41 27L49 27L49 35",
                            stroke: "#354D43",
                            "stroke-width": "2"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M41.6956 34.1304L49 26.9999",
                            stroke: "#354D43",
                            "stroke-width": "2"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M32.8163 45.632C33.2803 45.784 33.6483 46.04 33.9203 46.4C34.1923 46.752 34.3283 47.192 34.3283 47.72C34.3283 48.448 34.0483 49.012 33.4883 49.412C32.9283 49.804 32.1123 50 31.0403 50H26.8643V41.6H30.8003C31.7923 41.6 32.5563 41.796 33.0923 42.188C33.6283 42.572 33.8963 43.104 33.8963 43.784C33.8963 44.2 33.8003 44.568 33.6083 44.888C33.4163 45.208 33.1523 45.456 32.8163 45.632ZM28.4243 42.824V45.14H30.6323C31.1763 45.14 31.5923 45.044 31.8803 44.852C32.1763 44.652 32.3243 44.364 32.3243 43.988C32.3243 43.604 32.1763 43.316 31.8803 43.124C31.5923 42.924 31.1763 42.824 30.6323 42.824H28.4243ZM30.9443 48.776C32.1523 48.776 32.7563 48.372 32.7563 47.564C32.7563 46.756 32.1523 46.352 30.9443 46.352H28.4243V48.776H30.9443ZM39.6052 50.12C38.4452 50.12 37.5412 49.796 36.8932 49.148C36.2452 48.492 35.9212 47.556 35.9212 46.34V41.6H37.4812V46.28C37.4812 47.928 38.1932 48.752 39.6172 48.752C41.0332 48.752 41.7412 47.928 41.7412 46.28V41.6H43.2772V46.34C43.2772 47.556 42.9532 48.492 42.3052 49.148C41.6652 49.796 40.7652 50.12 39.6052 50.12ZM45.462 41.6H47.022V50H45.462V41.6ZM49.294 41.6H50.854V48.68H55.246V50H49.294V41.6ZM56.4776 41.6H60.1496C61.0456 41.6 61.8416 41.776 62.5376 42.128C63.2336 42.472 63.7736 42.964 64.1576 43.604C64.5416 44.236 64.7336 44.968 64.7336 45.8C64.7336 46.632 64.5416 47.368 64.1576 48.008C63.7736 48.64 63.2336 49.132 62.5376 49.484C61.8416 49.828 61.0456 50 60.1496 50H56.4776V41.6ZM60.0776 48.68C60.6936 48.68 61.2336 48.564 61.6976 48.332C62.1696 48.092 62.5296 47.756 62.7776 47.324C63.0336 46.884 63.1616 46.376 63.1616 45.8C63.1616 45.224 63.0336 44.72 62.7776 44.288C62.5296 43.848 62.1696 43.512 61.6976 43.28C61.2336 43.04 60.6936 42.92 60.0776 42.92H58.0376V48.68H60.0776ZM18.8863 62.12C18.2383 62.12 17.6103 62.028 17.0023 61.844C16.4023 61.66 15.9263 61.416 15.5743 61.112L16.1143 59.9C16.4583 60.172 16.8783 60.396 17.3743 60.572C17.8783 60.74 18.3823 60.824 18.8863 60.824C19.5103 60.824 19.9743 60.724 20.2783 60.524C20.5903 60.324 20.7463 60.06 20.7463 59.732C20.7463 59.492 20.6583 59.296 20.4823 59.144C20.3143 58.984 20.0983 58.86 19.8343 58.772C19.5703 58.684 19.2103 58.584 18.7543 58.472C18.1143 58.32 17.5943 58.168 17.1943 58.016C16.8023 57.864 16.4623 57.628 16.1743 57.308C15.8943 56.98 15.7543 56.54 15.7543 55.988C15.7543 55.524 15.8783 55.104 16.1263 54.728C16.3823 54.344 16.7623 54.04 17.2663 53.816C17.7783 53.592 18.4023 53.48 19.1383 53.48C19.6503 53.48 20.1543 53.544 20.6503 53.672C21.1463 53.8 21.5743 53.984 21.9343 54.224L21.4423 55.436C21.0743 55.22 20.6903 55.056 20.2903 54.944C19.8903 54.832 19.5023 54.776 19.1263 54.776C18.5103 54.776 18.0503 54.88 17.7463 55.088C17.4503 55.296 17.3023 55.572 17.3023 55.916C17.3023 56.156 17.3863 56.352 17.5543 56.504C17.7303 56.656 17.9503 56.776 18.2143 56.864C18.4783 56.952 18.8383 57.052 19.2943 57.164C19.9183 57.308 20.4303 57.46 20.8303 57.62C21.2303 57.772 21.5703 58.008 21.8503 58.328C22.1383 58.648 22.2823 59.08 22.2823 59.624C22.2823 60.088 22.1543 60.508 21.8983 60.884C21.6503 61.26 21.2703 61.56 20.7583 61.784C20.2463 62.008 19.6223 62.12 18.8863 62.12ZM31.5452 62L31.5332 56.432L28.7732 61.04H28.0772L25.3172 56.504V62H23.8292V53.6H25.1132L28.4492 59.168L31.7252 53.6H33.0092L33.0212 62H31.5452ZM40.7381 60.056H36.5381L35.7101 62H34.1021L37.8821 53.6H39.4181L43.2101 62H41.5781L40.7381 60.056ZM40.2221 58.832L38.6381 55.16L37.0661 58.832H40.2221ZM49.7744 62L48.0584 59.54C47.9864 59.548 47.8784 59.552 47.7344 59.552H45.8384V62H44.2784V53.6H47.7344C48.4624 53.6 49.0944 53.72 49.6304 53.96C50.1744 54.2 50.5904 54.544 50.8784 54.992C51.1664 55.44 51.3104 55.972 51.3104 56.588C51.3104 57.22 51.1544 57.764 50.8424 58.22C50.5384 58.676 50.0984 59.016 49.5224 59.24L51.4544 62H49.7744ZM49.7384 56.588C49.7384 56.052 49.5624 55.64 49.2104 55.352C48.8584 55.064 48.3424 54.92 47.6624 54.92H45.8384V58.268H47.6624C48.3424 58.268 48.8584 58.124 49.2104 57.836C49.5624 57.54 49.7384 57.124 49.7384 56.588ZM54.6425 54.92H51.8585V53.6H58.9865V54.92H56.2025V62H54.6425V54.92ZM66.4573 60.692V62H60.1573V53.6H66.2893V54.908H61.7173V57.092H65.7733V58.376H61.7173V60.692H66.4573ZM73.6924 62L71.9764 59.54C71.9044 59.548 71.7964 59.552 71.6524 59.552H69.7564V62H68.1964V53.6H71.6524C72.3804 53.6 73.0124 53.72 73.5484 53.96C74.0924 54.2 74.5084 54.544 74.7964 54.992C75.0844 55.44 75.2284 55.972 75.2284 56.588C75.2284 57.22 75.0724 57.764 74.7604 58.22C74.4564 58.676 74.0164 59.016 73.4404 59.24L75.3724 62H73.6924ZM73.6564 56.588C73.6564 56.052 73.4804 55.64 73.1284 55.352C72.7764 55.064 72.2604 54.92 71.5804 54.92H69.7564V58.268H71.5804C72.2604 58.268 72.7764 58.124 73.1284 57.836C73.4804 57.54 73.6564 57.124 73.6564 56.588Z",
                            fill: "#354D43"
                        }
                    })])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        489: function(e, t, n) {
            e.exports = {}
        },
        490: function(e, t, n) {
            "use strict";
            n(454)
        },
        491: function(e, t, n) {
            "use strict";
            n(455)
        },
        492: function(e, t, n) {
            "use strict";
            n(456)
        },
        493: function(e, t, n) {
            e.exports = {}
        },
        494: function(e, t, n) {
            e.exports = {}
        },
        495: function(e, t, n) {
            "use strict";
            n(457)
        },
        496: function(e, t, n) {
            e.exports = {}
        },
        497: function(e, t, n) {
            e.exports = {}
        },
        498: function(e, t, n) {
            "use strict";
            n(458)
        },
        499: function(e, t, n) {
            e.exports = {}
        },
        506: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4).a.extend({
                    props: {},
                    beforeDestroy: function() {}
                }),
                o = (n(490), n(5)),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("svg", {
                        attrs: {
                            width: "341",
                            height: "526",
                            viewBox: "0 0 341 526",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M0.25 497.01L3.16 498.66V167.49L0.25 165.84V497.01Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M293.66 1.91L290.75 0.25L0.25 165.84L3.16 167.49L293.66 1.91Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M3.16016 167.49V498.66L293.66 333.07V1.91016L3.16016 167.49ZM212.32 286.71L84.5002 359.57V213.86L212.32 141V286.72V286.71Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M84.4902 356.26L209.41 285.06L212.31 286.71L84.4902 359.57V356.26Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M209.41 142.65L212.32 141L212.31 286.71L209.41 285.06V142.65Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    })])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        507: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4).a.extend({
                    props: {},
                    beforeDestroy: function() {}
                }),
                o = (n(491), n(5)),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("svg", {
                        attrs: {
                            width: "342",
                            height: "526",
                            viewBox: "0 0 342 526",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M33.0107 515.22L35.9207 516.88V185.71L33.0107 184.05V515.22Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M326.421 20.12L323.511 18.46L33.0107 184.05L35.9207 185.71L326.421 20.12Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M35.9209 185.71V516.88L326.421 351.29V20.1201L35.9209 185.71ZM245.081 304.93L117.261 377.79V232.08L245.081 159.22V304.94V304.93Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M117.251 374.47L242.171 303.27L245.071 304.93L117.251 377.78V374.47Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M242.171 160.87L245.081 159.21L245.071 304.93L242.171 303.27V160.87Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    })])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        508: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4).a.extend({
                    props: {},
                    beforeDestroy: function() {}
                }),
                o = (n(492), n(5)),
                component = Object(o.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("svg", {
                        attrs: {
                            width: "341",
                            height: "526",
                            viewBox: "0 0 341 526",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("g", {
                        attrs: {
                            "clip-path": "url(#clip0_642_10265)"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M47.3518 523.5L50.2518 525.15V193.99L47.3418 192.33L47.3518 523.5Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M340.752 28.4002L337.852 26.7402L47.3418 192.33L50.2518 193.99L340.752 28.4002Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M50.252 193.99V525.16L340.752 359.57V28.4004L50.252 193.99ZM259.412 313.21L131.592 386.07V240.36L259.412 167.5V313.22V313.21Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M131.592 382.75L256.502 311.55L259.412 313.21L131.592 386.06V382.75Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    }), e._v(" "), t("path", {
                        attrs: {
                            d: "M256.502 169.15L259.412 167.49V313.21L256.502 311.55V169.15Z",
                            fill: "white",
                            stroke: "#1C1C1B",
                            "stroke-width": "0.5",
                            "stroke-linejoin": "round"
                        }
                    })]), e._v(" "), t("defs", [t("clipPath", {
                        attrs: {
                            id: "clip0_642_10265"
                        }
                    }, [t("rect", {
                        attrs: {
                            width: "340.4",
                            height: "525.4",
                            fill: "white",
                            transform: "translate(0.601562)"
                        }
                    })])])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        509: function(e, t, n) {
            "use strict";
            n.r(t);
            n(69);
            var r = n(4),
                o = n(30),
                l = n(56),
                c = n(130),
                d = n(459),
                h = n(474),
                m = n(79),
                f = n(36),
                v = n(527);
            "undefined" != typeof window && o.b.registerPlugin(v.a);
            var _ = r.a.extend({
                    components: {
                        NavigationLink: f.default,
                        Asset: m.default,
                        ArrowCircleCursorWhite: d.default,
                        ArrowCircleCursorDark: h.default
                    },
                    props: {
                        block: {
                            type: [Object],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            timeline: null,
                            tween: null
                        }
                    },
                    methods: {
                        animateMobileTimelines: function() {
                            this.scrubbedAnimationMobileTimeline()
                        },
                        animateDesktopTimelines: function() {
                            this.autoAnimationLeaveTimeline(), this.autoAnimationEnterTimeline()
                        },
                        animateTimelines: function() {
                            Object(l.c)().width < 768 ? this.animateMobileTimelines() : this.animateDesktopTimelines()
                        },
                        scrubbedAnimationMobileTimeline: function() {
                            var content = this.$refs.overContent;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: content,
                                    start: "top bottom",
                                    end: "top 10%",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(content, {
                                clipPath: "inset(0% 100% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)"
                            })
                        },
                        autoAnimationEnterTimeline: function() {
                            var content = this.$refs.overContent;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: content,
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(content, {
                                clipPath: "inset(0% 100% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: v.a.create("custom", "M0,0 C0.57,0 0.34,1 1,1 "),
                                duration: .6
                            }).fromTo(content.querySelector(".interactive-stat__image"), {
                                x: -200
                            }, {
                                x: -100,
                                ease: "power1.out",
                                duration: 1
                            }, "<")
                        },
                        autoAnimationLeaveTimeline: function() {
                            var content = this.$refs.overContent;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: content,
                                    start: "bottom center",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(content, {
                                clipPath: "inset(0% 0% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 100%)",
                                ease: v.a.create("custom", "M0,0 C0.5,0 0.63,1 1,1 "),
                                duration: .8
                            }).fromTo(content.querySelector(".interactive-stat__image"), {
                                x: -100
                            }, {
                                x: 0,
                                ease: "power4.in",
                                duration: .8
                            }, "<")
                        },
                        hoverAnimationEnter: function() {
                            if (Object(c.a)()) {
                                var content = this.$refs.overContent,
                                    image = this.$refs.image;
                                this.tween = o.b.timeline(), this.tween.fromTo(content, {
                                    clipPath: "inset(0% 100% 0% 0%)"
                                }, {
                                    clipPath: "inset(0% 0% 0% 0%)",
                                    ease: "power4.in",
                                    duration: .8
                                }).fromTo(content.querySelector(".interactive-stat__image"), {
                                    x: -200
                                }, {
                                    x: -100,
                                    ease: "power1.out",
                                    duration: 1.2
                                }, "<"), this.tween.play, console.log(image)
                            }
                        },
                        hoverAnimationLeave: function() {
                            if (Object(c.a)()) {
                                var content = this.$refs.overContent;
                                this.tween = o.b.timeline(), this.tween.fromTo(content, {
                                    clipPath: "inset(0% 0% 0% 0%)"
                                }, {
                                    clipPath: "inset(0% 0% 0% 100%)",
                                    ease: "power4.in",
                                    duration: .8
                                }).fromTo(content.querySelector(".interactive-stat__image"), {
                                    x: -100
                                }, {
                                    x: 0,
                                    ease: "power4.in",
                                    duration: .8
                                }, "<"), this.tween.play
                            }
                        }
                    },
                    mounted: function() {
                        this.animateTimelines()
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                C = (n(495), n(5)),
                component = Object(C.a)(_, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("navigation-link", {
                        ref: "block",
                        staticClass: "interactive-stat",
                        attrs: {
                            link: e.block.link
                        }
                    }, [t("div", {
                        staticClass: "interactive-stat__content interactive-stat__content--under"
                    }, [t("div", {
                        staticClass: "interactive-stat__text-holder"
                    }, [t("p", {
                        staticClass: "interactive-stat__stat",
                        domProps: {
                            textContent: e._s(e.block.stat)
                        }
                    }), e._v(" "), t("p", {
                        staticClass: "interactive-stat__explainer",
                        domProps: {
                            textContent: e._s(e.block.explainer)
                        }
                    }), e._v(" "), t("arrow-circle-cursor-dark", {
                        staticClass: "interactive-stat__arrow"
                    })], 1), e._v(" "), t("asset", {
                        staticClass: "interactive-stat__asset",
                        attrs: {
                            asset: e.block.asset,
                            "img-attrs": {
                                class: "interactive-stat__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "interactive-stat__image-holder",
                            "desktop-picture-class": "interactive-stat__image-holder--desktop",
                            "mobile-picture-class": "interactive-stat__image-holder--mobile",
                            "video-class": "interactive-stat__video",
                            "desktop-video-class": "interactive-stat__video--desktop",
                            "mobile-video-class": "interactive-stat__video--mobile"
                        }
                    })], 1), e._v(" "), t("div", {
                        ref: "overContent",
                        staticClass: "interactive-stat__content interactive-stat__content--over"
                    }, [t("div", {
                        staticClass: "interactive-stat__text-holder"
                    }, [t("p", {
                        staticClass: "interactive-stat__stat",
                        domProps: {
                            textContent: e._s(e.block.stat)
                        }
                    }), e._v(" "), t("p", {
                        staticClass: "interactive-stat__explainer",
                        domProps: {
                            textContent: e._s(e.block.explainer)
                        }
                    }), e._v(" "), t("arrow-circle-cursor-white", {
                        staticClass: "interactive-stat__arrow"
                    })], 1), e._v(" "), t("asset", {
                        ref: "image",
                        staticClass: "interactive-stat__asset",
                        attrs: {
                            asset: e.block.asset,
                            "img-attrs": {
                                class: "interactive-stat__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "interactive-stat__image-holder",
                            "desktop-picture-class": "interactive-stat__image-holder--desktop",
                            "mobile-picture-class": "interactive-stat__image-holder--mobile",
                            "video-class": "interactive-stat__video",
                            "desktop-video-class": "interactive-stat__video--desktop",
                            "mobile-video-class": "interactive-stat__video--mobile"
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        510: function(e, t, n) {
            "use strict";
            n.r(t);
            n(67), n(41), n(24), n(210), n(89), n(161), n(132);
            var r = n(30),
                o = {
                    components: {
                        TextBlock: n(129).default
                    },
                    props: {
                        textToReveal: {
                            type: [String],
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            timeline: null
                        }
                    },
                    computed: {
                        formattedText: function() {
                            var e = this;
                            return this.textToReveal.split(/(<span class="highlighted">.*?<\/span>)/).map((function(t) {
                                return t.startsWith('<span class="highlighted">') && t.endsWith("</span>") ? '<span class="highlighted">'.concat(e.wrapCharactersInSpans(t.substring(26, t.length - 7)), "</span>") : e.wrapCharactersInSpans(t)
                            })).join("")
                        },
                        formattedGhostText: function() {
                            var e = this;
                            return this.textToReveal.split(/(<span class="highlighted">.*?<\/span>)/).map((function(t) {
                                return t.startsWith('<span class="highlighted">') && t.endsWith("</span>") ? '<span class="highlighted">'.concat(e.wrapCharactersInSpans(t.substring(26, t.length - 7)), "</span>") : e.wrapCharactersInSpans(t)
                            })).join("")
                        }
                    },
                    methods: {
                        wrapCharactersInSpans: function(text) {
                            return text.split("").map((function(e) {
                                return "" !== e.trim() ? '<span class="revealable-text__letter">'.concat(e, "</span>") : " "
                            })).join("")
                        },
                        animateTimelines: function() {
                            this.animateRevealTextTimeline()
                        },
                        animateRevealTextTimeline: function() {
                            var e = this.$refs.block;
                            this.timeline = r.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "center bottom",
                                    end: "center center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(e.querySelectorAll(".revealable-text__text--animated .revealable-text__letter"), {
                                clipPath: "inset(0% 100% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                stagger: .1,
                                duration: .1,
                                ease: "none"
                            })
                        }
                    },
                    mounted: function() {
                        this.animateTimelines()
                    }
                },
                l = (n(498), n(5)),
                component = Object(l.a)(o, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        ref: "block",
                        staticClass: "revealable-text"
                    }, [t("div", {
                        staticClass: "revealable-text__text-holder"
                    }, [t("text-block", {
                        staticClass: "revealable-text__text revealable-text__text--animated",
                        attrs: {
                            "text-block": e.formattedText
                        }
                    }), e._v(" "), t("text-block", {
                        staticClass: "revealable-text__text revealable-text__text--ghost",
                        attrs: {
                            "text-block": e.formattedGhostText
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        520: function(e, t, n) {
            "use strict";
            n(489)
        },
        521: function(e, t, n) {
            "use strict";
            n(493)
        },
        522: function(e, t, n) {
            "use strict";
            n(494)
        },
        523: function(e, t, n) {
            "use strict";
            n(496)
        },
        524: function(e, t, n) {
            "use strict";
            n(497)
        },
        525: function(e, t, n) {
            "use strict";
            n(499)
        },
        534: function(e, t, n) {
            e.exports = {}
        },
        549: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                o = n(79),
                l = n(30),
                c = n(130),
                d = n(131),
                h = r.a.extend({
                    components: {
                        AnimatableText: d.default,
                        Asset: o.default
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
                            this.$scrollSmoother.scrollTo(e, !0, "top top")
                        },
                        animateTimelines: function() {
                            this.pinHero(), this.animateContainerTimeline()
                        },
                        pinHero: function() {
                            if (Object(c.a)()) {
                                var e = this.$refs.module;
                                this.timeline = l.b.timeline({
                                    scrollTrigger: {
                                        trigger: e,
                                        start: "top top",
                                        end: "bottom top",
                                        pinSpacing: !1,
                                        pin: !0
                                    }
                                })
                            }
                        },
                        animateContainerTimeline: function() {
                            var e = this.$refs.module;
                            this.timeline = l.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "top center",
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(e.querySelectorAll(" .loaded .home-hero__asset"), {
                                clipPath: "inset(100% 0% 0% 0%)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0%)",
                                ease: "inOut",
                                duration: .6
                            }).fromTo(e.querySelectorAll(".loaded .home-hero__image"), {
                                translateY: 0
                            }, {
                                translateY: -50,
                                ease: "inOut",
                                duration: .6
                            }, "<").fromTo(e.querySelectorAll(".loaded .home-hero__heading, .loaded .home-hero__scroll-button"), {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "inOut",
                                duration: .6
                            }, "<")
                        }
                    },
                    mounted: function() {
                        this.animateTimelines()
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                m = h,
                f = (n(520), n(5)),
                component = Object(f.a)(m, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "home-hero module hero",
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "home-hero__container container"
                    }, [t("div", {
                        staticClass: "home-hero__chevron-holder"
                    }, [t("svg", {
                        staticClass: "home-hero__chevron",
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
                    })])]), e._v(" "), t("asset", {
                        staticClass: "home-hero__asset",
                        attrs: {
                            asset: e.module.backgroundAsset,
                            "img-attrs": {
                                class: "home-hero__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "home-hero__image-holder",
                            "desktop-picture-class": "home-hero__image-holder--desktop",
                            "mobile-picture-class": "home-hero__image-holder--mobile",
                            "video-class": "home-hero__video",
                            "desktop-video-class": "home-hero__video--desktop",
                            "mobile-video-class": "home-hero__video--mobile"
                        }
                    }), e._v(" "), t("animatable-text", {
                        staticClass: "home-hero__animatable-text",
                        attrs: {
                            textContent: e.module.heading.animatedText,
                            variant: e.module.heading.variant
                        }
                    }), e._v(" "), t("p", {
                        staticClass: "home-hero__text",
                        domProps: {
                            innerHTML: e._s(e.module.text)
                        }
                    }), e._v(" "), t("button", {
                        ref: "scrollButton",
                        staticClass: "home-hero__scroll-button",
                        on: {
                            click: function(t) {
                                return e.scrollToSection("#".concat(e.module.scrollLink))
                            }
                        }
                    }, [t("svg", {
                        staticClass: "home-hero__arrow-icon",
                        attrs: {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        staticClass: "home-hero__arrow-chevron",
                        attrs: {
                            d: "M17 8L9 16L1 8",
                            stroke: "white",
                            "stroke-width": "2"
                        }
                    }), e._v(" "), t("path", {
                        staticClass: "home-hero__arrow-line",
                        attrs: {
                            d: "M9.17407 1.56519L9.00016 16",
                            stroke: "white",
                            "stroke-width": "2"
                        }
                    })])])], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        550: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                o = n(30),
                l = n(56),
                c = n(506),
                d = n(551),
                h = n(552),
                m = n(507),
                f = n(553),
                v = n(508),
                _ = n(207),
                C = r.a.extend({
                    components: {
                        ContentArea: _.default,
                        AnimatedGraphic6: v.default,
                        AnimatedGraphic5: f.default,
                        AnimatedGraphic4: m.default,
                        AnimatedGraphic3: h.default,
                        AnimatedGraphic2: d.default,
                        AnimatedGraphic1: c.default
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
                        animateMobileTimelines: function() {
                            this.graphicKeyframeMobile(), this.contentAreaKeyframeMobile()
                        },
                        animateDesktopTimelines: function() {
                            this.graphicKeyframeDesktop(), this.graphicHolderKeyframeDesktop(), this.contentAreaKeyframeDesktop()
                        },
                        animate5xlTimelines: function() {
                            this.graphicKeyframeDesktop(), this.graphicHolderKeyframe5xl(), this.contentAreaKeyframeDesktop()
                        },
                        contentAreaKeyframeMobile: function() {
                            var e = this.$refs.module,
                                t = e.querySelector(".animated-graphic__content-area");
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: t,
                                    start: "top 90%",
                                    end: "top center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(e.querySelector(".animated-graphic__content-area"), {
                                y: -50,
                                opacity: 0
                            }, {
                                y: 0,
                                opacity: 1
                            })
                        },
                        contentAreaKeyframeDesktop: function() {
                            var e = this.$refs.module;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "center bottom",
                                    end: "center center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.to(e.querySelector(".animated-graphic__content-area"), {
                                keyframes: [{
                                    xPercent: -50,
                                    opacity: 0
                                }, {
                                    xPercent: -25,
                                    opacity: 1
                                }, {
                                    xPercent: 0,
                                    opacity: 1
                                }]
                            })
                        },
                        graphicHolderKeyframeDesktop: function() {
                            var e = this.$refs.module;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "center bottom",
                                    end: "center center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.to(e.querySelector(".animated-graphic__graphic-holder"), {
                                keyframes: [{
                                    x: 0
                                }, {
                                    x: "-22vw"
                                }]
                            })
                        },
                        graphicHolderKeyframe5xl: function() {
                            var e = this.$refs.module;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "center bottom",
                                    end: "center center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.to(e.querySelector(".animated-graphic__graphic-holder"), {
                                keyframes: [{
                                    x: 0
                                }, {
                                    x: -352
                                }]
                            })
                        },
                        graphicKeyframeMobile: function() {
                            var e = this.$refs.module,
                                t = this.$refs.graphicHolder;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: t,
                                    start: "center bottom",
                                    end: "center center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.to(e.querySelector(".animated-graphic__graphic--1"), {
                                keyframes: [{
                                    xPercent: -75.35,
                                    yPercent: -27.03
                                }, {
                                    xPercent: -40.97,
                                    yPercent: -15.77
                                }]
                            }).to(e.querySelector(".animated-graphic__graphic--2"), {
                                keyframes: [{
                                    xPercent: -45.14,
                                    yPercent: -16.22
                                }, {
                                    xPercent: -24.65,
                                    yPercent: -9.46
                                }]
                            }, "<").to(e.querySelector(".animated-graphic__graphic--3"), {
                                keyframes: [{
                                    xPercent: -15.28,
                                    yPercent: -4.95
                                }, {
                                    xPercent: -8.33,
                                    yPercent: -3.15
                                }]
                            }, "<").to(e.querySelector(".animated-graphic__graphic--4"), {
                                keyframes: [{
                                    xPercent: 15.28,
                                    yPercent: 4.95
                                }, {
                                    xPercent: 8.33,
                                    yPercent: 3.15
                                }]
                            }, "<").to(e.querySelector(".animated-graphic__graphic--5"), {
                                keyframes: [{
                                    xPercent: 45.14,
                                    yPercent: 16.22
                                }, {
                                    xPercent: 24.65,
                                    yPercent: 9.46
                                }]
                            }, "<").to(e.querySelector(".animated-graphic__graphic--6"), {
                                keyframes: [{
                                    xPercent: 75.35,
                                    yPercent: 27.03
                                }, {
                                    xPercent: 40.97,
                                    yPercent: 15.77
                                }]
                            }, "<")
                        },
                        graphicKeyframeDesktop: function() {
                            var e = this.$refs.module;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "center bottom",
                                    end: "center center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.to(e.querySelector(".animated-graphic__graphic--1"), {
                                keyframes: [{
                                    xPercent: -75.35,
                                    yPercent: -27.03
                                }, {
                                    xPercent: -40.97,
                                    yPercent: -15.77
                                }]
                            }).to(e.querySelector(".animated-graphic__graphic--2"), {
                                keyframes: [{
                                    xPercent: -45.14,
                                    yPercent: -16.22
                                }, {
                                    xPercent: -24.65,
                                    yPercent: -9.46
                                }]
                            }, "<").to(e.querySelector(".animated-graphic__graphic--3"), {
                                keyframes: [{
                                    xPercent: -15.28,
                                    yPercent: -4.95
                                }, {
                                    xPercent: -8.33,
                                    yPercent: -3.15
                                }]
                            }, "<").to(e.querySelector(".animated-graphic__graphic--4"), {
                                keyframes: [{
                                    xPercent: 15.28,
                                    yPercent: 4.95
                                }, {
                                    xPercent: 8.33,
                                    yPercent: 3.15
                                }]
                            }, "<").to(e.querySelector(".animated-graphic__graphic--5"), {
                                keyframes: [{
                                    xPercent: 45.14,
                                    yPercent: 16.22
                                }, {
                                    xPercent: 24.65,
                                    yPercent: 9.46
                                }]
                            }, "<").to(e.querySelector(".animated-graphic__graphic--6"), {
                                keyframes: [{
                                    xPercent: 75.35,
                                    yPercent: 27.03
                                }, {
                                    xPercent: 40.97,
                                    yPercent: 15.77
                                }]
                            }, "<")
                        }
                    },
                    mounted: function() {
                        Object(l.c)().width < 1024 ? this.animateMobileTimelines() : Object(l.c)().width >= 1024 && Object(l.c)().width < 1600 ? this.animateDesktopTimelines() : this.animate5xlTimelines()
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                x = C,
                k = (n(521), n(5)),
                component = Object(k.a)(x, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "animated-graphic module",
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "animated-graphic__container container"
                    }, [t("div", {
                        ref: "graphicHolder",
                        staticClass: "animated-graphic__graphic-holder"
                    }, [t("animated-graphic1", {
                        ref: "graphic1",
                        staticClass: "animated-graphic__graphic animated-graphic__graphic--1"
                    }), e._v(" "), t("animated-graphic2", {
                        ref: "graphic2",
                        staticClass: "animated-graphic__graphic animated-graphic__graphic--2"
                    }), e._v(" "), t("animated-graphic3", {
                        ref: "graphic3",
                        staticClass: "animated-graphic__graphic animated-graphic__graphic--3"
                    }), e._v(" "), t("animated-graphic4", {
                        ref: "graphic4",
                        staticClass: "animated-graphic__graphic animated-graphic__graphic--4"
                    }), e._v(" "), t("animated-graphic5", {
                        ref: "graphic5",
                        staticClass: "animated-graphic__graphic animated-graphic__graphic--5"
                    }), e._v(" "), t("animated-graphic6", {
                        ref: "graphic6",
                        staticClass: "animated-graphic__graphic animated-graphic__graphic--6"
                    })], 1), e._v(" "), t("content-area", {
                        ref: "contentArea",
                        staticClass: "animated-graphic__content-area",
                        attrs: {
                            "content-area": e.module.contentArea,
                            heading: e.module.heading
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        554: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                o = n(30),
                l = n(56),
                c = n(79),
                d = r.a.extend({
                    components: {
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
                            timeline: null
                        }
                    },
                    methods: {
                        animateMobileTimelines: function() {
                            this.animateClippedBlockMobileTimeline()
                        },
                        animateDesktopTimelines: function() {
                            this.animateClippedBlockDesktopTimeline()
                        },
                        animateClippedBlockMobileTimeline: function() {
                            var e = this.$refs.module;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "center bottom",
                                    end: "center center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(e.querySelector(".expanding-callout__clipped-block"), {
                                clipPath: "inset(20% 20% 20% 20% round 20px)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0% round 0px)"
                            })
                        },
                        animateClippedBlockDesktopTimeline: function() {
                            var e = this.$refs.module;
                            this.timeline = o.b.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    start: "center 90%",
                                    end: "center center",
                                    scrub: !0,
                                    toggleActions: "restart none none reverse"
                                }
                            }), this.timeline.fromTo(e.querySelector(".expanding-callout__clipped-block"), {
                                clipPath: "inset(16.25% 40% 16.25% 40% round 20px)"
                            }, {
                                clipPath: "inset(0% 0% 0% 0% round 0px)"
                            })
                        }
                    },
                    mounted: function() {
                        Object(l.c)().width >= 768 ? this.animateDesktopTimelines() : this.animateMobileTimelines()
                    },
                    beforeDestroy: function() {
                        this.timeline && this.timeline.scrollTrigger.kill()
                    }
                }),
                h = d,
                m = (n(522), n(5)),
                component = Object(m.a)(h, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "expanding-callout module",
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "expanding-callout__container container"
                    }, [t("h2", {
                        staticClass: "expanding-callout__heading expanding-callout__heading--under",
                        domProps: {
                            innerHTML: e._s(e.module.text)
                        }
                    })]), e._v(" "), t("div", {
                        staticClass: "expanding-callout__clipped-block container"
                    }, [t("asset", {
                        staticClass: "expanding-callout__asset",
                        attrs: {
                            asset: e.module.asset,
                            "img-attrs": {
                                class: "expanding-callout__image"
                            },
                            "mobile-img-attrs": {},
                            "desktop-img-attrs": {},
                            "picture-class": "expanding-callout__image-holder",
                            "desktop-picture-class": "expanding-callout__image-holder--desktop",
                            "mobile-picture-class": "expanding-callout__image-holder--mobile",
                            "video-class": "expanding-callout__video",
                            "desktop-video-class": "expanding-callout__video--desktop",
                            "mobile-video-class": "expanding-callout__video--mobile",
                            parallax: e.module.asset.parallax
                        }
                    }), e._v(" "), t("span", {
                        staticClass: "expanding-callout__heading expanding-callout__heading--over",
                        attrs: {
                            "aria-hidden": "true"
                        },
                        domProps: {
                            innerHTML: e._s(e.module.text)
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        555: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                o = n(459),
                l = n(79),
                c = n(509),
                d = r.a.extend({
                    components: {
                        InteractiveStat: c.default,
                        Asset: l.default,
                        ArrowCircleCursor: o.default
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
                h = (n(523), n(5)),
                component = Object(h.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "interactive-stats module",
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "interactive-stats__container container"
                    }, e._l(e.module.stats, (function(e, n) {
                        return t("interactive-stat", {
                            key: n,
                            staticClass: "interactive-stats__interactive-stat",
                            attrs: {
                                block: e
                            }
                        })
                    })), 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        556: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                o = n(437),
                l = n(79),
                c = n(129),
                d = r.a.extend({
                    components: {
                        TextBlock: c.default,
                        Asset: l.default,
                        GsapCarousel: o.default
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
                                    slidesPerView: 1,
                                    gap: 40
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
                        }
                    },
                    mounted: function() {
                        this.isLastSlide()
                    }
                }),
                h = (n(524), n(5)),
                component = Object(h.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        staticClass: "carousel-fading-background module"
                    }, [e._l(e.module.slides, (function(n, r) {
                        return t("asset", {
                            key: r,
                            staticClass: "carousel-fading-background__asset",
                            class: {
                                "carousel-fading-background__asset--active": r === e.activeSlide
                            },
                            attrs: {
                                asset: n.asset,
                                "img-attrs": {
                                    class: "carousel-fading-background__image"
                                },
                                "mobile-img-attrs": {},
                                "desktop-img-attrs": {},
                                "picture-class": "carousel-fading-background__image-holder",
                                "desktop-picture-class": "carousel-fading-background__image-holder--desktop",
                                "mobile-picture-class": "carousel-fading-background__image-holder--mobile",
                                "video-class": "carousel-fading-background__video",
                                "desktop-video-class": "carousel-fading-background__video--desktop",
                                "mobile-video-class": "carousel-fading-background__video--mobile",
                                parallax: e.module.parallax
                            }
                        })
                    })), e._v(" "), t("div", {
                        staticClass: "carousel-fading-background__container container"
                    }, [t("div", {
                        staticClass: "carousel-fading-background__content-holder"
                    }, [t("gsap-carousel", {
                        ref: "carousel",
                        staticClass: "carousel-fading-background__carousel gsap-carousel",
                        attrs: {
                            "carousel-config": e.carouselConfig,
                            "on-change": e.onSlideChange
                        }
                    }, [t("div", {
                        staticClass: "gsap-carousel-wrapper carousel-fading-background__wrapper"
                    }, e._l(e.module.slides, (function(n, r) {
                        return t("div", {
                            key: r,
                            staticClass: "gsap-carousel-slide carousel-fading-background__text-slide"
                        }, [t("h2", {
                            staticClass: "carousel-fading-background__slide-heading",
                            domProps: {
                                innerHTML: e._s(n.heading)
                            }
                        }), e._v(" "), t("text-block", {
                            staticClass: "carousel-fading-background__slide-text",
                            attrs: {
                                "text-block": n.text
                            }
                        })], 1)
                    })), 0)]), e._v(" "), t("div", {
                        staticClass: "carousel-fading-background__navigation"
                    }, [t("div", {
                        staticClass: "carousel-fading-background__button carousel-fading-background__button--previous",
                        class: {
                            "carousel-fading-background__button--disabled": 0 === e.activeSlide
                        },
                        attrs: {
                            "aria-label": "carousel previous slide button"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.prevSlide()
                            }
                        }
                    }, [t("svg", {
                        staticClass: "carousel-fading-background__button-icon",
                        attrs: {
                            width: "10",
                            height: "16",
                            viewBox: "0 0 10 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M8.76667 1.7832L2.23334 8.31654L8.76667 14.8499",
                            stroke: "white",
                            "stroke-width": "3"
                        }
                    })])]), e._v(" "), t("div", {
                        staticClass: "carousel-fading-background__button carousel-fading-background__button--next",
                        class: {
                            "carousel-fading-background__button--disabled": e.isLastSlide()
                        },
                        attrs: {
                            "aria-label": "carousel next slide button"
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.nextSlide()
                            }
                        }
                    }, [t("svg", {
                        staticClass: "carousel-fading-background__button-icon",
                        attrs: {
                            width: "10",
                            height: "16",
                            viewBox: "0 0 10 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M1.23333 14.8501L7.76666 8.31676L1.23333 1.78343",
                            stroke: "white",
                            "stroke-width": "3"
                        }
                    })])])])], 1)])], 2)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        557: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                o = n(207),
                l = n(510),
                c = r.a.extend({
                    components: {
                        ContentArea: o.default,
                        RevealableText: l.default
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
                d = (n(525), n(5)),
                component = Object(d.a)(c, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("section", {
                        ref: "module",
                        staticClass: "text-reveal module",
                        attrs: {
                            id: e.module.id ? e.module.id : null
                        }
                    }, [t("div", {
                        staticClass: "text-reveal__container container"
                    }, [t("revealable-text", {
                        staticClass: "text-reveal__revealable-text",
                        attrs: {
                            "text-to-reveal": e.module.revealableText
                        }
                    }), e._v(" "), t("content-area", {
                        staticClass: "text-reveal__content-area",
                        attrs: {
                            "content-area": e.module.contentArea
                        }
                    })], 1)])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        564: function(e, t, n) {
            "use strict";
            n(534)
        },
        580: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                o = n(549),
                l = n(550),
                c = n(554),
                d = n(470),
                h = n(555),
                m = n(556),
                f = n(557),
                v = n(208),
                _ = n(90),
                C = r.a.extend({
                    components: {
                        TextReveal: f.default,
                        CarouselFadingBackground: m.default,
                        InteractiveStats: h.default,
                        TaglineContent: d.default,
                        ExpandingCallout: c.default,
                        AnimatedGraphic: l.default,
                        HomeHero: o.default
                    },
                    data: function() {
                        return {
                            hero: {
                                heading: {
                                    animatedText: "Build<br>smarter",
                                    variant: "home-hero"
                                },
                                text: "Offsite production of world-leading homes for forward-thinking developers",
                                backgroundAsset: {
                                    type: "asset_video_BlockType",
                                    video: [{
                                        type: "video/mp4",
                                        src: "https://cms.brand.kingshaus.ryze.uk/uploads/videos/home-hero.mp4",
                                        preload: !0
                                    }],
                                    mobileVideo: [{
                                        type: "video/mp4",
                                        src: "https://cms.brand.kingshaus.ryze.uk/uploads/videos/home-hero.mp4",
                                        preload: !0
                                    }],
                                    poster: [{
                                        src: "/videos/posters/home-hero-poster.jpg"
                                    }]
                                },
                                scrollLink: "build-better"
                            },
                            animatedGraphic: {
                                id: "build-better",
                                heading: [{
                                    type: "h2",
                                    text: "A better, faster way to build homes"
                                }],
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "By pre-constructing our homes offsite, we save valuable resources including time, energy, and manpower. This maximises efficiency, reduces costs and guarantees their quality."
                                }, {
                                    type: "buttonBlock",
                                    buttons: [{
                                        type: "link-green",
                                        link: {
                                            url: "/contact/",
                                            text: "Partner with us"
                                        }
                                    }, {
                                        type: "link-green",
                                        link: {
                                            url: "/build-smarter/",
                                            text: "Learn more"
                                        }
                                    }]
                                }]
                            },
                            expandingCallout: {
                                asset: {
                                    type: "asset_image_BlockType",
                                    parallax: ".8",
                                    image: [{
                                        src: "/images/pages/home/expanding-background/1.jpg",
                                        alt: "a person measuring some wood",
                                        loading: "eager"
                                    }],
                                    mobileImage: [{
                                        src: "/images/pages/home/expanding-background/1-mob.jpg",
                                        alt: "a person measuring some wood",
                                        loading: "eager"
                                    }]
                                },
                                text: "Building on 75 years experience"
                            },
                            taglineContent: {
                                tagline: "We don't just build homes, we build responsibly.",
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>Our building systems use modern technology in advanced, quality-controlled, indoor environments to ensure the highest standard of every detail.</p>"
                                }]
                            },
                            interactiveStats: {
                                stats: [{
                                    stat: "70%",
                                    explainer: "Our modular approach speeds up home construction by up to 70% compared to traditional methods.",
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/home/stats/1.jpg",
                                            alt: "a pile of wooden frames",
                                            loading: "eager"
                                        }],
                                        mobileImage: [{
                                            src: "/images/pages/home/stats/1-mob.jpg",
                                            alt: "a pile of wooden frames",
                                            loading: "eager"
                                        }]
                                    },
                                    link: {
                                        url: "/build-smarter/"
                                    }
                                }, {
                                    stat: "40%",
                                    explainer: "Our homes use 40% less energy for heating or cooling than traditional brick or concrete houses.",
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/home/stats/2.jpg",
                                            alt: "the sun shining through a window",
                                            loading: "eager"
                                        }],
                                        mobileImage: [{
                                            src: "/images/pages/home/stats/2-mob.jpg",
                                            alt: "the sun shining through a window",
                                            loading: "eager"
                                        }]
                                    },
                                    link: {
                                        url: "/build-smarter/"
                                    }
                                }]
                            },
                            carouselFadingBackground: {
                                parallax: ".8",
                                slides: [{
                                    heading: "Reducing our carbon footprint",
                                    text: "<p>Our homes capture and store atmospheric carbon in their timber frames, so we can lower the carbon footprint of home construction by 80%.</p>",
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/home/carousel-fading-background/1.jpg",
                                            alt: "an overhead view of a dense forest"
                                        }],
                                        mobileImage: [{
                                            src: "/images/pages/home/carousel-fading-background/1-mob.jpg",
                                            alt: "an overhead view of a dense forest"
                                        }]
                                    }
                                }, {
                                    heading: "Responsible FSC&#8209;certified materials",
                                    text: "<p>The forests we source from preserve biological diversity and benefit the lives of local people and workers.</p>",
                                    asset: {
                                        type: "asset_image_BlockType",
                                        image: [{
                                            src: "/images/pages/home/carousel-fading-background/4.jpg",
                                            alt: "a small bird perching on a branch"
                                        }],
                                        mobileImage: [{
                                            src: "/images/pages/home/carousel-fading-background/4-mob.jpg",
                                            alt: "a small bird perching on a branch"
                                        }]
                                    }
                                }]
                            },
                            textReveal: {
                                revealableText: "We have deep experience of premium Scandinavian home construction.",
                                contentArea: [{
                                    type: "textBlock",
                                    textBlock: "<p>For over 75 years, we have been developing homes of the highest quality that provide endless possibilities for architectural design.</p>"
                                }, {
                                    type: "buttonBlock",
                                    buttons: [{
                                        type: "link-green",
                                        link: {
                                            url: "/about/",
                                            text: "About us"
                                        }
                                    }]
                                }]
                            }
                        }
                    },
                    mounted: function() {
                        this.$scrollSmoother.parseEffects(), this.$scrollSmoother.refresh()
                    },
                    beforeDestroy: function() {
                        this.$scrollSmoother.killEffects()
                    },
                    head: function() {
                        var e = "Kingshaus® | Build smarter.",
                            t = this.$config.APP_ROOT + this.$img("/social-card/social-card-new.jpg", {
                                width: 1200,
                                height: 630,
                                quality: 80
                            }),
                            n = this.$config.APP_ROOT;
                        return {
                            bodyAttrs: {
                                class: ""
                            },
                            title: Object(_.b)(e),
                            meta: Object(v.a)(Object(_.b)(""), Object(_.b)(e), Object(_.b)(""), t, Object(_.b)(e), Object(_.b)(""), t),
                            link: [{
                                hid: "canonical",
                                rel: "canonical",
                                href: n
                            }]
                        }
                    }
                }),
                x = (n(564), n(5)),
                component = Object(x.a)(C, (function() {
                    var e = this,
                        t = e._self._c;
                    e._self._setupProxy;
                    return t("main", {
                        staticClass: "home-page flow"
                    }, [t("home-hero", {
                        staticClass: "home-hero module",
                        attrs: {
                            module: e.hero
                        }
                    }), e._v(" "), t("animated-graphic", {
                        staticClass: "home-page__animated-graphic",
                        attrs: {
                            module: e.animatedGraphic
                        }
                    }), e._v(" "), t("expanding-callout", {
                        staticClass: "home-page__expanding-callout",
                        attrs: {
                            module: e.expandingCallout
                        }
                    }), e._v(" "), t("tagline-content", {
                        staticClass: "home-page__tagline-content",
                        attrs: {
                            module: e.taglineContent
                        }
                    }), e._v(" "), t("interactive-stats", {
                        staticClass: "home-page__interactive-stats",
                        attrs: {
                            module: e.interactiveStats
                        }
                    }), e._v(" "), t("carousel-fading-background", {
                        staticClass: "home-page__carousel-fading-background",
                        attrs: {
                            module: e.carouselFadingBackground
                        }
                    }), e._v(" "), t("text-reveal", {
                        staticClass: "home-page__text-reveal",
                        attrs: {
                            module: e.textReveal
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);