import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //cuando se modulariza se necesita decirselo
import { BannerComponent} from './components/banner/banner.component'; //a angular
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({ //esto se llama decorador

    declarations: [
            BannerComponent,
            HomeComponent,
    ],
    imports: [
        CommonModule, //Se necesita importar para que reconozca estas directivas
        SharedModule,
        HomeRoutingModule,
    ]
})
export class HomeModule {

}