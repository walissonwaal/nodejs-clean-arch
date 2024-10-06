import { validate as uuidValidade } from 'uuid'
import { Entity } from '../../entity'

type StupProps = {
 prop1: string
 prop2: number
}

class StubEntity extends Entity<StupProps> {}

describe('Entity unit tests', () => {


  it('Should set props and id', () => {
    const props = {prop1: "value1", prop2: 15}
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidade(entity._id)).toBeTruthy()
  })

  it('Should accept valid uuid', () => {
    const props = {prop1: "value1", prop2: 15}
    const id = '13f73d0a-0a8a-4d50-9c91-877e47bb89e7'
    const entity = new StubEntity(props, id)

    expect(uuidValidade(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Should convert a entity to a Javascript Object', () => {
    const props = {prop1: "value1", prop2: 15}
    const id = '13f73d0a-0a8a-4d50-9c91-877e47bb89e7'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    })
  })
})
