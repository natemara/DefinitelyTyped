// Type definitions for express-prom-bundle 5.1
// Project: https://github.com/jochen-schweizer/express-prom-bundle#readme
// Definitions by: Nate Mara <https://github.com/natemara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DefaultMetricsCollectorConfiguration } from 'prom-client';
import { Request, Response } from 'express';

export interface PromClientOptions {
    collectDefaultMetrics: DefaultMetricsCollectorConfiguration;
}

type Path = string | RegExp;

export type Options = SummaryOptions | HistogramOptions;

export interface SummaryOptions extends BaseOptions {
    ageBuckets?: number;
    maxAgeSeconds?: number;
    metricType: 'summary';
    percentiles?: number[];
}

export interface HistogramOptions extends BaseOptions {
    buckets?: number[];
    metricType?: 'histogram';
}

export interface Labels {
    [key: string]: string;
}

export type FormatStatusCode = (response: Response, options: Options) => number | string;
export type NormalizePath = (request: Request, options: Options) => string;
export type TransformLabels = (labels: Labels, request: Request, response: Response) => void;

export interface BaseOptions {
    autoregister?: boolean;
    customLabels?: Labels;
    excludeRoutes?: Path[];
    formatStatusCode?: FormatStatusCode;
    httpDurationMetricName?: string;
    includeMethod?: boolean;
    includePath?: boolean;
    includeStatusCode?: boolean;
    includeUp?: boolean;
    metricsPath?: Path;
    normalizePath?: NormalizePath;
    promClient?: PromClientOptions;
    transformLabels?: TransformLabels;
}

declare function main(opts?: Options): (req: Request, res: Response, next: () => void) => void;
export default main;