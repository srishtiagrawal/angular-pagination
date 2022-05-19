import { Directive, ElementRef, EventEmitter, Input, Renderer2, Output } from '@angular/core';

@Directive({
  selector: '[appPagination]',
  exportAs: 'pagination',
})
export class PaginationDirective {
  @Input() totalPages: number;
  @Output() onChangeEventEmitter = new EventEmitter()
  pageNo: number = 1;
  constructor(private render: Renderer2, private el: ElementRef) {}
  onNext() {
    this.setPage(Math.min(this.totalPages, this.pageNo + 1));
  }
  onPrevious() {
    this.setPage(Math.max(1, this.pageNo - 1));
  }
  onFirst() {
    this.setPage(1);
  }
  onLast() {
    this.setPage(this.totalPages);
  }
  setPage(pageno) {
    this.pageNo = pageno;
    this.render.setProperty(this.el.nativeElement, "value", pageno);
    this.onChangeEventEmitter.emit(pageno);
    console.log(this.pageNo);
  }
}
