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


/**
 * 
 * @export
 */
export const EnumClass = {
    Abc: '_abc',
    Efg: '-efg',
    Xyz: '(xyz)'
} as const;
export type EnumClass = typeof EnumClass[keyof typeof EnumClass];


export function EnumClassFromJSON(json: any): EnumClass {
    return EnumClassFromJSONTyped(json, false);
}

export function EnumClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumClass {
    return json as EnumClass;
}

export function EnumClassToJSON(value?: EnumClass | null): any {
    return value as any;
}

