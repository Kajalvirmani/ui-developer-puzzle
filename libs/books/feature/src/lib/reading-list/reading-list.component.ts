import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { getReadingList, markAsFinished, removeFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  snackBarRef: any;
  constructor(private readonly store: Store,private _snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));  
  }

  markBookAsFinished(book) {
    this._snackBar.open(`Finished book ${book.title} `, 'DONE',{
      duration:3000
    });
    this.store.dispatch(markAsFinished({ item :book}));
  }
}
