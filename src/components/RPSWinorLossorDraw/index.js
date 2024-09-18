import React from 'react'
import './index.css'

const RPSWinorLossorDraw = props => {
  const {userChoice, robotChoice, gameStatus, playAgain} = props

  const changeGameStatus = () => {
    playAgain()
  }

  return (
    <div className="container">
      <div className="win-or-loss-or-draw-container">
        <div className="each-player">
          <h1 className="player-header">YOU</h1>
          <img
            className="each-player-choice"
            src={userChoice}
            alt="your choice"
          />
        </div>
        <div className="each-player">
          <h1 className="player-header">OPPONENT</h1>
          <img
            className="each-player-choice"
            src={robotChoice}
            alt="opponent choice"
          />
        </div>
      </div>
      <p className="game-item-name">{gameStatus}</p>
      <button className="game-item-button" onClick={changeGameStatus}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default RPSWinorLossorDraw