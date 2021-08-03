import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss']
})
export class CoachingComponent implements OnInit {

  coachingList = [
    "10h-10h30",
    "10h30-11h",
    "11h-11h30",
    "11h30-12h",
    "15h-15h30",
    "15h30-16h",
    "16h-16h30",
    "16h30-17h",
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
