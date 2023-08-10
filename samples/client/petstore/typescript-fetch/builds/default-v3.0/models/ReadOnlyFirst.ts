// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReadOnlyFirst
 */
export interface ReadOnlyFirst {
    /**
     * 
     * @type {string}
     * @memberof ReadOnlyFirst
     */
    readonly bar?: string;
    /**
     * 
     * @type {string}
     * @memberof ReadOnlyFirst
     */
    baz?: string;
}

/**
 * Check if a given object implements the ReadOnlyFirst interface.
 */
export function instanceOfReadOnlyFirst(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReadOnlyFirstFromJSON(json: any): ReadOnlyFirst {
    return ReadOnlyFirstFromJSONTyped(json, false);
}

export function ReadOnlyFirstFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadOnlyFirst {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bar': !exists(json, 'bar') ? undefined : json['bar'],
        'baz': !exists(json, 'baz') ? undefined : json['baz'],
    };
}

export function ReadOnlyFirstToJSON(value?: ReadOnlyFirst | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baz': value.baz,
    };
}

