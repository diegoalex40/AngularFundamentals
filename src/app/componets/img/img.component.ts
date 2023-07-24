import { Component, Input, Output, EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})

export class ImgComponent {
  img: string = "Valor init";

  @Input() set changeImg(newImg: string){
    this.img = newImg;
    console.log('changes: ', 'img => ', this.img);
  };

  @Input() alt: string = "";

  @Output() loaded = new EventEmitter();
  imageDefault = "../../../assets/images/default.jpg";
  //counter = 0;
  counterFn: number| undefined;

  constructor() {
    //Antes que render
    // No asyncronicos -- solo una vez
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes : SimpleChanges) {
    // Antes que el render
    // Cambios en los inputs -- n veces
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log(changes);
  }

  ngOnInit(): void {
    // Antes que el render
    // Asych -- fetch --- una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);

    //this.counterFn = window.setInterval(() => {
    // this.counter += 1;
    //  console.log('Run Counter');
    //}, 1000)
  }

  ngAfterViewInit(){
    // Despues del que el render
    // Padre e hijo hay un control
    console.log('AngAfterViewInit');
  }

  ngOnDestroy(): void {
    //Eliminar
    console.log('Drestruir el componente');
    window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log("log Hijo");
    this.loaded.emit(this.img);
  }
}
