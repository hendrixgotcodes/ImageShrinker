import {gsap} from 'gsap'

const gsapTimeline = gsap.timeline()

export function showFolderPickerButton(){
    gsapTimeline.to("#img-tray", {
        y: -40,
        duration: 0.3,
        ease: "power2.easeInOut"
    })
    gsapTimeline.to("#folder-picker",{
        opacity: 1,
        duration: 0.3,
        delay: 0.5,
        ease: "power2.easeInOut"
    })
}

export function hideFolderPickerButton(){
    gsapTimeline.to("#folder-picker",{
        opacity: 0,
        duration: 0.3,
        ease: "power2.easeInOut"
    })
    gsapTimeline.to("#img-tray", {
        y: 0,
        duration: 0.3,
        ease: "power2.easeInOut"
    })
}

export async function hideStartButton(){
    gsap.to("#btnSubmit--label", {
        duration: 0,
        color: "transparent",
        ease: "power2.easeInOut"
    })
    gsap.to("#submitBtn-wrapper",{
        width: 0,
        duration: 0.3,
        ease: "power2.easeInOut"
    })
    await gsap.to("#progressbar-wrapper",{
        width: "100%",
        duration: 0.3,
        ease: "power2.easeInOut"
    })

    return
}

export async function hideProgressBar(){
    gsap.to("#submitBtn-wrapper",{
        width: "100%",
        duration: 0.3,
        ease: "power2.easeInOut"
    })
    await gsap.to("#progressbar-wrapper",{
        width: 0,
        duration: 0.3,
        ease: "power2.easeInOut"
    })
}