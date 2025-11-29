function sendMail(){
    let parms = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        PhoneNum: document.getElementById('PhoneNum').value,
        FlowerCount: document.getElementById('FlowerCount').value,
        FlowerColor: document.getElementById('FlowerColor').value,
        message: document.getElementById('message').value,
        image_base64: document.getElementId('preview').src || ""
      }

emailjs.send("service_irv34dn", "template_8qz76u6", parms).then(alert("Email has been Sent!"))
}