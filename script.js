// Constants
const button = document.getElementById('share-button');
const panel = document.getElementById('share-panel');
const profile = document.getElementById('profile');
const svg = document.getElementById('share-icon');
const footer = document.getElementsByTagName('footer')[0];

// Variable
let originalColor = true;

// Prevent <a> tags from toggling entire footer when clicked
document.querySelectorAll('#share-panel a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log('Link clicked without toggling the footer.');
    });
});

// Toggle footer 
button.addEventListener('click', function() {
    const footerColor = getComputedStyle(footer).backgroundColor;

    if (panel.style.display === 'none') {
        panel.style.display = 'flex'; // Show the panel
        profile.style.display = 'none'; // Hide the profile
        button.style.backgroundColor = ' hsl(214, 17%, 51%)'; // Change button background
        svg.setAttribute('fill', 'hsl(0, 0%, 100%)'); // Change SVG icon fill color

    } else {
        panel.style.display = 'none'; // Hide the panel
        profile.style.display = 'flex'; // Show the profile
        button.style.backgroundColor = 'hsl(210, 46%, 95%)'; // Reset button background
        svg.setAttribute('fill', 'hsl(217, 19%, 35%)'); // Reset SVG icon fill color
    }

    if (footerColor === 'rgb(255, 255, 255)') {
        footer.style.backgroundColor = 'hsl(217, 19%, 35%)';
    } else {
        footer.style.backgroundColor = 'hsl(0, 0%, 100%)';
    }
});


