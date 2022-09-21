import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DiscussionService } from '../../core/service/discussion.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
id;
topic;
disscussion;
  constructor(private router: Router,private disscer:DiscussionService) { }

  ngOnInit() {
  }
  navigate() {

    let discussionObj={
      id:this.id,
      topic:this.topic,
      discussion:this.disscussion,
      dlike:[],
      comments:[]
    }
    this.disscer.newDiscussion(discussionObj)
    this.router.navigate([""])
  }

}
