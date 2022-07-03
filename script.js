const changeThemeBtn = document.querySelector("#change-theme")

// Toogle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark")
}

// Load ligth or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark")
    if(darkMode){
        toggleDarkMode()
    }
}
loadTheme()

changeThemeBtn.addEventListener("change", () => {
    toggleDarkMode()
    // Save or remore dark mode
    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }
})