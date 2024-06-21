document.addEventListener('DOMContentLoaded', () => {
    const colorOptions = document.querySelectorAll('.color-option');
    const currentColor = localStorage.getItem('backgroundColor') || '#ffffff';

    
    document.body.style.backgroundColor = currentColor;

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedColor = option.getAttribute('data-color');
            document.body.style.backgroundColor = selectedColor;
            localStorage.setItem('backgroundColor', selectedColor);
        });
    });
});
