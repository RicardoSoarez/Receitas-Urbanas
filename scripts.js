

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


document.getElementById('contatoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});
