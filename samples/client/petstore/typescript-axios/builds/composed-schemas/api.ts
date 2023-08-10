// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Cat
 */
export interface Cat {
    /**
     * 
     * @type {boolean}
     * @memberof Cat
     */
    'hunts'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Cat
     */
    'age'?: number;
}
/**
 * 
 * @export
 * @interface Dog
 */
export interface Dog {
    /**
     * 
     * @type {boolean}
     * @memberof Dog
     */
    'bark'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Dog
     */
    'breed'?: DogBreedEnum;
}

export const DogBreedEnum = {
    Dingo: 'Dingo',
    Husky: 'Husky',
    Retriever: 'Retriever',
    Shepherd: 'Shepherd'
} as const;

export type DogBreedEnum = typeof DogBreedEnum[keyof typeof DogBreedEnum];

/**
 * 
 * @export
 * @interface FilePostRequest
 */
export interface FilePostRequest {
    /**
     * 
     * @type {any}
     * @memberof FilePostRequest
     */
    'file'?: any;
}
/**
 * 
 * @export
 * @interface PetByAge
 */
export interface PetByAge {
    /**
     * 
     * @type {number}
     * @memberof PetByAge
     */
    'age': number;
    /**
     * 
     * @type {string}
     * @memberof PetByAge
     */
    'nickname'?: string;
}
/**
 * 
 * @export
 * @interface PetByType
 */
export interface PetByType {
    /**
     * 
     * @type {string}
     * @memberof PetByType
     */
    'pet_type': PetByTypePetTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PetByType
     */
    'hunts'?: boolean;
}

export const PetByTypePetTypeEnum = {
    Cat: 'Cat',
    Dog: 'Dog'
} as const;

export type PetByTypePetTypeEnum = typeof PetByTypePetTypeEnum[keyof typeof PetByTypePetTypeEnum];

/**
 * 
 * @export
 * @interface PetsFilteredPatchRequest
 */
export interface PetsFilteredPatchRequest {
    /**
     * 
     * @type {number}
     * @memberof PetsFilteredPatchRequest
     */
    'age': number;
    /**
     * 
     * @type {string}
     * @memberof PetsFilteredPatchRequest
     */
    'nickname'?: string;
    /**
     * 
     * @type {string}
     * @memberof PetsFilteredPatchRequest
     */
    'pet_type': PetsFilteredPatchRequestPetTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PetsFilteredPatchRequest
     */
    'hunts'?: boolean;
}

export const PetsFilteredPatchRequestPetTypeEnum = {
    Cat: 'Cat',
    Dog: 'Dog'
} as const;

export type PetsFilteredPatchRequestPetTypeEnum = typeof PetsFilteredPatchRequestPetTypeEnum[keyof typeof PetsFilteredPatchRequestPetTypeEnum];

/**
 * @type PetsPatchRequest
 * @export
 */
export type PetsPatchRequest = Cat | Dog;


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {FilePostRequest} [filePostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filePost: async (filePostRequest?: FilePostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/file`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(filePostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PetsFilteredPatchRequest | null} [petsFilteredPatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        petsFilteredPatch: async (petsFilteredPatchRequest?: PetsFilteredPatchRequest | null, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pets-filtered`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(petsFilteredPatchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PetsPatchRequest | null} [petsPatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        petsPatch: async (petsPatchRequest?: PetsPatchRequest | null, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(petsPatchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {FilePostRequest} [filePostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async filePost(filePostRequest?: FilePostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.filePost(filePostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PetsFilteredPatchRequest | null} [petsFilteredPatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async petsFilteredPatch(petsFilteredPatchRequest?: PetsFilteredPatchRequest | null, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.petsFilteredPatch(petsFilteredPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PetsPatchRequest | null} [petsPatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async petsPatch(petsPatchRequest?: PetsPatchRequest | null, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.petsPatch(petsPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {FilePostRequest} [filePostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filePost(filePostRequest?: FilePostRequest, options?: any): AxiosPromise<void> {
            return localVarFp.filePost(filePostRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PetsFilteredPatchRequest | null} [petsFilteredPatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        petsFilteredPatch(petsFilteredPatchRequest?: PetsFilteredPatchRequest | null, options?: any): AxiosPromise<void> {
            return localVarFp.petsFilteredPatch(petsFilteredPatchRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PetsPatchRequest | null} [petsPatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        petsPatch(petsPatchRequest?: PetsPatchRequest | null, options?: any): AxiosPromise<void> {
            return localVarFp.petsPatch(petsPatchRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {FilePostRequest} [filePostRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public filePost(filePostRequest?: FilePostRequest, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).filePost(filePostRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PetsFilteredPatchRequest | null} [petsFilteredPatchRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public petsFilteredPatch(petsFilteredPatchRequest?: PetsFilteredPatchRequest | null, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).petsFilteredPatch(petsFilteredPatchRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PetsPatchRequest | null} [petsPatchRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public petsPatch(petsPatchRequest?: PetsPatchRequest | null, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).petsPatch(petsPatchRequest, options).then((request) => request(this.axios, this.basePath));
    }
}



