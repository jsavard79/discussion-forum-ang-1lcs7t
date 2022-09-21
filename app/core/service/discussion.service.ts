import { Injectable } from '@angular/core';
import * as _ from 'underscore'
import { LoginService } from './login.service';
@Injectable()
export class DiscussionService {

  discussion = [{
    id: 0,
    topic: 'school',
    discussion: "jkHGWEJF",
    dlike: [],
    comments: [{ cid: 1, comment: "ahsgd", uid: '1', clike: [] }]
  }, {
    id: 1,
    topic: 'school',
    discussion: "asddfh",
    dlike: [],
    comments: [{ cid: 1, comment: "ahsgd", uid: '2', clike: [] }, { cid: 2, comment: "second comment", uid: '1', clike: [] }]
  }]

  constructor(private logser: LoginService) {


  }

  getallDiscussion() {
    return this.discussion
  }
  getDiscussionById(id) {

    return this.discussion.find(res => res.id == id)

  }
  newDiscussion(dissObj) {
    dissObj.loggedUser = this.logser.loggedUser.uid
    this.discussion.push(dissObj)
  }

  addNewComment(commentObj, dId) {

    let indexId = _.indexOf(_.pluck(this.discussion, 'id'), dId)

    var discomm = this.discussion[indexId].comments
    let commentid = (_.max(discomm, function (stooge) { return stooge.cid; })).cid
    commentObj.cid = commentid + 1;
    commentObj.uid = this.logser.loggedUser.uid
    console.log(commentObj)
    this.discussion[indexId].comments.push(commentObj)
  }

  commentLike(dId, cId) {
    let indexId = _.indexOf(_.pluck(this.discussion, 'id'), dId)


    let commindex = _.indexOf(_.pluck(this.discussion[indexId].comments, 'cid'), cId)

    if (_.contains(this.discussion[indexId].comments[commindex].clike, this.logser.loggedUser.uid)) {

      let myuser = this.logser.loggedUser.uid
      this.discussion[indexId].comments[commindex].clike = _.reject(this.discussion[indexId].comments[commindex].clike, function (myobj) { return myobj == myuser });
    }
    else {
      this.discussion[indexId].comments[commindex].clike.push(this.logser.loggedUser.uid);
    }
    console.log(this.discussion)
  }
  deleteComment(dId, cId) {
    let indexId = _.indexOf(_.pluck(this.discussion, 'id'), dId)
    this.discussion[indexId].comments = _.reject(this.discussion[indexId].comments, function (myobj) { return myobj.cid == cId });

  }

}
