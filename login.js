document.getElementById("form-login").addEventListener("submit", function(event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    const usuarioCorreto = "admin";
    const senhaCorreta = "12345";  // ⚠️ Troque por uma senha segura!

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        localStorage.setItem("adminLogado", "true");
        window.location.href = "admin.html";
    } else {
        document.getElementById("mensagem-erro").textContent = "Usuário ou senha incorretos!";
    }
});