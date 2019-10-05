import { Component, OnInit,ViewChild } from '@angular/core';
import { DataApiService } from '../services/data-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

resultado:Array<any>;
valuesObject:any;
CadenaB: string;
data: any;
consultItemSelected:any;
capturaID:any;
capturaProduct:string;
capturaFecha:any;
capturaCorreo:any;
capturaPrecio:any;
capturaDisponibles:any;
capturaVendidas:any;
datanombre:any;
CaracteristicasProduct:any;


  constructor(  private route: ActivatedRoute,
    private router: Router,private dataApi: DataApiService) { }

  ngOnInit() {
    this.getResulIso();
  }

  private getResulIso(){
    
      this.dataApi.getIso().subscribe((json)=>{   
        this.resultCompleted(json);
      });
  }
 resultCompleted(result:any):void{  
      this.resultado=result;

  }
 
  dataChangedPais(event:any){
  this.datanombre=event.name;

  }
  onGetSave(){
    this.dataApi.getForm(this.capturaID,
      this.capturaProduct,
      this.CaracteristicasProduct,
      this.capturaFecha,
      this.capturaCorreo,
      this.datanombre,
      this.capturaPrecio,
      this.capturaDisponibles,
      this.capturaVendidas).subscribe((json)=>{   
      this.resultCompleted(json);
      
      
    }); 
    this.capturaID=null;
      this.capturaProduct=null;
      this.CaracteristicasProduct=null;
      this.capturaFecha=null;
      this.capturaCorreo=null;
      this.data=null;
      this.capturaPrecio=null;
      this.capturaDisponibles=null;
      this.capturaVendidas=null;
     alert("Producto Resgitrado Correctamente");
  }

}

  
