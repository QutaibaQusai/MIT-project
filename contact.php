<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contactNo = $_POST["contactNo"];
    $message = $_POST["message"];

    // Validate and sanitize data (you should improve this based on your requirements)

    // Compose email message
    $to = "qutaiba.makahleh@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $emailMessage = "Name: $name\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Contact No: $contactNo\n";
    $emailMessage .= "Message:\n$message";

    // Send email
    mail($to, $subject, $emailMessage, $headers);
    
    // You can add a success message or redirect the user to a thank-you page
    echo "Form submitted successfully!";
} else {
    // Handle non-POST requests (optional)
    echo "Invalid request method";
}
?>
