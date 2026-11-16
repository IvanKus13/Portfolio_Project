
import Header from "../components/Header";

function Home() {
    return (
        <div className="home-page">
            <Header />

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <span className="hero-label">
                            DEVELOPER PORTFOLIO BUILDER
                        </span>

                        <h1>
                            Створи своє
                            <br />
                            <span>портфоліо розробника</span>
                        </h1>

                        <p>
                            Збирай свої проєкти, навички та досвід
                            в одному місці. Створюй власний дизайн
                            без необхідності писати код.
                        </p>

                        <a href="/register" className="button">
                            Створити портфоліо →
                        </a>
                    </div>
                </section>

                <section className="features" id="features">
                    <h2>Можливості платформи</h2>

                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Власні розділи</h3>
                            <p>
                                Створюй розділи та додавай
                                будь-яку інформацію про себе.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Персоналізація</h3>
                            <p>
                                Обирай дизайн, кольори
                                та оформлення портфоліо.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Адаптивність</h3>
                            <p>
                                Портфоліо буде зручним
                                на комп'ютерах і смартфонах.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="how-it-works" id="how-it-works">
                    <h2>Як це працює?</h2>

                    <div className="steps">
                        <div className="step">
                            <span>01</span>
                            <h3>Додай інформацію</h3>
                            <p>Заповни профіль, навички та проєкти.</p>
                        </div>

                        <div className="step">
                            <span>02</span>
                            <h3>Обери дизайн</h3>
                            <p>Налаштуй зовнішній вигляд портфоліо.</p>
                        </div>

                        <div className="step">
                            <span>03</span>
                            <h3>Збережи результат</h3>
                            <p>Отримай посилання на своє портфоліо.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <span>Portfolia</span>
                <span>Developer Portfolio Platform</span>
            </footer>
        </div>
    );
}

export default Home;
