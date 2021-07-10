import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-link',
  templateUrl: './home-link.component.html',
  styleUrls: ['./home-link.component.scss'],
})
export class HomeLinkComponent implements OnInit {
  leftArrow = faChevronLeft;
  constructor() {}

  ngOnInit(): void {}
}
