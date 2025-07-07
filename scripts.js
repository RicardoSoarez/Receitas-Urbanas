

function openTab(evt, tabName) {

    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }


    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

const contatoForm = document.getElementById('contatoForm');
// Verifica se o formulário de contato realmente existe nesta página
if (contatoForm) {
    contatoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
}
