// your JS code here
document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault(); 

    let fname = document.getElementById("First Name").value.trim();
    let lname = document.getElementById("Last Name").value.trim();
    let pnumber = document.getElementById("Phone Number").value.trim();
    let email = document.getElementById("Email ID").value.trim();

    alert(
        "First Name: " + fname + "\n" +
        "Last Name: " + lname + "\n" +
        "Phone Number: " + pnumber + "\n" +
        "Email ID: " + email
    );
});
