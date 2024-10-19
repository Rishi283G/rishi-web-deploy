// Add any future interactive features here
console.log("Roadmap Loaded!");

// Optional: Animate the roadmap sections on load
const months = document.querySelectorAll('.month');

months.forEach((month, index) => {
    setTimeout(() => {
        month.style.opacity = 1;
        month.style.transform = 'translateY(0)';
    }, index * 300);
});