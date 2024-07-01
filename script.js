document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    if (!day || !month || !year) {
        alert('Please fill in all fields');
        return;
    }
    // Create date and check validity
    let birthDate = new Date(year, month - 1, day);
    if (birthDate.getFullYear() != year || birthDate.getMonth() != (month - 1) || birthDate.getDate() != day) {
        alert('Invalid date. Please enter a valid date.');
        return;
    }

    let age = calculateAge(birthDate);
    document.getElementById('result').textContent = 'You are ' + age + ' years old.';
});

function calculateAge(birthDate) {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
