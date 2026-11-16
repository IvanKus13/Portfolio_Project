
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        // Получаем список зарегистрированных пользователей
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Проверяем, существует ли пользователь с таким email
        const existingUser = users.find(
            user => user.email === email
        );

        if (existingUser) {
            alert("Користувач з таким email вже існує!");
            return;
        }

        // Создаём нового пользователя
        const newUser = {
            name,
            email,
            password
        };

        users.push(newUser);

        // Сохраняем пользователей в LocalStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("Реєстрація успішна!");

        navigate("/login");
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Створити акаунт</h1>

                <p className="auth-description">
                    Зареєструйся, щоб створити власне портфоліо.
                </p>

                <form onSubmit={handleSubmit}>
                    <label>Ім'я</label>
                    <input
                        type="text"
                        placeholder="Введіть ім'я"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

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
                        minLength={6}
                        required
                    />

                    <button
                        type="submit"
                        className="button auth-button"
                    >
                        Зареєструватися
                    </button>
                </form>

                <p className="auth-footer">
                    Вже маєте акаунт?{" "}
                    <Link to="/login">Увійти</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
