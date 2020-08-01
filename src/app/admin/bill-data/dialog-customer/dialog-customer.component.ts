import { Component, OnInit, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DialogData } from '../bill-form-create/bill-form-create.component';
import { Customer } from '../../customer-data/customer';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.css']
})
export class DialogCustomerComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogCustomerComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Customer) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
