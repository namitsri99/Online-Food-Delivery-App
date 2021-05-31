import { Component, OnInit } from '@angular/core';
import { Items } from '../model/items';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items:Items[];
  err:string;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private itemService:ItemService) { }
  /*Here the getAll method is called to retrieve all the items*/
  ngOnInit(): void {
    this.itemService.getAll().subscribe(
      (data) => this.items = data,
      (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
    );
  }

/*Defining the delete method for deleting a particular item*/
  delete(itemId: number) {
    if (confirm("Are you sure?")) {
      this.itemService.deleteById(itemId).subscribe(
        () => { this.items.splice(this.items.findIndex(r => r.itemId == itemId), 1) }
      );
    }
  }

}

