let lenis;
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
// HTML파싱되고 이벤트 시작
const link = {
    0: "index.html",
    1: "https://beahayoung.github.io/BHY.UI",
    2: "https://www.metarock.co.kr/",
    3: "https://beahayoung.github.io/paullbassettGrid/"
}
window.addEventListener("DOMContentLoaded", function () {
    const data = new Date().getFullYear();
    const dotWrap = document.querySelector('.works_dot');
    const cardes = document.querySelectorAll(".project_card")
    document.querySelector("footer .year span").textContent = data;
    document.querySelector(".section2").classList.add("on")
    document.querySelectorAll(".project_card").forEach((card, i) => {
        const li = document.createElement("li");
        if (i === 0) li.classList.add("on");
        li.setAttribute("data-index", i);
        dotWrap.appendChild(li);
        document.querySelector(".project_trach").style.width = (cardes.length * 100) + "vw";

        card.dataset.url = link[i]
    })
    document.querySelectorAll(".footer_title_wrap span").forEach(forr => {
        textsclice(forr)
    })
    document.querySelectorAll(".footer_wrap div>div").forEach(wrap => {
        textsclice(wrap)
    })
    document.querySelectorAll(".footer_wrap a").forEach(a => {
        textsclice(a)
    })
    // asciiSplit(document.querySelector("footer pre"))
    gsap.ticker.lagSmoothing(0);
    document.querySelector("html").style.overflow = "hidden";

    let worksSt;
    disableScroll()
    const texts = document.querySelector(".loding .text");
    const title = document.querySelector(".title");
    let titleclone = title.cloneNode(true);
    canvasCut()
    document.querySelector(".htwo_wrap").appendChild(titleclone);

    let text = texts.textContent;
    let i = 0;
    const loding = setInterval(() => {
        texts.textContent = text.slice(0, ++i);
        if (i >= text.length) {
            clearInterval(loding);
            gsap.fromTo("#wavy feDisplacementMap", {
                attr: {
                    scale: 40
                },
            }, {
                attr: {
                    scale: 0
                },
                duration: 1,
                ease: "power1.inOut",
                onComplete: () => {
                    document.querySelector(".loding").classList.add("active");
                    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
                    if (isMobile) {
                        document.querySelector("html").style.overflow = "";
                    } else {
                        document.querySelector("html").style.overflow = "unset";
                    }

                    setTimeout(() => {
                        document.querySelector(".loding").style.display = "none";
                        document.querySelector("#wrap").style.opacity = "1";
                        canvasCut();
                        document.querySelectorAll(".title").forEach((titel) => {
                            fontresize(titel);
                        })
                        let error = window.innerWidth > 1920 ? 100 : 0;
                        const title_p = document.querySelector(".scroll-wrap .title_wrap").getBoundingClientRect();
                        const headerel = document.querySelector("header").offsetHeight;
                        const widowhE = window.innerHeight - headerel;
                        const t = widowhE - title_p.bottom - error




                        gsap.to(".scroll-wrap .title_wrap", {
                            y: t,
                            duration: 1,
                            ease: "power4",
                            onComplete: () => {
                                document.querySelector(".section2").classList.remove("on")
                                gsap.set('.scroll-wrap .pir', {
                                    height: 'auto'
                                }); //초기값 셋팅
                                gsap.set('.img_wrap .text', {
                                    height: "0",

                                }); //초기값 셋팅
                                gsap.set("#cutImage", {
                                    opacity: 0,

                                })
                                gsap.set(".img_wrap .img_ani", {
                                    opacity: 0,

                                })
                                gsap.set(".scroll-wrap .sub_title", {
                                    height: "36px"

                                })

                                ScrollTrigger.refresh();
                 
                                gsap.timeline({
                                        scrollTrigger: {
                                            trigger: '.scroll-wrap',
                                            pin: true,
                                            start: 'top top',
                                            end: '+=200%',
                                            scrub: 1,
                                            onUpdate: (self) => {
                                                // console.log('progress:', self.progress); // ← 추가
                                                if (self.progress <= 0) {
                                                    gsap.set("#cutImage", {
                                                        opacity: 0,

                                                    })
                                                }
                                                if (self.progress > 0.45) {

                                                    const cutProgress = (self.progress - 0.45) * 3;
                                                    const index = Math.min(
                                                        Math.floor(cutProgress * imgTotal),
                                                        imgTotal - 1
                                                    );
                                                    const scale = cutProgress * 0.9;
                                                    drawFrame(index, scale);

                                                }


                                            },
                                            onLeave: (self) => {

                                            }



                                        }
                                    })
                                    .to(".scroll-wrap .pir", {
                                        height: 0,
                                        ease: "none",
                                        duration: 1
                                    })
                                    .to(".scroll-wrap .sub_title", {
                                        height: 0,
                                        ease: "none",
                                        duration: 1
                                    }, "<")
                                    .to(".scroll-wrap .title_wrap", {
                                        y: 0,
                                        ease: "none",
                                        duration: 1
                                    }, "<")
                                    .to(".scroll-wrap .title_name1", {
                                        x: () => -window.innerWidth,
                                        ease: "none",
                                        duration: 1
                                    }, ">")
                                    .to(".scroll-wrap .title_name2", {
                                        x: () => window.innerWidth,
                                        ease: "none",
                                        duration: 1
                                    }, "<")
                                    .to("#cutImage", {
                                        opacity: 1,
                                        ease: "none",
                                        duration: 1
                                    }, "<")
                                    .to(".img_wrap .text", {
                                        height: "auto",
                                        ease: "none",
                                        duration: 0.5
                                    }, "<0.5")
                                const path = document.querySelector('.projects svg path');
                                const length = path.getTotalLength();
                                gsap.set('.section2 .mar1', {
                                    xPercent: -100
                                }); //초기값 셋팅
                                gsap.set('.section2 .mar2', {
                                    xPercent: 100
                                }); //초기값 셋팅
                                gsap.set(path, {
                                    strokeDasharray: length,
                                    strokeDashoffset: length
                                })
                                gsap.set(".pro_item", {
                                    x: "80px",
                                })
                                gsap.set(".section2 .projects", {
                                    opacity: 0,
                                    filter: "blur(20px)",
                                });

                                gsap.timeline({
                                        scrollTrigger: {
                                            trigger: '.section2',
                                            start: 'top 80%', //함수로 쓰면 리플레쉬마다 재계산
                                            end: '+=200%',
                                            scrub: 1,

                                            invalidateOnRefresh: true,

                                        }
                                    })
                                    .to(".img_wrap .text", {
                                        opacity: 0,
                                        y: -50,
                                        duration: 0.8,
                                        immediateRender: false
                                    })
                                    .to("#cutImage", {
                                        opacity: 0,
                                        ease: "none",
                                        duration: 1
                                    }, "<")
                                    .to(".img_wrap", {
                                        y: "-50vh",
                                        force3D: true,
                                        duration: 5,
                                    }, "<")
                                    .to(".section2 .mar1", {
                                        xPercent: 0,
                                        ease: "none",
                                        duration: 1
                                    }, "<")
                                    .fromTo(".img_wrap .img_ani", {
                                        backdropFilter: "blur(0px)",
                                        opacity: 0
                                    }, {
                                        opacity: 0.7,
                                        backdropFilter: "blur(16px)",
                                        duration: 1,
                                        delay: 2
                                    }, "<")
                                    .to(".about_pho", {
                                        opacity: 1,
                                        y: "0%",
                                        force3D: true,
                                        filter: "blur(0px)",
                                        duration: 0.8,
                                        delay: 2
                                    }, ">")
                                    .to(".section2 .text_mask_wrap", {
                                        opacity: 1,
                                        y: "0%",
                                        force3D: true,
                                        filter: "blur(0px)",
                                        duration: 0.8,
                                    }, "<")
                                    .fromTo(".section2 .mask .text", {
                                        'background-size': '0 100%'
                                    }, {
                                        'background-size': '100% 100%',
                                        stagger: 0.5,
                                        duration: 1,
                                        ease: "none"
                                    }, ">-0.7")
                                    .to(".section2 .mar2", {
                                        xPercent: 0,
                                        ease: "none",
                                        duration: 1
                                    }, ">")
                                    .to(".section2 .projects", {
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        ease: "none",
                                        duration: 1,
                                        onComplete: () => ScrollTrigger.refresh()
                                    }, ">+0.8")

                                gsap.set(".section3 .project_wrap", {
                                    opacity: 0,
                                    filter: "blur(20px)",
                                });
                                gsap.set(".projects h2", {
                                    'background-size': '0% 100%',
                                });
                                let currentpro = -1;
                                // const project = document.querySelector()
                                gsap.timeline({
                                        scrollTrigger: {
                                            trigger: '.projects',
                                            start: 'top 80%', //함수로 쓰면 리플레쉬마다 재계산
                                            end: 'bottom bottom',
                                            scrub: 1,
                                            invalidateOnRefresh: true,

                                        }
                                    })

                                    .to(".projects h2", {
                                        'background-size': '100% 100%',
                                        ease: 'none',
                                        duration: 1
                                    })
                                    .to(path, {
                                        strokeDashoffset: 0,
                                        ease: 'none',
                                        duration: 4
                                    }, "<")
                                    .to(".section3 .project_wrap", {
                                        opacity: 1,
                                        filter: "blur(0)"
                                    })


                                gsap.utils.toArray(".works_item").forEach((selector, i, arr) => {

                                    selector.style.top = (80 + i * 50) + "px";
                                    gsap.set(selector, {
                                        y: 0,
                                    })
                                    gsap.timeline({
                                            scrollTrigger: {
                                                trigger: arr[i + 1],
                                                start: "top 80%",
                                                end: "top top",
                                                scrub: true,
                                            }
                                        })
                                        .to(selector, {
                                            backgroundColor: "#000",
                                            ease: 'none',
                                            duration: 0.1
                                        })

                                })
                                gsap.set(".section3 h2", {
                                    'background-size': '0% 100%',
                                });
                                gsap.set(".works_num,.works_dot", {
                                    opacity: 0
                                });
                                gsap.set(".section3 .project_trach li:first-child .project_info", {
                                    height: 0
                                });
                                const track = document.querySelector('.project_trach');
                                const cards = gsap.utils.toArray('.project_card');
                                let worksReady = false;
                                gsap.timeline({
                                        scrollTrigger: {
                                            id: "worksScroll",
                                            trigger: '.section3',
                                            start: 'top top', //함수로 쓰면 리플레쉬마다 재계산
                                            end: () => '+=' + (track.scrollWidth - window.innerWidth + window.innerHeight),
                                            scrub: 1,
                                            pin: true,
                                            invalidateOnRefresh: true,
                                            pinSpacing: true, // ★ 기본값이지만 명시 (점프 방지)
                                            anticipatePin: 1, // ★ pin 부드럽게 (점프 줄임)
                                            onUpdate: (self) => {
                                                worksReady = true;
                                                const isMobile = window.matchMedia("(max-width: 1023px)").matches;
                                                if (!isMobile) {
                                                    mouseevent(worksReady)
                                                } else {
                                                    document.querySelector(".read_more_btn").classList.add("on");
                                                }
                                            },
                                            onEnter: () => {
                                                const isMobile = window.matchMedia("(max-width: 1023px)").matches;
                                                worksReady = true;
                                                if (!isMobile) {
                                                    mouseevent(worksReady)
                                                }
                                            },
                                            onLeave: () => {
                                                worksReady = false;
                                                document.querySelector(".read_more_btn").classList.remove("on");
                                            },
                                            onLeaveBack: () => {
                                                document.querySelector(".read_more_btn").classList.remove("on");
                                            },
                                            onRefresh: (self) => {
                                                worksSt = self;
                                            }

                                        }
                                    })
                                    .to(".section3 h2", {
                                        'background-size': '100% 100%',
                                        ease: 'none',
                                        duration: 1
                                    })
                                    .to(".section3 .project_wrap", {
                                        opacity: 1,
                                        filter: "blur(0)"
                                    })
                                    .fromTo(".project_card:first-child .project_thumb", {
                                        scale: 0,
                                        opacity: 0,
                                        transformOrigin: "center center"
                                    }, {
                                        opacity: 1,
                                        scale: 1,
                                        duration: 1,
                                        ease: "none",
                                        onComplete: () => {

                                        }
                                    }, "-0.5")
                                    .to(".section3 .project_trach li:first-child .project_info", {
                                        height: "auto"
                                    }, ">")
                                    .to(".works_num,.works_dot", {
                                        opacity: 1
                                    }, "<")
                                    .to(track, {
                                        x: () => -(track.scrollWidth - window.innerWidth),
                                        ease: 'none',
                                        duration: 4,
                                        onUpdate: function () {
                                            const p = this.progress();
                                            const idx = Math.round(p * (cards.length - 1));
                                            const numel = document.querySelector(".works_num");

                                            if (numel) {
                                                numel.querySelector(".number").textContent = "0" + (idx + 1)
                                                numel.querySelector(".len").textContent = "0" + cards.length;
                                            }
                                            document.querySelectorAll(".works_dot li").forEach((dot, i) => {
                                                dot.classList.toggle('on', i === idx);

                                            })
                                            if (p > 0.2) {
                                                cards.forEach((card, i) => {
                                                    const target = card.querySelector(".project_info");
                                                    if (i === 0) return;
                                                    target.classList.toggle('show', i === idx)
                                                })
                                            }

                                        }
                                    });
                                document.querySelectorAll(".works_dot li").forEach((dotli, i) => {
                                    const cardeles = document.querySelectorAll(".project_trach li")
                                    dotli.addEventListener("click", function () {
                                        if (!lenis) return;
                                        const st = ScrollTrigger.getById("worksScroll");


                                        if (!st) return;

                                        const moveStart = 0.335; // 가로 시작 지점
                                        const cardRatio = i / (cards.length - 1);
                                        const cardProgress = moveStart + (1 - moveStart) * cardRatio;
                                        const target = st.start + (st.end - st.start) * cardProgress;

                                        lenis.scrollTo(target, {
                                            duration: 1.2,
                                            force: true
                                        });
                                    })
                                })
                                gsap.set(".section4 h2", {
                                    'background-size': '0% 100%',
                                });
                                gsap.set(".skills_item", {
                                    opacity: 0,
                                    scale: 0.4
                                });
                                gsap.timeline({
                                        scrollTrigger: {
                                            trigger: '.section4',
                                            start: 'top 50%',
                                            end: 'bottom 30%',
                                            toggleActions: "play none none reverse", // ★
                                            // play(들어올때) none none reverse(나갈때 되감기)
                                        }
                                    })
                                    .to(".section4 h2", {
                                        'background-size': '100% 100%',
                                        duration: 1
                                    })
                                    .to(".skills_item", {
                                        opacity: 1,
                                        scale: 1,
                                        stagger: {
                                            each: 0.05,
                                            from: "random"
                                        }, // 랜덤 등장
                                        ease: "back.out(1.7)",
                                        duration: 0.5
                                    }, "<");

                                gsap.set(".circle_wrap .circle", {
                                    scale: 0
                                });
                                gsap.set(".section5 p, .section5 a", {
                                    opacity: 0,
                                });
                                gsap.set("footer", {

                                });

                                gsap.timeline({
                                        scrollTrigger: {
                                            trigger: '.section5',
                                            start: 'top 90%',
                                            end: '+=250%', // 길게 (3단계)
                                            scrub: 1,
                                            invalidateOnRefresh: true,
                                            onEnter: () => {
                                                gsap.set(".circle_wrap", {
                                                    opacity: 1
                                                });
                                                // document.querySelector("html").style.overflow = "unset";
                                            },
                                            onLeaveBack: () => {
                                                gsap.set(".circle_wrap", {
                                                    opacity: 0
                                                });
                                                // document.querySelector("html").style.overflow = "";
                                            },

                                        }
                                    })
                                    // 1단계 — 동그라미 채우기
                                    .to(".circle_wrap .circle", {
                                        scale: 100,
                                        ease: 'none',
                                        duration: 1,



                                    })
                                    .to(".section5 p, .section5 a", {
                                        opacity: 1,
                                        stagger: 0.1,
                                        duration: 0.5,
                                    }, ">")
                                    .to(".section5 .contact_wrap", {
                                        yPercent: -100,
                                        duration: 2,
                                    }, "<")
                                // 2단계 — contact 등장
                                // 3단계 — footer 올라옴
                                gsap.from(".footer_title_wrap span span", {
                                    yPercent: 100,
                                    stagger: 0.3,
                                    ease: "power3.out",
                                    duration: 0.6,
                                    scrollTrigger: {
                                        trigger: 'footer',
                                        start: 'top 30%',
                                        toggleActions: "play none none reverse",

                                    },

                                });
                                ScrollTrigger.create({
                                    trigger: 'footer',
                                    start: 'top 20%',
                                    onEnter: () => document.querySelector('footer').classList.add('on'),
                                    onLeaveBack: () => document.querySelector('footer').classList.remove('on'),
                                });
                                

                              





                                ScrollTrigger.refresh();
                            }
                        })

                        gsap.to(".scroll-wrap .sub_title span", {
                            opacity: 1,
                            y: 0,
                            rotation: 0,
                            duration: 0.3,
                            delay: 1,
                            ease: "power2.out"
                        })
                        gsap.to(".scroll-wrap .pir", {
                            height: "auto",
                            duration: 0.3,
                            delay: 1,
                            ease: "power2.out"
                        })
                        gsap.to("header", {
                            width: "100%",
                            duration: 0.3,
                            delay: 2,
                            ease: "power2.out"
                        })
                        gsap.to("header .list", {
                            opacity: 1,
                            duration: 0.2,
                            delay: 3,
                            ease: "power2.out",
                            onComplete: () => {
                                endbleScroll()
                                // document.body.style.overflowY = "auto";
                                // document.querySelector("html").style.overflow = "unset";

                                ScrollTrigger.refresh();
                                lenis = new Lenis({
                                    duration: 0.8
                                });
                                lenis.on('scroll', ScrollTrigger.update);
                                gsap.ticker.add((time) => {
                                    lenis.raf(time * 1000);
                                });
                                document.querySelectorAll('.menu_list a').forEach((link) => {
                                    link.addEventListener('click', function (e) {

                                        const href = this.getAttribute('href');
                                        if (href && href.startsWith('#')) {
                                            e.preventDefault();
                                            const target = document.querySelector(href);
                                            if (target) {
                                                lenis.scrollTo(target, {
                                                    offset: -100,
                                                    duration: 1.5,
                                                });
                                            }
                                        }
                                    });
                                });


                            }
                        })





                    }, 350)
                }
            });
        }
    }, 50);
})
window.addEventListener("load", function () {
    imageload();
    canvasCut();
    const charel = document.querySelector(".char_wrap")
    textsclice(charel)
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);
    document.querySelectorAll(".item li a").forEach((menu, id) => {
        let text = menu.textContent.split("").map((c, i) =>
            c === " " ?
            "" : `<span style="--char-index:${i}" data-char="${c}">${c}</span>`
        ).join("");

        menu.innerHTML = text;
    })
    // 모바일 감지
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobile) {

    } else {
        document.addEventListener("mousemove", function (e) {
            const cursor = document.querySelector(".cursor");
            const cursordata = cursor.getBoundingClientRect();
            let cursorWidth = cursordata.width / 2;
            let cursorHight = cursordata.height / 2;
            let x = e.clientX - cursorWidth;
            let y = e.clientY - cursorHight;

            cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        })
        document.removeEventListener("mousemove", readMore)
    }

})
// 커리어 카드 마우스가 올리면 움직임

