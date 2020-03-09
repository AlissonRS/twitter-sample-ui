export class Trend {
    
    public title: string;
    public description: string;

    public constructor(init?:Partial<Trend>) {
        Object.assign(this, init);
    }
}