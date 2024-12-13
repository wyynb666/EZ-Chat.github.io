// Detecting form scrolling
window.onscroll = () => {

    // Background DOM
    const backgroundElement = document.querySelector(".background");
    const backgroundElementRect = backgroundElement.getBoundingClientRect();

    // navigator DOM
    const navElement = document.querySelector(".nav");

    // Modify navigation bar color
    if (backgroundElementRect.top < -200) {
        navElement.setAttribute("style", "background-color: rgba(195,166,203,0.8)");
    }
    else {
        navElement.setAttribute("style", "background-color: transparent");
    }

    // App introduction DOM element
    const introduceElement = document.querySelector(".introduce");
    const introduceElementRect = introduceElement.getBoundingClientRect();

    const productElement = document.querySelectorAll(".product-item");

    // Animate product items when the introduction section is in the viewport
    if (introduceElementRect.bottom >= 0) {
        for (let i = 0; i < productElement.length; i++) {
            productElement[i].classList.add("product-animation");
        }
    }

    // Remove animation when the introduction section goes out of the viewport
    if (introduceElementRect.top >= window.innerHeight) {
        for (let i = 0; i < productElement.length; i++) {
            productElement[i].classList.remove("product-animation");
        }
    }

    // Trigger software section animations
    softwareAnimation(".sociality");
    softwareAnimation(".file");
    softwareAnimation(".security");

    // Download DOM
    const downloadElement = document.querySelector(".download");
    const downloadElementRect = downloadElement.getBoundingClientRect();

    const downloadPlatformElement = document.querySelector(".download-software");

    if (downloadElementRect.bottom >= 0) {
        downloadPlatformElement.classList.add("download-animation");
    }

    if (downloadElementRect.top >= window.innerHeight) {
        downloadPlatformElement.classList.remove("download-animation");
    }
}

// Function to handle software section animations
function softwareAnimation(className) {
    const softwareElement = document.querySelector(className);
    const softwareElementRect = softwareElement.getBoundingClientRect();

    // Add animation classes when the software section is in the viewport
    if (softwareElementRect.bottom >= 0) {
        softwareElement.children[0].classList.add("software-item-left");
        softwareElement.children[1].classList.add("software-item-right");
    }

    // Remove animation classes when the software section goes out of the viewport
    if (softwareElementRect.top >= window.innerHeight) {
        softwareElement.children[0].classList.remove("software-item-left");
        softwareElement.children[1].classList.remove("software-item-right");
    }
}