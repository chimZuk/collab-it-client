import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGuessesComponent } from './chat-guesses.component';

describe('ChatGuessesComponent', () => {
  let component: ChatGuessesComponent;
  let fixture: ComponentFixture<ChatGuessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGuessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGuessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