document.querySelectorAll(".card_inner").forEach((inner) => {
    inner.addEventListener("mousemove", (e) => {
        const rect = inner.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.8;
        const y = (e.clientY - rect.top) / rect.height - 0.8;

        gsap.to(inner, {
            rotationY: x * 15,
            rotationX: -y * 15,
            duration: 0.3
        })
    })
    inner.addEventListener("mouselave", () => {
        gsap.to(inner, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5
        })
    })
})


// 섹션3의 마우스 무브이벤트
function readMore(e) {
    const readreat = document.querySelector(".read_more_btn").getBoundingClientRect();
    const readH = readreat.height / 2;
    const readw = readreat.width / 2;
    document.querySelector(".read_more_btn").style.transform = `translate3d(${e.clientX - readw}px, ${e.clientY - readH}px, 0)`;
}

function mouseevent(worksReady) {
    const cardel = document.querySelectorAll(".section3");
    cardel.forEach((c) => {

        c.addEventListener("mouseenter", function () {
            document.querySelector(".cursor").classList.add("on");
            document.querySelector(".read_more_btn").classList.add("on")
        })
        c.addEventListener("mouseleave", function () {
            document.querySelector(".cursor").classList.remove("on");
            document.querySelector(".read_more_btn").classList.remove("on")
            document.removeEventListener("mousemove", readMore)
        })
    })
    document.addEventListener("mousemove", readMore)
    document.querySelectorAll(".project_trach li").forEach((li, i) => {
        const dataurl = li.dataset.url;
        li.addEventListener("click", function () {
            window.location.href = dataurl;
        })
    })
}
// 글자 자르는 js
function textsclice(el) {
    let textslice = el.textContent.split("").map((c, i) =>
        c === " " ?
        "" : `<span style="--char-index:${i}" data-char="${c}">${c}</span>`
    ).join("");
    el.innerHTML = textslice;
}
window.addEventListener("load", function () {

})
// 글자 사이즈 js
function fontresize(el) {
    el.style.fontSize = "100px";
    el.style.letterSpacing = "0";

    setTimeout(() => {
        const elparentWindth = el.offsetWidth;
        const inner = window.innerWidth - 60;
        const fontsize = inner / elparentWindth;
        const newvw = (100 * fontsize).toFixed(2);
        el.style.fontSize = Math.trunc((parseFloat(newvw) / window.innerWidth * 100).toFixed(2)) + "vw";
    }, 100)

}
// 파티클
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.5 + .3;
        this.vx = (Math.random() - .5) * .3;
        this.vy = (Math.random() - .5) * .3;
        this.alpha = Math.random() * .5 + .1;
        // this.color = Math.random() > .5 ? '#eee' : '#eee';
        this.color = '#eee';
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
    }
}

