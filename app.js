let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');


celsius.oninput = () => {
    let output = parseFloat(celsius.value) * 1.8 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2))
};

fahrenheit.oninput = () => {
    let output = (parseFloat(fahrenheit.value) - 32) / 1.8;
    celsius.value = parseFloat(output.toFixed(2))
};