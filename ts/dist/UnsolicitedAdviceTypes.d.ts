export interface Advice {
    advice: string;
    id: number;
    source: string;
}
export interface AdviceLoadMatch {
    id: number;
}
export interface AdviceListMatch {
    advice?: string;
    id?: number;
    source?: string;
    $action?: string;
    [action: string]: any;
}
