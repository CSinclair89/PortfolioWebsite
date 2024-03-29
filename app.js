function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
if (!isMobile()) {
//place script you don't want to run on mobile here

// Intersection Observer for video/paragraph fade in


    // Left Elements
    const observerLeft = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log (entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show_left');
            } else {
                entry.target.classList.remove('show_left');
            }
        });
    });

    const hiddenElementsLeft = document.querySelectorAll('.hidden_left');
    hiddenElementsLeft.forEach((el) => observerLeft.observe(el));


    // Right Elements
    const observerRight = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log (entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show_right');
            } else {
                entry.target.classList.remove('show_right');
            }
        });
    });

    const hiddenElementsRight = document.querySelectorAll('.hidden_right');
    hiddenElementsRight.forEach((el) => observerRight.observe(el));

}


