document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('categoryList');
    const commandGrid = document.getElementById('commandGrid');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    let currentCategory = 'All';
    let searchQuery = '';

    // Initialize
    // Initialize
    init();

    function init() {
        // Load saved theme
        const savedTheme = localStorage.getItem('blenderTheme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        document.getElementById('themeSelect').value = savedTheme;

        // Set random motivation
        setRandomMotivation();

        renderCategories();
        renderCards();
        
        // Event Listeners
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderCards();
        });

        document.getElementById('themeSelect').addEventListener('change', (e) => {
            const theme = e.target.value;
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('blenderTheme', theme);
        });
    }

    function setRandomMotivation() {
        const quotes = [
            "La práctica hace al maestro. ¡Sigue así!",
            "Un vértice a la vez.",
            "Blender es difícil, pero tú eres más.",
            "No es un bug, es una feature inesperada.",
            "Recuerda guardar tu progreso (Ctrl + S).",
            "El donut es solo el comienzo.",
            "Cada error es una lección de topología.",
            "Renderizando tus sueños...",
            "La creatividad es la inteligencia divirtiéndose.",
            "¡Tú puedes modelar lo que sea!",
            "Cuidado con los N-Gons.",
            "Borrar el cubo por defecto da suerte."
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('motivationText').textContent = randomQuote;
    }

    function renderCategories() {
        const categories = ['All', ...new Set(blenderCommands.map(cmd => cmd.category))];
        
        // Clear existing (except "All" which is hardcoded in HTML, but let's clear all to be safe)
        categoryList.innerHTML = '';

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `category-btn ${cat === 'All' ? 'active' : ''}`;
            btn.textContent = cat === 'All' ? 'Todos' : cat;
            btn.onclick = () => {
                // Update active state
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                currentCategory = cat;
                renderCards();
            };
            categoryList.appendChild(btn);
        });
    }

    function renderCards() {
        commandGrid.innerHTML = '';
        
        const filtered = blenderCommands.filter(cmd => {
            const matchesCategory = currentCategory === 'All' || cmd.category === currentCategory;
            const matchesSearch = cmd.name.toLowerCase().includes(searchQuery) || 
                                  cmd.description.toLowerCase().includes(searchQuery) ||
                                  cmd.keys.join(' ').toLowerCase().includes(searchQuery) ||
                                  (cmd.example && cmd.example.toLowerCase().includes(searchQuery));
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
            filtered.forEach(createCard);
        }
    }

    function createCard(cmd) {
        const card = document.createElement('div');
        card.className = 'command-card';

        // Keys HTML
        const keysHtml = cmd.keys.map((key, index) => {
            // Add + separator if not the last key
            const separator = index < cmd.keys.length - 1 ? '<span class="plus">+</span>' : '';
            return `<div class="key">${key}</div>${separator}`;
        }).join('');

        // Example HTML (only if example exists)
        const exampleHtml = cmd.example ? `<div class="command-example">💡 ${cmd.example}</div>` : '';

        card.innerHTML = `
            <div class="card-header">
                <span class="command-name">${cmd.name}</span>
                <span class="command-category">${cmd.category}</span>
            </div>
            <p class="command-description">${cmd.description}</p>
            ${exampleHtml}
            <div class="keys-container">
                ${keysHtml}
            </div>
            <img src="fox.png" class="fox-decoration" alt="Fox">
        `;

        commandGrid.appendChild(card);
    }
});
