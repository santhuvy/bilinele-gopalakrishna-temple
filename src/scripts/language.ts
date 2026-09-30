import { messages, type Lang } from "../i18n/messages";

const STORAGE_KEY = "bgk-lang";

function readLang(): Lang {
  return localStorage.getItem(STORAGE_KEY) === "kn" ? "kn" : "en";
}

export function applyLanguage(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = key ? messages[lang][key] : undefined;
    if (value == null) return;
    const attr = el.dataset.i18nAttr;
    if (attr) el.setAttribute(attr, value);
    else el.textContent = value;
  });

  const titleKey = document.body.dataset.titleKey;
  const title = titleKey ? messages[lang][titleKey] : undefined;
  if (title) document.title = title;

  document.querySelectorAll<HTMLButtonElement>("[data-set-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.setLang === lang ? "true" : "false");
  });
}

applyLanguage(readLang());

document.querySelectorAll<HTMLButtonElement>("[data-set-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const next = button.dataset.setLang === "kn" ? "kn" : "en";
    applyLanguage(next);
  });
});
