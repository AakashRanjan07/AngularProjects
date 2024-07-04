import { Component } from '@angular/core';
import { MedicalService } from '../medical.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medical-list',
  templateUrl: './medical-list.component.html',
  styleUrl: './medical-list.component.css'
})
export class MedicalListComponent {

  id: number = 0;  
  details: any[] = []; 
  constructor(private ps: MedicalService, private router : Router){
    this.details = this.ps.getPhone(); 
  }
  prodDesc(id : number){
    this.router.navigate(['phone-details', id]);
  }
}