for (let i = 0; i < 120; i++) particles.push(new Particle());

// mouse repel
let mx = W / 2,
    my = H / 2;
window.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
});

function drawLines() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = '#F87B1B';
                ctx.globalAlpha = (1 - dist / 90) * .08;
                ctx.lineWidth = .5;
                ctx.stroke();
            }
        }
    }
}

function animParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
        // mouse repel
        const dx = p.x - mx,
            dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
            p.x += dx / d * 1.2;
            p.y += dy / d * 1.2;
        }
        p.update();
        p.draw();
    });
    drawLines();
    ctx.globalAlpha = 1;
    requestAnimationFrame(animParticles);
}
animParticles();


let prevScrollTop = 0;
document.addEventListener("scroll", function () {
    let nowScrollTop = $(window).scrollTop();
    if (nowScrollTop < prevScrollTop) {
        $("header").addClass("active");
    } else {
        $("header").removeClass("active");
    }
    prevScrollTop = nowScrollTop;
})
const imgTotal = 38;
const images = [];
let imageimg;
// canvas cut
const cut = document.querySelector("#cutImage");
const cx = cut.getContext('2d');

function canvasCut() {

    cut.width = window.innerWidth;
    cut.height = window.innerHeight;

}

function imageload() {
    for (let i = 0; i < imgTotal; i++) {
        const img = new Image();
        img.src = `./image/steps/u${i + 1}.webp`;
        images.push(img)
    }
}

