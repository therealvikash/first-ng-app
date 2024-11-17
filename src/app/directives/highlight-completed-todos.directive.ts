import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodos]',
  standalone: true
})
export class HighlightCompletedTodosDirective {
  isCompleted = input(false);
  constructor() { }

  el = inject(ElementRef)
  stylesEffects = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = 'olive';
      this.el.nativeElement.style.color = 'black';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  })

}
