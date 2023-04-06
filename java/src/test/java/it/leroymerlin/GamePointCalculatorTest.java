package it.leroymerlin;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

class GamePointCalculatorTest {

    @Test
    @DisplayName("The most regular player: 2 pins for roll")
    // there are 20 rolls
    public void allTheSamePinsForRole() {

        RollPoint[] rollPoints = new RollPoint[20];
        Arrays.fill(rollPoints, RollPoint.of(2));
        int result = GamePointCalculator.evaluateGame(rollPoints);
        assertThat(result, is(2 * 20));

    }

}