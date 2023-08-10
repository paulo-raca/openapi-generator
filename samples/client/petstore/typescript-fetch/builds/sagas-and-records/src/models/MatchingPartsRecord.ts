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
    MatchingParts,
} from './MatchingParts';

import {
    Part,
} from './Part';

import {
    PartRecord,
    partRecordUtils
} from './PartRecord';

export const MatchingPartsRecordProps = {
    recType: "MatchingPartsApiRecord" as "MatchingPartsApiRecord",
    connected: (PartRecord(), List<PartRecord>()),
    related: (PartRecord(), List<PartRecord>()),
};

export type MatchingPartsRecordPropsType = typeof MatchingPartsRecordProps;
export const MatchingPartsRecord = Record(MatchingPartsRecordProps, MatchingPartsRecordProps.recType);
export type MatchingPartsRecord = RecordOf<MatchingPartsRecordPropsType>;

knownRecordFactories.set(MatchingPartsRecordProps.recType, MatchingPartsRecord);


class MatchingPartsRecordUtils extends ApiRecordUtils<MatchingParts, MatchingPartsRecord> {
    public normalize(apiObject: MatchingParts, asEntity?: boolean): MatchingParts {
        (apiObject as any).recType = MatchingPartsRecordProps.recType;
        partRecordUtils.normalizeArray(apiObject.connected);
        partRecordUtils.normalizeArray(apiObject.related);
        return apiObject;
    }

    public toApi(record: MatchingPartsRecord): MatchingParts {
        const apiObject = super.toApi(record);
        apiObject.connected = partRecordUtils.toApiArray(record.connected);
        apiObject.related = partRecordUtils.toApiArray(record.related);
        return apiObject;
    }
}

export const matchingPartsRecordUtils = new MatchingPartsRecordUtils();


