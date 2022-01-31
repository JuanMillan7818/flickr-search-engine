import Axios from 'axios';
import { PhotosFlickr } from '../struct-data/response/PhotosFlickr';

export const getPhotoFlickr = async (url: string): Promise<PhotosFlickr[]> =>{
    if(!url) {
        throw new Error('A valid url is required');
    }
    return await Axios.get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(({ data }) => {        
        let json: any | undefined;
        if(typeof(data) === 'string') {
            const transform: string = data.substring(15, data.length-1)
            json = JSON.parse(transform);
        }
        if(!json) {
            throw new Error('Got response but does not support JSON format');
        }
                
        let images: PhotosFlickr[] = [];
        json.items.map((image: any) => {
            let tmp: PhotosFlickr = new PhotosFlickr(image.title, image.media.m, image.author); 
            images.push(tmp);
        });

        return images;
    })
    .catch((err: Error) => {
        throw new Error('An error has occurred with the Flickr service');
    });
}
