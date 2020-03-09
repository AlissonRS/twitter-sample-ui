import { Tweet } from './tweet.model';
import { Follow } from './follow.model';

export class User {

    public name: string;
    public username: string;
    public thumbnailUrl: string;
    public coverImageUrl: string;
    public followingCount: number;
    public followersCount: number;
    public tweetCount: number;
    public timelineTweets: Tweet[];
    public whoToFollow: Follow[];
    
    public constructor(init?:Partial<User>) {
        Object.assign(this, init);
    }
}