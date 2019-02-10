import {Component, AfterViewInit} from '@angular/core';
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

export class DragDropListComponent implements AfterViewInit {

  private static _clickable = true;

  private _slideSpeed = 400;

  taken = [
    {title: 'Main item description', subitems: [ 'subitem 1', 'subitem 2', 'subitem 3', 'subitem 4']},
    {title: 'Get to work2', subitems: [ ]},
    {title: 'Get to work3', subitems: [ 'subitem 3', 'subitem 2']},
    {title: 'Get to work4', subitems: [ 'subitem 4', 'subitem 2']}
  ];

  doing = [
    {title: 'Main item description', subitems: [ 'subitem 1', 'subitem 2', 'subitem 3', 'subitem 4']},
    {title: 'Get to work2', subitems: [ ]},
    {title: 'Get to work3', subitems: [ 'subitem 3', 'subitem 2']},
    {title: 'Get to work4', subitems: [ 'subitem 4', 'subitem 2']}
  ];

  done = [
    {title: 'Main item description', subitems: [ 'subitem 1', 'subitem 2', 'subitem 3', 'subitem 4']},
    {title: 'Get to work2', subitems: [ ]},
    {title: 'Get to work3', subitems: [ 'subitem 3', 'subitem 2']},
    {title: 'Get to work4', subitems: [ 'subitem 4', 'subitem 2']}
  ];

  ngAfterViewInit(): void {
    $('.start-closed').slideUp(0);
  }

  private drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  private slideToggle(event) {
    if (DragDropListComponent._clickable) {
      DragDropListComponent._clickable = false;
      const element = $(event.target);
      element.parent().next('.slideable').slideToggle(this._slideSpeed).toggleClass('hidden');
      element.toggleClass('reverse');
      this.clickableCounter();
    }
  }

  private clickableCounter() {
    setTimeout(function() {
      DragDropListComponent._clickable = true;
    }, this._slideSpeed);
  }

}
