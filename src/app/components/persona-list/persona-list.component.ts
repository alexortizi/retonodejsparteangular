import { Component, OnInit } from '@angular/core';
import{PersonasService} from '../../services/personas.service';
@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  personas:any=[];
  constructor(
    private personasService:PersonasService
  ) { }

  ngOnInit(): void {
    this.getPersonas();
  }
  getPersonas(){
    this.personasService.getPersonas().subscribe(
      res=>{
        this.personas=res;
      },
      err=>console.error(err)
    )
  }
  deletePersona(id:number){
    this.personasService.deletePersona(id)
    .subscribe(
      res=>{
        console.log(res);
        alert('Persona Eliminada');
        this.getPersonas();
      },
      err=>console.error(err)
    )
  }
  editGame(id:number){
    console.log(id);
  }

}
