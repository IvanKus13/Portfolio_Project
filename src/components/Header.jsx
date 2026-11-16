import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                Portfolia<span>.</span>
            </Link>

            <nav className="nav">
                <a href="#features">Можливості</a>
                <a href="#how-it-works">Як це працює</a>
            </nav>

            <div className="header-actions">
                <Link to="/login" className="login-link">
                    Увійти
                </Link>

                <Link to="/register" className="button button-small">
                    Реєстрація
                </Link>
            </div>
        </header>
    );
}

export default Header;