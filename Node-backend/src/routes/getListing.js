import { fakeListings } from "./fake-data";
import { Boom } from "@hapi/boom";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, res)=>{
        const id= req.params.id;
        const listings =  fakeListings.find(listing=>listing.id == id);
        if(!listings) throw Boom.notfound(`Listing does not exist for ${id}`);
        return listing;
    }
}