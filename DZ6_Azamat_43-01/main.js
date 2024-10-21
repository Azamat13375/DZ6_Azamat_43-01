document.getElementById('reverseButton').onclick = function() {
    let inputField = document.getElementById('inputText');
    let outputDiv = document.getElementById('output');

    // Получаем значение из инпута и разбиваем его на массив строк
    let originalText = inputField.value.split(',').map(item => item.trim());

    // Изменяем и выводим массив в строку
    outputDiv.innerHTML = ''; // Очищаем предыдущий вывод
    originalText.forEach(function(item) {
        let reversedText = item.split('').reverse().join('');
        outputDiv.innerHTML += reversedText
    });
};
