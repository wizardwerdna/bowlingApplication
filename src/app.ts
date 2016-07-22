import {test} from '../testsuite';
import {bowlingLineTests} from './bowlingLine.spec';
import {makeDOMDriver} from '@cycle/dom';
import {run} from '@cycle/rxjs-run';
import {BowlingLine} from './bowlingLine';
require('./styles.css');

test('FRP Bowling Kata  Application', bowlingLineTests);

run(BowlingLine, {DOM: makeDOMDriver('#app')});
