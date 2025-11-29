
function sendMail() {
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        PhoneNum: document.getElementById('PhoneNum').value,
        FlowerCount: document.getElementById('FlowerCount').value,
        FlowerColor: document.getElementById('FlowerColor').value,
        message: document.getElementById('message').value,
        image_base64: document.getElementById('preview').src || ""
      };

    emailjs.send("service_irv34dn", "template_8qz76u6", params)
    .then(() => {
        console.log("SUCCESS", response);
        alert("Email has been Sent!");
    })
    .catch((error) => {
        console.error("FAILED", error)
        alert("Something went wrong when sending your message.");
    });
}