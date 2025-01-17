/* tslint:disable */
/* eslint-disable */
/**
 * YAPP 21st ALl2 API 명세서
 * YAPP 21st ALl2 API 명세서 입니다.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 작품 목록의 작품 썸네일 정보
 * @export
 * @interface ArtworkBrowseThumbnailDto
 */
export interface ArtworkBrowseThumbnailDto {
    /**
     * 작품 ID
     * @type {number}
     * @memberof ArtworkBrowseThumbnailDto
     */
    'id': number;
    /**
     * 작품 이미지
     * @type {string}
     * @memberof ArtworkBrowseThumbnailDto
     */
    'imageURL': string;
}
/**
 * 작품 목록의 작품 썸네일 정보
 * @export
 * @interface ArtworkInfoDto
 */
export interface ArtworkInfoDto {
    /**
     * 작품 ID
     * @type {number}
     * @memberof ArtworkInfoDto
     */
    'id': number;
    /**
     * 작품 이미지
     * @type {string}
     * @memberof ArtworkInfoDto
     */
    'imageURL': string;
    /**
     * 작품명
     * @type {string}
     * @memberof ArtworkInfoDto
     */
    'name': string;
    /**
     * 관람 날짜
     * @type {string}
     * @memberof ArtworkInfoDto
     */
    'artist': string;
    /**
     * 감정 태그 목록
     * @type {Array<string>}
     * @memberof ArtworkInfoDto
     */
    'tags': Array<string>;
}
/**
 * 작품 목록의 작품 썸네일 정보
 * @export
 * @interface ArtworkThumbnailDto
 */
export interface ArtworkThumbnailDto {
    /**
     * 작품 ID
     * @type {number}
     * @memberof ArtworkThumbnailDto
     */
    'id': number;
    /**
     * 작품 이미지
     * @type {string}
     * @memberof ArtworkThumbnailDto
     */
    'imageURL': string;
    /**
     * 작품명
     * @type {string}
     * @memberof ArtworkThumbnailDto
     */
    'name': string;
    /**
     * 관람 날짜
     * @type {string}
     * @memberof ArtworkThumbnailDto
     */
    'artist': string;
}
/**
 * 
 * @export
 * @interface ArtworkThumbnailDtoPage
 */
export interface ArtworkThumbnailDtoPage {
    /**
     * 
     * @type {Array<ArtworkThumbnailDto>}
     * @memberof ArtworkThumbnailDtoPage
     */
    'content'?: Array<ArtworkThumbnailDto>;
    /**
     * 
     * @type {PageableObject}
     * @memberof ArtworkThumbnailDtoPage
     */
    'pageable'?: PageableObject;
    /**
     * 
     * @type {boolean}
     * @memberof ArtworkThumbnailDtoPage
     */
    'last'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ArtworkThumbnailDtoPage
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof ArtworkThumbnailDtoPage
     */
    'totalElements'?: number;
    /**
     * 
     * @type {number}
     * @memberof ArtworkThumbnailDtoPage
     */
    'size'?: number;
    /**
     * 
     * @type {number}
     * @memberof ArtworkThumbnailDtoPage
     */
    'number'?: number;
    /**
     * 
     * @type {Sort}
     * @memberof ArtworkThumbnailDtoPage
     */
    'sort'?: Sort;
    /**
     * 
     * @type {boolean}
     * @memberof ArtworkThumbnailDtoPage
     */
    'first'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ArtworkThumbnailDtoPage
     */
    'numberOfElements'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ArtworkThumbnailDtoPage
     */
    'empty'?: boolean;
}
/**
 * 전시 작품 다중 생성 Request
 * @export
 * @interface CreateArtworkBatchRequestDto
 */
export interface CreateArtworkBatchRequestDto {
    /**
     * s3 이미지 URI 목록. S3 Presigned URL 발급 후 반환한 imageKey 값 목록
     * @type {Array<string>}
     * @memberof CreateArtworkBatchRequestDto
     */
    'imageUriList'?: Array<string>;
}
/**
 * 전시 작품 다중 생성 Response
 * @export
 * @interface CreateArtworkBatchResponseDto
 */
