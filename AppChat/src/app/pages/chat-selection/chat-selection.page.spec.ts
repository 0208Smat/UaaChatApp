import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatSelectionPage } from './chat-selection.page';

describe('ChatSelectionPage', () => {
  let component: ChatSelectionPage;
  let fixture: ComponentFixture<ChatSelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
