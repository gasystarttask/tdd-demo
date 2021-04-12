import { Component, OnInit } from '@angular/core';
import { USERSTORIES } from '../models/fake-data';
import { UserStory } from '../models/user-story.model';
import { UserStoryService } from '../services/user-story.service';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.css']
})
export class UserStoryComponent implements OnInit {
  listeUs: UserStory[] = [];

  constructor(public service: UserStoryService) { }

  ngOnInit() {
    this.service.addUserStory(USERSTORIES[0]);
    this.service.addUserStory(USERSTORIES[1]);
    this.listeUs = this.service.getAllUserStories();
  }

}
