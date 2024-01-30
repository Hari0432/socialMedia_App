import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.page.html',
  styleUrls: ['./next-page.page.scss'],
})
export class NextPagePage implements OnInit {
  items = [];
  index = [];
  constructor() { }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 15; i++) {
      this.items.push(`User ${count + i}`);
      this.index = this.items;
    }
    
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  
  textInput: string = '';
  textList: string[] = [];

  sendText() {
    this.textList.push(this.textInput);
    this.textInput = ''; 
  }

}
