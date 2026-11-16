
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PortfolioEditor() {
    const navigate = useNavigate();

    const [portfolio, setPortfolio] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("portfolio")) || {};
        } catch {
            return {};
        }
    });

    const [isSaved, setIsSaved] = useState(false);

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

    function updateField(field, value) {
        setPortfolio(prev => ({
            ...prev,
            [field]: value
        }));

        setIsSaved(false);
    }

    function handleSave() {
        localStorage.setItem("portfolio", JSON.stringify(data));
        setIsSaved(true);
    }

    function addSkill() {
        const skill = prompt("Введіть назву навички:");

        if (skill && skill.trim()) {
            updateField("skills", [...data.skills, skill.trim()]);
        }
    }

    function removeSkill(index) {
        updateField(
            "skills",
            data.skills.filter((_, i) => i !== index)
        );
    }

    function addProject() {
        updateField("projects", [
            ...data.projects,
            {
                id: Date.now(),
                name: "",
                description: "",
                technologies: "",
                link: ""
            }
        ]);
    }

    function updateProject(index, field, value) {
        const projects = [...data.projects];
        projects[index] = {
            ...projects[index],
            [field]: value
        };

        updateField("projects", projects);
    }

    function removeProject(index) {
        updateField(
            "projects",
            data.projects.filter((_, i) => i !== index)
        );
    }

    function addExperience() {
        updateField("experience", [
            ...data.experience,
            {
                id: Date.now(),
                position: "",
                company: "",
                period: "",
                description: ""
            }
        ]);
    }

    function updateExperience(index, field, value) {
        const experience = [...data.experience];
        experience[index] = {
            ...experience[index],
            [field]: value
        };

        updateField("experience", experience);
    }

    function removeExperience(index) {
        updateField(
            "experience",
            data.experience.filter((_, i) => i !== index)
        );
    }

    return (
        <div className="editor-page">
            <div className="editor-container">
                <div className="editor-header">
                    <h1>Створення портфоліо</h1>
                    <p>Заповніть інформацію про себе та свої проєкти</p>
                </div>

                <div className="editor-layout">
                    <div className="editor-form">

                        <section className="editor-section">
                            <h2>Особиста інформація</h2>

                            <label>Ім'я та прізвище</label>
                            <input
                                value={data.name}
                                onChange={e => updateField("name", e.target.value)}
                                placeholder="Наприклад, Іван Коваль"
                            />

                            <label>Посада</label>
                            <input
                                value={data.role}
                                onChange={e => updateField("role", e.target.value)}
                                placeholder="Frontend Developer"
                            />

                            <label>Про себе</label>
                            <textarea
                                value={data.about}
                                onChange={e => updateField("about", e.target.value)}
                                placeholder="Розкажіть трохи про себе..."
                            />

                            <label>Місцезнаходження</label>
                            <input
                                value={data.location}
                                onChange={e => updateField("location", e.target.value)}
                                placeholder="Київ, Україна"
                            />
                        </section>

                        <section className="editor-section">
                            <h2>Контактна інформація</h2>

                            <label>Email</label>
                            <input
                                value={data.email}
                                onChange={e => updateField("email", e.target.value)}
                                placeholder="example@gmail.com"
                            />

                            <label>GitHub</label>
                            <input
                                value={data.github}
                                onChange={e => updateField("github", e.target.value)}
                                placeholder="https://github.com/username"
                            />

                            <label>LinkedIn</label>
                            <input
                                value={data.linkedin}
                                onChange={e => updateField("linkedin", e.target.value)}
                                placeholder="https://linkedin.com/in/username"
                            />
                        </section>

                        <section className="editor-section">
                            <h2>Навички</h2>

                            <button
                                type="button"
                                className="editor-add-row"
                                onClick={addSkill}
                            >
                                + Додати навичку
                            </button>

                            <div className="editor-tags">
                                {data.skills.map((skill, index) => (
                                    <span className="editor-tag" key={index}>
                                        {skill}
                                        <button
                                            type="button"
                                            onClick={() => removeSkill(index)}
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="editor-section">
                            <h2>Мої проєкти</h2>

                            <button
                                type="button"
                                className="editor-add-row"
                                onClick={addProject}
                            >
                                + Додати проєкт
                            </button>

                            {data.projects.map((project, index) => (
                                <div className="editor-item" key={project.id || index}>
                                    <div className="editor-item-header">
                                        <h3>Проєкт {index + 1}</h3>
                                        <button
                                            type="button"
                                            className="editor-delete"
                                            onClick={() => removeProject(index)}
                                        >
                                            Видалити
                                        </button>
                                    </div>

                                    <label>Назва проєкту</label>
                                    <input
                                        value={project.name}
                                        onChange={e => updateProject(index, "name", e.target.value)}
                                        placeholder="Назва проєкту"
                                    />

                                    <label>Опис</label>
                                    <textarea
                                        value={project.description}
                                        onChange={e => updateProject(index, "description", e.target.value)}
                                        placeholder="Опис проєкту"
                                    />

                                    <label>Технології</label>
                                    <input
                                        value={project.technologies}
                                        onChange={e => updateProject(index, "technologies", e.target.value)}
                                        placeholder="React, JavaScript, CSS"
                                    />

                                    <label>Посилання</label>
                                    <input
                                        value={project.link}
                                        onChange={e => updateProject(index, "link", e.target.value)}
                                        placeholder="https://..."
                                    />
                                </div>
                            ))}
                        </section>

                        <section className="editor-section">
                            <h2>Досвід роботи</h2>

                            <button
                                type="button"
                                className="editor-add-row"
                                onClick={addExperience}
                            >
                                + Додати досвід
                            </button>

                            {data.experience.map((item, index) => (
                                <div className="editor-item" key={item.id || index}>
                                    <div className="editor-item-header">
                                        <h3>Місце роботи {index + 1}</h3>
                                        <button
                                            type="button"
                                            className="editor-delete"
                                            onClick={() => removeExperience(index)}
                                        >
                                            Видалити
                                        </button>
                                    </div>

                                    <label>Посада</label>
                                    <input
                                        value={item.position}
                                        onChange={e => updateExperience(index, "position", e.target.value)}
                                        placeholder="Frontend Developer"
                                    />

                                    <label>Компанія</label>
                                    <input
                                        value={item.company}
                                        onChange={e => updateExperience(index, "company", e.target.value)}
                                        placeholder="Назва компанії"
                                    />

                                    <label>Період роботи</label>
                                    <input
                                        value={item.period}
                                        onChange={e => updateExperience(index, "period", e.target.value)}
                                        placeholder="2024 — 2025"
                                    />

                                    <label>Опис</label>
                                    <textarea
                                        value={item.description}
                                        onChange={e => updateExperience(index, "description", e.target.value)}
                                        placeholder="Ваші обов'язки та досягнення"
                                    />
                                </div>
                            ))}
                        </section>

                        <div className="editor-save-container">
                            <button
                                type="button"
                                className="editor-save"
                                onClick={handleSave}
                            >
                                Зберегти портфоліо
                            </button>

                            {isSaved && (
                                <button
                                    type="button"
                                    className="editor-save"
                                    onClick={() => navigate("/portfolio/ivan")}
                                >
                                    Переглянути портфоліо
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="editor-preview">
                        <h2>Попередній перегляд</h2>

                        <div className="preview-section">
                            <h3>{data.name || "Ваше ім'я"}</h3>
                            <p>{data.role || "Ваша посада"}</p>
                            <p>{data.location}</p>
                            <p>{data.about || "Інформація про вас з'явиться тут."}</p>
                        </div>

                        {data.skills.length > 0 && (
                            <div className="preview-section">
                                <h3>Навички</h3>
                                <div className="editor-tags">
                                    {data.skills.map((skill, index) => (
                                        <span className="editor-tag" key={index}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {data.projects.length > 0 && (
                            <div className="preview-section">
                                <h3>Проєкти</h3>
                                {data.projects.map((project, index) => (
                                    <div className="preview-item" key={project.id || index}>
                                        <h4>{project.name || "Назва проєкту"}</h4>
                                        <p>{project.description}</p>
                                        <p>{project.technologies}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {data.experience.length > 0 && (
                            <div className="preview-section">
                                <h3>Досвід роботи</h3>
                                {data.experience.map((item, index) => (
                                    <div className="preview-item" key={item.id || index}>
                                        <h4>{item.position || "Посада"}</h4>
                                        <p>{item.company}</p>
                                        <p>{item.period}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioEditor;
