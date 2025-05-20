// Constants
const button = document.querySelector('.share-button');
const icon = document.querySelector('.share-icon');
const profile = document.querySelector('.profile');
const sharePanel = document.querySelector('.share-panel');
const footerContent = document.querySelector('.footer-content');


// Toggle states
button.addEventListener('click', () => {
    // Toggle button color
    button.classList.toggle('share-button-active'); // Toggle button background color
    icon.classList.toggle('share-icon-active'); // Toggle button icon color

    // Toggle between profile and share panel
    profile.classList.toggle('hidden');
    sharePanel.classList.toggle('hidden');
    footerContent.classList.toggle('share-active'); // Toggle between footer background color
});