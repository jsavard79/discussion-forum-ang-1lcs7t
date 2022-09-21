import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DiscussionService } from '../../core/service/discussion.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private router: Router, private disScer:DiscussionService ) { }
  discussions
  ngOnInit() {
   this.discussions=this.disScer.discussion
console.log(this.disScer.discussion)
  }


  navigate(id) {
   
    this.router.navigate(['update',id])
  }


}
