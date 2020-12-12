import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  public title = 'Are you sure?';
  public message = 'Do you really want to remove this item?';
  public confirmButtonLabel = 'Confirm';
  public confirmButtonColor = 'accent';
  public cancelButtonLabel = 'Cancel';

  /**
   * Constructor
   *
   * @param {MatDialogRef<ConfirmDialogComponent>} dialogRef
   */
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {
  }

}
