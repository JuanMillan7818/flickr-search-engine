/**
 * 
 * @swagger
 *  components:
 *    schemas:
 *      ReqSearchFlickerDTO:
 *        type: object
 *        required:
 *          - tags
 *        properties:
 *          tags:
 *            type: string
 *            description: keyword of what you want to search for on Flickr.
 *        example:
 *           tags: cats 
*/
export class SearchFlickerDTO {
    tag: string | undefined;
}