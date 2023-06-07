import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {

  listings: Listing[] = [];
  public listing: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listings = fakeListings;
    this.listing = this.listings.find(x=>x.id === id);
  }

  public onSubmit(): void{
    alert('Changes to listing saved...');
    this.router.navigateByUrl('/my-listings');
  }

}
