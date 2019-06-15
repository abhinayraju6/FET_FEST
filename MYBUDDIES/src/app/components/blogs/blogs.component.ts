import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blogs.model';
import { Blogs } from 'src/app/models/dashboard.model';

@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  currentUserID = null;
  currentTeamID = null;
  isShowAddPostPopUp = false;
  blogs: Blog[] = [];
  blog: Blog = new Blog();

  constructor(private blogService: BlogService) {
    this.currentUserID = "";
    this.currentTeamID = 11;
   
  }

  ngOnInit() {
    this.loadAllTeamsBlogs(this.currentTeamID);
  }

  loadAllTeamsBlogs(_teamID: string) {
    this.blogService.getAllByTeam(_teamID).subscribe(blogs => { this.blogs = blogs; });
    console.log("All Blogs for team " + this.currentTeamID + " fetched succesfully.");
  }

  createBlog() {
    
    this.blog.author="Bikshapathi";
    this.blog.creationDate = new Date().toDateString();
    this.blog.teamID = this.currentTeamID;

    this.blogService.createForTeam(this.blog)
      .subscribe(
        data => {
          console.log("Blog posted success for user " + this.currentUserID + " of team" + this.currentTeamID);
          this.loadAllTeamsBlogs(this.currentTeamID);
        },
        error => {
          console.log("Error in Blog posting for user " + this.currentUserID + "of team" + this.currentTeamID + "Error : " + error);
        });
  }

  postBlogButtonClicked() {
    this.createBlog();
  }

  showAddPostPopUp(flag: boolean) {
    this.isShowAddPostPopUp = flag;
  }
}
