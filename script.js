

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
           
            
                entry.target.classList.add('visible');
         

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});


document.querySelectorAll('.hidden').forEach((element) => {
    observer.observe(element);
});


document.addEventListener("scroll", () => {
    const robot = document.getElementById("robot");
    const scrollY = window.scrollY;

    
    robot.style.transform = `translateY(${scrollY * 0.1}px)`;
});


setTimeout(() => {
    const speechBubble = document.getElementById("speech-bubble");
    speechBubble.style.opacity = "0";
}, 4000);


