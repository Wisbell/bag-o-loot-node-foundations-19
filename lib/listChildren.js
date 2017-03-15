'use strict';

// require sqlite
const { Database } = require('sqlite3').verbose()

// create db for Santa or connect to existing
const db = new Database('./db/bagOfLoot.sqlite')


module.exports = {
  listAllChildren: () => {
    return new Promise ( (resolve, reject) => {
        db.all(`SELECT C.name FROM Child C WHERE C.delivered = 0`, (err, children) => {

        let childrenList = children
        resolve(childrenList)
      })
    })
  },

  listSpecificChildToys: (childName) => {
    return []
  }
}
