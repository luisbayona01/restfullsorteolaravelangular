import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contenido',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
public status_session:any;
  constructor() { 
  	//location.reload()
  	
//this.status_session=sessionStorage.getItem("statussesion");

  }

  ngOnInit() {
  }

}
