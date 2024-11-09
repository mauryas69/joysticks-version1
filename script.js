// script.js

function initJoystick(joystick, container) {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    const maxDistance = centerX - joystick.offsetWidth / 2;

    joystick.style.left = `${centerX}px`;
    joystick.style.top = `${centerY}px`;

    let isDragging = false;

    joystick.addEventListener('mousedown', () => {
        isDragging = true;
        joystick.style.transition = '';  // Disable transition during drag
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left - centerX;
            const y = event.clientY - rect.top - centerY;

            // Calculate the distance and angle for joystick movement
            const distance = Math.min(Math.sqrt(x * x + y * y), maxDistance);
            const angle = Math.atan2(y, x);

            // Calculate new positions within the allowed range
            const offsetX = Math.cos(angle) * distance;
            const offsetY = Math.sin(angle) * distance;

            joystick.style.left = `${centerX + offsetX}px`;
            joystick.style.top = `${centerY + offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            // Smoothly reset joystick position to center
            joystick.style.transition = 'left 0.3s ease, top 0.3s ease';
            joystick.style.left = `${centerX}px`;
            joystick.style.top = `${centerY}px`;
        }
    });
}

// Initialize both joysticks on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const joystick1 = document.getElementById('stick1');
    const joystick2 = document.getElementById('stick2');
    const container1 = document.getElementById('joystick1');
    const container2 = document.getElementById('joystick2');

    initJoystick(joystick1, container1);
    initJoystick(joystick2, container2);
});
