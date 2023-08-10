// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ApiRecordUtils, knownRecordFactories} from "../runtimeSagasAndRecords";
import {getApiEntitiesState} from "../ApiEntitiesSelectors"
import {List, Record, RecordOf, Map} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";
import {select, call} from "redux-saga/effects";

import {
    ItemId,
} from './ItemId';



export const ItemIdRecordProps = {
    recType: "ItemIdApiRecord" as "ItemIdApiRecord",
    id: "",
    type: "",
};

export type ItemIdRecordPropsType = typeof ItemIdRecordProps;
export const ItemIdRecord = Record(ItemIdRecordProps, ItemIdRecordProps.recType);
export type ItemIdRecord = RecordOf<ItemIdRecordPropsType>;

knownRecordFactories.set(ItemIdRecordProps.recType, ItemIdRecord);


class ItemIdRecordUtils extends ApiRecordUtils<ItemId, ItemIdRecord> {
    public normalize(apiObject: ItemId, asEntity?: boolean): ItemId {
        (apiObject as any).recType = ItemIdRecordProps.recType;
        return apiObject;
    }

    public toApi(record: ItemIdRecord): ItemId {
        const apiObject = super.toApi(record);
        return apiObject;
    }
}

export const itemIdRecordUtils = new ItemIdRecordUtils();


