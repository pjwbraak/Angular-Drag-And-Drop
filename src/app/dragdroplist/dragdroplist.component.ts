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
    {title: 'Get to work', subitems: [ 'subitem 1', 'subitem 2']},
    {title: 'Get to work2', subitems: [ 'subitem 2', 'subitem 2']},
    {title: 'Get to work3', subitems: [ 'subitem 3', 'subitem 2']},
    {title: 'Get to work4', subitems: [ 'subitem 4', 'subitem 2']}
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

  slideSpeed = 0;

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
    const element = $(event.target);
        element.parent().next('.slideable').slideToggle(this.slideSpeed);
        element.toggleClass('reverse');
    }
}
