function login() {
    let login = prompt("login");
    let password = prompt("parolingiz");
    let user = document.querySelector("#user");
    let forAdmin = document.querySelector(".forAdmin");
    let forUser = document.querySelector(".forUser");
    if (login == "nevro2024" && password == "patolog2024") {
        forUser.style.display = "none";
        forAdmin.style.display = "flex";
        user.innerHTML = "Xonzoda";
        let fish = "Karimova Halima Ibragimovna";
        let doc = "Nevropatolog";
        let docinfo = {
            fish: fish,
            dok: doc
        }
        let dokinfos = JSON.parse(localStorage.getItem('doktor')) || []; // Agar malumotlar bo'lmasa, bo'sh massiv yaratadi
            dokinfos.push(docinfo);
            localStorage.setItem('doktor', JSON.stringify(dokinfos));
            // localStorage.getItem('doktor', JSON.stringify(docinfo));
        } else {
            forUser.style.display = "flex";
        forAdmin.style.display = "none";
        user.innerHTML = "Bemor";        
    }
}
login()
// localStorage.clear()