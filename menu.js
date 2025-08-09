document.addEventListener("DOMContentLoaded", function () {
    const menuHTML = `
        <nav>
            <ul>
                <li><a href="cadastro.html">Cadastre-se</a></li>
                <li><a href="suaReceita.html">Envie sua receita</a></li>
                <li><a href="sugestões.html">Sugestões</a></li>
                <li><a href="perfil.html">Perfil</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="ranking.html">Ranking</a></li>
            </ul>
        </nav>
    `;

    const menuContainer = document.getElementById("menu-container");
    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    }
});
