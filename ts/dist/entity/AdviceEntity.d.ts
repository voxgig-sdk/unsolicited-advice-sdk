import { UnsolicitedAdviceEntityBase } from '../UnsolicitedAdviceEntityBase';
import type { UnsolicitedAdviceSDK } from '../UnsolicitedAdviceSDK';
import type { Control } from '../types';
import type { Advice, AdviceLoadMatch, AdviceListMatch } from '../UnsolicitedAdviceTypes';
declare class AdviceEntity extends UnsolicitedAdviceEntityBase<Advice> {
    constructor(client: UnsolicitedAdviceSDK, entopts: any);
    make(this: AdviceEntity): AdviceEntity;
    load(this: any, reqmatch?: AdviceLoadMatch, ctrl?: Control): Promise<AdviceEntity>;
    list(this: any, reqmatch?: AdviceListMatch, ctrl?: Control): Promise<AdviceEntity[]>;
}
export { AdviceEntity };
