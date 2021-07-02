let form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    e.preventDefault();


    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    
    let my_text = `Result is:%0A - Name: ${name} %0A - Phone: ${phone} `
    let token = "1895639953:AAGRhUS23ZUfkvi0XrSIfiEbIP4pR10qk4Y"

    let chat_id = -518098955;

    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    console.log("Message succesfully sended!")
})