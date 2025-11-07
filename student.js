document.getElementById('visitorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const visitorName = document.getElementById('visitorName').value.trim();
    const visitorID = document.getElementById('visitorID').value.trim();
    const visitDate = document.getElementById('visitDate').value;
    const formMessage = document.getElementById('formMessage');

    if (!visitorName || !visitorID || !visitDate) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate submission
    formMessage.style.color = 'green';
    formMessage.textContent = 'Visitor registration request submitted successfully!';
    document.getElementById('visitorForm').reset();
});
