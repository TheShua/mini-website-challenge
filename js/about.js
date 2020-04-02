let rate = document.getElementById("rate");
let showRate = document.querySelector("#rate + strong");
let progressBar = document.querySelector(".progressBar");

rate.addEventListener("input", function (e) {
    if (rate.value > 10)
        rate.value = 10;
    else if (rate.value < 0)
        ratevalue = 0;

    showRate.textContent = rate.value;
    let color = "";
    if (rate.value < 5) {
        color = "red";
    } else if (rate.value < 8) {
        color = "orange";
    } else {
        color = "green";
    }
    showRate.style.color = color;
    width = rate.value * 10;
    progressBar.style.width = `${width}px`;
    progressBar.style.backgroundColor = color;
});

let users = [{
    name: "foo",
    age: 23,
    email: "foo@foo.foo",
    avatar: "foo.jpg"
}, {
    name: "bar",
    age: 55,
    email: "bar@bar.bar",
    avatar: "bar.jpg"
}, {
    name: "baz",
    age: 73,
    email: "baz@baz.baz",
    avatar: "baz.jpg"
}];

let underTitle = document.querySelector("#users + div");
let user = "";
users.forEach(function (u) {
    user += "<article class=\"user\">";
    user += `<h2>${u.name}</h2>`;
    user += `<span>${u.age} years old</span>`;
    user += `<p>${u.email}</p>`;
    user += `<img src="img/${u.avatar}" alt="Avatar of ${u.name}">`;
    user += "</article>";
});
underTitle.innerHTML = user;