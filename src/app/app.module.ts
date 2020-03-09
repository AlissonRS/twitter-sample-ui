import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TrendsComponent } from './components/trends/trends.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FollowSuggestionsComponent } from './components/follow-suggestions/follow-suggestions.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { TrendListComponent } from './components/trend-list/trend-list.component';
import { FollowListComponent } from './components/follow-list/follow-list.component';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { NewTweetComponent } from './components/new-tweet/new-tweet.component';
import { LoadNewTweetsComponent } from './components/load-new-tweets/load-new-tweets.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { UserService } from './services/user.service';
import { TwitterDataService } from './services/twitter.data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    TrendsComponent,
    TimelineComponent,
    FollowSuggestionsComponent,
    FooterComponent,
    UserStatsComponent,
    TrendListComponent,
    FollowListComponent,
    TweetListComponent,
    NewTweetComponent,
    LoadNewTweetsComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TwitterDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
