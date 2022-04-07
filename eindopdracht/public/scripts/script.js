const form = document.querySelector('form')
const naam = document.querySelector("form input[type='text']")
const nummer = document.querySelector("form input[type='number']")

form.addEventListener('submit', function(e) {
    if (!window.confirm("Weet je zeker dat je deze antwoorden wilt versturen?")) {
      e.preventDefault()
    }
})


if (sessionStorage.getItem("autosave")) {
    // Restore a content of the input
    naam.value = sessionStorage.getItem("autosave");
}
naam.addEventListener("change", function () {
    // save value into sessionStorage object 
    sessionStorage.setItem("autosave", naam.value);
});


if (sessionStorage.getItem("autosave2")) {
    // Restore a content of the input
    nummer.value = sessionStorage.getItem("autosave2");
}
nummer.addEventListener("change", function () {
    // save value into sessionStorage object 
    sessionStorage.setItem("autosave2", nummer.value);
});
