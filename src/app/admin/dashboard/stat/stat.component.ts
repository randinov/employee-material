import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: any;
  @Input() icon: any;
  @Input() count: any;
  @Input() label: any;
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