function drawFrame(index, scale) {
    if (!images[index]?.complete || scale <= 0) return;
    cx.clearRect(0, 0, cut.width, cut.height);

    const img = images[index];
    const dw = cut.width * scale;
    const dh = cut.height * scale;
    const dx = (cut.width - dw) / 2;
    const dy = (cut.height - dh) / 2;

    // cover: 비율 유지 center crop
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const destAspect = dw / dh;
    let sw, sh, sx, sy;
    if (imgAspect > destAspect) {
        sh = img.naturalHeight;
        sw = sh * destAspect;
        sx = (img.naturalWidth - sw) / 2;
        sy = 0;
    } else {
        sw = img.naturalWidth;
        sh = sw / destAspect;
        sx = 0;
        sy = (img.naturalHeight - sh) / 2;
    }
    cx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
}
window.addEventListener("resize", canvasCut);

// marquee 애니메이션

const tween = gsap.to(".marquee_inner", {
    xPercent: -50,
    ease: 'none',
    duration: 15,
    repeat: -1
})

document.querySelector(".marquee").addEventListener('mouseenter', function () {
    gsap.to(tween, {
        timeScale: 0,
        duration: 0.5
    });
})
document.querySelector(".marquee").addEventListener('mouseleave', function () {
    gsap.to(tween, {
        timeScale: 1,
        duration: 0.5
    });
})
let direction;
ScrollTrigger.create({
    onUpdate: (self) => {

        if (self.direction !== direction) {
            direction = self.direction;
            gsap.to(tween, {
                timeScale: direction,
                duration: 0.4
            });
        }
    }
})
// link 클릭했을때 이동하는 애니메이션
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        let linkdata = this.dataset.pageLink;
        // let textcont = this.textContent;
        // let fontS = window.getComputedStyle(this).fontSize;;
        // const btnEl = this.getBoundingClientRect();
        // document.querySelector(".link_body").style.display = "block";
        // document.querySelector(".link_body .txt").textContent = textcont;
        // document.querySelector(".link_body .txt").style.fontSize = fontS;
        // document.querySelector(".link_body .txt").style.top = `${btnEl.top}px`;
        // document.querySelector(".link_body .txt").style.left = `${btnEl.left}px`;

        // setTimeout(() => {
        //     document.querySelector(".link_body .txt").style.top = `20px`;
        //     document.querySelector(".link_body .txt").style.left = `20px`;
        //     setTimeout(() => {
        //         window.location = `${linkdata}.html`
        //     }, 1000)
        // }, 1000)
        setTimeout(() => {
            window.location = `${linkdata}.html`
        }, 1000)
    })
})
// 스크롤막기
function disableScroll() {
    window.addEventListener("wheel", preventDefault, {
        passive: false
    })
    window.addEventListener("touchmove", preventDefault, {
        passive: false
    })
    window.addEventListener("scroll", preventDefault, {
        passive: false
    })

}

