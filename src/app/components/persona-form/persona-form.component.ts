import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import{ActivatedRoute,Router} from '@angular/router';
import{PersonasService} from '../../services/personas.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  persona:Persona={
    id:0,
    nombres:'',
    apellidos:'',
    edad:18,
    fechaIngreso:new Date(),
    activo:true
    
  }
  isSuccessful:boolean = false;
  isPersonaFailed:boolean = false;
  errorMessage:String = '';

  edit:boolean=false;

  constructor(
    private personasServices:PersonasService,
    private router:Router,
    private activedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params=this.activedRoute.snapshot.params;
    if(params.id){
      this.personasServices.getPersona(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.persona=res;
          this.edit=true;
        },
        err=>console.error(err)
      )
    }
  }

  saveNewPersona(){
    delete this.persona.id;
    
    this.personasServices.savePersona(this.persona)
    .subscribe(
      res=>{
        console.log(res);
        this.isPersonaFailed = false;
        this.isSuccessful = true;
        alert('Persona Creada');
        this.router.navigate(['/personas']);
      },
      err=>{
        console.error(err);
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
        this.isPersonaFailed = true;
      }
    )
  }

  updatePersona(){
   this.personasServices.updatePersona(this.persona.id,this.persona)
   .subscribe(
    res=>{
      console.log(res);
      this.isPersonaFailed = false;
      this.isSuccessful = true;
      alert('Persona Actualizada');
      this.router.navigate(['/personas']);
    },
    err=>{
      console.error(err);
      this.errorMessage = err.error.message;
      this.isPersonaFailed = true;
      this.isSuccessful = false;
    }
   )
  }

}
