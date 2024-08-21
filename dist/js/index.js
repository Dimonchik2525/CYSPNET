(() => {
    var __webpack_modules__ = {
        509: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                A: () => __WEBPACK_DEFAULT_EXPORT__
            });
            var _SvgIcons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(870);
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(848);
            var Tooltip = function Tooltip() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "tooltip",
                    children: [ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "tooltip__scroll",
                        children: [ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                            className: "tooltip__scroll__text",
                            children: "Скролль чтобы увидеть больше"
                        }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                            className: "tooltip__scroll__arrow",
                            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcons__WEBPACK_IMPORTED_MODULE_0__.DK, {})
                        }) ]
                    }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                        "data-tippy-content": "Во время открытого бета-тестирования\r\nбудет доступна часть функций",
                        className: "tooltip__beta__wrapper",
                        children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                            href: "#",
                            className: "tooltip__beta",
                            children: [ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                className: "tooltip__beta__text",
                                children: "Бета-версия"
                            }), (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                                className: "tooltip__beta__img",
                                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcons__WEBPACK_IMPORTED_MODULE_0__.Uv, {})
                            }) ]
                        })
                    }) ]
                });
            };
            const __WEBPACK_DEFAULT_EXPORT__ = Tooltip;
        },
        505: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Ay: () => PersonalCards_PersonalCards,
                $3: () => mainArray
            });
            var react = __webpack_require__(540);
            var SvgIcons = __webpack_require__(870);
            var jsx_runtime = __webpack_require__(848);
            var Card = function Card(props) {
                return (0, jsx_runtime.jsxs)("div", {
                    className: "card card__slide swiper-slide",
                    children: [ (0, jsx_runtime.jsx)("div", {
                        className: "card__img",
                        children: (0, jsx_runtime.jsx)("img", {
                            src: props.item.color,
                            alt: ""
                        })
                    }), (0, jsx_runtime.jsxs)("ul", {
                        className: "card__others",
                        children: [ (0, jsx_runtime.jsxs)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            className: "card__item card__logo",
                            children: [ (0, jsx_runtime.jsx)("img", {
                                src: "img/cards/card__logo__bg.png",
                                alt: ""
                            }), props.item.logo ]
                        }), (0, jsx_runtime.jsx)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.level.description,
                            className: "card__item card__level",
                            children: props.item.level.img
                        }), (0, jsx_runtime.jsx)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.community.description,
                            className: "card__item card__community",
                            children: props.item.community.img
                        }), (0, jsx_runtime.jsx)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.discipline.description,
                            className: "card__item card__discipline",
                            children: props.item.discipline.img
                        }), (0, jsx_runtime.jsx)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.industry.description,
                            className: "card__item card__industry",
                            children: props.item.industry.img
                        }), (0, jsx_runtime.jsxs)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.kpd.description,
                            className: "card__item card__kpd",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "card__kpd__logo",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "card__kpd__logo__oxygen",
                                    children: props.item.kpd.img
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "card__kpd__logo__oxygen-border"
                                }) ]
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "card__kpd__text",
                                children: props.item.kpd.value
                            }) ]
                        }), (0, jsx_runtime.jsxs)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.leage.description,
                            className: "card__item card__leage",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "card__leage__shield",
                                children: [ " ", props.item.leage.img ]
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "card__leage__shield-border",
                                children: (0, jsx_runtime.jsx)("img", {
                                    src: "img/cards/cards__leage__bg.png",
                                    alt: ""
                                })
                            }) ]
                        }), (0, jsx_runtime.jsxs)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.rating.description,
                            className: "card__item card__rating",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "card__rating__logo",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "card__rating__logo__oxygen",
                                    children: props.item.rating.img
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "card__rating__logo__oxygen-border"
                                }) ]
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "card__rating__text",
                                children: props.item.rating.value
                            }) ]
                        }), (0, jsx_runtime.jsx)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.role.description,
                            className: "card__item card__role",
                            children: props.item.role.img
                        }), (0, jsx_runtime.jsxs)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.winrate.description,
                            className: "card__item card__winrate",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "card__winrate__logo",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "card__winrate__logo__oxygen",
                                    children: props.item.winrate.img
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "card__winrate__logo__oxygen-border"
                                }) ]
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "card__winrate__text",
                                children: props.item.winrate.value
                            }) ]
                        }), (0, jsx_runtime.jsx)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.nickname.description,
                            className: "card__item card__nickname",
                            children: props.item.nickname.img
                        }), (0, jsx_runtime.jsx)("li", {
                            onClick: function onClick(e) {
                                return e.stopPropagation();
                            },
                            "data-tippy-content": props.item.country.description,
                            className: "card__item card__country",
                            children: (0, jsx_runtime.jsx)("img", {
                                src: props.item.country.img,
                                alt: ""
                            })
                        }) ]
                    }) ]
                });
            };
            const PersonalCards_Card = Card;
            var swiper = __webpack_require__(236);
            var modules = __webpack_require__(467);
            var Tooltip = __webpack_require__(509);
            function _slicedToArray(r, e) {
                return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function _unsupportedIterableToArray(r, a) {
                if (r) {
                    if ("string" == typeof r) return _arrayLikeToArray(r, a);
                    var t = {}.toString.call(r).slice(8, -1);
                    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
                }
            }
            function _arrayLikeToArray(r, a) {
                (null == a || a > r.length) && (a = r.length);
                for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
                return n;
            }
            function _iterableToArrayLimit(r, l) {
                var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (null != t) {
                    var e, n, i, u, a = [], f = !0, o = !1;
                    try {
                        if (i = (t = t.call(r)).next, 0 === l) {
                            if (Object(t) !== t) return;
                            f = !1;
                        } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                    } catch (r) {
                        o = !0, n = r;
                    } finally {
                        try {
                            if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                        } finally {
                            if (o) throw n;
                        }
                    }
                    return a;
                }
            }
            function _arrayWithHoles(r) {
                if (Array.isArray(r)) return r;
            }
            var mainArray = [ {
                logo: (0, jsx_runtime.jsx)(SvgIcons.l9, {}),
                color: "img/cards/card__red.png",
                level: {
                    img: 98,
                    description: "Уровень навыка",
                    name: "level"
                },
                discipline: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.U9, {}),
                    description: "Дисциплина",
                    name: "discipline"
                },
                industry: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.aM, {}),
                    description: "Отрасль",
                    name: "industry"
                },
                leage: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MG, {}),
                    description: "Лига",
                    name: "leage"
                },
                kpd: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.vF, {}),
                    value: "3.3",
                    description: "Основные показатели",
                    name: "kpd"
                },
                winrate: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.g5, {}),
                    value: "57%",
                    description: "Основные показатели",
                    name: "winrate"
                },
                rating: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.f, {}),
                    value: "34",
                    description: "Основные показатели",
                    name: "rating"
                },
                nickname: {
                    img: "CYSPNET",
                    description: "Никнейм",
                    name: "nickname"
                },
                role: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MA, {}),
                    description: "Роль",
                    name: "role"
                },
                community: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.Pb, {}),
                    description: "Команда или сообщество",
                    name: "community"
                },
                country: {
                    img: "img/cards/card__contry.png",
                    description: "Страна пользователя",
                    name: "country"
                }
            }, {
                logo: (0, jsx_runtime.jsx)(SvgIcons.l9, {}),
                color: "img/cards/card__silver.png",
                level: {
                    img: 98,
                    description: "Уровень навыка",
                    name: "level"
                },
                discipline: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.U9, {}),
                    description: "Дисциплина",
                    name: "discipline"
                },
                industry: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.aM, {}),
                    description: "Отрасль",
                    name: "industry"
                },
                leage: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MG, {}),
                    description: "Лига",
                    name: "leage"
                },
                kpd: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.vF, {}),
                    value: "3.3",
                    description: "Основные показатели",
                    name: "kpd"
                },
                winrate: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.g5, {}),
                    value: "57%",
                    description: "Основные показатели",
                    name: "winrate"
                },
                rating: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.f, {}),
                    value: "34",
                    description: "Основные показатели",
                    name: "rating"
                },
                nickname: {
                    img: "CYSPNET",
                    description: "Никнейм",
                    name: "nickname"
                },
                role: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MA, {}),
                    description: "Роль",
                    name: "role"
                },
                community: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.Pb, {}),
                    description: "Команда или сообщество",
                    name: "community"
                },
                country: {
                    img: "img/cards/card__contry.png",
                    description: "Страна пользователя",
                    name: "country"
                }
            }, {
                logo: (0, jsx_runtime.jsx)(SvgIcons.l9, {}),
                color: "img/cards/card__red.png",
                level: {
                    img: 98,
                    description: "Уровень навыка",
                    name: "level"
                },
                discipline: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.U9, {}),
                    description: "Дисциплина",
                    name: "discipline"
                },
                industry: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.aM, {}),
                    description: "Отрасль",
                    name: "industry"
                },
                leage: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MG, {}),
                    description: "Лига",
                    name: "leage"
                },
                kpd: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.vF, {}),
                    value: "3.3",
                    description: "Основные показатели",
                    name: "kpd"
                },
                winrate: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.g5, {}),
                    value: "57%",
                    description: "Основные показатели",
                    name: "winrate"
                },
                rating: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.f, {}),
                    value: "34",
                    description: "Основные показатели",
                    name: "rating"
                },
                nickname: {
                    img: "CYSPNET",
                    description: "Никнейм",
                    name: "nickname"
                },
                role: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MA, {}),
                    description: "Роль",
                    name: "role"
                },
                community: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.Pb, {}),
                    description: "Команда или сообщество",
                    name: "community"
                },
                country: {
                    img: "img/cards/card__contry.png",
                    description: "Страна пользователя",
                    name: "country"
                }
            }, {
                logo: (0, jsx_runtime.jsx)(SvgIcons.l9, {}),
                color: "img/cards/card__silver.png",
                level: {
                    img: 98,
                    description: "Уровень навыка",
                    name: "level"
                },
                discipline: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.U9, {}),
                    description: "Дисциплина",
                    name: "discipline"
                },
                industry: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.aM, {}),
                    description: "Отрасль",
                    name: "industry"
                },
                leage: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MG, {}),
                    description: "Лига",
                    name: "leage"
                },
                kpd: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.vF, {}),
                    value: "3.3",
                    description: "Основные показатели",
                    name: "kpd"
                },
                winrate: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.g5, {}),
                    value: "57%",
                    description: "Основные показатели",
                    name: "winrate"
                },
                rating: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.f, {}),
                    value: "34",
                    description: "Основные показатели",
                    name: "rating"
                },
                nickname: {
                    img: "CYSPNET",
                    description: "Никнейм",
                    name: "nickname"
                },
                role: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MA, {}),
                    description: "Роль",
                    name: "role"
                },
                community: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.Pb, {}),
                    description: "Команда или сообщество",
                    name: "community"
                },
                country: {
                    img: "img/cards/card__contry.png",
                    description: "Страна пользователя",
                    name: "country"
                }
            }, {
                logo: (0, jsx_runtime.jsx)(SvgIcons.l9, {}),
                color: "img/cards/card__red.png",
                level: {
                    img: 98,
                    description: "Уровень навыка",
                    name: "level"
                },
                discipline: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.U9, {}),
                    description: "Дисциплина",
                    name: "discipline"
                },
                industry: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.aM, {}),
                    description: "Отрасль",
                    name: "industry"
                },
                leage: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MG, {}),
                    description: "Лига",
                    name: "leage"
                },
                kpd: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.vF, {}),
                    value: "3.3",
                    description: "Основные показатели",
                    name: "kpd"
                },
                winrate: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.g5, {}),
                    value: "57%",
                    description: "Основные показатели",
                    name: "winrate"
                },
                rating: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.f, {}),
                    value: "34",
                    description: "Основные показатели",
                    name: "rating"
                },
                nickname: {
                    img: "CYSPNET",
                    description: "Никнейм",
                    name: "nickname"
                },
                role: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MA, {}),
                    description: "Роль",
                    name: "role"
                },
                community: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.Pb, {}),
                    description: "Команда или сообщество",
                    name: "community"
                },
                country: {
                    img: "img/cards/card__contry.png",
                    description: "Страна пользователя",
                    name: "country"
                }
            }, {
                logo: (0, jsx_runtime.jsx)(SvgIcons.l9, {}),
                color: "img/cards/card__silver.png",
                level: {
                    img: 98,
                    description: "Уровень навыка",
                    name: "level"
                },
                discipline: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.U9, {}),
                    description: "Дисциплина",
                    name: "discipline"
                },
                industry: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.aM, {}),
                    description: "Отрасль",
                    name: "industry"
                },
                leage: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MG, {}),
                    description: "Лига",
                    name: "leage"
                },
                kpd: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.vF, {}),
                    value: "3.3",
                    description: "Основные показатели",
                    name: "kpd"
                },
                winrate: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.g5, {}),
                    value: "57%",
                    description: "Основные показатели",
                    name: "winrate"
                },
                rating: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.f, {}),
                    value: "34",
                    description: "Основные показатели",
                    name: "rating"
                },
                nickname: {
                    img: "CYSPNET",
                    description: "Никнейм",
                    name: "nickname"
                },
                role: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MA, {}),
                    description: "Роль",
                    name: "role"
                },
                community: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.Pb, {}),
                    description: "Команда или сообщество",
                    name: "community"
                },
                country: {
                    img: "img/cards/card__contry.png",
                    description: "Страна пользователя",
                    name: "country"
                }
            }, {
                logo: (0, jsx_runtime.jsx)(SvgIcons.l9, {}),
                color: "img/cards/card__red.png",
                level: {
                    img: 98,
                    description: "Уровень навыка",
                    name: "level"
                },
                discipline: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.U9, {}),
                    description: "Дисциплина",
                    name: "discipline"
                },
                industry: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.aM, {}),
                    description: "Отрасль",
                    name: "industry"
                },
                leage: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MG, {}),
                    description: "Лига",
                    name: "leage"
                },
                kpd: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.vF, {}),
                    value: "3.3",
                    description: "Основные показатели",
                    name: "kpd"
                },
                winrate: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.g5, {}),
                    value: "57%",
                    description: "Основные показатели",
                    name: "winrate"
                },
                rating: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.f, {}),
                    value: "34",
                    description: "Основные показатели",
                    name: "rating"
                },
                nickname: {
                    img: "CYSPNET",
                    description: "Никнейм",
                    name: "nickname"
                },
                role: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MA, {}),
                    description: "Роль",
                    name: "role"
                },
                community: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.Pb, {}),
                    description: "Команда или сообщество",
                    name: "community"
                },
                country: {
                    img: "img/cards/card__contry.png",
                    description: "Страна пользователя",
                    name: "country"
                }
            }, {
                logo: (0, jsx_runtime.jsx)(SvgIcons.l9, {}),
                color: "img/cards/card__silver.png",
                level: {
                    img: 98,
                    description: "Уровень навыка",
                    name: "level"
                },
                discipline: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.U9, {}),
                    description: "Дисциплина",
                    name: "discipline"
                },
                industry: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.aM, {}),
                    description: "Отрасль",
                    name: "industry"
                },
                leage: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MG, {}),
                    description: "Лига",
                    name: "leage"
                },
                kpd: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.vF, {}),
                    value: "3.3",
                    description: "Основные показатели",
                    name: "kpd"
                },
                winrate: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.g5, {}),
                    value: "57%",
                    description: "Основные показатели",
                    name: "winrate"
                },
                rating: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.f, {}),
                    value: "34",
                    description: "Основные показатели",
                    name: "rating"
                },
                nickname: {
                    img: "CYSPNET",
                    description: "Никнейм",
                    name: "nickname"
                },
                role: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.MA, {}),
                    description: "Роль",
                    name: "role"
                },
                community: {
                    img: (0, jsx_runtime.jsx)(SvgIcons.Pb, {}),
                    description: "Команда или сообщество",
                    name: "community"
                },
                country: {
                    img: "img/cards/card__contry.png",
                    description: "Страна пользователя",
                    name: "country"
                }
            } ];
            var slides = [];
            mainArray.map((function(item, ind) {
                slides.push((0, jsx_runtime.jsx)(PersonalCards_Card, {
                    item
                }, Math.random()));
            }));
            var PersonalCards = function PersonalCards(props) {
                var _useState = (0, react.useState)(false), _useState2 = _slicedToArray(_useState, 2), info = _useState2[0], setInfo = _useState2[1];
                (0, react.useEffect)((function() {
                    var slider;
                    function initSwiper() {
                        document.querySelector(".personalCards__slider");
                        slider = new swiper.A(".personalCards__slider", {
                            modules: [ modules.Vx ],
                            observer: true,
                            observeParents: true,
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slideToClickedSlide: true,
                            centeredSlides: true,
                            loop: true,
                            speed: 500,
                            navigation: {
                                prevEl: ".personalCards__slider__navigation__left",
                                nextEl: ".personalCards__slider__navigation__right"
                            },
                            breakpoints: {
                                320: {
                                    slidesPerView: 3,
                                    spaceBetween: -45
                                },
                                500: {
                                    slidesPerView: 3,
                                    spaceBetween: -45
                                },
                                770: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                1350: {
                                    slidesPerView: 3
                                }
                            }
                        });
                    }
                    initSwiper();
                    return function() {
                        if (slider) slider.destroy();
                    };
                }), [ props.size ]);
                return (0, jsx_runtime.jsxs)("section", {
                    id: "cards",
                    onClick: function onClick() {
                        info ? setInfo(false) : "";
                    },
                    className: "personalCards",
                    children: [ (0, jsx_runtime.jsx)("div", {
                        className: "personalCards__blur ".concat(info ? "blured" : "")
                    }), (0, jsx_runtime.jsx)("div", {
                        className: "personalCards__container ".concat(info ? "blured" : ""),
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: "personalCards__block",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "personalCards__slider swiper",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "personalCards__wrapper swiper-wrapper ".concat(!info ? "invisible" : "visible"),
                                    children: slides
                                }), (0, jsx_runtime.jsxs)("div", {
                                    className: "personalCards__slider__navigation",
                                    children: [ (0, jsx_runtime.jsx)("button", {
                                        className: "personalCards__slider__navigation__left",
                                        children: (0, jsx_runtime.jsx)(SvgIcons.DK, {})
                                    }), (0, jsx_runtime.jsx)("button", {
                                        className: "personalCards__slider__navigation__right",
                                        children: (0, jsx_runtime.jsx)(SvgIcons.DK, {})
                                    }) ]
                                }) ]
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "personalCards__info",
                                children: [ (0, jsx_runtime.jsx)("button", {
                                    "data-tippy-content": "additional information",
                                    onClick: function onClick() {
                                        return setInfo(true);
                                    },
                                    className: "personalCards__info__check",
                                    children: (0, jsx_runtime.jsx)("div", {
                                        className: "personalCards__info__check__wrapper",
                                        children: (0, jsx_runtime.jsx)(SvgIcons.iV, {})
                                    })
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "personalCards__info__swipe",
                                    children: props.size < 640 ? (0, jsx_runtime.jsxs)(react.Fragment, {
                                        children: [ (0, jsx_runtime.jsx)("div", {
                                            className: "personalCards__info__swipe__arrow",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.tS, {})
                                        }), (0, jsx_runtime.jsx)("div", {
                                            className: "personalCards__info__swipe__hand",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.ir, {})
                                        }) ]
                                    }) : ""
                                }) ]
                            }), (0, jsx_runtime.jsx)("h2", {
                                className: "personalCards__title",
                                children: "Ваши персональные карточки"
                            }), (0, jsx_runtime.jsx)("h3", {
                                className: "personalCards__subtitle",
                                children: "У каждого пользователя, команды и даже сообщества есть личная карточка с рейтингом и информацией. Она упрощает поиск и общение между пользователями."
                            }) ]
                        })
                    }), info ? (0, jsx_runtime.jsx)("div", {
                        onClick: function onClick(e) {
                            return e.stopPropagation();
                        },
                        className: "personalCards__tip",
                        children: "Клик на подсвечиваемые элементы покажет подробную информацию"
                    }) : "", props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
                });
            };
            const PersonalCards_PersonalCards = PersonalCards;
        },
        870: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                $r: () => SVGSTwichIcon,
                Bz: () => SvgRewardIcon,
                CN: () => SVGLoginEyeClosedIcon,
                CW: () => SvgArena1tIcon,
                Ct: () => SvgLightIcon,
                DK: () => SvgArrowIcon,
                Db: () => SVGManagerIcon,
                Id: () => SvgOrganization3tIcon,
                J9: () => SvgUser4tIcon,
                K9: () => SVGComentatorIcon,
                LT: () => SvgUser2tIcon,
                MA: () => SVGCardRoleIcon,
                MG: () => SVGCardLeageIcon,
                Mo: () => SVGSupport1Icon,
                Mw: () => SvgUser5tIcon,
                O_: () => SVGSTwitterIcon,
                P8: () => SVGAnaliticIcon,
                PK: () => SvgUserIcon,
                Pb: () => SVGCardCommunityIcon,
                Rj: () => SVGLoginSteamIcon,
                Rp: () => SvgArena2tIcon,
                Tl: () => SvgClub1tIcon,
                U9: () => SVGCardDisciplineIcon,
                UM: () => SVGSupportVKIcon,
                Uv: () => SvgQuestionIcon,
                VY: () => SVGJudgeIcon,
                Xe: () => SvgOrganizationIcon,
                Xj: () => SVGSettingsIcon,
                Y8: () => SvgMicroIcon,
                Z3: () => SVGRubIcon,
                aM: () => SVGCardIndustryIcon,
                ae: () => SVGCoachIcon,
                cs: () => SvgArena3tIcon,
                cx: () => SvgClubIcon,
                dm: () => SvgOrganization2tIcon,
                eU: () => SvgArena5tIcon,
                eu: () => SvgUser3tIcon,
                f: () => SVGCardRatingIcon,
                g5: () => SVGCardWinRateIcon,
                iA: () => SVGSVkIcon,
                iE: () => SvgClub4tIcon,
                iV: () => SVGCardInfoIcon,
                ir: () => SVGCardSwiperIcon,
                jJ: () => SvgArenatIcon,
                jX: () => SvgUser6tIcon,
                l4: () => SVGMouseIcon,
                l9: () => SvgLogoIcon,
                rs: () => SVGSupport2Icon,
                ry: () => SvgClub3tIcon,
                sP: () => SVGLoginGoogleIcon,
                sw: () => SVGSkautIcon,
                tS: () => SVGCardArrowIcon,
                vF: () => SVGCardKPDIcon,
                vc: () => SvgArena6tIcon,
                vy: () => SVGYoutubeIcon,
                wE: () => SvgClub2tIcon,
                wR: () => SVGSInstaIcon,
                yf: () => SvgMoneyIcon,
                yl: () => SVGLoginEyeIcon
            });
            __webpack_require__(540);
            var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(848);
            var SvgArrowIcon = function SvgArrowIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-arrow-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-arrow"
                    })
                });
            };
            var SvgLogoIcon = function SvgLogoIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-logo-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-logo"
                    })
                });
            };
            var SvgQuestionIcon = function SvgQuestionIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-question-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-question"
                    })
                });
            };
            var SvgMicroIcon = function SvgMicroIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-micro-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-micro"
                    })
                });
            };
            var SvgMoneyIcon = function SvgMoneyIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-money-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-money"
                    })
                });
            };
            var SvgRewardIcon = function SvgRewardIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-reward-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-reward"
                    })
                });
            };
            var SvgLightIcon = function SvgLightIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-light-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-light"
                    })
                });
            };
            var SvgUserIcon = function SvgUserIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-opportunities__1-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-opportunities__1"
                    })
                });
            };
            var SvgOrganizationIcon = function SvgOrganizationIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-opportunities__2-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-opportunities__2"
                    })
                });
            };
            var SvgClubIcon = function SvgClubIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-opportunities__3-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-opportunities__3"
                    })
                });
            };
            var SvgArenatIcon = function SvgArenatIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-opportunities__4-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-opportunities__4"
                    })
                });
            };
            var SvgArena1tIcon = function SvgArena1tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-arena__1-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-arena__1"
                    })
                });
            };
            var SvgArena2tIcon = function SvgArena2tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-arena__2-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-arena__2"
                    })
                });
            };
            var SvgArena3tIcon = function SvgArena3tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-arena__3-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-arena__3"
                    })
                });
            };
            var SvgArena5tIcon = function SvgArena5tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-arena__5-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-arena__5"
                    })
                });
            };
            var SvgArena6tIcon = function SvgArena6tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-arena__6-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-arena__6"
                    })
                });
            };
            var SvgClub1tIcon = function SvgClub1tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-club__1-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-club__1"
                    })
                });
            };
            var SvgClub2tIcon = function SvgClub2tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-club__2-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-club__2"
                    })
                });
            };
            var SvgClub3tIcon = function SvgClub3tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-club__3-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-club__3"
                    })
                });
            };
            var SvgClub4tIcon = function SvgClub4tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-club__4-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-club__4"
                    })
                });
            };
            var SvgOrganization2tIcon = function SvgOrganization2tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-organization__2-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-organization__2"
                    })
                });
            };
            var SvgOrganization3tIcon = function SvgOrganization3tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-organization__2-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-organization__3"
                    })
                });
            };
            var SvgUser2tIcon = function SvgUser2tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-user__2-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-user__2"
                    })
                });
            };
            var SvgUser3tIcon = function SvgUser3tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-user__3-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-user__3"
                    })
                });
            };
            var SvgUser4tIcon = function SvgUser4tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-user__4-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-user__4"
                    })
                });
            };
            var SvgUser5tIcon = function SvgUser5tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-user__5-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-user__5"
                    })
                });
            };
            var SvgUser6tIcon = function SvgUser6tIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-user__6-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-user__6"
                    })
                });
            };
            var SVGRubIcon = function SVGRubIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-rub-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-rub"
                    })
                });
            };
            var SVGSettingsIcon = function SVGSettingsIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-settings-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-settings"
                    })
                });
            };
            var SVGAnaliticIcon = function SVGAnaliticIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-choice__analitic-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-choice__analitic"
                    })
                });
            };
            var SVGCoachIcon = function SVGCoachIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-choice__coach-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-choice__coach"
                    })
                });
            };
            var SVGComentatorIcon = function SVGComentatorIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-choice__commentator-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-choice__commentator"
                    })
                });
            };
            var SVGJudgeIcon = function SVGJudgeIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-choice__judge-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-choice__judge"
                    })
                });
            };
            var SVGManagerIcon = function SVGManagerIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-choice__manager-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-choice__manager"
                    })
                });
            };
            var SVGMouseIcon = function SVGMouseIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-choice__mouse-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-choice__mouse"
                    })
                });
            };
            var SVGSkautIcon = function SVGSkautIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-choice__skaut-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-choice__skaut"
                    })
                });
            };
            var SVGSInstaIcon = function SVGSInstaIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-footerNav__instagramm-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-footerNav__instagramm"
                    })
                });
            };
            var SVGSTwichIcon = function SVGSTwichIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-footerNav__twich-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-footerNav__twich"
                    })
                });
            };
            var SVGSTwitterIcon = function SVGSTwitterIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-footerNav__twitter-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-footerNav__twitter"
                    })
                });
            };
            var SVGSVkIcon = function SVGSVkIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-footerNav__vk-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-footerNav__vk"
                    })
                });
            };
            var SVGYoutubeIcon = function SVGYoutubeIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-footerNav__youtube-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-footerNav__youtube"
                    })
                });
            };
            var SVGSupport1Icon = function SVGSupport1Icon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-footer__support__1-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-footer__support__1"
                    })
                });
            };
            var SVGSupport2Icon = function SVGSupport2Icon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-footer__support__2-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-footer__support__2"
                    })
                });
            };
            var SVGSupportVKIcon = function SVGSupportVKIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-footer__support__vk-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-footer__support__vk"
                    })
                });
            };
            var SVGCardDisciplineIcon = function SVGCardDisciplineIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__discipline-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__discipline"
                    })
                });
            };
            var SVGCardCommunityIcon = function SVGCardCommunityIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__community-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__community"
                    })
                });
            };
            var SVGCardIndustryIcon = function SVGCardIndustryIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__industry-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__industry"
                    })
                });
            };
            var SVGCardKPDIcon = function SVGCardKPDIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__kpd-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__kpd"
                    })
                });
            };
            var SVGCardLeageIcon = function SVGCardLeageIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__leage-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__leage"
                    })
                });
            };
            var SVGCardRatingIcon = function SVGCardRatingIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__rating-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__rating"
                    })
                });
            };
            var SVGCardRoleIcon = function SVGCardRoleIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__role-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__role"
                    })
                });
            };
            var SVGCardWinRateIcon = function SVGCardWinRateIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__winrate-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__winrate"
                    })
                });
            };
            var SVGCardInfoIcon = function SVGCardInfoIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__info-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__info"
                    })
                });
            };
            var SVGCardSwiperIcon = function SVGCardSwiperIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__swiper-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__swiper"
                    })
                });
            };
            var SVGCardArrowIcon = function SVGCardArrowIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-card__arrow-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-card__arrow"
                    })
                });
            };
            var SVGLoginGoogleIcon = function SVGLoginGoogleIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-login__google-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-login__google"
                    })
                });
            };
            var SVGLoginSteamIcon = function SVGLoginSteamIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-login__steam-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-login__steam"
                    })
                });
            };
            var SVGLoginEyeIcon = function SVGLoginEyeIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-login__eye-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-login__eye"
                    })
                });
            };
            var SVGLoginEyeClosedIcon = function SVGLoginEyeClosedIcon() {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                    className: "svg-svg-login__eye-closed-dims",
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("use", {
                        xlinkHref: "img/icons/icons.svg#svg-login__eye-closed"
                    })
                });
            };
        },
        610: module => {
            var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
            module.exports = canUseDOM;
        },
        551: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */            var aa = __webpack_require__(540), ca = __webpack_require__(982);
            function p(a) {
                for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
                return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var da = new Set, ea = {};
            function fa(a, b) {
                ha(a, b);
                ha(a + "Capture", b);
            }
            function ha(a, b) {
                ea[a] = b;
                for (a = 0; a < b.length; a++) da.add(b[a]);
            }
            var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
            function oa(a) {
                if (ja.call(ma, a)) return !0;
                if (ja.call(la, a)) return !1;
                if (ka.test(a)) return ma[a] = !0;
                la[a] = !0;
                return !1;
            }
            function pa(a, b, c, d) {
                if (null !== c && 0 === c.type) return !1;
                switch (typeof b) {
                  case "function":
                  case "symbol":
                    return !0;

                  case "boolean":
                    if (d) return !1;
                    if (null !== c) return !c.acceptsBooleans;
                    a = a.toLowerCase().slice(0, 5);
                    return "data-" !== a && "aria-" !== a;

                  default:
                    return !1;
                }
            }
            function qa(a, b, c, d) {
                if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
                if (d) return !1;
                if (null !== c) switch (c.type) {
                  case 3:
                    return !b;

                  case 4:
                    return !1 === b;

                  case 5:
                    return isNaN(b);

                  case 6:
                    return isNaN(b) || 1 > b;
                }
                return !1;
            }
            function v(a, b, c, d, e, f, g) {
                this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
                this.attributeName = d;
                this.attributeNamespace = e;
                this.mustUseProperty = c;
                this.propertyName = a;
                this.type = b;
                this.sanitizeURL = f;
                this.removeEmptyString = g;
            }
            var z = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(a) {
                z[a] = new v(a, 0, !1, a, null, !1, !1);
            }));
            [ [ "acceptCharset", "accept-charset" ], [ "className", "class" ], [ "htmlFor", "for" ], [ "httpEquiv", "http-equiv" ] ].forEach((function(a) {
                var b = a[0];
                z[b] = new v(b, 1, !1, a[1], null, !1, !1);
            }));
            [ "contentEditable", "draggable", "spellCheck", "value" ].forEach((function(a) {
                z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
            }));
            [ "autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha" ].forEach((function(a) {
                z[a] = new v(a, 2, !1, a, null, !1, !1);
            }));
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(a) {
                z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
            }));
            [ "checked", "multiple", "muted", "selected" ].forEach((function(a) {
                z[a] = new v(a, 3, !0, a, null, !1, !1);
            }));
            [ "capture", "download" ].forEach((function(a) {
                z[a] = new v(a, 4, !1, a, null, !1, !1);
            }));
            [ "cols", "rows", "size", "span" ].forEach((function(a) {
                z[a] = new v(a, 6, !1, a, null, !1, !1);
            }));
            [ "rowSpan", "start" ].forEach((function(a) {
                z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
            }));
            var ra = /[\-:]([a-z])/g;
            function sa(a) {
                return a[1].toUpperCase();
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, null, !1, !1);
            }));
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
            }));
            [ "xml:base", "xml:lang", "xml:space" ].forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
            }));
            [ "tabIndex", "crossOrigin" ].forEach((function(a) {
                z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
            }));
            z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
            [ "src", "href", "action", "formAction" ].forEach((function(a) {
                z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
            }));
            function ta(a, b, c, d) {
                var e = z.hasOwnProperty(b) ? z[b] : null;
                if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), 
                d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, 
                d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, 
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
            }
            var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
            Symbol.for("react.scope");
            Symbol.for("react.debug_trace_mode");
            var Ia = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden");
            Symbol.for("react.cache");
            Symbol.for("react.tracing_marker");
            var Ja = Symbol.iterator;
            function Ka(a) {
                if (null === a || "object" !== typeof a) return null;
                a = Ja && a[Ja] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var La, A = Object.assign;
            function Ma(a) {
                if (void 0 === La) try {
                    throw Error();
                } catch (c) {
                    var b = c.stack.trim().match(/\n( *(at )?)/);
                    La = b && b[1] || "";
                }
                return "\n" + La + a;
            }
            var Na = !1;
            function Oa(a, b) {
                if (!a || Na) return "";
                Na = !0;
                var c = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (b) if (b = function() {
                        throw Error();
                    }, Object.defineProperty(b.prototype, "props", {
                        set: function() {
                            throw Error();
                        }
                    }), "object" === typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(b, []);
                        } catch (l) {
                            var d = l;
                        }
                        Reflect.construct(a, [], b);
                    } else {
                        try {
                            b.call();
                        } catch (l) {
                            d = l;
                        }
                        a.call(b.prototype);
                    } else {
                        try {
                            throw Error();
                        } catch (l) {
                            d = l;
                        }
                        a();
                    }
                } catch (l) {
                    if (l && d && "string" === typeof l.stack) {
                        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
                        for (;1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
                            if (1 !== g || 1 !== h) do {
                                if (g--, h--, 0 > h || e[g] !== f[h]) {
                                    var k = "\n" + e[g].replace(" at new ", " at ");
                                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                                    return k;
                                }
                            } while (1 <= g && 0 <= h);
                            break;
                        }
                    }
                } finally {
                    Na = !1, Error.prepareStackTrace = c;
                }
                return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
            }
            function Pa(a) {
                switch (a.tag) {
                  case 5:
                    return Ma(a.type);

                  case 16:
                    return Ma("Lazy");

                  case 13:
                    return Ma("Suspense");

                  case 19:
                    return Ma("SuspenseList");

                  case 0:
                  case 2:
                  case 15:
                    return a = Oa(a.type, !1), a;

                  case 11:
                    return a = Oa(a.type.render, !1), a;

                  case 1:
                    return a = Oa(a.type, !0), a;

                  default:
                    return "";
                }
            }
            function Qa(a) {
                if (null == a) return null;
                if ("function" === typeof a) return a.displayName || a.name || null;
                if ("string" === typeof a) return a;
                switch (a) {
                  case ya:
                    return "Fragment";

                  case wa:
                    return "Portal";

                  case Aa:
                    return "Profiler";

                  case za:
                    return "StrictMode";

                  case Ea:
                    return "Suspense";

                  case Fa:
                    return "SuspenseList";
                }
                if ("object" === typeof a) switch (a.$$typeof) {
                  case Ca:
                    return (a.displayName || "Context") + ".Consumer";

                  case Ba:
                    return (a._context.displayName || "Context") + ".Provider";

                  case Da:
                    var b = a.render;
                    a = a.displayName;
                    a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
                    return a;

                  case Ga:
                    return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";

                  case Ha:
                    b = a._payload;
                    a = a._init;
                    try {
                        return Qa(a(b));
                    } catch (c) {}
                }
                return null;
            }
            function Ra(a) {
                var b = a.type;
                switch (a.tag) {
                  case 24:
                    return "Cache";

                  case 9:
                    return (b.displayName || "Context") + ".Consumer";

                  case 10:
                    return (b._context.displayName || "Context") + ".Provider";

                  case 18:
                    return "DehydratedFragment";

                  case 11:
                    return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");

                  case 7:
                    return "Fragment";

                  case 5:
                    return b;

                  case 4:
                    return "Portal";

                  case 3:
                    return "Root";

                  case 6:
                    return "Text";

                  case 16:
                    return Qa(b);

                  case 8:
                    return b === za ? "StrictMode" : "Mode";

                  case 22:
                    return "Offscreen";

                  case 12:
                    return "Profiler";

                  case 21:
                    return "Scope";

                  case 13:
                    return "Suspense";

                  case 19:
                    return "SuspenseList";

                  case 25:
                    return "TracingMarker";

                  case 1:
                  case 0:
                  case 17:
                  case 2:
                  case 14:
                  case 15:
                    if ("function" === typeof b) return b.displayName || b.name || null;
                    if ("string" === typeof b) return b;
                }
                return null;
            }
            function Sa(a) {
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                  case "undefined":
                    return a;

                  case "object":
                    return a;

                  default:
                    return "";
                }
            }
            function Ta(a) {
                var b = a.type;
                return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
            }
            function Ua(a) {
                var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
                if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
                    var e = c.get, f = c.set;
                    Object.defineProperty(a, b, {
                        configurable: !0,
                        get: function() {
                            return e.call(this);
                        },
                        set: function(a) {
                            d = "" + a;
                            f.call(this, a);
                        }
                    });
                    Object.defineProperty(a, b, {
                        enumerable: c.enumerable
                    });
                    return {
                        getValue: function() {
                            return d;
                        },
                        setValue: function(a) {
                            d = "" + a;
                        },
                        stopTracking: function() {
                            a._valueTracker = null;
                            delete a[b];
                        }
                    };
                }
            }
            function Va(a) {
                a._valueTracker || (a._valueTracker = Ua(a));
            }
            function Wa(a) {
                if (!a) return !1;
                var b = a._valueTracker;
                if (!b) return !0;
                var c = b.getValue();
                var d = "";
                a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
                a = d;
                return a !== c ? (b.setValue(a), !0) : !1;
            }
            function Xa(a) {
                a = a || ("undefined" !== typeof document ? document : void 0);
                if ("undefined" === typeof a) return null;
                try {
                    return a.activeElement || a.body;
                } catch (b) {
                    return a.body;
                }
            }
            function Ya(a, b) {
                var c = b.checked;
                return A({}, b, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != c ? c : a._wrapperState.initialChecked
                });
            }
            function Za(a, b) {
                var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
                c = Sa(null != b.value ? b.value : c);
                a._wrapperState = {
                    initialChecked: d,
                    initialValue: c,
                    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
                };
            }
            function ab(a, b) {
                b = b.checked;
                null != b && ta(a, "checked", b, !1);
            }
            function bb(a, b) {
                ab(a, b);
                var c = Sa(b.value), d = b.type;
                if (null != c) if ("number" === d) {
                    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
                } else a.value !== "" + c && (a.value = "" + c); else if ("submit" === d || "reset" === d) {
                    a.removeAttribute("value");
                    return;
                }
                b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
                null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
            }
            function db(a, b, c) {
                if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
                    var d = b.type;
                    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
                    b = "" + a._wrapperState.initialValue;
                    c || b === a.value || (a.value = b);
                    a.defaultValue = b;
                }
                c = a.name;
                "" !== c && (a.name = "");
                a.defaultChecked = !!a._wrapperState.initialChecked;
                "" !== c && (a.name = c);
            }
            function cb(a, b, c) {
                if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
            }
            var eb = Array.isArray;
            function fb(a, b, c, d) {
                a = a.options;
                if (b) {
                    b = {};
                    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
                    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), 
                    e && d && (a[c].defaultSelected = !0);
                } else {
                    c = "" + Sa(c);
                    b = null;
                    for (e = 0; e < a.length; e++) {
                        if (a[e].value === c) {
                            a[e].selected = !0;
                            d && (a[e].defaultSelected = !0);
                            return;
                        }
                        null !== b || a[e].disabled || (b = a[e]);
                    }
                    null !== b && (b.selected = !0);
                }
            }
            function gb(a, b) {
                if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
                return A({}, b, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + a._wrapperState.initialValue
                });
            }
            function hb(a, b) {
                var c = b.value;
                if (null == c) {
                    c = b.children;
                    b = b.defaultValue;
                    if (null != c) {
                        if (null != b) throw Error(p(92));
                        if (eb(c)) {
                            if (1 < c.length) throw Error(p(93));
                            c = c[0];
                        }
                        b = c;
                    }
                    null == b && (b = "");
                    c = b;
                }
                a._wrapperState = {
                    initialValue: Sa(c)
                };
            }
            function ib(a, b) {
                var c = Sa(b.value), d = Sa(b.defaultValue);
                null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
                null != d && (a.defaultValue = "" + d);
            }
            function jb(a) {
                var b = a.textContent;
                b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
            }
            function kb(a) {
                switch (a) {
                  case "svg":
                    return "http://www.w3.org/2000/svg";

                  case "math":
                    return "http://www.w3.org/1998/Math/MathML";

                  default:
                    return "http://www.w3.org/1999/xhtml";
                }
            }
            function lb(a, b) {
                return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
            }
            var mb, nb = function(a) {
                return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return a(b, c, d, e);
                    }));
                } : a;
            }((function(a, b) {
                if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b; else {
                    mb = mb || document.createElement("div");
                    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
                    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
                    for (;b.firstChild; ) a.appendChild(b.firstChild);
                }
            }));
            function ob(a, b) {
                if (b) {
                    var c = a.firstChild;
                    if (c && c === a.lastChild && 3 === c.nodeType) {
                        c.nodeValue = b;
                        return;
                    }
                }
                a.textContent = b;
            }
            var pb = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, qb = [ "Webkit", "ms", "Moz", "O" ];
            Object.keys(pb).forEach((function(a) {
                qb.forEach((function(b) {
                    b = b + a.charAt(0).toUpperCase() + a.substring(1);
                    pb[b] = pb[a];
                }));
            }));
            function rb(a, b, c) {
                return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
            }
            function sb(a, b) {
                a = a.style;
                for (var c in b) if (b.hasOwnProperty(c)) {
                    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
                    "float" === c && (c = "cssFloat");
                    d ? a.setProperty(c, e) : a[c] = e;
                }
            }
            var tb = A({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ub(a, b) {
                if (b) {
                    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
                    if (null != b.dangerouslySetInnerHTML) {
                        if (null != b.children) throw Error(p(60));
                        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
                    }
                    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
                }
            }
            function vb(a, b) {
                if (-1 === a.indexOf("-")) return "string" === typeof b.is;
                switch (a) {
                  case "annotation-xml":
                  case "color-profile":
                  case "font-face":
                  case "font-face-src":
                  case "font-face-uri":
                  case "font-face-format":
                  case "font-face-name":
                  case "missing-glyph":
                    return !1;

                  default:
                    return !0;
                }
            }
            var wb = null;
            function xb(a) {
                a = a.target || a.srcElement || window;
                a.correspondingUseElement && (a = a.correspondingUseElement);
                return 3 === a.nodeType ? a.parentNode : a;
            }
            var yb = null, zb = null, Ab = null;
            function Bb(a) {
                if (a = Cb(a)) {
                    if ("function" !== typeof yb) throw Error(p(280));
                    var b = a.stateNode;
                    b && (b = Db(b), yb(a.stateNode, a.type, b));
                }
            }
            function Eb(a) {
                zb ? Ab ? Ab.push(a) : Ab = [ a ] : zb = a;
            }
            function Fb() {
                if (zb) {
                    var a = zb, b = Ab;
                    Ab = zb = null;
                    Bb(a);
                    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
                }
            }
            function Gb(a, b) {
                return a(b);
            }
            function Hb() {}
            var Ib = !1;
            function Jb(a, b, c) {
                if (Ib) return a(b, c);
                Ib = !0;
                try {
                    return Gb(a, b, c);
                } finally {
                    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
                }
            }
            function Kb(a, b) {
                var c = a.stateNode;
                if (null === c) return null;
                var d = Db(c);
                if (null === d) return null;
                c = d[b];
                a: switch (b) {
                  case "onClick":
                  case "onClickCapture":
                  case "onDoubleClick":
                  case "onDoubleClickCapture":
                  case "onMouseDown":
                  case "onMouseDownCapture":
                  case "onMouseMove":
                  case "onMouseMoveCapture":
                  case "onMouseUp":
                  case "onMouseUpCapture":
                  case "onMouseEnter":
                    (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
                    a = !d;
                    break a;

                  default:
                    a = !1;
                }
                if (a) return null;
                if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
                return c;
            }
            var Lb = !1;
            if (ia) try {
                var Mb = {};
                Object.defineProperty(Mb, "passive", {
                    get: function() {
                        Lb = !0;
                    }
                });
                window.addEventListener("test", Mb, Mb);
                window.removeEventListener("test", Mb, Mb);
            } catch (a) {
                Lb = !1;
            }
            function Nb(a, b, c, d, e, f, g, h, k) {
                var l = Array.prototype.slice.call(arguments, 3);
                try {
                    b.apply(c, l);
                } catch (m) {
                    this.onError(m);
                }
            }
            var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = {
                onError: function(a) {
                    Ob = !0;
                    Pb = a;
                }
            };
            function Tb(a, b, c, d, e, f, g, h, k) {
                Ob = !1;
                Pb = null;
                Nb.apply(Sb, arguments);
            }
            function Ub(a, b, c, d, e, f, g, h, k) {
                Tb.apply(this, arguments);
                if (Ob) {
                    if (Ob) {
                        var l = Pb;
                        Ob = !1;
                        Pb = null;
                    } else throw Error(p(198));
                    Qb || (Qb = !0, Rb = l);
                }
            }
            function Vb(a) {
                var b = a, c = a;
                if (a.alternate) for (;b.return; ) b = b.return; else {
                    a = b;
                    do {
                        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
                    } while (a);
                }
                return 3 === b.tag ? c : null;
            }
            function Wb(a) {
                if (13 === a.tag) {
                    var b = a.memoizedState;
                    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
                    if (null !== b) return b.dehydrated;
                }
                return null;
            }
            function Xb(a) {
                if (Vb(a) !== a) throw Error(p(188));
            }
            function Yb(a) {
                var b = a.alternate;
                if (!b) {
                    b = Vb(a);
                    if (null === b) throw Error(p(188));
                    return b !== a ? null : a;
                }
                for (var c = a, d = b; ;) {
                    var e = c.return;
                    if (null === e) break;
                    var f = e.alternate;
                    if (null === f) {
                        d = e.return;
                        if (null !== d) {
                            c = d;
                            continue;
                        }
                        break;
                    }
                    if (e.child === f.child) {
                        for (f = e.child; f; ) {
                            if (f === c) return Xb(e), a;
                            if (f === d) return Xb(e), b;
                            f = f.sibling;
                        }
                        throw Error(p(188));
                    }
                    if (c.return !== d.return) c = e, d = f; else {
                        for (var g = !1, h = e.child; h; ) {
                            if (h === c) {
                                g = !0;
                                c = e;
                                d = f;
                                break;
                            }
                            if (h === d) {
                                g = !0;
                                d = e;
                                c = f;
                                break;
                            }
                            h = h.sibling;
                        }
                        if (!g) {
                            for (h = f.child; h; ) {
                                if (h === c) {
                                    g = !0;
                                    c = f;
                                    d = e;
                                    break;
                                }
                                if (h === d) {
                                    g = !0;
                                    d = f;
                                    c = e;
                                    break;
                                }
                                h = h.sibling;
                            }
                            if (!g) throw Error(p(189));
                        }
                    }
                    if (c.alternate !== d) throw Error(p(190));
                }
                if (3 !== c.tag) throw Error(p(188));
                return c.stateNode.current === c ? a : b;
            }
            function Zb(a) {
                a = Yb(a);
                return null !== a ? $b(a) : null;
            }
            function $b(a) {
                if (5 === a.tag || 6 === a.tag) return a;
                for (a = a.child; null !== a; ) {
                    var b = $b(a);
                    if (null !== b) return b;
                    a = a.sibling;
                }
                return null;
            }
            var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
            function mc(a) {
                if (lc && "function" === typeof lc.onCommitFiberRoot) try {
                    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
                } catch (b) {}
            }
            var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
            function nc(a) {
                a >>>= 0;
                return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
            }
            var rc = 64, sc = 4194304;
            function tc(a) {
                switch (a & -a) {
                  case 1:
                    return 1;

                  case 2:
                    return 2;

                  case 4:
                    return 4;

                  case 8:
                    return 8;

                  case 16:
                    return 16;

                  case 32:
                    return 32;

                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return a & 4194240;

                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    return a & 130023424;

                  case 134217728:
                    return 134217728;

                  case 268435456:
                    return 268435456;

                  case 536870912:
                    return 536870912;

                  case 1073741824:
                    return 1073741824;

                  default:
                    return a;
                }
            }
            function uc(a, b) {
                var c = a.pendingLanes;
                if (0 === c) return 0;
                var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
                if (0 !== g) {
                    var h = g & ~e;
                    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
                } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
                if (0 === d) return 0;
                if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
                0 !== (d & 4) && (d |= c & 16);
                b = a.entangledLanes;
                if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, 
                d |= a[c], b &= ~e;
                return d;
            }
            function vc(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 4:
                    return b + 250;

                  case 8:
                  case 16:
                  case 32:
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return b + 5e3;

                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    return -1;

                  case 134217728:
                  case 268435456:
                  case 536870912:
                  case 1073741824:
                    return -1;

                  default:
                    return -1;
                }
            }
            function wc(a, b) {
                for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
                    var g = 31 - oc(f), h = 1 << g, k = e[g];
                    if (-1 === k) {
                        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
                    } else k <= b && (a.expiredLanes |= h);
                    f &= ~h;
                }
            }
            function xc(a) {
                a = a.pendingLanes & -1073741825;
                return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
            }
            function yc() {
                var a = rc;
                rc <<= 1;
                0 === (rc & 4194240) && (rc = 64);
                return a;
            }
            function zc(a) {
                for (var b = [], c = 0; 31 > c; c++) b.push(a);
                return b;
            }
            function Ac(a, b, c) {
                a.pendingLanes |= b;
                536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
                a = a.eventTimes;
                b = 31 - oc(b);
                a[b] = c;
            }
            function Bc(a, b) {
                var c = a.pendingLanes & ~b;
                a.pendingLanes = b;
                a.suspendedLanes = 0;
                a.pingedLanes = 0;
                a.expiredLanes &= b;
                a.mutableReadLanes &= b;
                a.entangledLanes &= b;
                b = a.entanglements;
                var d = a.eventTimes;
                for (a = a.expirationTimes; 0 < c; ) {
                    var e = 31 - oc(c), f = 1 << e;
                    b[e] = 0;
                    d[e] = -1;
                    a[e] = -1;
                    c &= ~f;
                }
            }
            function Cc(a, b) {
                var c = a.entangledLanes |= b;
                for (a = a.entanglements; c; ) {
                    var d = 31 - oc(c), e = 1 << d;
                    e & b | a[d] & b && (a[d] |= b);
                    c &= ~e;
                }
            }
            var C = 0;
            function Dc(a) {
                a &= -a;
                return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
            }
            var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map, Pc = new Map, Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Sc(a, b) {
                switch (a) {
                  case "focusin":
                  case "focusout":
                    Lc = null;
                    break;

                  case "dragenter":
                  case "dragleave":
                    Mc = null;
                    break;

                  case "mouseover":
                  case "mouseout":
                    Nc = null;
                    break;

                  case "pointerover":
                  case "pointerout":
                    Oc.delete(b.pointerId);
                    break;

                  case "gotpointercapture":
                  case "lostpointercapture":
                    Pc.delete(b.pointerId);
                }
            }
            function Tc(a, b, c, d, e, f) {
                if (null === a || a.nativeEvent !== f) return a = {
                    blockedOn: b,
                    domEventName: c,
                    eventSystemFlags: d,
                    nativeEvent: f,
                    targetContainers: [ e ]
                }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
                a.eventSystemFlags |= d;
                b = a.targetContainers;
                null !== e && -1 === b.indexOf(e) && b.push(e);
                return a;
            }
            function Uc(a, b, c, d, e) {
                switch (b) {
                  case "focusin":
                    return Lc = Tc(Lc, a, b, c, d, e), !0;

                  case "dragenter":
                    return Mc = Tc(Mc, a, b, c, d, e), !0;

                  case "mouseover":
                    return Nc = Tc(Nc, a, b, c, d, e), !0;

                  case "pointerover":
                    var f = e.pointerId;
                    Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
                    return !0;

                  case "gotpointercapture":
                    return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
                }
                return !1;
            }
            function Vc(a) {
                var b = Wc(a.target);
                if (null !== b) {
                    var c = Vb(b);
                    if (null !== c) if (b = c.tag, 13 === b) {
                        if (b = Wb(c), null !== b) {
                            a.blockedOn = b;
                            Ic(a.priority, (function() {
                                Gc(c);
                            }));
                            return;
                        }
                    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                        return;
                    }
                }
                a.blockedOn = null;
            }
            function Xc(a) {
                if (null !== a.blockedOn) return !1;
                for (var b = a.targetContainers; 0 < b.length; ) {
                    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
                    if (null === c) {
                        c = a.nativeEvent;
                        var d = new c.constructor(c.type, c);
                        wb = d;
                        c.target.dispatchEvent(d);
                        wb = null;
                    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
                    b.shift();
                }
                return !0;
            }
            function Zc(a, b, c) {
                Xc(a) && c.delete(b);
            }
            function $c() {
                Jc = !1;
                null !== Lc && Xc(Lc) && (Lc = null);
                null !== Mc && Xc(Mc) && (Mc = null);
                null !== Nc && Xc(Nc) && (Nc = null);
                Oc.forEach(Zc);
                Pc.forEach(Zc);
            }
            function ad(a, b) {
                a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
            }
            function bd(a) {
                function b(b) {
                    return ad(b, a);
                }
                if (0 < Kc.length) {
                    ad(Kc[0], a);
                    for (var c = 1; c < Kc.length; c++) {
                        var d = Kc[c];
                        d.blockedOn === a && (d.blockedOn = null);
                    }
                }
                null !== Lc && ad(Lc, a);
                null !== Mc && ad(Mc, a);
                null !== Nc && ad(Nc, a);
                Oc.forEach(b);
                Pc.forEach(b);
                for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
                for (;0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
            }
            var cd = ua.ReactCurrentBatchConfig, dd = !0;
            function ed(a, b, c, d) {
                var e = C, f = cd.transition;
                cd.transition = null;
                try {
                    C = 1, fd(a, b, c, d);
                } finally {
                    C = e, cd.transition = f;
                }
            }
            function gd(a, b, c, d) {
                var e = C, f = cd.transition;
                cd.transition = null;
                try {
                    C = 4, fd(a, b, c, d);
                } finally {
                    C = e, cd.transition = f;
                }
            }
            function fd(a, b, c, d) {
                if (dd) {
                    var e = Yc(a, b, c, d);
                    if (null === e) hd(a, b, d, id, c), Sc(a, d); else if (Uc(e, a, b, c, d)) d.stopPropagation(); else if (Sc(a, d), 
                    b & 4 && -1 < Rc.indexOf(a)) {
                        for (;null !== e; ) {
                            var f = Cb(e);
                            null !== f && Ec(f);
                            f = Yc(a, b, c, d);
                            null === f && hd(a, b, d, id, c);
                            if (f === e) break;
                            e = f;
                        }
                        null !== e && d.stopPropagation();
                    } else hd(a, b, d, null, c);
                }
            }
            var id = null;
            function Yc(a, b, c, d) {
                id = null;
                a = xb(d);
                a = Wc(a);
                if (null !== a) if (b = Vb(a), null === b) a = null; else if (c = b.tag, 13 === c) {
                    a = Wb(b);
                    if (null !== a) return a;
                    a = null;
                } else if (3 === c) {
                    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
                    a = null;
                } else b !== a && (a = null);
                id = a;
                return null;
            }
            function jd(a) {
                switch (a) {
                  case "cancel":
                  case "click":
                  case "close":
                  case "contextmenu":
                  case "copy":
                  case "cut":
                  case "auxclick":
                  case "dblclick":
                  case "dragend":
                  case "dragstart":
                  case "drop":
                  case "focusin":
                  case "focusout":
                  case "input":
                  case "invalid":
                  case "keydown":
                  case "keypress":
                  case "keyup":
                  case "mousedown":
                  case "mouseup":
                  case "paste":
                  case "pause":
                  case "play":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointerup":
                  case "ratechange":
                  case "reset":
                  case "resize":
                  case "seeked":
                  case "submit":
                  case "touchcancel":
                  case "touchend":
                  case "touchstart":
                  case "volumechange":
                  case "change":
                  case "selectionchange":
                  case "textInput":
                  case "compositionstart":
                  case "compositionend":
                  case "compositionupdate":
                  case "beforeblur":
                  case "afterblur":
                  case "beforeinput":
                  case "blur":
                  case "fullscreenchange":
                  case "focus":
                  case "hashchange":
                  case "popstate":
                  case "select":
                  case "selectstart":
                    return 1;

                  case "drag":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "mousemove":
                  case "mouseout":
                  case "mouseover":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "scroll":
                  case "toggle":
                  case "touchmove":
                  case "wheel":
                  case "mouseenter":
                  case "mouseleave":
                  case "pointerenter":
                  case "pointerleave":
                    return 4;

                  case "message":
                    switch (ec()) {
                      case fc:
                        return 1;

                      case gc:
                        return 4;

                      case hc:
                      case ic:
                        return 16;

                      case jc:
                        return 536870912;

                      default:
                        return 16;
                    }

                  default:
                    return 16;
                }
            }
            var kd = null, ld = null, md = null;
            function nd() {
                if (md) return md;
                var a, d, b = ld, c = b.length, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
                for (a = 0; a < c && b[a] === e[a]; a++) ;
                var g = c - a;
                for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
                return md = e.slice(a, 1 < d ? 1 - d : void 0);
            }
            function od(a) {
                var b = a.keyCode;
                "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
                10 === a && (a = 13);
                return 32 <= a || 13 === a ? a : 0;
            }
            function pd() {
                return !0;
            }
            function qd() {
                return !1;
            }
            function rd(a) {
                function b(b, d, e, f, g) {
                    this._reactName = b;
                    this._targetInst = e;
                    this.type = d;
                    this.nativeEvent = f;
                    this.target = g;
                    this.currentTarget = null;
                    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
                    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
                    this.isPropagationStopped = qd;
                    return this;
                }
                A(b.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var a = this.nativeEvent;
                        a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), 
                        this.isDefaultPrevented = pd);
                    },
                    stopPropagation: function() {
                        var a = this.nativeEvent;
                        a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), 
                        this.isPropagationStopped = pd);
                    },
                    persist: function() {},
                    isPersistent: pd
                });
                return b;
            }
            var wd, xd, yd, sd = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(a) {
                    return a.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, td = rd(sd), ud = A({}, sd, {
                view: 0,
                detail: 0
            }), vd = rd(ud), Ad = A({}, ud, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: zd,
                button: 0,
                buttons: 0,
                relatedTarget: function(a) {
                    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
                },
                movementX: function(a) {
                    if ("movementX" in a) return a.movementX;
                    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, 
                    yd = a);
                    return wd;
                },
                movementY: function(a) {
                    return "movementY" in a ? a.movementY : xd;
                }
            }), Bd = rd(Ad), Cd = A({}, Ad, {
                dataTransfer: 0
            }), Dd = rd(Cd), Ed = A({}, ud, {
                relatedTarget: 0
            }), Fd = rd(Ed), Gd = A({}, sd, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }), Hd = rd(Gd), Id = A({}, sd, {
                clipboardData: function(a) {
                    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
                }
            }), Jd = rd(Id), Kd = A({}, sd, {
                data: 0
            }), Ld = rd(Kd), Md = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, Nd = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Od = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function Pd(a) {
                var b = this.nativeEvent;
                return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
            }
            function zd() {
                return Pd;
            }
            var Qd = A({}, ud, {
                key: function(a) {
                    if (a.key) {
                        var b = Md[a.key] || a.key;
                        if ("Unidentified" !== b) return b;
                    }
                    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: zd,
                charCode: function(a) {
                    return "keypress" === a.type ? od(a) : 0;
                },
                keyCode: function(a) {
                    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
                },
                which: function(a) {
                    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
                }
            }), Rd = rd(Qd), Sd = A({}, Ad, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }), Td = rd(Sd), Ud = A({}, ud, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: zd
            }), Vd = rd(Ud), Wd = A({}, sd, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }), Xd = rd(Wd), Yd = A({}, Ad, {
                deltaX: function(a) {
                    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
                },
                deltaY: function(a) {
                    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
                },
                deltaZ: 0,
                deltaMode: 0
            }), Zd = rd(Yd), $d = [ 9, 13, 27, 32 ], ae = ia && "CompositionEvent" in window, be = null;
            ia && "documentMode" in document && (be = document.documentMode);
            var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
            function ge(a, b) {
                switch (a) {
                  case "keyup":
                    return -1 !== $d.indexOf(b.keyCode);

                  case "keydown":
                    return 229 !== b.keyCode;

                  case "keypress":
                  case "mousedown":
                  case "focusout":
                    return !0;

                  default:
                    return !1;
                }
            }
            function he(a) {
                a = a.detail;
                return "object" === typeof a && "data" in a ? a.data : null;
            }
            var ie = !1;
            function je(a, b) {
                switch (a) {
                  case "compositionend":
                    return he(b);

                  case "keypress":
                    if (32 !== b.which) return null;
                    fe = !0;
                    return ee;

                  case "textInput":
                    return a = b.data, a === ee && fe ? null : a;

                  default:
                    return null;
                }
            }
            function ke(a, b) {
                if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, 
                ie = !1, a) : null;
                switch (a) {
                  case "paste":
                    return null;

                  case "keypress":
                    if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                        if (b.char && 1 < b.char.length) return b.char;
                        if (b.which) return String.fromCharCode(b.which);
                    }
                    return null;

                  case "compositionend":
                    return de && "ko" !== b.locale ? null : b.data;

                  default:
                    return null;
                }
            }
            var le = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function me(a) {
                var b = a && a.nodeName && a.nodeName.toLowerCase();
                return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
            }
            function ne(a, b, c, d) {
                Eb(d);
                b = oe(b, "onChange");
                0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
                    event: c,
                    listeners: b
                }));
            }
            var pe = null, qe = null;
            function re(a) {
                se(a, 0);
            }
            function te(a) {
                var b = ue(a);
                if (Wa(b)) return a;
            }
            function ve(a, b) {
                if ("change" === a) return b;
            }
            var we = !1;
            if (ia) {
                var xe;
                if (ia) {
                    var ye = "oninput" in document;
                    if (!ye) {
                        var ze = document.createElement("div");
                        ze.setAttribute("oninput", "return;");
                        ye = "function" === typeof ze.oninput;
                    }
                    xe = ye;
                } else xe = !1;
                we = xe && (!document.documentMode || 9 < document.documentMode);
            }
            function Ae() {
                pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
            }
            function Be(a) {
                if ("value" === a.propertyName && te(qe)) {
                    var b = [];
                    ne(b, qe, a, xb(a));
                    Jb(re, b);
                }
            }
            function Ce(a, b, c) {
                "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
            }
            function De(a) {
                if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
            }
            function Ee(a, b) {
                if ("click" === a) return te(b);
            }
            function Fe(a, b) {
                if ("input" === a || "change" === a) return te(b);
            }
            function Ge(a, b) {
                return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
            }
            var He = "function" === typeof Object.is ? Object.is : Ge;
            function Ie(a, b) {
                if (He(a, b)) return !0;
                if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
                var c = Object.keys(a), d = Object.keys(b);
                if (c.length !== d.length) return !1;
                for (d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
                }
                return !0;
            }
            function Je(a) {
                for (;a && a.firstChild; ) a = a.firstChild;
                return a;
            }
            function Ke(a, b) {
                var c = Je(a);
                a = 0;
                for (var d; c; ) {
                    if (3 === c.nodeType) {
                        d = a + c.textContent.length;
                        if (a <= b && d >= b) return {
                            node: c,
                            offset: b - a
                        };
                        a = d;
                    }
                    a: {
                        for (;c; ) {
                            if (c.nextSibling) {
                                c = c.nextSibling;
                                break a;
                            }
                            c = c.parentNode;
                        }
                        c = void 0;
                    }
                    c = Je(c);
                }
            }
            function Le(a, b) {
                return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
            }
            function Me() {
                for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
                    try {
                        var c = "string" === typeof b.contentWindow.location.href;
                    } catch (d) {
                        c = !1;
                    }
                    if (c) a = b.contentWindow; else break;
                    b = Xa(a.document);
                }
                return b;
            }
            function Ne(a) {
                var b = a && a.nodeName && a.nodeName.toLowerCase();
                return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
            }
            function Oe(a) {
                var b = Me(), c = a.focusedElem, d = a.selectionRange;
                if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
                    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, 
                    c.selectionEnd = Math.min(a, c.value.length); else if (a = (b = c.ownerDocument || document) && b.defaultView || window, 
                    a.getSelection) {
                        a = a.getSelection();
                        var e = c.textContent.length, f = Math.min(d.start, e);
                        d = void 0 === d.end ? f : Math.min(d.end, e);
                        !a.extend && f > d && (e = d, d = f, f = e);
                        e = Ke(c, f);
                        var g = Ke(c, d);
                        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), 
                        b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), 
                        a.addRange(b)));
                    }
                    b = [];
                    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({
                        element: a,
                        left: a.scrollLeft,
                        top: a.scrollTop
                    });
                    "function" === typeof c.focus && c.focus();
                    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
                }
            }
            var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
            function Ue(a, b, c) {
                var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
                Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
                    start: d.selectionStart,
                    end: d.selectionEnd
                } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), 
                d = {
                    anchorNode: d.anchorNode,
                    anchorOffset: d.anchorOffset,
                    focusNode: d.focusNode,
                    focusOffset: d.focusOffset
                }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), 
                a.push({
                    event: b,
                    listeners: d
                }), b.target = Qe)));
            }
            function Ve(a, b) {
                var c = {};
                c[a.toLowerCase()] = b.toLowerCase();
                c["Webkit" + a] = "webkit" + b;
                c["Moz" + a] = "moz" + b;
                return c;
            }
            var We = {
                animationend: Ve("Animation", "AnimationEnd"),
                animationiteration: Ve("Animation", "AnimationIteration"),
                animationstart: Ve("Animation", "AnimationStart"),
                transitionend: Ve("Transition", "TransitionEnd")
            }, Xe = {}, Ye = {};
            ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, 
            delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
            function Ze(a) {
                if (Xe[a]) return Xe[a];
                if (!We[a]) return a;
                var c, b = We[a];
                for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
                return a;
            }
            var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = new Map, ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function ff(a, b) {
                df.set(a, b);
                fa(b, [ a ]);
            }
            for (var gf = 0; gf < ef.length; gf++) {
                var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
                ff(jf, "on" + kf);
            }
            ff($e, "onAnimationEnd");
            ff(af, "onAnimationIteration");
            ff(bf, "onAnimationStart");
            ff("dblclick", "onDoubleClick");
            ff("focusin", "onFocus");
            ff("focusout", "onBlur");
            ff(cf, "onTransitionEnd");
            ha("onMouseEnter", [ "mouseout", "mouseover" ]);
            ha("onMouseLeave", [ "mouseout", "mouseover" ]);
            ha("onPointerEnter", [ "pointerout", "pointerover" ]);
            ha("onPointerLeave", [ "pointerout", "pointerover" ]);
            fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
            fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
            fa("onBeforeInput", [ "compositionend", "keypress", "textInput", "paste" ]);
            fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
            fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
            fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
            function nf(a, b, c) {
                var d = a.type || "unknown-event";
                a.currentTarget = c;
                Ub(d, b, void 0, a);
                a.currentTarget = null;
            }
            function se(a, b) {
                b = 0 !== (b & 4);
                for (var c = 0; c < a.length; c++) {
                    var d = a[c], e = d.event;
                    d = d.listeners;
                    a: {
                        var f = void 0;
                        if (b) for (var g = d.length - 1; 0 <= g; g--) {
                            var h = d[g], k = h.instance, l = h.currentTarget;
                            h = h.listener;
                            if (k !== f && e.isPropagationStopped()) break a;
                            nf(e, h, l);
                            f = k;
                        } else for (g = 0; g < d.length; g++) {
                            h = d[g];
                            k = h.instance;
                            l = h.currentTarget;
                            h = h.listener;
                            if (k !== f && e.isPropagationStopped()) break a;
                            nf(e, h, l);
                            f = k;
                        }
                    }
                }
                if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
            }
            function D(a, b) {
                var c = b[of];
                void 0 === c && (c = b[of] = new Set);
                var d = a + "__bubble";
                c.has(d) || (pf(b, a, 2, !1), c.add(d));
            }
            function qf(a, b, c) {
                var d = 0;
                b && (d |= 4);
                pf(c, a, d, b);
            }
            var rf = "_reactListening" + Math.random().toString(36).slice(2);
            function sf(a) {
                if (!a[rf]) {
                    a[rf] = !0;
                    da.forEach((function(b) {
                        "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
                    }));
                    var b = 9 === a.nodeType ? a : a.ownerDocument;
                    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
                }
            }
            function pf(a, b, c, d) {
                switch (jd(b)) {
                  case 1:
                    var e = ed;
                    break;

                  case 4:
                    e = gd;
                    break;

                  default:
                    e = fd;
                }
                c = e.bind(null, b, c, a);
                e = void 0;
                !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
                d ? void 0 !== e ? a.addEventListener(b, c, {
                    capture: !0,
                    passive: e
                }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
                    passive: e
                }) : a.addEventListener(b, c, !1);
            }
            function hd(a, b, c, d, e) {
                var f = d;
                if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
                    if (null === d) return;
                    var g = d.tag;
                    if (3 === g || 4 === g) {
                        var h = d.stateNode.containerInfo;
                        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
                        if (4 === g) for (g = d.return; null !== g; ) {
                            var k = g.tag;
                            if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                            g = g.return;
                        }
                        for (;null !== h; ) {
                            g = Wc(h);
                            if (null === g) return;
                            k = g.tag;
                            if (5 === k || 6 === k) {
                                d = f = g;
                                continue a;
                            }
                            h = h.parentNode;
                        }
                    }
                    d = d.return;
                }
                Jb((function() {
                    var d = f, e = xb(c), g = [];
                    a: {
                        var h = df.get(a);
                        if (void 0 !== h) {
                            var k = td, n = a;
                            switch (a) {
                              case "keypress":
                                if (0 === od(c)) break a;

                              case "keydown":
                              case "keyup":
                                k = Rd;
                                break;

                              case "focusin":
                                n = "focus";
                                k = Fd;
                                break;

                              case "focusout":
                                n = "blur";
                                k = Fd;
                                break;

                              case "beforeblur":
                              case "afterblur":
                                k = Fd;
                                break;

                              case "click":
                                if (2 === c.button) break a;

                              case "auxclick":
                              case "dblclick":
                              case "mousedown":
                              case "mousemove":
                              case "mouseup":
                              case "mouseout":
                              case "mouseover":
                              case "contextmenu":
                                k = Bd;
                                break;

                              case "drag":
                              case "dragend":
                              case "dragenter":
                              case "dragexit":
                              case "dragleave":
                              case "dragover":
                              case "dragstart":
                              case "drop":
                                k = Dd;
                                break;

                              case "touchcancel":
                              case "touchend":
                              case "touchmove":
                              case "touchstart":
                                k = Vd;
                                break;

                              case $e:
                              case af:
                              case bf:
                                k = Hd;
                                break;

                              case cf:
                                k = Xd;
                                break;

                              case "scroll":
                                k = vd;
                                break;

                              case "wheel":
                                k = Zd;
                                break;

                              case "copy":
                              case "cut":
                              case "paste":
                                k = Jd;
                                break;

                              case "gotpointercapture":
                              case "lostpointercapture":
                              case "pointercancel":
                              case "pointerdown":
                              case "pointermove":
                              case "pointerout":
                              case "pointerover":
                              case "pointerup":
                                k = Td;
                            }
                            var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                            t = [];
                            for (var u, w = d; null !== w; ) {
                                u = w;
                                var F = u.stateNode;
                                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                                if (J) break;
                                w = w.return;
                            }
                            0 < t.length && (h = new k(h, n, null, c, e), g.push({
                                event: h,
                                listeners: t
                            }));
                        }
                    }
                    if (0 === (b & 7)) {
                        a: {
                            h = "mouseover" === a || "pointerover" === a;
                            k = "mouseout" === a || "pointerout" === a;
                            if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
                            if (k || h) {
                                h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                                if (k) {
                                    if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), 
                                    n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                                } else k = null, n = d;
                                if (k !== n) {
                                    t = Bd;
                                    F = "onMouseLeave";
                                    x = "onMouseEnter";
                                    w = "mouse";
                                    if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", 
                                    w = "pointer";
                                    J = null == k ? h : ue(k);
                                    u = null == n ? h : ue(n);
                                    h = new t(F, w + "leave", k, c, e);
                                    h.target = J;
                                    h.relatedTarget = u;
                                    F = null;
                                    Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, 
                                    F = t);
                                    J = F;
                                    if (k && n) b: {
                                        t = k;
                                        x = n;
                                        w = 0;
                                        for (u = t; u; u = vf(u)) w++;
                                        u = 0;
                                        for (F = x; F; F = vf(F)) u++;
                                        for (;0 < w - u; ) t = vf(t), w--;
                                        for (;0 < u - w; ) x = vf(x), u--;
                                        for (;w--; ) {
                                            if (t === x || null !== x && t === x.alternate) break b;
                                            t = vf(t);
                                            x = vf(x);
                                        }
                                        t = null;
                                    } else t = null;
                                    null !== k && wf(g, h, k, t, !1);
                                    null !== n && null !== J && wf(g, J, n, t, !0);
                                }
                            }
                        }
                        a: {
                            h = d ? ue(d) : window;
                            k = h.nodeName && h.nodeName.toLowerCase();
                            if ("select" === k || "input" === k && "file" === h.type) var na = ve; else if (me(h)) if (we) na = Fe; else {
                                na = De;
                                var xa = Ce;
                            } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
                            if (na && (na = na(a, d))) {
                                ne(g, na, c, e);
                                break a;
                            }
                            xa && xa(a, h, d);
                            "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
                        }
                        xa = d ? ue(d) : window;
                        switch (a) {
                          case "focusin":
                            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
                            break;

                          case "focusout":
                            Se = Re = Qe = null;
                            break;

                          case "mousedown":
                            Te = !0;
                            break;

                          case "contextmenu":
                          case "mouseup":
                          case "dragend":
                            Te = !1;
                            Ue(g, c, e);
                            break;

                          case "selectionchange":
                            if (Pe) break;

                          case "keydown":
                          case "keyup":
                            Ue(g, c, e);
                        }
                        var $a;
                        if (ae) b: {
                            switch (a) {
                              case "compositionstart":
                                var ba = "onCompositionStart";
                                break b;

                              case "compositionend":
                                ba = "onCompositionEnd";
                                break b;

                              case "compositionupdate":
                                ba = "onCompositionUpdate";
                                break b;
                            }
                            ba = void 0;
                        } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
                        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, 
                        ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), 
                        g.push({
                            event: ba,
                            listeners: xa
                        }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
                        if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), 
                        g.push({
                            event: e,
                            listeners: d
                        }), e.data = $a);
                    }
                    se(g, b);
                }));
            }
            function tf(a, b, c) {
                return {
                    instance: a,
                    listener: b,
                    currentTarget: c
                };
            }
            function oe(a, b) {
                for (var c = b + "Capture", d = []; null !== a; ) {
                    var e = a, f = e.stateNode;
                    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), 
                    f = Kb(a, b), null != f && d.push(tf(a, f, e)));
                    a = a.return;
                }
                return d;
            }
            function vf(a) {
                if (null === a) return null;
                do {
                    a = a.return;
                } while (a && 5 !== a.tag);
                return a ? a : null;
            }
            function wf(a, b, c, d, e) {
                for (var f = b._reactName, g = []; null !== c && c !== d; ) {
                    var h = c, k = h.alternate, l = h.stateNode;
                    if (null !== k && k === d) break;
                    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), 
                    null != k && g.push(tf(c, k, h))));
                    c = c.return;
                }
                0 !== g.length && a.push({
                    event: b,
                    listeners: g
                });
            }
            var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
            function zf(a) {
                return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
            }
            function Af(a, b, c) {
                b = zf(b);
                if (zf(a) !== b && c) throw Error(p(425));
            }
            function Bf() {}
            var Cf = null, Df = null;
            function Ef(a, b) {
                return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
            }
            var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
                return Hf.resolve(null).then(a).catch(If);
            } : Ff;
            function If(a) {
                setTimeout((function() {
                    throw a;
                }));
            }
            function Kf(a, b) {
                var c = b, d = 0;
                do {
                    var e = c.nextSibling;
                    a.removeChild(c);
                    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
                        if (0 === d) {
                            a.removeChild(e);
                            bd(b);
                            return;
                        }
                        d--;
                    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
                    c = e;
                } while (c);
                bd(b);
            }
            function Lf(a) {
                for (;null != a; a = a.nextSibling) {
                    var b = a.nodeType;
                    if (1 === b || 3 === b) break;
                    if (8 === b) {
                        b = a.data;
                        if ("$" === b || "$!" === b || "$?" === b) break;
                        if ("/$" === b) return null;
                    }
                }
                return a;
            }
            function Mf(a) {
                a = a.previousSibling;
                for (var b = 0; a; ) {
                    if (8 === a.nodeType) {
                        var c = a.data;
                        if ("$" === c || "$!" === c || "$?" === c) {
                            if (0 === b) return a;
                            b--;
                        } else "/$" === c && b++;
                    }
                    a = a.previousSibling;
                }
                return null;
            }
            var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
            function Wc(a) {
                var b = a[Of];
                if (b) return b;
                for (var c = a.parentNode; c; ) {
                    if (b = c[uf] || c[Of]) {
                        c = b.alternate;
                        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
                            if (c = a[Of]) return c;
                            a = Mf(a);
                        }
                        return b;
                    }
                    a = c;
                    c = a.parentNode;
                }
                return null;
            }
            function Cb(a) {
                a = a[Of] || a[uf];
                return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
            }
            function ue(a) {
                if (5 === a.tag || 6 === a.tag) return a.stateNode;
                throw Error(p(33));
            }
            function Db(a) {
                return a[Pf] || null;
            }
            var Sf = [], Tf = -1;
            function Uf(a) {
                return {
                    current: a
                };
            }
            function E(a) {
                0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
            }
            function G(a, b) {
                Tf++;
                Sf[Tf] = a.current;
                a.current = b;
            }
            var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
            function Yf(a, b) {
                var c = a.type.contextTypes;
                if (!c) return Vf;
                var d = a.stateNode;
                if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
                var f, e = {};
                for (f in c) e[f] = b[f];
                d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
                return e;
            }
            function Zf(a) {
                a = a.childContextTypes;
                return null !== a && void 0 !== a;
            }
            function $f() {
                E(Wf);
                E(H);
            }
            function ag(a, b, c) {
                if (H.current !== Vf) throw Error(p(168));
                G(H, b);
                G(Wf, c);
            }
            function bg(a, b, c) {
                var d = a.stateNode;
                b = b.childContextTypes;
                if ("function" !== typeof d.getChildContext) return c;
                d = d.getChildContext();
                for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
                return A({}, c, d);
            }
            function cg(a) {
                a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
                Xf = H.current;
                G(H, a);
                G(Wf, Wf.current);
                return !0;
            }
            function dg(a, b, c) {
                var d = a.stateNode;
                if (!d) throw Error(p(169));
                c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), 
                G(H, a)) : E(Wf);
                G(Wf, c);
            }
            var eg = null, fg = !1, gg = !1;
            function hg(a) {
                null === eg ? eg = [ a ] : eg.push(a);
            }
            function ig(a) {
                fg = !0;
                hg(a);
            }
            function jg() {
                if (!gg && null !== eg) {
                    gg = !0;
                    var a = 0, b = C;
                    try {
                        var c = eg;
                        for (C = 1; a < c.length; a++) {
                            var d = c[a];
                            do {
                                d = d(!0);
                            } while (null !== d);
                        }
                        eg = null;
                        fg = !1;
                    } catch (e) {
                        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
                    } finally {
                        C = b, gg = !1;
                    }
                }
                return null;
            }
            var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
            function tg(a, b) {
                kg[lg++] = ng;
                kg[lg++] = mg;
                mg = a;
                ng = b;
            }
            function ug(a, b, c) {
                og[pg++] = rg;
                og[pg++] = sg;
                og[pg++] = qg;
                qg = a;
                var d = rg;
                a = sg;
                var e = 32 - oc(d) - 1;
                d &= ~(1 << e);
                c += 1;
                var f = 32 - oc(b) + e;
                if (30 < f) {
                    var g = e - e % 5;
                    f = (d & (1 << g) - 1).toString(32);
                    d >>= g;
                    e -= g;
                    rg = 1 << 32 - oc(b) + e | c << e | d;
                    sg = f + a;
                } else rg = 1 << f | c << e | d, sg = a;
            }
            function vg(a) {
                null !== a.return && (tg(a, 1), ug(a, 1, 0));
            }
            function wg(a) {
                for (;a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
                for (;a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], 
                og[pg] = null;
            }
            var xg = null, yg = null, I = !1, zg = null;
            function Ag(a, b) {
                var c = Bg(5, null, null, 0);
                c.elementType = "DELETED";
                c.stateNode = b;
                c.return = a;
                b = a.deletions;
                null === b ? (a.deletions = [ c ], a.flags |= 16) : b.push(c);
            }
            function Cg(a, b) {
                switch (a.tag) {
                  case 5:
                    var c = a.type;
                    b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
                    return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;

                  case 6:
                    return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, 
                    xg = a, yg = null, !0) : !1;

                  case 13:
                    return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
                        id: rg,
                        overflow: sg
                    } : null, a.memoizedState = {
                        dehydrated: b,
                        treeContext: c,
                        retryLane: 1073741824
                    }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, 
                    yg = null, !0) : !1;

                  default:
                    return !1;
                }
            }
            function Dg(a) {
                return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
            }
            function Eg(a) {
                if (I) {
                    var b = yg;
                    if (b) {
                        var c = b;
                        if (!Cg(a, b)) {
                            if (Dg(a)) throw Error(p(418));
                            b = Lf(c.nextSibling);
                            var d = xg;
                            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
                        }
                    } else {
                        if (Dg(a)) throw Error(p(418));
                        a.flags = a.flags & -4097 | 2;
                        I = !1;
                        xg = a;
                    }
                }
            }
            function Fg(a) {
                for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
                xg = a;
            }
            function Gg(a) {
                if (a !== xg) return !1;
                if (!I) return Fg(a), I = !0, !1;
                var b;
                (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
                if (b && (b = yg)) {
                    if (Dg(a)) throw Hg(), Error(p(418));
                    for (;b; ) Ag(a, b), b = Lf(b.nextSibling);
                }
                Fg(a);
                if (13 === a.tag) {
                    a = a.memoizedState;
                    a = null !== a ? a.dehydrated : null;
                    if (!a) throw Error(p(317));
                    a: {
                        a = a.nextSibling;
                        for (b = 0; a; ) {
                            if (8 === a.nodeType) {
                                var c = a.data;
                                if ("/$" === c) {
                                    if (0 === b) {
                                        yg = Lf(a.nextSibling);
                                        break a;
                                    }
                                    b--;
                                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                            }
                            a = a.nextSibling;
                        }
                        yg = null;
                    }
                } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
                return !0;
            }
            function Hg() {
                for (var a = yg; a; ) a = Lf(a.nextSibling);
            }
            function Ig() {
                yg = xg = null;
                I = !1;
            }
            function Jg(a) {
                null === zg ? zg = [ a ] : zg.push(a);
            }
            var Kg = ua.ReactCurrentBatchConfig;
            function Lg(a, b, c) {
                a = c.ref;
                if (null !== a && "function" !== typeof a && "object" !== typeof a) {
                    if (c._owner) {
                        c = c._owner;
                        if (c) {
                            if (1 !== c.tag) throw Error(p(309));
                            var d = c.stateNode;
                        }
                        if (!d) throw Error(p(147, a));
                        var e = d, f = "" + a;
                        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
                        b = function(a) {
                            var b = e.refs;
                            null === a ? delete b[f] : b[f] = a;
                        };
                        b._stringRef = f;
                        return b;
                    }
                    if ("string" !== typeof a) throw Error(p(284));
                    if (!c._owner) throw Error(p(290, a));
                }
                return a;
            }
            function Mg(a, b) {
                a = Object.prototype.toString.call(b);
                throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
            }
            function Ng(a) {
                var b = a._init;
                return b(a._payload);
            }
            function Og(a) {
                function b(b, c) {
                    if (a) {
                        var d = b.deletions;
                        null === d ? (b.deletions = [ c ], b.flags |= 16) : d.push(c);
                    }
                }
                function c(c, d) {
                    if (!a) return null;
                    for (;null !== d; ) b(c, d), d = d.sibling;
                    return null;
                }
                function d(a, b) {
                    for (a = new Map; null !== b; ) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), 
                    b = b.sibling;
                    return a;
                }
                function e(a, b) {
                    a = Pg(a, b);
                    a.index = 0;
                    a.sibling = null;
                    return a;
                }
                function f(b, c, d) {
                    b.index = d;
                    if (!a) return b.flags |= 1048576, c;
                    d = b.alternate;
                    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
                    b.flags |= 2;
                    return c;
                }
                function g(b) {
                    a && null === b.alternate && (b.flags |= 2);
                    return b;
                }
                function h(a, b, c, d) {
                    if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
                    b = e(b, c);
                    b.return = a;
                    return b;
                }
                function k(a, b, c, d) {
                    var f = c.type;
                    if (f === ya) return m(a, b, c.props.children, d, c.key);
                    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), 
                    d.ref = Lg(a, b, c), d.return = a, d;
                    d = Rg(c.type, c.key, c.props, null, a.mode, d);
                    d.ref = Lg(a, b, c);
                    d.return = a;
                    return d;
                }
                function l(a, b, c, d) {
                    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), 
                    b.return = a, b;
                    b = e(b, c.children || []);
                    b.return = a;
                    return b;
                }
                function m(a, b, c, d, f) {
                    if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
                    b = e(b, c);
                    b.return = a;
                    return b;
                }
                function q(a, b, c) {
                    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), 
                    b.return = a, b;
                    if ("object" === typeof b && null !== b) {
                        switch (b.$$typeof) {
                          case va:
                            return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), 
                            c.return = a, c;

                          case wa:
                            return b = Sg(b, a.mode, c), b.return = a, b;

                          case Ha:
                            var d = b._init;
                            return q(a, d(b._payload), c);
                        }
                        if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
                        Mg(a, b);
                    }
                    return null;
                }
                function r(a, b, c, d) {
                    var e = null !== b ? b.key : null;
                    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
                    if ("object" === typeof c && null !== c) {
                        switch (c.$$typeof) {
                          case va:
                            return c.key === e ? k(a, b, c, d) : null;

                          case wa:
                            return c.key === e ? l(a, b, c, d) : null;

                          case Ha:
                            return e = c._init, r(a, b, e(c._payload), d);
                        }
                        if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
                        Mg(a, c);
                    }
                    return null;
                }
                function y(a, b, c, d, e) {
                    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, 
                    h(b, a, "" + d, e);
                    if ("object" === typeof d && null !== d) {
                        switch (d.$$typeof) {
                          case va:
                            return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);

                          case wa:
                            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);

                          case Ha:
                            var f = d._init;
                            return y(a, b, c, f(d._payload), e);
                        }
                        if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
                        Mg(b, d);
                    }
                    return null;
                }
                function n(e, g, h, k) {
                    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
                        u.index > w ? (x = u, u = null) : x = u.sibling;
                        var n = r(e, u, h[w], k);
                        if (null === n) {
                            null === u && (u = x);
                            break;
                        }
                        a && u && null === n.alternate && b(e, u);
                        g = f(n, g, w);
                        null === m ? l = n : m.sibling = n;
                        m = n;
                        u = x;
                    }
                    if (w === h.length) return c(e, u), I && tg(e, w), l;
                    if (null === u) {
                        for (;w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, 
                        m = u);
                        I && tg(e, w);
                        return l;
                    }
                    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), 
                    g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
                    a && u.forEach((function(a) {
                        return b(e, a);
                    }));
                    I && tg(e, w);
                    return l;
                }
                function t(e, g, h, k) {
                    var l = Ka(h);
                    if ("function" !== typeof l) throw Error(p(150));
                    h = l.call(h);
                    if (null == h) throw Error(p(151));
                    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, 
                    n = h.next()) {
                        m.index > w ? (x = m, m = null) : x = m.sibling;
                        var t = r(e, m, n.value, k);
                        if (null === t) {
                            null === m && (m = x);
                            break;
                        }
                        a && m && null === t.alternate && b(e, m);
                        g = f(t, g, w);
                        null === u ? l = t : u.sibling = t;
                        u = t;
                        m = x;
                    }
                    if (n.done) return c(e, m), I && tg(e, w), l;
                    if (null === m) {
                        for (;!n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), 
                        null === u ? l = n : u.sibling = n, u = n);
                        I && tg(e, w);
                        return l;
                    }
                    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), 
                    g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
                    a && m.forEach((function(a) {
                        return b(e, a);
                    }));
                    I && tg(e, w);
                    return l;
                }
                function J(a, d, f, h) {
                    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
                    if ("object" === typeof f && null !== f) {
                        switch (f.$$typeof) {
                          case va:
                            a: {
                                for (var k = f.key, l = d; null !== l; ) {
                                    if (l.key === k) {
                                        k = f.type;
                                        if (k === ya) {
                                            if (7 === l.tag) {
                                                c(a, l.sibling);
                                                d = e(l, f.props.children);
                                                d.return = a;
                                                a = d;
                                                break a;
                                            }
                                        } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
                                            c(a, l.sibling);
                                            d = e(l, f.props);
                                            d.ref = Lg(a, l, f);
                                            d.return = a;
                                            a = d;
                                            break a;
                                        }
                                        c(a, l);
                                        break;
                                    } else b(a, l);
                                    l = l.sibling;
                                }
                                f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), 
                                h.ref = Lg(a, d, f), h.return = a, a = h);
                            }
                            return g(a);

                          case wa:
                            a: {
                                for (l = f.key; null !== d; ) {
                                    if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                        c(a, d.sibling);
                                        d = e(d, f.children || []);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    } else {
                                        c(a, d);
                                        break;
                                    } else b(a, d);
                                    d = d.sibling;
                                }
                                d = Sg(f, a.mode, h);
                                d.return = a;
                                a = d;
                            }
                            return g(a);

                          case Ha:
                            return l = f._init, J(a, d, l(f._payload), h);
                        }
                        if (eb(f)) return n(a, d, f, h);
                        if (Ka(f)) return t(a, d, f, h);
                        Mg(a, f);
                    }
                    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, 
                    null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), 
                    d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
                }
                return J;
            }
            var Ug = Og(!0), Vg = Og(!1), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
            function $g() {
                Zg = Yg = Xg = null;
            }
            function ah(a) {
                var b = Wg.current;
                E(Wg);
                a._currentValue = b;
            }
            function bh(a, b, c) {
                for (;null !== a; ) {
                    var d = a.alternate;
                    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
                    if (a === c) break;
                    a = a.return;
                }
            }
            function ch(a, b) {
                Xg = a;
                Zg = Yg = null;
                a = a.dependencies;
                null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
            }
            function eh(a) {
                var b = a._currentValue;
                if (Zg !== a) if (a = {
                    context: a,
                    memoizedValue: b,
                    next: null
                }, null === Yg) {
                    if (null === Xg) throw Error(p(308));
                    Yg = a;
                    Xg.dependencies = {
                        lanes: 0,
                        firstContext: a
                    };
                } else Yg = Yg.next = a;
                return b;
            }
            var fh = null;
            function gh(a) {
                null === fh ? fh = [ a ] : fh.push(a);
            }
            function hh(a, b, c, d) {
                var e = b.interleaved;
                null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
                b.interleaved = c;
                return ih(a, d);
            }
            function ih(a, b) {
                a.lanes |= b;
                var c = a.alternate;
                null !== c && (c.lanes |= b);
                c = a;
                for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), 
                c = a, a = a.return;
                return 3 === c.tag ? c.stateNode : null;
            }
            var jh = !1;
            function kh(a) {
                a.updateQueue = {
                    baseState: a.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                };
            }
            function lh(a, b) {
                a = a.updateQueue;
                b.updateQueue === a && (b.updateQueue = {
                    baseState: a.baseState,
                    firstBaseUpdate: a.firstBaseUpdate,
                    lastBaseUpdate: a.lastBaseUpdate,
                    shared: a.shared,
                    effects: a.effects
                });
            }
            function mh(a, b) {
                return {
                    eventTime: a,
                    lane: b,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                };
            }
            function nh(a, b, c) {
                var d = a.updateQueue;
                if (null === d) return null;
                d = d.shared;
                if (0 !== (K & 2)) {
                    var e = d.pending;
                    null === e ? b.next = b : (b.next = e.next, e.next = b);
                    d.pending = b;
                    return ih(a, c);
                }
                e = d.interleaved;
                null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
                d.interleaved = b;
                return ih(a, c);
            }
            function oh(a, b, c) {
                b = b.updateQueue;
                if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
                    var d = b.lanes;
                    d &= a.pendingLanes;
                    c |= d;
                    b.lanes = c;
                    Cc(a, c);
                }
            }
            function ph(a, b) {
                var c = a.updateQueue, d = a.alternate;
                if (null !== d && (d = d.updateQueue, c === d)) {
                    var e = null, f = null;
                    c = c.firstBaseUpdate;
                    if (null !== c) {
                        do {
                            var g = {
                                eventTime: c.eventTime,
                                lane: c.lane,
                                tag: c.tag,
                                payload: c.payload,
                                callback: c.callback,
                                next: null
                            };
                            null === f ? e = f = g : f = f.next = g;
                            c = c.next;
                        } while (null !== c);
                        null === f ? e = f = b : f = f.next = b;
                    } else e = f = b;
                    c = {
                        baseState: d.baseState,
                        firstBaseUpdate: e,
                        lastBaseUpdate: f,
                        shared: d.shared,
                        effects: d.effects
                    };
                    a.updateQueue = c;
                    return;
                }
                a = c.lastBaseUpdate;
                null === a ? c.firstBaseUpdate = b : a.next = b;
                c.lastBaseUpdate = b;
            }
            function qh(a, b, c, d) {
                var e = a.updateQueue;
                jh = !1;
                var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
                if (null !== h) {
                    e.shared.pending = null;
                    var k = h, l = k.next;
                    k.next = null;
                    null === g ? f = l : g.next = l;
                    g = k;
                    var m = a.alternate;
                    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, 
                    m.lastBaseUpdate = k));
                }
                if (null !== f) {
                    var q = e.baseState;
                    g = 0;
                    m = l = k = null;
                    h = f;
                    do {
                        var r = h.lane, y = h.eventTime;
                        if ((d & r) === r) {
                            null !== m && (m = m.next = {
                                eventTime: y,
                                lane: 0,
                                tag: h.tag,
                                payload: h.payload,
                                callback: h.callback,
                                next: null
                            });
                            a: {
                                var n = a, t = h;
                                r = b;
                                y = c;
                                switch (t.tag) {
                                  case 1:
                                    n = t.payload;
                                    if ("function" === typeof n) {
                                        q = n.call(y, q, r);
                                        break a;
                                    }
                                    q = n;
                                    break a;

                                  case 3:
                                    n.flags = n.flags & -65537 | 128;

                                  case 0:
                                    n = t.payload;
                                    r = "function" === typeof n ? n.call(y, q, r) : n;
                                    if (null === r || void 0 === r) break a;
                                    q = A({}, q, r);
                                    break a;

                                  case 2:
                                    jh = !0;
                                }
                            }
                            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [ h ] : r.push(h));
                        } else y = {
                            eventTime: y,
                            lane: r,
                            tag: h.tag,
                            payload: h.payload,
                            callback: h.callback,
                            next: null
                        }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
                        h = h.next;
                        if (null === h) if (h = e.shared.pending, null === h) break; else r = h, h = r.next, 
                        r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
                    } while (1);
                    null === m && (k = q);
                    e.baseState = k;
                    e.firstBaseUpdate = l;
                    e.lastBaseUpdate = m;
                    b = e.shared.interleaved;
                    if (null !== b) {
                        e = b;
                        do {
                            g |= e.lane, e = e.next;
                        } while (e !== b);
                    } else null === f && (e.shared.lanes = 0);
                    rh |= g;
                    a.lanes = g;
                    a.memoizedState = q;
                }
            }
            function sh(a, b, c) {
                a = b.effects;
                b.effects = null;
                if (null !== a) for (b = 0; b < a.length; b++) {
                    var d = a[b], e = d.callback;
                    if (null !== e) {
                        d.callback = null;
                        d = c;
                        if ("function" !== typeof e) throw Error(p(191, e));
                        e.call(d);
                    }
                }
            }
            var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
            function xh(a) {
                if (a === th) throw Error(p(174));
                return a;
            }
            function yh(a, b) {
                G(wh, b);
                G(vh, a);
                G(uh, th);
                a = b.nodeType;
                switch (a) {
                  case 9:
                  case 11:
                    b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
                    break;

                  default:
                    a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
                }
                E(uh);
                G(uh, b);
            }
            function zh() {
                E(uh);
                E(vh);
                E(wh);
            }
            function Ah(a) {
                xh(wh.current);
                var b = xh(uh.current);
                var c = lb(b, a.type);
                b !== c && (G(vh, a), G(uh, c));
            }
            function Bh(a) {
                vh.current === a && (E(uh), E(vh));
            }
            var L = Uf(0);
            function Ch(a) {
                for (var b = a; null !== b; ) {
                    if (13 === b.tag) {
                        var c = b.memoizedState;
                        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
                    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
                        if (0 !== (b.flags & 128)) return b;
                    } else if (null !== b.child) {
                        b.child.return = b;
                        b = b.child;
                        continue;
                    }
                    if (b === a) break;
                    for (;null === b.sibling; ) {
                        if (null === b.return || b.return === a) return null;
                        b = b.return;
                    }
                    b.sibling.return = b.return;
                    b = b.sibling;
                }
                return null;
            }
            var Dh = [];
            function Eh() {
                for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
                Dh.length = 0;
            }
            var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = !1, Jh = !1, Kh = 0, Lh = 0;
            function P() {
                throw Error(p(321));
            }
            function Mh(a, b) {
                if (null === b) return !1;
                for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
                return !0;
            }
            function Nh(a, b, c, d, e, f) {
                Hh = f;
                M = b;
                b.memoizedState = null;
                b.updateQueue = null;
                b.lanes = 0;
                Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
                a = c(d, e);
                if (Jh) {
                    f = 0;
                    do {
                        Jh = !1;
                        Kh = 0;
                        if (25 <= f) throw Error(p(301));
                        f += 1;
                        O = N = null;
                        b.updateQueue = null;
                        Fh.current = Qh;
                        a = c(d, e);
                    } while (Jh);
                }
                Fh.current = Rh;
                b = null !== N && null !== N.next;
                Hh = 0;
                O = N = M = null;
                Ih = !1;
                if (b) throw Error(p(300));
                return a;
            }
            function Sh() {
                var a = 0 !== Kh;
                Kh = 0;
                return a;
            }
            function Th() {
                var a = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                null === O ? M.memoizedState = O = a : O = O.next = a;
                return O;
            }
            function Uh() {
                if (null === N) {
                    var a = M.alternate;
                    a = null !== a ? a.memoizedState : null;
                } else a = N.next;
                var b = null === O ? M.memoizedState : O.next;
                if (null !== b) O = b, N = a; else {
                    if (null === a) throw Error(p(310));
                    N = a;
                    a = {
                        memoizedState: N.memoizedState,
                        baseState: N.baseState,
                        baseQueue: N.baseQueue,
                        queue: N.queue,
                        next: null
                    };
                    null === O ? M.memoizedState = O = a : O = O.next = a;
                }
                return O;
            }
            function Vh(a, b) {
                return "function" === typeof b ? b(a) : b;
            }
            function Wh(a) {
                var b = Uh(), c = b.queue;
                if (null === c) throw Error(p(311));
                c.lastRenderedReducer = a;
                var d = N, e = d.baseQueue, f = c.pending;
                if (null !== f) {
                    if (null !== e) {
                        var g = e.next;
                        e.next = f.next;
                        f.next = g;
                    }
                    d.baseQueue = e = f;
                    c.pending = null;
                }
                if (null !== e) {
                    f = e.next;
                    d = d.baseState;
                    var h = g = null, k = null, l = f;
                    do {
                        var m = l.lane;
                        if ((Hh & m) === m) null !== k && (k = k.next = {
                            lane: 0,
                            action: l.action,
                            hasEagerState: l.hasEagerState,
                            eagerState: l.eagerState,
                            next: null
                        }), d = l.hasEagerState ? l.eagerState : a(d, l.action); else {
                            var q = {
                                lane: m,
                                action: l.action,
                                hasEagerState: l.hasEagerState,
                                eagerState: l.eagerState,
                                next: null
                            };
                            null === k ? (h = k = q, g = d) : k = k.next = q;
                            M.lanes |= m;
                            rh |= m;
                        }
                        l = l.next;
                    } while (null !== l && l !== f);
                    null === k ? g = d : k.next = h;
                    He(d, b.memoizedState) || (dh = !0);
                    b.memoizedState = d;
                    b.baseState = g;
                    b.baseQueue = k;
                    c.lastRenderedState = d;
                }
                a = c.interleaved;
                if (null !== a) {
                    e = a;
                    do {
                        f = e.lane, M.lanes |= f, rh |= f, e = e.next;
                    } while (e !== a);
                } else null === e && (c.lanes = 0);
                return [ b.memoizedState, c.dispatch ];
            }
            function Xh(a) {
                var b = Uh(), c = b.queue;
                if (null === c) throw Error(p(311));
                c.lastRenderedReducer = a;
                var d = c.dispatch, e = c.pending, f = b.memoizedState;
                if (null !== e) {
                    c.pending = null;
                    var g = e = e.next;
                    do {
                        f = a(f, g.action), g = g.next;
                    } while (g !== e);
                    He(f, b.memoizedState) || (dh = !0);
                    b.memoizedState = f;
                    null === b.baseQueue && (b.baseState = f);
                    c.lastRenderedState = f;
                }
                return [ f, d ];
            }
            function Yh() {}
            function Zh(a, b) {
                var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
                f && (d.memoizedState = e, dh = !0);
                d = d.queue;
                $h(ai.bind(null, c, d, a), [ a ]);
                if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
                    c.flags |= 2048;
                    bi(9, ci.bind(null, c, d, e, b), void 0, null);
                    if (null === Q) throw Error(p(349));
                    0 !== (Hh & 30) || di(c, b, e);
                }
                return e;
            }
            function di(a, b, c) {
                a.flags |= 16384;
                a = {
                    getSnapshot: b,
                    value: c
                };
                b = M.updateQueue;
                null === b ? (b = {
                    lastEffect: null,
                    stores: null
                }, M.updateQueue = b, b.stores = [ a ]) : (c = b.stores, null === c ? b.stores = [ a ] : c.push(a));
            }
            function ci(a, b, c, d) {
                b.value = c;
                b.getSnapshot = d;
                ei(b) && fi(a);
            }
            function ai(a, b, c) {
                return c((function() {
                    ei(b) && fi(a);
                }));
            }
            function ei(a) {
                var b = a.getSnapshot;
                a = a.value;
                try {
                    var c = b();
                    return !He(a, c);
                } catch (d) {
                    return !0;
                }
            }
            function fi(a) {
                var b = ih(a, 1);
                null !== b && gi(b, a, 1, -1);
            }
            function hi(a) {
                var b = Th();
                "function" === typeof a && (a = a());
                b.memoizedState = b.baseState = a;
                a = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Vh,
                    lastRenderedState: a
                };
                b.queue = a;
                a = a.dispatch = ii.bind(null, M, a);
                return [ b.memoizedState, a ];
            }
            function bi(a, b, c, d) {
                a = {
                    tag: a,
                    create: b,
                    destroy: c,
                    deps: d,
                    next: null
                };
                b = M.updateQueue;
                null === b ? (b = {
                    lastEffect: null,
                    stores: null
                }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, 
                c.next = a, a.next = d, b.lastEffect = a));
                return a;
            }
            function ji() {
                return Uh().memoizedState;
            }
            function ki(a, b, c, d) {
                var e = Th();
                M.flags |= a;
                e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
            }
            function li(a, b, c, d) {
                var e = Uh();
                d = void 0 === d ? null : d;
                var f = void 0;
                if (null !== N) {
                    var g = N.memoizedState;
                    f = g.destroy;
                    if (null !== d && Mh(d, g.deps)) {
                        e.memoizedState = bi(b, c, f, d);
                        return;
                    }
                }
                M.flags |= a;
                e.memoizedState = bi(1 | b, c, f, d);
            }
            function mi(a, b) {
                return ki(8390656, 8, a, b);
            }
            function $h(a, b) {
                return li(2048, 8, a, b);
            }
            function ni(a, b) {
                return li(4, 2, a, b);
            }
            function oi(a, b) {
                return li(4, 4, a, b);
            }
            function pi(a, b) {
                if ("function" === typeof b) return a = a(), b(a), function() {
                    b(null);
                };
                if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
                    b.current = null;
                };
            }
            function qi(a, b, c) {
                c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
                return li(4, 4, pi.bind(null, b, a), c);
            }
            function ri() {}
            function si(a, b) {
                var c = Uh();
                b = void 0 === b ? null : b;
                var d = c.memoizedState;
                if (null !== d && null !== b && Mh(b, d[1])) return d[0];
                c.memoizedState = [ a, b ];
                return a;
            }
            function ti(a, b) {
                var c = Uh();
                b = void 0 === b ? null : b;
                var d = c.memoizedState;
                if (null !== d && null !== b && Mh(b, d[1])) return d[0];
                a = a();
                c.memoizedState = [ a, b ];
                return a;
            }
            function ui(a, b, c) {
                if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
                He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
                return b;
            }
            function vi(a, b) {
                var c = C;
                C = 0 !== c && 4 > c ? c : 4;
                a(!0);
                var d = Gh.transition;
                Gh.transition = {};
                try {
                    a(!1), b();
                } finally {
                    C = c, Gh.transition = d;
                }
            }
            function wi() {
                return Uh().memoizedState;
            }
            function xi(a, b, c) {
                var d = yi(a);
                c = {
                    lane: d,
                    action: c,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (zi(a)) Ai(b, c); else if (c = hh(a, b, c, d), null !== c) {
                    var e = R();
                    gi(c, a, d, e);
                    Bi(c, b, d);
                }
            }
            function ii(a, b, c) {
                var d = yi(a), e = {
                    lane: d,
                    action: c,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (zi(a)) Ai(b, e); else {
                    var f = a.alternate;
                    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, 
                    null !== f)) try {
                        var g = b.lastRenderedState, h = f(g, c);
                        e.hasEagerState = !0;
                        e.eagerState = h;
                        if (He(h, g)) {
                            var k = b.interleaved;
                            null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
                            b.interleaved = e;
                            return;
                        }
                    } catch (l) {}
                    c = hh(a, b, e, d);
                    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
                }
            }
            function zi(a) {
                var b = a.alternate;
                return a === M || null !== b && b === M;
            }
            function Ai(a, b) {
                Jh = Ih = !0;
                var c = a.pending;
                null === c ? b.next = b : (b.next = c.next, c.next = b);
                a.pending = b;
            }
            function Bi(a, b, c) {
                if (0 !== (c & 4194240)) {
                    var d = b.lanes;
                    d &= a.pendingLanes;
                    c |= d;
                    b.lanes = c;
                    Cc(a, c);
                }
            }
            var Rh = {
                readContext: eh,
                useCallback: P,
                useContext: P,
                useEffect: P,
                useImperativeHandle: P,
                useInsertionEffect: P,
                useLayoutEffect: P,
                useMemo: P,
                useReducer: P,
                useRef: P,
                useState: P,
                useDebugValue: P,
                useDeferredValue: P,
                useTransition: P,
                useMutableSource: P,
                useSyncExternalStore: P,
                useId: P,
                unstable_isNewReconciler: !1
            }, Oh = {
                readContext: eh,
                useCallback: function(a, b) {
                    Th().memoizedState = [ a, void 0 === b ? null : b ];
                    return a;
                },
                useContext: eh,
                useEffect: mi,
                useImperativeHandle: function(a, b, c) {
                    c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
                    return ki(4194308, 4, pi.bind(null, b, a), c);
                },
                useLayoutEffect: function(a, b) {
                    return ki(4194308, 4, a, b);
                },
                useInsertionEffect: function(a, b) {
                    return ki(4, 2, a, b);
                },
                useMemo: function(a, b) {
                    var c = Th();
                    b = void 0 === b ? null : b;
                    a = a();
                    c.memoizedState = [ a, b ];
                    return a;
                },
                useReducer: function(a, b, c) {
                    var d = Th();
                    b = void 0 !== c ? c(b) : b;
                    d.memoizedState = d.baseState = b;
                    a = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: a,
                        lastRenderedState: b
                    };
                    d.queue = a;
                    a = a.dispatch = xi.bind(null, M, a);
                    return [ d.memoizedState, a ];
                },
                useRef: function(a) {
                    var b = Th();
                    a = {
                        current: a
                    };
                    return b.memoizedState = a;
                },
                useState: hi,
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    return Th().memoizedState = a;
                },
                useTransition: function() {
                    var a = hi(!1), b = a[0];
                    a = vi.bind(null, a[1]);
                    Th().memoizedState = a;
                    return [ b, a ];
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(a, b, c) {
                    var d = M, e = Th();
                    if (I) {
                        if (void 0 === c) throw Error(p(407));
                        c = c();
                    } else {
                        c = b();
                        if (null === Q) throw Error(p(349));
                        0 !== (Hh & 30) || di(d, b, c);
                    }
                    e.memoizedState = c;
                    var f = {
                        value: c,
                        getSnapshot: b
                    };
                    e.queue = f;
                    mi(ai.bind(null, d, f, a), [ a ]);
                    d.flags |= 2048;
                    bi(9, ci.bind(null, d, f, c, b), void 0, null);
                    return c;
                },
                useId: function() {
                    var a = Th(), b = Q.identifierPrefix;
                    if (I) {
                        var c = sg;
                        var d = rg;
                        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
                        b = ":" + b + "R" + c;
                        c = Kh++;
                        0 < c && (b += "H" + c.toString(32));
                        b += ":";
                    } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
                    return a.memoizedState = b;
                },
                unstable_isNewReconciler: !1
            }, Ph = {
                readContext: eh,
                useCallback: si,
                useContext: eh,
                useEffect: $h,
                useImperativeHandle: qi,
                useInsertionEffect: ni,
                useLayoutEffect: oi,
                useMemo: ti,
                useReducer: Wh,
                useRef: ji,
                useState: function() {
                    return Wh(Vh);
                },
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    var b = Uh();
                    return ui(b, N.memoizedState, a);
                },
                useTransition: function() {
                    var a = Wh(Vh)[0], b = Uh().memoizedState;
                    return [ a, b ];
                },
                useMutableSource: Yh,
                useSyncExternalStore: Zh,
                useId: wi,
                unstable_isNewReconciler: !1
            }, Qh = {
                readContext: eh,
                useCallback: si,
                useContext: eh,
                useEffect: $h,
                useImperativeHandle: qi,
                useInsertionEffect: ni,
                useLayoutEffect: oi,
                useMemo: ti,
                useReducer: Xh,
                useRef: ji,
                useState: function() {
                    return Xh(Vh);
                },
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    var b = Uh();
                    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
                },
                useTransition: function() {
                    var a = Xh(Vh)[0], b = Uh().memoizedState;
                    return [ a, b ];
                },
                useMutableSource: Yh,
                useSyncExternalStore: Zh,
                useId: wi,
                unstable_isNewReconciler: !1
            };
            function Ci(a, b) {
                if (a && a.defaultProps) {
                    b = A({}, b);
                    a = a.defaultProps;
                    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
                    return b;
                }
                return b;
            }
            function Di(a, b, c, d) {
                b = a.memoizedState;
                c = c(d, b);
                c = null === c || void 0 === c ? b : A({}, b, c);
                a.memoizedState = c;
                0 === a.lanes && (a.updateQueue.baseState = c);
            }
            var Ei = {
                isMounted: function(a) {
                    return (a = a._reactInternals) ? Vb(a) === a : !1;
                },
                enqueueSetState: function(a, b, c) {
                    a = a._reactInternals;
                    var d = R(), e = yi(a), f = mh(d, e);
                    f.payload = b;
                    void 0 !== c && null !== c && (f.callback = c);
                    b = nh(a, f, e);
                    null !== b && (gi(b, a, e, d), oh(b, a, e));
                },
                enqueueReplaceState: function(a, b, c) {
                    a = a._reactInternals;
                    var d = R(), e = yi(a), f = mh(d, e);
                    f.tag = 1;
                    f.payload = b;
                    void 0 !== c && null !== c && (f.callback = c);
                    b = nh(a, f, e);
                    null !== b && (gi(b, a, e, d), oh(b, a, e));
                },
                enqueueForceUpdate: function(a, b) {
                    a = a._reactInternals;
                    var c = R(), d = yi(a), e = mh(c, d);
                    e.tag = 2;
                    void 0 !== b && null !== b && (e.callback = b);
                    b = nh(a, e, d);
                    null !== b && (gi(b, a, d, c), oh(b, a, d));
                }
            };
            function Fi(a, b, c, d, e, f, g) {
                a = a.stateNode;
                return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
            }
            function Gi(a, b, c) {
                var d = !1, e = Vf;
                var f = b.contextType;
                "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, 
                f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
                b = new b(c, f);
                a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
                b.updater = Ei;
                a.stateNode = b;
                b._reactInternals = a;
                d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
                return b;
            }
            function Hi(a, b, c, d) {
                a = b.state;
                "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
                "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
                b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
            }
            function Ii(a, b, c, d) {
                var e = a.stateNode;
                e.props = c;
                e.state = a.memoizedState;
                e.refs = {};
                kh(a);
                var f = b.contextType;
                "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, 
                e.context = Yf(a, f));
                e.state = a.memoizedState;
                f = b.getDerivedStateFromProps;
                "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
                "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, 
                "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), 
                b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
                "function" === typeof e.componentDidMount && (a.flags |= 4194308);
            }
            function Ji(a, b) {
                try {
                    var c = "", d = b;
                    do {
                        c += Pa(d), d = d.return;
                    } while (d);
                    var e = c;
                } catch (f) {
                    e = "\nError generating stack: " + f.message + "\n" + f.stack;
                }
                return {
                    value: a,
                    source: b,
                    stack: e,
                    digest: null
                };
            }
            function Ki(a, b, c) {
                return {
                    value: a,
                    source: null,
                    stack: null != c ? c : null,
                    digest: null != b ? b : null
                };
            }
            function Li(a, b) {
                try {
                    console.error(b.value);
                } catch (c) {
                    setTimeout((function() {
                        throw c;
                    }));
                }
            }
            var Mi = "function" === typeof WeakMap ? WeakMap : Map;
            function Ni(a, b, c) {
                c = mh(-1, c);
                c.tag = 3;
                c.payload = {
                    element: null
                };
                var d = b.value;
                c.callback = function() {
                    Oi || (Oi = !0, Pi = d);
                    Li(a, b);
                };
                return c;
            }
            function Qi(a, b, c) {
                c = mh(-1, c);
                c.tag = 3;
                var d = a.type.getDerivedStateFromError;
                if ("function" === typeof d) {
                    var e = b.value;
                    c.payload = function() {
                        return d(e);
                    };
                    c.callback = function() {
                        Li(a, b);
                    };
                }
                var f = a.stateNode;
                null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
                    Li(a, b);
                    "function" !== typeof d && (null === Ri ? Ri = new Set([ this ]) : Ri.add(this));
                    var c = b.stack;
                    this.componentDidCatch(b.value, {
                        componentStack: null !== c ? c : ""
                    });
                });
                return c;
            }
            function Si(a, b, c) {
                var d = a.pingCache;
                if (null === d) {
                    d = a.pingCache = new Mi;
                    var e = new Set;
                    d.set(b, e);
                } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
                e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
            }
            function Ui(a) {
                do {
                    var b;
                    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
                    if (b) return a;
                    a = a.return;
                } while (null !== a);
                return null;
            }
            function Vi(a, b, c, d, e) {
                if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, 
                c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), 
                b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
                a.flags |= 65536;
                a.lanes = e;
                return a;
            }
            var Wi = ua.ReactCurrentOwner, dh = !1;
            function Xi(a, b, c, d) {
                b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
            }
            function Yi(a, b, c, d, e) {
                c = c.render;
                var f = b.ref;
                ch(b, e);
                d = Nh(a, b, c, d, f, e);
                c = Sh();
                if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
                Zi(a, b, e);
                I && c && vg(b);
                b.flags |= 1;
                Xi(a, b, d, e);
                return b.child;
            }
            function $i(a, b, c, d, e) {
                if (null === a) {
                    var f = c.type;
                    if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, 
                    b.type = f, bj(a, b, f, d, e);
                    a = Rg(c.type, null, d, b, b.mode, e);
                    a.ref = b.ref;
                    a.return = b;
                    return b.child = a;
                }
                f = a.child;
                if (0 === (a.lanes & e)) {
                    var g = f.memoizedProps;
                    c = c.compare;
                    c = null !== c ? c : Ie;
                    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
                }
                b.flags |= 1;
                a = Pg(f, d);
                a.ref = b.ref;
                a.return = b;
                return b.child = a;
            }
            function bj(a, b, c, d, e) {
                if (null !== a) {
                    var f = a.memoizedProps;
                    if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0); else return b.lanes = a.lanes, 
                    Zi(a, b, e);
                }
                return cj(a, b, c, d, e);
            }
            function dj(a, b, c) {
                var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
                if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, G(ej, fj), fj |= c; else {
                    if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, 
                    b.memoizedState = {
                        baseLanes: a,
                        cachePool: null,
                        transitions: null
                    }, b.updateQueue = null, G(ej, fj), fj |= a, null;
                    b.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    };
                    d = null !== f ? f.baseLanes : c;
                    G(ej, fj);
                    fj |= d;
                } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), 
                fj |= d;
                Xi(a, b, e, c);
                return b.child;
            }
            function gj(a, b) {
                var c = b.ref;
                if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
            }
            function cj(a, b, c, d, e) {
                var f = Zf(c) ? Xf : H.current;
                f = Yf(b, f);
                ch(b, e);
                c = Nh(a, b, c, d, f, e);
                d = Sh();
                if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
                Zi(a, b, e);
                I && d && vg(b);
                b.flags |= 1;
                Xi(a, b, c, e);
                return b.child;
            }
            function hj(a, b, c, d, e) {
                if (Zf(c)) {
                    var f = !0;
                    cg(b);
                } else f = !1;
                ch(b, e);
                if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0; else if (null === a) {
                    var g = b.stateNode, h = b.memoizedProps;
                    g.props = h;
                    var k = g.context, l = c.contextType;
                    "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
                    var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
                    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
                    jh = !1;
                    var r = b.memoizedState;
                    g.state = r;
                    qh(b, d, g, e);
                    k = b.memoizedState;
                    h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), 
                    k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), 
                    "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), 
                    "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), 
                    b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, 
                    d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
                } else {
                    g = b.stateNode;
                    lh(a, b);
                    h = b.memoizedProps;
                    l = b.type === b.elementType ? h : Ci(b.type, h);
                    g.props = l;
                    q = b.pendingProps;
                    r = g.context;
                    k = c.contextType;
                    "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
                    var y = c.getDerivedStateFromProps;
                    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
                    jh = !1;
                    r = b.memoizedState;
                    g.state = r;
                    qh(b, d, g, e);
                    var n = b.memoizedState;
                    h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), 
                    n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), 
                    "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), 
                    "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                    "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                    b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, 
                    d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                    "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                    d = !1);
                }
                return jj(a, b, c, d, f, e);
            }
            function jj(a, b, c, d, e, f) {
                gj(a, b);
                var g = 0 !== (b.flags & 128);
                if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
                d = b.stateNode;
                Wi.current = b;
                var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
                b.flags |= 1;
                null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
                b.memoizedState = d.state;
                e && dg(b, c, !0);
                return b.child;
            }
            function kj(a) {
                var b = a.stateNode;
                b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
                yh(a, b.containerInfo);
            }
            function lj(a, b, c, d, e) {
                Ig();
                Jg(e);
                b.flags |= 256;
                Xi(a, b, c, d);
                return b.child;
            }
            var mj = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function nj(a) {
                return {
                    baseLanes: a,
                    cachePool: null,
                    transitions: null
                };
            }
            function oj(a, b, c) {
                var h, d = b.pendingProps, e = L.current, f = !1, g = 0 !== (b.flags & 128);
                (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
                if (h) f = !0, b.flags &= -129; else if (null === a || null !== a.memoizedState) e |= 1;
                G(L, e & 1);
                if (null === a) {
                    Eg(b);
                    a = b.memoizedState;
                    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, 
                    null;
                    g = d.children;
                    a = d.fallback;
                    return f ? (d = b.mode, f = b.child, g = {
                        mode: "hidden",
                        children: g
                    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), 
                    a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), 
                    b.memoizedState = mj, a) : qj(b, g);
                }
                e = a.memoizedState;
                if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
                if (f) {
                    f = d.fallback;
                    g = b.mode;
                    e = a.child;
                    h = e.sibling;
                    var k = {
                        mode: "hidden",
                        children: d.children
                    };
                    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, 
                    b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
                    null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
                    f.return = b;
                    d.return = b;
                    d.sibling = f;
                    b.child = d;
                    d = f;
                    f = b.child;
                    g = a.child.memoizedState;
                    g = null === g ? nj(c) : {
                        baseLanes: g.baseLanes | c,
                        cachePool: null,
                        transitions: g.transitions
                    };
                    f.memoizedState = g;
                    f.childLanes = a.childLanes & ~c;
                    b.memoizedState = mj;
                    return d;
                }
                f = a.child;
                a = f.sibling;
                d = Pg(f, {
                    mode: "visible",
                    children: d.children
                });
                0 === (b.mode & 1) && (d.lanes = c);
                d.return = b;
                d.sibling = null;
                null !== a && (c = b.deletions, null === c ? (b.deletions = [ a ], b.flags |= 16) : c.push(a));
                b.child = d;
                b.memoizedState = null;
                return d;
            }
            function qj(a, b) {
                b = pj({
                    mode: "visible",
                    children: b
                }, a.mode, 0, null);
                b.return = a;
                return a.child = b;
            }
            function sj(a, b, c, d) {
                null !== d && Jg(d);
                Ug(b, a.child, null, c);
                a = qj(b, b.pendingProps.children);
                a.flags |= 2;
                b.memoizedState = null;
                return a;
            }
            function rj(a, b, c, d, e, f, g) {
                if (c) {
                    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
                    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
                    f = d.fallback;
                    e = b.mode;
                    d = pj({
                        mode: "visible",
                        children: d.children
                    }, e, 0, null);
                    f = Tg(f, e, g, null);
                    f.flags |= 2;
                    d.return = b;
                    f.return = b;
                    d.sibling = f;
                    b.child = d;
                    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
                    b.child.memoizedState = nj(g);
                    b.memoizedState = mj;
                    return f;
                }
                if (0 === (b.mode & 1)) return sj(a, b, g, null);
                if ("$!" === e.data) {
                    d = e.nextSibling && e.nextSibling.dataset;
                    if (d) var h = d.dgst;
                    d = h;
                    f = Error(p(419));
                    d = Ki(f, d, void 0);
                    return sj(a, b, g, d);
                }
                h = 0 !== (g & a.childLanes);
                if (dh || h) {
                    d = Q;
                    if (null !== d) {
                        switch (g & -g) {
                          case 4:
                            e = 2;
                            break;

                          case 16:
                            e = 8;
                            break;

                          case 64:
                          case 128:
                          case 256:
                          case 512:
                          case 1024:
                          case 2048:
                          case 4096:
                          case 8192:
                          case 16384:
                          case 32768:
                          case 65536:
                          case 131072:
                          case 262144:
                          case 524288:
                          case 1048576:
                          case 2097152:
                          case 4194304:
                          case 8388608:
                          case 16777216:
                          case 33554432:
                          case 67108864:
                            e = 32;
                            break;

                          case 536870912:
                            e = 268435456;
                            break;

                          default:
                            e = 0;
                        }
                        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
                        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
                    }
                    tj();
                    d = Ki(Error(p(421)));
                    return sj(a, b, g, d);
                }
                if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), 
                e._reactRetry = b, null;
                a = f.treeContext;
                yg = Lf(e.nextSibling);
                xg = b;
                I = !0;
                zg = null;
                null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, 
                qg = b);
                b = qj(b, d.children);
                b.flags |= 4096;
                return b;
            }
            function vj(a, b, c) {
                a.lanes |= b;
                var d = a.alternate;
                null !== d && (d.lanes |= b);
                bh(a.return, b, c);
            }
            function wj(a, b, c, d, e) {
                var f = a.memoizedState;
                null === f ? a.memoizedState = {
                    isBackwards: b,
                    rendering: null,
                    renderingStartTime: 0,
                    last: d,
                    tail: c,
                    tailMode: e
                } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, 
                f.tail = c, f.tailMode = e);
            }
            function xj(a, b, c) {
                var d = b.pendingProps, e = d.revealOrder, f = d.tail;
                Xi(a, b, d.children, c);
                d = L.current;
                if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128; else {
                    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
                        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b); else if (19 === a.tag) vj(a, c, b); else if (null !== a.child) {
                            a.child.return = a;
                            a = a.child;
                            continue;
                        }
                        if (a === b) break a;
                        for (;null === a.sibling; ) {
                            if (null === a.return || a.return === b) break a;
                            a = a.return;
                        }
                        a.sibling.return = a.return;
                        a = a.sibling;
                    }
                    d &= 1;
                }
                G(L, d);
                if (0 === (b.mode & 1)) b.memoizedState = null; else switch (e) {
                  case "forwards":
                    c = b.child;
                    for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), 
                    c = c.sibling;
                    c = e;
                    null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
                    wj(b, !1, e, c, f);
                    break;

                  case "backwards":
                    c = null;
                    e = b.child;
                    for (b.child = null; null !== e; ) {
                        a = e.alternate;
                        if (null !== a && null === Ch(a)) {
                            b.child = e;
                            break;
                        }
                        a = e.sibling;
                        e.sibling = c;
                        c = e;
                        e = a;
                    }
                    wj(b, !0, c, null, f);
                    break;

                  case "together":
                    wj(b, !1, null, null, void 0);
                    break;

                  default:
                    b.memoizedState = null;
                }
                return b.child;
            }
            function ij(a, b) {
                0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
            }
            function Zi(a, b, c) {
                null !== a && (b.dependencies = a.dependencies);
                rh |= b.lanes;
                if (0 === (c & b.childLanes)) return null;
                if (null !== a && b.child !== a.child) throw Error(p(153));
                if (null !== b.child) {
                    a = b.child;
                    c = Pg(a, a.pendingProps);
                    b.child = c;
                    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), 
                    c.return = b;
                    c.sibling = null;
                }
                return b.child;
            }
            function yj(a, b, c) {
                switch (b.tag) {
                  case 3:
                    kj(b);
                    Ig();
                    break;

                  case 5:
                    Ah(b);
                    break;

                  case 1:
                    Zf(b.type) && cg(b);
                    break;

                  case 4:
                    yh(b, b.stateNode.containerInfo);
                    break;

                  case 10:
                    var d = b.type._context, e = b.memoizedProps.value;
                    G(Wg, d._currentValue);
                    d._currentValue = e;
                    break;

                  case 13:
                    d = b.memoizedState;
                    if (null !== d) {
                        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
                        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
                        G(L, L.current & 1);
                        a = Zi(a, b, c);
                        return null !== a ? a.sibling : null;
                    }
                    G(L, L.current & 1);
                    break;

                  case 19:
                    d = 0 !== (c & b.childLanes);
                    if (0 !== (a.flags & 128)) {
                        if (d) return xj(a, b, c);
                        b.flags |= 128;
                    }
                    e = b.memoizedState;
                    null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
                    G(L, L.current);
                    if (d) break; else return null;

                  case 22:
                  case 23:
                    return b.lanes = 0, dj(a, b, c);
                }
                return Zi(a, b, c);
            }
            var zj, Aj, Bj, Cj;
            zj = function(a, b) {
                for (var c = b.child; null !== c; ) {
                    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode); else if (4 !== c.tag && null !== c.child) {
                        c.child.return = c;
                        c = c.child;
                        continue;
                    }
                    if (c === b) break;
                    for (;null === c.sibling; ) {
                        if (null === c.return || c.return === b) return;
                        c = c.return;
                    }
                    c.sibling.return = c.return;
                    c = c.sibling;
                }
            };
            Aj = function() {};
            Bj = function(a, b, c, d) {
                var e = a.memoizedProps;
                if (e !== d) {
                    a = b.stateNode;
                    xh(uh.current);
                    var f = null;
                    switch (c) {
                      case "input":
                        e = Ya(a, e);
                        d = Ya(a, d);
                        f = [];
                        break;

                      case "select":
                        e = A({}, e, {
                            value: void 0
                        });
                        d = A({}, d, {
                            value: void 0
                        });
                        f = [];
                        break;

                      case "textarea":
                        e = gb(a, e);
                        d = gb(a, d);
                        f = [];
                        break;

                      default:
                        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
                    }
                    ub(c, d);
                    var g;
                    c = null;
                    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
                        var h = e[l];
                        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
                    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
                    for (l in d) {
                        var k = d[l];
                        h = null != e ? e[l] : void 0;
                        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
                            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), 
                            c[g] = "");
                            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                        } else c || (f || (f = []), f.push(l, c)), c = k; else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, 
                        h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), 
                        f || h === k || (f = [])) : (f = f || []).push(l, k));
                    }
                    c && (f = f || []).push("style", c);
                    var l = f;
                    if (b.updateQueue = l) b.flags |= 4;
                }
            };
            Cj = function(a, b, c, d) {
                c !== d && (b.flags |= 4);
            };
            function Dj(a, b) {
                if (!I) switch (a.tailMode) {
                  case "hidden":
                    b = a.tail;
                    for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
                    null === c ? a.tail = null : c.sibling = null;
                    break;

                  case "collapsed":
                    c = a.tail;
                    for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
                    null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
                }
            }
            function S(a) {
                var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
                if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, 
                d |= e.flags & 14680064, e.return = a, e = e.sibling; else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, 
                d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
                a.subtreeFlags |= d;
                a.childLanes = c;
                return b;
            }
            function Ej(a, b, c) {
                var d = b.pendingProps;
                wg(b);
                switch (b.tag) {
                  case 2:
                  case 16:
                  case 15:
                  case 0:
                  case 11:
                  case 7:
                  case 8:
                  case 12:
                  case 9:
                  case 14:
                    return S(b), null;

                  case 1:
                    return Zf(b.type) && $f(), S(b), null;

                  case 3:
                    d = b.stateNode;
                    zh();
                    E(Wf);
                    E(H);
                    Eh();
                    d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
                    if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, 
                    null !== zg && (Fj(zg), zg = null));
                    Aj(a, b);
                    S(b);
                    return null;

                  case 5:
                    Bh(b);
                    var e = xh(wh.current);
                    c = b.type;
                    if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, 
                    b.flags |= 2097152); else {
                        if (!d) {
                            if (null === b.stateNode) throw Error(p(166));
                            S(b);
                            return null;
                        }
                        a = xh(uh.current);
                        if (Gg(b)) {
                            d = b.stateNode;
                            c = b.type;
                            var f = b.memoizedProps;
                            d[Of] = b;
                            d[Pf] = f;
                            a = 0 !== (b.mode & 1);
                            switch (c) {
                              case "dialog":
                                D("cancel", d);
                                D("close", d);
                                break;

                              case "iframe":
                              case "object":
                              case "embed":
                                D("load", d);
                                break;

                              case "video":
                              case "audio":
                                for (e = 0; e < lf.length; e++) D(lf[e], d);
                                break;

                              case "source":
                                D("error", d);
                                break;

                              case "img":
                              case "image":
                              case "link":
                                D("error", d);
                                D("load", d);
                                break;

                              case "details":
                                D("toggle", d);
                                break;

                              case "input":
                                Za(d, f);
                                D("invalid", d);
                                break;

                              case "select":
                                d._wrapperState = {
                                    wasMultiple: !!f.multiple
                                };
                                D("invalid", d);
                                break;

                              case "textarea":
                                hb(d, f), D("invalid", d);
                            }
                            ub(c, f);
                            e = null;
                            for (var g in f) if (f.hasOwnProperty(g)) {
                                var h = f[g];
                                "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                                e = [ "children", h ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                                e = [ "children", "" + h ]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                            }
                            switch (c) {
                              case "input":
                                Va(d);
                                db(d, f, !0);
                                break;

                              case "textarea":
                                Va(d);
                                jb(d);
                                break;

                              case "select":
                              case "option":
                                break;

                              default:
                                "function" === typeof f.onClick && (d.onclick = Bf);
                            }
                            d = e;
                            b.updateQueue = d;
                            null !== d && (b.flags |= 4);
                        } else {
                            g = 9 === e.nodeType ? e : e.ownerDocument;
                            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), 
                            a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                                is: d.is
                            }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                            a[Of] = b;
                            a[Pf] = d;
                            zj(a, b, !1, !1);
                            b.stateNode = a;
                            a: {
                                g = vb(c, d);
                                switch (c) {
                                  case "dialog":
                                    D("cancel", a);
                                    D("close", a);
                                    e = d;
                                    break;

                                  case "iframe":
                                  case "object":
                                  case "embed":
                                    D("load", a);
                                    e = d;
                                    break;

                                  case "video":
                                  case "audio":
                                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                                    e = d;
                                    break;

                                  case "source":
                                    D("error", a);
                                    e = d;
                                    break;

                                  case "img":
                                  case "image":
                                  case "link":
                                    D("error", a);
                                    D("load", a);
                                    e = d;
                                    break;

                                  case "details":
                                    D("toggle", a);
                                    e = d;
                                    break;

                                  case "input":
                                    Za(a, d);
                                    e = Ya(a, d);
                                    D("invalid", a);
                                    break;

                                  case "option":
                                    e = d;
                                    break;

                                  case "select":
                                    a._wrapperState = {
                                        wasMultiple: !!d.multiple
                                    };
                                    e = A({}, d, {
                                        value: void 0
                                    });
                                    D("invalid", a);
                                    break;

                                  case "textarea":
                                    hb(a, d);
                                    e = gb(a, d);
                                    D("invalid", a);
                                    break;

                                  default:
                                    e = d;
                                }
                                ub(c, e);
                                h = e;
                                for (f in h) if (h.hasOwnProperty(f)) {
                                    var k = h[f];
                                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, 
                                    null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                                }
                                switch (c) {
                                  case "input":
                                    Va(a);
                                    db(a, d, !1);
                                    break;

                                  case "textarea":
                                    Va(a);
                                    jb(a);
                                    break;

                                  case "option":
                                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                                    break;

                                  case "select":
                                    a.multiple = !!d.multiple;
                                    f = d.value;
                                    null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                                    break;

                                  default:
                                    "function" === typeof e.onClick && (a.onclick = Bf);
                                }
                                switch (c) {
                                  case "button":
                                  case "input":
                                  case "select":
                                  case "textarea":
                                    d = !!d.autoFocus;
                                    break a;

                                  case "img":
                                    d = !0;
                                    break a;

                                  default:
                                    d = !1;
                                }
                            }
                            d && (b.flags |= 4);
                        }
                        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
                    }
                    S(b);
                    return null;

                  case 6:
                    if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d); else {
                        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
                        c = xh(wh.current);
                        xh(uh.current);
                        if (Gg(b)) {
                            d = b.stateNode;
                            c = b.memoizedProps;
                            d[Of] = b;
                            if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
                              case 3:
                                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;

                              case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                            }
                            f && (b.flags |= 4);
                        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, 
                        b.stateNode = d;
                    }
                    S(b);
                    return null;

                  case 13:
                    E(L);
                    d = b.memoizedState;
                    if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), 
                        b.flags |= 98560, f = !1; else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                            if (null === a) {
                                if (!f) throw Error(p(318));
                                f = b.memoizedState;
                                f = null !== f ? f.dehydrated : null;
                                if (!f) throw Error(p(317));
                                f[Of] = b;
                            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                            S(b);
                            f = !1;
                        } else null !== zg && (Fj(zg), zg = null), f = !0;
                        if (!f) return b.flags & 65536 ? b : null;
                    }
                    if (0 !== (b.flags & 128)) return b.lanes = c, b;
                    d = null !== d;
                    d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
                    null !== b.updateQueue && (b.flags |= 4);
                    S(b);
                    return null;

                  case 4:
                    return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;

                  case 10:
                    return ah(b.type._context), S(b), null;

                  case 17:
                    return Zf(b.type) && $f(), S(b), null;

                  case 19:
                    E(L);
                    f = b.memoizedState;
                    if (null === f) return S(b), null;
                    d = 0 !== (b.flags & 128);
                    g = f.rendering;
                    if (null === g) if (d) Dj(f, !1); else {
                        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                            g = Ch(a);
                            if (null !== g) {
                                b.flags |= 128;
                                Dj(f, !1);
                                d = g.updateQueue;
                                null !== d && (b.updateQueue = d, b.flags |= 4);
                                b.subtreeFlags = 0;
                                d = c;
                                for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, 
                                null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, 
                                f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, 
                                f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, 
                                f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, 
                                f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                    lanes: a.lanes,
                                    firstContext: a.firstContext
                                }), c = c.sibling;
                                G(L, L.current & 1 | 2);
                                return b.child;
                            }
                            a = a.sibling;
                        }
                        null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
                    } else {
                        if (!d) if (a = Ch(g), null !== a) {
                            if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, 
                            b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), 
                            null;
                        } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, 
                        d = !0, Dj(f, !1), b.lanes = 4194304);
                        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, 
                        f.last = g);
                    }
                    if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), 
                    b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
                    S(b);
                    return null;

                  case 22:
                  case 23:
                    return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), 
                    d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), 
                    null;

                  case 24:
                    return null;

                  case 25:
                    return null;
                }
                throw Error(p(156, b.tag));
            }
            function Ij(a, b) {
                wg(b);
                switch (b.tag) {
                  case 1:
                    return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, 
                    b) : null;

                  case 3:
                    return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, 
                    b) : null;

                  case 5:
                    return Bh(b), null;

                  case 13:
                    E(L);
                    a = b.memoizedState;
                    if (null !== a && null !== a.dehydrated) {
                        if (null === b.alternate) throw Error(p(340));
                        Ig();
                    }
                    a = b.flags;
                    return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

                  case 19:
                    return E(L), null;

                  case 4:
                    return zh(), null;

                  case 10:
                    return ah(b.type._context), null;

                  case 22:
                  case 23:
                    return Hj(), null;

                  case 24:
                    return null;

                  default:
                    return null;
                }
            }
            var Jj = !1, U = !1, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
            function Lj(a, b) {
                var c = a.ref;
                if (null !== c) if ("function" === typeof c) try {
                    c(null);
                } catch (d) {
                    W(a, b, d);
                } else c.current = null;
            }
            function Mj(a, b, c) {
                try {
                    c();
                } catch (d) {
                    W(a, b, d);
                }
            }
            var Nj = !1;
            function Oj(a, b) {
                Cf = dd;
                a = Me();
                if (Ne(a)) {
                    if ("selectionStart" in a) var c = {
                        start: a.selectionStart,
                        end: a.selectionEnd
                    }; else a: {
                        c = (c = a.ownerDocument) && c.defaultView || window;
                        var d = c.getSelection && c.getSelection();
                        if (d && 0 !== d.rangeCount) {
                            c = d.anchorNode;
                            var e = d.anchorOffset, f = d.focusNode;
                            d = d.focusOffset;
                            try {
                                c.nodeType, f.nodeType;
                            } catch (F) {
                                c = null;
                                break a;
                            }
                            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                            b: for (;;) {
                                for (var y; ;) {
                                    q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                                    q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                                    3 === q.nodeType && (g += q.nodeValue.length);
                                    if (null === (y = q.firstChild)) break;
                                    r = q;
                                    q = y;
                                }
                                for (;;) {
                                    if (q === a) break b;
                                    r === c && ++l === e && (h = g);
                                    r === f && ++m === d && (k = g);
                                    if (null !== (y = q.nextSibling)) break;
                                    q = r;
                                    r = q.parentNode;
                                }
                                q = y;
                            }
                            c = -1 === h || -1 === k ? null : {
                                start: h,
                                end: k
                            };
                        } else c = null;
                    }
                    c = c || {
                        start: 0,
                        end: 0
                    };
                } else c = null;
                Df = {
                    focusedElem: a,
                    selectionRange: c
                };
                dd = !1;
                for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, 
                V = a; else for (;null !== V; ) {
                    b = V;
                    try {
                        var n = b.alternate;
                        if (0 !== (b.flags & 1024)) switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            break;

                          case 1:
                            if (null !== n) {
                                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                                x.__reactInternalSnapshotBeforeUpdate = w;
                            }
                            break;

                          case 3:
                            var u = b.stateNode.containerInfo;
                            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                            break;

                          case 5:
                          case 6:
                          case 4:
                          case 17:
                            break;

                          default:
                            throw Error(p(163));
                        }
                    } catch (F) {
                        W(b, b.return, F);
                    }
                    a = b.sibling;
                    if (null !== a) {
                        a.return = b.return;
                        V = a;
                        break;
                    }
                    V = b.return;
                }
                n = Nj;
                Nj = !1;
                return n;
            }
            function Pj(a, b, c) {
                var d = b.updateQueue;
                d = null !== d ? d.lastEffect : null;
                if (null !== d) {
                    var e = d = d.next;
                    do {
                        if ((e.tag & a) === a) {
                            var f = e.destroy;
                            e.destroy = void 0;
                            void 0 !== f && Mj(b, c, f);
                        }
                        e = e.next;
                    } while (e !== d);
                }
            }
            function Qj(a, b) {
                b = b.updateQueue;
                b = null !== b ? b.lastEffect : null;
                if (null !== b) {
                    var c = b = b.next;
                    do {
                        if ((c.tag & a) === a) {
                            var d = c.create;
                            c.destroy = d();
                        }
                        c = c.next;
                    } while (c !== b);
                }
            }
            function Rj(a) {
                var b = a.ref;
                if (null !== b) {
                    var c = a.stateNode;
                    switch (a.tag) {
                      case 5:
                        a = c;
                        break;

                      default:
                        a = c;
                    }
                    "function" === typeof b ? b(a) : b.current = a;
                }
            }
            function Sj(a) {
                var b = a.alternate;
                null !== b && (a.alternate = null, Sj(b));
                a.child = null;
                a.deletions = null;
                a.sibling = null;
                5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], 
                delete b[Qf], delete b[Rf]));
                a.stateNode = null;
                a.return = null;
                a.dependencies = null;
                a.memoizedProps = null;
                a.memoizedState = null;
                a.pendingProps = null;
                a.stateNode = null;
                a.updateQueue = null;
            }
            function Tj(a) {
                return 5 === a.tag || 3 === a.tag || 4 === a.tag;
            }
            function Uj(a) {
                a: for (;;) {
                    for (;null === a.sibling; ) {
                        if (null === a.return || Tj(a.return)) return null;
                        a = a.return;
                    }
                    a.sibling.return = a.return;
                    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
                        if (a.flags & 2) continue a;
                        if (null === a.child || 4 === a.tag) continue a; else a.child.return = a, a = a.child;
                    }
                    if (!(a.flags & 2)) return a.stateNode;
                }
            }
            function Vj(a, b, c) {
                var d = a.tag;
                if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, 
                b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf)); else if (4 !== d && (a = a.child, 
                null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
            }
            function Wj(a, b, c) {
                var d = a.tag;
                if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a); else if (4 !== d && (a = a.child, 
                null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
            }
            var X = null, Xj = !1;
            function Yj(a, b, c) {
                for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
            }
            function Zj(a, b, c) {
                if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
                    lc.onCommitFiberUnmount(kc, c);
                } catch (h) {}
                switch (c.tag) {
                  case 5:
                    U || Lj(c, b);

                  case 6:
                    var d = X, e = Xj;
                    X = null;
                    Yj(a, b, c);
                    X = d;
                    Xj = e;
                    null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
                    break;

                  case 18:
                    null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), 
                    bd(a)) : Kf(X, c.stateNode));
                    break;

                  case 4:
                    d = X;
                    e = Xj;
                    X = c.stateNode.containerInfo;
                    Xj = !0;
                    Yj(a, b, c);
                    X = d;
                    Xj = e;
                    break;

                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                        e = d = d.next;
                        do {
                            var f = e, g = f.destroy;
                            f = f.tag;
                            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                            e = e.next;
                        } while (e !== d);
                    }
                    Yj(a, b, c);
                    break;

                  case 1:
                    if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
                    } catch (h) {
                        W(c, b, h);
                    }
                    Yj(a, b, c);
                    break;

                  case 21:
                    Yj(a, b, c);
                    break;

                  case 22:
                    c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
                    break;

                  default:
                    Yj(a, b, c);
                }
            }
            function ak(a) {
                var b = a.updateQueue;
                if (null !== b) {
                    a.updateQueue = null;
                    var c = a.stateNode;
                    null === c && (c = a.stateNode = new Kj);
                    b.forEach((function(b) {
                        var d = bk.bind(null, a, b);
                        c.has(b) || (c.add(b), b.then(d, d));
                    }));
                }
            }
            function ck(a, b) {
                var c = b.deletions;
                if (null !== c) for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    try {
                        var f = a, g = b, h = g;
                        a: for (;null !== h; ) {
                            switch (h.tag) {
                              case 5:
                                X = h.stateNode;
                                Xj = !1;
                                break a;

                              case 3:
                                X = h.stateNode.containerInfo;
                                Xj = !0;
                                break a;

                              case 4:
                                X = h.stateNode.containerInfo;
                                Xj = !0;
                                break a;
                            }
                            h = h.return;
                        }
                        if (null === X) throw Error(p(160));
                        Zj(f, g, e);
                        X = null;
                        Xj = !1;
                        var k = e.alternate;
                        null !== k && (k.return = null);
                        e.return = null;
                    } catch (l) {
                        W(e, b, l);
                    }
                }
                if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
            }
            function dk(a, b) {
                var c = a.alternate, d = a.flags;
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ck(b, a);
                    ek(a);
                    if (d & 4) {
                        try {
                            Pj(3, a, a.return), Qj(3, a);
                        } catch (t) {
                            W(a, a.return, t);
                        }
                        try {
                            Pj(5, a, a.return);
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 1:
                    ck(b, a);
                    ek(a);
                    d & 512 && null !== c && Lj(c, c.return);
                    break;

                  case 5:
                    ck(b, a);
                    ek(a);
                    d & 512 && null !== c && Lj(c, c.return);
                    if (a.flags & 32) {
                        var e = a.stateNode;
                        try {
                            ob(e, "");
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    if (d & 4 && (e = a.stateNode, null != e)) {
                        var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                        a.updateQueue = null;
                        if (null !== k) try {
                            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                            vb(h, g);
                            var l = vb(h, f);
                            for (g = 0; g < k.length; g += 2) {
                                var m = k[g], q = k[g + 1];
                                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                            }
                            switch (h) {
                              case "input":
                                bb(e, f);
                                break;

                              case "textarea":
                                ib(e, f);
                                break;

                              case "select":
                                var r = e._wrapperState.wasMultiple;
                                e._wrapperState.wasMultiple = !!f.multiple;
                                var y = f.value;
                                null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                            }
                            e[Pf] = f;
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 6:
                    ck(b, a);
                    ek(a);
                    if (d & 4) {
                        if (null === a.stateNode) throw Error(p(162));
                        e = a.stateNode;
                        f = a.memoizedProps;
                        try {
                            e.nodeValue = f;
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 3:
                    ck(b, a);
                    ek(a);
                    if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                        bd(b.containerInfo);
                    } catch (t) {
                        W(a, a.return, t);
                    }
                    break;

                  case 4:
                    ck(b, a);
                    ek(a);
                    break;

                  case 13:
                    ck(b, a);
                    ek(a);
                    e = a.child;
                    e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
                    d & 4 && ak(a);
                    break;

                  case 22:
                    m = null !== c && null !== c.memoizedState;
                    a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
                    ek(a);
                    if (d & 8192) {
                        l = null !== a.memoizedState;
                        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                            for (q = V = m; null !== V; ) {
                                r = V;
                                y = r.child;
                                switch (r.tag) {
                                  case 0:
                                  case 11:
                                  case 14:
                                  case 15:
                                    Pj(4, r, r.return);
                                    break;

                                  case 1:
                                    Lj(r, r.return);
                                    var n = r.stateNode;
                                    if ("function" === typeof n.componentWillUnmount) {
                                        d = r;
                                        c = r.return;
                                        try {
                                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                        } catch (t) {
                                            W(d, c, t);
                                        }
                                    }
                                    break;

                                  case 5:
                                    Lj(r, r.return);
                                    break;

                                  case 22:
                                    if (null !== r.memoizedState) {
                                        gk(q);
                                        continue;
                                    }
                                }
                                null !== y ? (y.return = r, V = y) : gk(q);
                            }
                            m = m.sibling;
                        }
                        a: for (m = null, q = a; ;) {
                            if (5 === q.tag) {
                                if (null === m) {
                                    m = q;
                                    try {
                                        e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, 
                                        k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, 
                                        h.style.display = rb("display", g));
                                    } catch (t) {
                                        W(a, a.return, t);
                                    }
                                }
                            } else if (6 === q.tag) {
                                if (null === m) try {
                                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                                } catch (t) {
                                    W(a, a.return, t);
                                }
                            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                                q.child.return = q;
                                q = q.child;
                                continue;
                            }
                            if (q === a) break a;
                            for (;null === q.sibling; ) {
                                if (null === q.return || q.return === a) break a;
                                m === q && (m = null);
                                q = q.return;
                            }
                            m === q && (m = null);
                            q.sibling.return = q.return;
                            q = q.sibling;
                        }
                    }
                    break;

                  case 19:
                    ck(b, a);
                    ek(a);
                    d & 4 && ak(a);
                    break;

                  case 21:
                    break;

                  default:
                    ck(b, a), ek(a);
                }
            }
            function ek(a) {
                var b = a.flags;
                if (b & 2) {
                    try {
                        a: {
                            for (var c = a.return; null !== c; ) {
                                if (Tj(c)) {
                                    var d = c;
                                    break a;
                                }
                                c = c.return;
                            }
                            throw Error(p(160));
                        }
                        switch (d.tag) {
                          case 5:
                            var e = d.stateNode;
                            d.flags & 32 && (ob(e, ""), d.flags &= -33);
                            var f = Uj(a);
                            Wj(a, f, e);
                            break;

                          case 3:
                          case 4:
                            var g = d.stateNode.containerInfo, h = Uj(a);
                            Vj(a, h, g);
                            break;

                          default:
                            throw Error(p(161));
                        }
                    } catch (k) {
                        W(a, a.return, k);
                    }
                    a.flags &= -3;
                }
                b & 4096 && (a.flags &= -4097);
            }
            function hk(a, b, c) {
                V = a;
                ik(a, b, c);
            }
            function ik(a, b, c) {
                for (var d = 0 !== (a.mode & 1); null !== V; ) {
                    var e = V, f = e.child;
                    if (22 === e.tag && d) {
                        var g = null !== e.memoizedState || Jj;
                        if (!g) {
                            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
                            h = Jj;
                            var l = U;
                            Jj = g;
                            if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, 
                            V = k) : jk(e);
                            for (;null !== f; ) V = f, ik(f, b, c), f = f.sibling;
                            V = e;
                            Jj = h;
                            U = l;
                        }
                        kk(a, b, c);
                    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
                }
            }
            function kk(a) {
                for (;null !== V; ) {
                    var b = V;
                    if (0 !== (b.flags & 8772)) {
                        var c = b.alternate;
                        try {
                            if (0 !== (b.flags & 8772)) switch (b.tag) {
                              case 0:
                              case 11:
                              case 15:
                                U || Qj(5, b);
                                break;

                              case 1:
                                var d = b.stateNode;
                                if (b.flags & 4 && !U) if (null === c) d.componentDidMount(); else {
                                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                                }
                                var f = b.updateQueue;
                                null !== f && sh(b, f, d);
                                break;

                              case 3:
                                var g = b.updateQueue;
                                if (null !== g) {
                                    c = null;
                                    if (null !== b.child) switch (b.child.tag) {
                                      case 5:
                                        c = b.child.stateNode;
                                        break;

                                      case 1:
                                        c = b.child.stateNode;
                                    }
                                    sh(b, g, c);
                                }
                                break;

                              case 5:
                                var h = b.stateNode;
                                if (null === c && b.flags & 4) {
                                    c = h;
                                    var k = b.memoizedProps;
                                    switch (b.type) {
                                      case "button":
                                      case "input":
                                      case "select":
                                      case "textarea":
                                        k.autoFocus && c.focus();
                                        break;

                                      case "img":
                                        k.src && (c.src = k.src);
                                    }
                                }
                                break;

                              case 6:
                                break;

                              case 4:
                                break;

                              case 12:
                                break;

                              case 13:
                                if (null === b.memoizedState) {
                                    var l = b.alternate;
                                    if (null !== l) {
                                        var m = l.memoizedState;
                                        if (null !== m) {
                                            var q = m.dehydrated;
                                            null !== q && bd(q);
                                        }
                                    }
                                }
                                break;

                              case 19:
                              case 17:
                              case 21:
                              case 22:
                              case 23:
                              case 25:
                                break;

                              default:
                                throw Error(p(163));
                            }
                            U || b.flags & 512 && Rj(b);
                        } catch (r) {
                            W(b, b.return, r);
                        }
                    }
                    if (b === a) {
                        V = null;
                        break;
                    }
                    c = b.sibling;
                    if (null !== c) {
                        c.return = b.return;
                        V = c;
                        break;
                    }
                    V = b.return;
                }
            }
            function gk(a) {
                for (;null !== V; ) {
                    var b = V;
                    if (b === a) {
                        V = null;
                        break;
                    }
                    var c = b.sibling;
                    if (null !== c) {
                        c.return = b.return;
                        V = c;
                        break;
                    }
                    V = b.return;
                }
            }
            function jk(a) {
                for (;null !== V; ) {
                    var b = V;
                    try {
                        switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            var c = b.return;
                            try {
                                Qj(4, b);
                            } catch (k) {
                                W(b, c, k);
                            }
                            break;

                          case 1:
                            var d = b.stateNode;
                            if ("function" === typeof d.componentDidMount) {
                                var e = b.return;
                                try {
                                    d.componentDidMount();
                                } catch (k) {
                                    W(b, e, k);
                                }
                            }
                            var f = b.return;
                            try {
                                Rj(b);
                            } catch (k) {
                                W(b, f, k);
                            }
                            break;

                          case 5:
                            var g = b.return;
                            try {
                                Rj(b);
                            } catch (k) {
                                W(b, g, k);
                            }
                        }
                    } catch (k) {
                        W(b, b.return, k);
                    }
                    if (b === a) {
                        V = null;
                        break;
                    }
                    var h = b.sibling;
                    if (null !== h) {
                        h.return = b.return;
                        V = h;
                        break;
                    }
                    V = b.return;
                }
            }
            var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = 1 / 0, uk = null, Oi = !1, Pi = null, Ri = null, vk = !1, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
            function R() {
                return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
            }
            function yi(a) {
                if (0 === (a.mode & 1)) return 1;
                if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
                if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
                a = C;
                if (0 !== a) return a;
                a = window.event;
                a = void 0 === a ? 16 : jd(a.type);
                return a;
            }
            function gi(a, b, c, d) {
                if (50 < yk) throw yk = 0, zk = null, Error(p(185));
                Ac(a, c, d);
                if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), 
                Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
            }
            function Dk(a, b) {
                var c = a.callbackNode;
                wc(a, b);
                var d = uc(a, a === Q ? Z : 0);
                if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0; else if (b = d & -d, 
                a.callbackPriority !== b) {
                    null != c && bc(c);
                    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf((function() {
                        0 === (K & 6) && jg();
                    })), c = null; else {
                        switch (Dc(d)) {
                          case 1:
                            c = fc;
                            break;

                          case 4:
                            c = gc;
                            break;

                          case 16:
                            c = hc;
                            break;

                          case 536870912:
                            c = jc;
                            break;

                          default:
                            c = hc;
                        }
                        c = Fk(c, Gk.bind(null, a));
                    }
                    a.callbackPriority = b;
                    a.callbackNode = c;
                }
            }
            function Gk(a, b) {
                Ak = -1;
                Bk = 0;
                if (0 !== (K & 6)) throw Error(p(327));
                var c = a.callbackNode;
                if (Hk() && a.callbackNode !== c) return null;
                var d = uc(a, a === Q ? Z : 0);
                if (0 === d) return null;
                if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d); else {
                    b = d;
                    var e = K;
                    K |= 2;
                    var f = Jk();
                    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
                    do {
                        try {
                            Lk();
                            break;
                        } catch (h) {
                            Mk(a, h);
                        }
                    } while (1);
                    $g();
                    mk.current = f;
                    K = e;
                    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
                }
                if (0 !== b) {
                    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
                    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
                    if (6 === b) Ck(a, d); else {
                        e = a.current.alternate;
                        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, 
                        b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
                        a.finishedWork = e;
                        a.finishedLanes = d;
                        switch (b) {
                          case 0:
                          case 1:
                            throw Error(p(345));

                          case 2:
                            Pk(a, tk, uk);
                            break;

                          case 3:
                            Ck(a, d);
                            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                                if (0 !== uc(a, 0)) break;
                                e = a.suspendedLanes;
                                if ((e & d) !== d) {
                                    R();
                                    a.pingedLanes |= a.suspendedLanes & e;
                                    break;
                                }
                                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                                break;
                            }
                            Pk(a, tk, uk);
                            break;

                          case 4:
                            Ck(a, d);
                            if ((d & 4194240) === d) break;
                            b = a.eventTimes;
                            for (e = -1; 0 < d; ) {
                                var g = 31 - oc(d);
                                f = 1 << g;
                                g = b[g];
                                g > e && (e = g);
                                d &= ~f;
                            }
                            d = e;
                            d = B() - d;
                            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                            if (10 < d) {
                                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                                break;
                            }
                            Pk(a, tk, uk);
                            break;

                          case 5:
                            Pk(a, tk, uk);
                            break;

                          default:
                            throw Error(p(329));
                        }
                    }
                }
                Dk(a, B());
                return a.callbackNode === c ? Gk.bind(null, a) : null;
            }
            function Nk(a, b) {
                var c = sk;
                a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
                a = Ik(a, b);
                2 !== a && (b = tk, tk = c, null !== b && Fj(b));
                return a;
            }
            function Fj(a) {
                null === tk ? tk = a : tk.push.apply(tk, a);
            }
            function Ok(a) {
                for (var b = a; ;) {
                    if (b.flags & 16384) {
                        var c = b.updateQueue;
                        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
                            var e = c[d], f = e.getSnapshot;
                            e = e.value;
                            try {
                                if (!He(f(), e)) return !1;
                            } catch (g) {
                                return !1;
                            }
                        }
                    }
                    c = b.child;
                    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c; else {
                        if (b === a) break;
                        for (;null === b.sibling; ) {
                            if (null === b.return || b.return === a) return !0;
                            b = b.return;
                        }
                        b.sibling.return = b.return;
                        b = b.sibling;
                    }
                }
                return !0;
            }
            function Ck(a, b) {
                b &= ~rk;
                b &= ~qk;
                a.suspendedLanes |= b;
                a.pingedLanes &= ~b;
                for (a = a.expirationTimes; 0 < b; ) {
                    var c = 31 - oc(b), d = 1 << c;
                    a[c] = -1;
                    b &= ~d;
                }
            }
            function Ek(a) {
                if (0 !== (K & 6)) throw Error(p(327));
                Hk();
                var b = uc(a, 0);
                if (0 === (b & 1)) return Dk(a, B()), null;
                var c = Ik(a, b);
                if (0 !== a.tag && 2 === c) {
                    var d = xc(a);
                    0 !== d && (b = d, c = Nk(a, d));
                }
                if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
                if (6 === c) throw Error(p(345));
                a.finishedWork = a.current.alternate;
                a.finishedLanes = b;
                Pk(a, tk, uk);
                Dk(a, B());
                return null;
            }
            function Qk(a, b) {
                var c = K;
                K |= 1;
                try {
                    return a(b);
                } finally {
                    K = c, 0 === K && (Gj = B() + 500, fg && jg());
                }
            }
            function Rk(a) {
                null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
                var b = K;
                K |= 1;
                var c = ok.transition, d = C;
                try {
                    if (ok.transition = null, C = 1, a) return a();
                } finally {
                    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
                }
            }
            function Hj() {
                fj = ej.current;
                E(ej);
            }
            function Kk(a, b) {
                a.finishedWork = null;
                a.finishedLanes = 0;
                var c = a.timeoutHandle;
                -1 !== c && (a.timeoutHandle = -1, Gf(c));
                if (null !== Y) for (c = Y.return; null !== c; ) {
                    var d = c;
                    wg(d);
                    switch (d.tag) {
                      case 1:
                        d = d.type.childContextTypes;
                        null !== d && void 0 !== d && $f();
                        break;

                      case 3:
                        zh();
                        E(Wf);
                        E(H);
                        Eh();
                        break;

                      case 5:
                        Bh(d);
                        break;

                      case 4:
                        zh();
                        break;

                      case 13:
                        E(L);
                        break;

                      case 19:
                        E(L);
                        break;

                      case 10:
                        ah(d.type._context);
                        break;

                      case 22:
                      case 23:
                        Hj();
                    }
                    c = c.return;
                }
                Q = a;
                Y = a = Pg(a.current, null);
                Z = fj = b;
                T = 0;
                pk = null;
                rk = qk = rh = 0;
                tk = sk = null;
                if (null !== fh) {
                    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
                        c.interleaved = null;
                        var e = d.next, f = c.pending;
                        if (null !== f) {
                            var g = f.next;
                            f.next = e;
                            d.next = g;
                        }
                        c.pending = d;
                    }
                    fh = null;
                }
                return a;
            }
            function Mk(a, b) {
                do {
                    var c = Y;
                    try {
                        $g();
                        Fh.current = Rh;
                        if (Ih) {
                            for (var d = M.memoizedState; null !== d; ) {
                                var e = d.queue;
                                null !== e && (e.pending = null);
                                d = d.next;
                            }
                            Ih = !1;
                        }
                        Hh = 0;
                        O = N = M = null;
                        Jh = !1;
                        Kh = 0;
                        nk.current = null;
                        if (null === c || null === c.return) {
                            T = 1;
                            pk = b;
                            Y = null;
                            break;
                        }
                        a: {
                            var f = a, g = c.return, h = c, k = b;
                            b = Z;
                            h.flags |= 32768;
                            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                                var l = k, m = h, q = m.tag;
                                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                                    var r = m.alternate;
                                    r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, 
                                    m.memoizedState = null);
                                }
                                var y = Ui(g);
                                if (null !== y) {
                                    y.flags &= -257;
                                    Vi(y, g, h, f, b);
                                    y.mode & 1 && Si(f, l, b);
                                    b = y;
                                    k = l;
                                    var n = b.updateQueue;
                                    if (null === n) {
                                        var t = new Set;
                                        t.add(k);
                                        b.updateQueue = t;
                                    } else n.add(k);
                                    break a;
                                } else {
                                    if (0 === (b & 1)) {
                                        Si(f, l, b);
                                        tj();
                                        break a;
                                    }
                                    k = Error(p(426));
                                }
                            } else if (I && h.mode & 1) {
                                var J = Ui(g);
                                if (null !== J) {
                                    0 === (J.flags & 65536) && (J.flags |= 256);
                                    Vi(J, g, h, f, b);
                                    Jg(Ji(k, h));
                                    break a;
                                }
                            }
                            f = k = Ji(k, h);
                            4 !== T && (T = 2);
                            null === sk ? sk = [ f ] : sk.push(f);
                            f = g;
                            do {
                                switch (f.tag) {
                                  case 3:
                                    f.flags |= 65536;
                                    b &= -b;
                                    f.lanes |= b;
                                    var x = Ni(f, k, b);
                                    ph(f, x);
                                    break a;

                                  case 1:
                                    h = k;
                                    var w = f.type, u = f.stateNode;
                                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                                        f.flags |= 65536;
                                        b &= -b;
                                        f.lanes |= b;
                                        var F = Qi(f, h, b);
                                        ph(f, F);
                                        break a;
                                    }
                                }
                                f = f.return;
                            } while (null !== f);
                        }
                        Sk(c);
                    } catch (na) {
                        b = na;
                        Y === c && null !== c && (Y = c = c.return);
                        continue;
                    }
                    break;
                } while (1);
            }
            function Jk() {
                var a = mk.current;
                mk.current = Rh;
                return null === a ? Rh : a;
            }
            function tj() {
                if (0 === T || 3 === T || 2 === T) T = 4;
                null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
            }
            function Ik(a, b) {
                var c = K;
                K |= 2;
                var d = Jk();
                if (Q !== a || Z !== b) uk = null, Kk(a, b);
                do {
                    try {
                        Tk();
                        break;
                    } catch (e) {
                        Mk(a, e);
                    }
                } while (1);
                $g();
                K = c;
                mk.current = d;
                if (null !== Y) throw Error(p(261));
                Q = null;
                Z = 0;
                return T;
            }
            function Tk() {
                for (;null !== Y; ) Uk(Y);
            }
            function Lk() {
                for (;null !== Y && !cc(); ) Uk(Y);
            }
            function Uk(a) {
                var b = Vk(a.alternate, a, fj);
                a.memoizedProps = a.pendingProps;
                null === b ? Sk(a) : Y = b;
                nk.current = null;
            }
            function Sk(a) {
                var b = a;
                do {
                    var c = b.alternate;
                    a = b.return;
                    if (0 === (b.flags & 32768)) {
                        if (c = Ej(c, b, fj), null !== c) {
                            Y = c;
                            return;
                        }
                    } else {
                        c = Ij(c, b);
                        if (null !== c) {
                            c.flags &= 32767;
                            Y = c;
                            return;
                        }
                        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null; else {
                            T = 6;
                            Y = null;
                            return;
                        }
                    }
                    b = b.sibling;
                    if (null !== b) {
                        Y = b;
                        return;
                    }
                    Y = b = a;
                } while (null !== b);
                0 === T && (T = 5);
            }
            function Pk(a, b, c) {
                var d = C, e = ok.transition;
                try {
                    ok.transition = null, C = 1, Wk(a, b, c, d);
                } finally {
                    ok.transition = e, C = d;
                }
                return null;
            }
            function Wk(a, b, c, d) {
                do {
                    Hk();
                } while (null !== wk);
                if (0 !== (K & 6)) throw Error(p(327));
                c = a.finishedWork;
                var e = a.finishedLanes;
                if (null === c) return null;
                a.finishedWork = null;
                a.finishedLanes = 0;
                if (c === a.current) throw Error(p(177));
                a.callbackNode = null;
                a.callbackPriority = 0;
                var f = c.lanes | c.childLanes;
                Bc(a, f);
                a === Q && (Y = Q = null, Z = 0);
                0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, (function() {
                    Hk();
                    return null;
                })));
                f = 0 !== (c.flags & 15990);
                if (0 !== (c.subtreeFlags & 15990) || f) {
                    f = ok.transition;
                    ok.transition = null;
                    var g = C;
                    C = 1;
                    var h = K;
                    K |= 4;
                    nk.current = null;
                    Oj(a, c);
                    dk(c, a);
                    Oe(Df);
                    dd = !!Cf;
                    Df = Cf = null;
                    a.current = c;
                    hk(c, a, e);
                    dc();
                    K = h;
                    C = g;
                    ok.transition = f;
                } else a.current = c;
                vk && (vk = !1, wk = a, xk = e);
                f = a.pendingLanes;
                0 === f && (Ri = null);
                mc(c.stateNode, d);
                Dk(a, B());
                if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], 
                d(e.value, {
                    componentStack: e.stack,
                    digest: e.digest
                });
                if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
                0 !== (xk & 1) && 0 !== a.tag && Hk();
                f = a.pendingLanes;
                0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
                jg();
                return null;
            }
            function Hk() {
                if (null !== wk) {
                    var a = Dc(xk), b = ok.transition, c = C;
                    try {
                        ok.transition = null;
                        C = 16 > a ? 16 : a;
                        if (null === wk) var d = !1; else {
                            a = wk;
                            wk = null;
                            xk = 0;
                            if (0 !== (K & 6)) throw Error(p(331));
                            var e = K;
                            K |= 4;
                            for (V = a.current; null !== V; ) {
                                var f = V, g = f.child;
                                if (0 !== (V.flags & 16)) {
                                    var h = f.deletions;
                                    if (null !== h) {
                                        for (var k = 0; k < h.length; k++) {
                                            var l = h[k];
                                            for (V = l; null !== V; ) {
                                                var m = V;
                                                switch (m.tag) {
                                                  case 0:
                                                  case 11:
                                                  case 15:
                                                    Pj(8, m, f);
                                                }
                                                var q = m.child;
                                                if (null !== q) q.return = m, V = q; else for (;null !== V; ) {
                                                    m = V;
                                                    var r = m.sibling, y = m.return;
                                                    Sj(m);
                                                    if (m === l) {
                                                        V = null;
                                                        break;
                                                    }
                                                    if (null !== r) {
                                                        r.return = y;
                                                        V = r;
                                                        break;
                                                    }
                                                    V = y;
                                                }
                                            }
                                        }
                                        var n = f.alternate;
                                        if (null !== n) {
                                            var t = n.child;
                                            if (null !== t) {
                                                n.child = null;
                                                do {
                                                    var J = t.sibling;
                                                    t.sibling = null;
                                                    t = J;
                                                } while (null !== t);
                                            }
                                        }
                                        V = f;
                                    }
                                }
                                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g; else b: for (;null !== V; ) {
                                    f = V;
                                    if (0 !== (f.flags & 2048)) switch (f.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                        Pj(9, f, f.return);
                                    }
                                    var x = f.sibling;
                                    if (null !== x) {
                                        x.return = f.return;
                                        V = x;
                                        break b;
                                    }
                                    V = f.return;
                                }
                            }
                            var w = a.current;
                            for (V = w; null !== V; ) {
                                g = V;
                                var u = g.child;
                                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u; else b: for (g = w; null !== V; ) {
                                    h = V;
                                    if (0 !== (h.flags & 2048)) try {
                                        switch (h.tag) {
                                          case 0:
                                          case 11:
                                          case 15:
                                            Qj(9, h);
                                        }
                                    } catch (na) {
                                        W(h, h.return, na);
                                    }
                                    if (h === g) {
                                        V = null;
                                        break b;
                                    }
                                    var F = h.sibling;
                                    if (null !== F) {
                                        F.return = h.return;
                                        V = F;
                                        break b;
                                    }
                                    V = h.return;
                                }
                            }
                            K = e;
                            jg();
                            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                                lc.onPostCommitFiberRoot(kc, a);
                            } catch (na) {}
                            d = !0;
                        }
                        return d;
                    } finally {
                        C = c, ok.transition = b;
                    }
                }
                return !1;
            }
            function Xk(a, b, c) {
                b = Ji(c, b);
                b = Ni(a, b, 1);
                a = nh(a, b, 1);
                b = R();
                null !== a && (Ac(a, 1, b), Dk(a, b));
            }
            function W(a, b, c) {
                if (3 === a.tag) Xk(a, a, c); else for (;null !== b; ) {
                    if (3 === b.tag) {
                        Xk(b, a, c);
                        break;
                    } else if (1 === b.tag) {
                        var d = b.stateNode;
                        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
                            a = Ji(c, a);
                            a = Qi(b, a, 1);
                            b = nh(b, a, 1);
                            a = R();
                            null !== b && (Ac(b, 1, a), Dk(b, a));
                            break;
                        }
                    }
                    b = b.return;
                }
            }
            function Ti(a, b, c) {
                var d = a.pingCache;
                null !== d && d.delete(b);
                b = R();
                a.pingedLanes |= a.suspendedLanes & c;
                Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
                Dk(a, b);
            }
            function Yk(a, b) {
                0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
                var c = R();
                a = ih(a, b);
                null !== a && (Ac(a, b, c), Dk(a, c));
            }
            function uj(a) {
                var b = a.memoizedState, c = 0;
                null !== b && (c = b.retryLane);
                Yk(a, c);
            }
            function bk(a, b) {
                var c = 0;
                switch (a.tag) {
                  case 13:
                    var d = a.stateNode;
                    var e = a.memoizedState;
                    null !== e && (c = e.retryLane);
                    break;

                  case 19:
                    d = a.stateNode;
                    break;

                  default:
                    throw Error(p(314));
                }
                null !== d && d.delete(b);
                Yk(a, c);
            }
            var Vk;
            Vk = function(a, b, c) {
                if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0; else {
                    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
                    dh = 0 !== (a.flags & 131072) ? !0 : !1;
                } else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
                b.lanes = 0;
                switch (b.tag) {
                  case 2:
                    var d = b.type;
                    ij(a, b);
                    a = b.pendingProps;
                    var e = Yf(b, H.current);
                    ch(b, c);
                    e = Nh(null, b, d, a, e, c);
                    var f = Sh();
                    b.flags |= 1;
                    "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, 
                    b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, 
                    b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), 
                    e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, 
                    I && f && vg(b), Xi(null, b, e, c), b = b.child);
                    return b;

                  case 16:
                    d = b.elementType;
                    a: {
                        ij(a, b);
                        a = b.pendingProps;
                        e = d._init;
                        d = e(d._payload);
                        b.type = d;
                        e = b.tag = Zk(d);
                        a = Ci(d, a);
                        switch (e) {
                          case 0:
                            b = cj(null, b, d, a, c);
                            break a;

                          case 1:
                            b = hj(null, b, d, a, c);
                            break a;

                          case 11:
                            b = Yi(null, b, d, a, c);
                            break a;

                          case 14:
                            b = $i(null, b, d, Ci(d.type, a), c);
                            break a;
                        }
                        throw Error(p(306, d, ""));
                    }
                    return b;

                  case 0:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);

                  case 1:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);

                  case 3:
                    a: {
                        kj(b);
                        if (null === a) throw Error(p(387));
                        d = b.pendingProps;
                        f = b.memoizedState;
                        e = f.element;
                        lh(a, b);
                        qh(b, d, null, c);
                        var g = b.memoizedState;
                        d = g.element;
                        if (f.isDehydrated) if (f = {
                            element: d,
                            isDehydrated: !1,
                            cache: g.cache,
                            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                            transitions: g.transitions
                        }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                            e = Ji(Error(p(423)), b);
                            b = lj(a, b, d, c, e);
                            break a;
                        } else if (d !== e) {
                            e = Ji(Error(p(424)), b);
                            b = lj(a, b, d, c, e);
                            break a;
                        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, 
                        c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling; else {
                            Ig();
                            if (d === e) {
                                b = Zi(a, b, c);
                                break a;
                            }
                            Xi(a, b, d, c);
                        }
                        b = b.child;
                    }
                    return b;

                  case 5:
                    return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, 
                    g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), 
                    gj(a, b), Xi(a, b, g, c), b.child;

                  case 6:
                    return null === a && Eg(b), null;

                  case 13:
                    return oj(a, b, c);

                  case 4:
                    return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), 
                    b.child;

                  case 11:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);

                  case 7:
                    return Xi(a, b, b.pendingProps, c), b.child;

                  case 8:
                    return Xi(a, b, b.pendingProps.children, c), b.child;

                  case 12:
                    return Xi(a, b, b.pendingProps.children, c), b.child;

                  case 10:
                    a: {
                        d = b.type._context;
                        e = b.pendingProps;
                        f = b.memoizedProps;
                        g = e.value;
                        G(Wg, d._currentValue);
                        d._currentValue = g;
                        if (null !== f) if (He(f.value, g)) {
                            if (f.children === e.children && !Wf.current) {
                                b = Zi(a, b, c);
                                break a;
                            }
                        } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                            var h = f.dependencies;
                            if (null !== h) {
                                g = f.child;
                                for (var k = h.firstContext; null !== k; ) {
                                    if (k.context === d) {
                                        if (1 === f.tag) {
                                            k = mh(-1, c & -c);
                                            k.tag = 2;
                                            var l = f.updateQueue;
                                            if (null !== l) {
                                                l = l.shared;
                                                var m = l.pending;
                                                null === m ? k.next = k : (k.next = m.next, m.next = k);
                                                l.pending = k;
                                            }
                                        }
                                        f.lanes |= c;
                                        k = f.alternate;
                                        null !== k && (k.lanes |= c);
                                        bh(f.return, c, b);
                                        h.lanes |= c;
                                        break;
                                    }
                                    k = k.next;
                                }
                            } else if (10 === f.tag) g = f.type === b.type ? null : f.child; else if (18 === f.tag) {
                                g = f.return;
                                if (null === g) throw Error(p(341));
                                g.lanes |= c;
                                h = g.alternate;
                                null !== h && (h.lanes |= c);
                                bh(g, c, b);
                                g = f.sibling;
                            } else g = f.child;
                            if (null !== g) g.return = f; else for (g = f; null !== g; ) {
                                if (g === b) {
                                    g = null;
                                    break;
                                }
                                f = g.sibling;
                                if (null !== f) {
                                    f.return = g.return;
                                    g = f;
                                    break;
                                }
                                g = g.return;
                            }
                            f = g;
                        }
                        Xi(a, b, e.children, c);
                        b = b.child;
                    }
                    return b;

                  case 9:
                    return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, 
                    Xi(a, b, d, c), b.child;

                  case 14:
                    return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);

                  case 15:
                    return bj(a, b, b.type, b.pendingProps, c);

                  case 17:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), 
                    b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), 
                    jj(null, b, d, !0, a, c);

                  case 19:
                    return xj(a, b, c);

                  case 22:
                    return dj(a, b, c);
                }
                throw Error(p(156, b.tag));
            };
            function Fk(a, b) {
                return ac(a, b);
            }
            function $k(a, b, c, d) {
                this.tag = a;
                this.key = c;
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
                this.index = 0;
                this.ref = null;
                this.pendingProps = b;
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
                this.mode = d;
                this.subtreeFlags = this.flags = 0;
                this.deletions = null;
                this.childLanes = this.lanes = 0;
                this.alternate = null;
            }
            function Bg(a, b, c, d) {
                return new $k(a, b, c, d);
            }
            function aj(a) {
                a = a.prototype;
                return !(!a || !a.isReactComponent);
            }
            function Zk(a) {
                if ("function" === typeof a) return aj(a) ? 1 : 0;
                if (void 0 !== a && null !== a) {
                    a = a.$$typeof;
                    if (a === Da) return 11;
                    if (a === Ga) return 14;
                }
                return 2;
            }
            function Pg(a, b) {
                var c = a.alternate;
                null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, 
                c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, 
                c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
                c.flags = a.flags & 14680064;
                c.childLanes = a.childLanes;
                c.lanes = a.lanes;
                c.child = a.child;
                c.memoizedProps = a.memoizedProps;
                c.memoizedState = a.memoizedState;
                c.updateQueue = a.updateQueue;
                b = a.dependencies;
                c.dependencies = null === b ? null : {
                    lanes: b.lanes,
                    firstContext: b.firstContext
                };
                c.sibling = a.sibling;
                c.index = a.index;
                c.ref = a.ref;
                return c;
            }
            function Rg(a, b, c, d, e, f) {
                var g = 2;
                d = a;
                if ("function" === typeof a) aj(a) && (g = 1); else if ("string" === typeof a) g = 5; else a: switch (a) {
                  case ya:
                    return Tg(c.children, e, f, b);

                  case za:
                    g = 8;
                    e |= 8;
                    break;

                  case Aa:
                    return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;

                  case Ea:
                    return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;

                  case Fa:
                    return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;

                  case Ia:
                    return pj(c, e, f, b);

                  default:
                    if ("object" === typeof a && null !== a) switch (a.$$typeof) {
                      case Ba:
                        g = 10;
                        break a;

                      case Ca:
                        g = 9;
                        break a;

                      case Da:
                        g = 11;
                        break a;

                      case Ga:
                        g = 14;
                        break a;

                      case Ha:
                        g = 16;
                        d = null;
                        break a;
                    }
                    throw Error(p(130, null == a ? a : typeof a, ""));
                }
                b = Bg(g, c, b, e);
                b.elementType = a;
                b.type = d;
                b.lanes = f;
                return b;
            }
            function Tg(a, b, c, d) {
                a = Bg(7, a, d, b);
                a.lanes = c;
                return a;
            }
            function pj(a, b, c, d) {
                a = Bg(22, a, d, b);
                a.elementType = Ia;
                a.lanes = c;
                a.stateNode = {
                    isHidden: !1
                };
                return a;
            }
            function Qg(a, b, c) {
                a = Bg(6, a, null, b);
                a.lanes = c;
                return a;
            }
            function Sg(a, b, c) {
                b = Bg(4, null !== a.children ? a.children : [], a.key, b);
                b.lanes = c;
                b.stateNode = {
                    containerInfo: a.containerInfo,
                    pendingChildren: null,
                    implementation: a.implementation
                };
                return b;
            }
            function al(a, b, c, d, e) {
                this.tag = b;
                this.containerInfo = a;
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
                this.timeoutHandle = -1;
                this.callbackNode = this.pendingContext = this.context = null;
                this.callbackPriority = 0;
                this.eventTimes = zc(0);
                this.expirationTimes = zc(-1);
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
                this.entanglements = zc(0);
                this.identifierPrefix = d;
                this.onRecoverableError = e;
                this.mutableSourceEagerHydrationData = null;
            }
            function bl(a, b, c, d, e, f, g, h, k) {
                a = new al(a, b, c, h, k);
                1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
                f = Bg(3, null, null, b);
                a.current = f;
                f.stateNode = a;
                f.memoizedState = {
                    element: d,
                    isDehydrated: c,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                };
                kh(f);
                return a;
            }
            function cl(a, b, c) {
                var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: wa,
                    key: null == d ? null : "" + d,
                    children: a,
                    containerInfo: b,
                    implementation: c
                };
            }
            function dl(a) {
                if (!a) return Vf;
                a = a._reactInternals;
                a: {
                    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
                    var b = a;
                    do {
                        switch (b.tag) {
                          case 3:
                            b = b.stateNode.context;
                            break a;

                          case 1:
                            if (Zf(b.type)) {
                                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                                break a;
                            }
                        }
                        b = b.return;
                    } while (null !== b);
                    throw Error(p(171));
                }
                if (1 === a.tag) {
                    var c = a.type;
                    if (Zf(c)) return bg(a, c, b);
                }
                return b;
            }
            function el(a, b, c, d, e, f, g, h, k) {
                a = bl(c, d, !0, a, e, f, g, h, k);
                a.context = dl(null);
                c = a.current;
                d = R();
                e = yi(c);
                f = mh(d, e);
                f.callback = void 0 !== b && null !== b ? b : null;
                nh(c, f, e);
                a.current.lanes = e;
                Ac(a, e, d);
                Dk(a, d);
                return a;
            }
            function fl(a, b, c, d) {
                var e = b.current, f = R(), g = yi(e);
                c = dl(c);
                null === b.context ? b.context = c : b.pendingContext = c;
                b = mh(f, g);
                b.payload = {
                    element: a
                };
                d = void 0 === d ? null : d;
                null !== d && (b.callback = d);
                a = nh(e, b, g);
                null !== a && (gi(a, e, g, f), oh(a, e, g));
                return g;
            }
            function gl(a) {
                a = a.current;
                if (!a.child) return null;
                switch (a.child.tag) {
                  case 5:
                    return a.child.stateNode;

                  default:
                    return a.child.stateNode;
                }
            }
            function hl(a, b) {
                a = a.memoizedState;
                if (null !== a && null !== a.dehydrated) {
                    var c = a.retryLane;
                    a.retryLane = 0 !== c && c < b ? c : b;
                }
            }
            function il(a, b) {
                hl(a, b);
                (a = a.alternate) && hl(a, b);
            }
            function jl() {
                return null;
            }
            var kl = "function" === typeof reportError ? reportError : function(a) {
                console.error(a);
            };
            function ll(a) {
                this._internalRoot = a;
            }
            ml.prototype.render = ll.prototype.render = function(a) {
                var b = this._internalRoot;
                if (null === b) throw Error(p(409));
                fl(a, b, null, null);
            };
            ml.prototype.unmount = ll.prototype.unmount = function() {
                var a = this._internalRoot;
                if (null !== a) {
                    this._internalRoot = null;
                    var b = a.containerInfo;
                    Rk((function() {
                        fl(null, a, null, null);
                    }));
                    b[uf] = null;
                }
            };
            function ml(a) {
                this._internalRoot = a;
            }
            ml.prototype.unstable_scheduleHydration = function(a) {
                if (a) {
                    var b = Hc();
                    a = {
                        blockedOn: null,
                        target: a,
                        priority: b
                    };
                    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
                    Qc.splice(c, 0, a);
                    0 === c && Vc(a);
                }
            };
            function nl(a) {
                return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
            }
            function ol(a) {
                return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
            }
            function pl() {}
            function ql(a, b, c, d, e) {
                if (e) {
                    if ("function" === typeof d) {
                        var f = d;
                        d = function() {
                            var a = gl(g);
                            f.call(a);
                        };
                    }
                    var g = el(b, d, a, 0, null, !1, !1, "", pl);
                    a._reactRootContainer = g;
                    a[uf] = g.current;
                    sf(8 === a.nodeType ? a.parentNode : a);
                    Rk();
                    return g;
                }
                for (;e = a.lastChild; ) a.removeChild(e);
                if ("function" === typeof d) {
                    var h = d;
                    d = function() {
                        var a = gl(k);
                        h.call(a);
                    };
                }
                var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
                a._reactRootContainer = k;
                a[uf] = k.current;
                sf(8 === a.nodeType ? a.parentNode : a);
                Rk((function() {
                    fl(b, k, c, d);
                }));
                return k;
            }
            function rl(a, b, c, d, e) {
                var f = c._reactRootContainer;
                if (f) {
                    var g = f;
                    if ("function" === typeof e) {
                        var h = e;
                        e = function() {
                            var a = gl(g);
                            h.call(a);
                        };
                    }
                    fl(b, g, a, e);
                } else g = ql(c, b, a, e, d);
                return gl(g);
            }
            Ec = function(a) {
                switch (a.tag) {
                  case 3:
                    var b = a.stateNode;
                    if (b.current.memoizedState.isDehydrated) {
                        var c = tc(b.pendingLanes);
                        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
                    }
                    break;

                  case 13:
                    Rk((function() {
                        var b = ih(a, 1);
                        if (null !== b) {
                            var c = R();
                            gi(b, a, 1, c);
                        }
                    })), il(a, 1);
                }
            };
            Fc = function(a) {
                if (13 === a.tag) {
                    var b = ih(a, 134217728);
                    if (null !== b) {
                        var c = R();
                        gi(b, a, 134217728, c);
                    }
                    il(a, 134217728);
                }
            };
            Gc = function(a) {
                if (13 === a.tag) {
                    var b = yi(a), c = ih(a, b);
                    if (null !== c) {
                        var d = R();
                        gi(c, a, b, d);
                    }
                    il(a, b);
                }
            };
            Hc = function() {
                return C;
            };
            Ic = function(a, b) {
                var c = C;
                try {
                    return C = a, b();
                } finally {
                    C = c;
                }
            };
            yb = function(a, b, c) {
                switch (b) {
                  case "input":
                    bb(a, c);
                    b = c.name;
                    if ("radio" === c.type && null != b) {
                        for (c = a; c.parentNode; ) c = c.parentNode;
                        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                        for (b = 0; b < c.length; b++) {
                            var d = c[b];
                            if (d !== a && d.form === a.form) {
                                var e = Db(d);
                                if (!e) throw Error(p(90));
                                Wa(d);
                                bb(d, e);
                            }
                        }
                    }
                    break;

                  case "textarea":
                    ib(a, c);
                    break;

                  case "select":
                    b = c.value, null != b && fb(a, !!c.multiple, b, !1);
                }
            };
            Gb = Qk;
            Hb = Rk;
            var sl = {
                usingClientEntryPoint: !1,
                Events: [ Cb, ue, Db, Eb, Fb, Qk ]
            }, tl = {
                findFiberByHostInstance: Wc,
                bundleType: 0,
                version: "18.3.1",
                rendererPackageName: "react-dom"
            };
            var ul = {
                bundleType: tl.bundleType,
                version: tl.version,
                rendererPackageName: tl.rendererPackageName,
                rendererConfig: tl.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: ua.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(a) {
                    a = Zb(a);
                    return null === a ? null : a.stateNode;
                },
                findFiberByHostInstance: tl.findFiberByHostInstance || jl,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!vl.isDisabled && vl.supportsFiber) try {
                    kc = vl.inject(ul), lc = vl;
                } catch (a) {}
            }
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
            exports.createPortal = function(a, b) {
                var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!nl(b)) throw Error(p(200));
                return cl(a, b, null, c);
            };
            exports.createRoot = function(a, b) {
                if (!nl(a)) throw Error(p(299));
                var c = !1, d = "", e = kl;
                null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), 
                void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
                b = bl(a, 1, !1, null, null, c, !1, d, e);
                a[uf] = b.current;
                sf(8 === a.nodeType ? a.parentNode : a);
                return new ll(b);
            };
            exports.findDOMNode = function(a) {
                if (null == a) return null;
                if (1 === a.nodeType) return a;
                var b = a._reactInternals;
                if (void 0 === b) {
                    if ("function" === typeof a.render) throw Error(p(188));
                    a = Object.keys(a).join(",");
                    throw Error(p(268, a));
                }
                a = Zb(b);
                a = null === a ? null : a.stateNode;
                return a;
            };
            exports.flushSync = function(a) {
                return Rk(a);
            };
            exports.hydrate = function(a, b, c) {
                if (!ol(b)) throw Error(p(200));
                return rl(null, a, b, !0, c);
            };
            exports.hydrateRoot = function(a, b, c) {
                if (!nl(a)) throw Error(p(405));
                var d = null != c && c.hydratedSources || null, e = !1, f = "", g = kl;
                null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), 
                void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
                b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
                a[uf] = b.current;
                sf(a);
                if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), 
                null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [ c, e ] : b.mutableSourceEagerHydrationData.push(c, e);
                return new ml(b);
            };
            exports.render = function(a, b, c) {
                if (!ol(b)) throw Error(p(200));
                return rl(null, a, b, !1, c);
            };
            exports.unmountComponentAtNode = function(a) {
                if (!ol(a)) throw Error(p(40));
                return a._reactRootContainer ? (Rk((function() {
                    rl(null, null, a, !1, (function() {
                        a._reactRootContainer = null;
                        a[uf] = null;
                    }));
                })), !0) : !1;
            };
            exports.unstable_batchedUpdates = Qk;
            exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
                if (!ol(c)) throw Error(p(200));
                if (null == a || void 0 === a._reactInternals) throw Error(p(38));
                return rl(a, b, c, !1, d);
            };
            exports.version = "18.3.1-next-f1338f8080-20240426";
        },
        338: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            var m = __webpack_require__(961);
            if (true) {
                exports.H = m.createRoot;
                m.hydrateRoot;
            } else ;
        },
        961: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            function checkDCE() {
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
                if (false) ;
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
                } catch (err) {
                    console.error(err);
                }
            }
            if (true) {
                checkDCE();
                module.exports = __webpack_require__(551);
            }
        },
        20: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */            var f = __webpack_require__(540), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function q(c, a, g) {
                var b, d = {}, e = null, h = null;
                void 0 !== g && (e = "" + g);
                void 0 !== a.key && (e = "" + a.key);
                void 0 !== a.ref && (h = a.ref);
                for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
                if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
                return {
                    $$typeof: k,
                    type: c,
                    key: e,
                    ref: h,
                    props: d,
                    _owner: n.current
                };
            }
            exports.Fragment = l;
            exports.jsx = q;
            exports.jsxs = q;
        },
        287: (__unused_webpack_module, exports) => {
            "use strict";
            /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */            var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
            function A(a) {
                if (null === a || "object" !== typeof a) return null;
                a = z && a[z] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var B = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }, C = Object.assign, D = {};
            function E(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            E.prototype.isReactComponent = {};
            E.prototype.setState = function(a, b) {
                if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, a, b, "setState");
            };
            E.prototype.forceUpdate = function(a) {
                this.updater.enqueueForceUpdate(this, a, "forceUpdate");
            };
            function F() {}
            F.prototype = E.prototype;
            function G(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            var H = G.prototype = new F;
            H.constructor = G;
            C(H, E.prototype);
            H.isPureReactComponent = !0;
            var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
                current: null
            }, L = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function M(a, b, e) {
                var d, c = {}, k = null, h = null;
                if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), 
                b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
                var g = arguments.length - 2;
                if (1 === g) c.children = e; else if (1 < g) {
                    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
                    c.children = f;
                }
                if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
                return {
                    $$typeof: l,
                    type: a,
                    key: k,
                    ref: h,
                    props: c,
                    _owner: K.current
                };
            }
            function N(a, b) {
                return {
                    $$typeof: l,
                    type: a.type,
                    key: b,
                    ref: a.ref,
                    props: a.props,
                    _owner: a._owner
                };
            }
            function O(a) {
                return "object" === typeof a && null !== a && a.$$typeof === l;
            }
            function escape(a) {
                var b = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + a.replace(/[=:]/g, (function(a) {
                    return b[a];
                }));
            }
            var P = /\/+/g;
            function Q(a, b) {
                return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
            }
            function R(a, b, e, d, c) {
                var k = typeof a;
                if ("undefined" === k || "boolean" === k) a = null;
                var h = !1;
                if (null === a) h = !0; else switch (k) {
                  case "string":
                  case "number":
                    h = !0;
                    break;

                  case "object":
                    switch (a.$$typeof) {
                      case l:
                      case n:
                        h = !0;
                    }
                }
                if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", 
                null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", (function(a) {
                    return a;
                }))) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), 
                b.push(c)), 1;
                h = 0;
                d = "" === d ? "." : d + ":";
                if (I(a)) for (var g = 0; g < a.length; g++) {
                    k = a[g];
                    var f = d + Q(k, g);
                    h += R(k, b, e, f, c);
                } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, 
                f = d + Q(k, g++), h += R(k, b, e, f, c); else if ("object" === k) throw b = String(a), 
                Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
                return h;
            }
            function S(a, b, e) {
                if (null == a) return a;
                var d = [], c = 0;
                R(a, d, "", "", (function(a) {
                    return b.call(e, a, c++);
                }));
                return d;
            }
            function T(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    b = b();
                    b.then((function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
                    }), (function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
                    }));
                    -1 === a._status && (a._status = 0, a._result = b);
                }
                if (1 === a._status) return a._result.default;
                throw a._result;
            }
            var U = {
                current: null
            }, V = {
                transition: null
            }, W = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: V,
                ReactCurrentOwner: K
            };
            function X() {
                throw Error("act(...) is not supported in production builds of React.");
            }
            exports.Children = {
                map: S,
                forEach: function(a, b, e) {
                    S(a, (function() {
                        b.apply(this, arguments);
                    }), e);
                },
                count: function(a) {
                    var b = 0;
                    S(a, (function() {
                        b++;
                    }));
                    return b;
                },
                toArray: function(a) {
                    return S(a, (function(a) {
                        return a;
                    })) || [];
                },
                only: function(a) {
                    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                    return a;
                }
            };
            exports.Component = E;
            exports.Fragment = p;
            exports.Profiler = r;
            exports.PureComponent = G;
            exports.StrictMode = q;
            exports.Suspense = w;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
            exports.act = X;
            exports.cloneElement = function(a, b, e) {
                if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
                var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
                if (null != b) {
                    void 0 !== b.ref && (k = b.ref, h = K.current);
                    void 0 !== b.key && (c = "" + b.key);
                    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
                }
                var f = arguments.length - 2;
                if (1 === f) d.children = e; else if (1 < f) {
                    g = Array(f);
                    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
                    d.children = g;
                }
                return {
                    $$typeof: l,
                    type: a.type,
                    key: c,
                    ref: k,
                    props: d,
                    _owner: h
                };
            };
            exports.createContext = function(a) {
                a = {
                    $$typeof: u,
                    _currentValue: a,
                    _currentValue2: a,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                };
                a.Provider = {
                    $$typeof: t,
                    _context: a
                };
                return a.Consumer = a;
            };
            exports.createElement = M;
            exports.createFactory = function(a) {
                var b = M.bind(null, a);
                b.type = a;
                return b;
            };
            exports.createRef = function() {
                return {
                    current: null
                };
            };
            exports.forwardRef = function(a) {
                return {
                    $$typeof: v,
                    render: a
                };
            };
            exports.isValidElement = O;
            exports.lazy = function(a) {
                return {
                    $$typeof: y,
                    _payload: {
                        _status: -1,
                        _result: a
                    },
                    _init: T
                };
            };
            exports.memo = function(a, b) {
                return {
                    $$typeof: x,
                    type: a,
                    compare: void 0 === b ? null : b
                };
            };
            exports.startTransition = function(a) {
                var b = V.transition;
                V.transition = {};
                try {
                    a();
                } finally {
                    V.transition = b;
                }
            };
            exports.unstable_act = X;
            exports.useCallback = function(a, b) {
                return U.current.useCallback(a, b);
            };
            exports.useContext = function(a) {
                return U.current.useContext(a);
            };
            exports.useDebugValue = function() {};
            exports.useDeferredValue = function(a) {
                return U.current.useDeferredValue(a);
            };
            exports.useEffect = function(a, b) {
                return U.current.useEffect(a, b);
            };
            exports.useId = function() {
                return U.current.useId();
            };
            exports.useImperativeHandle = function(a, b, e) {
                return U.current.useImperativeHandle(a, b, e);
            };
            exports.useInsertionEffect = function(a, b) {
                return U.current.useInsertionEffect(a, b);
            };
            exports.useLayoutEffect = function(a, b) {
                return U.current.useLayoutEffect(a, b);
            };
            exports.useMemo = function(a, b) {
                return U.current.useMemo(a, b);
            };
            exports.useReducer = function(a, b, e) {
                return U.current.useReducer(a, b, e);
            };
            exports.useRef = function(a) {
                return U.current.useRef(a);
            };
            exports.useState = function(a) {
                return U.current.useState(a);
            };
            exports.useSyncExternalStore = function(a, b, e) {
                return U.current.useSyncExternalStore(a, b, e);
            };
            exports.useTransition = function() {
                return U.current.useTransition();
            };
            exports.version = "18.3.1";
        },
        540: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            if (true) module.exports = __webpack_require__(287);
        },
        848: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            if (true) module.exports = __webpack_require__(20);
        },
        463: (__unused_webpack_module, exports) => {
            "use strict";
            /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */            function f(a, b) {
                var c = a.length;
                a.push(b);
                a: for (;0 < c; ) {
                    var d = c - 1 >>> 1, e = a[d];
                    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d; else break a;
                }
            }
            function h(a) {
                return 0 === a.length ? null : a[0];
            }
            function k(a) {
                if (0 === a.length) return null;
                var b = a[0], c = a.pop();
                if (c !== b) {
                    a[0] = c;
                    a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
                        var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
                        if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, 
                        a[m] = c, d = m); else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n; else break a;
                    }
                }
                return b;
            }
            function g(a, b) {
                var c = a.sortIndex - b.sortIndex;
                return 0 !== c ? c : a.id - b.id;
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var l = performance;
                exports.unstable_now = function() {
                    return l.now();
                };
            } else {
                var p = Date, q = p.now();
                exports.unstable_now = function() {
                    return p.now() - q;
                };
            }
            var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function G(a) {
                for (var b = h(t); null !== b; ) {
                    if (null === b.callback) k(t); else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, 
                    f(r, b); else break;
                    b = h(t);
                }
            }
            function H(a) {
                B = !1;
                G(a);
                if (!A) if (null !== h(r)) A = !0, I(J); else {
                    var b = h(t);
                    null !== b && K(H, b.startTime - a);
                }
            }
            function J(a, b) {
                A = !1;
                B && (B = !1, E(L), L = -1);
                z = !0;
                var c = y;
                try {
                    G(b);
                    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
                        var d = v.callback;
                        if ("function" === typeof d) {
                            v.callback = null;
                            y = v.priorityLevel;
                            var e = d(v.expirationTime <= b);
                            b = exports.unstable_now();
                            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                            G(b);
                        } else k(r);
                        v = h(r);
                    }
                    if (null !== v) var w = !0; else {
                        var m = h(t);
                        null !== m && K(H, m.startTime - b);
                        w = !1;
                    }
                    return w;
                } finally {
                    v = null, y = c, z = !1;
                }
            }
            var N = !1, O = null, L = -1, P = 5, Q = -1;
            function M() {
                return exports.unstable_now() - Q < P ? !1 : !0;
            }
            function R() {
                if (null !== O) {
                    var a = exports.unstable_now();
                    Q = a;
                    var b = !0;
                    try {
                        b = O(!0, a);
                    } finally {
                        b ? S() : (N = !1, O = null);
                    }
                } else N = !1;
            }
            var S;
            if ("function" === typeof F) S = function() {
                F(R);
            }; else if ("undefined" !== typeof MessageChannel) {
                var T = new MessageChannel, U = T.port2;
                T.port1.onmessage = R;
                S = function() {
                    U.postMessage(null);
                };
            } else S = function() {
                D(R, 0);
            };
            function I(a) {
                O = a;
                N || (N = !0, S());
            }
            function K(a, b) {
                L = D((function() {
                    a(exports.unstable_now());
                }), b);
            }
            exports.unstable_IdlePriority = 5;
            exports.unstable_ImmediatePriority = 1;
            exports.unstable_LowPriority = 4;
            exports.unstable_NormalPriority = 3;
            exports.unstable_Profiling = null;
            exports.unstable_UserBlockingPriority = 2;
            exports.unstable_cancelCallback = function(a) {
                a.callback = null;
            };
            exports.unstable_continueExecution = function() {
                A || z || (A = !0, I(J));
            };
            exports.unstable_forceFrameRate = function(a) {
                0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
            };
            exports.unstable_getCurrentPriorityLevel = function() {
                return y;
            };
            exports.unstable_getFirstCallbackNode = function() {
                return h(r);
            };
            exports.unstable_next = function(a) {
                switch (y) {
                  case 1:
                  case 2:
                  case 3:
                    var b = 3;
                    break;

                  default:
                    b = y;
                }
                var c = y;
                y = b;
                try {
                    return a();
                } finally {
                    y = c;
                }
            };
            exports.unstable_pauseExecution = function() {};
            exports.unstable_requestPaint = function() {};
            exports.unstable_runWithPriority = function(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;

                  default:
                    a = 3;
                }
                var c = y;
                y = a;
                try {
                    return b();
                } finally {
                    y = c;
                }
            };
            exports.unstable_scheduleCallback = function(a, b, c) {
                var d = exports.unstable_now();
                "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
                switch (a) {
                  case 1:
                    var e = -1;
                    break;

                  case 2:
                    e = 250;
                    break;

                  case 5:
                    e = 1073741823;
                    break;

                  case 4:
                    e = 1e4;
                    break;

                  default:
                    e = 5e3;
                }
                e = c + e;
                a = {
                    id: u++,
                    callback: b,
                    priorityLevel: a,
                    startTime: c,
                    expirationTime: e,
                    sortIndex: -1
                };
                c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, 
                K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
                return a;
            };
            exports.unstable_shouldYield = M;
            exports.unstable_wrapCallback = function(a) {
                var b = y;
                return function() {
                    var c = y;
                    y = b;
                    try {
                        return a.apply(this, arguments);
                    } finally {
                        y = c;
                    }
                };
            };
        },
        982: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            if (true) module.exports = __webpack_require__(463);
        },
        496: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        },
        97: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                t: () => flsModules
            });
            var flsModules = {};
        },
        395: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                KT: () => menuClose,
                Zd: () => getHash,
                mU: () => menuInit,
                t: () => spollers,
                v3: () => uniqArray,
                vE: () => isWebp,
                yU: () => FLS
            });
            __webpack_require__(97);
            function isWebp() {
                function testWebP(callback) {
                    var webP = new Image;
                    webP.onload = webP.onerror = function() {
                        callback(webP.height == 2);
                    };
                    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
                }
                testWebP((function(support) {
                    var className = support === true ? "webp" : "no-webp";
                    document.documentElement.classList.add(className);
                }));
            }
            function getHash() {
                if (location.hash) return location.hash.replace("#", "");
            }
            var _slideUp = function _slideUp(target) {
                var duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
                var showmore = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                if (!target.classList.contains("_slide")) {
                    target.classList.add("_slide");
                    target.style.transitionProperty = "height, margin, padding";
                    target.style.transitionDuration = duration + "ms";
                    target.style.height = "".concat(target.offsetHeight, "px");
                    target.offsetHeight;
                    target.style.overflow = "hidden";
                    target.style.height = showmore ? "".concat(showmore, "px") : "0px";
                    target.style.paddingTop = 0;
                    target.style.paddingBottom = 0;
                    target.style.marginTop = 0;
                    target.style.marginBottom = 0;
                    window.setTimeout((function() {
                        target.hidden = !showmore ? true : false;
                        !showmore ? target.style.removeProperty("height") : null;
                        target.style.removeProperty("padding-top");
                        target.style.removeProperty("padding-bottom");
                        target.style.removeProperty("margin-top");
                        target.style.removeProperty("margin-bottom");
                        !showmore ? target.style.removeProperty("overflow") : null;
                        target.style.removeProperty("transition-duration");
                        target.style.removeProperty("transition-property");
                        target.classList.remove("_slide");
                        document.dispatchEvent(new CustomEvent("slideUpDone", {
                            detail: {
                                target
                            }
                        }));
                    }), duration);
                }
            };
            var _slideDown = function _slideDown(target) {
                var duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
                var showmore = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                if (!target.classList.contains("_slide")) {
                    target.classList.add("_slide");
                    target.hidden = target.hidden ? false : null;
                    showmore ? target.style.removeProperty("height") : null;
                    var height = target.offsetHeight;
                    target.style.overflow = "hidden";
                    target.style.height = showmore ? "".concat(showmore, "px") : "0px";
                    target.style.paddingTop = 0;
                    target.style.paddingBottom = 0;
                    target.style.marginTop = 0;
                    target.style.marginBottom = 0;
                    target.offsetHeight;
                    target.style.transitionProperty = "height, margin, padding";
                    target.style.transitionDuration = duration + "ms";
                    target.style.height = height + "px";
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    window.setTimeout((function() {
                        target.style.removeProperty("height");
                        target.style.removeProperty("overflow");
                        target.style.removeProperty("transition-duration");
                        target.style.removeProperty("transition-property");
                        target.classList.remove("_slide");
                        document.dispatchEvent(new CustomEvent("slideDownDone", {
                            detail: {
                                target
                            }
                        }));
                    }), duration);
                }
            };
            var _slideToggle = function _slideToggle(target) {
                var duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
                if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
            };
            var bodyLockStatus = true;
            var bodyLockToggle = function bodyLockToggle() {
                var delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
                if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
            };
            var bodyUnlock = function bodyUnlock() {
                var delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
                var body = document.querySelector("body");
                if (bodyLockStatus) {
                    var lock_padding = document.querySelectorAll("[data-lp]");
                    setTimeout((function() {
                        for (var index = 0; index < lock_padding.length; index++) {
                            var el = lock_padding[index];
                            el.style.paddingRight = "0px";
                        }
                        body.style.paddingRight = "0px";
                        document.documentElement.classList.remove("lock");
                    }), delay);
                    bodyLockStatus = false;
                    setTimeout((function() {
                        bodyLockStatus = true;
                    }), delay);
                }
            };
            var bodyLock = function bodyLock() {
                var delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
                var body = document.querySelector("body");
                if (bodyLockStatus) {
                    var lock_padding = document.querySelectorAll("[data-lp]");
                    for (var index = 0; index < lock_padding.length; index++) {
                        var el = lock_padding[index];
                        el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                    }
                    body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                    document.documentElement.classList.add("lock");
                    bodyLockStatus = false;
                    setTimeout((function() {
                        bodyLockStatus = true;
                    }), delay);
                }
            };
            function spollers() {
                var spollersArray = document.querySelectorAll("[data-spollers]");
                if (spollersArray.length > 0) {
                    var initSpollers = function initSpollers(spollersArray) {
                        var matchMedia = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                        spollersArray.forEach((function(spollersBlock) {
                            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                            if (matchMedia.matches || matchMedia) {
                                spollersBlock.classList.add("_spoller-init");
                                initSpollerBody(spollersBlock);
                                spollersBlock.addEventListener("click", setSpollerAction);
                            } else {
                                spollersBlock.classList.remove("_spoller-init");
                                initSpollerBody(spollersBlock, false);
                                spollersBlock.removeEventListener("click", setSpollerAction);
                            }
                        }));
                    };
                    var initSpollerBody = function initSpollerBody(spollersBlock) {
                        var hideSpollerBody = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                        var spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                        if (spollerTitles.length) {
                            spollerTitles = Array.from(spollerTitles).filter((function(item) {
                                return item.closest("[data-spollers]") === spollersBlock;
                            }));
                            spollerTitles.forEach((function(spollerTitle) {
                                if (hideSpollerBody) {
                                    spollerTitle.removeAttribute("tabindex");
                                    if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                                } else {
                                    spollerTitle.setAttribute("tabindex", "-1");
                                    spollerTitle.nextElementSibling.hidden = false;
                                }
                            }));
                        }
                    };
                    var setSpollerAction = function setSpollerAction(e) {
                        console.log("work");
                        var el = e.target;
                        if (el.closest("[data-spoller]")) {
                            var spollerTitle = el.closest("[data-spoller]");
                            var spollersItem = spollerTitle.closest(".spollers__item");
                            var spollersBlock = spollerTitle.closest("[data-spollers]");
                            var oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                            var spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            if (!spollersBlock.querySelectorAll("._slide").length) {
                                if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                                spollerTitle.classList.toggle("_spoller-active");
                                spollersItem.classList.toggle("_spollerItem-active");
                                _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                            }
                            e.preventDefault();
                        }
                    };
                    var hideSpollersBody = function hideSpollersBody(spollersBlock) {
                        var spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                        var spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                            spollerActiveTitle.classList.remove("_spoller-active");
                            _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                        }
                    };
                    var spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                        return !item.dataset.spollers.split(",")[0];
                    }));
                    if (spollersRegular.length) initSpollers(spollersRegular);
                    var mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                    if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((function(mdQueriesItem) {
                        mdQueriesItem.matchMedia.addEventListener("change", (function() {
                            initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                        }));
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    var spollersClose = document.querySelectorAll("[data-spoller-close]");
                    if (spollersClose.length) document.addEventListener("click", (function(e) {
                        var el = e.target;
                        if (!el.closest("[data-spollers]")) spollersClose.forEach((function(spollerClose) {
                            var spollersBlock = spollerClose.closest("[data-spollers]");
                            var spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }));
                    }));
                }
            }
            function menuInit() {
                if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                    if (bodyLockStatus && e.target.closest(".icon-menu")) {
                        bodyLockToggle();
                        document.documentElement.classList.toggle("menu-open");
                    }
                }));
            }
            function menuClose() {
                bodyUnlock();
                document.documentElement.classList.remove("menu-open");
            }
            function FLS(message) {
                setTimeout((function() {
                    if (window.FLS) console.log(message);
                }), 0);
            }
            function uniqArray(array) {
                return array.filter((function(item, index, self) {
                    return self.indexOf(item) === index;
                }));
            }
            function dataMediaQueries(array, dataSetValue) {
                var media = Array.from(array).filter((function(item, index, self) {
                    if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
                }));
                if (media.length) {
                    var breakpointsArray = [];
                    media.forEach((function(item) {
                        var params = item.dataset[dataSetValue];
                        var breakpoint = {};
                        var paramsArray = params.split(",");
                        breakpoint.value = paramsArray[0];
                        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                        breakpoint.item = item;
                        breakpointsArray.push(breakpoint);
                    }));
                    var mdQueries = breakpointsArray.map((function(item) {
                        return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                    }));
                    mdQueries = uniqArray(mdQueries);
                    var mdQueriesArray = [];
                    if (mdQueries.length) {
                        mdQueries.forEach((function(breakpoint) {
                            var paramsArray = breakpoint.split(",");
                            var mediaBreakpoint = paramsArray[1];
                            var mediaType = paramsArray[2];
                            var matchMedia = window.matchMedia(paramsArray[0]);
                            var itemsArray = breakpointsArray.filter((function(item) {
                                if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                            }));
                            mdQueriesArray.push({
                                itemsArray,
                                matchMedia
                            });
                        }));
                        return mdQueriesArray;
                    }
                }
            }
        },
        5: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                A: () => SimpleBar
            });
            var can_use_dom = __webpack_require__(610);
            function isObject(value) {
                var type = typeof value;
                return value != null && (type == "object" || type == "function");
            }
            const lodash_es_isObject = isObject;
            var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
            const _freeGlobal = freeGlobal;
            var freeSelf = typeof self == "object" && self && self.Object === Object && self;
            var root = _freeGlobal || freeSelf || Function("return this")();
            const _root = root;
            var now = function() {
                return _root.Date.now();
            };
            const lodash_es_now = now;
            var reWhitespace = /\s/;
            function trimmedEndIndex(string) {
                var index = string.length;
                while (index-- && reWhitespace.test(string.charAt(index))) ;
                return index;
            }
            const _trimmedEndIndex = trimmedEndIndex;
            var reTrimStart = /^\s+/;
            function baseTrim(string) {
                return string ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
            }
            const _baseTrim = baseTrim;
            var Symbol = _root.Symbol;
            const _Symbol = Symbol;
            var objectProto = Object.prototype;
            var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;
            var nativeObjectToString = objectProto.toString;
            var symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
            function getRawTag(value) {
                var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
                try {
                    value[symToStringTag] = void 0;
                    var unmasked = true;
                } catch (e) {}
                var result = nativeObjectToString.call(value);
                if (unmasked) if (isOwn) value[symToStringTag] = tag; else delete value[symToStringTag];
                return result;
            }
            const _getRawTag = getRawTag;
            var _objectToString_objectProto = Object.prototype;
            var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;
            function objectToString(value) {
                return _objectToString_nativeObjectToString.call(value);
            }
            const _objectToString = objectToString;
            var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
            var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
            function baseGetTag(value) {
                if (value == null) return value === void 0 ? undefinedTag : nullTag;
                return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
            }
            const _baseGetTag = baseGetTag;
            function isObjectLike(value) {
                return value != null && typeof value == "object";
            }
            const lodash_es_isObjectLike = isObjectLike;
            var symbolTag = "[object Symbol]";
            function isSymbol(value) {
                return typeof value == "symbol" || lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag;
            }
            const lodash_es_isSymbol = isSymbol;
            var NAN = 0 / 0;
            var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
            var reIsBinary = /^0b[01]+$/i;
            var reIsOctal = /^0o[0-7]+$/i;
            var freeParseInt = parseInt;
            function toNumber(value) {
                if (typeof value == "number") return value;
                if (lodash_es_isSymbol(value)) return NAN;
                if (lodash_es_isObject(value)) {
                    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
                    value = lodash_es_isObject(other) ? other + "" : other;
                }
                if (typeof value != "string") return value === 0 ? value : +value;
                value = _baseTrim(value);
                var isBinary = reIsBinary.test(value);
                return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
            }
            const lodash_es_toNumber = toNumber;
            var FUNC_ERROR_TEXT = "Expected a function";
            var nativeMax = Math.max, nativeMin = Math.min;
            function debounce(func, wait, options) {
                var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
                if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
                wait = lodash_es_toNumber(wait) || 0;
                if (lodash_es_isObject(options)) {
                    leading = !!options.leading;
                    maxing = "maxWait" in options;
                    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
                    trailing = "trailing" in options ? !!options.trailing : trailing;
                }
                function invokeFunc(time) {
                    var args = lastArgs, thisArg = lastThis;
                    lastArgs = lastThis = void 0;
                    lastInvokeTime = time;
                    result = func.apply(thisArg, args);
                    return result;
                }
                function leadingEdge(time) {
                    lastInvokeTime = time;
                    timerId = setTimeout(timerExpired, wait);
                    return leading ? invokeFunc(time) : result;
                }
                function remainingWait(time) {
                    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
                    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
                }
                function shouldInvoke(time) {
                    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                }
                function timerExpired() {
                    var time = lodash_es_now();
                    if (shouldInvoke(time)) return trailingEdge(time);
                    timerId = setTimeout(timerExpired, remainingWait(time));
                }
                function trailingEdge(time) {
                    timerId = void 0;
                    if (trailing && lastArgs) return invokeFunc(time);
                    lastArgs = lastThis = void 0;
                    return result;
                }
                function cancel() {
                    if (timerId !== void 0) clearTimeout(timerId);
                    lastInvokeTime = 0;
                    lastArgs = lastCallTime = lastThis = timerId = void 0;
                }
                function flush() {
                    return timerId === void 0 ? result : trailingEdge(lodash_es_now());
                }
                function debounced() {
                    var time = lodash_es_now(), isInvoking = shouldInvoke(time);
                    lastArgs = arguments;
                    lastThis = this;
                    lastCallTime = time;
                    if (isInvoking) {
                        if (timerId === void 0) return leadingEdge(lastCallTime);
                        if (maxing) {
                            clearTimeout(timerId);
                            timerId = setTimeout(timerExpired, wait);
                            return invokeFunc(lastCallTime);
                        }
                    }
                    if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
                    return result;
                }
                debounced.cancel = cancel;
                debounced.flush = flush;
                return debounced;
            }
            const lodash_es_debounce = debounce;
            var throttle_FUNC_ERROR_TEXT = "Expected a function";
            function throttle(func, wait, options) {
                var leading = true, trailing = true;
                if (typeof func != "function") throw new TypeError(throttle_FUNC_ERROR_TEXT);
                if (lodash_es_isObject(options)) {
                    leading = "leading" in options ? !!options.leading : leading;
                    trailing = "trailing" in options ? !!options.trailing : trailing;
                }
                return lodash_es_debounce(func, wait, {
                    leading,
                    maxWait: wait,
                    trailing
                });
            }
            const lodash_es_throttle = throttle;
            var __assign = function() {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var cachedScrollbarWidth = null;
            var cachedDevicePixelRatio = null;
            if (can_use_dom) window.addEventListener("resize", (function() {
                if (cachedDevicePixelRatio !== window.devicePixelRatio) {
                    cachedDevicePixelRatio = window.devicePixelRatio;
                    cachedScrollbarWidth = null;
                }
            }));
            function scrollbarWidth() {
                if (cachedScrollbarWidth === null) {
                    if (typeof document === "undefined") {
                        cachedScrollbarWidth = 0;
                        return cachedScrollbarWidth;
                    }
                    var body = document.body;
                    var box = document.createElement("div");
                    box.classList.add("simplebar-hide-scrollbar");
                    body.appendChild(box);
                    var width = box.getBoundingClientRect().right;
                    body.removeChild(box);
                    cachedScrollbarWidth = width;
                }
                return cachedScrollbarWidth;
            }
            function getElementWindow$1(element) {
                if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) return window;
                return element.ownerDocument.defaultView;
            }
            function getElementDocument$1(element) {
                if (!element || !element.ownerDocument) return document;
                return element.ownerDocument;
            }
            var getOptions$1 = function(obj) {
                var initialObj = {};
                var options = Array.prototype.reduce.call(obj, (function(acc, attribute) {
                    var option = attribute.name.match(/data-simplebar-(.+)/);
                    if (option) {
                        var key = option[1].replace(/\W+(.)/g, (function(_, chr) {
                            return chr.toUpperCase();
                        }));
                        switch (attribute.value) {
                          case "true":
                            acc[key] = true;
                            break;

                          case "false":
                            acc[key] = false;
                            break;

                          case void 0:
                            acc[key] = true;
                            break;

                          default:
                            acc[key] = attribute.value;
                        }
                    }
                    return acc;
                }), initialObj);
                return options;
            };
            function addClasses$1(el, classes) {
                var _a;
                if (!el) return;
                (_a = el.classList).add.apply(_a, classes.split(" "));
            }
            function removeClasses$1(el, classes) {
                if (!el) return;
                classes.split(" ").forEach((function(className) {
                    el.classList.remove(className);
                }));
            }
            function classNamesToQuery$1(classNames) {
                return ".".concat(classNames.split(" ").join("."));
            }
            var helpers = Object.freeze({
                __proto__: null,
                addClasses: addClasses$1,
                classNamesToQuery: classNamesToQuery$1,
                getElementDocument: getElementDocument$1,
                getElementWindow: getElementWindow$1,
                getOptions: getOptions$1,
                removeClasses: removeClasses$1
            });
            var getElementWindow = getElementWindow$1, getElementDocument = getElementDocument$1, getOptions = getOptions$1, addClasses = addClasses$1, removeClasses = removeClasses$1, classNamesToQuery = classNamesToQuery$1;
            var SimpleBarCore = function() {
                function SimpleBarCore(element, options) {
                    if (options === void 0) options = {};
                    var _this = this;
                    this.removePreventClickId = null;
                    this.minScrollbarWidth = 20;
                    this.stopScrollDelay = 175;
                    this.isScrolling = false;
                    this.isMouseEntering = false;
                    this.isDragging = false;
                    this.scrollXTicking = false;
                    this.scrollYTicking = false;
                    this.wrapperEl = null;
                    this.contentWrapperEl = null;
                    this.contentEl = null;
                    this.offsetEl = null;
                    this.maskEl = null;
                    this.placeholderEl = null;
                    this.heightAutoObserverWrapperEl = null;
                    this.heightAutoObserverEl = null;
                    this.rtlHelpers = null;
                    this.scrollbarWidth = 0;
                    this.resizeObserver = null;
                    this.mutationObserver = null;
                    this.elStyles = null;
                    this.isRtl = null;
                    this.mouseX = 0;
                    this.mouseY = 0;
                    this.onMouseMove = function() {};
                    this.onWindowResize = function() {};
                    this.onStopScrolling = function() {};
                    this.onMouseEntered = function() {};
                    this.onScroll = function() {
                        var elWindow = getElementWindow(_this.el);
                        if (!_this.scrollXTicking) {
                            elWindow.requestAnimationFrame(_this.scrollX);
                            _this.scrollXTicking = true;
                        }
                        if (!_this.scrollYTicking) {
                            elWindow.requestAnimationFrame(_this.scrollY);
                            _this.scrollYTicking = true;
                        }
                        if (!_this.isScrolling) {
                            _this.isScrolling = true;
                            addClasses(_this.el, _this.classNames.scrolling);
                        }
                        _this.showScrollbar("x");
                        _this.showScrollbar("y");
                        _this.onStopScrolling();
                    };
                    this.scrollX = function() {
                        if (_this.axis.x.isOverflowing) _this.positionScrollbar("x");
                        _this.scrollXTicking = false;
                    };
                    this.scrollY = function() {
                        if (_this.axis.y.isOverflowing) _this.positionScrollbar("y");
                        _this.scrollYTicking = false;
                    };
                    this._onStopScrolling = function() {
                        removeClasses(_this.el, _this.classNames.scrolling);
                        if (_this.options.autoHide) {
                            _this.hideScrollbar("x");
                            _this.hideScrollbar("y");
                        }
                        _this.isScrolling = false;
                    };
                    this.onMouseEnter = function() {
                        if (!_this.isMouseEntering) {
                            addClasses(_this.el, _this.classNames.mouseEntered);
                            _this.showScrollbar("x");
                            _this.showScrollbar("y");
                            _this.isMouseEntering = true;
                        }
                        _this.onMouseEntered();
                    };
                    this._onMouseEntered = function() {
                        removeClasses(_this.el, _this.classNames.mouseEntered);
                        if (_this.options.autoHide) {
                            _this.hideScrollbar("x");
                            _this.hideScrollbar("y");
                        }
                        _this.isMouseEntering = false;
                    };
                    this._onMouseMove = function(e) {
                        _this.mouseX = e.clientX;
                        _this.mouseY = e.clientY;
                        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) _this.onMouseMoveForAxis("x");
                        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) _this.onMouseMoveForAxis("y");
                    };
                    this.onMouseLeave = function() {
                        _this.onMouseMove.cancel();
                        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) _this.onMouseLeaveForAxis("x");
                        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) _this.onMouseLeaveForAxis("y");
                        _this.mouseX = -1;
                        _this.mouseY = -1;
                    };
                    this._onWindowResize = function() {
                        _this.scrollbarWidth = _this.getScrollbarWidth();
                        _this.hideNativeScrollbar();
                    };
                    this.onPointerEvent = function(e) {
                        if (!_this.axis.x.track.el || !_this.axis.y.track.el || !_this.axis.x.scrollbar.el || !_this.axis.y.scrollbar.el) return;
                        var isWithinTrackXBounds, isWithinTrackYBounds;
                        _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
                        _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
                        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
                        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
                        if (isWithinTrackXBounds || isWithinTrackYBounds) {
                            e.stopPropagation();
                            if (e.type === "pointerdown" && e.pointerType !== "touch") {
                                if (isWithinTrackXBounds) {
                                    _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
                                    if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) _this.onDragStart(e, "x"); else _this.onTrackClick(e, "x");
                                }
                                if (isWithinTrackYBounds) {
                                    _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
                                    if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) _this.onDragStart(e, "y"); else _this.onTrackClick(e, "y");
                                }
                            }
                        }
                    };
                    this.drag = function(e) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                        if (!_this.draggedAxis || !_this.contentWrapperEl) return;
                        var eventOffset;
                        var track = _this.axis[_this.draggedAxis].track;
                        var trackSize = (_b = (_a = track.rect) === null || _a === void 0 ? void 0 : _a[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
                        var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
                        var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
                        var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : "0px", 10);
                        e.preventDefault();
                        e.stopPropagation();
                        if (_this.draggedAxis === "y") eventOffset = e.pageY; else eventOffset = e.pageX;
                        var dragPos = eventOffset - ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) - _this.axis[_this.draggedAxis].dragOffset;
                        dragPos = _this.draggedAxis === "x" && _this.isRtl ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) - scrollbar.size - dragPos : dragPos;
                        var dragPerc = dragPos / (trackSize - scrollbar.size);
                        var scrollPos = dragPerc * (contentSize - hostSize);
                        if (_this.draggedAxis === "x" && _this.isRtl) scrollPos = ((_l = SimpleBarCore.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative) ? -scrollPos : scrollPos;
                        _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
                    };
                    this.onEndDrag = function(e) {
                        _this.isDragging = false;
                        var elDocument = getElementDocument(_this.el);
                        var elWindow = getElementWindow(_this.el);
                        e.preventDefault();
                        e.stopPropagation();
                        removeClasses(_this.el, _this.classNames.dragging);
                        _this.onStopScrolling();
                        elDocument.removeEventListener("mousemove", _this.drag, true);
                        elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
                        _this.removePreventClickId = elWindow.setTimeout((function() {
                            elDocument.removeEventListener("click", _this.preventClick, true);
                            elDocument.removeEventListener("dblclick", _this.preventClick, true);
                            _this.removePreventClickId = null;
                        }));
                    };
                    this.preventClick = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                    };
                    this.el = element;
                    this.options = __assign(__assign({}, SimpleBarCore.defaultOptions), options);
                    this.classNames = __assign(__assign({}, SimpleBarCore.defaultOptions.classNames), options.classNames);
                    this.axis = {
                        x: {
                            scrollOffsetAttr: "scrollLeft",
                            sizeAttr: "width",
                            scrollSizeAttr: "scrollWidth",
                            offsetSizeAttr: "offsetWidth",
                            offsetAttr: "left",
                            overflowAttr: "overflowX",
                            dragOffset: 0,
                            isOverflowing: true,
                            forceVisible: false,
                            track: {
                                size: null,
                                el: null,
                                rect: null,
                                isVisible: false
                            },
                            scrollbar: {
                                size: null,
                                el: null,
                                rect: null,
                                isVisible: false
                            }
                        },
                        y: {
                            scrollOffsetAttr: "scrollTop",
                            sizeAttr: "height",
                            scrollSizeAttr: "scrollHeight",
                            offsetSizeAttr: "offsetHeight",
                            offsetAttr: "top",
                            overflowAttr: "overflowY",
                            dragOffset: 0,
                            isOverflowing: true,
                            forceVisible: false,
                            track: {
                                size: null,
                                el: null,
                                rect: null,
                                isVisible: false
                            },
                            scrollbar: {
                                size: null,
                                el: null,
                                rect: null,
                                isVisible: false
                            }
                        }
                    };
                    if (typeof this.el !== "object" || !this.el.nodeName) throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
                    this.onMouseMove = lodash_es_throttle(this._onMouseMove, 64);
                    this.onWindowResize = lodash_es_debounce(this._onWindowResize, 64, {
                        leading: true
                    });
                    this.onStopScrolling = lodash_es_debounce(this._onStopScrolling, this.stopScrollDelay);
                    this.onMouseEntered = lodash_es_debounce(this._onMouseEntered, this.stopScrollDelay);
                    this.init();
                }
                SimpleBarCore.getRtlHelpers = function() {
                    if (SimpleBarCore.rtlHelpers) return SimpleBarCore.rtlHelpers;
                    var dummyDiv = document.createElement("div");
                    dummyDiv.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
                    var scrollbarDummyEl = dummyDiv.firstElementChild;
                    var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
                    if (!dummyChild) return null;
                    document.body.appendChild(scrollbarDummyEl);
                    scrollbarDummyEl.scrollLeft = 0;
                    var dummyContainerOffset = SimpleBarCore.getOffset(scrollbarDummyEl);
                    var dummyChildOffset = SimpleBarCore.getOffset(dummyChild);
                    scrollbarDummyEl.scrollLeft = -999;
                    var dummyChildOffsetAfterScroll = SimpleBarCore.getOffset(dummyChild);
                    document.body.removeChild(scrollbarDummyEl);
                    SimpleBarCore.rtlHelpers = {
                        isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
                        isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
                    };
                    return SimpleBarCore.rtlHelpers;
                };
                SimpleBarCore.prototype.getScrollbarWidth = function() {
                    try {
                        if (this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) return 0; else return scrollbarWidth();
                    } catch (e) {
                        return scrollbarWidth();
                    }
                };
                SimpleBarCore.getOffset = function(el) {
                    var rect = el.getBoundingClientRect();
                    var elDocument = getElementDocument(el);
                    var elWindow = getElementWindow(el);
                    return {
                        top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
                        left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
                    };
                };
                SimpleBarCore.prototype.init = function() {
                    if (can_use_dom) {
                        this.initDOM();
                        this.rtlHelpers = SimpleBarCore.getRtlHelpers();
                        this.scrollbarWidth = this.getScrollbarWidth();
                        this.recalculate();
                        this.initListeners();
                    }
                };
                SimpleBarCore.prototype.initDOM = function() {
                    var _a, _b;
                    this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
                    this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
                    this.contentEl = this.options.contentNode || this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
                    this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
                    this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
                    this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
                    this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
                    this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
                    this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
                    this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
                    this.axis.x.scrollbar.el = ((_a = this.axis.x.track.el) === null || _a === void 0 ? void 0 : _a.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
                    this.axis.y.scrollbar.el = ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
                    if (!this.options.autoHide) {
                        addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
                        addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
                    }
                };
                SimpleBarCore.prototype.initListeners = function() {
                    var _this = this;
                    var _a;
                    var elWindow = getElementWindow(this.el);
                    this.el.addEventListener("mouseenter", this.onMouseEnter);
                    this.el.addEventListener("pointerdown", this.onPointerEvent, true);
                    this.el.addEventListener("mousemove", this.onMouseMove);
                    this.el.addEventListener("mouseleave", this.onMouseLeave);
                    (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", this.onScroll);
                    elWindow.addEventListener("resize", this.onWindowResize);
                    if (!this.contentEl) return;
                    if (window.ResizeObserver) {
                        var resizeObserverStarted_1 = false;
                        var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
                        this.resizeObserver = new resizeObserver((function() {
                            if (!resizeObserverStarted_1) return;
                            elWindow.requestAnimationFrame((function() {
                                _this.recalculate();
                            }));
                        }));
                        this.resizeObserver.observe(this.el);
                        this.resizeObserver.observe(this.contentEl);
                        elWindow.requestAnimationFrame((function() {
                            resizeObserverStarted_1 = true;
                        }));
                    }
                    this.mutationObserver = new elWindow.MutationObserver((function() {
                        elWindow.requestAnimationFrame((function() {
                            _this.recalculate();
                        }));
                    }));
                    this.mutationObserver.observe(this.contentEl, {
                        childList: true,
                        subtree: true,
                        characterData: true
                    });
                };
                SimpleBarCore.prototype.recalculate = function() {
                    if (!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl) return;
                    var elWindow = getElementWindow(this.el);
                    this.elStyles = elWindow.getComputedStyle(this.el);
                    this.isRtl = this.elStyles.direction === "rtl";
                    var contentElOffsetWidth = this.contentEl.offsetWidth;
                    var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
                    var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
                    var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
                    var elOverflowX = this.elStyles.overflowX;
                    var elOverflowY = this.elStyles.overflowY;
                    this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
                    this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
                    var contentElScrollHeight = this.contentEl.scrollHeight;
                    var contentElScrollWidth = this.contentEl.scrollWidth;
                    this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
                    this.placeholderEl.style.width = isWidthAuto ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px") : "auto";
                    this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
                    var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
                    this.axis.x.isOverflowing = contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
                    this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
                    this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
                    this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
                    this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
                    this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
                    this.hideNativeScrollbar();
                    var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
                    var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                    this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
                    this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
                    this.axis.x.scrollbar.size = this.getScrollbarSize("x");
                    this.axis.y.scrollbar.size = this.getScrollbarSize("y");
                    if (this.axis.x.scrollbar.el) this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
                    if (this.axis.y.scrollbar.el) this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
                    this.positionScrollbar("x");
                    this.positionScrollbar("y");
                    this.toggleTrackVisibility("x");
                    this.toggleTrackVisibility("y");
                };
                SimpleBarCore.prototype.getScrollbarSize = function(axis) {
                    var _a, _b;
                    if (axis === void 0) axis = "y";
                    if (!this.axis[axis].isOverflowing || !this.contentEl) return 0;
                    var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
                    var trackSize = (_b = (_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
                    var scrollbarRatio = trackSize / contentSize;
                    var scrollbarSize;
                    scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
                    if (this.options.scrollbarMaxSize) scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
                    return scrollbarSize;
                };
                SimpleBarCore.prototype.positionScrollbar = function(axis) {
                    var _a, _b, _c;
                    if (axis === void 0) axis = "y";
                    var scrollbar = this.axis[axis].scrollbar;
                    if (!this.axis[axis].isOverflowing || !this.contentWrapperEl || !scrollbar.el || !this.elStyles) return;
                    var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
                    var trackSize = ((_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) || 0;
                    var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
                    var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
                    scrollOffset = axis === "x" && this.isRtl && ((_b = SimpleBarCore.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero) ? -scrollOffset : scrollOffset;
                    if (axis === "x" && this.isRtl) scrollOffset = ((_c = SimpleBarCore.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative) ? scrollOffset : -scrollOffset;
                    var scrollPourcent = scrollOffset / (contentSize - hostSize);
                    var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
                    handleOffset = axis === "x" && this.isRtl ? -handleOffset + (trackSize - scrollbar.size) : handleOffset;
                    scrollbar.el.style.transform = axis === "x" ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
                };
                SimpleBarCore.prototype.toggleTrackVisibility = function(axis) {
                    if (axis === void 0) axis = "y";
                    var track = this.axis[axis].track.el;
                    var scrollbar = this.axis[axis].scrollbar.el;
                    if (!track || !scrollbar || !this.contentWrapperEl) return;
                    if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
                        track.style.visibility = "visible";
                        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
                        this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
                    } else {
                        track.style.visibility = "hidden";
                        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
                        this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
                    }
                    if (this.axis[axis].isOverflowing) scrollbar.style.display = "block"; else scrollbar.style.display = "none";
                };
                SimpleBarCore.prototype.showScrollbar = function(axis) {
                    if (axis === void 0) axis = "y";
                    if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
                        addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
                        this.axis[axis].scrollbar.isVisible = true;
                    }
                };
                SimpleBarCore.prototype.hideScrollbar = function(axis) {
                    if (axis === void 0) axis = "y";
                    if (this.isDragging) return;
                    if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
                        removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
                        this.axis[axis].scrollbar.isVisible = false;
                    }
                };
                SimpleBarCore.prototype.hideNativeScrollbar = function() {
                    if (!this.offsetEl) return;
                    this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
                    this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
                };
                SimpleBarCore.prototype.onMouseMoveForAxis = function(axis) {
                    if (axis === void 0) axis = "y";
                    var currentAxis = this.axis[axis];
                    if (!currentAxis.track.el || !currentAxis.scrollbar.el) return;
                    currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
                    currentAxis.scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
                    if (this.isWithinBounds(currentAxis.track.rect)) {
                        this.showScrollbar(axis);
                        addClasses(currentAxis.track.el, this.classNames.hover);
                        if (this.isWithinBounds(currentAxis.scrollbar.rect)) addClasses(currentAxis.scrollbar.el, this.classNames.hover); else removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
                    } else {
                        removeClasses(currentAxis.track.el, this.classNames.hover);
                        if (this.options.autoHide) this.hideScrollbar(axis);
                    }
                };
                SimpleBarCore.prototype.onMouseLeaveForAxis = function(axis) {
                    if (axis === void 0) axis = "y";
                    removeClasses(this.axis[axis].track.el, this.classNames.hover);
                    removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
                    if (this.options.autoHide) this.hideScrollbar(axis);
                };
                SimpleBarCore.prototype.onDragStart = function(e, axis) {
                    var _a;
                    if (axis === void 0) axis = "y";
                    this.isDragging = true;
                    var elDocument = getElementDocument(this.el);
                    var elWindow = getElementWindow(this.el);
                    var scrollbar = this.axis[axis].scrollbar;
                    var eventOffset = axis === "y" ? e.pageY : e.pageX;
                    this.axis[axis].dragOffset = eventOffset - (((_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) || 0);
                    this.draggedAxis = axis;
                    addClasses(this.el, this.classNames.dragging);
                    elDocument.addEventListener("mousemove", this.drag, true);
                    elDocument.addEventListener("mouseup", this.onEndDrag, true);
                    if (this.removePreventClickId === null) {
                        elDocument.addEventListener("click", this.preventClick, true);
                        elDocument.addEventListener("dblclick", this.preventClick, true);
                    } else {
                        elWindow.clearTimeout(this.removePreventClickId);
                        this.removePreventClickId = null;
                    }
                };
                SimpleBarCore.prototype.onTrackClick = function(e, axis) {
                    var _this = this;
                    var _a, _b, _c, _d;
                    if (axis === void 0) axis = "y";
                    var currentAxis = this.axis[axis];
                    if (!this.options.clickOnTrack || !currentAxis.scrollbar.el || !this.contentWrapperEl) return;
                    e.preventDefault();
                    var elWindow = getElementWindow(this.el);
                    this.axis[axis].scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
                    var scrollbar = this.axis[axis].scrollbar;
                    var scrollbarOffset = (_b = (_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
                    var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : "0px", 10);
                    var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
                    var t = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
                    var dir = t < 0 ? -1 : 1;
                    var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
                    var speed = 40;
                    var scrollTo = function() {
                        if (!_this.contentWrapperEl) return;
                        if (dir === -1) {
                            if (scrolled > scrollSize) {
                                scrolled -= speed;
                                _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                                elWindow.requestAnimationFrame(scrollTo);
                            }
                        } else if (scrolled < scrollSize) {
                            scrolled += speed;
                            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
                            elWindow.requestAnimationFrame(scrollTo);
                        }
                    };
                    scrollTo();
                };
                SimpleBarCore.prototype.getContentElement = function() {
                    return this.contentEl;
                };
                SimpleBarCore.prototype.getScrollElement = function() {
                    return this.contentWrapperEl;
                };
                SimpleBarCore.prototype.removeListeners = function() {
                    var elWindow = getElementWindow(this.el);
                    this.el.removeEventListener("mouseenter", this.onMouseEnter);
                    this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
                    this.el.removeEventListener("mousemove", this.onMouseMove);
                    this.el.removeEventListener("mouseleave", this.onMouseLeave);
                    if (this.contentWrapperEl) this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
                    elWindow.removeEventListener("resize", this.onWindowResize);
                    if (this.mutationObserver) this.mutationObserver.disconnect();
                    if (this.resizeObserver) this.resizeObserver.disconnect();
                    this.onMouseMove.cancel();
                    this.onWindowResize.cancel();
                    this.onStopScrolling.cancel();
                    this.onMouseEntered.cancel();
                };
                SimpleBarCore.prototype.unMount = function() {
                    this.removeListeners();
                };
                SimpleBarCore.prototype.isWithinBounds = function(bbox) {
                    return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
                };
                SimpleBarCore.prototype.findChild = function(el, query) {
                    var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
                    return Array.prototype.filter.call(el.children, (function(child) {
                        return matches.call(child, query);
                    }))[0];
                };
                SimpleBarCore.rtlHelpers = null;
                SimpleBarCore.defaultOptions = {
                    forceVisible: false,
                    clickOnTrack: true,
                    scrollbarMinSize: 25,
                    scrollbarMaxSize: 0,
                    ariaLabel: "scrollable content",
                    classNames: {
                        contentEl: "simplebar-content",
                        contentWrapper: "simplebar-content-wrapper",
                        offset: "simplebar-offset",
                        mask: "simplebar-mask",
                        wrapper: "simplebar-wrapper",
                        placeholder: "simplebar-placeholder",
                        scrollbar: "simplebar-scrollbar",
                        track: "simplebar-track",
                        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                        heightAutoObserverEl: "simplebar-height-auto-observer",
                        visible: "simplebar-visible",
                        horizontal: "simplebar-horizontal",
                        vertical: "simplebar-vertical",
                        hover: "simplebar-hover",
                        dragging: "simplebar-dragging",
                        scrolling: "simplebar-scrolling",
                        scrollable: "simplebar-scrollable",
                        mouseEntered: "simplebar-mouse-entered"
                    },
                    scrollableNode: null,
                    contentNode: null,
                    autoHide: true
                };
                SimpleBarCore.getOptions = getOptions;
                SimpleBarCore.helpers = helpers;
                return SimpleBarCore;
            }();
            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
            }
            var _a = SimpleBarCore.helpers, dist_getOptions = _a.getOptions, dist_addClasses = _a.addClasses;
            var SimpleBar = function(_super) {
                __extends(SimpleBar, _super);
                function SimpleBar() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
                    var _this = _super.apply(this, args) || this;
                    SimpleBar.instances.set(args[0], _this);
                    return _this;
                }
                SimpleBar.initDOMLoadedElements = function() {
                    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
                    window.removeEventListener("load", this.initDOMLoadedElements);
                    Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(el) {
                        if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar.instances.has(el)) new SimpleBar(el, dist_getOptions(el.attributes));
                    }));
                };
                SimpleBar.removeObserver = function() {
                    var _a;
                    (_a = SimpleBar.globalObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
                };
                SimpleBar.prototype.initDOM = function() {
                    var _this = this;
                    var _a, _b, _c;
                    if (!Array.prototype.filter.call(this.el.children, (function(child) {
                        return child.classList.contains(_this.classNames.wrapper);
                    })).length) {
                        this.wrapperEl = document.createElement("div");
                        this.contentWrapperEl = document.createElement("div");
                        this.offsetEl = document.createElement("div");
                        this.maskEl = document.createElement("div");
                        this.contentEl = document.createElement("div");
                        this.placeholderEl = document.createElement("div");
                        this.heightAutoObserverWrapperEl = document.createElement("div");
                        this.heightAutoObserverEl = document.createElement("div");
                        dist_addClasses(this.wrapperEl, this.classNames.wrapper);
                        dist_addClasses(this.contentWrapperEl, this.classNames.contentWrapper);
                        dist_addClasses(this.offsetEl, this.classNames.offset);
                        dist_addClasses(this.maskEl, this.classNames.mask);
                        dist_addClasses(this.contentEl, this.classNames.contentEl);
                        dist_addClasses(this.placeholderEl, this.classNames.placeholder);
                        dist_addClasses(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl);
                        dist_addClasses(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);
                        while (this.el.firstChild) this.contentEl.appendChild(this.el.firstChild);
                        this.contentWrapperEl.appendChild(this.contentEl);
                        this.offsetEl.appendChild(this.contentWrapperEl);
                        this.maskEl.appendChild(this.offsetEl);
                        this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
                        this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
                        this.wrapperEl.appendChild(this.maskEl);
                        this.wrapperEl.appendChild(this.placeholderEl);
                        this.el.appendChild(this.wrapperEl);
                        (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.setAttribute("tabindex", "0");
                        (_b = this.contentWrapperEl) === null || _b === void 0 ? void 0 : _b.setAttribute("role", "region");
                        (_c = this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c.setAttribute("aria-label", this.options.ariaLabel);
                    }
                    if (!this.axis.x.track.el || !this.axis.y.track.el) {
                        var track = document.createElement("div");
                        var scrollbar = document.createElement("div");
                        dist_addClasses(track, this.classNames.track);
                        dist_addClasses(scrollbar, this.classNames.scrollbar);
                        track.appendChild(scrollbar);
                        this.axis.x.track.el = track.cloneNode(true);
                        dist_addClasses(this.axis.x.track.el, this.classNames.horizontal);
                        this.axis.y.track.el = track.cloneNode(true);
                        dist_addClasses(this.axis.y.track.el, this.classNames.vertical);
                        this.el.appendChild(this.axis.x.track.el);
                        this.el.appendChild(this.axis.y.track.el);
                    }
                    SimpleBarCore.prototype.initDOM.call(this);
                    this.el.setAttribute("data-simplebar", "init");
                };
                SimpleBar.prototype.unMount = function() {
                    SimpleBarCore.prototype.unMount.call(this);
                    SimpleBar.instances["delete"](this.el);
                };
                SimpleBar.initHtmlApi = function() {
                    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
                    if (typeof MutationObserver !== "undefined") {
                        this.globalObserver = new MutationObserver(SimpleBar.handleMutations);
                        this.globalObserver.observe(document, {
                            childList: true,
                            subtree: true
                        });
                    }
                    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) window.setTimeout(this.initDOMLoadedElements); else {
                        document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements);
                        window.addEventListener("load", this.initDOMLoadedElements);
                    }
                };
                SimpleBar.handleMutations = function(mutations) {
                    mutations.forEach((function(mutation) {
                        mutation.addedNodes.forEach((function(addedNode) {
                            if (addedNode.nodeType === 1) if (addedNode.hasAttribute("data-simplebar")) !SimpleBar.instances.has(addedNode) && document.documentElement.contains(addedNode) && new SimpleBar(addedNode, dist_getOptions(addedNode.attributes)); else addedNode.querySelectorAll("[data-simplebar]").forEach((function(el) {
                                if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar.instances.has(el) && document.documentElement.contains(el)) new SimpleBar(el, dist_getOptions(el.attributes));
                            }));
                        }));
                        mutation.removedNodes.forEach((function(removedNode) {
                            var _a;
                            if (removedNode.nodeType === 1) if (removedNode.getAttribute("data-simplebar") === "init") !document.documentElement.contains(removedNode) && ((_a = SimpleBar.instances.get(removedNode)) === null || _a === void 0 ? void 0 : _a.unMount()); else Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), (function(el) {
                                var _a;
                                !document.documentElement.contains(el) && ((_a = SimpleBar.instances.get(el)) === null || _a === void 0 ? void 0 : _a.unMount());
                            }));
                        }));
                    }));
                };
                SimpleBar.instances = new WeakMap;
                return SimpleBar;
            }(SimpleBarCore);
            if (can_use_dom) SimpleBar.initHtmlApi();
        },
        467: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Vx: () => Navigation,
                dK: () => Pagination
            });
            __webpack_require__(375);
            var utils = __webpack_require__(44);
            function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
                if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                    if (!params[key] && params.auto === true) {
                        let element = (0, utils.e)(swiper.el, `.${checkProps[key]}`)[0];
                        if (!element) {
                            element = (0, utils.c)("div", checkProps[key]);
                            element.className = checkProps[key];
                            swiper.el.append(element);
                        }
                        params[key] = element;
                        originalParams[key] = element;
                    }
                }));
                return params;
            }
            function Navigation(_ref) {
                let {swiper, extendParams, on, emit} = _ref;
                extendParams({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: false,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                });
                swiper.navigation = {
                    nextEl: null,
                    prevEl: null
                };
                function getEl(el) {
                    let res;
                    if (el && typeof el === "string" && swiper.isElement) {
                        res = swiper.el.querySelector(el);
                        if (res) return res;
                    }
                    if (el) {
                        if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                        if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); else if (res && res.length === 1) res = res[0];
                    }
                    if (el && !res) return el;
                    return res;
                }
                function toggleEl(el, disabled) {
                    const params = swiper.params.navigation;
                    el = (0, utils.m)(el);
                    el.forEach((subEl => {
                        if (subEl) {
                            subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                            if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                            if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                        }
                    }));
                }
                function update() {
                    const {nextEl, prevEl} = swiper.navigation;
                    if (swiper.params.loop) {
                        toggleEl(prevEl, false);
                        toggleEl(nextEl, false);
                        return;
                    }
                    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
                }
                function onPrevClick(e) {
                    e.preventDefault();
                    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                    swiper.slidePrev();
                    emit("navigationPrev");
                }
                function onNextClick(e) {
                    e.preventDefault();
                    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                    swiper.slideNext();
                    emit("navigationNext");
                }
                function init() {
                    const params = swiper.params.navigation;
                    swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    });
                    if (!(params.nextEl || params.prevEl)) return;
                    let nextEl = getEl(params.nextEl);
                    let prevEl = getEl(params.prevEl);
                    Object.assign(swiper.navigation, {
                        nextEl,
                        prevEl
                    });
                    nextEl = (0, utils.m)(nextEl);
                    prevEl = (0, utils.m)(prevEl);
                    const initButton = (el, dir) => {
                        if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                        if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                    };
                    nextEl.forEach((el => initButton(el, "next")));
                    prevEl.forEach((el => initButton(el, "prev")));
                }
                function destroy() {
                    let {nextEl, prevEl} = swiper.navigation;
                    nextEl = (0, utils.m)(nextEl);
                    prevEl = (0, utils.m)(prevEl);
                    const destroyButton = (el, dir) => {
                        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                    };
                    nextEl.forEach((el => destroyButton(el, "next")));
                    prevEl.forEach((el => destroyButton(el, "prev")));
                }
                on("init", (() => {
                    if (swiper.params.navigation.enabled === false) disable(); else {
                        init();
                        update();
                    }
                }));
                on("toEdge fromEdge lock unlock", (() => {
                    update();
                }));
                on("destroy", (() => {
                    destroy();
                }));
                on("enable disable", (() => {
                    let {nextEl, prevEl} = swiper.navigation;
                    nextEl = (0, utils.m)(nextEl);
                    prevEl = (0, utils.m)(prevEl);
                    if (swiper.enabled) {
                        update();
                        return;
                    }
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
                }));
                on("click", ((_s, e) => {
                    let {nextEl, prevEl} = swiper.navigation;
                    nextEl = (0, utils.m)(nextEl);
                    prevEl = (0, utils.m)(prevEl);
                    const targetEl = e.target;
                    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
                    if (swiper.isElement && !targetIsButton) {
                        const path = e.path || e.composedPath && e.composedPath();
                        if (path) targetIsButton = path.find((pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl)));
                    }
                    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
                        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                        let isHidden;
                        if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                        if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                        [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                    }
                }));
                const enable = () => {
                    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                    init();
                    update();
                };
                const disable = () => {
                    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                    destroy();
                };
                Object.assign(swiper.navigation, {
                    enable,
                    disable,
                    update,
                    init,
                    destroy
                });
            }
            function classes_to_selector_classesToSelector(classes) {
                if (classes === void 0) classes = "";
                return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
            }
            function Pagination(_ref) {
                let {swiper, extendParams, on, emit} = _ref;
                const pfx = "swiper-pagination";
                extendParams({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: false,
                        hideOnClick: false,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: false,
                        type: "bullets",
                        dynamicBullets: false,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: number => number,
                        formatFractionTotal: number => number,
                        bulletClass: `${pfx}-bullet`,
                        bulletActiveClass: `${pfx}-bullet-active`,
                        modifierClass: `${pfx}-`,
                        currentClass: `${pfx}-current`,
                        totalClass: `${pfx}-total`,
                        hiddenClass: `${pfx}-hidden`,
                        progressbarFillClass: `${pfx}-progressbar-fill`,
                        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                        clickableClass: `${pfx}-clickable`,
                        lockClass: `${pfx}-lock`,
                        horizontalClass: `${pfx}-horizontal`,
                        verticalClass: `${pfx}-vertical`,
                        paginationDisabledClass: `${pfx}-disabled`
                    }
                });
                swiper.pagination = {
                    el: null,
                    bullets: []
                };
                let bulletSize;
                let dynamicBulletIndex = 0;
                function isPaginationDisabled() {
                    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
                }
                function setSideBullets(bulletEl, position) {
                    const {bulletActiveClass} = swiper.params.pagination;
                    if (!bulletEl) return;
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) {
                        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                        if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                    }
                }
                function onBulletClick(e) {
                    const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                    if (!bulletEl) return;
                    e.preventDefault();
                    const index = (0, utils.h)(bulletEl) * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) {
                        if (swiper.realIndex === index) return;
                        swiper.slideToLoop(index);
                    } else swiper.slideTo(index);
                }
                function update() {
                    const rtl = swiper.rtl;
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    let el = swiper.pagination.el;
                    el = (0, utils.m)(el);
                    let current;
                    let previousIndex;
                    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.loop) {
                        previousIndex = swiper.previousRealIndex || 0;
                        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                    } else if (typeof swiper.snapIndex !== "undefined") {
                        current = swiper.snapIndex;
                        previousIndex = swiper.previousSnapIndex;
                    } else {
                        previousIndex = swiper.previousIndex || 0;
                        current = swiper.activeIndex || 0;
                    }
                    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                        const bullets = swiper.pagination.bullets;
                        let firstIndex;
                        let lastIndex;
                        let midIndex;
                        if (params.dynamicBullets) {
                            bulletSize = (0, utils.f)(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                            el.forEach((subEl => {
                                subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                            }));
                            if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                                dynamicBulletIndex += current - (previousIndex || 0);
                                if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                            }
                            firstIndex = Math.max(current - dynamicBulletIndex, 0);
                            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                            midIndex = (lastIndex + firstIndex) / 2;
                        }
                        bullets.forEach((bulletEl => {
                            const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                            bulletEl.classList.remove(...classesToRemove);
                        }));
                        if (el.length > 1) bullets.forEach((bullet => {
                            const bulletIndex = (0, utils.h)(bullet);
                            if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                            if (params.dynamicBullets) {
                                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                                if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                                if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                            }
                        })); else {
                            const bullet = bullets[current];
                            if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                            if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                                bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                            }));
                            if (params.dynamicBullets) {
                                const firstDisplayedBullet = bullets[firstIndex];
                                const lastDisplayedBullet = bullets[lastIndex];
                                for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                                setSideBullets(firstDisplayedBullet, "prev");
                                setSideBullets(lastDisplayedBullet, "next");
                            }
                        }
                        if (params.dynamicBullets) {
                            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                            const offsetProp = rtl ? "right" : "left";
                            bullets.forEach((bullet => {
                                bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                            }));
                        }
                    }
                    el.forEach(((subEl, subElIndex) => {
                        if (params.type === "fraction") {
                            subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                                fractionEl.textContent = params.formatFractionCurrent(current + 1);
                            }));
                            subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                                totalEl.textContent = params.formatFractionTotal(total);
                            }));
                        }
                        if (params.type === "progressbar") {
                            let progressbarDirection;
                            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                            const scale = (current + 1) / total;
                            let scaleX = 1;
                            let scaleY = 1;
                            if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                            subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                                progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                                progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                            }));
                        }
                        if (params.type === "custom" && params.renderCustom) {
                            subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                            if (subElIndex === 0) emit("paginationRender", subEl);
                        } else {
                            if (subElIndex === 0) emit("paginationRender", subEl);
                            emit("paginationUpdate", subEl);
                        }
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }));
                }
                function render() {
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                    let el = swiper.pagination.el;
                    el = (0, utils.m)(el);
                    let paginationHTML = "";
                    if (params.type === "bullets") {
                        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                        for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                    }
                    if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    swiper.pagination.bullets = [];
                    el.forEach((subEl => {
                        if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                        if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                    }));
                    if (params.type !== "custom") emit("paginationRender", el[0]);
                }
                function init() {
                    swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const params = swiper.params.pagination;
                    if (!params.el) return;
                    let el;
                    if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                    if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                    if (!el) el = params.el;
                    if (!el || el.length === 0) return;
                    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                        el = [ ...swiper.el.querySelectorAll(params.el) ];
                        if (el.length > 1) el = el.filter((subEl => {
                            if ((0, utils.a)(subEl, ".swiper")[0] !== swiper.el) return false;
                            return true;
                        }))[0];
                    }
                    if (Array.isArray(el) && el.length === 1) el = el[0];
                    Object.assign(swiper.pagination, {
                        el
                    });
                    el = (0, utils.m)(el);
                    el.forEach((subEl => {
                        if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                        subEl.classList.add(params.modifierClass + params.type);
                        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.type === "bullets" && params.dynamicBullets) {
                            subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                            dynamicBulletIndex = 0;
                            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                        }
                        if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                        if (params.clickable) subEl.addEventListener("click", onBulletClick);
                        if (!swiper.enabled) subEl.classList.add(params.lockClass);
                    }));
                }
                function destroy() {
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    let el = swiper.pagination.el;
                    if (el) {
                        el = (0, utils.m)(el);
                        el.forEach((subEl => {
                            subEl.classList.remove(params.hiddenClass);
                            subEl.classList.remove(params.modifierClass + params.type);
                            subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                            if (params.clickable) {
                                subEl.classList.remove(...(params.clickableClass || "").split(" "));
                                subEl.removeEventListener("click", onBulletClick);
                            }
                        }));
                    }
                    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
                }
                on("changeDirection", (() => {
                    if (!swiper.pagination || !swiper.pagination.el) return;
                    const params = swiper.params.pagination;
                    let {el} = swiper.pagination;
                    el = (0, utils.m)(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.horizontalClass, params.verticalClass);
                        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    }));
                }));
                on("init", (() => {
                    if (swiper.params.pagination.enabled === false) disable(); else {
                        init();
                        render();
                        update();
                    }
                }));
                on("activeIndexChange", (() => {
                    if (typeof swiper.snapIndex === "undefined") update();
                }));
                on("snapIndexChange", (() => {
                    update();
                }));
                on("snapGridLengthChange", (() => {
                    render();
                    update();
                }));
                on("destroy", (() => {
                    destroy();
                }));
                on("enable disable", (() => {
                    let {el} = swiper.pagination;
                    if (el) {
                        el = (0, utils.m)(el);
                        el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                    }
                }));
                on("lock unlock", (() => {
                    update();
                }));
                on("click", ((_s, e) => {
                    const targetEl = e.target;
                    const el = (0, utils.m)(swiper.pagination.el);
                    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                        if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                        el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                    }
                }));
                const enable = () => {
                    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                    let {el} = swiper.pagination;
                    if (el) {
                        el = (0, utils.m)(el);
                        el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                    }
                    init();
                    render();
                    update();
                };
                const disable = () => {
                    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                    let {el} = swiper.pagination;
                    if (el) {
                        el = (0, utils.m)(el);
                        el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                    }
                    destroy();
                };
                Object.assign(swiper.pagination, {
                    enable,
                    disable,
                    render,
                    update,
                    init,
                    destroy
                });
            }
        },
        375: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                a: () => getWindow,
                g: () => getDocument
            });
            function isObject(obj) {
                return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
            }
            function extend(target, src) {
                if (target === void 0) target = {};
                if (src === void 0) src = {};
                Object.keys(src).forEach((key => {
                    if (typeof target[key] === "undefined") target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
                }));
            }
            const ssrDocument = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector() {
                    return null;
                },
                querySelectorAll() {
                    return [];
                },
                getElementById() {
                    return null;
                },
                createEvent() {
                    return {
                        initEvent() {}
                    };
                },
                createElement() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute() {},
                        getElementsByTagName() {
                            return [];
                        }
                    };
                },
                createElementNS() {
                    return {};
                },
                importNode() {
                    return null;
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };
            function getDocument() {
                const doc = typeof document !== "undefined" ? document : {};
                extend(doc, ssrDocument);
                return doc;
            }
            const ssrWindow = {
                document: ssrDocument,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function CustomEvent() {
                    return this;
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle() {
                    return {
                        getPropertyValue() {
                            return "";
                        }
                    };
                },
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia() {
                    return {};
                },
                requestAnimationFrame(callback) {
                    if (typeof setTimeout === "undefined") {
                        callback();
                        return null;
                    }
                    return setTimeout(callback, 0);
                },
                cancelAnimationFrame(id) {
                    if (typeof setTimeout === "undefined") return;
                    clearTimeout(id);
                }
            };
            function getWindow() {
                const win = typeof window !== "undefined" ? window : {};
                extend(win, ssrWindow);
                return win;
            }
        },
        44: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                a: () => elementParents,
                c: () => createElement,
                d: () => now,
                e: () => elementChildren,
                f: () => elementOuterSize,
                h: () => elementIndex,
                j: () => getTranslate,
                m: () => makeElementsArray,
                n: () => nextTick,
                o: () => elementStyle,
                p: () => elementNextAll,
                q: () => elementPrevAll,
                r: () => animateCSSModeScroll,
                s: () => setCSSProperty,
                t: () => showWarning,
                u: () => extend,
                v: () => deleteProps
            });
            var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(375);
            function classesToTokens(classes) {
                if (classes === void 0) classes = "";
                return classes.trim().split(" ").filter((c => !!c.trim()));
            }
            function deleteProps(obj) {
                const object = obj;
                Object.keys(object).forEach((key => {
                    try {
                        object[key] = null;
                    } catch (e) {}
                    try {
                        delete object[key];
                    } catch (e) {}
                }));
            }
            function nextTick(callback, delay) {
                if (delay === void 0) delay = 0;
                return setTimeout(callback, delay);
            }
            function now() {
                return Date.now();
            }
            function getComputedStyle(el) {
                const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
                let style;
                if (window.getComputedStyle) style = window.getComputedStyle(el, null);
                if (!style && el.currentStyle) style = el.currentStyle;
                if (!style) style = el.style;
                return style;
            }
            function getTranslate(el, axis) {
                if (axis === void 0) axis = "x";
                const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
                let matrix;
                let curTransform;
                let transformMatrix;
                const curStyle = getComputedStyle(el);
                if (window.WebKitCSSMatrix) {
                    curTransform = curStyle.transform || curStyle.webkitTransform;
                    if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                    transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
                } else {
                    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                    matrix = transformMatrix.toString().split(",");
                }
                if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
                if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
                return curTransform || 0;
            }
            function isObject(o) {
                return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
            }
            function isNode(node) {
                if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
                return node && (node.nodeType === 1 || node.nodeType === 11);
            }
            function extend() {
                const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
                const noExtend = [ "__proto__", "constructor", "prototype" ];
                for (let i = 1; i < arguments.length; i += 1) {
                    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                        const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                            const nextKey = keysArray[nextIndex];
                            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                            if (desc !== void 0 && desc.enumerable) if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else extend(to[nextKey], nextSource[nextKey]); else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                                to[nextKey] = {};
                                if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else extend(to[nextKey], nextSource[nextKey]);
                            } else to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
                return to;
            }
            function setCSSProperty(el, varName, varValue) {
                el.style.setProperty(varName, varValue);
            }
            function animateCSSModeScroll(_ref) {
                let {swiper, targetPosition, side} = _ref;
                const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
                const startPosition = -swiper.translate;
                let startTime = null;
                let time;
                const duration = swiper.params.speed;
                swiper.wrapperEl.style.scrollSnapType = "none";
                window.cancelAnimationFrame(swiper.cssModeFrameID);
                const dir = targetPosition > startPosition ? "next" : "prev";
                const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
                const animate = () => {
                    time = (new Date).getTime();
                    if (startTime === null) startTime = time;
                    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                    const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                    if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                    if (isOutOfBound(currentPosition, targetPosition)) {
                        swiper.wrapperEl.style.overflow = "hidden";
                        swiper.wrapperEl.style.scrollSnapType = "";
                        setTimeout((() => {
                            swiper.wrapperEl.style.overflow = "";
                            swiper.wrapperEl.scrollTo({
                                [side]: currentPosition
                            });
                        }));
                        window.cancelAnimationFrame(swiper.cssModeFrameID);
                        return;
                    }
                    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
                };
                animate();
            }
            function elementChildren(element, selector) {
                if (selector === void 0) selector = "";
                return [ ...element.children ].filter((el => el.matches(selector)));
            }
            function showWarning(text) {
                try {
                    console.warn(text);
                    return;
                } catch (err) {}
            }
            function createElement(tag, classes) {
                if (classes === void 0) classes = [];
                const el = document.createElement(tag);
                el.classList.add(...Array.isArray(classes) ? classes : classesToTokens(classes));
                return el;
            }
            function elementPrevAll(el, selector) {
                const prevEls = [];
                while (el.previousElementSibling) {
                    const prev = el.previousElementSibling;
                    if (selector) {
                        if (prev.matches(selector)) prevEls.push(prev);
                    } else prevEls.push(prev);
                    el = prev;
                }
                return prevEls;
            }
            function elementNextAll(el, selector) {
                const nextEls = [];
                while (el.nextElementSibling) {
                    const next = el.nextElementSibling;
                    if (selector) {
                        if (next.matches(selector)) nextEls.push(next);
                    } else nextEls.push(next);
                    el = next;
                }
                return nextEls;
            }
            function elementStyle(el, prop) {
                const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
                return window.getComputedStyle(el, null).getPropertyValue(prop);
            }
            function elementIndex(el) {
                let child = el;
                let i;
                if (child) {
                    i = 0;
                    while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                    return i;
                }
                return;
            }
            function elementParents(el, selector) {
                const parents = [];
                let parent = el.parentElement;
                while (parent) {
                    if (selector) {
                        if (parent.matches(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentElement;
                }
                return parents;
            }
            function elementOuterSize(el, size, includeMargins) {
                const window = (0, _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
                if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
                return el.offsetWidth;
            }
            function makeElementsArray(el) {
                return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
            }
        },
        236: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                A: () => Swiper
            });
            var ssr_window_esm = __webpack_require__(375);
            var utils = __webpack_require__(44);
            let support;
            function calcSupport() {
                const window = (0, ssr_window_esm.a)();
                const document = (0, ssr_window_esm.g)();
                return {
                    smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                    touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
                };
            }
            function getSupport() {
                if (!support) support = calcSupport();
                return support;
            }
            let deviceCached;
            function calcDevice(_temp) {
                let {userAgent} = _temp === void 0 ? {} : _temp;
                const support = getSupport();
                const window = (0, ssr_window_esm.a)();
                const platform = window.navigator.platform;
                const ua = userAgent || window.navigator.userAgent;
                const device = {
                    ios: false,
                    android: false
                };
                const screenWidth = window.screen.width;
                const screenHeight = window.screen.height;
                const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
                let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
                const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
                const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                const windows = platform === "Win32";
                let macos = platform === "MacIntel";
                const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
                if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                    ipad = ua.match(/(Version)\/([\d.]+)/);
                    if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                    macos = false;
                }
                if (android && !windows) {
                    device.os = "android";
                    device.android = true;
                }
                if (ipad || iphone || ipod) {
                    device.os = "ios";
                    device.ios = true;
                }
                return device;
            }
            function getDevice(overrides) {
                if (overrides === void 0) overrides = {};
                if (!deviceCached) deviceCached = calcDevice(overrides);
                return deviceCached;
            }
            let browser;
            function calcBrowser() {
                const window = (0, ssr_window_esm.a)();
                const device = getDevice();
                let needPerspectiveFix = false;
                function isSafari() {
                    const ua = window.navigator.userAgent.toLowerCase();
                    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
                }
                if (isSafari()) {
                    const ua = String(window.navigator.userAgent);
                    if (ua.includes("Version/")) {
                        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                    }
                }
                const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
                const isSafariBrowser = isSafari();
                const need3dFix = isSafariBrowser || isWebView && device.ios;
                return {
                    isSafari: needPerspectiveFix || isSafariBrowser,
                    needPerspectiveFix,
                    need3dFix,
                    isWebView
                };
            }
            function getBrowser() {
                if (!browser) browser = calcBrowser();
                return browser;
            }
            function Resize(_ref) {
                let {swiper, on, emit} = _ref;
                const window = (0, ssr_window_esm.a)();
                let observer = null;
                let animationFrame = null;
                const resizeHandler = () => {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    emit("beforeResize");
                    emit("resize");
                };
                const createObserver = () => {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    observer = new ResizeObserver((entries => {
                        animationFrame = window.requestAnimationFrame((() => {
                            const {width, height} = swiper;
                            let newWidth = width;
                            let newHeight = height;
                            entries.forEach((_ref2 => {
                                let {contentBoxSize, contentRect, target} = _ref2;
                                if (target && target !== swiper.el) return;
                                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                            }));
                            if (newWidth !== width || newHeight !== height) resizeHandler();
                        }));
                    }));
                    observer.observe(swiper.el);
                };
                const removeObserver = () => {
                    if (animationFrame) window.cancelAnimationFrame(animationFrame);
                    if (observer && observer.unobserve && swiper.el) {
                        observer.unobserve(swiper.el);
                        observer = null;
                    }
                };
                const orientationChangeHandler = () => {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    emit("orientationchange");
                };
                on("init", (() => {
                    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                        createObserver();
                        return;
                    }
                    window.addEventListener("resize", resizeHandler);
                    window.addEventListener("orientationchange", orientationChangeHandler);
                }));
                on("destroy", (() => {
                    removeObserver();
                    window.removeEventListener("resize", resizeHandler);
                    window.removeEventListener("orientationchange", orientationChangeHandler);
                }));
            }
            function Observer(_ref) {
                let {swiper, extendParams, on, emit} = _ref;
                const observers = [];
                const window = (0, ssr_window_esm.a)();
                const attach = function(target, options) {
                    if (options === void 0) options = {};
                    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                    const observer = new ObserverFunc((mutations => {
                        if (swiper.__preventObserver__) return;
                        if (mutations.length === 1) {
                            emit("observerUpdate", mutations[0]);
                            return;
                        }
                        const observerUpdate = function observerUpdate() {
                            emit("observerUpdate", mutations[0]);
                        };
                        if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                    }));
                    observer.observe(target, {
                        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                        childList: typeof options.childList === "undefined" ? true : options.childList,
                        characterData: typeof options.characterData === "undefined" ? true : options.characterData
                    });
                    observers.push(observer);
                };
                const init = () => {
                    if (!swiper.params.observer) return;
                    if (swiper.params.observeParents) {
                        const containerParents = (0, utils.a)(swiper.hostEl);
                        for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                    }
                    attach(swiper.hostEl, {
                        childList: swiper.params.observeSlideChildren
                    });
                    attach(swiper.wrapperEl, {
                        attributes: false
                    });
                };
                const destroy = () => {
                    observers.forEach((observer => {
                        observer.disconnect();
                    }));
                    observers.splice(0, observers.length);
                };
                extendParams({
                    observer: false,
                    observeParents: false,
                    observeSlideChildren: false
                });
                on("init", init);
                on("destroy", destroy);
            }
            var eventsEmitter = {
                on(events, handler, priority) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (typeof handler !== "function") return self;
                    const method = priority ? "unshift" : "push";
                    events.split(" ").forEach((event => {
                        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                        self.eventsListeners[event][method](handler);
                    }));
                    return self;
                },
                once(events, handler, priority) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (typeof handler !== "function") return self;
                    function onceHandler() {
                        self.off(events, onceHandler);
                        if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        handler.apply(self, args);
                    }
                    onceHandler.__emitterProxy = handler;
                    return self.on(events, onceHandler, priority);
                },
                onAny(handler, priority) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (typeof handler !== "function") return self;
                    const method = priority ? "unshift" : "push";
                    if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                    return self;
                },
                offAny(handler) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (!self.eventsAnyListeners) return self;
                    const index = self.eventsAnyListeners.indexOf(handler);
                    if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                    return self;
                },
                off(events, handler) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (!self.eventsListeners) return self;
                    events.split(" ").forEach((event => {
                        if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                        }));
                    }));
                    return self;
                },
                emit() {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (!self.eventsListeners) return self;
                    let events;
                    let data;
                    let context;
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    if (typeof args[0] === "string" || Array.isArray(args[0])) {
                        events = args[0];
                        data = args.slice(1, args.length);
                        context = self;
                    } else {
                        events = args[0].events;
                        data = args[0].data;
                        context = args[0].context || self;
                    }
                    data.unshift(context);
                    const eventsArray = Array.isArray(events) ? events : events.split(" ");
                    eventsArray.forEach((event => {
                        if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                            eventHandler.apply(context, [ event, ...data ]);
                        }));
                        if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                            eventHandler.apply(context, data);
                        }));
                    }));
                    return self;
                }
            };
            function updateSize() {
                const swiper = this;
                let width;
                let height;
                const el = swiper.el;
                if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
                if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
                if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
                width = width - parseInt((0, utils.o)(el, "padding-left") || 0, 10) - parseInt((0, 
                utils.o)(el, "padding-right") || 0, 10);
                height = height - parseInt((0, utils.o)(el, "padding-top") || 0, 10) - parseInt((0, 
                utils.o)(el, "padding-bottom") || 0, 10);
                if (Number.isNaN(width)) width = 0;
                if (Number.isNaN(height)) height = 0;
                Object.assign(swiper, {
                    width,
                    height,
                    size: swiper.isHorizontal() ? width : height
                });
            }
            function updateSlides() {
                const swiper = this;
                function getDirectionPropertyValue(node, label) {
                    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
                }
                const params = swiper.params;
                const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
                const slides = (0, utils.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
                const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
                let snapGrid = [];
                const slidesGrid = [];
                const slidesSizesGrid = [];
                let offsetBefore = params.slidesOffsetBefore;
                if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
                let offsetAfter = params.slidesOffsetAfter;
                if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
                const previousSnapGridLength = swiper.snapGrid.length;
                const previousSlidesGridLength = swiper.slidesGrid.length;
                let spaceBetween = params.spaceBetween;
                let slidePosition = -offsetBefore;
                let prevSlideSize = 0;
                let index = 0;
                if (typeof swiperSize === "undefined") return;
                if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
                swiper.virtualSize = -spaceBetween;
                slides.forEach((slideEl => {
                    if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                    slideEl.style.marginBottom = "";
                    slideEl.style.marginTop = "";
                }));
                if (params.centeredSlides && params.cssMode) {
                    (0, utils.s)(wrapperEl, "--swiper-centered-offset-before", "");
                    (0, utils.s)(wrapperEl, "--swiper-centered-offset-after", "");
                }
                const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
                if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
                let slideSize;
                const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
                for (let i = 0; i < slidesLength; i += 1) {
                    slideSize = 0;
                    let slide;
                    if (slides[i]) slide = slides[i];
                    if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                    if (slides[i] && (0, utils.o)(slide, "display") === "none") continue;
                    if (params.slidesPerView === "auto") {
                        if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                        const slideStyles = getComputedStyle(slide);
                        const currentTransform = slide.style.transform;
                        const currentWebKitTransform = slide.style.webkitTransform;
                        if (currentTransform) slide.style.transform = "none";
                        if (currentWebKitTransform) slide.style.webkitTransform = "none";
                        if (params.roundLengths) slideSize = swiper.isHorizontal() ? (0, utils.f)(slide, "width", true) : (0, 
                        utils.f)(slide, "height", true); else {
                            const width = getDirectionPropertyValue(slideStyles, "width");
                            const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                            const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                            const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                            const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                            const boxSizing = slideStyles.getPropertyValue("box-sizing");
                            if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                                const {clientWidth, offsetWidth} = slide;
                                slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                            }
                        }
                        if (currentTransform) slide.style.transform = currentTransform;
                        if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                        if (params.roundLengths) slideSize = Math.floor(slideSize);
                    } else {
                        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                        if (params.roundLengths) slideSize = Math.floor(slideSize);
                        if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                    }
                    if (slides[i]) slides[i].swiperSlideSize = slideSize;
                    slidesSizesGrid.push(slideSize);
                    if (params.centeredSlides) {
                        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                        slidesGrid.push(slidePosition);
                    } else {
                        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                        slidesGrid.push(slidePosition);
                        slidePosition = slidePosition + slideSize + spaceBetween;
                    }
                    swiper.virtualSize += slideSize + spaceBetween;
                    prevSlideSize = slideSize;
                    index += 1;
                }
                swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
                if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
                if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
                if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
                if (!params.centeredSlides) {
                    const newSlidesGrid = [];
                    for (let i = 0; i < snapGrid.length; i += 1) {
                        let slidesGridItem = snapGrid[i];
                        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                        if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                    }
                    snapGrid = newSlidesGrid;
                    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
                }
                if (isVirtual && params.loop) {
                    const size = slidesSizesGrid[0] + spaceBetween;
                    if (params.slidesPerGroup > 1) {
                        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                        const groupSize = size * params.slidesPerGroup;
                        for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                    }
                    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                        if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                        swiper.virtualSize += size;
                    }
                }
                if (snapGrid.length === 0) snapGrid = [ 0 ];
                if (spaceBetween !== 0) {
                    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                    slides.filter(((_, slideIndex) => {
                        if (!params.cssMode || params.loop) return true;
                        if (slideIndex === slides.length - 1) return false;
                        return true;
                    })).forEach((slideEl => {
                        slideEl.style[key] = `${spaceBetween}px`;
                    }));
                }
                if (params.centeredSlides && params.centeredSlidesBounds) {
                    let allSlidesSize = 0;
                    slidesSizesGrid.forEach((slideSizeValue => {
                        allSlidesSize += slideSizeValue + (spaceBetween || 0);
                    }));
                    allSlidesSize -= spaceBetween;
                    const maxSnap = allSlidesSize - swiperSize;
                    snapGrid = snapGrid.map((snap => {
                        if (snap <= 0) return -offsetBefore;
                        if (snap > maxSnap) return maxSnap + offsetAfter;
                        return snap;
                    }));
                }
                if (params.centerInsufficientSlides) {
                    let allSlidesSize = 0;
                    slidesSizesGrid.forEach((slideSizeValue => {
                        allSlidesSize += slideSizeValue + (spaceBetween || 0);
                    }));
                    allSlidesSize -= spaceBetween;
                    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
                    if (allSlidesSize + offsetSize < swiperSize) {
                        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
                        snapGrid.forEach(((snap, snapIndex) => {
                            snapGrid[snapIndex] = snap - allSlidesOffset;
                        }));
                        slidesGrid.forEach(((snap, snapIndex) => {
                            slidesGrid[snapIndex] = snap + allSlidesOffset;
                        }));
                    }
                }
                Object.assign(swiper, {
                    slides,
                    snapGrid,
                    slidesGrid,
                    slidesSizesGrid
                });
                if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                    (0, utils.s)(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                    (0, utils.s)(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                    const addToSnapGrid = -swiper.snapGrid[0];
                    const addToSlidesGrid = -swiper.slidesGrid[0];
                    swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                    swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
                }
                if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
                if (snapGrid.length !== previousSnapGridLength) {
                    if (swiper.params.watchOverflow) swiper.checkOverflow();
                    swiper.emit("snapGridLengthChange");
                }
                if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
                if (params.watchSlidesProgress) swiper.updateSlidesOffset();
                swiper.emit("slidesUpdated");
                if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                    if (slidesLength <= params.maxBackfaceHiddenSlides) {
                        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                    } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
                }
            }
            function updateAutoHeight(speed) {
                const swiper = this;
                const activeSlides = [];
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                let newHeight = 0;
                let i;
                if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
                const getSlideByIndex = index => {
                    if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                    return swiper.slides[index];
                };
                if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                    activeSlides.push(slide);
                })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    const index = swiper.activeIndex + i;
                    if (index > swiper.slides.length && !isVirtual) break;
                    activeSlides.push(getSlideByIndex(index));
                } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
                for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                    const height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
                if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
            }
            function updateSlidesOffset() {
                const swiper = this;
                const slides = swiper.slides;
                const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
                for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
            }
            const toggleSlideClasses$1 = (slideEl, condition, className) => {
                if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
            };
            function updateSlidesProgress(translate) {
                if (translate === void 0) translate = this && this.translate || 0;
                const swiper = this;
                const params = swiper.params;
                const {slides, rtlTranslate: rtl, snapGrid} = swiper;
                if (slides.length === 0) return;
                if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
                let offsetCenter = -translate;
                if (rtl) offsetCenter = translate;
                swiper.visibleSlidesIndexes = [];
                swiper.visibleSlides = [];
                let spaceBetween = params.spaceBetween;
                if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
                for (let i = 0; i < slides.length; i += 1) {
                    const slide = slides[i];
                    let slideOffset = slide.swiperSlideOffset;
                    if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                    const slideBefore = -(offsetCenter - slideOffset);
                    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                    if (isVisible) {
                        swiper.visibleSlides.push(slide);
                        swiper.visibleSlidesIndexes.push(i);
                    }
                    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
                    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
                    slide.progress = rtl ? -slideProgress : slideProgress;
                    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
                }
            }
            function updateProgress(translate) {
                const swiper = this;
                if (typeof translate === "undefined") {
                    const multiplier = swiper.rtlTranslate ? -1 : 1;
                    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
                }
                const params = swiper.params;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                let {progress, isBeginning, isEnd, progressLoop} = swiper;
                const wasBeginning = isBeginning;
                const wasEnd = isEnd;
                if (translatesDiff === 0) {
                    progress = 0;
                    isBeginning = true;
                    isEnd = true;
                } else {
                    progress = (translate - swiper.minTranslate()) / translatesDiff;
                    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                    isBeginning = isBeginningRounded || progress <= 0;
                    isEnd = isEndRounded || progress >= 1;
                    if (isBeginningRounded) progress = 0;
                    if (isEndRounded) progress = 1;
                }
                if (params.loop) {
                    const firstSlideIndex = swiper.getSlideIndexByData(0);
                    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                    const translateAbs = Math.abs(translate);
                    if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                    if (progressLoop > 1) progressLoop -= 1;
                }
                Object.assign(swiper, {
                    progress,
                    progressLoop,
                    isBeginning,
                    isEnd
                });
                if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
                if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
                if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
                if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
                swiper.emit("progress", progress);
            }
            const toggleSlideClasses = (slideEl, condition, className) => {
                if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
            };
            function updateSlidesClasses() {
                const swiper = this;
                const {slides, params, slidesEl, activeIndex} = swiper;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
                const getFilteredSlide = selector => (0, utils.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
                let activeSlide;
                let prevSlide;
                let nextSlide;
                if (isVirtual) if (params.loop) {
                    let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                    if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                    if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                    activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
                } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                    activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                    nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                    prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
                } else activeSlide = slides[activeIndex];
                if (activeSlide) if (!gridEnabled) {
                    nextSlide = (0, utils.p)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !nextSlide) nextSlide = slides[0];
                    prevSlide = (0, utils.q)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                    if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                }
                slides.forEach((slideEl => {
                    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
                    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
                    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
                }));
                swiper.emitSlidesClasses();
            }
            const processLazyPreloader = (swiper, imageEl) => {
                if (!swiper || swiper.destroyed || !swiper.params) return;
                const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
                const slideEl = imageEl.closest(slideSelector());
                if (slideEl) {
                    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                    if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                        if (slideEl.shadowRoot) {
                            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                            if (lazyEl) lazyEl.remove();
                        }
                    }));
                    if (lazyEl) lazyEl.remove();
                }
            };
            const unlazy = (swiper, index) => {
                if (!swiper.slides[index]) return;
                const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
                if (imageEl) imageEl.removeAttribute("loading");
            };
            const preload = swiper => {
                if (!swiper || swiper.destroyed || !swiper.params) return;
                let amount = swiper.params.lazyPreloadPrevNext;
                const len = swiper.slides.length;
                if (!len || !amount || amount < 0) return;
                amount = Math.min(amount, len);
                const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
                const activeIndex = swiper.activeIndex;
                if (swiper.params.grid && swiper.params.grid.rows > 1) {
                    const activeColumn = activeIndex;
                    const preloadColumns = [ activeColumn - amount ];
                    preloadColumns.push(...Array.from({
                        length: amount
                    }).map(((_, i) => activeColumn + slidesPerView + i)));
                    swiper.slides.forEach(((slideEl, i) => {
                        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                    }));
                    return;
                }
                const slideIndexLastInView = activeIndex + slidesPerView - 1;
                if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                    const realIndex = (i % len + len) % len;
                    if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
                } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
            };
            function getActiveIndexByTranslate(swiper) {
                const {slidesGrid, params} = swiper;
                const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                let activeIndex;
                for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
                return activeIndex;
            }
            function updateActiveIndex(newActiveIndex) {
                const swiper = this;
                const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
                let activeIndex = newActiveIndex;
                let snapIndex;
                const getVirtualRealIndex = aIndex => {
                    let realIndex = aIndex - swiper.virtual.slidesBefore;
                    if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                    if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                    return realIndex;
                };
                if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
                if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
                }
                if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
                if (activeIndex === previousIndex && !swiper.params.loop) {
                    if (snapIndex !== previousSnapIndex) {
                        swiper.snapIndex = snapIndex;
                        swiper.emit("snapIndexChange");
                    }
                    return;
                }
                if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                    swiper.realIndex = getVirtualRealIndex(activeIndex);
                    return;
                }
                const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
                let realIndex;
                if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                    const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                    if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
                } else if (swiper.slides[activeIndex]) {
                    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                    if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
                } else realIndex = activeIndex;
                Object.assign(swiper, {
                    previousSnapIndex,
                    snapIndex,
                    previousRealIndex,
                    realIndex,
                    previousIndex,
                    activeIndex
                });
                if (swiper.initialized) preload(swiper);
                swiper.emit("activeIndexChange");
                swiper.emit("snapIndexChange");
                if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                    if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                    swiper.emit("slideChange");
                }
            }
            function updateClickedSlide(el, path) {
                const swiper = this;
                const params = swiper.params;
                let slide = el.closest(`.${params.slideClass}, swiper-slide`);
                if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                    if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
                }));
                let slideFound = false;
                let slideIndex;
                if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                    slideFound = true;
                    slideIndex = i;
                    break;
                }
                if (slide && slideFound) {
                    swiper.clickedSlide = slide;
                    if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
                } else {
                    swiper.clickedSlide = void 0;
                    swiper.clickedIndex = void 0;
                    return;
                }
                if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
            }
            var update = {
                updateSize,
                updateSlides,
                updateAutoHeight,
                updateSlidesOffset,
                updateSlidesProgress,
                updateProgress,
                updateSlidesClasses,
                updateActiveIndex,
                updateClickedSlide
            };
            function getSwiperTranslate(axis) {
                if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
                const swiper = this;
                const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
                if (params.virtualTranslate) return rtl ? -translate : translate;
                if (params.cssMode) return translate;
                let currentTranslate = (0, utils.j)(wrapperEl, axis);
                currentTranslate += swiper.cssOverflowAdjustment();
                if (rtl) currentTranslate = -currentTranslate;
                return currentTranslate || 0;
            }
            function setTranslate(translate, byController) {
                const swiper = this;
                const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
                let x = 0;
                let y = 0;
                const z = 0;
                if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
                if (params.roundLengths) {
                    x = Math.floor(x);
                    y = Math.floor(y);
                }
                swiper.previousTranslate = swiper.translate;
                swiper.translate = swiper.isHorizontal() ? x : y;
                if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                    if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
                }
                let newProgress;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
                if (newProgress !== progress) swiper.updateProgress(translate);
                swiper.emit("setTranslate", swiper.translate, byController);
            }
            function minTranslate() {
                return -this.snapGrid[0];
            }
            function maxTranslate() {
                return -this.snapGrid[this.snapGrid.length - 1];
            }
            function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
                if (translate === void 0) translate = 0;
                if (speed === void 0) speed = this.params.speed;
                if (runCallbacks === void 0) runCallbacks = true;
                if (translateBounds === void 0) translateBounds = true;
                const swiper = this;
                const {params, wrapperEl} = swiper;
                if (swiper.animating && params.preventInteractionOnTransition) return false;
                const minTranslate = swiper.minTranslate();
                const maxTranslate = swiper.maxTranslate();
                let newTranslate;
                if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
                swiper.updateProgress(newTranslate);
                if (params.cssMode) {
                    const isH = swiper.isHorizontal();
                    if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                        if (!swiper.support.smoothScroll) {
                            (0, utils.r)({
                                swiper,
                                targetPosition: -newTranslate,
                                side: isH ? "left" : "top"
                            });
                            return true;
                        }
                        wrapperEl.scrollTo({
                            [isH ? "left" : "top"]: -newTranslate,
                            behavior: "smooth"
                        });
                    }
                    return true;
                }
                if (speed === 0) {
                    swiper.setTransition(0);
                    swiper.setTranslate(newTranslate);
                    if (runCallbacks) {
                        swiper.emit("beforeTransitionStart", speed, internal);
                        swiper.emit("transitionEnd");
                    }
                } else {
                    swiper.setTransition(speed);
                    swiper.setTranslate(newTranslate);
                    if (runCallbacks) {
                        swiper.emit("beforeTransitionStart", speed, internal);
                        swiper.emit("transitionStart");
                    }
                    if (!swiper.animating) {
                        swiper.animating = true;
                        if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                            if (!swiper || swiper.destroyed) return;
                            if (e.target !== this) return;
                            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                            swiper.onTranslateToWrapperTransitionEnd = null;
                            delete swiper.onTranslateToWrapperTransitionEnd;
                            swiper.animating = false;
                            if (runCallbacks) swiper.emit("transitionEnd");
                        };
                        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    }
                }
                return true;
            }
            var translate = {
                getTranslate: getSwiperTranslate,
                setTranslate,
                minTranslate,
                maxTranslate,
                translateTo
            };
            function setTransition(duration, byController) {
                const swiper = this;
                if (!swiper.params.cssMode) {
                    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
                }
                swiper.emit("setTransition", duration, byController);
            }
            function transitionEmit(_ref) {
                let {swiper, runCallbacks, direction, step} = _ref;
                const {activeIndex, previousIndex} = swiper;
                let dir = direction;
                if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
                swiper.emit(`transition${step}`);
                if (runCallbacks && activeIndex !== previousIndex) {
                    if (dir === "reset") {
                        swiper.emit(`slideResetTransition${step}`);
                        return;
                    }
                    swiper.emit(`slideChangeTransition${step}`);
                    if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
                }
            }
            function transitionStart(runCallbacks, direction) {
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                const {params} = swiper;
                if (params.cssMode) return;
                if (params.autoHeight) swiper.updateAutoHeight();
                transitionEmit({
                    swiper,
                    runCallbacks,
                    direction,
                    step: "Start"
                });
            }
            function transitionEnd(runCallbacks, direction) {
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                const {params} = swiper;
                swiper.animating = false;
                if (params.cssMode) return;
                swiper.setTransition(0);
                transitionEmit({
                    swiper,
                    runCallbacks,
                    direction,
                    step: "End"
                });
            }
            var transition = {
                setTransition,
                transitionStart,
                transitionEnd
            };
            function slideTo(index, speed, runCallbacks, internal, initial) {
                if (index === void 0) index = 0;
                if (runCallbacks === void 0) runCallbacks = true;
                if (typeof index === "string") index = parseInt(index, 10);
                const swiper = this;
                let slideIndex = index;
                if (slideIndex < 0) slideIndex = 0;
                const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
                if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
                if (typeof speed === "undefined") speed = swiper.params.speed;
                const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
                let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
                if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
                const translate = -snapGrid[snapIndex];
                if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                    const normalizedTranslate = -Math.floor(translate * 100);
                    const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                    const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                    if (typeof slidesGrid[i + 1] !== "undefined") {
                        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                    } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
                }
                if (swiper.initialized && slideIndex !== activeIndex) {
                    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
                }
                if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
                swiper.updateProgress(translate);
                let direction;
                if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
                if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                    swiper.updateActiveIndex(slideIndex);
                    if (params.autoHeight) swiper.updateAutoHeight();
                    swiper.updateSlidesClasses();
                    if (params.effect !== "slide") swiper.setTranslate(translate);
                    if (direction !== "reset") {
                        swiper.transitionStart(runCallbacks, direction);
                        swiper.transitionEnd(runCallbacks, direction);
                    }
                    return false;
                }
                if (params.cssMode) {
                    const isH = swiper.isHorizontal();
                    const t = rtl ? translate : -translate;
                    if (speed === 0) {
                        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                        if (isVirtual) {
                            swiper.wrapperEl.style.scrollSnapType = "none";
                            swiper._immediateVirtual = true;
                        }
                        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                            swiper._cssModeVirtualInitialSet = true;
                            requestAnimationFrame((() => {
                                wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                            }));
                        } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        if (isVirtual) requestAnimationFrame((() => {
                            swiper.wrapperEl.style.scrollSnapType = "";
                            swiper._immediateVirtual = false;
                        }));
                    } else {
                        if (!swiper.support.smoothScroll) {
                            (0, utils.r)({
                                swiper,
                                targetPosition: t,
                                side: isH ? "left" : "top"
                            });
                            return true;
                        }
                        wrapperEl.scrollTo({
                            [isH ? "left" : "top"]: t,
                            behavior: "smooth"
                        });
                    }
                    return true;
                }
                swiper.setTransition(speed);
                swiper.setTranslate(translate);
                swiper.updateActiveIndex(slideIndex);
                swiper.updateSlidesClasses();
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.transitionStart(runCallbacks, direction);
                if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                }
                return true;
            }
            function slideToLoop(index, speed, runCallbacks, internal) {
                if (index === void 0) index = 0;
                if (runCallbacks === void 0) runCallbacks = true;
                if (typeof index === "string") {
                    const indexAsNumber = parseInt(index, 10);
                    index = indexAsNumber;
                }
                const swiper = this;
                if (swiper.destroyed) return;
                if (typeof speed === "undefined") speed = swiper.params.speed;
                const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
                let newIndex = index;
                if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                    let targetSlideIndex;
                    if (gridEnabled) {
                        const slideIndex = newIndex * swiper.params.grid.rows;
                        targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                    } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                    const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                    const {centeredSlides} = swiper.params;
                    let slidesPerView = swiper.params.slidesPerView;
                    if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                        if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                    }
                    let needLoopFix = cols - targetSlideIndex < slidesPerView;
                    if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                    if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
                    if (needLoopFix) {
                        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                        swiper.loopFix({
                            direction,
                            slideTo: true,
                            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                        });
                    }
                    if (gridEnabled) {
                        const slideIndex = newIndex * swiper.params.grid.rows;
                        newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                    } else newIndex = swiper.getSlideIndexByData(newIndex);
                }
                requestAnimationFrame((() => {
                    swiper.slideTo(newIndex, speed, runCallbacks, internal);
                }));
                return swiper;
            }
            function slideNext(speed, runCallbacks, internal) {
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                const {enabled, params, animating} = swiper;
                if (!enabled || swiper.destroyed) return swiper;
                if (typeof speed === "undefined") speed = swiper.params.speed;
                let perGroup = params.slidesPerGroup;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
                const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                if (params.loop) {
                    if (animating && !isVirtual && params.loopPreventsSliding) return false;
                    swiper.loopFix({
                        direction: "next"
                    });
                    swiper._clientLeft = swiper.wrapperEl.clientLeft;
                    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                        requestAnimationFrame((() => {
                            swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                        }));
                        return true;
                    }
                }
                if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
                return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            }
            function slidePrev(speed, runCallbacks, internal) {
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
                if (!enabled || swiper.destroyed) return swiper;
                if (typeof speed === "undefined") speed = swiper.params.speed;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                if (params.loop) {
                    if (animating && !isVirtual && params.loopPreventsSliding) return false;
                    swiper.loopFix({
                        direction: "prev"
                    });
                    swiper._clientLeft = swiper.wrapperEl.clientLeft;
                }
                const translate = rtlTranslate ? swiper.translate : -swiper.translate;
                function normalize(val) {
                    if (val < 0) return -Math.floor(Math.abs(val));
                    return Math.floor(val);
                }
                const normalizedTranslate = normalize(translate);
                const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
                let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
                if (typeof prevSnap === "undefined" && params.cssMode) {
                    let prevSnapIndex;
                    snapGrid.forEach(((snap, snapIndex) => {
                        if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                    }));
                    if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
                }
                let prevIndex = 0;
                if (typeof prevSnap !== "undefined") {
                    prevIndex = slidesGrid.indexOf(prevSnap);
                    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                        prevIndex = Math.max(prevIndex, 0);
                    }
                }
                if (params.rewind && swiper.isBeginning) {
                    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
                } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                    }));
                    return true;
                }
                return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
            }
            function slideReset(speed, runCallbacks, internal) {
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                if (swiper.destroyed) return;
                if (typeof speed === "undefined") speed = swiper.params.speed;
                return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
            }
            function slideToClosest(speed, runCallbacks, internal, threshold) {
                if (runCallbacks === void 0) runCallbacks = true;
                if (threshold === void 0) threshold = .5;
                const swiper = this;
                if (swiper.destroyed) return;
                if (typeof speed === "undefined") speed = swiper.params.speed;
                let index = swiper.activeIndex;
                const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
                const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
                const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                if (translate >= swiper.snapGrid[snapIndex]) {
                    const currentSnap = swiper.snapGrid[snapIndex];
                    const nextSnap = swiper.snapGrid[snapIndex + 1];
                    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
                } else {
                    const prevSnap = swiper.snapGrid[snapIndex - 1];
                    const currentSnap = swiper.snapGrid[snapIndex];
                    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
                }
                index = Math.max(index, 0);
                index = Math.min(index, swiper.slidesGrid.length - 1);
                return swiper.slideTo(index, speed, runCallbacks, internal);
            }
            function slideToClickedSlide() {
                const swiper = this;
                if (swiper.destroyed) return;
                const {params, slidesEl} = swiper;
                const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
                let slideToIndex = swiper.clickedIndex;
                let realIndex;
                const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
                if (params.loop) {
                    if (swiper.animating) return;
                    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                    if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                        swiper.loopFix();
                        slideToIndex = swiper.getSlideIndex((0, utils.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                        (0, utils.n)((() => {
                            swiper.slideTo(slideToIndex);
                        }));
                    } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                        swiper.loopFix();
                        slideToIndex = swiper.getSlideIndex((0, utils.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                        (0, utils.n)((() => {
                            swiper.slideTo(slideToIndex);
                        }));
                    } else swiper.slideTo(slideToIndex);
                } else swiper.slideTo(slideToIndex);
            }
            var slide = {
                slideTo,
                slideToLoop,
                slideNext,
                slidePrev,
                slideReset,
                slideToClosest,
                slideToClickedSlide
            };
            function loopCreate(slideRealIndex) {
                const swiper = this;
                const {params, slidesEl} = swiper;
                if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
                const initSlides = () => {
                    const slides = (0, utils.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
                    slides.forEach(((el, index) => {
                        el.setAttribute("data-swiper-slide-index", index);
                    }));
                };
                const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
                const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
                const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
                const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
                const addBlankSlides = amountOfSlides => {
                    for (let i = 0; i < amountOfSlides; i += 1) {
                        const slideEl = swiper.isElement ? (0, utils.c)("swiper-slide", [ params.slideBlankClass ]) : (0, 
                        utils.c)("div", [ params.slideClass, params.slideBlankClass ]);
                        swiper.slidesEl.append(slideEl);
                    }
                };
                if (shouldFillGroup) {
                    if (params.loopAddBlankSlides) {
                        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                        addBlankSlides(slidesToAdd);
                        swiper.recalcSlides();
                        swiper.updateSlides();
                    } else (0, utils.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                    initSlides();
                } else if (shouldFillGrid) {
                    if (params.loopAddBlankSlides) {
                        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                        addBlankSlides(slidesToAdd);
                        swiper.recalcSlides();
                        swiper.updateSlides();
                    } else (0, utils.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                    initSlides();
                } else initSlides();
                swiper.loopFix({
                    slideRealIndex,
                    direction: params.centeredSlides ? void 0 : "next"
                });
            }
            function loopFix(_temp) {
                let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
                const swiper = this;
                if (!swiper.params.loop) return;
                swiper.emit("beforeLoopFix");
                const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
                const {centeredSlides} = params;
                swiper.allowSlidePrev = true;
                swiper.allowSlideNext = true;
                if (swiper.virtual && params.virtual.enabled) {
                    if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                    swiper.allowSlidePrev = allowSlidePrev;
                    swiper.allowSlideNext = allowSlideNext;
                    swiper.emit("loopFix");
                    return;
                }
                let slidesPerView = params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
                let loopedSlides = slidesPerGroup;
                if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
                loopedSlides += params.loopAdditionalSlides;
                swiper.loopedSlides = loopedSlides;
                const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
                if (slides.length < slidesPerView + loopedSlides) (0, utils.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") (0, 
                utils.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const prependSlidesIndexes = [];
                const appendSlidesIndexes = [];
                let activeIndex = swiper.activeIndex;
                if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
                const isNext = direction === "next" || !direction;
                const isPrev = direction === "prev" || !direction;
                let slidesPrepended = 0;
                let slidesAppended = 0;
                const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
                const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
                const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
                if (activeColIndexWithShift < loopedSlides) {
                    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                        const index = i - Math.floor(i / cols) * cols;
                        if (gridEnabled) {
                            const colIndexToPrepend = cols - index - 1;
                            for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                        } else prependSlidesIndexes.push(cols - index - 1);
                    }
                } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                    for (let i = 0; i < slidesAppended; i += 1) {
                        const index = i - Math.floor(i / cols) * cols;
                        if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                            if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                        })); else appendSlidesIndexes.push(index);
                    }
                }
                swiper.__preventObserver__ = true;
                requestAnimationFrame((() => {
                    swiper.__preventObserver__ = false;
                }));
                if (isPrev) prependSlidesIndexes.forEach((index => {
                    slides[index].swiperLoopMoveDOM = true;
                    slidesEl.prepend(slides[index]);
                    slides[index].swiperLoopMoveDOM = false;
                }));
                if (isNext) appendSlidesIndexes.forEach((index => {
                    slides[index].swiperLoopMoveDOM = true;
                    slidesEl.append(slides[index]);
                    slides[index].swiperLoopMoveDOM = false;
                }));
                swiper.recalcSlides();
                if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                    swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
                }));
                if (params.watchSlidesProgress) swiper.updateSlidesOffset();
                if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                    if (typeof slideRealIndex === "undefined") {
                        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                        const diff = newSlideTranslate - currentSlideTranslate;
                        if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                            if (setTranslate) {
                                swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                                swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                            }
                        }
                    } else if (setTranslate) {
                        const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                        swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else {
                    const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
                }
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                if (swiper.controller && swiper.controller.control && !byController) {
                    const loopParams = {
                        slideRealIndex,
                        direction,
                        setTranslate,
                        activeSlideIndex,
                        byController: true
                    };
                    if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                        if (!c.destroyed && c.params.loop) c.loopFix({
                            ...loopParams,
                            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                        });
                    })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                        ...loopParams,
                        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                }
                swiper.emit("loopFix");
            }
            function loopDestroy() {
                const swiper = this;
                const {params, slidesEl} = swiper;
                if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
                swiper.recalcSlides();
                const newSlidesOrder = [];
                swiper.slides.forEach((slideEl => {
                    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                    newSlidesOrder[index] = slideEl;
                }));
                swiper.slides.forEach((slideEl => {
                    slideEl.removeAttribute("data-swiper-slide-index");
                }));
                newSlidesOrder.forEach((slideEl => {
                    slidesEl.append(slideEl);
                }));
                swiper.recalcSlides();
                swiper.slideTo(swiper.realIndex, 0);
            }
            var loop = {
                loopCreate,
                loopFix,
                loopDestroy
            };
            function setGrabCursor(moving) {
                const swiper = this;
                if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
                const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
                if (swiper.isElement) swiper.__preventObserver__ = true;
                el.style.cursor = "move";
                el.style.cursor = moving ? "grabbing" : "grab";
                if (swiper.isElement) requestAnimationFrame((() => {
                    swiper.__preventObserver__ = false;
                }));
            }
            function unsetGrabCursor() {
                const swiper = this;
                if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
                if (swiper.isElement) swiper.__preventObserver__ = true;
                swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
                if (swiper.isElement) requestAnimationFrame((() => {
                    swiper.__preventObserver__ = false;
                }));
            }
            var grabCursor = {
                setGrabCursor,
                unsetGrabCursor
            };
            function closestElement(selector, base) {
                if (base === void 0) base = this;
                function __closestFrom(el) {
                    if (!el || el === (0, ssr_window_esm.g)() || el === (0, ssr_window_esm.a)()) return null;
                    if (el.assignedSlot) el = el.assignedSlot;
                    const found = el.closest(selector);
                    if (!found && !el.getRootNode) return null;
                    return found || __closestFrom(el.getRootNode().host);
                }
                return __closestFrom(base);
            }
            function preventEdgeSwipe(swiper, event, startX) {
                const window = (0, ssr_window_esm.a)();
                const {params} = swiper;
                const edgeSwipeDetection = params.edgeSwipeDetection;
                const edgeSwipeThreshold = params.edgeSwipeThreshold;
                if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                    if (edgeSwipeDetection === "prevent") {
                        event.preventDefault();
                        return true;
                    }
                    return false;
                }
                return true;
            }
            function onTouchStart(event) {
                const swiper = this;
                const document = (0, ssr_window_esm.g)();
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                const data = swiper.touchEventsData;
                if (e.type === "pointerdown") {
                    if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                    data.pointerId = e.pointerId;
                } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
                if (e.type === "touchstart") {
                    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                    return;
                }
                const {params, touches, enabled} = swiper;
                if (!enabled) return;
                if (!params.simulateTouch && e.pointerType === "mouse") return;
                if (swiper.animating && params.preventInteractionOnTransition) return;
                if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
                let targetEl = e.target;
                if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
                if ("which" in e && e.which === 3) return;
                if ("button" in e && e.button > 0) return;
                if (data.isTouched && data.isMoved) return;
                const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
                const eventPath = e.composedPath ? e.composedPath() : e.path;
                if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
                const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
                const isTargetShadow = !!(e.target && e.target.shadowRoot);
                if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                    swiper.allowClick = true;
                    return;
                }
                if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
                touches.currentX = e.pageX;
                touches.currentY = e.pageY;
                const startX = touches.currentX;
                const startY = touches.currentY;
                if (!preventEdgeSwipe(swiper, e, startX)) return;
                Object.assign(data, {
                    isTouched: true,
                    isMoved: false,
                    allowTouchCallbacks: true,
                    isScrolling: void 0,
                    startMoving: void 0
                });
                touches.startX = startX;
                touches.startY = startY;
                data.touchStartTime = (0, utils.d)();
                swiper.allowClick = true;
                swiper.updateSize();
                swiper.swipeDirection = void 0;
                if (params.threshold > 0) data.allowThresholdMove = false;
                let preventDefault = true;
                if (targetEl.matches(data.focusableElements)) {
                    preventDefault = false;
                    if (targetEl.nodeName === "SELECT") data.isTouched = false;
                }
                if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
                if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
                swiper.emit("touchStart", e);
            }
            function onTouchMove(event) {
                const document = (0, ssr_window_esm.g)();
                const swiper = this;
                const data = swiper.touchEventsData;
                const {params, touches, rtlTranslate: rtl, enabled} = swiper;
                if (!enabled) return;
                if (!params.simulateTouch && event.pointerType === "mouse") return;
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                if (e.type === "pointermove") {
                    if (data.touchId !== null) return;
                    const id = e.pointerId;
                    if (id !== data.pointerId) return;
                }
                let targetTouch;
                if (e.type === "touchmove") {
                    targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
                } else targetTouch = e;
                if (!data.isTouched) {
                    if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                    return;
                }
                const pageX = targetTouch.pageX;
                const pageY = targetTouch.pageY;
                if (e.preventedByNestedSwiper) {
                    touches.startX = pageX;
                    touches.startY = pageY;
                    return;
                }
                if (!swiper.allowTouchMove) {
                    if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                    if (data.isTouched) {
                        Object.assign(touches, {
                            startX: pageX,
                            startY: pageY,
                            currentX: pageX,
                            currentY: pageY
                        });
                        data.touchStartTime = (0, utils.d)();
                    }
                    return;
                }
                if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                    if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                        data.isTouched = false;
                        data.isMoved = false;
                        return;
                    }
                } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
                if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                    data.isMoved = true;
                    swiper.allowClick = false;
                    return;
                }
                if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
                touches.previousX = touches.currentX;
                touches.previousY = touches.currentY;
                touches.currentX = pageX;
                touches.currentY = pageY;
                const diffX = touches.currentX - touches.startX;
                const diffY = touches.currentY - touches.startY;
                if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
                if (typeof data.isScrolling === "undefined") {
                    let touchAngle;
                    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                    }
                }
                if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
                if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
                if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
                    data.isTouched = false;
                    return;
                }
                if (!data.startMoving) return;
                swiper.allowClick = false;
                if (!params.cssMode && e.cancelable) e.preventDefault();
                if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
                let diff = swiper.isHorizontal() ? diffX : diffY;
                let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
                if (params.oneWayMovement) {
                    diff = Math.abs(diff) * (rtl ? 1 : -1);
                    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
                }
                touches.diff = diff;
                diff *= params.touchRatio;
                if (rtl) {
                    diff = -diff;
                    touchesDiff = -touchesDiff;
                }
                const prevTouchesDirection = swiper.touchesDirection;
                swiper.swipeDirection = diff > 0 ? "prev" : "next";
                swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
                const isLoop = swiper.params.loop && !params.cssMode;
                const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
                if (!data.isMoved) {
                    if (isLoop && allowLoopFix) swiper.loopFix({
                        direction: swiper.swipeDirection
                    });
                    data.startTranslate = swiper.getTranslate();
                    swiper.setTransition(0);
                    if (swiper.animating) {
                        const evt = new window.CustomEvent("transitionend", {
                            bubbles: true,
                            cancelable: true,
                            detail: {
                                bySwiperTouchMove: true
                            }
                        });
                        swiper.wrapperEl.dispatchEvent(evt);
                    }
                    data.allowMomentumBounce = false;
                    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                    swiper.emit("sliderFirstMove", e);
                }
                let loopFixed;
                (new Date).getTime();
                if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY,
                        startTranslate: data.currentTranslate
                    });
                    data.loopSwapReset = true;
                    data.startTranslate = data.currentTranslate;
                    return;
                }
                swiper.emit("sliderMove", e);
                data.isMoved = true;
                data.currentTranslate = diff + data.startTranslate;
                let disableParentSwiper = true;
                let resistanceRatio = params.resistanceRatio;
                if (params.touchReleaseOnEdges) resistanceRatio = 0;
                if (diff > 0) {
                    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                        direction: "prev",
                        setTranslate: true,
                        activeSlideIndex: 0
                    });
                    if (data.currentTranslate > swiper.minTranslate()) {
                        disableParentSwiper = false;
                        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                    }
                } else if (diff < 0) {
                    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                        direction: "next",
                        setTranslate: true,
                        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                    });
                    if (data.currentTranslate < swiper.maxTranslate()) {
                        disableParentSwiper = false;
                        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                    }
                }
                if (disableParentSwiper) e.preventedByNestedSwiper = true;
                if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
                if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
                if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
                if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                    if (!data.allowThresholdMove) {
                        data.allowThresholdMove = true;
                        touches.startX = touches.currentX;
                        touches.startY = touches.currentY;
                        data.currentTranslate = data.startTranslate;
                        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                        return;
                    }
                } else {
                    data.currentTranslate = data.startTranslate;
                    return;
                }
                if (!params.followFinger || params.cssMode) return;
                if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
                swiper.updateProgress(data.currentTranslate);
                swiper.setTranslate(data.currentTranslate);
            }
            function onTouchEnd(event) {
                const swiper = this;
                const data = swiper.touchEventsData;
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                let targetTouch;
                const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
                if (!isTouchEvent) {
                    if (data.touchId !== null) return;
                    if (e.pointerId !== data.pointerId) return;
                    targetTouch = e;
                } else {
                    targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
                }
                if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                    const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                    if (!proceed) return;
                }
                data.pointerId = null;
                data.touchId = null;
                const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
                if (!enabled) return;
                if (!params.simulateTouch && e.pointerType === "mouse") return;
                if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
                data.allowTouchCallbacks = false;
                if (!data.isTouched) {
                    if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                    data.isMoved = false;
                    data.startMoving = false;
                    return;
                }
                if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
                const touchEndTime = (0, utils.d)();
                const timeDiff = touchEndTime - data.touchStartTime;
                if (swiper.allowClick) {
                    const pathTree = e.path || e.composedPath && e.composedPath();
                    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                    swiper.emit("tap click", e);
                    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
                }
                data.lastClickTime = (0, utils.d)();
                (0, utils.n)((() => {
                    if (!swiper.destroyed) swiper.allowClick = true;
                }));
                if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                    data.isTouched = false;
                    data.isMoved = false;
                    data.startMoving = false;
                    return;
                }
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                let currentPos;
                if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
                if (params.cssMode) return;
                if (params.freeMode && params.freeMode.enabled) {
                    swiper.freeMode.onTouchEnd({
                        currentPos
                    });
                    return;
                }
                const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
                let stopIndex = 0;
                let groupSize = swiper.slidesSizesGrid[0];
                for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                    if (typeof slidesGrid[i + increment] !== "undefined") {
                        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                            stopIndex = i;
                            groupSize = slidesGrid[i + increment] - slidesGrid[i];
                        }
                    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                    }
                }
                let rewindFirstIndex = null;
                let rewindLastIndex = null;
                if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
                const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
                const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (timeDiff > params.longSwipesMs) {
                    if (!params.longSwipes) {
                        swiper.slideTo(swiper.activeIndex);
                        return;
                    }
                    if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                    if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
                } else {
                    if (!params.shortSwipes) {
                        swiper.slideTo(swiper.activeIndex);
                        return;
                    }
                    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                    if (!isNavButtonTarget) {
                        if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                        if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                    } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
                }
            }
            function onResize() {
                const swiper = this;
                const {params, el} = swiper;
                if (el && el.offsetWidth === 0) return;
                if (params.breakpoints) swiper.setBreakpoint();
                const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                swiper.allowSlideNext = true;
                swiper.allowSlidePrev = true;
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateSlidesClasses();
                const isVirtualLoop = isVirtual && params.loop;
                if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                    clearTimeout(swiper.autoplay.resizeTimeout);
                    swiper.autoplay.resizeTimeout = setTimeout((() => {
                        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                    }), 500);
                }
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
            }
            function onClick(e) {
                const swiper = this;
                if (!swiper.enabled) return;
                if (!swiper.allowClick) {
                    if (swiper.params.preventClicks) e.preventDefault();
                    if (swiper.params.preventClicksPropagation && swiper.animating) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                    }
                }
            }
            function onScroll() {
                const swiper = this;
                const {wrapperEl, rtlTranslate, enabled} = swiper;
                if (!enabled) return;
                swiper.previousTranslate = swiper.translate;
                if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
                if (swiper.translate === 0) swiper.translate = 0;
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                let newProgress;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
                if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
                swiper.emit("setTranslate", swiper.translate, false);
            }
            function onLoad(e) {
                const swiper = this;
                processLazyPreloader(swiper, e.target);
                if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
                swiper.update();
            }
            function onDocumentTouchStart() {
                const swiper = this;
                if (swiper.documentTouchHandlerProceeded) return;
                swiper.documentTouchHandlerProceeded = true;
                if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
            }
            const events = (swiper, method) => {
                const document = (0, ssr_window_esm.g)();
                const {params, el, wrapperEl, device} = swiper;
                const capture = !!params.nested;
                const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
                const swiperMethod = method;
                if (!el || typeof el === "string") return;
                document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                    passive: false,
                    capture
                });
                el[domMethod]("touchstart", swiper.onTouchStart, {
                    passive: false
                });
                el[domMethod]("pointerdown", swiper.onTouchStart, {
                    passive: false
                });
                document[domMethod]("touchmove", swiper.onTouchMove, {
                    passive: false,
                    capture
                });
                document[domMethod]("pointermove", swiper.onTouchMove, {
                    passive: false,
                    capture
                });
                document[domMethod]("touchend", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("pointerup", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("pointercancel", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("touchcancel", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("pointerout", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("pointerleave", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("contextmenu", swiper.onTouchEnd, {
                    passive: true
                });
                if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
                if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
                if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
                el[domMethod]("load", swiper.onLoad, {
                    capture: true
                });
            };
            function attachEvents() {
                const swiper = this;
                const {params} = swiper;
                swiper.onTouchStart = onTouchStart.bind(swiper);
                swiper.onTouchMove = onTouchMove.bind(swiper);
                swiper.onTouchEnd = onTouchEnd.bind(swiper);
                swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
                if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
                swiper.onClick = onClick.bind(swiper);
                swiper.onLoad = onLoad.bind(swiper);
                events(swiper, "on");
            }
            function detachEvents() {
                const swiper = this;
                events(swiper, "off");
            }
            var events$1 = {
                attachEvents,
                detachEvents
            };
            const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
            function setBreakpoint() {
                const swiper = this;
                const {realIndex, initialized, params, el} = swiper;
                const breakpoints = params.breakpoints;
                if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
                const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
                if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
                const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
                const breakpointParams = breakpointOnlyParams || swiper.originalParams;
                const wasMultiRow = isGridEnabled(swiper, params);
                const isMultiRow = isGridEnabled(swiper, breakpointParams);
                const wasGrabCursor = swiper.params.grabCursor;
                const isGrabCursor = breakpointParams.grabCursor;
                const wasEnabled = params.enabled;
                if (wasMultiRow && !isMultiRow) {
                    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                    swiper.emitContainerClasses();
                } else if (!wasMultiRow && isMultiRow) {
                    el.classList.add(`${params.containerModifierClass}grid`);
                    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                    swiper.emitContainerClasses();
                }
                if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor(); else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
                [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                    if (typeof breakpointParams[prop] === "undefined") return;
                    const wasModuleEnabled = params[prop] && params[prop].enabled;
                    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                    if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                    if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
                }));
                const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
                const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
                const wasLoop = params.loop;
                if (directionChanged && initialized) swiper.changeDirection();
                (0, utils.u)(swiper.params, breakpointParams);
                const isEnabled = swiper.params.enabled;
                const hasLoop = swiper.params.loop;
                Object.assign(swiper, {
                    allowTouchMove: swiper.params.allowTouchMove,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev
                });
                if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
                swiper.currentBreakpoint = breakpoint;
                swiper.emit("_beforeBreakpoint", breakpointParams);
                if (initialized) if (needsReLoop) {
                    swiper.loopDestroy();
                    swiper.loopCreate(realIndex);
                    swiper.updateSlides();
                } else if (!wasLoop && hasLoop) {
                    swiper.loopCreate(realIndex);
                    swiper.updateSlides();
                } else if (wasLoop && !hasLoop) swiper.loopDestroy();
                swiper.emit("breakpoint", breakpointParams);
            }
            function getBreakpoint(breakpoints, base, containerEl) {
                if (base === void 0) base = "window";
                if (!breakpoints || base === "container" && !containerEl) return;
                let breakpoint = false;
                const window = (0, ssr_window_esm.a)();
                const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
                const points = Object.keys(breakpoints).map((point => {
                    if (typeof point === "string" && point.indexOf("@") === 0) {
                        const minRatio = parseFloat(point.substr(1));
                        const value = currentHeight * minRatio;
                        return {
                            value,
                            point
                        };
                    }
                    return {
                        value: point,
                        point
                    };
                }));
                points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
                for (let i = 0; i < points.length; i += 1) {
                    const {point, value} = points[i];
                    if (base === "window") {
                        if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                    } else if (value <= containerEl.clientWidth) breakpoint = point;
                }
                return breakpoint || "max";
            }
            var breakpoints = {
                setBreakpoint,
                getBreakpoint
            };
            function prepareClasses(entries, prefix) {
                const resultClasses = [];
                entries.forEach((item => {
                    if (typeof item === "object") Object.keys(item).forEach((classNames => {
                        if (item[classNames]) resultClasses.push(prefix + classNames);
                    })); else if (typeof item === "string") resultClasses.push(prefix + item);
                }));
                return resultClasses;
            }
            function addClasses() {
                const swiper = this;
                const {classNames, params, rtl, el, device} = swiper;
                const suffixes = prepareClasses([ "initialized", params.direction, {
                    "free-mode": swiper.params.freeMode && params.freeMode.enabled
                }, {
                    autoheight: params.autoHeight
                }, {
                    rtl
                }, {
                    grid: params.grid && params.grid.rows > 1
                }, {
                    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
                }, {
                    android: device.android
                }, {
                    ios: device.ios
                }, {
                    "css-mode": params.cssMode
                }, {
                    centered: params.cssMode && params.centeredSlides
                }, {
                    "watch-progress": params.watchSlidesProgress
                } ], params.containerModifierClass);
                classNames.push(...suffixes);
                el.classList.add(...classNames);
                swiper.emitContainerClasses();
            }
            function removeClasses() {
                const swiper = this;
                const {el, classNames} = swiper;
                if (!el || typeof el === "string") return;
                el.classList.remove(...classNames);
                swiper.emitContainerClasses();
            }
            var classes = {
                addClasses,
                removeClasses
            };
            function checkOverflow() {
                const swiper = this;
                const {isLocked: wasLocked, params} = swiper;
                const {slidesOffsetBefore} = params;
                if (slidesOffsetBefore) {
                    const lastSlideIndex = swiper.slides.length - 1;
                    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                    swiper.isLocked = swiper.size > lastSlideRightEdge;
                } else swiper.isLocked = swiper.snapGrid.length === 1;
                if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
                if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
                if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
                if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
            }
            var checkOverflow$1 = {
                checkOverflow
            };
            var defaults = {
                init: true,
                direction: "horizontal",
                oneWayMovement: false,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: false,
                updateOnWindowResize: true,
                resizeObserver: true,
                nested: false,
                createElements: false,
                eventsPrefix: "swiper",
                enabled: true,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: false,
                userAgent: null,
                url: null,
                edgeSwipeDetection: false,
                edgeSwipeThreshold: 20,
                autoHeight: false,
                setWrapperSize: false,
                virtualTranslate: false,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: false,
                centeredSlides: false,
                centeredSlidesBounds: false,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: true,
                centerInsufficientSlides: false,
                watchOverflow: true,
                roundLengths: false,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: true,
                shortSwipes: true,
                longSwipes: true,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: true,
                allowTouchMove: true,
                threshold: 5,
                touchMoveStopPropagation: false,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: false,
                touchReleaseOnEdges: false,
                uniqueNavElements: true,
                resistance: true,
                resistanceRatio: .85,
                watchSlidesProgress: false,
                grabCursor: false,
                preventClicks: true,
                preventClicksPropagation: true,
                slideToClickedSlide: false,
                loop: false,
                loopAddBlankSlides: true,
                loopAdditionalSlides: 0,
                loopPreventsSliding: true,
                rewind: false,
                allowSlidePrev: true,
                allowSlideNext: true,
                swipeHandler: null,
                noSwiping: true,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: true,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: true,
                _emitClasses: false
            };
            function moduleExtendParams(params, allModulesParams) {
                return function extendParams(obj) {
                    if (obj === void 0) obj = {};
                    const moduleParamName = Object.keys(obj)[0];
                    const moduleParams = obj[moduleParamName];
                    if (typeof moduleParams !== "object" || moduleParams === null) {
                        (0, utils.u)(allModulesParams, obj);
                        return;
                    }
                    if (params[moduleParamName] === true) params[moduleParamName] = {
                        enabled: true
                    };
                    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                    if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                    if (!(moduleParamName in params && "enabled" in moduleParams)) {
                        (0, utils.u)(allModulesParams, obj);
                        return;
                    }
                    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                    if (!params[moduleParamName]) params[moduleParamName] = {
                        enabled: false
                    };
                    (0, utils.u)(allModulesParams, obj);
                };
            }
            const prototypes = {
                eventsEmitter,
                update,
                translate,
                transition,
                slide,
                loop,
                grabCursor,
                events: events$1,
                breakpoints,
                checkOverflow: checkOverflow$1,
                classes
            };
            const extendedDefaults = {};
            class Swiper {
                constructor() {
                    let el;
                    let params;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                    if (!params) params = {};
                    params = (0, utils.u)({}, params);
                    if (el && !params.el) params.el = el;
                    const document = (0, ssr_window_esm.g)();
                    if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                        const swipers = [];
                        document.querySelectorAll(params.el).forEach((containerEl => {
                            const newParams = (0, utils.u)({}, params, {
                                el: containerEl
                            });
                            swipers.push(new Swiper(newParams));
                        }));
                        return swipers;
                    }
                    const swiper = this;
                    swiper.__swiper__ = true;
                    swiper.support = getSupport();
                    swiper.device = getDevice({
                        userAgent: params.userAgent
                    });
                    swiper.browser = getBrowser();
                    swiper.eventsListeners = {};
                    swiper.eventsAnyListeners = [];
                    swiper.modules = [ ...swiper.__modules__ ];
                    if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                    const allModulesParams = {};
                    swiper.modules.forEach((mod => {
                        mod({
                            params,
                            swiper,
                            extendParams: moduleExtendParams(params, allModulesParams),
                            on: swiper.on.bind(swiper),
                            once: swiper.once.bind(swiper),
                            off: swiper.off.bind(swiper),
                            emit: swiper.emit.bind(swiper)
                        });
                    }));
                    const swiperParams = (0, utils.u)({}, defaults, allModulesParams);
                    swiper.params = (0, utils.u)({}, swiperParams, extendedDefaults, params);
                    swiper.originalParams = (0, utils.u)({}, swiper.params);
                    swiper.passedParams = (0, utils.u)({}, params);
                    if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                        swiper.on(eventName, swiper.params.on[eventName]);
                    }));
                    if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                    Object.assign(swiper, {
                        enabled: swiper.params.enabled,
                        el,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal() {
                            return swiper.params.direction === "horizontal";
                        },
                        isVertical() {
                            return swiper.params.direction === "vertical";
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: true,
                        isEnd: false,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: false,
                        cssOverflowAdjustment() {
                            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                        },
                        allowSlideNext: swiper.params.allowSlideNext,
                        allowSlidePrev: swiper.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: swiper.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: true,
                        allowTouchMove: swiper.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    });
                    swiper.emit("_swiper");
                    if (swiper.params.init) swiper.init();
                    return swiper;
                }
                getDirectionLabel(property) {
                    if (this.isHorizontal()) return property;
                    return {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[property];
                }
                getSlideIndex(slideEl) {
                    const {slidesEl, params} = this;
                    const slides = (0, utils.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
                    const firstSlideIndex = (0, utils.h)(slides[0]);
                    return (0, utils.h)(slideEl) - firstSlideIndex;
                }
                getSlideIndexByData(index) {
                    return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
                }
                recalcSlides() {
                    const swiper = this;
                    const {slidesEl, params} = swiper;
                    swiper.slides = (0, utils.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
                }
                enable() {
                    const swiper = this;
                    if (swiper.enabled) return;
                    swiper.enabled = true;
                    if (swiper.params.grabCursor) swiper.setGrabCursor();
                    swiper.emit("enable");
                }
                disable() {
                    const swiper = this;
                    if (!swiper.enabled) return;
                    swiper.enabled = false;
                    if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                    swiper.emit("disable");
                }
                setProgress(progress, speed) {
                    const swiper = this;
                    progress = Math.min(Math.max(progress, 0), 1);
                    const min = swiper.minTranslate();
                    const max = swiper.maxTranslate();
                    const current = (max - min) * progress + min;
                    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                emitContainerClasses() {
                    const swiper = this;
                    if (!swiper.params._emitClasses || !swiper.el) return;
                    const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                    swiper.emit("_containerClasses", cls.join(" "));
                }
                getSlideClasses(slideEl) {
                    const swiper = this;
                    if (swiper.destroyed) return "";
                    return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
                }
                emitSlidesClasses() {
                    const swiper = this;
                    if (!swiper.params._emitClasses || !swiper.el) return;
                    const updates = [];
                    swiper.slides.forEach((slideEl => {
                        const classNames = swiper.getSlideClasses(slideEl);
                        updates.push({
                            slideEl,
                            classNames
                        });
                        swiper.emit("_slideClass", slideEl, classNames);
                    }));
                    swiper.emit("_slideClasses", updates);
                }
                slidesPerViewDynamic(view, exact) {
                    if (view === void 0) view = "current";
                    if (exact === void 0) exact = false;
                    const swiper = this;
                    const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                    let spv = 1;
                    if (typeof params.slidesPerView === "number") return params.slidesPerView;
                    if (params.centeredSlides) {
                        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                        let breakLoop;
                        for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                            slideSize += Math.ceil(slides[i].swiperSlideSize);
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                        for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                    } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                        const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                        if (slideInView) spv += 1;
                    } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                        const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                        if (slideInView) spv += 1;
                    }
                    return spv;
                }
                update() {
                    const swiper = this;
                    if (!swiper || swiper.destroyed) return;
                    const {snapGrid, params} = swiper;
                    if (params.breakpoints) swiper.setBreakpoint();
                    [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                        if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                    }));
                    swiper.updateSize();
                    swiper.updateSlides();
                    swiper.updateProgress();
                    swiper.updateSlidesClasses();
                    function setTranslate() {
                        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                        swiper.setTranslate(newTranslate);
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                    }
                    let translated;
                    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                        setTranslate();
                        if (params.autoHeight) swiper.updateAutoHeight();
                    } else {
                        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                            const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                            translated = swiper.slideTo(slides.length - 1, 0, false, true);
                        } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                        if (!translated) setTranslate();
                    }
                    if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                    swiper.emit("update");
                }
                changeDirection(newDirection, needUpdate) {
                    if (needUpdate === void 0) needUpdate = true;
                    const swiper = this;
                    const currentDirection = swiper.params.direction;
                    if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                    swiper.emitContainerClasses();
                    swiper.params.direction = newDirection;
                    swiper.slides.forEach((slideEl => {
                        if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                    }));
                    swiper.emit("changeDirection");
                    if (needUpdate) swiper.update();
                    return swiper;
                }
                changeLanguageDirection(direction) {
                    const swiper = this;
                    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                    swiper.rtl = direction === "rtl";
                    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                    if (swiper.rtl) {
                        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                        swiper.el.dir = "rtl";
                    } else {
                        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                        swiper.el.dir = "ltr";
                    }
                    swiper.update();
                }
                mount(element) {
                    const swiper = this;
                    if (swiper.mounted) return true;
                    let el = element || swiper.params.el;
                    if (typeof el === "string") el = document.querySelector(el);
                    if (!el) return false;
                    el.swiper = swiper;
                    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                    const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                    const getWrapper = () => {
                        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                            const res = el.shadowRoot.querySelector(getWrapperSelector());
                            return res;
                        }
                        return (0, utils.e)(el, getWrapperSelector())[0];
                    };
                    let wrapperEl = getWrapper();
                    if (!wrapperEl && swiper.params.createElements) {
                        wrapperEl = (0, utils.c)("div", swiper.params.wrapperClass);
                        el.append(wrapperEl);
                        (0, utils.e)(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                            wrapperEl.append(slideEl);
                        }));
                    }
                    Object.assign(swiper, {
                        el,
                        wrapperEl,
                        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                        hostEl: swiper.isElement ? el.parentNode.host : el,
                        mounted: true,
                        rtl: el.dir.toLowerCase() === "rtl" || (0, utils.o)(el, "direction") === "rtl",
                        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || (0, 
                        utils.o)(el, "direction") === "rtl"),
                        wrongRTL: (0, utils.o)(wrapperEl, "display") === "-webkit-box"
                    });
                    return true;
                }
                init(el) {
                    const swiper = this;
                    if (swiper.initialized) return swiper;
                    const mounted = swiper.mount(el);
                    if (mounted === false) return swiper;
                    swiper.emit("beforeInit");
                    if (swiper.params.breakpoints) swiper.setBreakpoint();
                    swiper.addClasses();
                    swiper.updateSize();
                    swiper.updateSlides();
                    if (swiper.params.watchOverflow) swiper.checkOverflow();
                    if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                    if (swiper.params.loop) swiper.loopCreate();
                    swiper.attachEvents();
                    const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                    if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                    lazyElements.forEach((imageEl => {
                        if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                            processLazyPreloader(swiper, e.target);
                        }));
                    }));
                    preload(swiper);
                    swiper.initialized = true;
                    preload(swiper);
                    swiper.emit("init");
                    swiper.emit("afterInit");
                    return swiper;
                }
                destroy(deleteInstance, cleanStyles) {
                    if (deleteInstance === void 0) deleteInstance = true;
                    if (cleanStyles === void 0) cleanStyles = true;
                    const swiper = this;
                    const {params, el, wrapperEl, slides} = swiper;
                    if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                    swiper.emit("beforeDestroy");
                    swiper.initialized = false;
                    swiper.detachEvents();
                    if (params.loop) swiper.loopDestroy();
                    if (cleanStyles) {
                        swiper.removeClasses();
                        if (el && typeof el !== "string") el.removeAttribute("style");
                        if (wrapperEl) wrapperEl.removeAttribute("style");
                        if (slides && slides.length) slides.forEach((slideEl => {
                            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                            slideEl.removeAttribute("style");
                            slideEl.removeAttribute("data-swiper-slide-index");
                        }));
                    }
                    swiper.emit("destroy");
                    Object.keys(swiper.eventsListeners).forEach((eventName => {
                        swiper.off(eventName);
                    }));
                    if (deleteInstance !== false) {
                        if (swiper.el && typeof swiper.el !== "string") swiper.el.swiper = null;
                        (0, utils.v)(swiper);
                    }
                    swiper.destroyed = true;
                    return null;
                }
                static extendDefaults(newDefaults) {
                    (0, utils.u)(extendedDefaults, newDefaults);
                }
                static get extendedDefaults() {
                    return extendedDefaults;
                }
                static get defaults() {
                    return defaults;
                }
                static installModule(mod) {
                    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                    const modules = Swiper.prototype.__modules__;
                    if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
                }
                static use(module) {
                    if (Array.isArray(module)) {
                        module.forEach((m => Swiper.installModule(m)));
                        return Swiper;
                    }
                    Swiper.installModule(module);
                    return Swiper;
                }
            }
            Object.keys(prototypes).forEach((prototypeGroup => {
                Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                }));
            }));
            Swiper.use([ Resize, Observer ]);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    __webpack_require__.m = __webpack_modules__;
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.f = {};
        __webpack_require__.e = chunkId => Promise.all(Object.keys(__webpack_require__.f).reduce(((promises, key) => {
            __webpack_require__.f[key](chunkId, promises);
            return promises;
        }), []));
    })();
    (() => {
        __webpack_require__.u = chunkId => chunkId + ".index.js";
    })();
    (() => {
        __webpack_require__.miniCssF = chunkId => "../css/" + chunkId + "." + "04c55bfd" + ".css";
    })();
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        var inProgress = {};
        var dataWebpackPrefix = "gulpwebpack2024:";
        __webpack_require__.l = (url, done, key, chunkId) => {
            if (inProgress[url]) {
                inProgress[url].push(done);
                return;
            }
            var script, needAttach;
            if (key !== void 0) {
                var scripts = document.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    var s = scripts[i];
                    if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
                        script = s;
                        break;
                    }
                }
            }
            if (!script) {
                needAttach = true;
                script = document.createElement("script");
                script.charset = "utf-8";
                script.timeout = 120;
                if (__webpack_require__.nc) script.setAttribute("nonce", __webpack_require__.nc);
                script.setAttribute("data-webpack", dataWebpackPrefix + key);
                script.src = url;
            }
            inProgress[url] = [ done ];
            var onScriptComplete = (prev, event) => {
                script.onerror = script.onload = null;
                clearTimeout(timeout);
                var doneFns = inProgress[url];
                delete inProgress[url];
                script.parentNode && script.parentNode.removeChild(script);
                doneFns && doneFns.forEach((fn => fn(event)));
                if (prev) return prev(event);
            };
            var timeout = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: script
            }), 12e4);
            script.onerror = onScriptComplete.bind(null, script.onerror);
            script.onload = onScriptComplete.bind(null, script.onload);
            needAttach && document.head.appendChild(script);
        };
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        var scriptUrl;
        if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
        var document = __webpack_require__.g.document;
        if (!scriptUrl && document) {
            if (document.currentScript) scriptUrl = document.currentScript.src;
            if (!scriptUrl) {
                var scripts = document.getElementsByTagName("script");
                if (scripts.length) {
                    var i = scripts.length - 1;
                    while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
                }
            }
        }
        if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
        scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
        __webpack_require__.p = scriptUrl;
    })();
    (() => {
        if (typeof document === "undefined") return;
        var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
            var linkTag = document.createElement("link");
            linkTag.rel = "stylesheet";
            linkTag.type = "text/css";
            if (__webpack_require__.nc) linkTag.nonce = __webpack_require__.nc;
            var onLinkComplete = event => {
                linkTag.onerror = linkTag.onload = null;
                if (event.type === "load") resolve(); else {
                    var errorType = event && event.type;
                    var realHref = event && event.target && event.target.href || fullhref;
                    var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
                    err.name = "ChunkLoadError";
                    err.code = "CSS_CHUNK_LOAD_FAILED";
                    err.type = errorType;
                    err.request = realHref;
                    if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag);
                    reject(err);
                }
            };
            linkTag.onerror = linkTag.onload = onLinkComplete;
            linkTag.href = fullhref;
            if (oldTag) oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling); else document.head.appendChild(linkTag);
            return linkTag;
        };
        var findStylesheet = (href, fullhref) => {
            var existingLinkTags = document.getElementsByTagName("link");
            for (var i = 0; i < existingLinkTags.length; i++) {
                var tag = existingLinkTags[i];
                var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
                if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
            }
            var existingStyleTags = document.getElementsByTagName("style");
            for (i = 0; i < existingStyleTags.length; i++) {
                tag = existingStyleTags[i];
                dataHref = tag.getAttribute("data-href");
                if (dataHref === href || dataHref === fullhref) return tag;
            }
        };
        var loadStylesheet = chunkId => new Promise(((resolve, reject) => {
            var href = __webpack_require__.miniCssF(chunkId);
            var fullhref = __webpack_require__.p + href;
            if (findStylesheet(href, fullhref)) return resolve();
            createStylesheet(chunkId, fullhref, null, resolve, reject);
        }));
        var installedCssChunks = {
            792: 0
        };
        __webpack_require__.f.miniCss = (chunkId, promises) => {
            var cssChunks = {
                210: 1
            };
            if (installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]); else if (installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then((() => {
                installedCssChunks[chunkId] = 0;
            }), (e => {
                delete installedCssChunks[chunkId];
                throw e;
            })));
        };
    })();
    (() => {
        var installedChunks = {
            792: 0
        };
        __webpack_require__.f.j = (chunkId, promises) => {
            var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : void 0;
            if (installedChunkData !== 0) if (installedChunkData) promises.push(installedChunkData[2]); else if (true) {
                var promise = new Promise(((resolve, reject) => installedChunkData = installedChunks[chunkId] = [ resolve, reject ]));
                promises.push(installedChunkData[2] = promise);
                var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                var error = new Error;
                var loadingEnded = event => {
                    if (__webpack_require__.o(installedChunks, chunkId)) {
                        installedChunkData = installedChunks[chunkId];
                        if (installedChunkData !== 0) installedChunks[chunkId] = void 0;
                        if (installedChunkData) {
                            var errorType = event && (event.type === "load" ? "missing" : event.type);
                            var realSrc = event && event.target && event.target.src;
                            error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")";
                            error.name = "ChunkLoadError";
                            error.type = errorType;
                            error.request = realSrc;
                            installedChunkData[1](error);
                        }
                    }
                };
                __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
            }
        };
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            var [chunkIds, moreModules, runtime] = data;
            var moduleId, chunkId, i = 0;
            if (chunkIds.some((id => installedChunks[id] !== 0))) {
                for (moduleId in moreModules) if (__webpack_require__.o(moreModules, moduleId)) __webpack_require__.m[moduleId] = moreModules[moduleId];
                if (runtime) runtime(__webpack_require__);
            }
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            for (;i < chunkIds.length; i++) {
                chunkId = chunkIds[i];
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) installedChunks[chunkId][0]();
                installedChunks[chunkId] = 0;
            }
        };
        var chunkLoadingGlobal = self["webpackChunkgulpwebpack2024"] = self["webpackChunkgulpwebpack2024"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    })();
    (() => {
        "use strict";
        var react = __webpack_require__(540);
        var functions = __webpack_require__(395);
        __webpack_require__(97);
        var smooth_scroll_polyfills_min = __webpack_require__(496);
        var gotoblock_gotoBlock = function gotoBlock(targetBlock) {
            var noHeader = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            var speed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 500;
            var offsetTop = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
            var targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                var headerItem = "";
                var headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                var options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? (0, functions.KT)() : null;
                if (typeof smooth_scroll_polyfills_min !== "undefined") (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    var targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                (0, functions.yU)("[gotoBlock]: Юхуу...едем к ".concat(targetBlock));
            } else (0, functions.yU)("[gotoBlock]: Ой ой..Такого блока нет на странице: ".concat(targetBlock));
        };
        var addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    var targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        var gotoLink = targetElement.closest("[data-goto]");
                        var gotoLinkSelector = gotoLink.dataset["goto"] ? gotoLink.dataset["goto"] : "";
                        var noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        var gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 800;
                        var offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    var entry = e.detail.entry;
                    var _targetElement = entry.target;
                    if (_targetElement.dataset.watch === "navigator") {
                        document.querySelector("[data-goto]._navigator-active");
                        var navigatorCurrentItem;
                        if (_targetElement.id && document.querySelector('[data-goto="#'.concat(_targetElement.id, '"]'))) navigatorCurrentItem = document.querySelector('[data-goto="#'.concat(_targetElement.id, '"]')); else if (_targetElement.classList.length) for (var index = 0; index < _targetElement.classList.length; index++) {
                            var element = _targetElement.classList[index];
                            if (document.querySelector('[data-goto=".'.concat(element, '"]'))) {
                                navigatorCurrentItem = document.querySelector('[data-goto=".'.concat(element, '"]'));
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if ((0, functions.Zd)()) {
                var goToHash;
                if (document.querySelector("#".concat((0, functions.Zd)()))) goToHash = "#".concat((0, 
                functions.Zd)()); else if (document.querySelector(".".concat((0, functions.Zd)()))) goToHash = ".".concat((0, 
                functions.Zd)());
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            var header = document.querySelector("header.header");
            var headerShow = header.hasAttribute("data-scroll-show");
            var headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            var startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            var scrollDirection = 0;
            var timer;
            document.addEventListener("scroll", (function(e) {
                var scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((function() {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((function() {
            if (addWindowScrollEvent) {
                var windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        var jsx_runtime = __webpack_require__(848);
        var Template = function Template() {
            (0, react.useEffect)((function() {
                functions.vE();
                functions.mU();
                functions.t();
                Promise.all([ __webpack_require__.e(244), __webpack_require__.e(210) ]).then(__webpack_require__.bind(__webpack_require__, 210));
                __webpack_require__.e(498).then(__webpack_require__.bind(__webpack_require__, 498));
                __webpack_require__.e(975).then(__webpack_require__.bind(__webpack_require__, 975));
                __webpack_require__.e(101).then(__webpack_require__.bind(__webpack_require__, 101));
                pageNavigation();
                headerScroll();
            }), []);
            return (0, jsx_runtime.jsx)("div", {});
        };
        const js_Template = Template;
        var client = __webpack_require__(338);
        function Button_createForOfIteratorHelper(r, e) {
            var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (!t) {
                if (Array.isArray(r) || (t = Button_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                    t && (r = t);
                    var _n = 0, F = function F() {};
                    return {
                        s: F,
                        n: function n() {
                            return _n >= r.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: r[_n++]
                            };
                        },
                        e: function e(r) {
                            throw r;
                        },
                        f: F
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var o, a = !0, u = !1;
            return {
                s: function s() {
                    t = t.call(r);
                },
                n: function n() {
                    var r = t.next();
                    return a = r.done, r;
                },
                e: function e(r) {
                    u = !0, o = r;
                },
                f: function f() {
                    try {
                        a || null == t["return"] || t["return"]();
                    } finally {
                        if (u) throw o;
                    }
                }
            };
        }
        function Button_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return Button_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Button_arrayLikeToArray(r, a) : void 0;
            }
        }
        function Button_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        var Button = function Button(props) {
            return (0, jsx_runtime.jsx)("div", {
                onClick: function onClick() {
                    if (props["class"] == "login__form__enterence-button") {
                        props.checkLogin();
                        props.checkPassword();
                        if (props.checkLogin() && props.checkPassword()) {
                            props.setLoginActive(false);
                            if (!document.documentElement.classList.contains("menu-open")) document.documentElement.classList.remove("lock");
                        }
                    }
                    if (props["class"] == "menu__access__registration") {
                        document.documentElement.classList.add("lock");
                        props.setRegistrationActive(true);
                    }
                    if (props["class"] == "registration__form__enterance-button") {
                        props.checkLogin();
                        props.checkPassword();
                        props.checkMail();
                        if (props.checkLogin() && props.checkPassword() && props.checkMail() && props.comparePasswords()) {
                            props.addNewUser({
                                nickName: props.newUser.nickname,
                                mail: props.newUser.mail,
                                password: props.newUser.password
                            });
                            props.mailApprovementRef.current.style.opacity = 1;
                            setTimeout((function() {
                                return props.mailApprovementRef.current.style.opacity = 0;
                            }), 5e3);
                        }
                    }
                    if (props["class"] == "password__form__cancel-button") {
                        props.setPasswordActive(false);
                        props.setLoginActive(true);
                        props.setCodeSent(false);
                    }
                    if (props["class"] == "password__form__enterence-button") {
                        var _step, _iterator = Button_createForOfIteratorHelper(props.usersArray);
                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                var item = _step.value;
                                if (item.mail == props.loginForPass) props.setCodeSent(true);
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }
                    }
                },
                className: "".concat(props["class"], " button"),
                children: (0, jsx_runtime.jsx)("button", {
                    children: props.children
                })
            });
        };
        const Common_Button = Button;
        var SvgIcons = __webpack_require__(870);
        __webpack_require__(5);
        function Login_typeof(o) {
            "@babel/helpers - typeof";
            return Login_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, Login_typeof(o);
        }
        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter((function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                }))), t.push.apply(t, o);
            }
            return t;
        }
        function _objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                    _defineProperty(e, r, t[r]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }));
            }
            return e;
        }
        function _defineProperty(e, r, t) {
            return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function _toPropertyKey(t) {
            var i = _toPrimitive(t, "string");
            return "symbol" == Login_typeof(i) ? i : i + "";
        }
        function _toPrimitive(t, r) {
            if ("object" != Login_typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != Login_typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        function Login_createForOfIteratorHelper(r, e) {
            var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (!t) {
                if (Array.isArray(r) || (t = Login_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                    t && (r = t);
                    var _n = 0, F = function F() {};
                    return {
                        s: F,
                        n: function n() {
                            return _n >= r.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: r[_n++]
                            };
                        },
                        e: function e(r) {
                            throw r;
                        },
                        f: F
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var o, a = !0, u = !1;
            return {
                s: function s() {
                    t = t.call(r);
                },
                n: function n() {
                    var r = t.next();
                    return a = r.done, r;
                },
                e: function e(r) {
                    u = !0, o = r;
                },
                f: function f() {
                    try {
                        a || null == t["return"] || t["return"]();
                    } finally {
                        if (u) throw o;
                    }
                }
            };
        }
        function _slicedToArray(r, e) {
            return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || Login_unsupportedIterableToArray(r, e) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Login_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return Login_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Login_arrayLikeToArray(r, a) : void 0;
            }
        }
        function Login_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function _iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function _arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var Login = function Login(props) {
            var _useState = (0, react.useState)(false), _useState2 = _slicedToArray(_useState, 2), eye = _useState2[0], setEye = _useState2[1];
            var _useState3 = (0, react.useState)(false), _useState4 = _slicedToArray(_useState3, 2), login = _useState4[0], setLogin = _useState4[1];
            var _useState5 = (0, react.useState)(false), _useState6 = _slicedToArray(_useState5, 2), password = _useState6[0], setPassword = _useState6[1];
            var _useState7 = (0, react.useState)(false), _useState8 = _slicedToArray(_useState7, 2), init = _useState8[0], setInit = _useState8[1];
            (0, react.useEffect)((function() {
                props.setUser({
                    login: "",
                    password: ""
                });
            }), [ props.loginActive ]);
            (0, react.useEffect)((function() {
                setInit(false);
                setLogin(false);
                setPassword(false);
            }), [ props.user ]);
            function checkLogin() {
                setInit(true);
                var _step, _iterator = Login_createForOfIteratorHelper(props.usersArray);
                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        var item = _step.value;
                        if (item.mail == props.user.login) {
                            props.setLogged(item.nickName);
                            setLogin(true);
                            return true;
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }
            }
            function checkPassword() {
                setInit(true);
                var _step2, _iterator2 = Login_createForOfIteratorHelper(props.usersArray);
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var item = _step2.value;
                        if (item.password == props.user.password) {
                            setPassword(true);
                            return true;
                        }
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
            }
            (0, react.useEffect)((function() {
                var inputArray = document.querySelectorAll(".popUp__input");
                var _step3, _iterator3 = Login_createForOfIteratorHelper(inputArray);
                try {
                    var _loop = function _loop() {
                        var input = _step3.value;
                        var title = input.previousElementSibling;
                        input.onfocus = function() {
                            title.style.color = "#fff";
                        };
                        input.onblur = function() {
                            title.style.color = "rgba(255, 255, 255, 0.5)";
                        };
                    };
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) _loop();
                } catch (err) {
                    _iterator3.e(err);
                } finally {
                    _iterator3.f();
                }
            }), []);
            return (0, jsx_runtime.jsx)("section", {
                className: "login ".concat(props.loginActive ? "login-open" : ""),
                children: (0, jsx_runtime.jsxs)("div", {
                    className: "login__wrapper",
                    children: [ (0, jsx_runtime.jsx)("div", {
                        className: "login__container",
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: "login__block",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "login__services",
                                children: [ (0, jsx_runtime.jsx)("h3", {
                                    className: "login__services__title",
                                    children: "Войти с помощью сервисов:"
                                }), (0, jsx_runtime.jsxs)("ul", {
                                    className: "login__services__list",
                                    children: [ (0, jsx_runtime.jsx)("li", {
                                        className: "login__services__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "login__services__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.$r, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "login__servises__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "login__services__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.sP, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "login__servises__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "login__services__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.iA, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "login__servises__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "login__services__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.Rj, {})
                                        })
                                    }) ]
                                }) ]
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "login__between",
                                children: "Или"
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "login__form-wrapper",
                                children: (0, jsx_runtime.jsxs)("form", {
                                    onSubmit: function onSubmit(e) {
                                        e.preventDefault();
                                    },
                                    action: "",
                                    className: "login__form",
                                    children: [ (0, jsx_runtime.jsxs)("div", {
                                        className: "login__form__mail",
                                        children: [ (0, jsx_runtime.jsx)("h3", {
                                            className: "login__form__mail__title",
                                            children: "Электронная почта"
                                        }), (0, jsx_runtime.jsx)("input", {
                                            value: props.user.login,
                                            onInvalid: function onInvalid(e) {
                                                return e.preventDefault();
                                            },
                                            onChange: function onChange(e) {
                                                props.setUser(_objectSpread(_objectSpread({}, props.user), {}, {
                                                    login: e.target.value
                                                }));
                                            },
                                            type: "email",
                                            placeholder: "Email",
                                            className: " popUp__input login__form__mail__input"
                                        }), !login && init ? (0, jsx_runtime.jsxs)("div", {
                                            className: "login__invalid",
                                            children: [ (0, jsx_runtime.jsx)("span", {
                                                children: "x"
                                            }), "Invalid login. Try again" ]
                                        }) : "" ]
                                    }), (0, jsx_runtime.jsxs)("div", {
                                        className: "login__form__password",
                                        children: [ (0, jsx_runtime.jsx)("button", {
                                            type: "button",
                                            onClick: function onClick() {
                                                return setEye(!eye);
                                            },
                                            className: "login__form__password__eye",
                                            children: !eye ? (0, jsx_runtime.jsx)(SvgIcons.yl, {}) : (0, jsx_runtime.jsx)(SvgIcons.CN, {})
                                        }), (0, jsx_runtime.jsx)("input", {
                                            value: props.user.password,
                                            onChange: function onChange(e) {
                                                props.setUser(_objectSpread(_objectSpread({}, props.user), {}, {
                                                    password: e.target.value
                                                }));
                                            },
                                            type: eye ? "password" : "text",
                                            placeholder: "Пароль",
                                            className: " popUp__input login__form__password__input"
                                        }), !password && init ? (0, jsx_runtime.jsxs)("div", {
                                            className: "login__invalid",
                                            children: [ (0, jsx_runtime.jsx)("span", {
                                                children: "x"
                                            }), "Invalid password. Try again" ]
                                        }) : "", (0, jsx_runtime.jsx)("button", {
                                            onClick: function onClick() {
                                                props.setLoginActive(false);
                                                props.setPasswordActive(true);
                                            },
                                            className: "login__form__password__forgot",
                                            children: "Забыли пароль?"
                                        }) ]
                                    }), (0, jsx_runtime.jsx)("div", {
                                        className: "login__form__anotherPC",
                                        children: (0, jsx_runtime.jsxs)("div", {
                                            className: " login__form__anotherPC__checkboxcheckbox",
                                            children: [ (0, jsx_runtime.jsx)("input", {
                                                id: "a_1",
                                                "data-error": "Ошибка",
                                                className: "login__form__anotherPC__input checkbox__input",
                                                type: "checkbox",
                                                value: "1",
                                                name: "form[]"
                                            }), (0, jsx_runtime.jsx)("label", {
                                                htmlFor: "a_1",
                                                className: "checkbox__label",
                                                children: (0, jsx_runtime.jsx)("span", {
                                                    className: "checkbox__text login__form__anotherPC__title",
                                                    children: "Чужой компьютер"
                                                })
                                            }) ]
                                        })
                                    }), (0, jsx_runtime.jsx)(Common_Button, {
                                        loginActive: props.loginActive,
                                        setLoginActive: props.setLoginActive,
                                        checkPassword,
                                        checkLogin,
                                        class: "login__form__enterence-button",
                                        children: "Войти"
                                    }) ]
                                })
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "login__bottom",
                                children: [ (0, jsx_runtime.jsx)("h4", {
                                    className: "login__bottom__title",
                                    children: "Нет аккаунта?"
                                }), (0, jsx_runtime.jsx)("button", {
                                    onClick: function onClick() {
                                        props.setLoginActive(false);
                                        props.setRegistrationActive(true);
                                    },
                                    className: "login__bottom__button",
                                    children: "Создать"
                                }) ]
                            }) ]
                        })
                    }), (0, jsx_runtime.jsx)("button", {
                        onClick: function onClick() {
                            if (!document.documentElement.classList.contains("menu-open")) document.documentElement.classList.remove("lock");
                            props.setLoginActive(false);
                        },
                        className: "login__cancel  menu__icon"
                    }) ]
                })
            });
        };
        const PopUps_Login = Login;
        function Registration_typeof(o) {
            "@babel/helpers - typeof";
            return Registration_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, Registration_typeof(o);
        }
        function Registration_ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter((function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable;
                }))), t.push.apply(t, o);
            }
            return t;
        }
        function Registration_objectSpread(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? Registration_ownKeys(Object(t), !0).forEach((function(r) {
                    Registration_defineProperty(e, r, t[r]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Registration_ownKeys(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                }));
            }
            return e;
        }
        function Registration_defineProperty(e, r, t) {
            return (r = Registration_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function Registration_toPropertyKey(t) {
            var i = Registration_toPrimitive(t, "string");
            return "symbol" == Registration_typeof(i) ? i : i + "";
        }
        function Registration_toPrimitive(t, r) {
            if ("object" != Registration_typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != Registration_typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        function Registration_createForOfIteratorHelper(r, e) {
            var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (!t) {
                if (Array.isArray(r) || (t = Registration_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                    t && (r = t);
                    var _n = 0, F = function F() {};
                    return {
                        s: F,
                        n: function n() {
                            return _n >= r.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: r[_n++]
                            };
                        },
                        e: function e(r) {
                            throw r;
                        },
                        f: F
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var o, a = !0, u = !1;
            return {
                s: function s() {
                    t = t.call(r);
                },
                n: function n() {
                    var r = t.next();
                    return a = r.done, r;
                },
                e: function e(r) {
                    u = !0, o = r;
                },
                f: function f() {
                    try {
                        a || null == t["return"] || t["return"]();
                    } finally {
                        if (u) throw o;
                    }
                }
            };
        }
        function Registration_slicedToArray(r, e) {
            return Registration_arrayWithHoles(r) || Registration_iterableToArrayLimit(r, e) || Registration_unsupportedIterableToArray(r, e) || Registration_nonIterableRest();
        }
        function Registration_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Registration_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return Registration_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Registration_arrayLikeToArray(r, a) : void 0;
            }
        }
        function Registration_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function Registration_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function Registration_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var Registration = function Registration(props) {
            var _useState = (0, react.useState)(false), _useState2 = Registration_slicedToArray(_useState, 2), eyeMain = _useState2[0], setEyeMain = _useState2[1];
            var _useState3 = (0, react.useState)(false), _useState4 = Registration_slicedToArray(_useState3, 2), eyeSecond = _useState4[0], setEyeSecond = _useState4[1];
            var _useState5 = (0, react.useState)(false), _useState6 = Registration_slicedToArray(_useState5, 2), login = _useState6[0], setLogin = _useState6[1];
            var _useState7 = (0, react.useState)(false), _useState8 = Registration_slicedToArray(_useState7, 2), password = _useState8[0], setPassword = _useState8[1];
            var _useState9 = (0, react.useState)(false), _useState10 = Registration_slicedToArray(_useState9, 2), mail = _useState10[0], setMail = _useState10[1];
            var _useState11 = (0, react.useState)(false), _useState12 = Registration_slicedToArray(_useState11, 2), init = _useState12[0], setInit = _useState12[1];
            var _useState13 = (0, react.useState)({
                nickname: "",
                mail: "",
                password: "",
                repeatPassword: "",
                id: ""
            }), _useState14 = Registration_slicedToArray(_useState13, 2), newUser = _useState14[0], setNewUser = _useState14[1];
            var mailApprovementRef = (0, react.useRef)();
            var mailApprovement = (0, jsx_runtime.jsxs)("div", {
                ref: mailApprovementRef,
                className: "registration__mailAprovement",
                children: [ (0, jsx_runtime.jsx)("h3", {
                    className: "registration__mailAprovement__title",
                    children: "На указанный адрес отправлено письмо с подтверждением"
                }), (0, jsx_runtime.jsx)("h4", {
                    className: "registration__mailAprovement__subtitle",
                    children: "Перейдите по ссылке в письме, чтобы привязать адрес к вашему аккаунту"
                }) ]
            });
            (0, react.useEffect)((function() {
                setInit(false);
                setLogin(false);
                setPassword(false);
                setMail(false);
            }), [ newUser ]);
            function checkLogin() {
                setInit(true);
                var string = newUser.nickname;
                var _step, _iterator = Registration_createForOfIteratorHelper(props.usersArray);
                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        var item = _step.value;
                        if (item.nickName == string) return false;
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }
                var regex = /^[a-zA-Z0-9_-]+$/;
                if (regex.test(string) && string.length > 2) {
                    setLogin(true);
                    return true;
                }
            }
            function checkPassword() {
                setInit(true);
                var string = newUser.password;
                var regex = /^[a-zA-Z0-9]+$/;
                if (regex.test(string) && string.length > 5) {
                    setPassword(true);
                    return true;
                }
            }
            function checkMail() {
                setInit(true);
                var string = newUser.mail;
                var _step2, _iterator2 = Registration_createForOfIteratorHelper(props.usersArray);
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var item = _step2.value;
                        if (item.mail == string) return false;
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
                if (string.includes("@")) {
                    setMail(true);
                    return true;
                }
            }
            function comparePasswords() {
                return newUser.password !== newUser.repeatPassword ? false : true;
            }
            return (0, jsx_runtime.jsx)("section", {
                className: "login registration ".concat(props.registrationActive ? "login-open" : ""),
                children: (0, jsx_runtime.jsxs)("div", {
                    className: "login__wrapper registration__wrapper",
                    children: [ mailApprovement, (0, jsx_runtime.jsx)("div", {
                        className: "login__container registration__container",
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: "login__block registration__block",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "login__services",
                                children: [ (0, jsx_runtime.jsx)("h3", {
                                    className: "login__services__title",
                                    children: "Войти с помощью сервисов:"
                                }), (0, jsx_runtime.jsxs)("ul", {
                                    className: "login__services__list",
                                    children: [ (0, jsx_runtime.jsx)("li", {
                                        className: "login__services__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "login__services__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.$r, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "login__servises__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "login__services__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.sP, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "login__servises__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "login__services__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.iA, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "login__servises__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "login__services__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.Rj, {})
                                        })
                                    }) ]
                                }) ]
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "login__between",
                                children: "Или"
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "login__form-wrapper registration__form__wrapper",
                                children: (0, jsx_runtime.jsxs)("form", {
                                    onSubmit: function onSubmit(e) {
                                        e.preventDefault();
                                    },
                                    action: "",
                                    className: "login__form registration__form",
                                    children: [ (0, jsx_runtime.jsxs)("div", {
                                        className: "login__form__mail registration__form__nickname",
                                        children: [ (0, jsx_runtime.jsx)("h3", {
                                            className: "login__form__mail__title registration__form__mail__nickname",
                                            children: "Никнейм"
                                        }), (0, jsx_runtime.jsx)("input", {
                                            onInvalid: function onInvalid(e) {
                                                return e.preventDefault();
                                            },
                                            onChange: function onChange(e) {
                                                setNewUser(Registration_objectSpread(Registration_objectSpread({}, newUser), {}, {
                                                    nickname: e.target.value
                                                }));
                                            },
                                            type: "email",
                                            placeholder: "Nickname",
                                            className: " popUp__input login__form__mail__input registration__form__mail__input"
                                        }), !login && init ? (0, jsx_runtime.jsxs)("div", {
                                            className: "login__invalid registration__form__invalid",
                                            children: [ (0, jsx_runtime.jsx)("span", {
                                                children: "x"
                                            }), 'Никнейм должен содержать от 3 до 24 латинских символов. Разрешены "_" ".".' ]
                                        }) : "" ]
                                    }), (0, jsx_runtime.jsxs)("div", {
                                        className: "login__form__mail registration__form__mail",
                                        children: [ (0, jsx_runtime.jsx)("h3", {
                                            className: "login__form__mail__title registration__form__mail__title",
                                            children: "Электронная почта"
                                        }), (0, jsx_runtime.jsx)("input", {
                                            onInvalid: function onInvalid(e) {
                                                return e.preventDefault();
                                            },
                                            onChange: function onChange(e) {
                                                setNewUser(Registration_objectSpread(Registration_objectSpread({}, newUser), {}, {
                                                    mail: e.target.value
                                                }));
                                            },
                                            type: "email",
                                            placeholder: "Email",
                                            className: " popUp__input login__form__mail__input registration__form__mail__input"
                                        }), !mail && init ? (0, jsx_runtime.jsxs)("div", {
                                            className: "login__invalid registration__form__invalid",
                                            children: [ (0, jsx_runtime.jsx)("span", {
                                                children: "x"
                                            }), "Invalid mail. Try again" ]
                                        }) : "" ]
                                    }), (0, jsx_runtime.jsxs)("div", {
                                        className: "login__form__password registration__form__password",
                                        children: [ (0, jsx_runtime.jsx)("button", {
                                            type: "button",
                                            onClick: function onClick() {
                                                return setEyeMain(!eyeMain);
                                            },
                                            className: "login__form__password__eye",
                                            children: !eyeMain ? (0, jsx_runtime.jsx)(SvgIcons.yl, {}) : (0, jsx_runtime.jsx)(SvgIcons.CN, {})
                                        }), (0, jsx_runtime.jsx)("h3", {
                                            className: "login__form__mail__title registration__form__password__title",
                                            children: "Пароль"
                                        }), (0, jsx_runtime.jsx)("input", {
                                            onChange: function onChange(e) {
                                                setNewUser(Registration_objectSpread(Registration_objectSpread({}, newUser), {}, {
                                                    password: e.target.value
                                                }));
                                            },
                                            type: eyeMain ? "password" : "text",
                                            placeholder: "Пароль",
                                            className: " popUp__input login__form__password__input registration__form__password__input"
                                        }), !password && init ? (0, jsx_runtime.jsxs)("div", {
                                            className: "login__invalid registration__form__invalid",
                                            children: [ (0, jsx_runtime.jsx)("span", {
                                                children: "x"
                                            }), "Пароль должен состоять от 6 до 18 символов, используя строчный и заглавные буквы A-z" ]
                                        }) : "" ]
                                    }), (0, jsx_runtime.jsxs)("div", {
                                        className: "login__form__password registration__form__password",
                                        children: [ (0, jsx_runtime.jsx)("button", {
                                            type: "button",
                                            onClick: function onClick() {
                                                return setEyeSecond(!eyeSecond);
                                            },
                                            className: "login__form__password__eye",
                                            children: !eyeSecond ? (0, jsx_runtime.jsx)(SvgIcons.yl, {}) : (0, jsx_runtime.jsx)(SvgIcons.CN, {})
                                        }), (0, jsx_runtime.jsx)("h3", {
                                            className: "login__form__mail__title registration__form__password__title",
                                            children: "Повтор пароля"
                                        }), (0, jsx_runtime.jsx)("input", {
                                            onChange: function onChange(e) {
                                                setNewUser(Registration_objectSpread(Registration_objectSpread({}, newUser), {}, {
                                                    repeatPassword: e.target.value
                                                }));
                                            },
                                            type: eyeSecond ? "password" : "text",
                                            placeholder: "Повтор пароля",
                                            className: " popUp__input login__form__password__input registration__form__password__input"
                                        }), newUser.password !== newUser.repeatPassword && init ? (0, jsx_runtime.jsxs)("div", {
                                            className: "login__invalid registration__form__invalid",
                                            children: [ (0, jsx_runtime.jsx)("span", {
                                                children: "x"
                                            }), "Пароли не совпадают" ]
                                        }) : "" ]
                                    }), (0, jsx_runtime.jsx)("div", {
                                        className: "login__form__anotherPC registration__form__anotherPC",
                                        children: (0, jsx_runtime.jsxs)("div", {
                                            className: " login__form__anotherPC__checkboxcheckbox registration__form__anotherPC__checkboxcheckbox",
                                            children: [ (0, jsx_runtime.jsx)("input", {
                                                id: "c_1",
                                                "data-error": "Ошибка",
                                                className: "login__form__anotherPC__input checkbox__input",
                                                type: "checkbox",
                                                value: "1",
                                                name: "form[]"
                                            }), (0, jsx_runtime.jsx)("label", {
                                                htmlFor: "c_1",
                                                className: "checkbox__label",
                                                children: (0, jsx_runtime.jsxs)("span", {
                                                    className: "checkbox__text login__form__anotherPC__title",
                                                    children: [ (0, jsx_runtime.jsx)("span", {
                                                        className: "login__form__anotherPC__main",
                                                        children: "Я согласен "
                                                    }), "с правилами пользования и политикой конфиденциальности" ]
                                                })
                                            }) ]
                                        })
                                    }), (0, jsx_runtime.jsx)(Common_Button, {
                                        mailApprovementRef,
                                        addNewUser: props.addNewUser,
                                        checkPassword,
                                        checkLogin,
                                        checkMail,
                                        comparePasswords,
                                        newUser,
                                        setNewUser,
                                        class: "registration__form__enterance-button",
                                        children: "Зарегистрироваться"
                                    }) ]
                                })
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "login__bottom",
                                children: [ (0, jsx_runtime.jsx)("h4", {
                                    className: "login__bottom__title",
                                    children: "Есть аккаунт?"
                                }), (0, jsx_runtime.jsx)("button", {
                                    onClick: function onClick() {
                                        props.setRegistrationActive(false);
                                        props.setLoginActive(true);
                                    },
                                    className: "login__bottom__button",
                                    children: "Войти"
                                }) ]
                            }) ]
                        })
                    }), (0, jsx_runtime.jsx)("button", {
                        onClick: function onClick() {
                            if (!document.documentElement.classList.contains("menu-open")) document.documentElement.classList.remove("lock");
                            props.setRegistrationActive(false);
                        },
                        className: "login__cancel  menu__icon"
                    }) ]
                })
            });
        };
        const PopUps_Registration = Registration;
        function Password_slicedToArray(r, e) {
            return Password_arrayWithHoles(r) || Password_iterableToArrayLimit(r, e) || Password_unsupportedIterableToArray(r, e) || Password_nonIterableRest();
        }
        function Password_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Password_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return Password_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Password_arrayLikeToArray(r, a) : void 0;
            }
        }
        function Password_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function Password_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function Password_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var Password = function Password(props) {
            var _useState = (0, react.useState)(""), _useState2 = Password_slicedToArray(_useState, 2), loginForPass = _useState2[0], setLoginForPass = _useState2[1];
            var _useState3 = (0, react.useState)(false), _useState4 = Password_slicedToArray(_useState3, 2), codeSent = _useState4[0], setCodeSent = _useState4[1];
            var _useState5 = (0, react.useState)(false), _useState6 = Password_slicedToArray(_useState5, 2), again = _useState6[0], setAgain = _useState6[1];
            var _useState7 = (0, react.useState)(38), _useState8 = Password_slicedToArray(_useState7, 2), timer = _useState8[0], setTimer = _useState8[1];
            var _useState9 = (0, react.useState)(Math.round(Math.random() * 1e4)), _useState10 = Password_slicedToArray(_useState9, 2), number = _useState10[0], setNumber = _useState10[1];
            var _useState11 = (0, react.useState)(""), _useState12 = Password_slicedToArray(_useState11, 2), inputCode = _useState12[0], setinputCode = _useState12[1];
            (0, react.useEffect)((function() {
                var generator = function generator() {
                    var num = 0;
                    while (num.toString().length < 4) num = Math.round(Math.random() * 1e4);
                    return num;
                };
                setNumber(generator());
            }), [ again, props.passwordActive ]);
            (0, react.useEffect)((function() {
                setLoginForPass("");
                setCodeSent(false);
                setinputCode("");
            }), [ props.passwordActive ]);
            (0, react.useEffect)((function() {
                setAgain(false);
                setinputCode("");
                var timerID = setInterval((function() {
                    setTimer((function(prevTimer) {
                        var newTime = prevTimer - 1;
                        if (newTime == 0) clearInterval(timerID);
                        return newTime < 10 ? "0".concat(newTime) : newTime;
                    }));
                }), 1e3);
                setTimer(38);
                return function() {
                    return clearInterval(timerID);
                };
            }), [ codeSent, again ]);
            function isCodeCorrect() {
                return inputCode == number ? true : false;
            }
            return (0, jsx_runtime.jsx)("section", {
                className: "login password ".concat(props.passwordActive ? "login-open" : ""),
                children: (0, jsx_runtime.jsxs)("div", {
                    className: "login__wrapper password__wrapper",
                    children: [ (0, jsx_runtime.jsx)("div", {
                        className: "login__container password__container",
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: "login__block password__block",
                            children: [ (0, jsx_runtime.jsx)("h3", {
                                className: "password__title",
                                children: "Сброс пароля"
                            }), (0, jsx_runtime.jsx)("h4", {
                                className: "password__subtitle",
                                children: "Введите адрес электронной почты связанный с вашим аккаунтом"
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "login__form-wrapper",
                                children: (0, jsx_runtime.jsxs)("form", {
                                    onSubmit: function onSubmit(e) {
                                        e.preventDefault();
                                    },
                                    action: "",
                                    className: "login__form password__form",
                                    children: [ (0, jsx_runtime.jsx)("div", {
                                        className: "login__form__mail",
                                        children: (0, jsx_runtime.jsx)("input", {
                                            value: loginForPass,
                                            onInvalid: function onInvalid(e) {
                                                return e.preventDefault();
                                            },
                                            onChange: function onChange(e) {
                                                setLoginForPass(e.target.value);
                                            },
                                            type: "email",
                                            placeholder: "Электронная почта",
                                            className: "  login__form__mail__input"
                                        })
                                    }), codeSent ? (0, jsx_runtime.jsxs)("article", {
                                        className: "password__code",
                                        children: [ (0, jsx_runtime.jsxs)("h4", {
                                            className: "password__code__title",
                                            children: [ "На почту ", (0, jsx_runtime.jsx)("span", {
                                                children: loginForPass
                                            }), " отправлен код для восстановления пароля" ]
                                        }), (0, jsx_runtime.jsxs)("div", {
                                            className: "password__code__number",
                                            children: [ "your code is ", (0, jsx_runtime.jsx)("span", {
                                                children: number
                                            }) ]
                                        }), (0, jsx_runtime.jsxs)("div", {
                                            className: "password__code__access",
                                            children: [ (0, jsx_runtime.jsx)("h4", {
                                                className: "password__code__access__title",
                                                children: "Введите 4-x значный код:"
                                            }), (0, jsx_runtime.jsxs)("ul", {
                                                className: "password__code__access__enter ".concat(isCodeCorrect() ? "green" : ""),
                                                children: [ (0, jsx_runtime.jsx)("li", {
                                                    className: "password__code__access__item"
                                                }), (0, jsx_runtime.jsx)("li", {
                                                    className: "password__code__access__item"
                                                }), (0, jsx_runtime.jsx)("li", {
                                                    tabIndex: 1,
                                                    className: "password__code__access__item"
                                                }), (0, jsx_runtime.jsx)("li", {
                                                    tabIndex: 1,
                                                    className: "password__code__access__item",
                                                    children: (0, jsx_runtime.jsx)("input", {
                                                        value: inputCode,
                                                        onChange: function onChange(e) {
                                                            return setinputCode(e.target.value);
                                                        },
                                                        onInput: function onInput(e) {
                                                            e.target.value.length === 4 ? e.target.blur() : "";
                                                        },
                                                        maxLength: "4",
                                                        type: " number"
                                                    })
                                                }) ]
                                            }), (0, jsx_runtime.jsxs)("div", {
                                                className: "password__code__access__again ".concat(timer < 1 ? "-basic" : ""),
                                                children: [ (0, jsx_runtime.jsx)("button", {
                                                    onClick: function onClick() {
                                                        return timer == 0 ? setAgain(true) : "";
                                                    },
                                                    children: "Запросить снова"
                                                }), timer > 0 ? "00:".concat(timer) : "" ]
                                            }) ]
                                        }), (0, jsx_runtime.jsx)("div", {
                                            className: "password__code__bottom",
                                            children: isCodeCorrect() ? "Code is correct" : "Неверный код!"
                                        }) ]
                                    }) : "", (0, jsx_runtime.jsxs)("div", {
                                        className: "password__buttons",
                                        children: [ (0, jsx_runtime.jsx)(Common_Button, {
                                            setCodeSent,
                                            loginForPass,
                                            usersArray: props.usersArray,
                                            class: "password__form__enterence-button",
                                            children: "Продолжить"
                                        }), (0, jsx_runtime.jsx)(Common_Button, {
                                            setCodeSent,
                                            setPasswordActive: props.setPasswordActive,
                                            setLoginActive: props.setLoginActive,
                                            class: "password__form__cancel-button",
                                            children: "Отменить"
                                        }) ]
                                    }) ]
                                })
                            }) ]
                        })
                    }), (0, jsx_runtime.jsx)("button", {
                        onClick: function onClick() {
                            document.documentElement.classList.remove("lock");
                            props.setPasswordActive(false);
                        },
                        className: "login__cancel  menu__icon"
                    }) ]
                })
            });
        };
        const PopUps_Password = Password;
        function Header_slicedToArray(r, e) {
            return Header_arrayWithHoles(r) || Header_iterableToArrayLimit(r, e) || Header_unsupportedIterableToArray(r, e) || Header_nonIterableRest();
        }
        function Header_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Header_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return Header_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Header_arrayLikeToArray(r, a) : void 0;
            }
        }
        function Header_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function Header_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function Header_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var Header = function Header(props) {
            var _useState = (0, react.useState)(false), _useState2 = Header_slicedToArray(_useState, 2), loginActive = _useState2[0], setLoginActive = _useState2[1];
            var _useState3 = (0, react.useState)(false), _useState4 = Header_slicedToArray(_useState3, 2), registrationActive = _useState4[0], setRegistrationActive = _useState4[1];
            var _useState5 = (0, react.useState)(false), _useState6 = Header_slicedToArray(_useState5, 2), passwordActive = _useState6[0], setPasswordActive = _useState6[1];
            var _useState7 = (0, react.useState)({
                login: "",
                password: ""
            }), _useState8 = Header_slicedToArray(_useState7, 2), user = _useState8[0], setUser = _useState8[1];
            var _useState9 = (0, react.useState)("Войти"), _useState10 = Header_slicedToArray(_useState9, 2), logged = _useState10[0], setLogged = _useState10[1];
            var access = (0, jsx_runtime.jsxs)("div", {
                className: "menu__access",
                children: [ (0, jsx_runtime.jsxs)("div", {
                    onClick: function onClick() {
                        if (logged !== "Войти") return false;
                        document.documentElement.classList.add("lock");
                        setLoginActive(true);
                    },
                    className: "menu__access__login",
                    children: [ (0, jsx_runtime.jsx)("div", {
                        "data-spollers": true,
                        className: "spollers ".concat(logged !== "Войти" ? "" : "invisible"),
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: "spollers__item",
                            children: [ (0, jsx_runtime.jsx)("button", {
                                style: {
                                    cursor: "pointer"
                                },
                                type: "button",
                                "data-spoller": true,
                                className: "menu__access__login__name spollers__title",
                                children: logged
                            }), (0, jsx_runtime.jsx)("div", {
                                onClick: function onClick() {
                                    setLogged("Войти");
                                },
                                className: "spollers__body menu__access__login__exit",
                                children: "Exit"
                            }) ]
                        })
                    }), (0, jsx_runtime.jsx)("button", {
                        className: "".concat(logged == "Войти" ? "menu__access__login__button" : "invisible"),
                        children: logged
                    }) ]
                }), (0, jsx_runtime.jsx)(Common_Button, {
                    setRegistrationActive,
                    class: "menu__access__registration",
                    children: "Регистрация"
                }) ]
            });
            var beta = (0, jsx_runtime.jsx)("div", {
                className: "menu__beta__wrapper",
                children: (0, jsx_runtime.jsxs)("a", {
                    href: "#",
                    className: "menu__beta",
                    children: [ (0, jsx_runtime.jsx)("div", {
                        className: "menu__beta__text",
                        children: "Бета-версия"
                    }), (0, jsx_runtime.jsx)("div", {
                        className: "menu__beta__img",
                        children: (0, jsx_runtime.jsx)(SvgIcons.Uv, {})
                    }) ]
                })
            });
            return (0, jsx_runtime.jsxs)(react.Fragment, {
                children: [ (0, jsx_runtime.jsx)("header", {
                    id: "header",
                    "data-scroll": "82",
                    className: "header",
                    children: (0, jsx_runtime.jsx)("div", {
                        className: "header__container",
                        children: (0, jsx_runtime.jsxs)("div", {
                            className: "header__block",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "menu__logo",
                                children: [ (0, jsx_runtime.jsx)("a", {
                                    href: "#",
                                    className: "menu__logo__img",
                                    children: (0, jsx_runtime.jsx)(SvgIcons.l9, {})
                                }), (0, jsx_runtime.jsx)("a", {
                                    href: "",
                                    className: "menu__logo__text",
                                    children: "CYSPNET"
                                }) ]
                            }), (0, jsx_runtime.jsx)("div", {
                                onClick: function onClick() {
                                    document.documentElement.classList.toggle("lock");
                                    document.documentElement.classList.toggle("menu-open");
                                },
                                className: "header__menu menu",
                                children: (0, jsx_runtime.jsxs)("nav", {
                                    onClick: function onClick(e) {
                                        if (!e.target.closest("a")) e.stopPropagation();
                                    },
                                    className: "menu__body",
                                    children: [ (0, jsx_runtime.jsxs)("ul", {
                                        className: "menu__list",
                                        children: [ (0, jsx_runtime.jsx)("li", {
                                            className: "menu__item",
                                            children: (0, jsx_runtime.jsx)("a", {
                                                onClick: function onClick(e) {
                                                    document.documentElement.classList.remove("menu-open");
                                                },
                                                href: "#",
                                                "data-goto": "#main",
                                                className: "menu__link",
                                                children: "Главная"
                                            })
                                        }), (0, jsx_runtime.jsx)("li", {
                                            className: "menu__item",
                                            children: (0, jsx_runtime.jsx)("a", {
                                                href: "#",
                                                onClick: function onClick(e) {
                                                    document.documentElement.classList.remove("menu-open");
                                                },
                                                "data-goto": "#about",
                                                className: "menu__link",
                                                children: "О проекте"
                                            })
                                        }), (0, jsx_runtime.jsx)("li", {
                                            className: "menu__item",
                                            children: (0, jsx_runtime.jsx)("a", {
                                                href: "#",
                                                onClick: function onClick(e) {
                                                    document.documentElement.classList.remove("menu-open");
                                                },
                                                "data-goto": "#opportunities",
                                                className: "menu__link",
                                                children: "Возможности"
                                            })
                                        }), (0, jsx_runtime.jsx)("li", {
                                            className: "menu__item",
                                            children: (0, jsx_runtime.jsx)("a", {
                                                href: "#",
                                                onClick: function onClick(e) {
                                                    document.documentElement.classList.remove("menu-open");
                                                },
                                                "data-goto": "#cards",
                                                className: "menu__link",
                                                children: "Карточки"
                                            })
                                        }), (0, jsx_runtime.jsx)("li", {
                                            className: "menu__item",
                                            children: (0, jsx_runtime.jsx)("a", {
                                                href: "#",
                                                onClick: function onClick(e) {
                                                    document.documentElement.classList.remove("menu-open");
                                                },
                                                "data-goto": "#statistics",
                                                className: "menu__link",
                                                children: "Статистика"
                                            })
                                        }), (0, jsx_runtime.jsx)("li", {
                                            className: "menu__item",
                                            children: (0, jsx_runtime.jsx)("a", {
                                                href: "#",
                                                onClick: function onClick(e) {
                                                    document.documentElement.classList.remove("menu-open");
                                                },
                                                "data-goto": "#faq",
                                                className: "menu__link",
                                                children: "FAQ"
                                            })
                                        }) ]
                                    }), props.size < 640 ? access : "", props.size < 1250 ? beta : "" ]
                                })
                            }), props.size > 640 ? access : "", (0, jsx_runtime.jsx)("button", {
                                type: "button",
                                className: "menu__icon icon-menu",
                                children: (0, jsx_runtime.jsx)("span", {})
                            }) ]
                        })
                    })
                }), (0, jsx_runtime.jsx)(PopUps_Login, {
                    logged,
                    setLogged,
                    setPasswordActive,
                    usersArray: props.usersArray,
                    user,
                    setUser,
                    loginActive,
                    setLoginActive,
                    setRegistrationActive
                }), (0, jsx_runtime.jsx)(PopUps_Registration, {
                    setLoginActive,
                    addNewUser: props.addNewUser,
                    usersArray: props.usersArray,
                    user,
                    setUser,
                    registrationActive,
                    setRegistrationActive
                }), (0, jsx_runtime.jsx)(PopUps_Password, {
                    setLoginActive,
                    passwordActive,
                    setPasswordActive,
                    usersArray: props.usersArray
                }) ]
            });
        };
        const Header_Header = Header;
        var Tooltip = __webpack_require__(509);
        var Error_Error = function Error(props) {
            return (0, jsx_runtime.jsxs)("div", {
                className: "error",
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "error__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "error__block",
                        children: [ (0, jsx_runtime.jsxs)("div", {
                            className: "error__content",
                            children: [ (0, jsx_runtime.jsx)("div", {
                                className: "error__content__title",
                                children: "404"
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "error__content__text",
                                children: "Ошибка"
                            }), (0, jsx_runtime.jsx)(Common_Button, {
                                class: "error__content__button",
                                children: "Перейти на главную страницу"
                            }) ]
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "error__img",
                            children: (0, jsx_runtime.jsx)("img", {
                                src: "img/error/error__1.png",
                                alt: ""
                            })
                        }) ]
                    })
                }), props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
            });
        };
        const components_Error_Error = Error_Error;
        var swiper = __webpack_require__(236);
        var swiper_modules = __webpack_require__(467);
        var FooterAknowledge = function FooterAknowledge(props) {
            var mainArray = [ " Виктория Золотова", "Денис Савченко", "Виталий Беленький", "Азат Мужипов", "Алёна Антонова", "Павел Сидоров", "Виктория Бекстер", "Женя Раевский", "Левон Давтян", "Вадим Кульнов", "Владислав Пинчук", "Даниил Пасечник", "Никита Птицын", "Пётр Король", "Александр Листванович", "Axel Rockets", "Дмитрий Авданин", "Павел Седой", "Артём Кудрявец", "Геннадий Зозуля", "Anomidae", "Кирилл Weblucker", "Юркив Марьяна", "Axel Rockets", "Дмитрий Авданин", "Павел Седой", "Артём Кудрявец", "Геннадий Зозуля", "Anomidae", "Кирилл Weblucker", "Юркив Марьяна", "Axel Rockets", "Дмитрий Авданин", "Павел Седой", "Артём Кудрявец", "Геннадий Зозуля", "Anomidae", "Кирилл Weblucker", "Юркив Марьяна" ];
            var mainSlider = [];
            function chunkArray(array, chunkSize) {
                var _loop = function _loop(i) {
                    var chunk = array.slice(i, i + chunkSize);
                    mainSlider.push((0, jsx_runtime.jsx)("div", {
                        className: "footerAknowledge__slide swiper-slide",
                        children: (0, jsx_runtime.jsx)("div", {
                            className: "footerAknowledge__slide__wrapper",
                            children: chunk.map((function(item, index) {
                                return (0, jsx_runtime.jsx)("div", {
                                    className: "footerAknowledge__slide__item",
                                    children: item
                                }, i + index);
                            }))
                        })
                    }, Math.random()));
                };
                for (var i = 0; i < array.length; i += chunkSize) _loop(i);
            }
            chunkArray(mainArray, 6);
            (0, react.useEffect)((function() {
                var mainSlider;
                function initMainSlider() {
                    mainSlider = new swiper.A(".footerAknowledge__slider", {
                        modules: [ swiper_modules.Vx ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 4,
                        spaceBetween: 100,
                        autoHeight: true,
                        speed: 800,
                        slideToClickedSlide: false,
                        navigation: {
                            prevEl: ".footerAknowledge__navigation__left",
                            nextEl: ".footerAknowledge__navigation__right"
                        },
                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            430: {
                                slidesPerView: 2,
                                spaceBetween: 50
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            960: {
                                slidesPerView: 4
                            },
                            1345: {
                                slidesPerView: 4
                            }
                        }
                    });
                }
                initMainSlider();
                return function() {
                    if (mainSlider) mainSlider.destroy();
                };
            }), [ props.size ]);
            return (0, jsx_runtime.jsx)("div", {
                className: "footerAknowledge",
                children: (0, jsx_runtime.jsx)("div", {
                    className: "footerAknowledge__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "footerAknowledge__block",
                        children: [ (0, jsx_runtime.jsx)("h2", {
                            className: "footerAknowledge__title",
                            children: "Страница благодарностей"
                        }), (0, jsx_runtime.jsx)("h3", {
                            className: "footerAknowledge__subtitle",
                            children: "На этой странице отображются имена или никнеймы людей, которые вложили свой вклад в развитие проекта"
                        }), (0, jsx_runtime.jsxs)("div", {
                            className: "footerAknowledge__slider swiper",
                            children: [ (0, jsx_runtime.jsx)("div", {
                                className: "footerAknowledge__wrapper swiper-wrapper",
                                children: mainSlider
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "footerAknowledge__navigation",
                                children: [ (0, jsx_runtime.jsx)("button", {
                                    className: "footerAknowledge__navigation__left",
                                    children: (0, jsx_runtime.jsx)(SvgIcons.DK, {})
                                }), (0, jsx_runtime.jsx)("button", {
                                    className: "footerAknowledge__navigation__right",
                                    children: (0, jsx_runtime.jsx)(SvgIcons.DK, {})
                                }) ]
                            }) ]
                        }), (0, jsx_runtime.jsxs)("div", {
                            className: "footerAknowledge__howToGet",
                            children: [ (0, jsx_runtime.jsx)("div", {
                                className: "footerAknowledge__howToGet__title",
                                children: "Как сюда попасть:"
                            }), (0, jsx_runtime.jsxs)("ul", {
                                className: "footerAknowledge__howToGet__varieties",
                                children: [ (0, jsx_runtime.jsx)("li", {
                                    className: "footerAknowledge__howToGet__varieties__item",
                                    children: (0, jsx_runtime.jsx)("a", {
                                        className: "footerAknowledge__howToGet__varieties__link",
                                        href: "",
                                        children: "Пожертвования на разных платформах"
                                    })
                                }), (0, jsx_runtime.jsx)("li", {
                                    className: "footerAknowledge__howToGet__varieties__item",
                                    children: "Предложения и идеи"
                                }), (0, jsx_runtime.jsx)("li", {
                                    className: "footerAknowledge__howToGet__varieties__item",
                                    children: "Нахождение багов и ошибок"
                                }), (0, jsx_runtime.jsx)("li", {
                                    className: "footerAknowledge__howToGet__varieties__item",
                                    children: "Любая другая помощь"
                                }) ]
                            }) ]
                        }) ]
                    })
                })
            });
        };
        const footerAknowledge_FooterAknowledge = FooterAknowledge;
        var FooterContacts = function FooterContacts() {
            return (0, jsx_runtime.jsx)("div", {
                className: "footerContacts",
                children: (0, jsx_runtime.jsx)("div", {
                    className: "footerContacts__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "footerContacts__block",
                        children: [ (0, jsx_runtime.jsx)("h2", {
                            className: "footerContacts__title",
                            children: "Контакты"
                        }), (0, jsx_runtime.jsxs)("div", {
                            className: "footerContacts__content",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "footerContacts__content__mail",
                                children: [ (0, jsx_runtime.jsx)("h3", {
                                    className: "footerContacts__content__mail__title",
                                    children: "Email:"
                                }), (0, jsx_runtime.jsx)("a", {
                                    href: "mailto:ceo@cyspnet.com",
                                    className: "footerContacts__content__mail__link",
                                    children: "ceo@cyspnet.com"
                                }) ]
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "footerContacts__content__socials",
                                children: [ (0, jsx_runtime.jsx)("h3", {
                                    className: "footerContacts__content__socials__title",
                                    children: "Социальные сети"
                                }), (0, jsx_runtime.jsxs)("ul", {
                                    className: "footerContacts__content__socials__list",
                                    children: [ (0, jsx_runtime.jsx)("li", {
                                        className: "footerContacts__content__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerContacts__content__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.iA, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerContacts__content__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerContacts__content__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.vy, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerContacts__content__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerContacts__content__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.wR, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerContacts__content__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerContacts__content__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.O_, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerContacts__content__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerContacts__content__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.$r, {})
                                        })
                                    }) ]
                                }) ]
                            }) ]
                        }) ]
                    })
                })
            });
        };
        const footerContacts_FooterContacts = FooterContacts;
        var FooterNav = function FooterNav(props) {
            return (0, jsx_runtime.jsx)("section", {
                className: "footerNav",
                children: (0, jsx_runtime.jsx)("div", {
                    className: "footerNav__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "footerNav__block",
                        children: [ (0, jsx_runtime.jsxs)("nav", {
                            className: "footerNav__main",
                            children: [ (0, jsx_runtime.jsxs)("article", {
                                className: "footerNav__image",
                                children: [ (0, jsx_runtime.jsx)(SvgIcons.l9, {}), (0, jsx_runtime.jsx)("div", {
                                    className: "footerNav__image__text",
                                    children: "CYSPNET"
                                }) ]
                            }), (0, jsx_runtime.jsxs)("article", {
                                className: "footerNav__navigation",
                                children: [ (0, jsx_runtime.jsx)("h3", {
                                    className: "footerNav__navigation__title",
                                    children: "Навигация"
                                }), (0, jsx_runtime.jsxs)("ul", {
                                    className: "footerNav__navigation__list",
                                    children: [ (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__navigation__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            "data-goto": "#main",
                                            href: "#",
                                            className: "footerNav__navigation__link",
                                            children: "Главная"
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__navigation__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            "data-goto": "#about",
                                            href: "#",
                                            className: "footerNav__navigation__link",
                                            children: "О проекте"
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__navigation__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            "data-goto": "#opportunities",
                                            href: "#",
                                            className: "footerNav__navigation__link",
                                            children: "Возможности"
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__navigation__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            "data-goto": "#cards",
                                            className: "footerNav__navigation__link",
                                            children: "Карточки"
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__navigation__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            "data-goto": "#statistics",
                                            className: "footerNav__navigation__link",
                                            children: "Статистика"
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__navigation__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            "data-goto": "#faq",
                                            className: "footerNav__navigation__link",
                                            children: "FAQ"
                                        })
                                    }) ]
                                }) ]
                            }), (0, jsx_runtime.jsxs)("article", {
                                className: "footerNav__others",
                                children: [ (0, jsx_runtime.jsx)("h3", {
                                    className: "footerNav__others__title",
                                    children: "Разное"
                                }), (0, jsx_runtime.jsxs)("ul", {
                                    className: "footerNav__others__list",
                                    children: [ (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__others__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerNav__others__link",
                                            children: "Поддержать проект"
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__others__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerNav__others__link",
                                            children: "Благодарности"
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__others__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerNav__others__link",
                                            children: "Контакты"
                                        })
                                    }) ]
                                }) ]
                            }), (0, jsx_runtime.jsxs)("article", {
                                className: "footerNav__socials",
                                children: [ (0, jsx_runtime.jsx)("h3", {
                                    className: "footerNav__socials__title",
                                    children: "Соц. сети"
                                }), (0, jsx_runtime.jsxs)("ul", {
                                    className: "footerNav__socials__list",
                                    children: [ (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerNav__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.iA, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerNav__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.vy, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerNav__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.wR, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerNav__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.O_, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerNav__socials__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerNav__socials__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.$r, {})
                                        })
                                    }) ]
                                }) ]
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "footerNav__chicken",
                                children: (0, jsx_runtime.jsx)("img", {
                                    src: "img/footerNav/footerNav__chicken.png",
                                    alt: ""
                                })
                            }) ]
                        }), (0, jsx_runtime.jsxs)("article", {
                            className: "footerNav__bottom",
                            children: [ (0, jsx_runtime.jsx)("p", {
                                className: "footerNav__bottom__copyright",
                                children: "© 2021 Все права защищены"
                            }), (0, jsx_runtime.jsx)("a", {
                                className: "footerNav__bottom__rules",
                                href: "#",
                                children: "Правила пользования"
                            }), (0, jsx_runtime.jsx)("a", {
                                className: "footerNav__bottom__policy",
                                href: "#",
                                children: "Политика конфиденциальности"
                            }) ]
                        }) ]
                    })
                })
            });
        };
        const footerNav_FooterNav = FooterNav;
        var FooterSupport = function FooterSupport() {
            return (0, jsx_runtime.jsx)("section", {
                className: "footerSupport",
                children: (0, jsx_runtime.jsx)("div", {
                    className: "footerSupport__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "footerSupport__block",
                        children: [ (0, jsx_runtime.jsx)("h3", {
                            className: "footerSupport__title",
                            children: "Поддержка"
                        }), (0, jsx_runtime.jsxs)("div", {
                            className: "footerSupport__content",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "footerSupport__ideas",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "footerSupport__ideas__title",
                                    children: "Предложения и идеи"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "footerSupport__ideas__subtitle",
                                    children: "Вы можете написать нам на почту или в личные сообщения Вконтакте"
                                }), (0, jsx_runtime.jsxs)("ul", {
                                    className: "footerSupport__ideas__list",
                                    children: [ (0, jsx_runtime.jsxs)("li", {
                                        className: "footerSupport__ideas__item",
                                        children: [ (0, jsx_runtime.jsx)("h4", {
                                            className: "footerSupport__ideas__item__title",
                                            children: "Вконтакте:"
                                        }), (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerSupport__ideas__item__link",
                                            children: "vk.com/cyspnet"
                                        }) ]
                                    }), (0, jsx_runtime.jsxs)("li", {
                                        className: "footerSupport__ideas__item",
                                        children: [ (0, jsx_runtime.jsx)("h4", {
                                            className: "footerSupport__ideas__item__title",
                                            children: "Email:"
                                        }), (0, jsx_runtime.jsx)("a", {
                                            href: "#",
                                            className: "footerSupport__ideas__item__link",
                                            children: "ceo@cyspnet.com"
                                        }) ]
                                    }) ]
                                }) ]
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "footerSupport__crowdfunding",
                                children: [ (0, jsx_runtime.jsx)("h3", {
                                    className: "footerSupport__crowdfunding__title",
                                    children: "Краудфандинг"
                                }), (0, jsx_runtime.jsxs)("ul", {
                                    className: "footerSupport__crowdfunding__list",
                                    children: [ (0, jsx_runtime.jsx)("li", {
                                        className: "footerSupport__crowdfunding__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "footerSupport__crowdfunding__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.Mo, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerSupport__crowdfunding__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "footerSupport__crowdfunding__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.rs, {})
                                        })
                                    }), (0, jsx_runtime.jsx)("li", {
                                        className: "footerSupport__crowdfunding__item",
                                        children: (0, jsx_runtime.jsx)("a", {
                                            href: "",
                                            className: "footerSupport__crowdfunding__link",
                                            children: (0, jsx_runtime.jsx)(SvgIcons.UM, {})
                                        })
                                    }) ]
                                }) ]
                            }) ]
                        }) ]
                    })
                })
            });
        };
        const footerSupport_FooterSupport = FooterSupport;
        var MainFooter = function MainFooter(props) {
            return (0, jsx_runtime.jsxs)("footer", {
                className: "MainFooter",
                children: [ (0, jsx_runtime.jsx)(footerNav_FooterNav, {}), (0, jsx_runtime.jsx)(footerSupport_FooterSupport, {}), (0, 
                jsx_runtime.jsx)(footerContacts_FooterContacts, {}), (0, jsx_runtime.jsx)(footerAknowledge_FooterAknowledge, {
                    size: props.size
                }) ]
            });
        };
        const Footer_MainFooter = MainFooter;
        var About = function About(props) {
            return (0, jsx_runtime.jsxs)("section", {
                id: "about",
                className: "about",
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "about__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "about__block",
                        children: [ (0, jsx_runtime.jsxs)("div", {
                            className: "about__img",
                            children: [ (0, jsx_runtime.jsx)("img", {
                                className: "about__img__main",
                                src: "img/about/about__img.png",
                                alt: ""
                            }), (0, jsx_runtime.jsx)("img", {
                                className: "about__img__patern",
                                src: "img/about/about__patern.png",
                                alt: ""
                            }) ]
                        }), (0, jsx_runtime.jsxs)("article", {
                            className: "about__content",
                            children: [ (0, jsx_runtime.jsx)("h3", {
                                className: "about__content__title",
                                children: "О платформе"
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "about__content__text",
                                children: "Новый формат киберспортивной платформы. Игроки и тренеры, комментаторы и аналитики, команды и клубы, арены и организаторы — здесь каждый может раскрыть свой потенциал, зарабатывать в любимой игре и просто весело проводить время с друзьями."
                            }), (0, jsx_runtime.jsx)(Common_Button, {
                                class: "about__content__button",
                                children: "Вступить"
                            }) ]
                        }) ]
                    })
                }), props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
            });
        };
        const About_About = About;
        function Advantages_createForOfIteratorHelper(r, e) {
            var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (!t) {
                if (Array.isArray(r) || (t = Advantages_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                    t && (r = t);
                    var _n = 0, F = function F() {};
                    return {
                        s: F,
                        n: function n() {
                            return _n >= r.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: r[_n++]
                            };
                        },
                        e: function e(r) {
                            throw r;
                        },
                        f: F
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var o, a = !0, u = !1;
            return {
                s: function s() {
                    t = t.call(r);
                },
                n: function n() {
                    var r = t.next();
                    return a = r.done, r;
                },
                e: function e(r) {
                    u = !0, o = r;
                },
                f: function f() {
                    try {
                        a || null == t["return"] || t["return"]();
                    } finally {
                        if (u) throw o;
                    }
                }
            };
        }
        function Advantages_slicedToArray(r, e) {
            return Advantages_arrayWithHoles(r) || Advantages_iterableToArrayLimit(r, e) || Advantages_unsupportedIterableToArray(r, e) || Advantages_nonIterableRest();
        }
        function Advantages_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function Advantages_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return Advantages_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Advantages_arrayLikeToArray(r, a) : void 0;
            }
        }
        function Advantages_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function Advantages_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function Advantages_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var Advantages = function Advantages(props) {
            var _useState = (0, react.useState)(true), _useState2 = Advantages_slicedToArray(_useState, 2), active = _useState2[0], setActive = _useState2[1];
            var imgArr = [];
            for (var i = 0; i < 5; i++) imgArr.push((0, jsx_runtime.jsx)("div", {
                className: "advantages__img",
                children: (0, jsx_runtime.jsx)("img", {
                    className: "".concat(active ? "advantages__img-animation" : ""),
                    src: "img/advantages/advantages__arrow__".concat(i + 1, ".png"),
                    alt: ""
                })
            }));
            var _useState3 = (0, react.useState)([].concat(imgArr)), _useState4 = Advantages_slicedToArray(_useState3, 2), arr = _useState4[0], setArr = _useState4[1];
            (0, react.useEffect)((function() {
                if (props.size < 961) setArr(""); else setArr([].concat(imgArr));
            }), [ props.size ]);
            (0, react.useEffect)((function() {
                var images = document.querySelectorAll(".advantages__img-animation");
                var wrapper = document.querySelector(".advantages");
                function clear() {
                    var _step, _iterator = Advantages_createForOfIteratorHelper(images);
                    try {
                        var _loop = function _loop() {
                            var img = _step.value;
                            setTimeout((function() {
                                return img.classList.remove("advantages__img-animation");
                            }), 1e3);
                        };
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                    setActive(false);
                    console.log("work");
                }
                if (active) wrapper.addEventListener("mouseenter", clear);
                return function() {
                    wrapper.removeEventListener("mouseenter", clear);
                };
            }), []);
            return (0, jsx_runtime.jsxs)("section", {
                id: "advantages",
                className: "advantages",
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "advantages__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "advantages__block",
                        children: [ (0, jsx_runtime.jsx)("h2", {
                            className: "advantages__title",
                            children: "Наши преимущества"
                        }), (0, jsx_runtime.jsxs)("div", {
                            className: "advantages__content",
                            children: [ (0, jsx_runtime.jsxs)("article", {
                                className: "advantages__item",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "advantages__item__img",
                                    children: (0, jsx_runtime.jsx)(SvgIcons.Y8, {})
                                }), (0, jsx_runtime.jsx)("h3", {
                                    className: "advantages__item__title",
                                    children: "Получите признание комьюнити"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "advantages__item__text",
                                    children: "Соберите фан-базу и делитесь своими достижениями! Расскажите о себе в постах и комментариях своего профиля."
                                }) ]
                            }), arr[0], (0, jsx_runtime.jsxs)("article", {
                                className: "advantages__item",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "advantages__item__img",
                                    children: (0, jsx_runtime.jsx)(SvgIcons.Bz, {})
                                }), (0, jsx_runtime.jsx)("h3", {
                                    className: "advantages__item__title",
                                    children: "Попадите в топ-пользователей"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "advantages__item__text",
                                    children: "Развивайте свои навыки и получайте оценки и отзывы других пользователей! Вы ведь хотите стать лучшим в своей отрасли?"
                                }) ]
                            }), arr[1], arr[2], (0, jsx_runtime.jsxs)("article", {
                                className: "advantages__item",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "advantages__item__img",
                                    children: (0, jsx_runtime.jsx)(SvgIcons.Ct, {})
                                }), (0, jsx_runtime.jsx)("h3", {
                                    className: "advantages__item__title",
                                    children: "Используйте возможности на максимум"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "advantages__item__text",
                                    children: "Попробуйте себя в роли тренера, аналитика и комментатора или организуйте свой собственный турнир!"
                                }) ]
                            }), arr[3], (0, jsx_runtime.jsxs)("article", {
                                className: "advantages__item",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "advantages__item__img",
                                    children: (0, jsx_runtime.jsx)(SvgIcons.yf, {})
                                }), (0, jsx_runtime.jsx)("h3", {
                                    className: "advantages__item__title",
                                    children: "Монетизируйте свои навыки"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "advantages__item__text",
                                    children: "Заработайте деньги за счёт своих навыков в разных отраслях киберспорта"
                                }) ]
                            }) ]
                        }) ]
                    })
                }), props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
            });
        };
        const Advantages_Advantages = Advantages;
        function Choice_typeof(o) {
            "@babel/helpers - typeof";
            return Choice_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o;
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
            }, Choice_typeof(o);
        }
        function Choice_defineProperty(e, r, t) {
            return (r = Choice_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e;
        }
        function Choice_toPropertyKey(t) {
            var i = Choice_toPrimitive(t, "string");
            return "symbol" == Choice_typeof(i) ? i : i + "";
        }
        function Choice_toPrimitive(t, r) {
            if ("object" != Choice_typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != Choice_typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }
        var Choice = function Choice(props) {
            var mainArray = [ {
                img: (0, jsx_runtime.jsx)(SvgIcons.l4, {}),
                title: "Игрок",
                text: "Выступает на турнирах, участвует в матчах и вступает в команды. У игроков есть уровень навыка и рейтинг, рассчитанный на основе статистики. Также они могут заключать контракты с командами и клубами."
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.ae, {}),
                title: "Тренер",
                text: "Занимается развитием игроков, клубов и команд. Его рейтинг растет вместе с показателями команды, к примеру, с получением подопечными трофеев и наград."
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.Db, {}),
                title: "Организатор",
                text: "Занимается проведением турниров и лиг. Может быть нанят аренами или пользователями, которые хотят провести интересный товарищеский матч."
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.VY, {}),
                title: "Судья",
                text: "Судит и принимает важные решения в матчах и турнирах. Рейтинг судьи зависит от оценки его деятельности дргуими игроками и организаторами."
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.P8, {}),
                title: "Аналитик",
                text: "Оценивает пользователей и сообщества сайта. Этих участников могут нанять организаторы турниров для проведения предматчевой и послематчевой аналитики."
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.K9, {}),
                title: "Комментатор",
                text: "Комментирует матчи и трансляции. Может быть приглашен на турниры. Статус комментатора растет за счет среднего количества просмотров трансляций с его комментированием и оценок пользователей."
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.sw, {}),
                title: "Скаут",
                text: "Занимается поиском пользователей для сообществ и наоборот. После нахождения, в зависимости от результатов статистических показателей найденных пользователей или сообществ будет меняться его рейтинг."
            } ];
            var sliderArr = {
                mainSlider: [],
                textSlider: []
            };
            mainArray.map((function(item, index) {
                sliderArr.mainSlider.push((0, jsx_runtime.jsx)("div", {
                    className: "choice__content-main__slide  swiper-slide",
                    children: (0, jsx_runtime.jsxs)("article", {
                        className: "choice__content-main__person",
                        children: [ (0, jsx_runtime.jsx)("div", {
                            className: "choice__content-main__person__img",
                            children: item.img
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "choice__content-main__person__title",
                            children: item.title
                        }) ]
                    })
                }, index));
                sliderArr.textSlider.push((0, jsx_runtime.jsx)("article", {
                    className: "choice__content-text__slide swiper-slide",
                    children: (0, jsx_runtime.jsx)("div", {
                        className: "choice__content-text__text",
                        children: item.text
                    })
                }, index * 2));
            }));
            (0, react.useEffect)((function() {
                var mainSlider;
                var textSlider;
                function initMainSlider() {
                    mainSlider = new swiper.A(".choice__content-main__slider", {
                        modules: [ swiper_modules.Vx, swiper_modules.dK ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 7,
                        spaceBetween: 25,
                        autoHeight: true,
                        speed: 800,
                        slideToClickedSlide: false,
                        breakpoints: Choice_defineProperty({
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            470: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            600: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            680: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            },
                            820: {
                                slidesPerView: 5,
                                spaceBetween: 20
                            },
                            1060: {
                                slidesPerView: 7,
                                spaceBetween: 25
                            }
                        }, "1060", {
                            slidesPerView: 7,
                            spaceBetween: 25
                        })
                    });
                    mainSlider.on("click", (function(slider) {
                        var clickedSlide = slider.clickedSlide;
                        if (clickedSlide) {
                            slider.slides.forEach((function(slide) {
                                slide.classList.remove("active");
                            }));
                            clickedSlide.classList.add("active");
                            var clickedIndex = slider.clickedIndex;
                            textSlider.slideTo(clickedIndex);
                        }
                    }));
                    mainSlider.on("slideChange", (function() {
                        var activeIndex = mainSlider.activeIndex;
                        textSlider.slideTo(activeIndex);
                    }));
                }
                function initTextSlider() {
                    textSlider = new swiper.A(".choice__content-text__slider", {
                        modules: [ swiper_modules.Vx, swiper_modules.dK ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1,
                        spaceBetween: 50,
                        autoHeight: true,
                        speed: 800,
                        navigation: {
                            prevEl: ".choice__content-text__navigation__left",
                            nextEl: ".choice__content-text__navigation__right"
                        }
                    });
                    textSlider.on("slideChange", (function() {
                        var activeIndex = textSlider.activeIndex;
                        mainSlider.slideTo(activeIndex);
                        mainSlider.slides.forEach((function(slide) {
                            slide.classList.remove("active");
                        }));
                        mainSlider.slides[activeIndex].classList.add("active");
                    }));
                }
                initMainSlider();
                initTextSlider();
                return function() {
                    if (mainSlider) mainSlider.destroy();
                    if (textSlider) textSlider.destroy();
                };
            }), [ props.size ]);
            return (0, jsx_runtime.jsxs)("section", {
                id: "choice",
                className: "choice",
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "choice__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "choice__block",
                        children: [ (0, jsx_runtime.jsxs)("div", {
                            className: "choice__content",
                            children: [ (0, jsx_runtime.jsx)("h2", {
                                className: "choice__content__title",
                                children: "Выберите, кем хотите стать"
                            }), (0, jsx_runtime.jsx)("div", {
                                className: "choice__content-main__slider swiper",
                                children: (0, jsx_runtime.jsx)("div", {
                                    className: "choice__content-main__wrapper swiper-wrapper",
                                    children: sliderArr.mainSlider
                                })
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "choice__content-text__main-wrapper",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "choice__content-text__slider swiper",
                                    children: (0, jsx_runtime.jsx)("div", {
                                        className: "choice__content-text__wrapper swiper-wrapper",
                                        children: sliderArr.textSlider
                                    })
                                }), props.size > 640 ? (0, jsx_runtime.jsxs)("div", {
                                    className: "choice__content-text__navigation",
                                    children: [ (0, jsx_runtime.jsx)("button", {
                                        className: "choice__content-text__navigation__left",
                                        children: (0, jsx_runtime.jsx)(SvgIcons.DK, {})
                                    }), (0, jsx_runtime.jsx)("button", {
                                        className: "choice__content-text__navigation__right",
                                        children: (0, jsx_runtime.jsx)(SvgIcons.DK, {})
                                    }) ]
                                }) : "" ]
                            }) ]
                        }), (0, jsx_runtime.jsx)(Common_Button, {
                            class: "choice__join",
                            children: "Присоединиться"
                        }), props.size > 1e3 ? (0, jsx_runtime.jsxs)(react.Fragment, {
                            children: [ (0, jsx_runtime.jsx)("img", {
                                className: "choice__img-1",
                                src: "img/choice/choice__weapon__1.png",
                                alt: ""
                            }), (0, jsx_runtime.jsx)("img", {
                                className: "choice__img-2",
                                src: "img/choice/choice__weapon__2.png",
                                alt: ""
                            }), (0, jsx_runtime.jsx)("img", {
                                className: "choice__img-3",
                                src: "img/choice/choice__weapon__3.png",
                                alt: ""
                            }), (0, jsx_runtime.jsx)("img", {
                                className: "choice__img-4",
                                src: "img/choice/choice__weapon__4.png",
                                alt: ""
                            }) ]
                        }) : "" ]
                    })
                }), props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
            });
        };
        const Choice_Choice = Choice;
        var Faq = function Faq(props) {
            return (0, jsx_runtime.jsxs)("section", {
                id: "faq",
                className: "faq",
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "faq__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "faq__block",
                        children: [ (0, jsx_runtime.jsx)("h2", {
                            className: "faq__title",
                            children: "FAQ"
                        }), (0, jsx_runtime.jsxs)("div", {
                            "data-spollers": true,
                            "data-one-spoller": true,
                            className: "faq__spollers spollers",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "faq__spollers__item spollers__item",
                                children: [ (0, jsx_runtime.jsx)("button", {
                                    type: "button",
                                    "data-spoller": true,
                                    className: "faq__spollers__title spollers__title",
                                    children: "Чем я могу помочь в роли тестировщика?"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "faq__spollers__body spollers__body",
                                    children: "Во время тестирования проекта, достаточно просто пользоваться всем функционалом сайта. Делай, что тебе угодно и при нахождении багов или ошибок сообщай нам, мы будем очень признательны! A если у тебя есть опыт в тестировании проектов, то это ещё лучше!"
                                }) ]
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "faq__spollers__item spollers__item",
                                children: [ (0, jsx_runtime.jsx)("button", {
                                    type: "button",
                                    "data-spoller": true,
                                    className: "faq__spollers__title spollers__title",
                                    children: "Что ещё я получу за тестирование проекта?"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "faq__spollers__body spollers__body",
                                    children: "Во время тестирования проекта, достаточно просто пользоваться всем функционалом сайта. Делай, что тебе угодно и при нахождении багов или ошибок сообщай нам, мы будем очень признательны! A если у тебя есть опыт в тестировании проектов, то это ещё лучше!Во время тестирования проекта, достаточно просто пользоваться всем функционалом сайта. Делай, что тебе угодно и при нахождении багов или ошибок сообщай нам, мы будем очень признательны! A если у тебя есть опыт в тестировании проектов, то это ещё лучше!Во время тестирования проекта, достаточно просто пользоваться всем функционалом сайта. Делай, что тебе угодно и при нахождении багов или ошибок сообщай нам, мы будем очень признательны! A если у тебя есть опыт в тестировании проектов, то это ещё лучше!"
                                }) ]
                            }), (0, jsx_runtime.jsxs)("div", {
                                className: "faq__spollers__item spollers__item",
                                children: [ (0, jsx_runtime.jsx)("button", {
                                    type: "button",
                                    "data-spoller": true,
                                    className: "faq__spollers__title spollers__title",
                                    children: "Я могу заниматься проведением турниров?"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "faq__spollers__body spollers__body",
                                    children: "Во время тестирования проекта, достаточно просто пользоваться всем функционалом сайта. Делай, что тебе угодно и при нахождении багов или ошибок сообщай нам, мы будем очень признательны! A если у тебя есть опыт в тестировании проектов, то это ещё лучше!"
                                }) ]
                            }) ]
                        }) ]
                    })
                }), props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
            });
        };
        const Faq_Faq = Faq;
        var Hero = function Hero(props) {
            return (0, jsx_runtime.jsxs)("section", {
                id: "main",
                className: "hero",
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "hero__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "hero__block",
                        children: [ (0, jsx_runtime.jsxs)("div", {
                            className: "hero__content",
                            children: [ (0, jsx_runtime.jsx)("h3", {
                                className: "hero__content__title",
                                children: "Cyber Sport Network"
                            }), (0, jsx_runtime.jsx)("h2", {
                                className: "hero__content__subtitle",
                                children: "Играй, развивайся и выигрывай вместе с нами"
                            }), (0, jsx_runtime.jsxs)("ul", {
                                className: "hero__content__list",
                                children: [ (0, jsx_runtime.jsx)("li", {
                                    className: "hero__content__item",
                                    children: (0, jsx_runtime.jsx)("span", {
                                        children: "Ежедневные турниры"
                                    })
                                }), (0, jsx_runtime.jsx)("li", {
                                    className: "hero__content__item",
                                    children: (0, jsx_runtime.jsx)("span", {
                                        children: "Денежные призы"
                                    })
                                }), (0, jsx_runtime.jsx)("li", {
                                    className: "hero__content__item",
                                    children: (0, jsx_runtime.jsx)("span", {
                                        children: "Свой подход к читерству"
                                    })
                                }), (0, jsx_runtime.jsx)("li", {
                                    className: "hero__content__item",
                                    children: (0, jsx_runtime.jsx)("span", {
                                        children: "Уникальная рейтинговая система"
                                    })
                                }), (0, jsx_runtime.jsx)("li", {
                                    className: "hero__content__item",
                                    children: (0, jsx_runtime.jsx)("span", {
                                        children: "Развитие в любой отрасли киберспорта"
                                    })
                                }), (0, jsx_runtime.jsx)("li", {
                                    className: "hero__content__item",
                                    children: (0, jsx_runtime.jsx)("span", {
                                        children: "Интересный матчмейкинг"
                                    })
                                }) ]
                            }), (0, jsx_runtime.jsxs)("article", {
                                className: "hero__content__actions",
                                children: [ (0, jsx_runtime.jsx)(Common_Button, {
                                    class: "hero__content__actions__join",
                                    children: "Присоединиться"
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "hero__content__actions__about",
                                    children: (0, jsx_runtime.jsx)("button", {
                                        "data-goto": "#about",
                                        children: "О проекте"
                                    })
                                }) ]
                            }) ]
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "hero__img",
                            children: (0, jsx_runtime.jsx)("img", {
                                src: props.size < 960 && props.size > 700 ? "img/hero/hero__img.png" : "img/hero/hero__img__2.png",
                                alt: ""
                            })
                        }) ]
                    })
                }), props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
            });
        };
        const Hero_Hero = Hero;
        function OpportunitiesSlider_slicedToArray(r, e) {
            return OpportunitiesSlider_arrayWithHoles(r) || OpportunitiesSlider_iterableToArrayLimit(r, e) || OpportunitiesSlider_unsupportedIterableToArray(r, e) || OpportunitiesSlider_nonIterableRest();
        }
        function OpportunitiesSlider_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function OpportunitiesSlider_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return OpportunitiesSlider_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? OpportunitiesSlider_arrayLikeToArray(r, a) : void 0;
            }
        }
        function OpportunitiesSlider_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function OpportunitiesSlider_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function OpportunitiesSlider_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var OpportunitiesSlider = function OpportunitiesSlider(props) {
            var _useState = (0, react.useState)(false), _useState2 = OpportunitiesSlider_slicedToArray(_useState, 2), active = _useState2[0], setActive = _useState2[1];
            var number = props["class"];
            var mainSlide = props.mainArray[number];
            var miniSliders = [];
            props.mainArray[number].slide.map((function(item, ind) {
                miniSliders.push((0, jsx_runtime.jsxs)("div", {
                    onPointerDown: function onPointerDown(e) {
                        return setActive(true);
                    },
                    className: "opportunities-mini__slide swiper-slide",
                    children: [ active ? (0, jsx_runtime.jsxs)(react.Fragment, {
                        children: [ (0, jsx_runtime.jsx)("div", {
                            className: "opportunities-mini__title ".concat(active ? "active" : ""),
                            children: mainSlide.name
                        }), (0, jsx_runtime.jsx)("div", {
                            style: active ? {
                                backgroundColor: [ mainSlide.color ]
                            } : {},
                            className: "opportunities-mini__img ".concat(active ? mainSlide.fill : ""),
                            children: active ? item.img : mainSlide.img
                        }) ]
                    }) : (0, jsx_runtime.jsxs)(react.Fragment, {
                        children: [ (0, jsx_runtime.jsx)("div", {
                            className: "opportunities-mini__img",
                            children: mainSlide.img
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "opportunities-mini__title",
                            children: mainSlide.name
                        }) ]
                    }), (0, jsx_runtime.jsx)("div", {
                        className: "opportunities-mini__text ".concat(active ? "active" : ""),
                        children: item.content
                    }) ]
                }, ind));
            }));
            return (0, jsx_runtime.jsxs)("div", {
                className: "opportunities-mini__slider".concat(number, " opportunities-mini__slider swiper"),
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "opportunities-mini__wrapper swiper-wrapper",
                    children: miniSliders
                }), (0, jsx_runtime.jsx)("div", {
                    onPointerDown: function onPointerDown(e) {
                        return setActive(true);
                    },
                    className: "opportunities-mini__pagination ".concat(active ? mainSlide.fill : "")
                }), (0, jsx_runtime.jsxs)("div", {
                    onPointerDown: function onPointerDown(e) {
                        return setActive(true);
                    },
                    className: "opportunities-mini__navigation ".concat(active ? "active" : ""),
                    children: [ (0, jsx_runtime.jsx)("button", {
                        className: "opportunities-mini__navigation__left",
                        children: (0, jsx_runtime.jsx)(SvgIcons.DK, {})
                    }), (0, jsx_runtime.jsx)("button", {
                        className: "opportunities-mini__navigation__right",
                        children: (0, jsx_runtime.jsx)(SvgIcons.DK, {})
                    }) ]
                }) ]
            });
        };
        const Opportunities_OpportunitiesSlider = OpportunitiesSlider;
        var Opportunities = function Opportunities(props) {
            var mainArray = [ {
                img: (0, jsx_runtime.jsx)(SvgIcons.PK, {}),
                name: "Пользователям",
                text: "Выступления на турнирах с призовым фондом",
                id: "slider1",
                slider: null,
                slide: [ {
                    content: "Выступления на турнирах с призовым фондом",
                    img: (0, jsx_runtime.jsx)(SvgIcons.Z3, {})
                }, {
                    content: "Формула расчета навыка основанная на личных показателях",
                    img: (0, jsx_runtime.jsx)(SvgIcons.LT, {})
                }, {
                    content: "Уникальные карточки профиля для пользователей",
                    img: (0, jsx_runtime.jsx)(SvgIcons.eu, {})
                }, {
                    content: "Публикация постов и новостей на своей странице",
                    img: (0, jsx_runtime.jsx)(SvgIcons.J9, {})
                }, {
                    content: "Создание клуба, команды или организации",
                    img: (0, jsx_runtime.jsx)(SvgIcons.Mw, {})
                }, {
                    content: "Развитие в одной или нескольких отраслях киберспорта",
                    img: (0, jsx_runtime.jsx)(SvgIcons.jX, {})
                } ],
                color: "#331d21",
                itemColor: "#ff4654",
                fill: "red"
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.Xe, {}),
                name: "Организациям",
                text: "Автоматизированная система проведения мероприятий",
                id: "slider2",
                slider: null,
                slide: [ {
                    content: "Автоматизированная система проведения мероприятий",
                    img: (0, jsx_runtime.jsx)(SvgIcons.Xj, {})
                }, {
                    content: "Огромное количество возможностей для настройки турниров",
                    img: (0, jsx_runtime.jsx)(SvgIcons.dm, {})
                }, {
                    content: "Найм пользователей из разных отраслей для проведения турниров",
                    img: (0, jsx_runtime.jsx)(SvgIcons.Id, {})
                }, {
                    content: "Возможность проведения платных мероприятий",
                    img: (0, jsx_runtime.jsx)(SvgIcons.Z3, {})
                } ],
                color: "#332306",
                itemColor: "#fabc45",
                fill: "yellow"
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.cx, {}),
                name: "Клубам и командам",
                text: "Гарантированная выплата выигранных призов",
                id: "slider3",
                slider: null,
                slide: [ {
                    content: "Гарантированная выплата выигранных призов",
                    img: (0, jsx_runtime.jsx)(SvgIcons.Tl, {})
                }, {
                    content: "Подписание контрактов с пользователями из разных отраслей",
                    img: (0, jsx_runtime.jsx)(SvgIcons.wE, {})
                }, {
                    content: "Просмотр демо матчей для тренировок и разбора игры",
                    img: (0, jsx_runtime.jsx)(SvgIcons.ry, {})
                }, {
                    content: "Проведение товарищеских матчей с другими командами",
                    img: (0, jsx_runtime.jsx)(SvgIcons.iE, {})
                } ],
                color: "#0d3331",
                itemColor: "#2ea69f",
                fill: "green"
            }, {
                img: (0, jsx_runtime.jsx)(SvgIcons.jJ, {}),
                name: "Аренам",
                text: "Удобный и информационный профиль",
                id: "slider4",
                slider: null,
                slide: [ {
                    content: "Удобный и информационный профиль",
                    img: (0, jsx_runtime.jsx)(SvgIcons.CW, {})
                }, {
                    content: "Система рекомендаций позволит привлечь новых клиентов",
                    img: (0, jsx_runtime.jsx)(SvgIcons.Rp, {})
                }, {
                    content: "Онлайн бронирование компьютеров через наш сайт",
                    img: (0, jsx_runtime.jsx)(SvgIcons.cs, {})
                }, {
                    content: "Автоматизированная система проведения LAN мероприятий",
                    img: (0, jsx_runtime.jsx)(SvgIcons.Xj, {})
                }, {
                    content: "Найм организаторов для проведения масштабных мероприятий",
                    img: (0, jsx_runtime.jsx)(SvgIcons.eU, {})
                }, {
                    content: "Возможность стать домашней ареной клуба или команды",
                    img: (0, jsx_runtime.jsx)(SvgIcons.vc, {})
                } ],
                color: "#06364a",
                itemColor: "#33c0fb",
                fill: "blue"
            } ];
            (0, react.useEffect)((function() {
                var slider;
                function initSwiper() {
                    slider = new swiper.A(".opportunities__slider", {
                        modules: [ swiper_modules.Vx ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 4,
                        spaceBetween: 25,
                        autoHeight: true,
                        speed: 800,
                        breakpoints: {
                            320: {
                                slidesPerView: 1
                            },
                            610: {
                                slidesPerView: 2
                            },
                            910: {
                                slidesPerView: 3
                            },
                            1350: {
                                slidesPerView: 4
                            }
                        }
                    });
                }
                initSwiper();
                return function() {
                    if (slider) slider.destroy();
                };
            }), []);
            (0, react.useEffect)((function() {
                function initSwiper(slider, id) {
                    slider.slider = new swiper.A(".opportunities-mini__slider".concat(id), {
                        modules: [ swiper_modules.Vx, swiper_modules.dK ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1,
                        spaceBetween: 20,
                        autoHeight: true,
                        speed: 800,
                        pagination: {
                            el: ".opportunities-mini__pagination",
                            clickable: true
                        },
                        navigation: {
                            prevEl: ".opportunities-mini__navigation__left",
                            nextEl: ".opportunities-mini__navigation__right"
                        }
                    });
                }
                mainArray.map((function(item, ind) {
                    initSwiper(item, ind);
                }));
                return function() {
                    mainArray.forEach((function(item) {
                        if (item.slider) item.slider.destroy();
                    }));
                };
            }), []);
            return (0, jsx_runtime.jsxs)("section", {
                id: "opportunities",
                className: "opportunities",
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "opportunities__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "opportunities__block",
                        children: [ (0, jsx_runtime.jsx)("div", {
                            className: "opportunities__title",
                            children: "Предоставляем массу возможностей"
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "opportunities__slider swiper",
                            children: (0, jsx_runtime.jsxs)("div", {
                                className: "opportunities__wrapper swiper-wrapper",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "opportunities__slide swiper-slide",
                                    children: (0, jsx_runtime.jsx)("div", {
                                        className: "opportunities__slide__wrapper",
                                        children: (0, jsx_runtime.jsx)(Opportunities_OpportunitiesSlider, {
                                            mainArray,
                                            class: 0
                                        })
                                    })
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "opportunities__slide swiper-slide",
                                    children: (0, jsx_runtime.jsx)("div", {
                                        className: "opportunities__slide__wrapper",
                                        children: (0, jsx_runtime.jsx)(Opportunities_OpportunitiesSlider, {
                                            mainArray,
                                            class: 1
                                        })
                                    })
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "opportunities__slide swiper-slide",
                                    children: (0, jsx_runtime.jsx)("div", {
                                        className: "opportunities__slide__wrapper",
                                        children: (0, jsx_runtime.jsx)(Opportunities_OpportunitiesSlider, {
                                            mainArray,
                                            class: 2
                                        })
                                    })
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "opportunities__slide swiper-slide",
                                    children: (0, jsx_runtime.jsx)("div", {
                                        className: "opportunities__slide__wrapper",
                                        children: (0, jsx_runtime.jsx)(Opportunities_OpportunitiesSlider, {
                                            mainArray,
                                            class: 3
                                        })
                                    })
                                }) ]
                            })
                        }) ]
                    })
                }), props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
            });
        };
        const Opportunities_Opportunities = Opportunities;
        var Statistics = function Statistics(props) {
            var mainArray = [ {
                number: "112",
                text: "Турниров проведено"
            }, {
                number: "1789",
                text: "Матчей сыграно"
            }, {
                number: "5800 $",
                text: "Призового фонда выплачено"
            }, {
                number: "3872",
                text: "Пользователей зарегистрировано"
            } ];
            var arr = [];
            mainArray.map((function(item, ind) {
                arr.push((0, jsx_runtime.jsxs)("div", {
                    className: "statistics__content__item",
                    children: [ (0, jsx_runtime.jsx)("div", {
                        className: "statistics__content__item__number",
                        children: item.number
                    }), (0, jsx_runtime.jsx)("div", {
                        className: "statistics__content__item__text",
                        children: item.text
                    }) ]
                }, ind));
            }));
            return (0, jsx_runtime.jsxs)("section", {
                id: "statistics",
                className: "statistics",
                children: [ (0, jsx_runtime.jsx)("div", {
                    className: "statistics__container",
                    children: (0, jsx_runtime.jsxs)("div", {
                        className: "statistics__block",
                        children: [ (0, jsx_runtime.jsxs)("div", {
                            className: "statistics__content",
                            children: [ (0, jsx_runtime.jsxs)("div", {
                                className: "statistics__content__img",
                                children: [ (0, jsx_runtime.jsx)("div", {
                                    className: "statistics__content__img__wrapper",
                                    children: (0, jsx_runtime.jsx)("img", {
                                        src: "img/statistics/statictics__main__circle.png",
                                        alt: ""
                                    })
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "statistics__content__img__wrapper",
                                    children: (0, jsx_runtime.jsx)("img", {
                                        src: "img/statistics/statictics__main__circle.png",
                                        alt: ""
                                    })
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "statistics__content__img__wrapper",
                                    children: (0, jsx_runtime.jsx)("img", {
                                        src: "img/statistics/statictics__main__circle.png",
                                        alt: ""
                                    })
                                }), (0, jsx_runtime.jsx)("div", {
                                    className: "statistics__content__img__wrapper",
                                    children: (0, jsx_runtime.jsx)("img", {
                                        src: "img/statistics/statictics__main__circle.png",
                                        alt: ""
                                    })
                                }) ]
                            }), arr ]
                        }), (0, jsx_runtime.jsx)("div", {
                            className: "statistics__img",
                            children: (0, jsx_runtime.jsx)("img", {
                                src: "img/statistics/statistics__1.png",
                                alt: ""
                            })
                        }) ]
                    })
                }), props.size > 960 ? (0, jsx_runtime.jsx)(Tooltip.A, {}) : "" ]
            });
        };
        const Statistics_Statistics = Statistics;
        var PersonalCards = __webpack_require__(505);
        var Main = function Main(props) {
            return (0, jsx_runtime.jsx)("div", {
                children: props.error ? (0, jsx_runtime.jsx)(components_Error_Error, {
                    size: props.size
                }) : (0, jsx_runtime.jsxs)(react.Fragment, {
                    children: [ (0, jsx_runtime.jsx)(Hero_Hero, {
                        size: props.size
                    }), (0, jsx_runtime.jsx)(About_About, {
                        size: props.size
                    }), (0, jsx_runtime.jsx)(Advantages_Advantages, {
                        size: props.size
                    }), (0, jsx_runtime.jsx)(Opportunities_Opportunities, {
                        size: props.size
                    }), (0, jsx_runtime.jsx)(Choice_Choice, {
                        size: props.size
                    }), (0, jsx_runtime.jsx)(PersonalCards.Ay, {
                        size: props.size
                    }), (0, jsx_runtime.jsx)(Statistics_Statistics, {
                        size: props.size
                    }), (0, jsx_runtime.jsx)(Faq_Faq, {
                        size: props.size
                    }), (0, jsx_runtime.jsx)(Footer_MainFooter, {
                        size: props.size
                    }), " " ]
                })
            });
        };
        const Main_Main = Main;
        function _toConsumableArray(r) {
            return _arrayWithoutHoles(r) || _iterableToArray(r) || App_unsupportedIterableToArray(r) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _iterableToArray(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }
        function _arrayWithoutHoles(r) {
            if (Array.isArray(r)) return App_arrayLikeToArray(r);
        }
        function App_slicedToArray(r, e) {
            return App_arrayWithHoles(r) || App_iterableToArrayLimit(r, e) || App_unsupportedIterableToArray(r, e) || App_nonIterableRest();
        }
        function App_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function App_unsupportedIterableToArray(r, a) {
            if (r) {
                if ("string" == typeof r) return App_arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? App_arrayLikeToArray(r, a) : void 0;
            }
        }
        function App_arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
            return n;
        }
        function App_iterableToArrayLimit(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }
        function App_arrayWithHoles(r) {
            if (Array.isArray(r)) return r;
        }
        var App = function App() {
            var _useState = (0, react.useState)(document.documentElement.clientWidth), _useState2 = App_slicedToArray(_useState, 2), size = _useState2[0], setSize = _useState2[1];
            var _useState3 = (0, react.useState)([ {
                nickName: "dima",
                mail: "dima@gmail.com",
                password: "123",
                id: 1
            }, {
                nickName: "alina",
                mail: "alina@gmail.com",
                password: "321",
                id: 2
            } ]), _useState4 = App_slicedToArray(_useState3, 2), usersArray = _useState4[0], setUsersArray = _useState4[1];
            var _useState5 = (0, react.useState)(false), _useState6 = App_slicedToArray(_useState5, 2), error = _useState6[0], setError = _useState6[1];
            function addNewUser(user) {
                var array = usersArray.slice(0);
                user.id = array.length + 1;
                setUsersArray([].concat(_toConsumableArray(array), [ user ]));
            }
            (0, react.useEffect)((function() {
                function handle() {
                    return setSize(document.documentElement.clientWidth);
                }
                window.addEventListener("resize", handle);
                return function() {
                    window.removeEventListener("resize", handle);
                };
            }), []);
            return (0, jsx_runtime.jsxs)("div", {
                className: "wrapper",
                children: [ (0, jsx_runtime.jsx)(Header_Header, {
                    addNewUser,
                    usersArray,
                    size
                }), (0, jsx_runtime.jsx)(Main_Main, {
                    error,
                    setError,
                    size
                }) ]
            });
        };
        var root = document.getElementById("root");
        if (!root) throw new Error("root is not defined");
        var conteiner = (0, client.H)(root);
        conteiner.render((0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [ (0, jsx_runtime.jsx)(App, {}), (0, jsx_runtime.jsx)(js_Template, {}) ]
        }));
    })();
})();