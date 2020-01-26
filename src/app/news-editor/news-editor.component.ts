import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.scss']
})
export class NewsEditorComponent implements OnInit {
  id: number;
  createdImageUrl: string;
  createdTitle: string;
  createdDescription: string;
  vote: number;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.createdImageUrl = '';
    this.createdTitle = '';
    this.createdDescription = '';
    this.vote = 0;
  }

  addNews() {
    function getRandomId() {
      return Math.floor((Math.random() * 6) + 1);
    }

    this.id = (typeof this.id === 'undefined') ? getRandomId() : this.id;
    this.newsService.addNews(this.id, this.createdImageUrl, this.createdTitle, this.createdDescription, this.vote);
    this.createdImageUrl = '';
    this.createdTitle = '';
    this.createdDescription = '';
    this.vote = 0;
  }
}
