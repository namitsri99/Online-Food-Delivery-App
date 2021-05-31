import { Component, OnInit } from '@angular/core';
import { Items } from '../model/items';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-user-item-list',
  templateUrl: './user-item-list.component.html',
  styleUrls: ['./user-item-list.component.css']
})
export class UserItemListComponent implements OnInit {

  uitems:Items[];
  err:string;

  /*Here the service class used is passed as parameter in constructor*/
  constructor(private itemsService:ItemService) { }

  /*Here getAll method is called to retrieve all the items of a user*/
  ngOnInit(): void {
    this.itemsService.getAll().subscribe(
      (data) => this.uitems = data,
      (err) => { console.log (err); this.err = "sorry. unable to retrieve data"}
    );
  }}