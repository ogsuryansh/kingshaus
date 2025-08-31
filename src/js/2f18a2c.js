
(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], Array(36).concat([function(t, e, n) {
        "use strict";
        n.r(e);
        n(69), n(24), n(37), n(48);
        var o = n(4).a.extend({
                props: {
                    link: {
                        type: [Object]
                    }
                },
                data: function() {
                    return {
                        type: "internal",
                        url: null,
                        action: null
                    }
                },
                created: function() {
                    var t, e, n, o, r, l, c, d, f, h, v;
                    if (!this.link || "_blank" !== (null === (t = this.link) || void 0 === t ? void 0 : t.target) && "url" !== (null === (e = this.link) || void 0 === e ? void 0 : e.entryType) && "asset" !== (null === (n = this.link) || void 0 === n ? void 0 : n.entryType) && "email" !== (null === (o = this.link) || void 0 === o ? void 0 : o.entryType) && "tel" !== (null === (r = this.link) || void 0 === r ? void 0 : r.entryType) || (this.type = "external"), this.link && (null === (l = this.link) || void 0 === l ? void 0 : l.type) && (this.type = null === (c = this.link) || void 0 === c ? void 0 : c.type), "button" !== this.type) return "action" === this.type ? (this.action = this.link.action, void(this.url = this.link.url)) : void("#" === (null === (d = this.link) || void 0 === d ? void 0 : d.url) && "custom" === (null === (f = this.link) || void 0 === f ? void 0 : f.entryType) || (this.url = null === (v = null === (h = this.link) || void 0 === h ? void 0 : h.url) || void 0 === v ? void 0 : v.replace(this.$nuxt.$options.$config.APP_ROOT, "")))
                },
                methods: {
                    triggerAction: function() {
                        switch (this.action) {
                            case "popup":
                                this.openPopup();
                                break;
                            case "close-popup":
                                this.closePopup()
                        }
                    },
                    openPopup: function() {
                        document.dispatchEvent(new CustomEvent("open-popup", {
                            detail: {
                                popupId: this.url
                            }
                        }))
                    },
                    closePopup: function() {
                        var t = this;
                        document.dispatchEvent(new CustomEvent("close-popup", {
                            detail: {
                                popupId: this.url
                            }
                        })), setTimeout((function() {
                            var e = t.$router.options.scrollBehavior;
                            t.$router.options.scrollBehavior = void 0, t.$router.push(t.$route.path, (function() {
                                t.$router.options.scrollBehavior = e
                            }))
                        }), 100)
                    }
                }
            }),
            r = n(5),
            component = Object(r.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return "internal" === t.type && t.url ? e("nuxt-link", {
                    attrs: {
                        to: t.url
                    }
                }, [t._t("default")], 2) : "external" === t.type && t.link && t.url ? e("a", {
                    attrs: {
                        href: t.url,
                        target: t.link.target
                    }
                }, [t._t("default")], 2) : "button" === t.type ? e("button", [t._t("default")], 2) : "action" === t.type ? e("a", {
                    attrs: {
                        href: "#".concat(t.url)
                    },
                    on: {
                        click: function(e) {
                            return t.triggerAction()
                        }
                    }
                }, [t._t("default")], 2) : e("div", [t._t("default")], 2)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";

        function o() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
        }

        function r() {
            document.querySelector("body").classList.remove("no-scroll")
        }

        function l() {
            document.querySelector("body").classList.add("no-scroll")
        }
        n.d(e, "c", (function() {
            return o
        })), n.d(e, "b", (function() {
            return r
        })), n.d(e, "a", (function() {
            return l
        }))
    }, , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(27), n(28), n(43), n(44), n(35), n(10), n(17);
        var o = n(16);

        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach((function(e) {
                    Object(o.a)(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        n(95);
        var c = n(4),
            d = n(36),
            f = n(211),
            h = c.a.extend({
                components: {
                    PlayIcon: f.default,
                    NavigationLink: d.default
                },
                props: {
                    asset: {
                        type: [Object],
                        required: !0
                    },
                    preset: {
                        type: [String],
                        default: "standard"
                    },
                    pictureClass: {
                        type: [String]
                    },
                    desktopPictureClass: {
                        type: [String]
                    },
                    mobilePictureClass: {
                        type: [String]
                    },
                    videoClass: {
                        type: [String]
                    },
                    desktopVideoClass: {
                        type: [String]
                    },
                    mobileVideoClass: {
                        type: [String]
                    },
                    imgAttrs: {
                        type: [Object]
                    },
                    mobileImgAttrs: {
                        type: [Object]
                    },
                    desktopImgAttrs: {
                        type: [Object]
                    },
                    mobileThreshold: {
                        type: [Number],
                        default: 1024
                    },
                    parallax: {
                        type: [String],
                        required: !1
                    }
                },
                methods: {
                    stopVideo: function() {
                        for (var t = 0, e = ["video", "mobileVideo"]; t < e.length; t++) {
                            var n = e[t],
                                o = this.$refs[n].$el;
                            "none" !== getComputedStyle(o).display && (o.pause(), o.currentTime = 0)
                        }
                    },
                    pauseVideo: function() {
                        for (var t = 0, e = ["video", "mobileVideo"]; t < e.length; t++) {
                            var n = e[t],
                                o = this.$refs[n].$el;
                            "none" !== getComputedStyle(o).display && o.pause()
                        }
                    },
                    playVideo: function() {
                        for (var t = 0, e = ["video", "mobileVideo"]; t < e.length; t++) {
                            var n = e[t],
                                o = this.$refs[n].$el;
                            "none" !== getComputedStyle(o).display && (o.muted = !0, o.play())
                        }
                    }
                }
            }),
            v = (n(391), n(5)),
            component = Object(v.a)(h, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "asset",
                    class: t.parallax ? "asset--with-parallax" : "asset--standard",
                    style: "".concat("asset_image_BlockType" === t.asset.type && t.asset.image && t.asset.image.length || "asset_image_BlockType" === t.asset.type && t.asset.mobileImage && t.asset.mobileImage.length || "asset_video_BlockType" === t.asset.type && t.asset.video && t.asset.video.length || "asset_video_BlockType" === t.asset.type && t.asset.mobileVideo && t.asset.mobileVideo.length ? "" : "display: none")
                }, ["asset_image_BlockType" === t.asset.type && t.asset.image && t.asset.image.length ? e("nuxt-picture", {
                    staticClass: "asset__image-holder",
                    class: [t.pictureClass, Object(o.a)({}, t.desktopPictureClass, t.asset.mobileImage && t.asset.mobileImage.length)],
                    attrs: {
                        preset: t.preset,
                        src: t.asset.image[0].src,
                        alt: t.asset.image[0].alt,
                        imgAttrs: l(l(l({}, t.desktopImgAttrs && t.desktopImgAttrs.length ? t.desktopImgAttrs : t.imgAttrs), {
                            "data-speed": t.parallax ? t.parallax : null
                        }), {}, {
                            class: ["asset__image", t.imgAttrs.class]
                        }),
                        sizes: t.asset.image[0].sizes,
                        preload: t.asset.image[0].preload && !0 === t.asset.image[0].preload,
                        loading: t.asset.loading && t.asset.loading.length ? t.asset.loading : null
                    }
                }) : t._e(), t._v(" "), "asset_image_BlockType" === t.asset.type && t.asset.mobileImage && t.asset.mobileImage.length ? e("nuxt-picture", {
                    staticClass: "asset__image-holder",
                    class: [t.pictureClass, t.mobilePictureClass],
                    attrs: {
                        preset: t.preset,
                        src: t.asset.mobileImage[0].src,
                        alt: t.asset.mobileImage[0].alt,
                        imgAttrs: l(l(l({}, t.mobileImgAttrs && t.mobileImgAttrs.length ? t.mobileImgAttrs : t.imgAttrs), {
                            "data-speed": t.parallax ? t.parallax : null
                        }), {}, {
                            class: ["asset__image", t.imgAttrs.class]
                        }),
                        preload: t.asset.mobileImage[0].preload && !0 === t.asset.mobileImage[0].preload,
                        loading: t.asset.loading && t.asset.loading.length ? t.asset.loading : null
                    }
                }) : t._e(), t._v(" "), "asset_video_BlockType" === t.asset.type && t.asset.video && t.asset.video.length ? e("nuxt-video", {
                    ref: "video",
                    staticClass: "asset__video",
                    class: [t.videoClass, {
                        desktopVideoClass: t.asset.mobileVideo && t.asset.mobileVideo.length
                    }],
                    attrs: {
                        autoplay: "",
                        playsinline: "",
                        muted: "",
                        loop: "",
                        controls: !(!t.asset.video[0].controls || !0 !== t.asset.video[0].controls) || null,
                        poster: t.asset.poster && t.asset.poster.length ? t.asset.poster[0].src : "",
                        sources: t.asset.video,
                        preload: t.asset.video[0].preload && !0 === t.asset.video[0].preload,
                        "data-speed": t.parallax ? t.parallax : null
                    }
                }) : t._e(), t._v(" "), "asset_video_BlockType" === t.asset.type && t.asset.mobileVideo && t.asset.mobileVideo.length ? e("nuxt-video", {
                    ref: "mobileVideo",
                    staticClass: "asset__video",
                    class: [t.videoClass, t.mobileVideoClass],
                    attrs: {
                        autoplay: "",
                        playsinline: "",
                        muted: "",
                        loop: "",
                        controls: !(!t.asset.mobileVideo[0].controls || !0 !== t.asset.mobileVideo[0].controls) || null,
                        poster: t.asset.poster && t.asset.poster.length ? t.asset.poster[0].src : "",
                        sources: t.asset.mobileVideo,
                        preload: t.asset.mobileVideo[0].preload && !0 === t.asset.mobileVideo[0].preload,
                        "data-speed": t.parallax ? t.parallax : null
                    }
                }) : t._e()], 1)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , function(t, e, n) {
        "use strict";
        var o = n(4),
            r = n(208),
            l = n(90),
            c = n(289),
            d = n(297),
            f = o.a.extend({
                components: {
                    ErrorNotice: d.default,
                    MinimalHero: c.default
                },
                props: ["error"],
                layout: "error",
                data: function() {
                    return {
                        errorToShow: 500,
                        hero: {
                            hiddenH1: "Error page",
                            tagline: {
                                animatedText: "Page not found",
                                variant: "minimal-hero"
                            }
                        },
                        errorNotice404: {
                            contentArea: [{
                                type: "textBlock",
                                textBlock: "<p>Sorry, the page you’re looking for has been moved or no longer exists.</p>"
                            }, {
                                type: "buttonBlock",
                                buttons: [{
                                    type: "solid-green",
                                    link: {
                                        url: "/",
                                        text: "Go to homepage"
                                    }
                                }]
                            }]
                        },
                        errorNoticeOther: {
                            contentArea: [{
                                type: "textBlock",
                                textBlock: "<p>Sorry, an error occurred.</p>"
                            }, {
                                type: "buttonBlock",
                                buttons: [{
                                    type: "solid-green",
                                    link: {
                                        url: "/",
                                        text: "Go to homepage"
                                    }
                                }]
                            }]
                        }
                    }
                },
                mounted: function() {
                    this.error.statusCode && 404 === this.error.statusCode && (this.errorToShow = 404), this.$handleBodyStates(), this.$setBodyStates(), this.fireAnalytics()
                },
                head: function() {
                    var t = "Kingshaus",
                        e = this.$img("/social-card/social-card-new.jpg", {
                            width: 1200,
                            height: 630,
                            quality: 80
                        }),
                        n = this.$config.APP_ROOT;
                    return {
                        bodyAttrs: {
                            class: ""
                        },
                        title: Object(l.b)(t),
                        meta: Object(r.a)(Object(l.b)(""), Object(l.b)(t), Object(l.b)(""), e, Object(l.b)(t), Object(l.b)(""), e),
                        link: [{
                            hid: "canonical",
                            rel: "canonical",
                            href: n
                        }]
                    }
                },
                methods: {
                    fireAnalytics: function() {}
                }
            }),
            h = n(5),
            component = Object(h.a)(f, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("main", {
                    staticClass: "flow"
                }, [e("minimal-hero", {
                    attrs: {
                        module: t.hero
                    }
                }), t._v(" "), 404 === t.error.statusCode ? e("error-notice", {
                    attrs: {
                        module: t.errorNotice404
                    }
                }) : t._e(), t._v(" "), 404 !== t.error.statusCode ? e("error-notice", {
                    attrs: {
                        module: t.errorNoticeOther
                    }
                }) : t._e()], 1)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        })), n.d(e, "b", (function() {
            return r
        }));
        n(24), n(37);

        function o(t) {
            for (var e = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < t; i++) e += n.charAt(Math.floor(62 * Math.random()));
            return e
        }

        function r(t) {
            return t.replace(/&amp;/, "&")
        }
    }, , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(69);
        var o = n(4),
            r = n(160),
            l = n(162),
            c = n(204),
            d = n(298),
            f = n(205),
            h = o.a.extend({
                components: {
                    ButtonTemplate: r.default,
                    ButtonFooterNav: f.default,
                    ButtonLinkGreen: c.default,
                    ButtonScroll: l.default
                },
                props: {
                    type: {
                        type: [String]
                    },
                    link: {
                        type: [Object]
                    },
                    text: {
                        type: [String]
                    }
                },
                data: function() {
                    return {
                        types: {
                            template: r.default,
                            scroll: l.default,
                            "solid-green": d.default,
                            "footer-nav": f.default,
                            "link-green": c.default
                        },
                        defaultType: r.default
                    }
                }
            }),
            v = (n(388), n(5)),
            component = Object(v.a)(h, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return t.types[t.type] ? e(t.types[t.type], {
                    tag: "component",
                    attrs: {
                        text: t.text,
                        link: t.link
                    }
                }) : e(t.defaultType, {
                    tag: "component",
                    attrs: {
                        text: t.text,
                        link: t.link
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4).a.extend({
                props: {
                    textBlock: {
                        type: [String]
                    },
                    colour: {
                        type: [String]
                    },
                    alignment: {
                        type: [String]
                    }
                }
            }),
            r = (n(390), n(5)),
            component = Object(r.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "text-block",
                    class: [t.colour ? "text-block--text-".concat(t.colour) : null, t.colour ? "text-block--text-".concat(t.colour) : null, t.alignment ? "text-block--text-".concat(t.alignment) : null],
                    domProps: {
                        innerHTML: t._s(t.textBlock)
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return o
        })), n.d(e, "a", (function() {
            return r
        }));
        n(68), n(24), n(96);
        var o = function() {
                var a, t = !1;
                return a = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (t = !0), t
            },
            r = function() {
                return window.matchMedia("(hover: hover)").matches || window.matchMedia("(pointer: fine)").matches
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(10), n(17);
        var o = n(30),
            r = n(110);
        "undefined" != typeof window && o.b.registerPlugin(r.a);
        var l = {
                props: {
                    textContent: {
                        type: [String],
                        required: !0
                    },
                    variant: {
                        type: [String],
                        required: !1
                    }
                },
                data: function() {
                    return {
                        animationStarted: !1,
                        splitText: null,
                        timeline: null
                    }
                },
                methods: {
                    animateTimelines: function() {
                        this.splitWithGsapHero(), this.splitWithGsapInPage()
                    },
                    animateFirstLoadTimelines: function() {
                        this.splitWithGsapFirstLoadHero(), this.splitWithGsapFirstLoadInPage()
                    },
                    splitWithGsapHero: function() {
                        var t = this.$refs.block;
                        t.querySelectorAll(".hero .animatable-text__heading, .contact-module:first-child .animatable-text__heading").forEach((function(t) {
                            new r.a(t, {
                                type: "lines,words,chars",
                                linesClass: "animatable-text__line",
                                wordsClass: "animatable-text__word",
                                charsClass: "animatable-text__character",
                                tag: "span"
                            })
                        })), this.timeline = o.b.timeline({
                            scrollTrigger: {
                                trigger: t,
                                start: "bottom bottom",
                                toggleActions: "restart none none reverse"
                            }
                        }), this.timeline.fromTo(t.querySelectorAll(".hero .animatable-text__character, .contact-module:first-child .animatable-text__character"), {
                            yPercent: 100
                        }, {
                            yPercent: 0,
                            stagger: {
                                amount: .75
                            },
                            ease: "inOut"
                        }, "+=.4")
                    },
                    splitWithGsapInPage: function() {
                        var t = this.$refs.block;
                        t.querySelectorAll(" .module:not(.hero) .animatable-text__heading, .footer .animatable-text__heading").forEach((function(t) {
                            new r.a(t, {
                                type: "lines,words,chars",
                                linesClass: "animatable-text__line",
                                wordsClass: "animatable-text__word",
                                charsClass: "animatable-text__character",
                                tag: "span"
                            })
                        })), this.timeline = o.b.timeline({
                            scrollTrigger: {
                                trigger: t,
                                start: "bottom bottom",
                                toggleActions: "restart none none reverse"
                            }
                        }), this.timeline.fromTo(t.querySelectorAll(".module:not(.hero) .animatable-text__character, .footer .animatable-text__character"), {
                            yPercent: 100
                        }, {
                            yPercent: 0,
                            stagger: {
                                amount: .75
                            },
                            ease: "inOut"
                        })
                    },
                    splitWithGsapFirstLoadHero: function() {
                        var t = this.$refs.block;
                        t.querySelectorAll(".hero .animatable-text__heading, .contact-module:first-child .animatable-text__heading").forEach((function(t) {
                            new r.a(t, {
                                type: "lines,words,chars",
                                linesClass: "animatable-text__line",
                                wordsClass: "animatable-text__word",
                                charsClass: "animatable-text__character",
                                tag: "span",
                                lineThreshold: .3
                            })
                        })), this.timeline = o.b.timeline({
                            scrollTrigger: {
                                trigger: t,
                                start: "bottom bottom",
                                toggleActions: "restart none none reverse"
                            }
                        }), this.timeline.fromTo(t.querySelectorAll(".hero .animatable-text__character, .contact-module:first-child .animatable-text__character"), {
                            yPercent: 100
                        }, {
                            yPercent: 0,
                            stagger: {
                                amount: .75
                            },
                            ease: "inOut"
                        }, "+=1.3")
                    },
                    splitWithGsapFirstLoadInPage: function() {
                        var t = this.$refs.block;
                        t.querySelectorAll(" .module:not(.hero) .animatable-text__heading, .footer .animatable-text__heading").forEach((function(t) {
                            new r.a(t, {
                                type: "lines,words,chars",
                                linesClass: "animatable-text__line",
                                wordsClass: "animatable-text__word",
                                charsClass: "animatable-text__character",
                                tag: "span"
                            })
                        })), this.timeline = o.b.timeline({
                            scrollTrigger: {
                                trigger: t,
                                start: "bottom bottom",
                                toggleActions: "restart none none reverse"
                            }
                        }), this.timeline.fromTo(t.querySelectorAll(".module:not(.hero) .animatable-text__character, .footer .animatable-text__character"), {
                            yPercent: 100
                        }, {
                            yPercent: 0,
                            stagger: {
                                amount: .75
                            },
                            ease: "inOut"
                        })
                    }
                },
                mounted: function() {
                    this.$store.state.appData.showLoadingComponent ? this.animateFirstLoadTimelines() : this.animateTimelines()
                },
                beforeDestroy: function() {
                    this.timeline && this.timeline.scrollTrigger.kill()
                }
            },
            c = (n(379), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    ref: "block",
                    staticClass: "animatable-text",
                    class: [t.variant ? "animatable-text--".concat(t.variant) : null]
                }, ["home-hero" === t.variant ? e("h1", {
                    staticClass: "animatable-text__heading",
                    domProps: {
                        innerHTML: t._s(t.textContent)
                    }
                }) : "h2" === t.variant ? e("h2", {
                    staticClass: "animatable-text__heading",
                    domProps: {
                        innerHTML: t._s(t.textContent)
                    }
                }) : ("standard-hero" === t.variant || t.variant, e("p", {
                    staticClass: "animatable-text__heading",
                    domProps: {
                        innerHTML: t._s(t.textContent)
                    }
                }))])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(69);
        var o = n(4),
            r = n(105),
            l = o.a.extend({
                components: {
                    CustomButton: r.default
                },
                props: {
                    buttonBlockStyle: {
                        type: [String],
                        default: "standard"
                    },
                    buttons: {
                        type: [Array]
                    }
                }
            }),
            c = (n(389), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "button-block",
                    class: "button-block--".concat(t.buttonBlockStyle)
                }, t._l(t.buttons, (function(button, t) {
                    return e("custom-button", {
                        key: t,
                        attrs: {
                            type: button.type,
                            link: button.link,
                            text: button.link.text
                        }
                    })
                })), 1)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(69);
        var o = n(4),
            r = n(36),
            l = o.a.extend({
                name: "button-template",
                components: {
                    NavigationLink: r.default
                },
                props: {
                    link: {
                        type: [Object]
                    },
                    text: {
                        type: [String],
                        required: !0
                    }
                }
            }),
            c = (n(383), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("navigation-link", {
                    staticClass: "button",
                    attrs: {
                        link: t.link
                    }
                }, [e("span", {
                    staticClass: "button__text",
                    domProps: {
                        textContent: t._s(t.text)
                    }
                })])
            }), [], !1, null, "7d939838", null);
        e.default = component.exports
    }, , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4).a.extend({
                name: "button-scroll",
                props: {
                    scrollTarget: {
                        type: [String],
                        required: !0
                    },
                    colour: {
                        type: [String],
                        default: "black"
                    }
                },
                methods: {
                    scrollToSection: function(t) {
                        this.$scrollSmoother.scrollTo(t, !0, "top 90")
                    }
                }
            }),
            r = (n(384), n(5)),
            component = Object(r.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("button", {
                    ref: "scrollButton",
                    staticClass: "button button--scroll",
                    on: {
                        click: function(e) {
                            return t.scrollToSection("#".concat(t.scrollTarget))
                        }
                    }
                }, [e("svg", {
                    staticClass: "button__arrow-icon",
                    attrs: {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    staticClass: "button__arrow-chevron",
                    attrs: {
                        d: "M17 8L9 16L1 8",
                        stroke: t.colour,
                        "stroke-width": "2"
                    }
                }), t._v(" "), e("path", {
                    staticClass: "button__arrow-line",
                    attrs: {
                        d: "M9.17407 1.56519L9.00016 16",
                        stroke: t.colour,
                        "stroke-width": "2"
                    }
                })])])
            }), [], !1, null, "469ad66f", null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(27), n(28), n(43), n(44), n(35), n(10), n(17);
        var o = n(16),
            r = n(4),
            l = n(36),
            c = n(105),
            d = n(301),
            f = n(76),
            h = n(56);

        function v(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }
        var m = r.a.extend({
                components: {
                    MainNav: d.default,
                    CustomButton: c.default,
                    NavigationLink: l.default
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? v(Object(n), !0).forEach((function(e) {
                            Object(o.a)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, Object(f.b)({
                    navOpen: function(t) {
                        return t.appData.navOpen
                    }
                })),
                methods: {
                    closeNav: function() {
                        this.navOpen = !1, Object(h.b)(), this.$store.commit("appData/setNavOpen", !1)
                    },
                    showOnScrollUp: function() {
                        var header = this.$refs.header,
                            t = window.scrollY;
                        window.addEventListener("scroll", (function() {
                            var e = window.scrollY;
                            t > e && e > 32 ? header.setAttribute("data-scrolling", "up") : header.setAttribute("data-scrolling", ""), t = e
                        }))
                    }
                },
                mounted: function() {
                    this.showOnScrollUp()
                }
            }),
            _ = m,
            y = (n(400), n(5)),
            component = Object(y.a)(_, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("header", {
                    ref: "header",
                    staticClass: "header",
                    class: t.navOpen ? "header--nav-open" : ""
                }, [e("div", {
                    staticClass: "header__container container"
                }, [e("navigation-link", {
                    staticClass: "header__logo-link",
                    attrs: {
                        link: {
                            url: "/"
                        }
                    }
                }, [e("nuxt-picture", {
                    staticClass: "header__logo-holder",
                    attrs: {
                        preset: "standard",
                        imgAttrs: {
                            class: "header__logo"
                        },
                        alt: "Kingshaus logo",
                        src: "../../images/logos/kingshaus-white.svg"
                    }
                })], 1)], 1), t._v(" "), e("main-nav")], 1)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Header: n(192).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(302),
            l = n(303),
            c = n(131),
            d = o.a.extend({
                components: {
                    AnimatableText: c.default,
                    FooterSmallPrint: l.default,
                    FooterNav: r.default
                },
                data: function() {
                    return {
                        heading: {
                            animatedText: "Build<br>smarter",
                            variant: "footer"
                        },
                        nav: {
                            logo: {
                                type: "asset_image_BlockType",
                                image: [{
                                    src: "../../images/logos/kingshaus-dark.svg",
                                    alt: "Kingshaus logo"
                                }]
                            },
                            links: [{
                                url: "/build-smarter/",
                                text: "Build Smarter"
                            }, {
                                url: "/sustainability/",
                                text: "Sustainability"
                            }, {
                                url: "/about/",
                                text: "About"
                            }],
                            buttons: [{
                                type: "footer-nav",
                                link: {
                                    text: "Let’s work together",
                                    url: "/contact/"
                                }
                            }]
                        },
                        smallPrint: {
                            links: [{
                                url: "/privacy-policy/",
                                text: "Privacy policy"
                            }]
                        }
                    }
                }
            }),
            f = (n(403), n(5)),
            component = Object(f.a)(d, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("footer", {
                    ref: "footer",
                    staticClass: "footer"
                }, [e("div", {
                    staticClass: "footer__container container"
                }, [e("div", {
                    staticClass: "footer__chevron-holder"
                }, [e("svg", {
                    staticClass: "footer__chevron",
                    attrs: {
                        fill: "none",
                        height: "782",
                        viewBox: "0 0 1896 782",
                        width: "1896",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "m688.1 212.455-.243-.162 256.411-211.645258 950.332 780.852258h-513l-436.367-358.026-.318-.262-.318.264-430.283 356.807h-512.92471l686.19271-567.399z",
                        stroke: "#282828",
                        opacity: "0.1"
                    }
                })])]), t._v(" "), e("animatable-text", {
                    staticClass: "footer__animatable-text",
                    attrs: {
                        textContent: t.heading.animatedText,
                        variant: t.heading.variant
                    }
                }), t._v(" "), e("footer-nav", {
                    staticClass: "footer__nav",
                    attrs: {
                        nav: t.nav
                    }
                }), t._v(" "), e("footer-small-print", {
                    staticClass: "footer__small-print",
                    attrs: {
                        "small-print": t.smallPrint
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Footer: n(193).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(125), n(10), n(17);
        var o = n(4),
            r = n(30),
            l = n(65),
            c = n(127),
            d = n(155);
        "undefined" != typeof window && r.a.registerPlugin(l.default, c.b, d.b);
        var f = new o.a({
            data: function() {
                return {
                    listenersAdded: !1,
                    vars: {},
                    smoother: null
                }
            },
            computed: {
                isTouch: function() {
                    return l.default.isTouch
                },
                progress: function() {
                    return this.get().progress
                },
                scrollTrigger: function() {
                    return this.get().scrollTrigger
                }
            },
            methods: {
                create: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.vars;
                    this.smoother && this.smoother.kill(), this.smoother = c.b.create(t), this.listenersAdded || (this.listenersAdded = !0, this.$_addScrollListeners()), t.effects && this.parseEffects()
                },
                content: function() {
                    var t;
                    return (t = this.get()).content.apply(t, arguments)
                },
                effects: function() {
                    var t;
                    return (t = this.get()).effects.apply(t, arguments)
                },
                get: function() {
                    return this.smoother || this.create(), this.smoother
                },
                getVelocity: function() {
                    return this.get().velocity()
                },
                kill: function() {
                    this.get().kill(), this.smoother = null, this.$_removeScrollListeners()
                },
                offset: function() {
                    var t;
                    return (t = this.get()).offset.apply(t, arguments)
                },
                paused: function() {
                    var t;
                    return (t = this.get()).paused.apply(t, arguments)
                },
                scrollTo: function() {
                    var t;
                    return (t = this.get()).scrollTo.apply(t, arguments)
                },
                scrollTop: function() {
                    var t;
                    return (t = this.get()).scrollTop.apply(t, arguments)
                },
                smooth: function() {
                    var t;
                    return (t = this.get()).smooth.apply(t, arguments)
                },
                wrapper: function() {
                    var t;
                    return (t = this.get()).wrapper.apply(t, arguments)
                },
                refresh: function() {
                    this.get(), l.default.refresh()
                },
                parseEffects: function() {
                    this.killEffects(), this.get().effects("[data-speed], [data-lag]", {}), l.default.sort(), l.default.refresh()
                },
                killEffects: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.get().effects().forEach((function(e) {
                        return e.kill(t)
                    })), l.default.refresh()
                },
                $_addScrollListeners: function() {
                    this.$nuxt.$on("stop-scroll", this.$_onStopScroll), this.$nuxt.$on("start-scroll", this.$_onStartScroll), this.$nuxt.$on("reset-scroll", this.$_onResetScroll), this.$nuxt.$on("refresh-scroll", this.$_onRefreshScroll)
                },
                $_removeScrollListeners: function() {
                    this.$nuxt.$off("stop-scroll", this.$_onStopScroll), this.$nuxt.$off("start-scroll", this.$_onStartScroll), this.$nuxt.$off("reset-scroll", this.$_onResetScroll), this.$nuxt.$off("refresh-scroll", this.$_onRefreshScroll), this.listenersAdded = !1
                },
                $_onStopScroll: function() {
                    console.log("stopScroll")
                },
                $_onStartScroll: function() {
                    console.log("startScroll")
                },
                $_onResetScroll: function() {
                    console.log("resetScroll"), this.scrollTop(0)
                },
                $_onRefreshScroll: function() {
                    console.log("refreshScroll"), this.refresh()
                }
            }
        });
        o.a.$scrollSmoother = o.a.prototype.$scrollSmoother = f;
        var h = {
                name: "GSAPScrollSmoother",
                props: {
                    vars: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                watch: {
                    vars: {
                        immediate: !0,
                        handler: function(t) {
                            this.$scrollSmoother && (this.$scrollSmoother.vars = t)
                        }
                    }
                },
                mounted: function() {
                    this.$scrollSmoother.smoother || (this.$scrollSmoother.vars = this.vars, this.$scrollSmoother.create())
                }
            },
            v = n(5),
            component = Object(v.a)(h, (function() {
                var t = this._self._c;
                return t("div", {
                    attrs: {
                        id: "smooth-wrapper"
                    }
                }, [t("div", {
                    attrs: {
                        id: "smooth-content"
                    }
                }, [this._t("default")], 2)])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , function(t, e, n) {
        "use strict";
        var o = n(23),
            r = n(15),
            l = (n(95), n(10), n(27), n(59), n(60), n(61), n(39), n(40), n(24), n(54), n(49), n(17), n(42), n(48), n(56));

        function c(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return d(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return l = t.done, t
                },
                e: function(t) {
                    c = !0, r = t
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (c) throw r
                    }
                }
            }
        }

        function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }
        e.a = function(t, e) {
            t.app;
            var n = [],
                d = Object(l.c)().height / 2,
                f = Object(l.c)().height / 3,
                h = Object(l.c)().height / 4,
                v = [],
                m = [],
                _ = [],
                y = function() {
                    var t, e;
                    (v = [], document.querySelectorAll("[data-background-change]").forEach((function(element) {
                        var e = null == element ? void 0 : element.getAttribute("data-background-change");
                        if (e) {
                            var rect = null == element ? void 0 : element.getBoundingClientRect();
                            t || (t = e), v.push({
                                top: ((null == rect ? void 0 : rect.top) || 0) + window.scrollY,
                                colour: e
                            })
                        }
                    })), t) && (null === (e = document.querySelector("body")) || void 0 === e || e.setAttribute("data-background-colour", t))
                };
            e("handleColouredBackgrounds", (function() {
                window.addEventListener("resize", (function() {
                    y()
                })), n.push({
                    func: function() {
                        var t = window.scrollY + d;
                        if ("object" === Object(r.a)(v)) {
                            var e, n = c(v.entries());
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var l, f, h = Object(o.a)(e.value, 2),
                                        m = h[0],
                                        section = h[1];
                                    if (t > section.top && (!v[m + 1] || t < (null === (l = v[m + 1]) || void 0 === l ? void 0 : l.top))) null === (f = document.querySelector("body")) || void 0 === f || f.setAttribute("data-background-colour", section.colour)
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        }
                    }
                })
            })), e("setColouredBackgrounds", (function() {
                setTimeout((function() {
                    y()
                }), 100)
            }));
            var x = function() {
                    m = [], document.querySelectorAll("[data-activated-section]").forEach((function(element) {
                        var t = element.getAttribute("data-activated-section").split(",") || [0, 0],
                            rect = null == element ? void 0 : element.getBoundingClientRect();
                        m.push({
                            top: ((null == rect ? void 0 : rect.top) || 0) + window.scrollY + (Number(t[0]) || 0),
                            bottom: ((null == rect ? void 0 : rect.bottom) || 0) + window.scrollY + (Number(t[1]) || 0),
                            middle: ((null == rect ? void 0 : rect.top) || 0) + (null == element ? void 0 : element.clientHeight) / 2 + window.scrollY + (Number(t[1]) || 0),
                            height: (null == rect ? void 0 : rect.height) || 0,
                            element: element
                        })
                    }))
                },
                w = function() {
                    var t, e = window.scrollY,
                        n = e + d,
                        r = e + 3 * h,
                        l = e + 2 * f,
                        v = e - h,
                        _ = e - f,
                        y = e + d + 50,
                        x = e + d + 200,
                        w = c(m.entries());
                    try {
                        for (w.s(); !(t = w.n()).done;) {
                            var k, P, C, O, S, j, T, A, $, L, B, I, N, E, D, H, R, M, V = Object(o.a)(t.value, 2),
                                section = (V[0], V[1]);
                            if (y > section.top) null === (k = section.element) || void 0 === k || null === (k = k.classList) || void 0 === k || k.add("active-enter-half-less-50");
                            else null === (P = section.element) || void 0 === P || null === (P = P.classList) || void 0 === P || P.remove("active-enter-half-less-50");
                            if (x > section.top) null === (C = section.element) || void 0 === C || null === (C = C.classList) || void 0 === C || C.add("active-enter-half-less-200");
                            else null === (O = section.element) || void 0 === O || null === (O = O.classList) || void 0 === O || O.remove("active-enter-half-less-200");
                            if (_ > section.top) null === (S = section.element) || void 0 === S || null === (S = S.classList) || void 0 === S || S.add("active-leave-third");
                            else null === (j = section.element) || void 0 === j || null === (j = j.classList) || void 0 === j || j.remove("active-leave-third");
                            if (v > section.top) null === (T = section.element) || void 0 === T || null === (T = T.classList) || void 0 === T || T.add("active-leave-quarter");
                            else null === (A = section.element) || void 0 === A || null === (A = A.classList) || void 0 === A || A.remove("active-leave-quarter");
                            if (r > section.top) null === ($ = section.element) || void 0 === $ || null === ($ = $.classList) || void 0 === $ || $.add("active-enter-quarter");
                            else null === (L = section.element) || void 0 === L || null === (L = L.classList) || void 0 === L || L.remove("active-enter-quarter");
                            if (l > section.top) null === (B = section.element) || void 0 === B || null === (B = B.classList) || void 0 === B || B.add("active-enter-third");
                            else null === (I = section.element) || void 0 === I || null === (I = I.classList) || void 0 === I || I.remove("active-enter-third");
                            if (n > section.top) null === (N = section.element) || void 0 === N || null === (N = N.classList) || void 0 === N || N.add("active-enter-half");
                            else null === (E = section.element) || void 0 === E || null === (E = E.classList) || void 0 === E || E.remove("active-enter-half");
                            if (n > section.middle) null === (D = section.element) || void 0 === D || null === (D = D.classList) || void 0 === D || D.add("active-middle");
                            else null === (H = section.element) || void 0 === H || null === (H = H.classList) || void 0 === H || H.remove("active-middle");
                            if (n > section.bottom) null === (R = section.element) || void 0 === R || null === (R = R.classList) || void 0 === R || R.add("active-bottom");
                            else null === (M = section.element) || void 0 === M || null === (M = M.classList) || void 0 === M || M.remove("active-bottom")
                        }
                    } catch (t) {
                        w.e(t)
                    } finally {
                        w.f()
                    }
                };
            e("handleActivatedSections", (function() {
                window.addEventListener("resize", (function() {
                    x()
                })), n.push({
                    func: function() {
                        return w()
                    }
                })
            })), e("setActivatedSections", (function() {
                setTimeout((function() {
                    x(), w()
                }), 300)
            }));
            var k = function() {
                (_ = []).push({
                    top: 32,
                    attribute: "data-scrolled"
                })
            };
            e("handleBodyStates", (function() {
                window.addEventListener("resize", (function() {
                    k()
                })), n.push({
                    func: function() {
                        var t, e = window.scrollY,
                            n = c(_.entries());
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r, l, d = Object(o.a)(t.value, 2),
                                    section = (d[0], d[1]);
                                if (e > section.top) null === (r = document.body) || void 0 === r || r.setAttribute(section.attribute, "true");
                                else null === (l = document.body) || void 0 === l || l.setAttribute(section.attribute, "false")
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    }
                })
            })), e("setBodyStates", (function() {
                setTimeout((function() {
                    k()
                }), 300)
            })), e("triggerOnScroll", (function(t, e) {
                n.push({
                    func: t,
                    vars: e
                })
            })), document.addEventListener("scroll", (function() {
                for (var t = 0, e = n; t < e.length; t++) {
                    var o = e[t];
                    o.func(o.vars)
                }
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(30),
            r = n(65),
            l = n(127),
            c = n(155);
        o.a.registerPlugin(r.ScrollTrigger, l.a, c.a)
    }, function(t, e, n) {
        "use strict";
        e.a = function(t) {
            var e = t.query,
                n = t.enablePreview,
                o = t.$config,
                r = o.PREVIEW_PARAM,
                l = o.LIVE_PREVIEW_PARAM;
            (e[r] || e[l]) && n()
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(20);
        n(66), n(53);
        e.a = function(t, e) {
            var n = t.$config,
                r = (n.API_ROOT, n.API_GRAPHQL_ENDPOINT, t.app, function() {
                    var t = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                        var o, r;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return");
                                case 7:
                                    o = t.sent, t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10, t.t0 = t.catch(4), r = JSON.stringify(t.t0, void 0, 2);
                                case 13:
                                    return t.abrupt("return", {
                                        response: o,
                                        error: r
                                    });
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [4, 10]
                        ])
                    })));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }());
            e("craft", r)
        }
    }, function(t, e, n) {
        "use strict";
        n(27), n(59), n(60), n(61), n(39), n(40), n(10), n(24), n(54), n(49), n(42);

        function o(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return r(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var l, c = !0,
                d = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done, t
                },
                e: function(t) {
                    d = !0, l = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (d) throw l
                    }
                }
            }
        }
        

        function r(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }
        var l = {
                name: "NuxtVideo",
                mixins: [{
                    props: {
                        sources: {
                            type: Array,
                            required: !0
                        },
                        poster: {
                            type: String,
                            required: !0
                        }
                    }
                }],
                computed: {
                    nSources: function() {
                        var t, e = [],
                            n = o(this.sources);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var source = t.value;
                                e.push({
                                    src: this.$vid(source.src),
                                    type: source.type
                                })
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        return e
                    },
                    nPoster: function() {
                        return this.poster && this.$img ? this.$img(this.poster, {
                            quality: 80
                        }) : this.poster
                    }
                },
                created: function() {
                    0
                }
            },
            c = n(5),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("video", t._g({
                    key: Math.random(),
                    attrs: {
                        poster: t.nPoster
                    }
                }, t.$listeners), t._l(t.nSources, (function(source, t) {
                    return e("source", {
                        key: t,
                        attrs: {
                            src: source.src,
                            type: source.type
                        }
                    })
                })), 0)
            }), [], !1, null, null, null);
        e.a = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(69);
        var o = n(4),
            r = n(36),
            l = o.a.extend({
                name: "button-link-green",
                components: {
                    NavigationLink: r.default
                },
                props: {
                    link: {
                        type: [Object]
                    },
                    text: {
                        type: [String],
                        required: !0
                    }
                }
            }),
            c = (n(385), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("navigation-link", {
                    staticClass: "button button--link-green",
                    attrs: {
                        link: t.link
                    }
                }, [e("span", {
                    staticClass: "button__text",
                    domProps: {
                        textContent: t._s(t.text)
                    }
                })])
            }), [], !1, null, "e28add84", null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(69);
        var o = n(4),
            r = n(36),
            l = o.a.extend({
                name: "button-outline",
                components: {
                    NavigationLink: r.default
                },
                props: {
                    link: {
                        type: [Object]
                    },
                    text: {
                        type: [String],
                        required: !0
                    }
                }
            }),
            c = (n(387), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("navigation-link", {
                    staticClass: "button button--footer-nav",
                    attrs: {
                        link: t.link
                    }
                }, [e("span", {
                    staticClass: "button__text",
                    domProps: {
                        textContent: t._s(t.text)
                    }
                })])
            }), [], !1, null, "1eb58e70", null);
        e.default = component.exports
    }, , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(157),
            l = n(129),
            c = n(209),
            d = n(299),
            f = n(300),
            h = o.a.extend({
                components: {
                    LogoBlock: f.default,
                    BulletList: d.default,
                    Heading: c.default,
                    TextBlock: l.default,
                    ButtonBlock: r.default
                },
                props: {
                    heading: {
                        type: [Array]
                    },
                    contentArea: {
                        type: [Array]
                    },
                    colour: {
                        type: [String]
                    },
                    alignment: {
                        type: [String]
                    }
                },
                data: function() {
                    return {
                        types: {
                            textBlock: null,
                            buttonBlock: null
                        },
                        formattedModules: []
                    }
                }
            }),
            v = (n(395), n(5)),
            component = Object(v.a)(h, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "content-area",
                    class: {
                        "content-area--text-white": "white" === t.colour, "content-area--text-dark": "dark" === t.colour, "content-area--text-centre": "centre" === t.alignment
                    }
                }, [e("heading", {
                    staticClass: "content-area__heading",
                    attrs: {
                        heading: t.heading && t.heading.length ? t.heading[0] : null
                    }
                }), t._v(" "), t._l(t.contentArea, (function(content) {
                    return t.contentArea && t.contentArea.length ? ["textBlock" === content.type ? e("text-block", {
                        staticClass: "content-area__text-block",
                        attrs: {
                            alignment: t.alignment,
                            colour: t.colour
                        },
                        domProps: {
                            innerHTML: t._s(content.textBlock)
                        }
                    }) : t._e(), t._v(" "), "buttonBlock" === content.type && content.buttons && content.buttons.length ? e("button-block", {
                        staticClass: "content-area__button-block",
                        attrs: {
                            buttons: content.buttons,
                            heading: content.heading,
                            "button-block-style": content.style
                        }
                    }) : t._e(), t._v(" "), "bulletList" === content.type && content.list && content.list.length ? e("bullet-list", {
                        staticClass: "content-area__bullet-list",
                        attrs: {
                            list: content.list
                        }
                    }) : t._e(), t._v(" "), "logoBlock" === content.type && content.logos && content.logos.length ? e("logo-block", {
                        staticClass: "content-area__logo-block",
                        attrs: {
                            logos: content.logos
                        }
                    }) : t._e()] : t._e()
                }))], 2)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }));
        var o = function(t, e, n, o, r, l, c) {
            return [{
                hid: "description",
                name: "description",
                content: t
            }, {
                hid: "ogtitle",
                property: "og:title",
                content: r
            }, {
                hid: "ogimage",
                property: "og:image",
                content: c
            }, {
                hid: "ogdescription",
                property: "og:description",
                content: l
            }, {
                hid: "ogsite_name",
                property: "og:site_name",
                content: r
            }, {
                hid: "twittertitle",
                name: "twitter:title",
                content: e
            }, {
                hid: "twitterdescription",
                name: "twitter:description",
                content: n
            }, {
                hid: "twitterimage",
                name: "twitter:image",
                content: o
            }]
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(79),
            l = o.a.extend({
                components: {
                    Asset: r.default
                },
                props: {
                    heading: {
                        type: [Object]
                    },
                    colour: {
                        type: [String]
                    },
                    alignment: {
                        type: [String]
                    }
                }
            }),
            c = (n(392), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return t.heading && t.heading.type || t.heading && t.heading.asset && t.heading.asset.length ? e("div", {
                    staticClass: "heading",
                    class: [t.heading && t.heading.type ? t.heading.type : "", t.alignment ? "heading--text-".concat(t.alignment) : null, t.colour ? "heading--text-".concat(t.colour) : null]
                }, [t.heading && t.heading.asset && t.heading.asset.length ? e("asset", {
                    staticClass: "heading__asset",
                    attrs: {
                        preset: "standard",
                        asset: t.heading.asset[0],
                        "img-attrs": {
                            class: "heading__image"
                        },
                        "mobile-img-attrs": {
                            class: "heading__image--mobile"
                        },
                        "desktop-img-attrs": {
                            class: "heading__image--desktop"
                        },
                        "picture-class": "heading__image-holder",
                        "desktop-picture-class": "heading__image-holder--desktop",
                        "mobile-picture-class": "heading__image-holder--mobile",
                        "video-class": "heading__video",
                        "desktop-video-class": "heading__video--desktop",
                        "mobile-video-class": "heading__video--mobile"
                    }
                }) : t._e(), t._v(" "), t.heading && t.heading.text && "h1" === t.heading.type ? e("h1", {
                    staticClass: "heading__heading heading__heading--h1",
                    domProps: {
                        innerHTML: t._s(t.heading.text)
                    }
                }) : t.heading && t.heading.text && "h2" === t.heading.type ? e("h2", {
                    staticClass: "heading__heading heading__heading--h2",
                    domProps: {
                        innerHTML: t._s(t.heading.text)
                    }
                }) : t.heading && t.heading.text && "h3" === t.heading.type ? e("h3", {
                    staticClass: "heading__heading heading__heading--h3",
                    domProps: {
                        innerHTML: t._s(t.heading.text)
                    }
                }) : t.heading && t.heading.text && "h4" === t.heading.type ? e("h4", {
                    staticClass: "heading__heading heading__heading--h4",
                    domProps: {
                        innerHTML: t._s(t.heading.text)
                    }
                }) : t.heading && t.heading.text && "h5" === t.heading.type ? e("h5", {
                    staticClass: "heading__heading heading__heading--h5",
                    domProps: {
                        innerHTML: t._s(t.heading.text)
                    }
                }) : t.heading && t.heading.text && "h6" === t.heading.type ? e("h6", {
                    staticClass: "heading__heading heading__heading--h6",
                    domProps: {
                        innerHTML: t._s(t.heading.text)
                    }
                }) : t._e()], 1) : t._e()
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4).a.extend({
                props: {}
            }),
            r = n(5),
            component = Object(r.a)(o, (function() {
                var t = this._self._c;
                this._self._setupProxy;
                return t("svg", {
                    attrs: {
                        width: "35",
                        height: "30",
                        viewBox: "0 0 35 30",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [t("polygon", {
                    attrs: {
                        points: "0,30 30,15 0,0",
                        fill: "white"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, , function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        t.exports = {}
    }, , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(131),
            l = o.a.extend({
                components: {
                    AnimatableText: r.default
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
            c = (n(380), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("section", {
                    ref: "module",
                    staticClass: "minimal-hero module hero",
                    attrs: {
                        id: t.module.id ? t.module.id : null
                    }
                }, [e("div", {
                    staticClass: "minimal-hero__container container"
                }, [t.module.hiddenH1 && t.module.hiddenH1.length ? e("h1", {
                    staticClass: "visually-hidden minimal-hero__hidden-heading",
                    domProps: {
                        textContent: t._s(t.module.hiddenH1)
                    }
                }) : t._e(), t._v(" "), e("animatable-text", {
                    staticClass: "minimal-hero__visible-heading",
                    attrs: {
                        "text-content": t.module.tagline.animatedText,
                        variant: t.module.tagline.variant
                    }
                })], 1)])
            }), [], !1, null, "2c468f75", null);
        e.default = component.exports
    }, , , , , , , function(t, e, n) {
        "use strict";
        n(48);
        var o = n(4),
            r = n(130),
            header = n(192),
            footer = n(193),
            l = n(304),
            c = n(194),
            d = n(305),
            f = o.a.extend({
                name: "default",
                components: {
                    PopupsRack: d.default,
                    GSAPScrollSmoother: c.default,
                    PageLoader: l.default,
                    CustomHeader: header.default,
                    CustomFooter: footer.default
                },
                data: function() {
                    return {
                        loading: !0,
                        windowWidth: 0
                    }
                },
                mounted: function() {
                    var t = this;
                    this.setSizingProperties(), this.setImmutableSizingProperties(), this.setDynamicSizingProperties(), this.onResize(), window.addEventListener("resize", this.onResize), window.browser = window.browser || {}, window.browser.canHover = !window.matchMedia("(hover: none)").matches, window.scrollTo(0, 0), this.$handleColouredBackgrounds(), this.$handleActivatedSections(), this.$handleBodyStates(), this.$setColouredBackgrounds(), this.$setActivatedSections(), this.$setBodyStates(), this.$store.commit("appData/setShowLoadingComponent", !0), setTimeout((function() {
                        t.$store.commit("appData/setShowLoadingComponent", !1)
                    }), 1300), setTimeout((function() {
                        t.loading = !1
                    }), 1300), this.fireCookieConsent(), this.fireAnalytics()
                },
                destroyed: function() {
                    window.removeEventListener("resize", this.onResize)
                },
                methods: {
                    setSizingProperties: function() {
                        document.documentElement.style.setProperty("--vw", "".concat(.01 * window.innerWidth, "px")), document.documentElement.style.setProperty("--vh", "".concat(.01 * window.innerHeight, "px"))
                    },
                    setImmutableSizingProperties: function() {
                        document.documentElement.style.setProperty("--vw-im", "".concat(.01 * window.visualViewport.width, "px")), document.documentElement.style.setProperty("--vh-im", "".concat(.01 * window.visualViewport.height, "px"))
                    },
                    setDynamicSizingProperties: function() {
                        document.documentElement.style.setProperty("--dvw", "".concat(.01 * window.innerWidth, "px")), document.documentElement.style.setProperty("--dvh", "".concat(.01 * window.innerHeight, "px"))
                    },
                    onResize: function() {
                        window.innerWidth === this.windowWidth && Object(r.b)() || (this.windowWidth = window.innerWidth, this.setDynamicSizingProperties(), this.setSizingProperties())
                    },
                    fireCookieConsent: function() {},
                    fireAnalytics: function() {}
                }
            }),
            h = n(5),
            component = Object(h.a)(f, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    class: !0 === t.loading ? "loading" : "loaded"
                }, [!0 === t.loading ? e("page-loader") : t._e(), t._v(" "), e("custom-header", {
                    style: "".concat(t.loading ? "transform: translateY(-100%)!important" : "")
                }), t._v(" "), e("GSAPScrollSmoother", {
                    attrs: {
                        vars: {
                            smooth: 1.5,
                            effects: !0,
                            smoothTouch: 0
                        }
                    }
                }, [e("Nuxt"), t._v(" "), e("custom-footer")], 1), t._v(" "), e("popups-rack")], 1)
            }), [], !1, null, null, null);
        e.a = component.exports;
        installComponents(component, {
            GSAPScrollSmoother: n(194).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(207),
            l = o.a.extend({
                components: {
                    ContentArea: r.default
                },
                props: {
                    module: {
                        type: [Object],
                        required: !0
                    }
                }
            }),
            c = (n(396), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("section", {
                    staticClass: "error-notice module",
                    attrs: {
                        id: t.module.id ? t.module.id : null,
                        "data-activated-section": ""
                    }
                }, [e("div", {
                    staticClass: "error-notice__container container"
                }, [e("content-area", {
                    staticClass: "error-notice__content-area",
                    attrs: {
                        "content-area": t.module.contentArea
                    }
                })], 1)])
            }), [], !1, null, "dd3bbc32", null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(69);
        var o = n(4),
            r = n(36),
            l = o.a.extend({
                name: "button-solid-green",
                components: {
                    NavigationLink: r.default
                },
                props: {
                    link: {
                        type: [Object]
                    },
                    text: {
                        type: [String],
                        required: !0
                    }
                }
            }),
            c = (n(386), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("navigation-link", {
                    staticClass: "button button--solid-green",
                    attrs: {
                        link: t.link
                    }
                }, [e("span", {
                    staticClass: "button__text",
                    domProps: {
                        textContent: t._s(t.text)
                    }
                })])
            }), [], !1, null, "7ef03004", null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4).a.extend({
                props: {
                    list: {
                        type: [Array],
                        required: !0
                    }
                }
            }),
            r = (n(393), n(5)),
            component = Object(r.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("ul", {
                    staticClass: "bullet-list"
                }, t._l(t.list, (function(n, o) {
                    return e("li", {
                        key: o,
                        staticClass: "bullet-list__item"
                    }, [e("span", {
                        staticClass: "bullet-list__text bullet-list__text--main",
                        domProps: {
                            innerHTML: t._s(n.mainText)
                        }
                    }), t._v(" "), n.secondaryText ? e("span", {
                        staticClass: "bullet-list__text bullet-list__text--secondary",
                        domProps: {
                            innerHTML: t._s(n.secondaryText)
                        }
                    }) : t._e()])
                })), 0)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(79),
            l = o.a.extend({
                components: {
                    Asset: r.default
                },
                props: {
                    logos: {
                        type: [Array],
                        required: !0
                    }
                }
            }),
            c = (n(394), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "logo-block"
                }, t._l(t.logos, (function(t, n) {
                    return e("asset", {
                        key: n,
                        staticClass: "logo-block__asset",
                        attrs: {
                            asset: t,
                            "img-attrs": {
                                class: "logo-block__image"
                            },
                            "picture-class": "logo-block__image-holder"
                        }
                    })
                })), 1)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(27), n(59), n(69), n(48);
        var o = n(4),
            r = n(36),
            l = n(105),
            c = n(56),
            d = n(129),
            f = n(130),
            h = o.a.extend({
                components: {
                    TextBlock: d.default,
                    CustomButton: l.default,
                    NavigationLink: r.default
                },
                data: function() {
                    return {
                        navOpen: !1,
                        contactButtonActive: !1,
                        primaryNavigationButton: {
                            link: {
                                text: "Contact",
                                url: "/contact/"
                            },
                            description: "Contact Kingshaus"
                        },
                        primaryNavigation: [{
                            link: {
                                text: "Build Smarter",
                                url: "/build-smarter/"
                            },
                            description: "By pre-constructing our homes offsite, we save valuable resources"
                        }, {
                            link: {
                                text: "Sustainability",
                                url: "/sustainability/"
                            },
                            description: "We can lower the carbon footprint of home construction by 80%"
                        }, {
                            link: {
                                text: "About",
                                url: "/about/"
                            },
                            description: "Kingshaus has been developing quality homes for over 75 years"
                        }],
                        activeTopLevelPage: null
                    }
                },
                methods: {
                    handleHoverContact: function() {
                        this.contactButtonActive || (this.activeTopLevelPage = null), this.contactButtonActive = !this.contactButtonActive
                    },
                    setActiveTopLevelPage: function(t, e) {
                        var n, o = null === (n = window.browser) || void 0 === n ? void 0 : n.canHover;
                        if (o || "mouseover" !== t.type && "mouseleave" !== t.type) {
                            0 === e && this.activeTopLevelPage, (!o || "mouseover" !== t.type && "mouseleave" !== t.type) && this.activeTopLevelPage === e ? (!1, this.activeTopLevelPage = e) : this.activeTopLevelPage = e
                        }
                    },
                    toggleNavOpen: function() {
                        this.navOpen || this.$store.commit("appData/setScrollPosition", {
                            x: window.scrollX,
                            y: window.scrollY,
                            path: this.$route.path
                        }), this.navOpen = !this.navOpen, this.navOpen ? (Object(c.a)(), this.$store.commit("appData/setNavOpen", !0)) : (Object(c.b)(), this.activeTopLevelPage = 0, this.$store.commit("appData/setNavOpen", !1))
                    },
                    toggleNavOpenDesktop: function() {
                        var t = this;
                        Object(c.c)().width >= 1024 && (this.navOpen || this.$store.commit("appData/setScrollPosition", {
                            x: window.scrollX,
                            y: window.scrollY,
                            path: this.$route.path
                        }), this.navOpen = !this.navOpen, this.navOpen ? this.$store.commit("appData/setNavOpen", !0) : (this.$store.commit("appData/setNavOpen", !1), setTimeout((function() {
                            t.activeTopLevelPage = 0
                        }), 400)))
                    },
                    closeNav: function() {
                        (Object(c.c)().width < 1024 || !Object(f.a)()) && (this.navOpen = !1, Object(c.b)(), this.activeTopLevelPage = null, this.$store.commit("appData/setNavOpen", !1))
                    }
                }
            }),
            v = (n(399), n(5)),
            component = Object(v.a)(h, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("nav", {
                    ref: "nav",
                    staticClass: "nav",
                    class: t.navOpen ? "nav--open" : "",
                    attrs: {
                        tabindex: "-1"
                    },
                    on: {
                        mouseenter: t.toggleNavOpenDesktop,
                        mouseleave: t.toggleNavOpenDesktop
                    }
                }, [e("button", {
                    staticClass: "nav__button nav__button--open",
                    attrs: {
                        "aria-label": "Open nav",
                        "aria-expanded": "false",
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.toggleNavOpen()
                        }
                    }
                }, [e("span", {
                    staticClass: "nav__hamburger-line"
                }), t._v(" "), e("span", {
                    staticClass: "nav__hamburger-line"
                })]), t._v(" "), e("div", {
                    staticClass: "nav__list",
                    on: {
                        click: function(e) {
                            return t.closeNav()
                        }
                    }
                }, [t._l(t.primaryNavigation, (function(n, o) {
                    return e("div", {
                        key: "link-".concat(o),
                        staticClass: "nav__link-holder",
                        on: {
                            click: function(e) {
                                return t.setActiveTopLevelPage(e, o)
                            },
                            mouseover: function(e) {
                                return t.setActiveTopLevelPage(e, o)
                            }
                        }
                    }, [e("navigation-link", {
                        staticClass: "nav__link",
                        class: {
                            "nav__link--active": o === t.activeTopLevelPage
                        },
                        attrs: {
                            link: n.link
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.closeNav()
                            }
                        }
                    }, [e("span", {
                        staticClass: "nav__page-name",
                        domProps: {
                            textContent: t._s(n.link.text)
                        }
                    }), t._v(" "), n.description ? e("text-block", {
                        ref: "navContent",
                        refInFor: !0,
                        staticClass: "nav__page-description nav__page-description--mobile",
                        attrs: {
                            "text-block": n.description
                        }
                    }) : t._e()], 1)], 1)
                })), t._v(" "), e("div", {
                    staticClass: "nav__contact-button-holder",
                    on: {
                        click: function(e) {
                            return t.closeNav()
                        },
                        mouseenter: t.handleHoverContact,
                        mouseleave: t.handleHoverContact
                    }
                }, [e("custom-button", {
                    attrs: {
                        link: t.primaryNavigationButton.link,
                        text: t.primaryNavigationButton.link.text,
                        type: "solid-green"
                    }
                })], 1), t._v(" "), t._l(t.primaryNavigation, (function(n, o) {
                    return e("div", {
                        key: "description-".concat(o),
                        staticClass: "nav__page-description nav__page-description--desktop",
                        class: {
                            "nav__page-description--active": o === t.activeTopLevelPage
                        }
                    }, [e("div", {
                        staticClass: "nav__content-holder"
                    }, [e("div", {
                        staticClass: "nav__content"
                    }, [n.description ? e("text-block", {
                        ref: "navContent",
                        refInFor: !0,
                        staticClass: "nav__text",
                        attrs: {
                            "text-block": n.description
                        }
                    }) : t._e()], 1)])])
                })), t._v(" "), e("div", {
                    staticClass: "nav__page-description nav__page-description--desktop",
                    class: {
                        "nav__page-description--active": !0 === t.contactButtonActive
                    }
                }, [e("div", {
                    staticClass: "nav__content-holder"
                }, [e("div", {
                    staticClass: "nav__content"
                }, [t.primaryNavigationButton.description ? e("text-block", {
                    ref: "navContent",
                    staticClass: "nav__text",
                    attrs: {
                        "text-block": t.primaryNavigationButton.description
                    }
                }) : t._e()], 1)])])], 2)])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(36),
            l = n(79),
            c = n(157),
            d = o.a.extend({
                components: {
                    ButtonBlock: c.default,
                    Asset: l.default,
                    NavigationLink: r.default
                },
                props: {
                    nav: {
                        type: [Object],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        activeTopLevelPage: null
                    }
                },
                methods: {
                    setActiveTopLevelPage: function(t, e) {
                        var n, o = null === (n = window.browser) || void 0 === n ? void 0 : n.canHover;
                        if (o || "mouseover" !== t.type && "mouseleave" !== t.type) {
                            null === e && this.activeTopLevelPage, (!o || "mouseover" !== t.type && "mouseleave" !== t.type) && this.activeTopLevelPage === e ? (!1, this.activeTopLevelPage = null) : this.activeTopLevelPage = e
                        }
                    }
                }
            }),
            f = (n(401), n(5)),
            component = Object(f.a)(d, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("nav", {
                    staticClass: "footer-nav"
                }, [e("navigation-link", {
                    staticClass: "footer-nav__logo-link",
                    attrs: {
                        link: {
                            url: "/"
                        },
                        "aria-label": "home page"
                    }
                }, [e("asset", {
                    staticClass: "footer-nav__logo-asset",
                    attrs: {
                        asset: t.nav.logo,
                        "img-attrs": {
                            class: "footer-nav__logo"
                        },
                        "picture-class": "footer-nav__logo-holder"
                    }
                })], 1), t._v(" "), e("ul", {
                    staticClass: "footer-nav__list"
                }, t._l(t.nav.links, (function(n, o) {
                    return e("li", {
                        key: o,
                        ref: "topLevelPage",
                        refInFor: !0,
                        staticClass: "footer-nav__item",
                        class: {
                            "footer-nav__item--active": t.activeTopLevelPage === o
                        },
                        on: {
                            click: function(e) {
                                return t.setActiveTopLevelPage(e, o)
                            },
                            mouseover: function(e) {
                                return t.setActiveTopLevelPage(e, o)
                            },
                            mouseleave: function(e) {
                                return t.setActiveTopLevelPage(e, null)
                            }
                        }
                    }, [e("navigation-link", {
                        staticClass: "footer-nav__link",
                        class: {
                            "footer-nav__link--faded": null !== t.activeTopLevelPage && t.activeTopLevelPage !== o
                        },
                        attrs: {
                            link: n
                        }
                    }, [e("span", {
                        staticClass: "footer-nav__text",
                        domProps: {
                            textContent: t._s(n.text)
                        }
                    })])], 1)
                })), 0), t._v(" "), e("button-block", {
                    staticClass: "footer-nav__button-block",
                    attrs: {
                        buttons: t.nav.buttons
                    }
                })], 1)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(36),
            l = o.a.extend({
                components: {
                    NavigationLink: r.default
                },
                props: {
                    smallPrint: {
                        type: [Object],
                        required: !0
                    }
                }
            }),
            c = (n(402), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "footer-small-print"
                }, [t._l(t.smallPrint.links, (function(link, n) {
                    return e("navigation-link", {
                        key: n,
                        staticClass: "footer-small-print__link",
                        attrs: {
                            link: link
                        }
                    }, [e("span", {
                        staticClass: "footer-small-print__text",
                        domProps: {
                            textContent: t._s(link.text)
                        }
                    })])
                })), t._v(" "), e("p", {
                    staticClass: "footer__copyright footer-small-print__text"
                }, [t._v("© "), e("time", {
                    attrs: {
                        datetime: (new Date).getFullYear()
                    },
                    domProps: {
                        textContent: t._s((new Date).getFullYear())
                    }
                }), t._v(" Kingshaus")])], 2)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(30),
            l = o.a.extend({
                components: {},
                data: function() {
                    return {
                        timeline: null
                    }
                },
                methods: {
                    animateTimelines: function() {
                        this.animateShutters()
                    },
                    animateShutters: function() {
                        var t = this.$refs.loader;
                        this.timeline = r.b.timeline({
                            scrollTrigger: {
                                trigger: t,
                                start: "top center",
                                toggleActions: "restart none none reverse"
                            }
                        }), this.timeline.fromTo(t.querySelector(".page-loader__shutter--8"), {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            ease: "power1.in",
                            duration: .7
                        }).fromTo(t.querySelector(".page-loader__shutter--7"), {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            ease: "power1.in",
                            duration: .63
                        }, "<+.15").fromTo(t.querySelector(".page-loader__shutter--6"), {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            ease: "power1.in",
                            duration: .56
                        }, "<+.15").fromTo(t.querySelector(".page-loader__shutter--5"), {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            ease: "power1.in",
                            duration: .49
                        }, "<+.15").fromTo(t.querySelector(".page-loader__shutter--4"), {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            ease: "power1.in",
                            duration: .42
                        }, "<+.15").fromTo(t.querySelector(".page-loader__shutter--3"), {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            ease: "power1.in",
                            duration: .35
                        }, "<+.15").fromTo(t.querySelector(".page-loader__shutter--2"), {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            ease: "power1.in",
                            duration: .28
                        }, "<+.15").fromTo(t.querySelector(".page-loader__shutter--1"), {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                        }, {
                            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                            ease: "power1.in",
                            duration: .21
                        }, "<+.15")
                    }
                },
                mounted: function() {
                    this.animateTimelines()
                },
                beforeDestroy: function() {
                    this.timeline && this.timeline.scrollTrigger.kill()
                }
            }),
            c = (n(404), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("section", {
                    ref: "loader",
                    staticClass: "page-loader"
                }, [t._m(0)])
            }), [function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "page-loader__container container"
                }, [e("div", {
                    staticClass: "page-loader__shutter page-loader__shutter--1"
                }), t._v(" "), e("div", {
                    staticClass: "page-loader__shutter page-loader__shutter--2"
                }), t._v(" "), e("div", {
                    staticClass: "page-loader__shutter page-loader__shutter--3"
                }), t._v(" "), e("div", {
                    staticClass: "page-loader__shutter page-loader__shutter--4"
                }), t._v(" "), e("div", {
                    staticClass: "page-loader__shutter page-loader__shutter--5"
                }), t._v(" "), e("div", {
                    staticClass: "page-loader__shutter page-loader__shutter--6"
                }), t._v(" "), e("div", {
                    staticClass: "page-loader__shutter page-loader__shutter--7"
                }), t._v(" "), e("div", {
                    staticClass: "page-loader__shutter page-loader__shutter--8"
                })])
            }], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(53), n(27), n(59), n(60), n(28), n(61), n(39), n(40), n(43), n(44), n(35), n(10), n(54), n(49), n(17), n(42);
        var o = n(16),
            r = (n(24), n(37), n(4)),
            l = n(76),
            c = n(306),
            d = n(307);

        function f(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return h(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return l = t.done, t
                },
                e: function(t) {
                    c = !0, r = t
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (c) throw r
                    }
                }
            }
        }

        function h(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        function v(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }
        var m = r.a.extend({
                components: {
                    PopupVideo: d.default,
                    PopupHolder: c.default
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? v(Object(n), !0).forEach((function(e) {
                            Object(o.a)(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, Object(l.b)({
                    popups: function(t) {
                        if (this.$route.hash) {
                            var e, n = f(t.appData.popups);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var o = e.value;
                                    if (this.$route.hash.replace("#", "") === o.id) {
                                        this.$store.commit("appData/openPopup", o);
                                        break
                                    }
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        }
                        return t.appData.popups
                    }
                })),
                mounted: function() {
                    document.addEventListener("open-popup", this.listenForOpenPopup)
                },
                destroyed: function() {
                    document.removeEventListener("open-popup", this.listenForOpenPopup)
                },
                methods: {
                    listenForOpenPopup: function(t) {
                        if (t.detail && t.detail.popupId) {
                            var e, n = f(this.popups);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var o = e.value;
                                    if (t.detail.popupId === o.id) {
                                        this.$store.commit("appData/openPopup", o);
                                        break
                                    }
                                }
                            } catch (t) {
                                n.e(t)
                            } finally {
                                n.f()
                            }
                        }
                    }
                }
            }),
            _ = m,
            y = (n(407), n(5)),
            component = Object(y.a)(_, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "popups-rack"
                }, [t._l(t.popups, (function(n) {
                    return [e("popup-holder", {
                        class: "".concat(n.open ? "popup-holder--active " : "", "popup-holder--").concat(n.type).concat(n.style ? " popup-holder--".concat(n.style) : ""),
                        attrs: {
                            "popup-id": n.id
                        }
                    }, ["video" === n.type && n.open ? e("popup-video", {
                        attrs: {
                            popup: n
                        }
                    }) : t._e()], 1)]
                }))], 2)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4).a.extend({
                props: {
                    popupId: {
                        type: [String],
                        required: !0
                    }
                },
                methods: {
                    closePopup: function() {
                        var t = this;
                        this.$store.commit("appData/closePopup", this.popupId);
                        var e = this.$router.options.scrollBehavior;
                        this.$router.options.scrollBehavior = void 0, this.$router.push(this.$route.path, (function() {
                            t.$router.options.scrollBehavior = e
                        }))
                    }
                }
            }),
            r = (n(405), n(5)),
            component = Object(r.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("article", {
                    staticClass: "popup-holder"
                }, [e("div", {
                    staticClass: "popup-holder__overlay",
                    on: {
                        click: function(e) {
                            return t.closePopup()
                        }
                    }
                }), t._v(" "), e("div", {
                    staticClass: "popup-holder__close-button",
                    on: {
                        click: function(e) {
                            return t.closePopup()
                        }
                    }
                }, [e("svg", {
                    staticClass: "popup-holder__close-icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "17.414",
                        height: "17.414",
                        viewBox: "0 0 17.414 17.414"
                    }
                }, [e("g", {
                    attrs: {
                        transform: "translate(-280.301 -674.293)"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M281.008,675l16,16",
                        transform: "translate(0)",
                        fill: "none"
                    }
                }), t._v(" "), e("path", {
                    attrs: {
                        d: "M0,0,16,16",
                        transform: "translate(297.008 675) rotate(90)",
                        fill: "none"
                    }
                })])])]), t._v(" "), e("div", {
                    staticClass: "popup-holder__card",
                    on: {
                        click: function(e) {
                            return e.target !== e.currentTarget ? null : t.closePopup()
                        }
                    }
                }, [t._t("default")], 2)])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(4),
            r = n(79),
            l = o.a.extend({
                components: {
                    Asset: r.default
                },
                props: {
                    popup: {
                        type: [Object],
                        required: !0
                    }
                }
            }),
            c = (n(406), n(5)),
            component = Object(c.a)(l, (function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "popup"
                }, [e("asset", {
                    staticClass: "popup__asset",
                    attrs: {
                        asset: t.popup.asset,
                        "video-class": "popup__video"
                    }
                })], 1)
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return d
        }));
        var o = n(15),
            r = (n(53), n(19)),
            l = {};

        function c() {
            var t, e, n, o;
            if (void 0 !== window.$nuxt) {
                var r = (null === (n = null === (e = null === (t = window.$nuxt._pagePayload) || void 0 === t ? void 0 : t.data) || void 0 === e ? void 0 : e[0]) || void 0 === n ? void 0 : n._vid) || {};
                Object.assign(l, r)
            } else if (void 0 !== window.__NUXT__) {
                var c = (null === (o = window.__NUXT__) || void 0 === o ? void 0 : o._vid) || {};
                Object.assign(l, c)
            }
        }

        function d(t) {
            var e = function(t) {
                    var e;
                    return c(), t && (null === (e = t.app.router) || void 0 === e || e.afterEach(c)), window.onNuxtReady && window.onNuxtReady(c), l
                }(t),
                n = {
                    nuxtContext: t
                },
                d = function(input) {
                    var video = function(t, input) {
                        if ("string" != typeof input || "" === input) throw new TypeError("input must be a string (received ".concat(Object(o.a)(input), ": ").concat(JSON.stringify(input), ")"));
                        return input = Object(r.d)(input) ? input : Object(r.j)(input), {
                            url: input,
                            isStatic: t.nuxtContext.isStatic
                        }
                    }(n, input);
                    return video.isStatic && function(video, input) {
                        if ("fetchPayload" in window.$nuxt) {
                            var t = e[video.url];
                            video.url = t || input
                        }
                    }(video, input), video
                },
                f = function(input, t) {
                    return d(input).url
                };
            return f.getVideo = d, n.$vid = f, f
        }
        n(23), n(28), n(67), n(41), n(149), n(35), n(10), n(24), n(111), n(37), n(89), n(17)
    }, , function(t, e, n) {
        n(311), t.exports = n(312)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n(260)
    }, function(t, e, n) {
        "use strict";
        n(261)
    }, , , function(t, e, n) {
        "use strict";
        n(262)
    }, function(t, e, n) {
        "use strict";
        n(263)
    }, function(t, e, n) {
        "use strict";
        n(264)
    }, function(t, e, n) {
        "use strict";
        n(265)
    }, function(t, e, n) {
        "use strict";
        n(266)
    }, function(t, e, n) {
        "use strict";
        n(267)
    }, function(t, e, n) {
        "use strict";
        n(268)
    }, function(t, e, n) {
        "use strict";
        n(269)
    }, function(t, e, n) {
        "use strict";
        n(270)
    }, function(t, e, n) {
        "use strict";
        n(271)
    }, function(t, e, n) {
        "use strict";
        n(272)
    }, function(t, e, n) {
        "use strict";
        n(273)
    }, function(t, e, n) {
        "use strict";
        n(274)
    }, function(t, e, n) {
        "use strict";
        n(275)
    }, , function(t, e, n) {
        t.exports = {}
    }, function(t, e, n) {
        "use strict";
        n(277)
    }, function(t, e, n) {
        "use strict";
        n(278)
    }, function(t, e, n) {
        "use strict";
        n(279)
    }, function(t, e, n) {
        "use strict";
        n(280)
    }, function(t, e, n) {
        "use strict";
        n(281)
    }, function(t, e, n) {
        "use strict";
        n(282)
    }, function(t, e, n) {
        "use strict";
        n(283)
    }, function(t, e, n) {
        "use strict";
        n(284)
    }, function(t, e, n) {
        "use strict";
        n(285)
    }, function(t, e) {}, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "stateType", (function() {
            return d
        })), n.d(e, "state", (function() {
            return f
        })), n.d(e, "mutations", (function() {
            return h
        })), n.d(e, "actions", (function() {
            return v
        }));
        n(27), n(59), n(60), n(61), n(39), n(40), n(24), n(54), n(49);
        var o = n(20),
            r = n(23);
        n(66), n(70), n(10), n(42);

        function l(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0,
                d = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return l = t.done, t
                },
                e: function(t) {
                    d = !0, r = t
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (d) throw r
                    }
                }
            }
        }

        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }
        var d = {
                appData: {
                    navOpen: !1,
                    recaptchaSiteKey: null,
                    recaptchaClientId: null,
                    pages: {},
                    jobPosts: {},
                    popups: [],
                    scrollPosition: {
                        x: 0,
                        y: 0,
                        path: null
                    },
                    defaultRelatedArticles: [],
                    showLoadingComponent: !0
                }
            },
            f = function() {
                return d.appData
            },
            h = {
                setShowLoadingComponent: function(t, e) {
                    t.showLoadingComponent = e
                },
                setNavOpen: function(t, e) {
                    t.navOpen = e
                },
                setRecaptchaSiteKey: function(t, e) {
                    t.recaptchaSiteKey = e
                },
                clearRecaptchaSiteKey: function(t) {
                    t.recaptchaSiteKey = null
                },
                setRecaptchaClientId: function(t, e) {
                    t.recaptchaClientId = e
                },
                clearRecaptchaClientId: function(t) {
                    t.recaptchaClientId = null
                },
                addPage: function(t, e) {
                    t.pages[e.uri] = e
                },
                removePage: function(t, e) {
                    t.pages.splice(e.uri, 1)
                },
                clearPages: function(t) {
                    t.pages = {}
                },
                addDefaultRelatedArticles: function(t, e) {
                    var n, o = [],
                        r = l(e);
                    try {
                        for (r.s(); !(n = r.n()).done;) {
                            var article = n.value;
                            void 0 === o[article.type] && (o[article.type] = []), o[article.type].push(article)
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    t.defaultRelatedArticles = o
                },
                clearDefaultRelatedArticles: function(t) {
                    t.defaultRelatedArticles = []
                },
                setPopups: function(t, e) {
                    var n, o = l(e);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            n.value.open = !1
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    t.popups = e
                },
                addPopup: function(t, e) {
                    var n, o = l(t.popups);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var r = n.value;
                            if (e.id === r.id) return
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                    e.open = !1, t.popups.push(e)
                },
                openPopup: function(t, e) {
                    var n, o = l(t.popups);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var r = n.value;
                            e.id === r.id && (r.open = !0)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                },
                closePopup: function(t, e) {
                    var n, o = l(t.popups);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var r = n.value;
                            e === r.id && (r.open = !1)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                },
                removePopup: function(t, e) {
                    var n, o = l(t.popups.entries());
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var c = Object(r.a)(n.value, 2),
                                d = c[0];
                            e === c[1].id && t.popups.splice(d, 1)
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                },
                clearPopups: function(t) {
                    t.popups = []
                },
                setScrollPosition: function(t, e) {
                    t.scrollPosition = e
                },
                clearScrollPosition: function(t) {
                    t.scrollPosition = {
                        x: 0,
                        y: 0,
                        path: null
                    }
                }
            },
            v = {
                getAppData: function(t) {
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.commit;
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }
            }
    }]), [
        [310, 57, 8, 58]
    ]
]);