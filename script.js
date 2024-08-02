document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttonsContainer = document.getElementById('buttons');

    // Create calculator buttons
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'C', '0', '=', '+'
    ];

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn;
        button.className = 'calculator-button';
        if (btn === 'C') button.classList.add('operator');
        if (btn === '=') button.classList.add('equal');
        if (['+', '-', '*', '/'].includes(btn)) button.classList.add('operator');
        buttonsContainer.appendChild(button);
    });

    // Handle button clicks
    buttonsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            handleButtonClick(e.target.textContent);
        }
    });

    // Handle keyboard input
    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            handleButtonClick(e.key);
        } else if (['+', '-', '*', '/'].includes(e.key)) {
            handleButtonClick(e.key);
        } else if (e.key === 'Enter') {
            handleButtonClick('=');
        } else if (e.key === 'Backspace') {
            handleButtonClick('C');
        } else {
            alert('Only numbers and operators are allowed');
        }
    });

    function handleButtonClick(value) {
        let currentText = display.textContent;
        if (value === 'C') {
            display.textContent = '';
        } else if (value === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                alert('Invalid expression');
                display.textContent = '';
            }
        } else {
            display.textContent += value;
        }
    }
});
