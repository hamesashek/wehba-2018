/*!
 * bubcloud - v1.0.7
 * A responsive theme for Forumotion
 * Under MIT License
 */
! function(f) {
    "use strict";

    function e() {
        function s(f) {
            var e = f.find(".cb-bubcloud-options-list");
            (O = !O) ? e.css("visibility", "visible").stop(!0, !1).animate({
                opacity: 1,
                top: 27
            }, "fast", function() {
                f.addClass("active")
            }): e.stop(!0, !1).animate({
                opacity: 0,
                top: 12
            }, "fast", function() {
                f.removeClass("active"), e.css("visibility", "hidden")
            })
        }

        function i() {
            var f = document.createElement("div");
            f.style.visibility = "hidden", f.style.width = "100px", document.body.appendChild(f);
            var e = f.offsetWidth;
            f.style.overflow = "scroll";
            var a = document.createElement("div");
            a.style.width = "100%", f.appendChild(a);
            var t = a.offsetWidth;
            return f.parentNode.removeChild(f), e - t
        }

        function c(f) {
            return '<a class="cb-bubcloud-media" data-video="https://www.youtube.com/embed/' + f + '?rel=0&autoplay=1" href="https://youtu.be/' + f + '" target="_blank" rel="nofollow" style="background-image: url(//img.youtube.com/vi/' + f + '/mqdefault.jpg);"><img src="//i97.servimg.com/u/f97/19/51/54/34/play-i10.png" alt="Play"></a>'
        }

        function o(e) {
            var a = "//i97.servimg.com/u/f97/19/51/54/34/dailym10.png",
                t = "daily_" + e;
            return sessionStorage[t] ? a = sessionStorage[t] : f.getJSON("https://api.dailymotion.com/video/" + e, {
                fields: "thumbnail_medium_url"
            }).done(function(f) {
                g.find(".cb-bubcloud-media.daily-icon-" + e).css("background-image", "url(" + f.thumbnail_medium_url + ")"), sessionStorage[t] = f.thumbnail_medium_url
            }), '<a class="cb-bubcloud-media daily-icon-' + e + '" data-video="https://www.dailymotion.com/embed/video/' + e + '?autoplay=1&endscreen-enable=0" href="https://dai.ly/' + e + '" target="_blank" rel="nofollow" style="background-image: url(' + a + ');"><img src="//i97.servimg.com/u/f97/19/51/54/34/play-i10.png" alt="Play"></a>'
        }

        function n(e) {
            var a = "//i97.servimg.com/u/f97/19/51/54/34/vimeo-10.jpg",
                t = "vimeo_" + e;
            return sessionStorage[t] ? a = sessionStorage[t] : f.getJSON("https://vimeo.com/api/oembed.json?url=https://vimeo.com/" + e).done(function(f) {
                g.find(".cb-bubcloud-media.vimeo-icon-" + e).css("background-image", "url(" + f.thumbnail_url + ")"), sessionStorage[t] = f.thumbnail_url
            }), '<a class="cb-bubcloud-media vimeo-icon-' + e + '" data-video="https://player.vimeo.com/video/' + e + '?autoplay=1" href="https://vimeo.com/' + e + '" target="_blank" rel="nofollow" style="background-image: url(' + a + ');"><img src="//i97.servimg.com/u/f97/19/51/54/34/play-i10.png" alt="Play"></a>'
        }
        var l = a[0].contentWindow.chatbox;
        if (l) {
            var d = document,
                r = d.title,
                b = f(window),
                m = !1,
                u = f("html"),
                h = a.contents().find("head"),
                p = a.contents().find("body"),
                g = p.find("#chatbox"),
                v = p.find(".chat-title"),
                y = p.find("#chatbox_footer"),
                C = p.find("#message"),
                w = p.find("#chatbox_messenger_form"),
                x = p.find("#chatbox_display_archives"),
                _ = p.find("#chatbox_option_co"),
                k = p.find("#chatbox_option_disco"),
                z = p.find(".online-users"),
                T = p.find(".away-users"),
                j = p.find(".member-title"),
                M = function(e, a, t) {
                    var s = {
                        id: e
                    };
                    return a && (s.class = a), t && (s["aria-label"] = t), f("<div>", s)
                },
                S = function(e, a) {
                    var t = f("<div>", {
                        id: e + "_wrap",
                        class: "cb-bubcloud-options hint--left"
                    }).append(f("<img>", {
                        src: "//twemoji.maxcdn.com/36x36/" + a + ".png",
                        alt: e,
                        height: 20,
                        width: 20,
                        class: "cb-bubcloud-btn"
                    }));
                    return y.append(t), t
                },
                Z = "1f600 1f601 1f602 1f603 1f604 1f605 1f606 1f607 1f608 1f609 1f60a 1f60b 1f60c 1f60d 1f60e 1f60f 1f610 1f611 1f612 1f613 1f614 1f615 1f616 1f617 1f618 1f619 1f61a 1f61b 1f61c 1f61d 1f61e 1f61f 1f620 1f621 1f622 1f623 1f624 1f625 1f626 1f627 1f628 1f629 1f62a 1f62b 1f62c 1f62d 1f62e 1f62f 1f630 1f631 1f632 1f633 1f634 1f635 1f636 1f637 263a 1f638 1f639 1f63a 1f63b 1f63c 1f63d 1f63e 1f63f 1f640 1f645 1f646 1f647 1f648 1f649 1f64a 1f64b 1f64c 1f64d 1f64e 1f64f 1f300 1f301 1f302 1f303 1f304 1f305 1f306 1f307 1f308 1f309 1f30a 1f30b 1f30c 1f30d 1f30e 1f30f 1f310 1f311 1f312 1f313 1f314 1f315 1f316 1f317 1f318 1f319 1f31a 1f31b 1f31c 1f31d 1f31e 1f31f 1f320 1f330 1f331 1f332 1f333 1f334 1f335 1f337 1f338 1f339 1f33a 1f33b 1f33c 1f33d 1f33e 1f33f 1f340 1f341 1f342 1f343 1f344 1f345 1f346 1f347 1f348 1f349 1f34a 1f34b 1f34c 1f34d 1f34e 1f34f 1f350 1f351 1f352 1f353 1f354 1f355 1f356 1f357 1f358 1f359 1f35a 1f35b 1f35c 1f35d 1f35e 1f35f 1f360 1f361 1f362 1f363 1f364 1f365 1f366 1f367 1f368 1f369 1f36a 1f36b 1f36c 1f36d 1f36e 1f36f 1f370 1f371 1f372 1f373 1f374 1f375 1f376 1f377 1f378 1f379 1f37a 1f37b 1f37c 1f380 1f381 1f382 1f383 1f384 1f385 1f386 1f387 1f388 1f389 1f38a 1f38b 1f38c 1f38d 1f38e 1f38f 1f390 1f391 1f392 1f393 1f3a0 1f3a1 1f3a2 1f3a3 1f3a4 1f3a5 1f3a6 1f3a7 1f3a8 1f3a9 1f3aa 1f3ab 1f3ac 1f3ad 1f3ae 1f3af 1f3b0 1f3b1 1f3b2 1f3b3 1f3b4 1f3b5 1f3b6 1f3b7 1f3b8 1f3b9 1f3ba 1f3bb 1f3bc 1f3bd 1f3be 1f3bf 1f3c0 1f3c1 1f3c2 1f3c3 1f3c4 1f3c6 1f3c7 1f3c8 1f3c9 1f3ca 1f3e0 1f3e1 1f3e2 1f3e3 1f3e4 1f3e5 1f3e6 1f3e7 1f3e8 1f3e9 1f3ea 1f3eb 1f3ec 1f3ed 1f3ee 1f3ef 1f3f0 1f400 1f401 1f402 1f403 1f404 1f405 1f406 1f407 1f408 1f409 1f40a 1f40b 1f40c 1f40d 1f40e 1f40f 1f410 1f411 1f412 1f413 1f414 1f415 1f416 1f417 1f418 1f419 1f41a 1f41b 1f41c 1f41d 1f41e 1f41f 1f420 1f421 1f422 1f423 1f424 1f425 1f426 1f427 1f428 1f429 1f42a 1f42b 1f42c 1f42d 1f42e 1f42f 1f430 1f431 1f432 1f433 1f434 1f435 1f436 1f437 1f438 1f439 1f43a 1f43b 1f43c 1f43d 1f43e 1f440 1f442 1f443 1f444 1f445 1f446 1f447 1f448 1f449 1f44a 1f44b 1f44c 1f44d 1f44e 1f44f 1f450 1f451 1f452 1f453 1f454 1f455 1f456 1f457 1f458 1f459 1f45a 1f45b 1f45c 1f45d 1f45e 1f45f 1f460 1f461 1f462 1f463 1f464 1f465 1f466 1f467 1f468 1f469 1f46a 1f46b 1f46c 1f46d 1f46e 1f46f 1f470 1f471 1f472 1f473 1f474 1f475 1f476 1f477 1f478 1f479 1f47a 1f47b 1f47c 1f47d 1f47e 1f47f 1f480 1f481 1f482 1f483 1f484 1f485 1f486 1f487 1f488 1f489 1f48a 1f48b 1f48c 1f48d 1f48e 1f48f 1f490 1f491 1f492 1f493 1f494 1f495 1f496 1f497 1f498 1f499 1f49a 1f49b 1f49c 1f49d 1f49e 1f49f 1f4a0 1f4a1 1f4a2 1f4a3 1f4a4 1f4a5 1f4a6 1f4a7 1f4a8 1f4a9 1f4aa 1f4ab 1f4ac 1f4ad 1f4ae 1f4af 1f4b0 1f4b1 1f4b2 1f4b3 1f4b4 1f4b5 1f4b6 1f4b7 1f4b8 1f4b9 1f4ba 1f4bb 1f4bc 1f4bd 1f4be 1f4bf 1f4c0 1f4c1 1f4c2 1f4c3 1f4c4 1f4c5 1f4c6 1f4c7 1f4c8 1f4c9 1f4ca 1f4cb 1f4cc 1f4cd 1f4ce 1f4cf 1f4d0 1f4d1 1f4d2 1f4d3 1f4d4 1f4d5 1f4d6 1f4d7 1f4d8 1f4d9 1f4da 1f4db 1f4dc 1f4dd 1f4de 1f4df 1f4e0 1f4e1 1f4e2 1f4e3 1f4e4 1f4e5 1f4e6 1f4e7 1f4e8 1f4e9 1f4ea 1f4eb 1f4ec 1f4ed 1f4ee 1f4ef 1f4f0 1f4f1 1f4f2 1f4f3 1f4f4 1f4f5 1f4f6 1f4f7 1f4f9 1f4fa 1f4fb 1f4fc 1f500 1f501 1f502 1f503 1f504 1f505 1f506 1f507 1f508 1f509 1f50a 1f50b 1f50c 1f50d 1f50e 1f50f 1f510 1f511 1f512 1f513 1f514 1f515 1f516 1f517 1f518 1f519 1f51a 1f51b 1f51c 1f51d 1f51e 1f51f 1f520 1f521 1f522 1f523 1f524 1f525 1f526 1f527 1f528 1f529 1f52a 1f52b 1f52c 1f52d 1f52e 1f52f 1f530 1f531 1f532 1f533 1f534 1f535 1f536 1f537 1f538 1f539 1f53a 1f53b 1f53c 1f53d 1f550 1f551 1f552 1f553 1f554 1f555 1f556 1f557 1f558 1f559 1f55a 1f55b 1f55c 1f55d 1f55e 1f55f 1f560 1f561 1f562 1f563 1f564 1f565 1f566 1f567 1f5fb 1f5fc 1f5fd 1f5fe 1f5ff 1f680 1f681 1f682 1f683 1f684 1f685 1f686 1f687 1f688 1f689 1f68a 1f68b 1f68c 1f68d 1f68e 1f68f 1f690 1f691 1f692 1f693 1f694 1f695 1f696 1f697 1f698 1f699 1f69a 1f69b 1f69c 1f69d 1f69e 1f69f 1f6a0 1f6a1 1f6a2 1f6a3 1f6a4 1f6a5 1f6a6 1f6a7 1f6a8 1f6a9 1f6aa 1f6ab 1f6ac 1f6ad 1f6ae 1f6af 1f6b0 1f6b1 1f6b2 1f6b3 1f6b4 1f6b5 1f6b6 1f6b7 1f6b8 1f6b9 1f6ba 1f6bb 1f6bc 1f6bd 1f6be 1f6bf 1f6c0 1f6c1 1f6c2 1f6c3 1f6c4 1f6c5 203c 2049 2122 2139 2194 2195 2196 2197 2198 2199 21a9 21aa 23-20e3 231a 231b 23e9 23ea 23eb 23ec 23f0 23f3 24c2 25aa 25ab 25b6 25c0 25fb 25fc 25fd 25fe 2600 2601 260e 2611 2614 2615 261d 2648 2649 264a 264b 264c 264d 264e 264f 2650 2651 2652 2653 2660 2663 2665 2666 2668 267b 267f 2693 26a0 26a1 26aa 26ab 26bd 26be 26c4 26c5 26ce 26d4 26ea 26f2 26f3 26f5 26fa 26fd 2702 2705 2708 2709 270a 270b 270c 270f 2712 2714 2716 2728 2733 2734 2744 2747 274c 274e 2753 2754 2755 2757 2764 2795 2796 2797 27a1 27b0 27bf 2934 2935 2b05 2b06 2b07 2b1b 2b1c 2b50 2b55 30-20e3 3030 303d 31-20e3 32-20e3 3297 3299 33-20e3 34-20e3 35-20e3 36-20e3 37-20e3 38-20e3 39-20e3 a9 ae e50a 1f004 1f0cf 1f170 1f171 1f17e 1f17f 1f18e 1f191 1f192 1f193 1f194 1f195 1f196 1f197 1f198 1f199 1f19a 1f1e6 1f1e7 1f1e8-1f1f3 1f1e8 1f1e9-1f1ea 1f1e9 1f1ea-1f1f8 1f1ea 1f1eb-1f1f7 1f1eb 1f1ec-1f1e7 1f1ec 1f1ed 1f1ee-1f1f9 1f1ee 1f1ef-1f1f5 1f1ef 1f1f0-1f1f7 1f1f0 1f1f1 1f1f2 1f1f3 1f1f4 1f1f5 1f1f6 1f1f7-1f1fa 1f1f7 1f1f8 1f1f9 1f1fa-1f1f8 1f1fa 1f1fb 1f1fc 1f1fd 1f1fe 1f1ff 1f201 1f202 1f21a 1f22f 1f232 1f233 1f234 1f235 1f236 1f237 1f238 1f239 1f23a 1f250 1f251".split(" "),
                B = Z.length,
                L = 0,
                U = !1,
                O = !1,
                P = S("emoji", "1f636"),
                D = f("<div>", {
                    class: "cb-bubcloud-options-list"
                }),
                $ = M("emoji_list"),
                I = function() {
                    U = !0;
                    var e = L + 70;
                    for (e > B && (e = B), L; L < e; L++) {
                        var a = Z[L],
                            t = f("<img>", {
                                class: "emoji",
                                alt: a,
                                src: "https://twemoji.maxcdn.com/16x16/" + a + ".png"
                            }),
                            s = f("<li>");
                        t.appendTo(s).appendTo($)
                    }
                    L = e, U = !1
                },
                N = M("media"),
                W = M("has_new_message"),
                E = function() {
                    /^\(\d+\)\s/.test(d.title) && (d.title = r), W.hasClass("active") && W.removeClass("active")
                },
                J = function(e) {
                    return f("<audio>", {
                        id: "chatbox-" + e + "-audio",
                        src: "https://unpkg.com/bubcloud@1.0.7/bin/" + e + ".mp3",
                        preload: "auto"
                    })
                },
                q = {
                    buzz: J("buzz"),
                    alert: J("alert"),
                    message: J("message"),
                    online: J("online"),
                    offline: J("offline")
                },
                H = !1,
                Q = M("sound_control", "hint--top-right", "تشغيل النغمة"),
                R = function(f) {
                    H || q[f][0].play()
                },
                X = S("buzz", "1f4a5"),
                A = !1,
                F = !1,
                G = M("fullscreen", "hint--top-right", "تكبير"),
                K = f("<link>", {
                    href: "//fonts.googleapis.com/css?family=Roboto:300,400,400i,700,900&amp;subset=latin-ext,vietnamese",
                    rel: "stylesheet",
                    type: "text/css"
                }),
                V = my_getcookie("bubcloud"),
                Y = !0,
                ff = 0,
                ef = 0,
                af = 0;
            h.append(K), "" !== V && null !== V && (V = V.split("|"), h.append(f("<style>", {
                id: "bubcloudChat",
                type: "text/css",
                text: "a:focus,a:hover{color:#" + V[0] + "}a{color:#" + V[1] + "}.msg-me .msg-act{background:#" + V[1] + "}"
            }))), "localhost:7777" === location.host && h.find('link[href$="-ltr.css"]').attr("href", "/chatbox.css"), p.prepend(N), f.each(q, function(f) {
                p.append(q[f])
            }), p.append(W), W.on("click", function() {
                W.removeClass("active"), ff = ef, g.animate({
                    scrollTop: 0
                }, 200)
            }), v.addClass("hint--top-right").attr("aria-label", "المتصلون الان؟؟"), _.addClass("hint--top-left").attr("aria-label", "تسجيل الدخول"), k.addClass("hint--top-left").attr("aria-label", "تسجيل الخروج"), p.find("#chatbox_option_with_archives").addClass("hint--top-left").attr("aria-label", "عرض الرسائل القديمة"), p.find("#chatbox_option_without_archives").addClass("hint--top-left").attr("aria-label", "إخفاء الرسائل القديمة"), p.find(".chatbox-title").after(G).after(Q), Q.on("click", function() {
                (H = !H) ? (Q.addClass("disable"), Q.attr("aria-label", "قم بتشغيل النغمة"), H = !0) : (Q.removeClass("disable"), Q.attr("aria-label", "إيقاف نغمة"), H = !1)
            }), G.on("click", function() {
                (F = !F) ? (G.addClass("active"), u.addClass("cb-bubcloud-fullscreen"), G.attr("aria-label", "تصغير"), F = !0) : (G.removeClass("active"), u.removeClass("cb-bubcloud-fullscreen"), G.attr("aria-label", "وضع ملئ الشاشة"), F = !1)
            }), p.on("click", ".msg-avatar", function() {
                C[0].value += this.dataset.name, C.focus()
            }).on("click", ".chat-title", function(f) {
                f.preventDefault(), p.hasClass("toggleMediaList") ? (N.empty(), p.removeClass("toggleMediaList")) : p.toggleClass("toggleUsersList"), v.attr("aria-label", "المتصلون الان؟")
            }).on("click", "#chatbox", function() {
                p.hasClass("toggleUsersList") && p.removeClass("toggleUsersList")
            }).on("click", ".cb-bubcloud-media", function(f) {
                f.preventDefault(), N.html('<iframe width="560" height="315" src="' + this.dataset.video + '" frameborder="0" allowfullscreen></iframe>'), p.hasClass("toggleMediaList") || p.addClass("toggleMediaList"), v.attr("aria-label", "اضغط هنا الى الاعلى ")
            }), P.one("click", function() {
                P.append(D.append($)), $.width(229 + i()), I(), $.scrollTop(0), $.on("scroll", function() {
                    U || L >= Z.length || $.scrollTop() + $.height() + 50 < $[0].scrollHeight || I()
                })
            }).on("click", ".emoji", function() {
                var f = C.val().trim(),
                    e = this.src;
                "" === f ? e = e.replace("/16x16/", "/36x36/") : f += " ", C.val(f + "[img]" + e + "[/img]"), l.send()
            }).on("click", function() {
                s(f(this))
            }).attr("aria-label", "الوجوه الضاحكة"), X.on("click", function(f) {
                f.preventDefault(), A || (A = !0, X.addClass("disable"), g.find('img[alt="BUZZ"]:first').closest(".msg-me").length || (C.val("/buzz"), l.send()))
            }).attr("aria-label", "تنبيه"), C.on("input", function() {
                "/buzz" === C.val().trim() && C.val("")
            }), l.nolisten = !1, l.refresh = function(e) {
                var a = {
                        online: [],
                        away: []
                    },
                    t = this;
                if (e.error) p.html(e.error);
                else {
                    if (t.connected ? (w.css({
                            display: "block",
                            visibility: "visible"
                        }), x.show(), _.hide(), k.add(y).show(), e.lastModified && (t.listenParams.lastModified = e.lastModified)) : (w.css({
                            display: "none",
                            visibility: "hidden"
                        }), _.show(), k.add(y).hide(), x.hide()), e.users) {
                        t.users = [], z.add(T).empty(), j.hide();
                        for (var s in e.users) {
                            var i = e.users[s];
                            t.users[i.id] = i;
                            var l = '<span style="color:' + i.color + '">' + (i.admin ? "@ " : "") + '<span class="chatbox-username chatbox-user-username" data-user="' + i.id + '">' + i.username + "</span></span>",
                                b = "";
                            i.online ? (b = ".online-users", a.online.push(i.id)) : (b = ".away-users", a.away.push(i.id)), p.find(b).append("<li>" + l + "</li>")
                        }
                        z.is(":empty") || p.find(".member-title.online").show(), T.is(":empty") || p.find(".member-title.away").show()
                    }
                    if (e.messages) {
                        ef = e.messages.length;
                        var u = !t.messages || ff !== ef;
                        if (t.messages = e.messages, !t.messages) return;
                        var h, v = 0,
                            C = "",
                            M = 0,
                            S = t.messages.length - 1;
                        g.empty(), f.each(t.messages, function(e, s) {
                            var i = s,
                                l = i.userId + "",
                                d = i.datetime.split(" "),
                                r = function() {
                                    return 1 === d.length || 2 === d.length && C === d[1]
                                },
                                b = f("<div>", {
                                    class: "msg-row clearfix"
                                }),
                                m = f("<div>", {
                                    class: (i.action || "other") + "-act clearfix",
                                    "data-time": d[0]
                                });
                            if (r() || g.prepend(f("<div>", {
                                    class: "msg-row msg-day clearfix",
                                    html: "<span>" + d[1] + "</span>"
                                })), "-10" === l) - 1 !== i.msg.indexOf("<script>") && g.append('<div id="connectOverlay" onclick="chatbox.connect()"><h4>أنت غير متصل حاليا بـ الدردشة</h4><p>اضغط هنا للانضمام الى الدردشة العامة </p></div>'), Y || e !== S || R("connect" === i.action ? "online" : "disconnect" === i.action ? "offline" : "alert"), b.addClass("alert"), g.prepend(b.prepend(m.html(i.msg))), v = 0, ef--;
                            else {
                                var u = f("<div>", {
                                        class: "msg-avatar",
                                        "data-user": l,
                                        "data-name": i.username,
                                        html: '<div class="msg-avatar-circle"><img src="' + i.user.avatar + '" /></div>'
                                    }),
                                    p = f("<div>", {
                                        class: "msg-wrap"
                                    }),
                                    y = /<a href="([^"]+)"[^>]+>(.*)?<\/a>/,
                                    w = i.msg.match(y),
                                    x = /<(iframe|embed)(.*)?src="([^"]+)"[^>]+>(<\/(iframe|embed)>)?/,
                                    _ = i.msg.match(x),
                                    k = function(f) {
                                        var e = f.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/);
                                        return !(!e || 11 != e[1].length) && c(e[1])
                                    },
                                    z = function(f) {
                                        var e = f.match(/^.+(dailymotion\.com(\/embed)?\/(video|hub|playlist\/[^/]+)|dai\.ly)\/([^_#]+)?[^#]*(#video=([^_&]+))?/);
                                        return !!(e = e ? e[6] || e[4] : null) && o(e)
                                    },
                                    T = function(f) {
                                        var e = f.match(/^https?:\/\/vimeo\.com(\/.*)?(\/(\d+))$/);
                                        return !!e && n(e[3])
                                    },
                                    j = function(f, e) {
                                        var a = k(e),
                                            t = z(e),
                                            s = T(e);
                                        a ? i.msg = i.msg.replace(f, a) : t ? i.msg = i.msg.replace(f, t) : s && (i.msg = i.msg.replace(f, s))
                                    };
                                t.userId + "" === l ? b.addClass("msg-me") : -1 !== a.online.indexOf(l) ? u.addClass("online") : -1 !== a.away.indexOf(l) ? u.addClass("away") : u.addClass("offline"), /<span style="[^"]+">\/buzz<\/span>/.test(i.msg) ? (i.msg = '<img src="//twemoji.maxcdn.com/72x72/1f4a5.png" alt="BUZZ">', Y || e !== S || (g.hasClass("chatbox-buzz") || (g.addClass("chatbox-buzz"), R("buzz")), setTimeout(function() {
                                    g.hasClass("chatbox-buzz") && g.removeClass("chatbox-buzz")
                                }, 1e3))) : w ? (! function(f, e) {
                                    /\.(jpg|png|gif)$/.test(e) && (i.msg = i.msg.replace(f, '<a href="$1" target="_blank" class="cb-bubcloud-image"><img src="$1" alt=""></a>'))
                                }(y, w[1]), j(y, w[1])) : _ && j(x, _[3]), "" === i.msg.replace(/<[^>]*>/g, "").trim() && m.addClass("no-text"), ! function() {
                                    var f = d[0].split(":"),
                                        e = 0;
                                    return f = 60 * parseInt(f[0], 10) + parseInt(f[1], 10), e = 0 === M ? 0 : Math.abs(f - M), M = f, 0 <= e && e < 5
                                }() || v !== l ? (g.prepend(b), b.append(u).append(p), h = p) : p = h, p.prepend(m.html(i.msg)), v = l
                            }
                            r() || (C = d[1])
                        });
                        var Z = g.find('img[alt="BUZZ"]:first');
                        if (Z.length && Z.closest(".msg-me").length ? X.hasClass("disable") || X.addClass("disable") : X.hasClass("disable") && (X.removeClass("disable"), A = !1), Y) ff = ef;
                        else if (u) {
                            if (g.find(".msg-row:first").hasClass("msg-me")) E(), g.scrollTop(0);
                            else {
                                var B = ef - ff;
                                0 === ef && (ff = 0, af = 0, B = 0, E()), B > 0 && af !== B && (g.scrollTop() > 0 && W.text("C\xf3 " + B + " رسالة جديدة").addClass("active"), m && (d.title = "(" + B + ") رسالة غير مقروءة | " + r), R("message")), af = B
                            }
                            0 != g.scrollTop() || m || (ff = ef)
                        }
                        Y = !1
                    }
                }
            }, p.addClass("active"), C.focus(), b.on("focus focusin", function() {
                m = !1
            }).on("blur focusout", function() {
                m = !0
            }), a.contents().find("html").add(b).on("click dblclick focus focusin keydown keypress keyup mousedown mouseenter mouseleave mousemove mouseover mouseout mouseup mousemove touchstart touchend touchcancel touchleave touchmove", debounce(function() {
                /^\(\d+\)\s/.test(d.title) && (d.title = r);
                var f = b.scrollTop(),
                    e = a.offset().top;
                0 === g.scrollTop() && f + b.height() > e && f < e + a.height() && (af = 0, ff = ef)
            }, 250))
        } else t < 7 && setTimeout(function() {
            e(), l.get(), t++
        }, 1500)
    }
    var a = f("#frame_chatbox"),
        t = 0;
    a.length && a.on("load", e)
}(jQuery);
! function(t) {
    "use strict";

    function i(t, i) {
        (e = document.getElementById("tooltip")) || ((e = document.createElement("div")).setAttribute("id", "tooltip"), document.body.appendChild(e)), e.style.visibility = "visible", t.onmousemove = function(t) {
            var s = t.clientX,
                n = t.clientY,
                o = window.innerWidth,
                l = window.innerHeight,
                a = e.offsetWidth,
                c = e.offsetHeight,
                u = -(20 + c),
                h = 0;
            e.innerHTML !== i && (e.innerHTML = i), "visible" !== e.style.visibility && (e.style.visibility = "visible"), s + a + 50 > o && (h = -a), s + h < 0 && (h = -s), e.style.left = s + h + "px", n < c + 20 && (u = 30), n + u + c > l && (u = l - c - 18 - n), e.style.top = n + u + "px"
        }, t.onmouseout = function() {
            e.style.visibility = "hidden"
        }
    }
    var e;
    t(".sub-title").replaceWith(function() {
        return this.textContent.replace(/^(.+)\s-\s(\d+)\s[^-]+$/, '<span class="hide"><span class="tooltip-title"><i class="fa fa-file-text-o" aria-hidden="true"></i></span>$1</span><span class="lastRight">$2</span>')
    }), t(".group_post .lastRight, .group_time .lastRight").text(function() {
        return this.textContent.match(/\d+/)[0]
    }), t("#recent_topics a:first-child, #active_topics a, #viewed_topics a").mouseover(function() {
        i(this, t(this).next().html())
    }), t(".changeLast").change(function() {
        t(".half.group_" + t(this).data("group")).hide(), t("#" + this.value).show()
    })
}(jQuery);
