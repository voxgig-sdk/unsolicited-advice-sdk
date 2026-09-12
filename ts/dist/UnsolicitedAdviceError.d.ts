import { Context } from './Context';
declare class UnsolicitedAdviceError extends Error {
    isUnsolicitedAdviceError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { UnsolicitedAdviceError };
