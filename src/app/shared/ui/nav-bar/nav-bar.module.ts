import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from 'src/app/home/feature/home/home-routing.module';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class NavBarComponentModule {}
