document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownText = document.getElementById('dropdownText');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdownText.addEventListener('mouseenter', () => {
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
        dropdownMenu.style.opacity = '1';
    });

    dropdownText.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!dropdownMenu.matches(':hover')) {
                dropdownMenu.style.maxHeight = '0';
                dropdownMenu.style.opacity = '0';
            }
        }, 200); // Adjust delay to suit your needs
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.style.maxHeight = '0';
        dropdownMenu.style.opacity = '0';
    });

    dropdownMenu.addEventListener('mouseenter', () => {
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
        dropdownMenu.style.opacity = '1';
    });
});
