import { useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import "../styles/navbar.css";

interface NavbarProps {
  onToggleSidebar: () => void;
}

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  {
    code: "en",
    label: "English",
    flag: "https://flagcdn.com/w80/gb.png",
  },
  {
    code: "id",
    label: "Indonesia",
    flag: "https://flagcdn.com/w80/id.png",
  },
];

function Navbar({ onToggleSidebar }: NavbarProps) {
  const { user } = useAuth();
  const langRef = useRef<HTMLDivElement>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState(LANGUAGES[0]);

  const displayName = user?.fullname?.split(" ")[0] ?? "User";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelectLanguage(option: LanguageOption) {
    setLanguage(option);
    setLangOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar__left">
        <button
          type="button"
          className="navbar__menu-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className="ph ph-list" />
        </button>

        <div className="navbar__search">
          <i className="ph ph-magnifying-glass navbar__search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="navbar__search-input"
          />
        </div>
      </div>

      <div className="navbar__right">
        <button type="button" className="navbar__icon-btn navbar__notification">
          <i className="fa-solid fa-bell navbar__bell-icon" />
          <span className="navbar__badge">6</span>
        </button>

        <div className="navbar__lang-wrap" ref={langRef}>
          <div className="navbar__lang">
            <img
              className="navbar__flag-img"
              src={language.flag}
              alt={language.label}
            />
            <span className="navbar__lang-text">{language.label}</span>
            <button
              type="button"
              className="navbar__lang-toggle"
              onClick={() => setLangOpen((prev) => !prev)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
            >
              <i className="ph ph-caret-down navbar__lang-chevron" />
            </button>
          </div>

          {langOpen && (
            <ul className="navbar__lang-menu" role="listbox">
              {LANGUAGES.map((option) => (
                <li key={option.code}>
                  <button
                    type="button"
                    className={`navbar__lang-option${
                      option.code === language.code
                        ? " navbar__lang-option--active"
                        : ""
                    }`}
                    onClick={() => handleSelectLanguage(option)}
                    role="option"
                    aria-selected={option.code === language.code}
                  >
                    <img
                      className="navbar__flag-img"
                      src={option.flag}
                      alt={option.label}
                    />
                    <span>{option.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="navbar__profile-wrap">
          <div className="navbar__profile">
            <img
              className="navbar__avatar"
              src="/assets/admin-avatar.png"
              alt={displayName}
            />
            <div className="navbar__profile-info">
              <span className="navbar__profile-name">{displayName}</span>
              <span className="navbar__profile-role">Admin</span>
            </div>
          </div>
          <button
            type="button"
            className="navbar__profile-toggle"
            aria-label="Profile menu"
            aria-haspopup="menu"
          >
            <span className="navbar__profile-chevron-wrap">
              <i className="ph ph-caret-down navbar__profile-chevron" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
