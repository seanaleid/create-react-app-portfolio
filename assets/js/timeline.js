var tl = new TimelineMax(),
    coin = document.querySelector(".coin"),
    dash = document.querySelectorAll(".dash"),
    circle = document.querySelector(".circle"),
    letters = document.querySelector(".letters"),
    first = document.querySelector(".first-name");
    last = document.querySelector(".last-name");

tl.from(coin, 2, {
    rotation: "200",
    ease: Bounce.easeOut
});
tl.to(dash, {
    opacity: 0,
    delay: -1
});
tl.to(letters, {
    scale: 1.5,
    y: -30,
    delay: -1,
});
tl.to(letters, {
    opacity: 0
})
tl.to(first, 0.4, {
    opacity: 1
})
tl.to(last, 0.6, {
    opacity: 1
})