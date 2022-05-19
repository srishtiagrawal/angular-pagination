import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PicsumService } from '../picsum.service';

@Component({
  selector: 'app-picsum',
  templateUrl: './picsum.component.html',
  styleUrls: ['./picsum.component.css'],
})
export class PicsumComponent implements OnInit {
  picsum: Observable<any>;
  constructor(private picsumService: PicsumService) {}
  ngOnInit(): void {
    this.getImages(1);
  }
  onPageChange(pageno: number) {
    this.getImages(pageno);
  }
  getImages(pageno: number) {
    this.picsum = this.picsumService.getPicsum(pageno);
  }
}
