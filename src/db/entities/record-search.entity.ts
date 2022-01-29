import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * 
 * @swagger
 *  components:
 *    schemas:
 *      RecordSearch:
 *        type: object
 *        required:
 *          - id
 *          - search_tags
 *          - date_search
 *        properties:
 *          id:
 *            type: number
 *            description: autoincrement id created by database.
 *          search_tags:
 *            type: string
 *            description: search string.
 *          date_search:
 *            type: date
 *            description: the date the search was made.
 *        example:           
 *           id: 1
 *           search_tags: cats
 *           date_search: 2022-01-28T18:36:29.577Z 
*/
@Entity({name: 'record_search'})
export class RecordSearch {
    constructor(search: string) {
        this.search = search;
    }

    @PrimaryGeneratedColumn({name: 'id_record'})
    id: number;

    @Column({name: 'tags', type: 'varchar', length: 40})
    search: string;

    @Column({name: 'date_search', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    date_search: Date;
}