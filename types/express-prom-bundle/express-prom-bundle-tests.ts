import promBundle from 'express-prom-bundle';
import * as express from 'express';

const app = express();
app.use(promBundle());
app.use(promBundle({}));
app.use(promBundle({
    metricType: 'summary',
    ageBuckets: 4,
    includeMethod: true,
}));
app.use(promBundle({
    metricType: 'histogram',
    buckets: [3, 4],
    includeMethod: true,
}));