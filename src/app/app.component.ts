import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';
//toggle sidebar while clicking menubtn
sidebaropened:boolean=true
toggle(){
  this.sidebaropened = !this.sidebaropened //give ! not oprtr to make false(bcs above we give true)
}


}
