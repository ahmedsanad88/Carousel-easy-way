// select all buttons to control both of them at once.
const buttons = document.querySelectorAll('[data-carousel-btn]');


buttons.forEach((btn) => {
    // adding event listener to every button.
    btn.addEventListener('click', () => {
        // Move to next or prev image.

        // by using the dataset we can know which button client press next or prev
        // if customer click on next will make the offset one to move to next slide and 
        // if not will make -1 which will move to previous one.
        const offset = btn.dataset.carouselBtn === "next" ? 1 : -1;

        // we using custom data attribute and closest function to get all slides or images
        const slides = btn.closest("[data-carousel]").querySelector("[data-slides]");

        // get the current active slide to know it's position and moving according to it.
        const activeSlide = slides.querySelector("[data-active]");

        /*
            [...slides.children] spreading all slide children and then get the index of the active slide from it
            then add the offset to it to know the nest slide position and save it to new variable newIndex.
        */ 
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        // Some If's to handle all side cases like path the slide array length or go below zero.
        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        // give the new slide the active dataset.
        slides.children[newIndex].dataset.active = true;
        
        // using the keyword delete to remove the active dataset from old slide.
        delete activeSlide.dataset.active;
    });
});