export class Hour {
  private temp: string;
  private tempMin: string;
  private tempMax: string;
  private humidity: string;
  private description: string;
  
  constructor(temp: string, tempMin: string, tempMax: string, humidity: string, description: string) {
    this.temp = temp;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.humidity = humidity;
    this.description = description;
  }
}
