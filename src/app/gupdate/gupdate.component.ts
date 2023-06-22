import { Component,OnInit } from '@angular/core';
import { groupModel } from '../groupname/groupModel';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { GapiService } from '../gapi.service';

  

@Component({
  selector: 'app-gupdate',
  templateUrl: './gupdate.component.html',
  styleUrls: ['./gupdate.component.css']
})
export class GupdateComponent implements OnInit {
    
  
  public dataid!: number;
  public groupname!:  groupModel;

  constructor(private activedroute: ActivatedRoute, private router: Router, private gapi: GapiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.gapi.fetchdata(this.dataid).subscribe((data: groupModel) => {
      this.groupname = data;
    })
  }

  gupdate() {
    this.gapi.gupdategroupname(this.groupname, this.dataid).subscribe((res: groupModel) => {
      this.router.navigate(["/groupname"])
    })
  }
}