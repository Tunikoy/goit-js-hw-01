function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; // Падінг застосовується зліва і справа
    const borderWidth = parseFloat(border) * 2;   // Бордер застосовується зліва і справа
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    return totalWidth;
}

// Перевірка роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
