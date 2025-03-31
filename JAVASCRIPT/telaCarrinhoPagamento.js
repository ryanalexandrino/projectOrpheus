document.addEventListener('DOMContentLoaded', function() {
    // Get the confirm button
    const confirmButton = document.getElementById('btConfirmar');
    
    // Add click event listener
    confirmButton.addEventListener('click', function() {
        // Get the selected payment method
        const selectedPayment = document.querySelector('input[name="pagamento"]:checked');
        
        if (!selectedPayment) {
            alert('Por favor, selecione uma forma de pagamento!');
            return;
        }
        
        // Redirect based on selected payment
        switch(selectedPayment.id) {
            case 'PIX':
                window.location.href = '/HTML/telaPagamentoPIX.html';
                break;
            case 'debito':
                window.location.href = '/HTML/telaPagamentoCard.html';
                break;
            case 'boleto':
                window.location.href = '/HTML/telaPagamentoBoleto.html';
                break;
            default:
                alert('Opção de pagamento inválida!');
        }
    });
});