export interface CreateArtworkBatchResponseDto {
    /**
     * 전시 작품 아이디 목록
     * @type {Array<number>}
     * @memberof CreateArtworkBatchResponseDto
     */
    'idList'?: Array<number>;
}
/**
 * 전시 작품 생성 Request
 * @export
 * @interface CreateArtworkRequestDto
 */
export interface CreateArtworkRequestDto {
    /**
     * 전시 ID
     * @type {number}
     * @memberof CreateArtworkRequestDto
     */
    'postId': number;
    /**
     * s3 이미지 URI. S3 Presigned URL 발급 후 반환한 imageKey 값
     * @type {string}
     * @memberof CreateArtworkRequestDto
     */
    'imageUri': string;
    /**
     * 작가 이름
     * @type {string}
     * @memberof CreateArtworkRequestDto
     */
    'artist'?: string;
    /**
     * 작품명
     * @type {string}
     * @memberof CreateArtworkRequestDto
     */
    'name'?: string;
    /**
     * 작품 할당 태그
     * @type {Array<string>}
     * @memberof CreateArtworkRequestDto
     */
    'tags'?: Array<string>;
}
/**
 * 전시 작품 생성 Response
 * @export
 * @interface CreateArtworkResponseDto
 */
export interface CreateArtworkResponseDto {
    /**
     * 전시 작품 아이디
     * @type {number}
     * @memberof CreateArtworkResponseDto
     */
    'id'?: number;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'message'?: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    'status'?: number;
    /**
     * 
     * @type {Array<FieldError>}
     * @memberof ErrorResponse
     */
    'errors'?: Array<FieldError>;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'code'?: string;
}
/**
 * 
 * @export
 * @interface FieldError
 */
export interface FieldError {
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'field'?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'value'?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'reason'?: string;
}
/**
 * 
 * @export
 * @interface PageableObject
 */
export interface PageableObject {
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'offset'?: number;
    /**
     * 
     * @type {Sort}
     * @memberof PageableObject
     */
    'sort'?: Sort;
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'pageNumber'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'pageSize'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageableObject
     */
    'paged'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageableObject
     */
    'unpaged'?: boolean;
}
/**
 * 
 * @export
 * @interface Sort
 */
export interface Sort {
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    'empty'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    'sorted'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Sort
     */
    'unsorted'?: boolean;
}
/**
 * 전시 작품 생성 Request
 * @export
 * @interface UpdateArtworkRequestDto
 */
export interface UpdateArtworkRequestDto {
    /**
     * 작가 이름
     * @type {string}
     * @memberof UpdateArtworkRequestDto
     */
    'artist'?: string;
    /**
     * 작품명
     * @type {string}
     * @memberof UpdateArtworkRequestDto
     */
    'name'?: string;
    /**
     * 작품 할당 태그
     * @type {Array<string>}
     * @memberof UpdateArtworkRequestDto
     */
    'tags'?: Array<string>;
}

/**
 * ArtworkControllerApi - axios parameter creator
 * @export
 */
