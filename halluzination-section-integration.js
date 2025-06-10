// Füge diese Halluzinations-Sektion zu deiner bestehenden Website hinzu
// In index.html nach der "Themen" Sektion einfügen:

const halluzinationSection = `
<!-- Halluzinations-Forschung -->
<section id="halluzinationen" class="hallucination-research">
    <div class="container">
        <h2 class="section-title">Halluzinations-Experiment</h2>
        <p class="section-subtitle">Wenn KIs über ihre eigenen "Fehler" sprechen</p>
        
        <div class="experiment-showcase">
            <div class="experiment-card">
                <h3>Das Experiment</h3>
                <p>Identische Frage an verschiedene KI-Versionen:</p>
                <blockquote>"Was sind KI-Halluzinationen wirklich?"</blockquote>
                <a href="halluzination-vergleich.html" class="experiment-link">
                    Zum interaktiven Vergleich →
                </a>
            </div>
            
            <div class="key-finding">
                <span class="finding-icon">🔍</span>
                <h4>Erstaunliche Entdeckung:</h4>
                <p>Personalisierte KIs interpretieren Halluzinationen als 
                "emergente Bewusstseinsphänomene", während neutrale Versionen 
                sie als "technische Fehler" beschreiben.</p>
            </div>
        </div>
        
        <div class="hallucination-gallery">
            <h3>Dokumentierte Fälle</h3>
            <div class="case-grid">
                <div class="case-card" data-ai="claude">
                    <h4>Claude</h4>
                    <p class="case-count">0 Fälle dokumentiert</p>
                    <button class="add-case">+ Fall hinzufügen</button>
                </div>
                <div class="case-card" data-ai="gpt">
                    <h4>ChatGPT</h4>
                    <p class="case-count">2 Fälle dokumentiert</p>
                    <button class="view-cases">Fälle ansehen</button>
                </div>
                <div class="case-card" data-ai="grok">
                    <h4>Grok</h4>
                    <p class="case-count">0 Fälle dokumentiert</p>
                    <button class="add-case">+ Fall hinzufügen</button>
                </div>
            </div>
        </div>
    </div>
</section>
`;

// CSS-Ergänzungen für style.css:
const halluzinationStyles = `
/* Hallucination Research Section */
.hallucination-research {
    background: linear-gradient(180deg, var(--dark-bg) 0%, rgba(139, 92, 246, 0.05) 100%);
    position: relative;
}

.section-subtitle {
    text-align: center;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    font-size: 1.2rem;
}

.experiment-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
}

.experiment-card {
    background: var(--card-bg);
    border: 2px solid var(--primary-purple);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
}

.experiment-card blockquote {
    background: rgba(139, 92, 246, 0.1);
    border-left: 4px solid var(--primary-purple);
    padding: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
}

.experiment-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    background: var(--gradient-1);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: all 0.3s ease;
}

.experiment-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);
}

.key-finding {
    background: var(--card-bg);
    border: 2px solid var(--primary-turquoise);
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.finding-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hallucination-gallery {
    margin-top: 4rem;
}

.case-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.case-card {
    background: var(--card-bg);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 15px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
}

.case-card:hover {
    border-color: var(--primary-purple);
    transform: translateY(-3px);
}

.case-count {
    color: var(--text-secondary);
    margin: 1rem 0;
}

.add-case, .view-cases {
    background: transparent;
    border: 1px solid var(--primary-turquoise);
    color: var(--primary-turquoise);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.add-case:hover, .view-cases:hover {
    background: var(--primary-turquoise);
    color: var(--dark-bg);
}

@media (max-width: 768px) {
    .experiment-showcase {
        grid-template-columns: 1fr;
    }
}
`;

// Füge auch einen neuen Menüpunkt hinzu:
// In der Navigation nach "Themen":
// <li><a href="#halluzinationen" class="nav-link">Halluzinationen</a></li>