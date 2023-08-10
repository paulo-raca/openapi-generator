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

import {ApiRecordUtils, knownRecordFactories, appFromJS, NormalizedRecordEntities} from "../runtimeSagasAndRecords";
import {getApiEntitiesState} from "../ApiEntitiesSelectors"
import {List, Record, RecordOf, Map} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";
import {select, call} from "redux-saga/effects";

import {
    FindPetsByStatusResponse,
} from './FindPetsByStatusResponse';

import {
    Pet,
} from './Pet';
import {
    ResponseMeta,
} from './ResponseMeta';

import {
    PetRecord,
    petRecordUtils
} from './PetRecord';
import {
    ResponseMetaRecord,
    responseMetaRecordUtils
} from './ResponseMetaRecord';

export const FindPetsByStatusResponseRecordProps = {
    recType: "FindPetsByStatusResponseApiRecord" as "FindPetsByStatusResponseApiRecord",
    meta: ResponseMetaRecord(),
    data: (PetRecord(), null as List<PetRecord> | null),
};

export type FindPetsByStatusResponseRecordPropsType = typeof FindPetsByStatusResponseRecordProps;
export const FindPetsByStatusResponseRecord = Record(FindPetsByStatusResponseRecordProps, FindPetsByStatusResponseRecordProps.recType);
export type FindPetsByStatusResponseRecord = RecordOf<FindPetsByStatusResponseRecordPropsType>;

knownRecordFactories.set(FindPetsByStatusResponseRecordProps.recType, FindPetsByStatusResponseRecord);


class FindPetsByStatusResponseRecordUtils extends ApiRecordUtils<FindPetsByStatusResponse, FindPetsByStatusResponseRecord> {
    public normalize(apiObject: FindPetsByStatusResponse, asEntity?: boolean): FindPetsByStatusResponse {
        (apiObject as any).recType = FindPetsByStatusResponseRecordProps.recType;
        responseMetaRecordUtils.normalize(apiObject.meta);
        if (apiObject.data) { petRecordUtils.normalizeArray(apiObject.data); } 
        return apiObject;
    }

    public toApi(record: FindPetsByStatusResponseRecord): FindPetsByStatusResponse {
        const apiObject = super.toApi(record);
        apiObject.meta = responseMetaRecordUtils.toApi(record.meta);
        if (record.data) { apiObject.data = petRecordUtils.toApiArray(record.data); } 
        return apiObject;
    }

    public fromApiPassthrough(apiObject: FindPetsByStatusResponse): List<PetRecord> {
        if (!apiObject.data) {return List<PetRecord>(); }
        const normalizedApiObject = petRecordUtils.normalizeArray(apiObject.data);
        return appFromJS(normalizedApiObject);
    }

    public fromApiPassthroughAsEntities(apiObject: FindPetsByStatusResponse): NormalizedRecordEntities {
        if (!apiObject.data) {return {entities: {}, result: List<string>()}; }
        return ApiRecordUtils.toNormalizedRecordEntities(petRecordUtils.normalizeArrayAsEntities(apiObject.data), true);
    }
}

export const findPetsByStatusResponseRecordUtils = new FindPetsByStatusResponseRecordUtils();


