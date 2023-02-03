//Alexandria turned this off to test if this works for the contact section on the homepage - let me know if it goes to something else
// $("#contactForm")
//   .validator()
//   .on("submit", function (event) {
//     if (event.isDefaultPrevented()) {
//       // handle the invalid form...
//       formError();
//       submitMSG(false, "Did you fill in the form properly?");
//     } else {
//       // everything looks good!
//       event.preventDefault();
//       submitForm();
//     }
//   });
// $("#contactForm")
//   .validator()
//   .on("submit", function (event) {
//     if (event.isDefaultPrevented()) {
//       // handle the invalid form...
//       formError();
//       submitMSG(false, "Did you fill in the form properly?");
//     } else {
//       // everything looks good!
//       event.preventDefault();
//       submitForm();
//     }
//   });

// function submitForm() {
//   // Initiate Variables With Form ContentF
//   var name = $("#name").val();
//   var email = $("#email").val();
//   var msg_subject = $("#msg_subject").val();
//   var message = $("#message").val();

//   $.ajax({
//     type: "POST",
//     url: "php/form-process.php",
//     data:
//       "name=" +
//       name +
//       "&email=" +
//       email +
//       "&msg_subject=" +
//       msg_subject +
//       "&message=" +
//       message,
//     success: function (text) {
//       if (text == "success") {
//         formSuccess();
//       } else {
//         formError();
//         submitMSG(false, text);
//       }
//     },
//   });
// }

// function formSuccess() {
//   $("#contactForm")[0].reset();
//   submitMSG(true, "Message Submitted!");
// }

// function formError() {
//   $("#contactForm")
//     .removeClass()
//     .addClass("shake animated")
//     .one(
//       "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
//       function () {
//         $(this).removeClass();
//       }
//     );
// }

// function submitMSG(valid, msg) {
//   if (valid) {
//     var msgClasses = "h3 text-center tada animated text-success";
//   } else {
//     var msgClasses = "h3 text-center text-danger";
//   }
//   $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }

// // using Twilio SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'krnhealthwelness.com', // Change to your recipient
//   from: 'krnhealthwelness.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// $("#contactForm")
//   .validator()
//   .on("submit", function (event) {
//     if (event.isDefaultPrevented()) {
//       // handle the invalid form...
//       formError();
//       submitMSG(false, "Did you fill in the form properly?");
//     } else {
//       // everything looks good!
//       event.preventDefault();
//       submitForm();
//     }
//   });

// function submitForm() {
//   // Initiate Variables With Form ContentF
//   let name = $("#name").val();
//   let email = $("#email").val();
//   let phone = $("#phone").val();
//   let message = $("#message").val();
//   let krnEmail = {
//     to: `krnhealthwellness@gmail.com`,
//     from: `${email}`,
//     subject: 'Admin Account set up',
//     text:
//       `Hi KRN,

// ${message}

// Sincerely,
// ${name}
// ${phone}`
//   }

// }

// function formSuccess() {
//   $("#contactForm")[0].reset();
//   submitMSG(true, "Message Submitted!");
// }

// function formError() {
//   $("#contactForm")
//     .removeClass()
//     .addClass("shake animated")
//     .one(
//       "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
//       function () {
//         $(this).removeClass();
//       }
//     );
// }

