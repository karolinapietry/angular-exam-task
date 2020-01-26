export class NewsData {
  public index: number;
  public id: number;
  public imageUrl: string;
  public title: string;
  public description: string;
  public vote: number;

  constructor(
    { id, imageUrl, title, description, vote }: { id: number; imageUrl: string; title: string; description: string; vote: number; }) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.vote = vote;
  }
}
