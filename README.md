# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Notes: work done following the tutorial

Link: https://www.youtube.com/watch?v=AW1yfBKRMKc&t=3100s

Короткий перелік змін, зроблених у цьому репозиторії в процесі проходження уроку:

- Ініціалізовано локальний Git репозиторій і зроблено початковий коміт.
- Додано віддалений репозиторій та запушено гілку `main` на GitHub.
- Виправлено `src/components/Hero.jsx`:
	- Винесені React-хуки (`useRef`, `useMediaQuery`) на рівень компонента.
	- Зареєстровано GSAP-плагіни (`SplitText`, `ScrollTrigger`) через `gsap.registerPlugin(...)`.
	- Захищена робота з `videoRef` (очікування `loadedmetadata` перед анімацією `currentTime`).
- Виправлено `src/components/Menu.jsx`:
	- Заміна імпорту на наявний експорт (`sliderLists as allCocktails`).
	- Виправлено значення opacity в анімаціях (з `100` на `1`).
- Прогнано збірку через Vite (`npm run build`) — збірка пройшла успішно.

Якщо потрібно, можу додати більш детальний список кроків, тести чи окремий `LESSON_NOTES.md`.
