"use strict"; window.addEventListener("load", function () { var e, t, n, r, c, i, l, s, a, u, o; e = document.querySelector(".selection-results__byprice"), t = document.querySelector(".selection-results__ascending"), n = document.querySelector(".selection-results__descending"), r = document.querySelector(".selection-results__byraing"), c = document.querySelector(".selection-results__bytype"), i = document.querySelectorAll(".selection-results__link"), l = function (e) { for (var t, n = document.querySelector(".results__list"), r = 0; r < n.children.length; r++)for (var c = r; c < n.children.length; c++)+n.children[c].getAttribute(e) < +n.children[r].getAttribute(e) && (t = n.replaceChild(n.children[c], n.children[r]), a(t, n.children[r])) }, s = function (e) { for (var t, n = document.querySelector(".results__list"), r = 0; r < n.children.length; r++)for (var c = r; c < n.children.length; c++)+n.children[c].getAttribute(e) > +n.children[r].getAttribute(e) && (t = n.replaceChild(n.children[c], n.children[r]), a(t, n.children[r])) }, a = function (e, t) { return t.parentNode.insertBefore(e, t.nextSibling) }, u = function (e, t) { o(), e.classList.add("current"), l(t) }, o = function () { for (var e = 0; e < i.length; e++)i[e].classList.remove("current") }, e.addEventListener("click", function (t) { t.preventDefault(), u(e, "data-price") }), r.addEventListener("click", function (e) { e.preventDefault(), u(r, "data-rating") }), c.addEventListener("click", function (e) { e.preventDefault(), u(c, "data-star") }), t.addEventListener("click", function (i) { i.preventDefault(), e.classList.contains("current") ? l("data-price") : r.classList.contains("current") ? l("data-rating") : c.classList.contains("current") && l("data-star"), t.classList.add("selection-results__ranging--current"), n.classList.remove("selection-results__ranging--current") }), n.addEventListener("click", function (i) { i.preventDefault(), e.classList.contains("current") ? s("data-price") : r.classList.contains("current") ? s("data-rating") : c.classList.contains("current") && s("data-star"), t.classList.remove("selection-results__ranging--current"), n.classList.add("selection-results__ranging--current") }); !function () { var e = document.getElementById("range__slider"); noUiSlider.create(e, { start: [2e3, 6900], connect: !0, padding: 0, step: 50, range: { min: 500, max: 1e4 }, format: { to: function (e) { return Math.ceil(e) }, from: function (e) { return Math.ceil(e) } } }); var t = document.querySelector(".range__label--lower"), n = document.querySelector(".range__label--upper"); e.noUiSlider.on("update", function (e, r) { var c = e[r]; r ? n.value = Math.ceil(c) : t.value = Math.ceil(c) }), n.addEventListener("change", function () { e.noUiSlider.set([this.value, null]) }), t.addEventListener("change", function () { e.noUiSlider.set([null, this.value]) }) }() });