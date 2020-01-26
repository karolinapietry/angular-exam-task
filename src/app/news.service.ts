import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';
import newsList from './news.json';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  onChange = new EventEmitter();
  public news = newsList;
  item: NewsData[] = newsList.map(news =>
    new NewsData(news.id)
  );

  constructor() { }

  public getNewsList(): NewsData[] {
    return this.news.slice();
  }

  public compareNews() {
    function compare(a, b) {
      const A = a.vote;
      const B = b.vote;
      let comparison = 0;
      if (A > B) {
        comparison = -1;
      } else if (A < B) {
        comparison = 1;
      }
      return comparison;
    }
    return this.news.sort(compare);
  }

  public addNews(
    id: number,
    imageUrl: string,
    title: string,
    description: string,
    vote: number
  ) {
    this.news.push(new NewsData({ id, imageUrl, title, description, vote }));
    this.onChange.emit();
  }

  public removeNews(index: number) {
    this.news.splice(index, 1);
    this.onChange.emit();
  }


  public votePlus(index: number) {
    this.news[index].vote += 1;
    this.onChange.emit();
  }
  public voteMinus(index: number) {
    this.news[index].vote -= 1;
    this.onChange.emit();
  }
}
