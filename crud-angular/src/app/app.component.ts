import { Component, OnInit } from '@angular/core';
import { AuthService } from './filmes/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crud-angular';

  font_size = 16;

  //Aumentar, diminuir e redefinir tamanho da fonte
  setFontSize(idd: string) {

    //Calcular tamanho da fonte
    if(idd === 'a+' && this.font_size < 22){
      this.font_size += 2;

    } else if(idd === 'a-' && this.font_size > 12) {
      this.font_size -= 2;
    } else if(idd === 'a') {
      this.font_size = 16;
    }

    //Definir tamanho da fonte
    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
       htmlRoot.style.fontSize = `${this.font_size}px`;
    }
  }
  constructor(public authService:AuthService){ }
  ngOnInit(){ }
}
