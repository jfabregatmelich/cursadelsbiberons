// Funció per crear el navbar
function crearNavbar() {
    return `
        <nav class="navbar">
            <div class="container nav-inner">
                <a href="index.html" class="logo">
                    <img src="images/logo.png" alt="logo">
                    <div class="logo-text">
                        <h1>Cursa dels Biberons</h1>
                        <span>El Pinell de Brai · 2026</span>
                    </div>
                </a>

                <ul class="nav-links">
                    <li><a href="index.html">Inici</a></li>
                    <li><a href="reglament.html">Reglament</a></li>
                    <li><a href="curses.html">Curses</a></li>
                    <li><a href="marxa.html">Marxa</a></li>
                    <li><a href="horaris.html">Horaris</a></li>
                    <li><a href="serveis.html">Serveis</a></li>
                    <li><a href="inscripcions.html" class="nav-cta">Inscripcions</a></li>
                </ul>
            </div>
        </nav>
    `;
}

// Funció per crear el footer
function crearFooter() {
    return `
        <footer>
            <div class="container">
                <div class="footer-grid">
                    <div>
                        <h3>Cursa dels Biberons</h3>
                        <p>Una cursa de muntanya inspirada en les Serres de Cavalls i Pàndols amb un disseny modern i immersiu.</p>
                    </div>

                    <div>
                        <h4>Navegació</h4>
                        <ul>
                            <li><a href="index.html">Inici</a></li>
                            <li><a href="curses.html">Curses</a></li>
                            <li><a href="horaris.html">Horaris</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contacte</h4>
                        <ul>
                            <li>cursadelsbiberons@gmail.com</li>
                            <li>El Pinell de Brai</li>
                            <li>Terra Alta</li>
                        </ul>
                    </div>
                </div>

                <div class="footer-bottom">
                    © 2026 Cursa dels Biberons · Web moderna multi pàgina
                </div>
            </div>
        </footer>
    `;
}

// Funció per inserir navbar i footer al DOM
function inserirComponents() {
    // Inserir navbar al principi del body
    document.body.insertAdjacentHTML('afterbegin', crearNavbar());
    
    // Inserir footer al final del body
    document.body.insertAdjacentHTML('beforeend', crearFooter());
}

// Inicialitzar quan el DOM estigui llest
document.addEventListener('DOMContentLoaded', () => {
    // Inserir navbar i footer
    inserirComponents();
    
    // El teu codi original per als accordions
    const accordions = document.querySelectorAll('.acc-btn');
    
    accordions.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            
            document.querySelectorAll('.acc-item').forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });
});