// Constants
const button = document.querySelector('.share-button');
const icon = document.querySelector('.share-icon');
const profile = document.querySelector('.profile');
const sharePopover = document.querySelector('.share-popover');
const cardFooter = document.querySelector('.card-footer');

button.addEventListener('click', () => {
    // Toggle button color
    button.classList.toggle('share-button-active'); // Toggle button background color
    icon.classList.toggle('share-icon-active'); // Toggle button icon color

    // Toggle between profile and share panel
    profile.classList.toggle('hidden');
    sharePopover.classList.toggle('hidden');
    cardFooter.classList.toggle('share-active'); // Toggle between footer background color
});