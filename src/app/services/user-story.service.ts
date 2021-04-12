import { Injectable } from '@angular/core';
import { UserStory } from '../models/user-story.model';

@Injectable({
  providedIn: 'root'
})
export class UserStoryService {
  UserStories: UserStory[] = [];

  constructor() { }

  addUserStory(us: UserStory) {
    this.UserStories = [...this.UserStories, us];
  }

  getAllUserStories(): UserStory[] {
    return this.UserStories;
  }
}
