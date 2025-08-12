import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        // initialize from localStorage or system preference
        if (typeof window !== "undefined") {
            if (localStorage.theme === "dark") return true;
            if (
                !("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) return true;
        }
        return false;
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="btn btn-primary"
            aria-label="Toggle Dark Mode"
        >
            {isDark ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
