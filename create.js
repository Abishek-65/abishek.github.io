function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

function bookNow(event) {
    event.preventDefault();
    document.getElementById("msg").innerText = "✅ Booking Successful! We will contact you.";
}
