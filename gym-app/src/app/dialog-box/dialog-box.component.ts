import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {
  username: string = "";
  password: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.username = data.username;
      this.password = data.password;
    }
  }
}