function endbleScroll() {
    window.removeEventListener("wheel", preventDefault)
    window.removeEventListener("touchmove", preventDefault)
    window.removeEventListener("scroll", preventDefault)

}

function preventDefault(e) {
    e.preventDefault();
}

document.querySelectorAll(".skills_item").forEach((tag) => {
    tag.addEventListener("mousemove", (e) => {
        const re = tag.getBoundingClientRect();
        const x = (e.clientX - re.left - re.width / 2) * 0.4;
        const y = (e.clientY - re.top - re.height / 2) * 0.4;
        gsap.to(tag, {
            x,
            y,
            duration: 0.3,
            overwrite: "auto"
        })
    })
    tag.addEventListener("mouseleave", (e) => {
        gsap.to(tag, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1,0.4)"
        })
    })
})

// 이메일 js
emailjs.init("4TXlaQlMYxjWaeWk7");
document.querySelector("#contactform").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm(
            "service_yaak91g", // ★ Service ID
            "template_its5214", // ★ Template ID
            this
        )
        .then(() => {
            alert("메시지가 전송되었습니다!");
            this.reset();
        })
        .catch((err) => {
            alert("전송 실패. 다시 시도해주세요.");

        });
});
document.querySelector("#contactform").addEventListener("input", function (e) {
    e.preventDefault();
    const target = e.target;
    const valueLen = target.value.length;

    if (target.name == "user_name") {
        target.nextElementSibling.classList.toggle("on", valueLen > 4)
    } else if (target.name == "user_email") {
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        target.nextElementSibling.classList.toggle("on", !emailregex.test(e.target.value))
    }

    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const mase = document.querySelector("#mase")

    const alertset = name.value.trim() !== "" && email.value.trim() !== "" && mase.value.trim() !== "";
    if (alertset) {
        document.querySelector(".send_btn").disabled = !alertset;
    }
});

