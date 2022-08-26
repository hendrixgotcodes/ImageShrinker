import { gsap } from "gsap";

const gsapTimeline = gsap.timeline();

export function showFolderPickerButton() {
  gsapTimeline.to("#img-tray", {
    y: -40,
    duration: 0.3,
    ease: "power2.easeInOut",
  });
  gsapTimeline.to("#folder-picker", {
    opacity: 1,
    duration: 0.3,
    delay: 0.5,
    ease: "power2.easeInOut",
  });
}

export function hideFolderPickerButton() {
  gsapTimeline.to("#folder-picker", {
    opacity: 0,
    duration: 0.3,
    ease: "power2.easeInOut",
  });
  gsapTimeline.to("#img-tray", {
    y: 0,
    duration: 0.3,
    ease: "power2.easeInOut",
  });
}

export function shakeFolderPickerButton() {
  gsap.to("#folder-picker", {
    keyframes: {
      // x:[-25,0,25,0],
      x: [0, -20, 20, 0],
    },
    yoyo: true,
    duration: 0.1,
    repeat: 2,
    yoyoEase: "power2.easeInOut",
  });
}

export async function hideStartButton() {
  gsap.to("#btnSubmit--label", {
    duration: 0,
    color: "transparent",
    ease: "power2.easeInOut",
  });
  gsap.to("#submitBtn-wrapper", {
    width: 0,
    duration: 0.3,
    ease: "power2.easeInOut",
  });
  await gsap.to("#progressbar-wrapper", {
    width: "100%",
    duration: 0.3,
    ease: "power2.easeInOut",
  });
}

export async function showStartButton() {
  gsap.to("#btnSubmit--label", {
    duration: 0,
    color: "inherit",
    ease: "power2.easeInOut",
  });
  gsap.to("#submitBtn-wrapper", {
    width: "16.67%",
    duration: 0.3,
    ease: "power2.easeInOut",
  });
  await gsap.to("#progressbar-wrapper", {
    width: "83.33%",
    duration: 0.3,
    ease: "power2.easeInOut",
  });
}

export async function hideProgressBar() {
  gsap.to("#submitBtn-wrapper", {
    width: "100%",
    duration: 0.3,
    ease: "power2.easeInOut",
  });
  await gsap.to("#progressbar-wrapper", {
    width: 0,
    duration: 0.3,
    ease: "power2.easeInOut",
  });
}
