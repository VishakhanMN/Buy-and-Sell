import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  public email: string  = '';
  public message: string = '';
  listings: Listing[] = [];
  public listing: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listings = fakeListings;
    this.listing = this.listings.find(x=>x.id === id);
    this.message = `Hi I am interested in your ${this.listing.name.toLowerCase()}!`;
  }

  public sendMessage(): void{
    alert("The message has been sent");
    this.router.navigateByUrl('/listings');
  }

}
