export class Follow {
    public name: string;
    public username: string;
    public thumbnailUrl: string;
    
    public constructor(init?:Partial<Follow>) {
        Object.assign(this, init);
    }
}