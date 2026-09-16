

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { UnsolicitedAdviceSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('AdviceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when UNSOLICITED_ADVICE_TEST_LIVE=TRUE.
  afterEach(liveDelay('UNSOLICITED_ADVICE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UnsolicitedAdviceSDK.test()
    const ent = testsdk.Advice()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.UNSOLICITED_ADVICE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'advice.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"advice","req":true,"short":"The unsolicited advice text from Kevin Kelly","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":true,"short":"The unique identifier for the advice","type":"`$INTEGER`","index$":1},{"active":true,"format":"uri","name":"source","req":true,"short":"The URL source of the advice","type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"advice","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/advice/all","json":"{\"operationId\":\"getAllAdvice\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"advice\":\"Example advice here.\",\"id\":1,\"source\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"},{\"advice\":\"Another example advice.\",\"id\":2,\"source\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"}],\"schema\":{\"items\":{\"properties\":{\"advice\":{\"description\":\"The unsolicited advice text from Kevin Kelly\",\"example\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the advice\",\"example\":7,\"type\":\"integer\"},\"source\":{\"description\":\"The URL source of the advice\",\"example\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"id\",\"advice\",\"source\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with all advice\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/advice/all","segments":[{"lit":"api"},{"lit":"advice"},{"lit":"all"}],"select":{"$action":"all"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":7,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /api/advice/{id}","json":"{\"operationId\":\"getAdviceById\",\"parameters\":[{\"description\":\"The ID of the advice to retrieve (1 to 371)\",\"example\":7,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"maximum\":371,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"advice\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"id\":7,\"source\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"},\"schema\":{\"properties\":{\"advice\":{\"description\":\"The unsolicited advice text from Kevin Kelly\",\"example\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the advice\",\"example\":7,\"type\":\"integer\"},\"source\":{\"description\":\"The URL source of the advice\",\"example\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"id\",\"advice\",\"source\"],\"type\":\"object\"}}},\"description\":\"Successful response with specific advice\"},\"404\":{\"description\":\"Advice with the specified ID not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/advice/{id}","segments":[{"lit":"api"},{"lit":"advice"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /api/advice","json":"{\"operationId\":\"getRandomAdvice\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"advice\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"id\":7,\"source\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\"},\"schema\":{\"properties\":{\"advice\":{\"description\":\"The unsolicited advice text from Kevin Kelly\",\"example\":\"Gratitude will unlock all other virtues and is something you can get better at.\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the advice\",\"example\":7,\"type\":\"integer\"},\"source\":{\"description\":\"The URL source of the advice\",\"example\":\"https://kk.org/thetechnium/68-bits-of-unsolicited-advice/\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"id\",\"advice\",\"source\"],\"type\":\"object\"}}},\"description\":\"Successful response with random advice\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/advice","segments":[{"lit":"api"},{"lit":"advice"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"advice","name__orig":"advice","Name":"Advice","name_":"advice","name-":"advice","NAME":"ADVICE","index$":0}, {"active":true,"entity":"advice","key$":"BasicAdviceFlow","kind":"basic","name":"BasicAdviceFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"advice_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"advice_ref01","srcdatavar":"advice_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-advice_ref01"}}],"index$":1}]}, 'Advice')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let advice_ref01_data = Object.values(setup.data.existing.advice)[0] as any

    // LIST
    const advice_ref01_ent = client.Advice()
    const advice_ref01_match: any = {}

    const advice_ref01_list = (await advice_ref01_ent.list(advice_ref01_match)).map((e: any) => e.data())


    // LOAD
    const advice_ref01_match_dt0: any = {}
    advice_ref01_match_dt0.id = advice_ref01_data.id
    const advice_ref01_data_dt0 = (await advice_ref01_ent.load(advice_ref01_match_dt0)).data()
    assert(advice_ref01_data_dt0.id === advice_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/advice/AdviceTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = UnsolicitedAdviceSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['advice01','advice02','advice03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'UNSOLICITED_ADVICE_TEST_ADVICE_ENTID': idmap,
    'UNSOLICITED_ADVICE_TEST_LIVE': 'FALSE',
    'UNSOLICITED_ADVICE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['UNSOLICITED_ADVICE_TEST_ADVICE_ENTID']

  const live = 'TRUE' === env.UNSOLICITED_ADVICE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['UNSOLICITED_ADVICE_TEST_ADVICE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new UnsolicitedAdviceSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
