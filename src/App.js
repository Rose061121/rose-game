import React, { PureComponent } from "react"
import { GameEngine } from "react-game-engine"
import { Box } from "./renderers"
import { MoveBox } from "./systems"

export default class SimpleGame extends PureComponent {
  render() {
    return(
    <GameEngine
      style={{width: 800, height: 600, backgroundColor: "blue" }}
      systems={[MoveBox]}
      entities={{
        box1: { x: 200, y: 200, renderer: <Box />}
      }}>

    </GameEngine>
    )
  }
}


