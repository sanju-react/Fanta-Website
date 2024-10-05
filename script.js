var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,

    }
})

tl.to("#fanta", {
    top: "120%",
    left: "3%"
}, 'orange')

tl.to("#orange-cut", {
    top: "160%",
    left: "23%"
}, 'orange')

tl.to("#orange", {
    width: "20%",
    top: "163%",
    right: "10%"
}, 'orange')

tl.to("#leaf", {

    top: "95%",
    left: "3%"
}, 'orange')

tl.to("#leaf2", {
    rotate: "180deg",
    top: "105%",
    left: "80%"
}, 'orange')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "20% 95%",
        end: "20% 50%",
        scrub: true,

    }
})

tl2.from(".lemon1", {
    rotate: "-90deg",
    left: "-50",
    top: "110%",
}, 'ca')
tl2.from("#cocacola", {
    rotate: "-90deg",
    left: "-50",
    top: "110%",
}, 'ca')

tl2.from(".lemon2", {
    rotate: "90deg",
    right: "50",
    top: "110%",
}, 'ca')
tl2.from("#pepsi", {
    rotate: "90deg",
    right: "50",
    top: "110%",
}, 'ca')

tl2.to("#orange-cut", {
    width: '15%',
    left: "42%",
    top: "200%",
}, 'ca')
tl2.to("#fanta", {
    width: "25%",
    left: "37%",
    top: "220%",
}, 'ca')


