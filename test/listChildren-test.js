const { assert: { isFunction, isArray } } = require('chai')
const { listAllChildren, listSpecificChildToys } = require('../lib/listChildren')

// should have two functions
describe('list children functionality', () => {

  describe('should list all children currently receiving presents', () => {

    it('should be a function', () => {
      isFunction(listAllChildren)
    })

    it('should return an array of children names', () => {
      return listAllChildren()
      .then( (childrenList) => {
        // console.log(childrenList)
        isArray(childrenList)
      })
    })

  })

  describe('should list all toys in bag for a specific child', () => {

    it('should be a function', () => {
      isFunction(listSpecificChildToys)
    })

    it('should return an array', () => {
      isArray(listSpecificChildToys())
    })

    it('should return an array with a ', () => {
      isArray(listSpecificChildToys())
    })

  })

})
