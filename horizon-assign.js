document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-btn');
    const sections = document.querySelectorAll('.section');
    const languageSelect = document.getElementById('language');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            sections.forEach(section => {
                section.classList.toggle('hidden', !section.classList.contains(sectionId));
            });
        });
    });

    languageSelect.addEventListener('change', () => {
        const language = languageSelect.value;
        translateToLanguage(language);
    });

    function translateToLanguage(lang) {
        const translations = {
            en: {
                home: 'Home',
                movies: 'Movies',
                tvShows: 'TV Shows',
                sports: 'Sports',
                live: 'Live',
            },
            fr: {
                home: 'Accueil',
                movies: 'Films',
                tvShows: 'Émissions',
                sports: 'Sports',
                live: 'En direct',
            },
            de: {
                home: 'Startseite',
                movies: 'Filme',
                tvShows: 'TV-Shows',
                sports: 'Sport',
                live: 'Live',
            },
            ru: {
                home: 'Главная',
                movies: 'Фильмы',
                tvShows: 'Телешоу',
                sports: 'Спорт',
                live: 'Прямой эфир',
            },
            es: {
                home: 'Inicio',
                movies: 'Películas',
                tvShows: 'Programas',
                sports: 'Deportes',
                live: 'En vivo',
            },
            zh: {
                home: '首页',
                movies: '电影',
                tvShows: '电视节目',
                sports: '体育',
                live: '直播',
            }
        };

        const translation = translations[lang] || translations.en;

        buttons.forEach(button => {
            const sectionId = button.getAttribute('data-section');
            button.textContent = translation[sectionId];
        });
    }
});