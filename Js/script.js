// FAQ Expand/Collapse
document.addEventListener('DOMContentLoaded', function () {
    const mainFaqItems = document.querySelectorAll('.main_faq_contents');
    mainFaqItems.forEach(item => {
        const faqContents = item.querySelector('.faq_contents');
        const arrow = faqContents.querySelector('.arrow-icon');

        faqContents.addEventListener('click', () => {
            mainFaqItems.forEach(clickedItem => {
                if (clickedItem !== item) {
                    clickedItem.classList.remove('active');
                    const otherArrow = clickedItem.querySelector('.arrow-icon');
                    if (otherArrow) {
                        otherArrow.classList.remove('rotate');
                    }
                }
            });
            item.classList.toggle('active');
            if (arrow) {
                arrow.classList.toggle('rotate');
            }
        });
    });
});




// Scroll to Top when Up Arrow Clicked in Footer
document.addEventListener('DOMContentLoaded', function () {
    const upArrow = document.querySelector('.footer_lower .up_arrow');
    if (upArrow) {
        upArrow.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});


