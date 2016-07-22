import {Observable as O} from 'rxjs';
import {div, button, span} from '@cycle/dom';
export function BowlingLine(sources) {
  return {DOM: O.of(div('.container', [
    div('.frames.clearfix', [
      ...Array(10).fill(0).map((_, frame) =>
        div('.frame', {class: {tenth: frame === 9}}, [
          ...Array(frame === 9 ? 3 : 2).fill(0).map((_, roll) =>
            div('.rollDisplay')
          ),
          div('.scoreDisplay')
        ])
      )
    ]),
    ...Array(11).fill(0).map((_, pins) =>
      button('.rollButton', pins)
    ),
    span('.actions', [
      button('.newgame', 'New'),
      button('.undo', 'Undo'),
      button('.redo', 'Redo')
    ])
  ]))};
}
