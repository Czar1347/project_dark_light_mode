const changeThemeBtn = document.querySelector("#change-theme"); //Aqui o seletor querySelector procura no HTML o primeiro elemento com id=change-theme("#change-theme") e armazena o que achou na const changeThemeBtn

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  console.log(darkMode);

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme()

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
}); // Aqui nos pegamos o que a const returnou e monitoramos se houver alguma modificação(no caso a const retorna um checkbox que fica ativo ou desativo, sempre muda quando clicado, por isso esse evento poderia ser um click), caso tenha modificado adicionamos uma class pre-definida no body chamada dark que muda o background, caso já tenha essa class lá nos tiramos ela, alternando novamente o background
