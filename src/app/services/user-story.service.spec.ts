import { TestBed } from '@angular/core/testing';
import { UserStory } from '../models/user-story.model';

import { UserStoryService } from './user-story.service';

describe('UserStoryService', () => {
  let service: UserStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Doit avoir une liste des \'user story\'', () => {
    expect(service.UserStories).toEqual([]);
  });

  it('Doit rajouter un \'user story\' dans la liste', () => {
    const MockUserStory: UserStory = {
      id: 1,
      titre: 'us001',
      description: 'Le metier contate l\'ajout d\'un US',
      complexite: 1
    }
    
    service.addUserStory(MockUserStory);
    expect(service.UserStories).toEqual([MockUserStory]);
  });

  it('Doit renvoyer la liste des US', () => {
    const MockUserStory: UserStory = {
      id: 1,
      titre: 'us001',
      description: 'Le metier contate l\'ajout d\'un US',
      complexite: 1
    }

    const MockUserStory2: UserStory = {
      id: 2,
      titre: 'us002',
      description: 'Le metier contate que le service renvoie tout la liste d\'US',
      complexite: 1
    }
    
    service.addUserStory(MockUserStory);
    service.addUserStory(MockUserStory2);
    expect(service.getAllUserStories()).toEqual([MockUserStory, MockUserStory2]);
  });
});
