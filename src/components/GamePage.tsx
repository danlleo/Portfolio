import { useParams } from 'react-router-dom'
import { gameData } from '../data/gameData'

const GamePage = () => {
  const { gameId } = useParams<{ gameId: string }>()
  const game = gameData[gameId as keyof typeof gameData]

  if (!game) return <div>Игра не найдена</div>

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <div className='screenshots'>
        {game.screenshots.map((shot, index) => (
          <img key={index} src={shot} alt={`Скриншот ${index + 1}`} />
        ))}
      </div>
      <video controls src={game.video} />
    </div>
  )
}

export default GamePage
