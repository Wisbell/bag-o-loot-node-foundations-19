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
          // console.log(childrenList)
          resolve(childrenList)
      })
    })
  },

  listSpecificChildToys: (childName) => {
    return new Promise ( (resolve, reject) => {
      db.all(`SELECT T.name FROM Toy T JOIN bagItem BI ON T.toyId = BI.toyId JOIN Child C ON BI.childId = C.childId WHERE C.name = '${childName}'`, (err, toys) => {
        console.log(toys)
        let childToys = toys
        // console.log(childToys)
        resolve(childToys)
      })
    })
  }
}
