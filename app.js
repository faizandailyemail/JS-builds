document.addEventListener('DOMContentLoaded', function () {
    //1. global var
    const rightHand = document.querySelector('.rightHand')
    const leftHand = document.querySelector('.leftHand')

    const controller = document.querySelector('.controller')
    const book = document.querySelector('.book')
    const pencil = document.querySelector('.pencil')
    const paint = document.querySelector('.paint')
    const earth = document.querySelector('.earth')
    const basketBall = document.querySelector('.basketBall')

    //2. GSAP
    gsap.fromTo(leftHand,
        {
            transformOrigin: 'right bottom'
            , rotation: 10
        },
        {
            rotation: 0,
            duration: .5,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })
    gsap.fromTo(rightHand,
        {
            transformOrigin: 'right bottom'
            , rotation: 18
        },
        {
            rotation: 0,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })
    gsap.fromTo(controller,
        { y: 10 },
        {
            y: 0,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })
    gsap.fromTo(controller,
        { y: 10 },
        {
            y: 0,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })

    gsap.fromTo(basketBall,
        { y: 100 },
        {
            y: 0,
            duration: 1,
            repeat: -1,
            yoyo: true,
        })

    gsap.fromTo(book,
        { y: 5 },
        {
            y: 0,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })

    gsap.fromTo(pencil,
        { x: -5 },
        {
            x: 12,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })

    gsap.fromTo(paint,
        { y: -8 },
        {
            y: 10,
            duration: 3,
            repeat: -1,
            yoyo: true,
        })

    gsap.to(earth,
        {
            transformPerspective: 50000000,
            rotationY: 360,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'linear'
        })
})