import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { DiscussionService } from '../../core/service/discussion.service';
import { LoginService } from '../../core/service/login.service';

@Component({
  selector: 'app-updateordelete',
  templateUrl: './updateordelete.component.html',
  styleUrls: ['./updateordelete.component.css']
})
export class UpdateordeleteComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private router: Router, private discService: DiscussionService, private logser: LoginService) { }

  discussionId
  discussionview
  comment
  ngOnInit() {
    this.discussionId = this.activeRoute.snapshot.params['id']
    this.discussionview = this.discService.getDiscussionById(this.discussionId)
  }

  navigate() {
    this.router.navigate([""])
  }

  addNewComment(dId) {
    let commObj = { cid: 1, comment: this.comment, uid: '', clike: [] }

    this.discService.addNewComment(commObj, dId)

  }

  commentLike(dId, cid) {

    this.discService.commentLike(dId, cid)
  }
  deleteComment(dId, cId) {
    this.discService.deleteComment(dId, cId);
  }
  selectedDiv
  editcomment(id) {

    if (this.selectedDiv) {
      document.getElementById(this.selectedDiv).contentEditable = "false";
      this.selectedDiv = null
    }
    let selectedId = "myId_" + id
    this.selectedDiv = selectedId

    document.getElementById(selectedId).contentEditable = "true";
  }
}
