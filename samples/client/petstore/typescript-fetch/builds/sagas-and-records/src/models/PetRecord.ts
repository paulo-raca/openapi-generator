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
    Pet,
    PetStatusEnum,
} from './Pet';

import {
    Category,
} from './Category';
import {
    DeploymentRequestStatus,
} from './DeploymentRequestStatus';
import {
    Tag,
} from './Tag';
import {
    WarningCode,
} from './WarningCode';

import {
    CategoryRecord,
    categoryRecordUtils
} from './CategoryRecord';
import {
    TagRecord,
    tagRecordUtils
} from './TagRecord';

export const PetRecordProps = {
    recType: "PetApiRecord" as "PetApiRecord",
    id: "-1",
    friendId: null as string | null,
    otherFriendIds: List<string>(),
    friendAge: 0,
    age: 2,
    isHappy: true,
    isTall: false,
    category: CategoryRecord(),
    optionalCategory: (CategoryRecord(), null as CategoryRecord | null),
    name: "",
    _entries: (CategoryRecord(), null as List<CategoryRecord> | null),
    surname: null as string | null,
    photoUrls: List<string>(),
    warningStatus: WarningCode.ReduceVolumeRangeToAvoidLargeSteps,
    depStatus: null as DeploymentRequestStatus | null,
    alternateStatus: DeploymentRequestStatus.New,
    otherDepStatuses: List<DeploymentRequestStatus>(),
    tags: (TagRecord(), List<TagRecord>()),
    optionalTags: (TagRecord(), null as List<TagRecord> | null),
    status: PetStatusEnum.Pending,
    regions: null as List<List<string | null>> | null,
};

export type PetRecordPropsType = typeof PetRecordProps;
export const PetRecord = Record(PetRecordProps, PetRecordProps.recType);
export type PetRecord = RecordOf<PetRecordPropsType>;

knownRecordFactories.set(PetRecordProps.recType, PetRecord);

export const PetRecordEntityProps = {
    ...PetRecordProps,
    recType: "PetApiRecordEntity" as "PetApiRecordEntity",
    category: "-1",
    optionalCategory: null as string | null,
    _entries: null as List<string> | null,
    tags: List<string>(),
    optionalTags: null as List<string> | null,
};

export type PetRecordEntityPropsType = typeof PetRecordEntityProps;
export const PetRecordEntity = Record(PetRecordEntityProps, PetRecordEntityProps.recType);
export type PetRecordEntity = RecordOf<PetRecordEntityPropsType>;

knownRecordFactories.set(PetRecordEntityProps.recType, PetRecordEntity);

class PetRecordUtils extends ApiRecordUtils<Pet, PetRecord> {
    public normalize(apiObject: Pet, asEntity?: boolean): Pet {
        (apiObject as any).recType = asEntity ? PetRecordEntityProps.recType : PetRecordProps.recType;
        (apiObject as any).id = apiObject.id.toString();
        if (apiObject.friendId) { (apiObject as any).friendId = apiObject.friendId.toString(); } 
        (apiObject as any).otherFriendIds = apiObject.otherFriendIds.map(item => item?.toString());
        categoryRecordUtils.normalize(apiObject.category);
        if (apiObject.optionalCategory) { categoryRecordUtils.normalize(apiObject.optionalCategory); } 
        if (apiObject._entries) { categoryRecordUtils.normalizeArray(apiObject._entries); } 
        tagRecordUtils.normalizeArray(apiObject.tags);
        if (apiObject.optionalTags) { tagRecordUtils.normalizeArray(apiObject.optionalTags); } 
        if (apiObject.regions) { (apiObject as any).regions = apiObject.regions.map(item => item.map(item2 => item2?.toString())); } 
        return apiObject;
    }

    public getSchema(): Schema {
        return new schema.Entity("pet", {
            category: categoryRecordUtils.getSchema(),
            optionalCategory: categoryRecordUtils.getSchema(),
            _entries: [categoryRecordUtils.getSchema()],
            tags: [tagRecordUtils.getSchema()],
            optionalTags: [tagRecordUtils.getSchema()],
        });
    }

    public *toInlined(entityId?: string | null) {
        if (!entityId) {return undefined; }
        // @ts-ignore
        const entity = yield select(apiEntityPetSelector, {id: entityId});
        if (!entity) {return undefined; }

        const {
            recType,
            category: category_original,
            optionalCategory: optionalCategory_original,
            _entries: _entries_original,
            tags: tags_original,
            optionalTags: optionalTags_original,
		    ...unchangedProperties
		} = entity;

        const entityProperties = {
            // @ts-ignore
            category: yield call(categoryRecordUtils.toInlined, entity.category),
            // @ts-ignore
            optionalCategory: entity.optionalCategory ? yield call(categoryRecordUtils.toInlined, entity.optionalCategory) : null,
            // @ts-ignore
            _entries: entity._entries ? yield call(categoryRecordUtils.toInlinedArray, entity._entries) : null,
            // @ts-ignore
            tags: yield call(tagRecordUtils.toInlinedArray, entity.tags),
            // @ts-ignore
            optionalTags: entity.optionalTags ? yield call(tagRecordUtils.toInlinedArray, entity.optionalTags) : null,
        }

        return PetRecord({
            ...unchangedProperties,
            ...entityProperties
        });
    }

    public *toInlinedArray(entityIds: List<string> | null) {
        if (!entityIds) {return null; }
        let entities = List<PetRecord>();
        for (let entityIndex = 0; entityIndex < entityIds.count(); entityIndex++) {
            // @ts-ignore
            const entity = yield call(this.toInlined, entityIds.get(entityIndex));
            if (entity) {
                entities.push(entity);
            }
        }
        return entities;
    }

    public toApi(record: PetRecord): Pet {
        const apiObject = super.toApi(record);
        apiObject.id = parseFloat(record.id);
        if (record.friendId) { apiObject.friendId = parseFloat(record.friendId); } 
        apiObject.otherFriendIds = record.otherFriendIds.map(item => (item ? parseFloat(item) : null) as number).toArray();
        apiObject.category = categoryRecordUtils.toApi(record.category);
        if (record.optionalCategory) { apiObject.optionalCategory = categoryRecordUtils.toApi(record.optionalCategory); } 
        if (record._entries) { apiObject._entries = categoryRecordUtils.toApiArray(record._entries); } 
        apiObject.tags = tagRecordUtils.toApiArray(record.tags);
        if (record.optionalTags) { apiObject.optionalTags = tagRecordUtils.toApiArray(record.optionalTags); } 
        if (record.regions) { apiObject.regions = record.regions.map(item => item.toArray().map(item2 => (item2 ? parseFloat(item2) : null) as number)).toArray(); } 
        return apiObject;
    }
}

export const petRecordUtils = new PetRecordUtils();

export const apiEntitiesPetSelector = (state: any) => getApiEntitiesState(state).pet as Map<string, PetRecordEntity>;
export const apiEntityPetSelector = (state: any, {id}: {id?: string | null}) => id ? apiEntitiesPetSelector(state).get(id) : undefined;

