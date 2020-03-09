import { User } from './user.model';

export class Tweet {

    public tweetId: string;
    public author: User;
    public order: number;
    public userFriendlyDate: string;
    public tweetBody: string;
    public attachedItemUrl: string;

    public constructor(init?:Partial<Tweet>) {
        Object.assign(this, init);
    }
}