export class RollPoint {
    
    value: number

    public constructor (value: number) {
        this.value = value
    }

    static of (value: number): RollPoint {
        return new RollPoint(value)
    }

}

export const SPARE = new RollPoint(-1);
export const STRIKE = new RollPoint(10);
