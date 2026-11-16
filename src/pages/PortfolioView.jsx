
import { useState } from "react";
import { Link } from "react-router-dom";

function PortfolioView() {
    const [portfolio] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("portfolio")) || {};
        } catch {
            return {};
        }
    });

    const data = {
        name: "",
        role: "",
        about: "",
        location: "",
        email: "",
        github: "",
        linkedin: "",
        skills: [],
        projects: [],
        experience: [],
        ...portfolio
    };

    async function copyPortfolioLink() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert("Посилання скопійовано!");
        } catch {
            alert("Не вдалося скопіювати посилання.");
        }
    }

    function downloadPDF() {
        window.print();
    }

    return (
        <div className="public-portfolio">

            <header className="public-header">
                <Link to="/" className="logo">
                    Portfolia<span>.</span>
                </Link>

                <div className="public-actions">
                    <button
                        type="button"
                        className="public-action-button"
                        onClick={copyPortfolioLink}
                    >
                        Скопіювати посилання
                    </button>

                    <button
                        type="button"
                        className="public-action-button"
                        onClick={downloadPDF}
                    >
                        Завантажити PDF
                    </button>

                    <Link to="/editor" className="button">
                        Редагувати портфоліо
                    </Link>
                </div>
            </header>

            <main className="public-main">

                <section className="public-hero">
                    <div className="public-avatar">
                        {(data.name || "U").charAt(0).toUpperCase()}
                    </div>

                    <p className="public-label">
                        DEVELOPER PORTFOLIO
                    </p>

                    <h1>
                        {data.name || "Ім'я розробника"}
                    </h1>

                    <h2>
                        {data.role || "Посада розробника"}
                    </h2>

                    {data.location && (
                        <p className="public-location">
                            📍 {data.location}
                        </p>
                    )}

                    <p className="public-about">
                        {data.about || "Інформація про розробника поки відсутня."}
                    </p>

                    <div className="public-contacts">
                        {data.email && (
                            <a href={`mailto:${data.email}`}>
                                Email
                            </a>
                        )}

                        {data.github && (
                            <a
                                href={data.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        )}

                        {data.linkedin && (
                            <a
                                href={data.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        )}
                    </div>
                </section>

                {data.skills.length > 0 && (
                    <section className="public-section">
                        <h2>Мої навички</h2>

                        <div className="public-skills">
                            {data.skills.map((skill, index) => (
                                <span key={`${skill}-${index}`}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {data.projects.length > 0 && (
                    <section className="public-section">
                        <h2>Мої проєкти</h2>

                        <div className="public-projects">
                            {data.projects.map((project, index) => (
                                <article
                                    className="public-project-card"
                                    key={project.id || index}
                                >
                                    <h3>
                                        {project.name || "Без назви"}
                                    </h3>

                                    <p>{project.description}</p>

                                    {project.technologies && (
                                        <div className="public-technologies">
                                            {project.technologies
                                                .split(",")
                                                .map((tech, i) => (
                                                    <span key={i}>
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                    )}

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Переглянути проєкт →
                                        </a>
                                    )}
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {data.experience.length > 0 && (
                    <section className="public-section">
                        <h2>Досвід роботи</h2>

                        <div className="public-experience">
                            {data.experience.map((item, index) => (
                                <article
                                    className="public-experience-item"
                                    key={item.id || index}
                                >
                                    <h3>
                                        {item.position || "Посада"}
                                    </h3>

                                    <p className="public-company">
                                        {item.company}
                                    </p>

                                    <p className="public-period">
                                        {item.period}
                                    </p>

                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

            </main>

            <footer className="public-footer">
                © {new Date().getFullYear()} {data.name || "Developer"}.
                Усі права захищені.
            </footer>

        </div>
    );
}

export default PortfolioView;
