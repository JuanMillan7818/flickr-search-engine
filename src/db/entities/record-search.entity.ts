import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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