let userInfo;
let user;
let allBookingData = [];
let navBrand = document.querySelector(".navbar-brand");
let logoutBtn = document.querySelector("#logout-btn");
let bookingRegForm = document.querySelector(".reg-form");
let allBookingInputs = bookingRegForm.querySelectorAll("input");
let bookingTextarea = bookingRegForm.querySelector("#reg-textarea");
let modalClose = document.querySelector('.btn-close')

if (sessionStorage.getItem("__au__") == null) {
    window.location = "../index.html"
}

userInfo = JSON.parse(sessionStorage.getItem("__au__"));
navBrand.innerText = userInfo.hotelName;
user = userInfo.email.split("@")[0];

// logout code here
logoutBtn.onclick = () => {
    logoutBtn.innerText = "Wait.."
    setTimeout(() => {
        logoutBtn.innerText = "Logout"
        sessionStorage.removeItem("__au__");
        window.location = "../index.html"
    }, 1500)
}

// Register coder starts here
bookingRegForm.onsubmit = (e) => {
    e.preventDefault();
    let data = { notice: bookingTextarea.value }
    for (let inEl of allBookingInputs) {
        let key = inEl.name;
        let value = inEl.value;
        data[key] = value
    }
    allBookingData.push(data);
    localStorage.setItem(user + "_allBookingData", JSON.stringify(allBookingData));
    bookingRegForm.reset('');
    swal("Good Job !", "Booking Sucess","success");
    modalClose.click()
}