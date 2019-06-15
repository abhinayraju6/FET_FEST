import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/events.service';
import { Event } from '../../models/events.model';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  currentUserID = null;
  currentTeamID = null;

  events: Event[] = [];
  event: Event = new Event();

  constructor(private eventService: EventService) {
    this.currentUserID = JSON.parse(localStorage.getItem('currentUser'));
    this.currentTeamID = 11;
  }

  public isShowAddEventPopUp = false;
  public teammembers: any = [];


  ngOnInit() {
    this.getUniqueTeamMembers(this.currentTeamID);
  }

  getUniqueTeamMembers(_teamID: string) {
    this.eventService.getAllByEvents(_teamID).subscribe(events => { this.events = events; });
    
    console.log("All events for team " + this.currentTeamID + " fetched succesfully.");
  }

  showAddEventPopUp(flag: boolean) {
    this.isShowAddEventPopUp = flag;
  }
  

  createForEvent() {
    
    this.event.teamID = this.currentTeamID;

    this.event.creationtime=new Date().toLocaleString();

    this.event.required = "Srikanth Ramaynam, Bikshapathi Bemgani, Akhila Potluri";
    this.event.optional = "Sagar Uday Kulkarni, Sanan Kumar";
    this.event.actions="Will Join,Can't Join,Tentative";

    this.eventService.createForEvent(this.event)
      .subscribe(
        data => {
          console.log("Blog posted success for user " + this.currentUserID + " of team" + this.currentTeamID);
          this.getUniqueTeamMembers(this.currentTeamID);
        },
        error => {
          console.log("Error in Blog posting for user " + this.currentUserID + "of team" + this.currentTeamID + "Error : " + error);
        });
  }

  postEventButtonClicked() {
    this.createForEvent();
  }

  applyBadgeColor(type: string) {
    switch (type) {
      case "Will Join": return "event-action label-success";
      case "Can't Join": return "event-action label-danger";
      case "Tentative": return "event-action label-warning";
    }
  }

  public expanded = false;
  public expanded1 = false;

  showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
  }

  showCheckboxesForOtional() {
    var checkboxes = document.getElementById("checkboxesForOptional");
    if (!this.expanded1) {
      checkboxes.style.display = "block";
      this.expanded1 = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded1 = false;
    }
  }
}
