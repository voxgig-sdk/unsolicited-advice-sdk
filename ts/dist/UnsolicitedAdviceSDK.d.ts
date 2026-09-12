import { AdviceEntity } from './entity/AdviceEntity';
export type * from './UnsolicitedAdviceTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { UnsolicitedAdviceEntityBase } from './UnsolicitedAdviceEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class UnsolicitedAdviceSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Advice(entopts?: Record<string, any>): AdviceEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): UnsolicitedAdviceSDK;
    tester(testopts?: any, sdkopts?: any): UnsolicitedAdviceSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof UnsolicitedAdviceSDK;
export { stdutil, config, BaseFeature, UnsolicitedAdviceEntityBase, UnsolicitedAdviceSDK, SDK, };
