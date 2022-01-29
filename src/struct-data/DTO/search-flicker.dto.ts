/**
 * 
 * @swagger
 *  components:
 *    schemas:
 *      ReqSearchFlickerDTO:
 *        type: object
 *        required:
 *          - tag
 *        properties:
 *          tag:
 *            type: string
 *            description: keyword of what you want to search for on Flickr.
 *        example:
 *           tag: cats 
*/
export class SearchFlickerDTO {
    tag: string | undefined;
}