import { RollPoint, SPARE, STRIKE } from './RollPoint';
import { evaluateGame } from './GamePointCalculator';

const ans = evaluateGame(
    [
        // STRIKE = 20
        STRIKE,
        // SPEAR = 20      
        RollPoint.of(5),
        SPARE,
        // STRIKE = 19
        STRIKE,
        // 7 turns with 9 points = 63
        RollPoint.of(1),
        RollPoint.of(8),
        RollPoint.of(2),
        RollPoint.of(7),
        RollPoint.of(3),
        RollPoint.of(6),
        RollPoint.of(4),
        RollPoint.of(5),
        RollPoint.of(5),
        RollPoint.of(4),
        RollPoint.of(6),
        RollPoint.of(3),
        RollPoint.of(7),
        RollPoint.of(2)
    ]
)

console.log("The final result of the game is (expected value is 122)", ans)