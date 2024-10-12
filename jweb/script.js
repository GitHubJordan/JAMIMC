document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Converter para metros

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = (weight / (height * height)).toFixed(2);

    let message = `Seu IMC é ${imc}. `;
    
    if (imc < 18.5) {
        message += 'Você está abaixo do peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        message += 'Você está com peso normal.';
    } else if (imc >= 25 && imc < 29.9) {
        message += 'Você está com sobrepeso.';
    } else {
        message += 'Você está com obesidade.';
    }

    document.getElementById('result').textContent = message;
});
