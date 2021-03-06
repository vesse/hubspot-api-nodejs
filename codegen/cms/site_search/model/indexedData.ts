/**
 * CMS Site Search
 * Use these endpoints for searching content on your HubSpot hosted CMS website(s).
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { SearchHitField } from './searchHitField';

/**
* The indexed data in HubSpot
*/
export class IndexedData {
    'id': string;
    'type': IndexedData.TypeEnum;
    'fields': { [key: string]: SearchHitField; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IndexedData.TypeEnum"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: SearchHitField; }"
        }    ];

    static getAttributeTypeMap() {
        return IndexedData.attributeTypeMap;
    }
}

export namespace IndexedData {
    export enum TypeEnum {
        LANDINGPAGE = <any> 'LANDING_PAGE',
        BLOGPOST = <any> 'BLOG_POST',
        SITEPAGE = <any> 'SITE_PAGE',
        DOCUMENT = <any> 'DOCUMENT',
        KNOWLEDGEARTICLE = <any> 'KNOWLEDGE_ARTICLE',
        LISTINGPAGE = <any> 'LISTING_PAGE'
    }
}
