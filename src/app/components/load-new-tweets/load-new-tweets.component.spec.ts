import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadNewTweetsComponent } from './load-new-tweets.component';

describe('LoadNewTweetsComponent', () => {
  let component: LoadNewTweetsComponent;
  let fixture: ComponentFixture<LoadNewTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadNewTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadNewTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
