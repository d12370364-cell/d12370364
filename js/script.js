window.addEventListener("load", () => {
    const transition = document.getElementById("page-transition");
    transition.classList.add("leave");

    setTimeout(() => {
        transition.classList.remove("active", "leave");
    }, 1200);
});

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 150);
        }
    });
});

fades.forEach(el => observer.observe(el));

fades.forEach(el => observer.observe(el));

const magnets = document.querySelectorAll(".magnetic");

magnets.forEach(el => {
    el.addEventListener("mousemove", e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0,0)";
    });
});
window.addEventListener("scroll", () => {
    document.querySelectorAll(".parallax").forEach(el => {
        const speed = 0.15;
        const offset = window.scrollY * speed;
        el.style.transform = `translateY(${offset}px)`;
    });
});
const transition = document.getElementById("page-transition");
const links = document.querySelectorAll("a");

links.forEach(link => {
    if (link.href.includes(window.location.origin)) {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = link.href;

            transition.classList.add("active");

            setTimeout(() => {
                window.location.href = target;
            }, 700);
        });
    }
});
