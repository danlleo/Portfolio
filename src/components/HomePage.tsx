import { Link } from 'react-router-dom'
import { gameData } from '../data/gameData'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
      <section className='resume-section'>
        <h1>Резюме</h1>
        <p>
          Привет! Меня зовут Даниэль Коренько. Я инди-разработчик игр и
          веб-разработчик с опытом работы в создании увлекательных проектов.
        </p>
        <h2>Опыт работы</h2>
        <ul>
          <li>
            <strong>GameDev Studio (2023 - 2024)</strong> — Москва, Россия
            <br />
            Работал над созданием инди-игр, использовал Unity и TypeScript.
          </li>
          <li>
            <strong>Freelance Developer (2021 - 2023)</strong> — Удалённо
            <br />
            Создавал веб-приложения и игры на React и TypeScript.
          </li>
          <li>
            <strong>Junior Developer at TechCorp (2019 - 2021)</strong> —
            Санкт-Петербург, Россия
            <br />
            Участвовал в разработке внутренних инструментов компании.
          </li>
        </ul>
        <h2>Навыки</h2>
        <ul>
          <li>TypeScript, React, Unity</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Git, GitHub</li>
        </ul>
      </section>

      <section className='games-section'>
        <h1>Мои игры</h1>
        <div className='game-grid'>
          {Object.entries(gameData).map(([gameId, game]) => (
            <Link to={`/games/${gameId}`} key={gameId} className='game-card'>
              <img src={game.thumbnail} alt={game.title} />
              <h3>{game.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className='contacts-section'>
        <h1>Контакты</h1>
        <p>
          Свяжитесь со мной:{' '}
          <a href='mailto:daniel.korenko@gmail.com'>
            daniel.korenko@gmail.com
          </a>
        </p>
        <p>
          Или найдите меня на{' '}
          <a
            href='https://github.com/danlleo'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>{' '}
          и{' '}
          <a
            href='https://linkedin.com/in/danielkorenko'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  )
}

export default HomePage
