
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UnsolicitedAdviceSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await UnsolicitedAdviceSDK.test()
    equal(null !== testsdk, true)
  })

})
