const navbarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelector(".nav-links");

navbarToggler.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



function downloadCV() {

    /*
     * غير اسم الملف هنا لاسم الـ CV الحقيقي بتاعك
     *
     * مثال:
     * files/Ahmed-Waleed-AI-Engineer-CV.pdf
     */

    const cvPath =
        "Simple Professional CV Resume (2).pdf";


    const link =
        document.createElement("a");


    link.href = cvPath;

    link.download =
        "Simple Professional CV Resume (2).pdf";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}



/* =================================================
   CV VERSION SELECTOR
================================================== */

const versions =
    document.querySelectorAll(".version-item");


versions.forEach(version => {

    version.addEventListener("click", function () {

        versions.forEach(item => {

            item.classList.remove("active");

            const status =
                item.querySelector(".version-status");

            if (status) {
                status.remove();
            }

        });


        this.classList.add("active");


        const header =
            this.querySelector(".version-header");


        const selected =
            document.createElement("span");


        selected.className =
            "version-status";

        selected.textContent =
            "SELECTED";


        header.appendChild(selected);

    });

});
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
        `mailto:hello@ahmedwaleed.dev?subject=${subject}&body=${body}`;

    status.textContent = "Opening your email client…";
});