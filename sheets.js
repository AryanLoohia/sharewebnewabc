let form = document.querySelector("form");
// console.log("unreuv")
// The document.querySelector() method returns the first element that matches a specified CSS selector.
form.addEventListener('submit', (e) => {
    console.log("unreuv")
    e.preventDefault();
    // The preventDefault() method stops the form from submitting and prevents the page from refreshing.
    document.querySelector(".button-5").value = "Submitted";
    // Change the value of the submit button to "Submitting..." while the form is being submitted.
    let data = new FormData(form);
    // The FormData() method creates a new FormData object that contains the values of all the form fields.
    fetch('https://script.google.com/macros/s/AKfycbwv9FVzwb_AyRmEcQ6a1hUJex_FbZ_H1yR-cyopI1dXBk_a-EYPlHX1WOLJ0WoMIUn6Xg/exec', {
            method: "POST",
            body: data
        })
        // The fetch() method is used to make a request to the server and retrieve data.
        // This is an example API endpoint. Replace it with the actual URL for the API endpoint you want to use.
        .then(res => res.text())
        .then(alert("Response recorded successfully"))
        .then(console.log(data))
        // The .then() method is used to handle the response from the server.
        // The response is converted to text using the res.text() method.
        .then(data => {
            document.querySelector(".button-5").value = "Submit"
            // document.querySelector("#msg").innerHTML = data;
            // The innerHTML property sets or returns the HTML content of an element.
            // Here, we are setting the content of the <h1> element to the response from the server.
            // Change the value of the submit button back to "Submit" after the form has been submitted.
        });
})


// const faqs = document.querySelectorAll(".FAQItem");
// console.log(faqs)

// const openFAQ = (i) => {
//     faqs.forEach((a, j) => {
//         if (i == j) {
//             a.classList.toggle("active")
//         }
//         else {
//             a.classList.remove('active');
//         }
//     })
// }

// faqs.forEach((a, i) => {
//     a.addEventListener("click", () => { openFAQ(i) })
// })

// document.getElementById('hamburger-menu').addEventListener('click', function () {
//     var navLinks = document.getElementById('navLinks');
//     navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
// });

// // const scriptURL="https://script.google.com/macros/s/AKfycbykNRe6ob9mm2i9sDlvSDI8wtD3M5AEtVYSa5dz6npXRYCVjJBdN6aYPItvWaRuI2Bu8Q/exec"
// // const scriptURL="https://script.google.com/macros/s/AKfycbwoVBp6eBs98Lj7CRPOkCh3zT5j3J2lGYsfByA2wzoE6p2Hy0cSl4HXjSbc9JDPQ2ji1w/exec"

// // const form=document.forms['contact-form']

// // form.addEventListener("Submit",e=>{
// //     e.preventDefault()
// //     fetch(scriptURL,{method:'POST',body:new FormData(form)})
// //     .then(response=>alert("Thank you for visiting !"))
// //     .then(()=>{window.location.reload();})
// //     .catch(error=>console.error("Error!",error.message))
    
// // })

// // function submitForm(event) {
//     // event.preventDefault(); // Prevent the default form submission
//     // const scriptURL="https://script.google.com/macros/s/AKfycbwoVBp6eBs98Lj7CRPOkCh3zT5j3J2lGYsfByA2wzoE6p2Hy0cSl4HXjSbc9JDPQ2ji1w/exec"

// // const form=document.forms['contact-form']
//     // Here you can add your logic to send data to Google Sheets
//     // For simplicity, let's just show an alert for now
//     // alert("Form submitted successfully!");
    
//     // You can add the code to send data to Google Sheets here

//     // If you want to redirect after showing the alert, you can use:
//     // window.location.href = "https://your-redirect-url.com";
// // }

// const form = document.forms['contact-form'];

// function submitForm(event) {
//     // event.preventDefault(); // Prevent the default form submission

//     // Get form data
//     var formData = new FormData(form);

//     // Send data to Google Sheets
//     fetch('https://script.google.com/macros/s/AKfycbz2KyduFU1jnUIXaEk90q30sBV9zX2QUJQMImK-3ZnCoS66oD4-2bmiYVxJEZiyaEfahw/exec', { // Replace 'YOUR_DEPLOYED_SCRIPT_URL' with the URL of your deployed Google Apps Script
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             // Show success message
//             alert("Form submitted successfully!");
//             // You can add additional actions here if needed
//         } else {
//             // Show error message
//             alert("Error submitting the form. Please try again.");
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert("Error submitting the form. Please try again.");
//     });
// }

// // Attach submitForm function to the form's submit event
// form.addEventListener("submit", submitForm);



// // function submitForm(event) {
// //     event.preventDefault(); // Prevent the default form submission

//     // Get form data
//     // var formData = new FormData(document.getElementById('myForm'));
//     // var jsonData = {};
//     // formData.forEach(function(value, key){
//     //     jsonData[key] = value;
//     // });

//     // // Send data to Google Sheets
//     // fetch('https://script.google.com/macros/s/AKfycbz5tfnUj1zNLZ1B1MsX6IogmDy0E3UwWHLfnSxV2Cvm7dYwPS6XjExfDiDrqJgAMVqWVw/exec', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify(jsonData)
//     // })
//     // .then(response => response.text())
//     // .then(data => {
//     //     alert("Form submitted successfully!");
//     //     // You can add additional actions here if needed
//     // })
//     // .catch(error => {
//     //     console.error('Error:', error);
//     //     alert("Error submitting the form. Please try again.");
//     // });

//  ubyihibo
// const faqs = document.querySelectorAll(".FAQItem");
// console.log(faqs)

// const openFAQ = (i) => {
//     faqs.forEach((a, j) => {
//         if (i == j) {
//             a.classList.toggle("active")
//         }
//         else {
//             a.classList.remove('active');
//         }
//     })
// }

// faqs.forEach((a, i) => {
//     a.addEventListener("click", () => { openFAQ(i) })
// })

// document.getElementById('hamburger-menu').addEventListener('click', function () {
//     var navLinks = document.getElementById('navLinks');
//     navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
// });

 


// document.getElementById('sub').addEventListener('click', () => {
//         hello=documnet.createElement("div")
//         hello.innerHTML="hello"
//         body.append(hello)
//         console.log('iwnrvud ')
//           // document.querySelector("#sub").value = "Submitting..";

//         // let formData = new FormData(document.getElementById('myForm'));

//         // fetch('https://script.google.com/macros/s/AKfycbwlYJzQoYJ4m9h2fp86sj2JKIlyTliK_RDGb1cy6fLuGTyFmiILEmcf-iNOs79E41sqNg/exec', {
//         //     method: "POST",
//         //     body: formData
//         // })
//         // .then(response => response.text())
//         // .then(data => {
//         //     document.querySelector("#sub").value = "Submit";
//         // })
//         // .catch(error => console.error('Error:', error));
//     });





// document.getElementById('sub').addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector(".button-5").value = "Submitting...";

//     let formData = new FormData(document.getElementById('myForm'));

//     fetch('https://script.google.com/macros/s/AKfycbwv9FVzwb_AyRmEcQ6a1hUJex_FbZ_H1yR-cyopI1dXBk_a-EYPlHX1WOLJ0WoMIUn6Xg/exec', {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//         document.querySelector("#sub").value = "Submit";
//         document.querySelector("#msg").innerHTML = "Form submitted successfully!";
//         console.log(data); // Log the response for debugging purposes
//     })
//     .catch(error => {
//         document.querySelector("#sub").value = "Submit";
//         console.error('Error:', error);
//     });
// });