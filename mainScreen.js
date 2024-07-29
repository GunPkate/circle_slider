document.addEventListener("DOMContentLoaded",function(){
    let lottieContainer = document.querySelectorAll(".animation")
    console.log(lottieContainer)

    if(lottieContainer){
        LottieScrollTrigger({
            trigger: ".animation",
            start: "top center",
            endTrigger: ".end-lottie",
            end: `bottom center+=${
                document.querySelector(".animation").offsetHeight
            }`,
            renderer: "svg",
            target: ".animation",
            path: "./main.lottie.json",
            scrub: 2

        })
    }
})