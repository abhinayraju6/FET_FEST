import { Component, OnInit } from '@angular/core';

import { TeamService } from '../../services/team.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamService: TeamService) {
    this.handleSliderClick = this.handleSliderClick.bind(this);
    this.handleWinResize = this.handleWinResize.bind(this);
  }
  public teammembers: User[] = [];
  public selectedTeammember : User;

 
  public leftChild = 0;
  public rightChild = 0;

  public teamCardCntnr = null;
  public cardWidth = 210;
  public shiftFactor = 20;
  public shifts = 0;

  handleSliderClick(e){
    let slider = e.target.name;
    let adjustFactor = 0;
    let cards = this.teamCardCntnr.getElementsByClassName("team-card");
    let visibleCards = parseInt((this.teamCardCntnr.offsetWidth / this.cardWidth).toString());
    if(cards && cards.length > 0){
      cards = Object.values(cards);   
    if (slider == "right-slider") {
      this.shifts--;
      this.leftChild++;
      this.rightChild--;
      // shift each slide by 100% + shiftFactor towards left => -;
      if(this.rightChild == 0){
        adjustFactor = (this.teamCardCntnr.offsetWidth - visibleCards*this.cardWidth)/visibleCards;
      }
      cards.forEach((card,cardIndex) => {
        // if(cardIndex >= cards.length - visibleCards){
        //   console.log(`inside the right adjustment ${adjustFactor}`)
        //   card.style.transform = `translateX(calc(${this.shifts * 100}% - ${this.shiftFactor - adjustFactor}px))`;
        // }else{
          card.style.transform = `translateX(calc(${this.shifts * 100}% - ${this.shiftFactor}px))`;
        // }
        
      });
    } else if (slider == "left-slider") {
      this.shifts++;
      this.leftChild--;
      this.rightChild++;
      // shift each slide by 100% + shiftFactor towards right => +;
      if(this.leftChild == 0){
        adjustFactor = -(this.teamCardCntnr.offsetWidth - visibleCards*this.cardWidth)/visibleCards;
      }
      cards.forEach((card,cardIndex) => {
        if(cardIndex > visibleCards ){
          card.style.transform = `translateX(calc(${this.shifts * 100}% + ${this.shiftFactor}px + ${adjustFactor}px))`;
        }else{
          card.style.transform = `translateX(calc(${this.shifts * 100}% + ${this.shiftFactor}px))`;
        }
      });
      this.handleChildCountChange();
    }
  }
  }

  handleWinResize() {
    let visibleCards = parseInt((this.teamCardCntnr.offsetWidth / this.cardWidth).toString());
    this.rightChild = this.teamCardCntnr.childElementCount - visibleCards - this.leftChild;
    this.handleChildCountChange();
  }

  ngOnInit() {
    // for (var i = 0; i <= 10; i++) {
    //   this.teammembers.push(this.teammember);
    // }
  }

  bindSliderHandler(){
    document.getElementById("slider").childNodes.forEach(node => {
      node.addEventListener('click', this.handleSliderClick);
    });
  }

  handleChildCountChange(){
    if(this.leftChild == 0 && this.rightChild > 0){
      document.getElementById('slider').style.justifyContent = "flex-end";
    }else{
      document.getElementById('slider').style.removeProperty("justify-content");
    }

    if(this.leftChild > 0 || this.rightChild > 0){
      this.bindSliderHandler();
    }
  }
  ngAfterContentInit() {
    // if (!this.teamCardCntnr) {
     this.bindSliderHandler();
  
      this.teamCardCntnr = document.getElementById("team-card-cntnr");
  
      window.addEventListener("resize", this.handleWinResize);;
   
      this.handleWinResize();
        // }
  }
  ngAfterViewChecked(){
    this.handleWinResize();
  }

  loadAllTeamMembers(emailID: string) {
    this.teamService.getAllByEmail(emailID).subscribe(teammembers => { this.teammembers = teammembers; });
    //console.log("All Blogs for team " + this.currentTeamID + " fetched succesfully.");
  }

  userCardClicked(email:string){
   // this.selectedTeammember = this.teammembers.filter();
  }
}
