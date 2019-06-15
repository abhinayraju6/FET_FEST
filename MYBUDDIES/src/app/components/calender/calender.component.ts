import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'calender',
    templateUrl: './calender.component.html',
    styleUrls: ['./calender.component.css']
})

export class CalenderComponent implements OnInit {
    public eventsInMonth = {
        13: {
            ico: ['./assets/bday.png']
        },
        15: {
            ico: [
                './assets/bday.png',
                './assets/meeting.png'
            ]
        },
        28: {
            ico: [
                './assets/bday.png',
                './assets/meeting.png',
                './assets/clientcall.png'
            ]
        }
    }

    public calenders = [];
    public monthLabel = "";
    private flipCount = 0;

    getCalender() {

        let today = new Date();
        let y = today.getFullYear(), m = today.getMonth(), d = today.getDate();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

       

        let base = months.length,
            yfactor = parseInt((((this.flipCount < 0 ? this.flipCount - m - 1 : this.flipCount + m)) / base).toString()),
            mfactor = this.flipCount % base;

        m = (mfactor + m + base) % base;
        y += yfactor;

        console.table({ flipcount: this.flipCount, 'm+1': today.getMonth() + 1, base: base, mfactor: mfactor, month: m + 1, yfactor: yfactor, year: y });
        let _calender = [];
        let weekDates = {};

        for (let i = 1; i < 32; i++) {
            let dateI = new Date(y, m, i);
            let dayI = dateI.getDay();
            if (dateI.getMonth() == m) {
                if (weekDates.hasOwnProperty(dayI)) {
                    weekDates[dayI].push(dateI.getDate())
                } else {
                    weekDates[dayI] = [dateI.getDate()]
                }
            }
        }

        let reachedThreshold = false;
        /* prepare calender and normalize the week dates*/
        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            let dates = weekDates[dayIndex];
            let minDate = Math.min(...dates);
            /* lets normalize the calender */
            if (!reachedThreshold && minDate - 1 > 0) {
                dates.splice(0, 0, 32 + minDate - 1);
            } else {
                reachedThreshold = true;
            }

            /* lets add day title to the dates column */
            dates.splice(0, 0, days[dayIndex]);
            _calender.push(dates);
        }

        return { days: _calender, label: `${months[m]} - ${y}` };
    }

    calenderFlipCntrlClick(e) {
        let flipDir = e.target.name;

        if (flipDir == "up") {
            this.flipCount++;
            this.render(flipDir);

        } else if (flipDir == "down") {
            this.flipCount--;
            this.render(flipDir);
        }
        e.preventDefault();
    }

    applyEffect(dir) {
        let shutter = document.getElementById("cal-page-shutter");
        let page = document.getElementsByClassName("cal-comp-page")[0];
                  
        page.classList.remove("cal-comp-page-transit-param");        
        shutter.classList.remove("shutter-transit-param");
        shutter.classList.remove("shutter-transit-down");

        if (dir == "up") {
            
            shutter.classList.remove("shutter-up");

            setTimeout(()=>{
                shutter.classList.add("shutter-transit-param");
                page.classList.add("cal-comp-page-transit-param");
                shutter.classList.add("shutter-up");
                page.classList.add("page-flip-up");

            },7);          

        } else if (dir = "down") {
            shutter.classList.add("shutter-up");
            page.classList.add("page-flip-up");

            setTimeout(()=>{
                page.classList.add("cal-comp-page-transit-param");
                shutter.classList.add("shutter-transit-down");

                shutter.classList.remove("shutter-up");
                page.classList.remove("page-flip-up");

            },7);
        }
    }

    ngOnInit() {
        this.render();
    }

    private render = function (dir = null) {
        let calender = this.getCalender();
        if (!dir) {
            this.calenders.push(calender);            
        }else if(dir=="up"){
            if(this.calenders.length == 2){
                let ultimateCal = this.calenders;
                ultimateCal.shift();
                ultimateCal.push(calender);
                this.calenders = ultimateCal;
            }else{
                this.calenders.push(calender);
            }
            setTimeout(() => {
                this.applyEffect(dir);
            }, 5); 
        }else if(dir=="down"){
            if(this.calenders.length == 2){
                let ultimateCal = this.calenders;
                ultimateCal.pop();
                ultimateCal.unshift(calender);
                this.calenders = ultimateCal;
            }else{
                this.calenders.unshift(calender);
            }
            setTimeout(() => {
                this.applyEffect(dir);
            }, 5); 
        }
        
    }
}