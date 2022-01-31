/**
 * 
 * @swagger
 *  components:
 *    schemas:
 *      PhotosFlickr:
 *        type: object
 *        required:
 *          - title
 *          - image
 *          - author
 *        properties:
 *          title:
 *            type: string
 *            description: file main title.
 *          image:
 *            type: url
 *            description: resource url in .jpg format.
 *          author:
 *            type: string
 *            description: name of the author of the image.
 *        example:           
 *           title: cats
 *           image: https//www.flicker/image1.jpg
 *           author: Jhon 
*/
export class PhotosFlickr {
    title: string;
    image: string;
    author: string;

    constructor(title: string, image: string, author: string) {
        this.title = title;
        this.image = image;
        this.author = author;
    }
}