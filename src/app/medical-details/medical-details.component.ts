import { Component } from '@angular/core';
import { MedicalService } from '../medical.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medical-details',
  templateUrl: './medical-details.component.html',
  styleUrl: './medical-details.component.css'
})
export class MedicalDetailsComponent {
  details2: any[] = []; 
  id: any;
  ans:any; 
  
  
  constructor(private  ps: MedicalService, private route:ActivatedRoute,private router:Router){
    this.id = this.route.snapshot.paramMap.get('id');
    this.details2 = this.ps.getPhone();
    for(let items of this.details2){
      if(items.id == this.id){
        this.ans = items;
      }
    }
   
  }

  buy(){
    this.router.navigate(['buy']);
  }
}
