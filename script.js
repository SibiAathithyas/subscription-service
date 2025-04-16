document.addEventListener('DOMContentLoaded', () => {
    const planButtons = document.querySelectorAll('.select-plan-btn');
    const signupSection = document.getElementById('signup');
    const studentFields = document.querySelectorAll('.student-only');

    planButtons.forEach(button => {
        button.addEventListener('click', function () {
            const planType = this.textContent.toLowerCase();
            signupSection.scrollIntoView({ behavior: 'smooth' });

            if (planType.includes('student')) {
                studentFields.forEach(field => field.style.display = 'block');
            } else {
                studentFields.forEach(field => field.style.display = 'none');
            }
        });
    });
});
