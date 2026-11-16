
import { useState } from "react";
import { Outlet } from "react-router-dom";

function DevicePreview() {
    const [device, setDevice] = useState("desktop");

    const widths = {
        desktop: "100%",
        tablet: "768px",
        mobile: "375px"
    };

    return (
        <div className="device-preview">
            <div className="device-toolbar">
                <button
                    className={device === "desktop" ? "active" : ""}
                    onClick={() => setDevice("desktop")}
                >
                    Комп'ютер
                </button>

                <button
                    className={device === "tablet" ? "active" : ""}
                    onClick={() => setDevice("tablet")}
                >
                    Планшет
                </button>

                <button
                    className={device === "mobile" ? "active" : ""}
                    onClick={() => setDevice("mobile")}
                >
                    Телефон
                </button>
            </div>

            <div className="device-screen">
                <div
    className="device-content"
    style={{ width: widths[device] }}
>
    <Outlet />
</div>
            </div>
        </div>
    );
}

export default DevicePreview;
