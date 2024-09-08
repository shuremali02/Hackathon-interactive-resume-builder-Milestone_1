
// Toggle functionality for Skills and Certifications sections
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;

const toggleCertificationsButton = document.getElementById('toggle-certifications') as HTMLButtonElement;
const certificationsList = document.getElementById('certifications-list') as HTMLUListElement;

// Initially hide the skills and certifications list
skillsList.style.display = 'none';
certificationsList.style.display = 'none';

// Toggle Skills list visibility
toggleSkillsButton.addEventListener('click', () => {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    } else {
        skillsList.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});

// Toggle Certifications list visibility
toggleCertificationsButton.addEventListener('click', () => {
    if (certificationsList.style.display === 'none') {
        certificationsList.style.display = 'block';
        toggleCertificationsButton.textContent = 'Hide Certifications';
    } else {
        certificationsList.style.display = 'none';
        toggleCertificationsButton.textContent = 'Show Certifications';
    }
});
