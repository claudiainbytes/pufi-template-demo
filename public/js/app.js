var checkTheme = function() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
  
// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';
checkTheme();

var btnToggleTheme = document.querySelector(".btn-theme-toggle");
var fxToggleTheme = function() {
    let valTheme = localStorage.getItem('theme');
    if(valTheme === 'dark') {
        btnToggleTheme.querySelector("i").classList.remove("fa-moon");
        btnToggleTheme.querySelector("i").classList.add("fa-sun");
        localStorage.theme = 'light';
        checkTheme();
    } else if(valTheme === 'light') {
        btnToggleTheme.querySelector("i").classList.remove("fa-sun");
        btnToggleTheme.querySelector("i").classList.add("fa-moon");
        localStorage.theme = 'dark';
        checkTheme();
    }
}

btnToggleTheme.addEventListener('click', fxToggleTheme);


  
