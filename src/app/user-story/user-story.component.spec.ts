import { ComponentFixture, TestBed } from '@angular/core/testing';
import { USERSTORIES } from '../models/fake-data';
import { UserStoryService } from '../services/user-story.service';

import { UserStoryComponent } from './user-story.component';

describe('UserStoryComponent', () => {
  let service: UserStoryService;
  let component: UserStoryComponent;
  let fixture: ComponentFixture<UserStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(UserStoryService);
    fixture = TestBed.createComponent(UserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doit avoir un service', () => {
    expect(component.service).toBeTruthy();
  });

  it('doit avoir la propriete liste de us vide', () => {
    expect(component.listeUs).toEqual([...USERSTORIES]);
  });
});
