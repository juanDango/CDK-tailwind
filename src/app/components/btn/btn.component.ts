import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input()
  typeBtn: 'button' | 'submit' | 'reset' = 'button';

  @Input()
  color: string = 'primary'

  get colors(){
    return {
      'bg-success-700': this.color==='success',
      'hover:bg-success-800': this.color==='success',
      'focus:ring-success-300': this.color==='success',
      'bg-primary-700': this.color==='primary',
      'hover:bg-primary-800': this.color==='primary',
      'focus:ring-primary-300': this.color==='primary',
      'bg-red-700': this.color==='red',
      'hover:bg-red-800': this.color==='red',
      'focus:ring-red-300': this.color==='red',
      'bg-sky-700': this.color==='sky',
      'hover:bg-sky-800': this.color==='sky',
      'focus:ring-sky-300': this.color==='sky'
    }
  }
}
