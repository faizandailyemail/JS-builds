document.addEventListener('DOMContentLoaded', function () {
    //1. MotionPlugin
    gsap.registerPlugin(MotionPathPlugin);

    //2. Define vars
    const figure = document.querySelector('#figure');
    const buttonPlay = document.querySelector('#play');
    const buttonRestart = document.querySelector('#restart');

    let runAnimation = true;

    //3. GSAP
    const animation = gsap.timeline({ paused: true })
        .to(figure, {
            duration: 4,
            ease: "none",
            motionPath: {
                path: "#motionpath path",// 👈 target the <path>, not the <g>
                align: "#motionpath path",
                alignOrigin: [0.5, 0.5]
            }
        });

    //4. EVENTS
    buttonPlay.addEventListener('click', function () {
        if (runAnimation === true) {
            animation.play();
            buttonPlay.textContent = 'Pause';
        }
        else {
            animation.pause()
            buttonPlay.textContent = 'Play';
        }
        runAnimation = !runAnimation
    })

    buttonRestart.addEventListener('click', function () {
        figure.style.transition = '.2s'; //Smooth out the restart
        animation.pause(0); //Restart at start
        runAnimation = true; //Reset var
        buttonPlay.textContent = 'Play'; //Reset text
    })
});
