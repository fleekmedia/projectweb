document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-count');
                        const count = +counter.innerText.slice(0, -1); // Get number without '+'

                        // Calculate increment
                        const increment = target / 200;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment) + "+"; // Add '+' at the end
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target + "+"; // Ensure final value is set with '+'
                        }
                    };
                    updateCount();
                });
                observer.disconnect(); // Stop observing once counted
            }
        });
    });
    observer.observe(document.querySelector('.stats-section'));
});