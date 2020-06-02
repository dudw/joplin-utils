import { setupTestEnv } from '../../test/SetupTestEnv'
import { joplinApi } from './JoplinApi'

describe('test Joplin', () => {
  beforeAll(() => {
    setupTestEnv()
  })
  it('test ping', async () => {
    expect(await joplinApi.ping()).toBeTruthy()
  })
})
