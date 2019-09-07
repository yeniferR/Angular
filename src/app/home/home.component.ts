import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
valor:any='';
resultado:any[];
valuesObject:any;
CadenaB: string;
miLista:Array< any>=[];
data: any =[];

  constructor(  private route: ActivatedRoute,
    private router: Router,private dataApi: DataApiService) { }

  ngOnInit() {
  }

  getResulIso(){
    if (this.valor ==='') {
      this.resultado = null;
      alert('Por favor corrija el valor ingresado');
      
    } else{
      this.dataApi.getIso(this.valor).subscribe((json)=>{   
        this.resultCompleted(json);
      }, error =>{

      alert("Por favor ingrese un valor valido");
      console.log(error)
      this.resultado = null;
      });
  }
  }
  private resultCompleted(result:any):void{    
    this.resultado =new Array<any>();
      this.resultado.push(result);
  }
 

}

  
