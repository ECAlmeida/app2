import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services'
import { Oferta } from '../shared/oferta.model'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) {  }
  

  ngOnInit() {
    this.getOfertas()
  //  this.ofertas = this.ofertas;
  }
  
    getOfertas() {
      //this.ofertasService.getOfertas().subscribe (response => console.log('teste'))
      this.ofertasService.getOfertas().subscribe((ofertas: Oferta[]) => {
        this.ofertas = ofertas;

        
      });
     }
    
    
    
    
    //this.ofertas = this.ofertasService.getOfertas()
    //console.log(this.ofertas)
    //this.ofertasService.getOfertas()
    //.then((ofertas: Oferta[])=>{
     //   this.ofertas = ofertas
     // })
      
   // .catch((param: any) => {
    //  console.log(param)
    //})
 
  

}
