import { Component, OnInit } from '@angular/core';

import { EventService } from '../../services/events.service';
import { Events } from '../../models/events.model';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  //public events: any[] = [];
  currentUserID = null;
  currentTeamID = null;
  events: Events[] = [];
  event: Events = new Events();


  // private event: any = {
  //   title: "Sprint Retero I136 ",
  //   author: "Sagar Uday Kulkarni",
  //   creationDateTime: "11-06-2019 06:11 PM",
  //   audience: {
  //     required: ["Srikanth Ramaynam", "Mahesh Egamwar", "Bikshapathi Bemgani"],
  //     optional: ["Sagar Uday Kulkarni", "Sanan Kumar"]
  //   },
  //   content: `"Meeting sprint retero spection I136": The India Meteorological Department (IMD) on Tuesday said the speed of “Vayu” had increased to 17 km per hour and was located in the Arabian Sea, about 350 km west-northwest of Goa, 410 km south-southwest of Mumbai and 530 km nearly south of Veraval (Gujarat).

  //   “It is very likely to move nearly northwards and cross Gujarat coast between Porbandar and Mahuva around Veraval and the Diu region as a severe cyclonic storm, with a wind speed of 110-120 kmph gusting to 135 kmph during early morning of June 13,” the IMD said.
    
  //   The cyclone will make a landfall near Veraval in Gir Somnath district on June 13 but it will be preceded by heavy rainfall in isolated places.`,
  //   actions: ["Will Join", "Cann't Join", "Tentative"]
  // }

  constructor(private eventService: EventService) {
    this.currentUserID = JSON.parse(localStorage.getItem('currentUser'));
    this.currentTeamID = JSON.parse(localStorage.getItem('currentTeamId'));
  }

  public isShowAddEventPopUp = false;
  public teammembers: any = [];

  
  ngOnInit() {
    // for (let i = 0; i < 10; i++) {
    //   this.events.push(this.event);
    // }
    this.getUniqueTeamMembers(this.currentTeamID);
  }
  showAddEventPopUp(flag: boolean) {
    this.isShowAddEventPopUp = flag;
  }
  getUniqueTeamMembers(_teamID: string) {
   // this.teammembers = ["Srikanth Ramaynam", "Mahesh Egamwar", "Bikshapathi Bemgani", "Sagar Uday Kulkarni", "Sanan Kumar","Akhila Potluri"];
   this.eventService.getAllByEvents(_teamID).subscribe(events => { this.events = events; });
   console.log("All Events for team " + this.currentTeamID + " fetched succesfully.");
  }

  createForEvent() {
    this.event.title = this.currentUserID;
    // this.event.creationDate = new Date().toDateString();
    // this.event.teamID = this.currentTeamID;

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

  applyBadgeColor(type: string) {
    switch (type) {
      case "Will Join": return "event-action label-success";
      case "Cann't Join": return "event-action label-danger";
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
