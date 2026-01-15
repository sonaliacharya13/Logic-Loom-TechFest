function toggleDetails(id) {
    const details = document.getElementById(id);

    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}
function validateForm() {
    const checkedEvents = document.querySelectorAll(
        '.event-options input:checked'
    );

    if (checkedEvents.length === 0) {
        alert("Please select at least one event");
        return false;
    }

    return true; // Redirect happens here
}