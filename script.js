<script>
const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});


const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        if (firstName.value.trim() === "" ||
            phone.value.trim() === "" ||
            message.value.trim() === "") {
            alert("Please fill all required fields.");
            return;
        }

        if (phone.value.length < 9) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("✅ Order submitted successfully! We will contact you soon.");
        form.reset();
    });
}

const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.border = "2px solid #d4a574";
    });

    card.addEventListener("mouseleave", () => {
        card.style.border = "none";
    });
});

const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#d4a574";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const footer = document.querySelector(".footer-bottom");

if (footer) {
    const hour = new Date().getHours();
    let status = "🟢 Open Now";

    if (hour < 7 || hour > 19) {
        status = "🔴 Closed Now";
    }

    const statusText = document.createElement("p");
    statusText.textContent = status;
    statusText.style.marginTop = "10px";
    statusText.style.color = "#d4a574";

    footer.appendChild(statusText);
}
</script>
