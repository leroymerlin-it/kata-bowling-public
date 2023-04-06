package it.leroymerlin;

public record RollPoint(Integer point) {

    public static RollPoint of(int v) {
        return new RollPoint(v);
    }

    public static final RollPoint SPARE = new RollPoint(-1);
    public static final RollPoint STRIKE = new RollPoint(10);

}
