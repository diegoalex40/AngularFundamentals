import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda2';
  showImg = true;
  imgParent = "https://media.tycsports.com/files/2022/06/14/440395/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp";

  onLoaded(img : string){
    console.log("log padre", img)
  }

  toggleImg(): void {
    this.showImg = !this.showImg;
  }

}
