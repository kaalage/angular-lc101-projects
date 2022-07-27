import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Buy groceries', 'Clean bathroom'];
   todoTitles = ["Today's Chores", "Next Week's Chores", "Next Month's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
