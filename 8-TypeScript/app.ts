const img1: Element = document.querySelector("#img1")
const img2: Element = document.querySelector("#img2")
const img3: Element = document.querySelector("#img3")

const keyframes: Keyframe = {
    transform: 'rotate(360deg) scale(0)' 
}

const options: KeyframeAnimationOptions = {
    duration: 2000,
    iterations: 1,
}


const executeAnimations = async (): Promise<void> => {

    let an1: Animation = img1.animate(keyframes, options)

    let fin1: Animation = await an1.finished

    let an2: Animation = img2.animate(keyframes, options)

    let fin2 : Animation = await an2.finished

    let an3 : Animation = img3.animate(keyframes, options)

    let fin3 : Animation = await an3.finished

}

executeAnimations()