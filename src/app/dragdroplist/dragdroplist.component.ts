import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import * as $ from 'jquery';

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'app-dragdroplist',
  templateUrl: 'dragdroplist.component.html',
  styleUrls: ['dragdroplist.component.css'],
})
export class DragDropListComponent {

  taken = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  doing = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  slideSpeed = 400;
  dropdownIconClickable = true;
  countingdown = false;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  slideToggle(event) {
    if (this.dropdownIconClickable) {
      console.log(this.countingdown);
        if (this.countingdown === false) {
          // this.startCountdown();
          const element = $(event.target);
          element.parent().next('.slideable').slideToggle(this.slideSpeed);
          element.toggleClass('reverse');
        } else {
          return;
        }
      }
  }

//   startCountdown() {
//     this.countingdown = true;
//     console.log(DragDropListComponent);
//     setTimeout(function() {
//       console.log('in timeout timer');
//       this.countingdown = false;
//       console.log(this.countingdown);
//     }, this.slideSpeed);
//   }
}
