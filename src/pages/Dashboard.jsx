
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <div>
                    <h1>Мій кабінет</h1>
                    <p>Керуй своїм портфоліо в одному місці.</p>
                </div>

                <Link to="/editor" className="button">
                    Створити портфоліо
                </Link>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2>Моє портфоліо</h2>
                    <p>
                        Тут буде відображатися твоє створене портфоліо.
                    </p>

                    <Link to="/editor" className="dashboard-link">
                        Перейти до редактора →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
