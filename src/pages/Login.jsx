
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        // Получаем зарегистрированных пользователей
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Ищем пользователя по email и паролю
        const user = users.find(
            user => user.email === email && user.password === password
        );

        if (!user) {
            alert("Неправильний email або пароль!");
            return;
        }

        // Сохраняем информацию о текущем пользователе
        const currentUser = {
            name: user.name,
            email: user.email
        };

        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        // Переходим в личный кабинет
        navigate("/dashboard");
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Вхід до акаунту</h1>

                <p className="auth-description">
                    Увійди, щоб продовжити створення портфоліо.
                </p>

                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Введіть email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <label>Пароль</label>
                    <input
                        type="password"
                        placeholder="Введіть пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        className="button auth-button"
                    >
                        Увійти
                    </button>
                </form>

                <p className="auth-footer">
                    Ще не маєте акаунту?{" "}
                    <Link to="/register">Зареєструватися</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
