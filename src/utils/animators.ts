import {gsap} from 'gsap'

const gsapTimeline = gsap.timeline()

export function showFolderPickerButton(){
    gsapTimeline.to("#img-tray", {
        y: -40,
        duration: 0.3,
        delay: 0.5,
        // ease: "power2.easeInOut"
    })
    gsapTimeline.to("#folder-picker",{
        opacity: 1,
        duration: 0.3,
        delay: 0.5
    })
}

export async function hideStartButton(){
    await gsap.to("#btnSubmit--label", {
        duration: 0.3,
        color: "transparent",
        ease: "expo"
    })
    gsap.to("#submitBtn-wrapper",{
        width: 0,
        duration: 0.5,
        delay: 0.1,
        ease: "expo"
    })
    await gsap.to("#progressbar-wrapper",{
        width: "100%",
        duration: 0.5,
        delay: 0.1,
        // ease: "expo"
    })

    return
}