// function asciiSplit(el) {
//     const text = el.textContent;
//     el.textContent = "";
//     for (let i = 0; i < text.length; i++) {
//         const ch = text[i];
//         if (ch === "\n") {
//             el.appendChild(document.createTextNode("\n"));
//         } else if (ch === " ") {
//             el.appendChild(document.createTextNode(" "));
//         } else {
//             const span = document.createElement("span");
//             span.textContent = ch;
//             span.classList.add("ch")
//             el.appendChild(span);
//         }
//     }
// }

// const pre = document.querySelector(".ascll_wrap");


// pre.addEventListener("mousemove", (e) => {
//     const ct = pre.getBoundingClientRect();
//     const cmx = e.clientX - ct.left;
//     const cmy = e.clientY - ct.top;
//     const charse = document.querySelectorAll(".ascll_wrap span");
//     charse.forEach(cha => {
//         const cr = cha.getBoundingClientRect();
//         const cx = cr.left - ct.left + cr.width / 2;
//         const cy = cr.top - ct.top + cr.height / 2;

//         const dist = Math.sqrt((cmx - cx) ** 2 + (cmy - cy) ** 2);
//         if (dist < 60) {
//             cha.style.color = "#f87b1b";
//             cha.style.color = "1";
//         } else {
//             cha.style.color = '';
//             cha.style.opacity = '';
//         }
//     })
// })
// pre.addEventListener("mouseleave", function () {
//     const charse = document.querySelectorAll(".ascll_wrap span");
//     charse.forEach(c => {
//         c.style.color = "";
//         c.style.opacity = ""
//     })
// })