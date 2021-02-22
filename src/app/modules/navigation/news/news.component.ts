import { Component, OnInit } from '@angular/core';
import { INews } from '../../../models/inews';

const data: INews[] = [
  {
    title: 'Sed ut perspiciatis unde omnis',
    totalRead: 19,
    totalComment: 2,
    content: 'Iste natus error sit voluptatem accusantium doloremque laudantium',
    completed: true
  },
  {
    title: 'Sed ut perspiciatis unde omnis',
    totalRead: 20,
    totalComment: 8,
    content: 'Iste natus error sit voluptatem accusantium doloremque laudantium',
    completed: false
  },
  {
    title: 'Sed ut perspiciatis unde omnis',
    totalRead: 35,
    totalComment: 1,
    content: 'Iste natus error sit voluptatem accusantium doloremque laudantium',
    completed: false
  },
  {
    title: 'Sed ut perspiciatis unde omnis',
    totalRead: 40,
    totalComment: 6,
    content: 'Iste natus error sit voluptatem accusantium doloremque laudantium',
    completed: false
  },
  {
    title: 'Sed ut perspiciatis unde omnis',
    totalRead: 59,
    totalComment: 4,
    content: 'Iste natus error sit voluptatem accusantium doloremque laudantium',
    completed: false
  }
];

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public data = data;

  constructor() { }

  ngOnInit(): void {
  }

}
