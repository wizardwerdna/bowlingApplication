import {test, expect} from '../testsuite';
import {BowlingLine} from './bowlingLine';
const match =
  (<any> require('snabbdom-selector')).default as (s: any, v: any) => any;
export function bowlingLineTests() {
  test('static bowlingLine DOM', function() {
    BowlingLine({}).DOM.subscribe( vtree => {
      expect(vtree.sel).toBe('div.container');
      expect(match('.frames.clearfix', vtree).length).toBe(1);
      expect(match('.frames .frame', vtree).length).toBe(10);
      expect(match('.frame.tenth:nth-child(10)', vtree).length).toBe(1);
      expect(match('.frame div.rollDisplay', vtree).length).toBe(21);
      expect(match('.frame div.scoreDisplay', vtree).length).toBe(10);
      expect(match('button.rollButton', vtree).length).toBe(11);
      Array(11).fill(0).forEach((_, index) =>
        expect(match(`.rollButton:nth-child(${index + 2})`, vtree)[0].text)
          .toEqual(index)
      );
      expect(match('.actions button.newgame', vtree)[0].text).toBe('New');
      expect(match('.actions button.undo', vtree)[0].text).toBe('Undo');
      expect(match('.actions button.redo', vtree)[0].text).toBe('Redo');
    });
  });
}
