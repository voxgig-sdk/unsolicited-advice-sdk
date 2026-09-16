"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AdviceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when UNSOLICITED_ADVICE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('UNSOLICITED_ADVICE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.UnsolicitedAdviceSDK.test();
        const ent = testsdk.Advice();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.UNSOLICITED_ADVICE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'advice.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "advice", "req": true, "short": "The unsolicited advice text from Kevin Kelly", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "id", "req": true, "short": "The unique identifier for the advice", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "format": "uri", "name": "source", "req": true, "short": "The URL source of the advice", "type": "`$STRING`", "index$": 2 }], "id": { "field": "id", "name": "id" }, "name": "advice", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/advice/all", "json": "{\"operationId\":\"getAllAdvice\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"advice\":\"Example advice here.\",\"id\":1,\"source\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"},{\"advice\":\"Another example advice.\",\"id\":2,\"source\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"}],\"schema\":{\"items\":{\"properties\":{\"advice\":{\"description\":\"The unsolicited advice text from Kevin Kelly\",\"example\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the advice\",\"example\":7,\"type\":\"integer\"},\"source\":{\"description\":\"The URL source of the advice\",\"example\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"id\",\"advice\",\"source\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with all advice\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/advice/all", "segments": [{ "lit": "api" }, { "lit": "advice" }, { "lit": "all" }], "select": { "$action": "all" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 7, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /api/advice/{id}", "json": "{\"operationId\":\"getAdviceById\",\"parameters\":[{\"description\":\"The ID of the advice to retrieve (1 to 371)\",\"example\":7,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"maximum\":371,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"advice\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"id\":7,\"source\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"},\"schema\":{\"properties\":{\"advice\":{\"description\":\"The unsolicited advice text from Kevin Kelly\",\"example\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the advice\",\"example\":7,\"type\":\"integer\"},\"source\":{\"description\":\"The URL source of the advice\",\"example\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"id\",\"advice\",\"source\"],\"type\":\"object\"}}},\"description\":\"Successful response with specific advice\"},\"404\":{\"description\":\"Advice with the specified ID not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/advice/{id}", "segments": [{ "lit": "api" }, { "lit": "advice" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /api/advice", "json": "{\"operationId\":\"getRandomAdvice\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"advice\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"id\":7,\"source\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"},\"schema\":{\"properties\":{\"advice\":{\"description\":\"The unsolicited advice text from Kevin Kelly\",\"example\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the advice\",\"example\":7,\"type\":\"integer\"},\"source\":{\"description\":\"The URL source of the advice\",\"example\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"id\",\"advice\",\"source\"],\"type\":\"object\"}}},\"description\":\"Successful response with random advice\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/advice", "segments": [{ "lit": "api" }, { "lit": "advice" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "advice", "name__orig": "advice", "Name": "Advice", "name_": "advice", "name-": "advice", "NAME": "ADVICE", "index$": 0 }, { "active": true, "entity": "advice", "key$": "BasicAdviceFlow", "kind": "basic", "name": "BasicAdviceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "advice_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "advice_ref01", "srcdatavar": "advice_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-advice_ref01" } }], "index$": 1 }] }, 'Advice');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let advice_ref01_data = Object.values(setup.data.existing.advice)[0];
        // LIST
        const advice_ref01_ent = client.Advice();
        const advice_ref01_match = {};
        const advice_ref01_list = (await advice_ref01_ent.list(advice_ref01_match)).map((e) => e.data());
        // LOAD
        const advice_ref01_match_dt0 = {};
        advice_ref01_match_dt0.id = advice_ref01_data.id;
        const advice_ref01_data_dt0 = (await advice_ref01_ent.load(advice_ref01_match_dt0)).data();
        (0, node_assert_1.default)(advice_ref01_data_dt0.id === advice_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/advice/AdviceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.UnsolicitedAdviceSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['advice01', 'advice02', 'advice03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'UNSOLICITED_ADVICE_TEST_ADVICE_ENTID': idmap,
        'UNSOLICITED_ADVICE_TEST_LIVE': 'FALSE',
        'UNSOLICITED_ADVICE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['UNSOLICITED_ADVICE_TEST_ADVICE_ENTID'];
    const live = 'TRUE' === env.UNSOLICITED_ADVICE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['UNSOLICITED_ADVICE_TEST_ADVICE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.UnsolicitedAdviceSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.UNSOLICITED_ADVICE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=AdviceEntity.test.js.map