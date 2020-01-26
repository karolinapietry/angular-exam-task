import { Component, Input } from '@angular/core';
import { NewsData } from '../news-data';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input()
  public news: NewsData;

  @Input()
  public index: number;

  constructor(private newsService: NewsService) { }

  remove() {
    this.newsService.removeNews(this.index);
  }

  plus() {
    this.newsService.votePlus(this.index);
  }
  minus() {
    this.newsService.voteMinus(this.index);
  }
}
