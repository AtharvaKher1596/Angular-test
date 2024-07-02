import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;

  information: Array<any> = [];

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    this.isSubmitted = true;
    this.information.push({
      name: this.name, email: this.email, message: this.message
    });
    console.log(this.information);
  }
}
