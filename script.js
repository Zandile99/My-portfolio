/* =================================
   DARK MODE WITH SAVED PREFERENCE
   ================================= */

const darkModeBtn = document.getElementById("darkModeBtn");

// Load saved mode when page opens
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    if (darkModeBtn) {
        darkModeBtn.textContent = "☀️ Light Mode";
    }
}

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkModeBtn.textContent = "☀️ Light Mode";

            // Save preference
            localStorage.setItem("theme", "dark");

        } else {
            darkModeBtn.textContent = "🌙 Dark Mode";

            // Save preference
            localStorage.setItem("theme", "light");
        }
    });
}
/* =================================
   CONTACT FORM VALIDATION
   ================================= */
const contactForm =
    document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener(
        "submit",
        function (event) {
            event.preventDefault();
            const name =
                document.getElementById("name").value.trim();
            const email =
                document.getElementById("email").value.trim();
            const message =
                document.getElementById("message").value.trim();
            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {
                alert(
                    "Please complete all fields."
                );
                return;
            }
            alert(
                "Thank you, " +
                name +
                "! Your message has been submitted."
            );
            contactForm.reset();
        }
    );
}
