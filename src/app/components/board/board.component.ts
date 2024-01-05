import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgClass],
  templateUrl: './board.component.html',
})
export class BoardComponent {
  @Input()
  color: string = 'sky-100'

  @Input()
  location: boolean = false

  @Input()
  fontSize: string = 'xl'

  @Input()
  fontWeight: string = 'light'

  get colors(){
    return {
      'bg-sky-100': this.color==='sky-100',
      'text-sky-900': this.color==='sky-100' || this.color==='sky-200' || this.color==='sky-300' || this.color==='sky-400' || this.color==='sky-500',
      'bg-sky-200': this.color==='sky-200',
      'bg-sky-300': this.color==='sky-300',
      'bg-sky-400': this.color==='sky-400',
      'bg-sky-500': this.color==='sky-500',
      'bg-sky-600': this.color==='sky-600',
      'bg-sky-700': this.color==='sky-700',
      'bg-sky-800': this.color==='sky-800',
      'bg-sky-900': this.color==='sky-900',
      'text-white': this.color==='sky-600' || this.color==='sky-700' || this.color==='sky-800' || this.color==='sky-900',
      'flex justify-center items-center': this.location,
      'text-xl': this.fontSize==='xl',
      'text-sm': this.fontSize==='sm',
      'font-bold': this.fontWeight==="bold"
    }
  }
}