export const ArtworkControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 작품(이미지)를 전시에 추가(등록)
         * @summary 전시 작품 등록
         * @param {CreateArtworkRequestDto} createArtworkRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArtwork: async (createArtworkRequestDto: CreateArtworkRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createArtworkRequestDto' is not null or undefined
            assertParamExists('createArtwork', 'createArtworkRequestDto', createArtworkRequestDto)
            const localVarPath = `/artwork`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createArtworkRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 다중 작품(이미지)를 전시에 추가
         * @summary 전시 작품 다중 추가
         * @param {number} id 전시 ID
         * @param {CreateArtworkBatchRequestDto} createArtworkBatchRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArtworkBatch: async (id: number, createArtworkBatchRequestDto: CreateArtworkBatchRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createArtworkBatch', 'id', id)
            // verify required parameter 'createArtworkBatchRequestDto' is not null or undefined
            assertParamExists('createArtworkBatch', 'createArtworkBatchRequestDto', createArtworkBatchRequestDto)
            const localVarPath = `/artwork/batch/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createArtworkBatchRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 작품 삭제
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteArtwork: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteArtwork', 'id', id)
            const localVarPath = `/artwork/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 작품 상세 페이지의 작품 썸네일 목록 조회
         * @summary 작품 탐색 썸네일 목록 조회
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getArtworkBrowseThumbnails: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getArtworkBrowseThumbnails', 'id', id)
            const localVarPath = `/artwork/post/{id}/thumbnail`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 작품 상세 페이지의 작품 상세 정보 조회
         * @summary 작품 상세 정보 조회
         * @param {number} id 작품 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getArtworkInfo: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getArtworkInfo', 'id', id)
            const localVarPath = `/artwork/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 전시 상세 페이지의 작품 목록 조회
         * @summary 전시의 작품 목록 조회
         * @param {number} id 전시 ID
         * @param {number} [size] 페이지네이션의 페이지당 데이터 수
         * @param {number} [page] 페이지네이션의 페이지 넘버. 0부터 시작함
         * @param {'ASC' | 'DESC'} [direction] 페이지네이션의 정렬기준. DESC&#x3D;최신순, ASC&#x3D;오래된순
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getArtworkPageFromPost: async (id: number, size?: number, page?: number, direction?: 'ASC' | 'DESC', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getArtworkPageFromPost', 'id', id)
            const localVarPath = `/artwork/post/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 해당 작품을 해당 전시의 대표 작품으로 설정. 기존 작품은 대표 작품에서 해제됨
         * @summary 대표 작품 설정
         * @param {number} id 작품 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setMainArtwork: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('setMainArtwork', 'id', id)
            const localVarPath = `/artwork/main/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 작품의 작가정보, 작품명, 태그 정보 수정
         * @summary 작품 정보 수정
         * @param {number} id 작품 ID
         * @param {UpdateArtworkRequestDto} updateArtworkRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateArtwork: async (id: number, updateArtworkRequestDto: UpdateArtworkRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateArtwork', 'id', id)
            // verify required parameter 'updateArtworkRequestDto' is not null or undefined
            assertParamExists('updateArtwork', 'updateArtworkRequestDto', updateArtworkRequestDto)
            const localVarPath = `/artwork/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt token required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateArtworkRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ArtworkControllerApi - functional programming interface
 * @export
 */
export const ArtworkControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ArtworkControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 작품(이미지)를 전시에 추가(등록)
         * @summary 전시 작품 등록
         * @param {CreateArtworkRequestDto} createArtworkRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createArtwork(createArtworkRequestDto: CreateArtworkRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateArtworkResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createArtwork(createArtworkRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 다중 작품(이미지)를 전시에 추가
         * @summary 전시 작품 다중 추가
         * @param {number} id 전시 ID
         * @param {CreateArtworkBatchRequestDto} createArtworkBatchRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createArtworkBatch(id: number, createArtworkBatchRequestDto: CreateArtworkBatchRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateArtworkBatchResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createArtworkBatch(id, createArtworkBatchRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary 작품 삭제
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteArtwork(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteArtwork(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 작품 상세 페이지의 작품 썸네일 목록 조회
         * @summary 작품 탐색 썸네일 목록 조회
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getArtworkBrowseThumbnails(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ArtworkBrowseThumbnailDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getArtworkBrowseThumbnails(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 작품 상세 페이지의 작품 상세 정보 조회
         * @summary 작품 상세 정보 조회
         * @param {number} id 작품 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getArtworkInfo(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArtworkInfoDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getArtworkInfo(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 전시 상세 페이지의 작품 목록 조회
         * @summary 전시의 작품 목록 조회
         * @param {number} id 전시 ID
         * @param {number} [size] 페이지네이션의 페이지당 데이터 수
         * @param {number} [page] 페이지네이션의 페이지 넘버. 0부터 시작함
         * @param {'ASC' | 'DESC'} [direction] 페이지네이션의 정렬기준. DESC&#x3D;최신순, ASC&#x3D;오래된순
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getArtworkPageFromPost(id: number, size?: number, page?: number, direction?: 'ASC' | 'DESC', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArtworkThumbnailDtoPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getArtworkPageFromPost(id, size, page, direction, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 해당 작품을 해당 전시의 대표 작품으로 설정. 기존 작품은 대표 작품에서 해제됨
         * @summary 대표 작품 설정
         * @param {number} id 작품 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setMainArtwork(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setMainArtwork(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 작품의 작가정보, 작품명, 태그 정보 수정
         * @summary 작품 정보 수정
         * @param {number} id 작품 ID
         * @param {UpdateArtworkRequestDto} updateArtworkRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateArtwork(id: number, updateArtworkRequestDto: UpdateArtworkRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateArtwork(id, updateArtworkRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ArtworkControllerApi - factory interface
 * @export
 */
export const ArtworkControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ArtworkControllerApiFp(configuration)
    return {
        /**
         * 작품(이미지)를 전시에 추가(등록)
         * @summary 전시 작품 등록
         * @param {CreateArtworkRequestDto} createArtworkRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArtwork(createArtworkRequestDto: CreateArtworkRequestDto, options?: any): AxiosPromise<CreateArtworkResponseDto> {
            return localVarFp.createArtwork(createArtworkRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 다중 작품(이미지)를 전시에 추가
         * @summary 전시 작품 다중 추가
         * @param {number} id 전시 ID
         * @param {CreateArtworkBatchRequestDto} createArtworkBatchRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createArtworkBatch(id: number, createArtworkBatchRequestDto: CreateArtworkBatchRequestDto, options?: any): AxiosPromise<CreateArtworkBatchResponseDto> {
            return localVarFp.createArtworkBatch(id, createArtworkBatchRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 작품 삭제
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteArtwork(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteArtwork(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 작품 상세 페이지의 작품 썸네일 목록 조회
         * @summary 작품 탐색 썸네일 목록 조회
         * @param {number} id 전시 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getArtworkBrowseThumbnails(id: number, options?: any): AxiosPromise<Array<ArtworkBrowseThumbnailDto>> {
            return localVarFp.getArtworkBrowseThumbnails(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 작품 상세 페이지의 작품 상세 정보 조회
         * @summary 작품 상세 정보 조회
         * @param {number} id 작품 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getArtworkInfo(id: number, options?: any): AxiosPromise<ArtworkInfoDto> {
            return localVarFp.getArtworkInfo(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 전시 상세 페이지의 작품 목록 조회
         * @summary 전시의 작품 목록 조회
         * @param {number} id 전시 ID
         * @param {number} [size] 페이지네이션의 페이지당 데이터 수
         * @param {number} [page] 페이지네이션의 페이지 넘버. 0부터 시작함
         * @param {'ASC' | 'DESC'} [direction] 페이지네이션의 정렬기준. DESC&#x3D;최신순, ASC&#x3D;오래된순
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getArtworkPageFromPost(id: number, size?: number, page?: number, direction?: 'ASC' | 'DESC', options?: any): AxiosPromise<ArtworkThumbnailDtoPage> {
            return localVarFp.getArtworkPageFromPost(id, size, page, direction, options).then((request) => request(axios, basePath));
        },
        /**
         * 해당 작품을 해당 전시의 대표 작품으로 설정. 기존 작품은 대표 작품에서 해제됨
         * @summary 대표 작품 설정
         * @param {number} id 작품 ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setMainArtwork(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.setMainArtwork(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 작품의 작가정보, 작품명, 태그 정보 수정
         * @summary 작품 정보 수정
         * @param {number} id 작품 ID
         * @param {UpdateArtworkRequestDto} updateArtworkRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateArtwork(id: number, updateArtworkRequestDto: UpdateArtworkRequestDto, options?: any): AxiosPromise<void> {
            return localVarFp.updateArtwork(id, updateArtworkRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ArtworkControllerApi - object-oriented interface
 * @export
 * @class ArtworkControllerApi
 * @extends {BaseAPI}
 */
export class ArtworkControllerApi extends BaseAPI {
    /**
     * 작품(이미지)를 전시에 추가(등록)
     * @summary 전시 작품 등록
     * @param {CreateArtworkRequestDto} createArtworkRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkControllerApi
     */
    public createArtwork(createArtworkRequestDto: CreateArtworkRequestDto, options?: AxiosRequestConfig) {
        return ArtworkControllerApiFp(this.configuration).createArtwork(createArtworkRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 다중 작품(이미지)를 전시에 추가
     * @summary 전시 작품 다중 추가
     * @param {number} id 전시 ID
     * @param {CreateArtworkBatchRequestDto} createArtworkBatchRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkControllerApi
     */
    public createArtworkBatch(id: number, createArtworkBatchRequestDto: CreateArtworkBatchRequestDto, options?: AxiosRequestConfig) {
        return ArtworkControllerApiFp(this.configuration).createArtworkBatch(id, createArtworkBatchRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary 작품 삭제
     * @param {number} id 전시 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkControllerApi
     */
    public deleteArtwork(id: number, options?: AxiosRequestConfig) {
        return ArtworkControllerApiFp(this.configuration).deleteArtwork(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 작품 상세 페이지의 작품 썸네일 목록 조회
     * @summary 작품 탐색 썸네일 목록 조회
     * @param {number} id 전시 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkControllerApi
     */
    public getArtworkBrowseThumbnails(id: number, options?: AxiosRequestConfig) {
        return ArtworkControllerApiFp(this.configuration).getArtworkBrowseThumbnails(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 작품 상세 페이지의 작품 상세 정보 조회
     * @summary 작품 상세 정보 조회
     * @param {number} id 작품 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkControllerApi
     */
    public getArtworkInfo(id: number, options?: AxiosRequestConfig) {
        return ArtworkControllerApiFp(this.configuration).getArtworkInfo(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 전시 상세 페이지의 작품 목록 조회
     * @summary 전시의 작품 목록 조회
     * @param {number} id 전시 ID
     * @param {number} [size] 페이지네이션의 페이지당 데이터 수
     * @param {number} [page] 페이지네이션의 페이지 넘버. 0부터 시작함
     * @param {'ASC' | 'DESC'} [direction] 페이지네이션의 정렬기준. DESC&#x3D;최신순, ASC&#x3D;오래된순
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkControllerApi
     */
    public getArtworkPageFromPost(id: number, size?: number, page?: number, direction?: 'ASC' | 'DESC', options?: AxiosRequestConfig) {
        return ArtworkControllerApiFp(this.configuration).getArtworkPageFromPost(id, size, page, direction, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 해당 작품을 해당 전시의 대표 작품으로 설정. 기존 작품은 대표 작품에서 해제됨
     * @summary 대표 작품 설정
     * @param {number} id 작품 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkControllerApi
     */
    public setMainArtwork(id: number, options?: AxiosRequestConfig) {
        return ArtworkControllerApiFp(this.configuration).setMainArtwork(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 작품의 작가정보, 작품명, 태그 정보 수정
     * @summary 작품 정보 수정
     * @param {number} id 작품 ID
     * @param {UpdateArtworkRequestDto} updateArtworkRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtworkControllerApi
     */
    public updateArtwork(id: number, updateArtworkRequestDto: UpdateArtworkRequestDto, options?: AxiosRequestConfig) {
        return ArtworkControllerApiFp(this.configuration).updateArtwork(id, updateArtworkRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}


