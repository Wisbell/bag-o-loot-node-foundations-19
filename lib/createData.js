'use strict';

// require sqlite
const { Database } = require('sqlite3').verbose()

// create db for Santa
const db = new Database('./db/bagOfLoot.sqlite')

// Load mock Data
const childData = require('../mockData/childData.json')
const bagItemData = require('../mockData/bagItemData.json')
const toyData = require('../mockData/toyData.json')


const main = () => {
  // createTables()

  // addChildData()

  // addBagItemData()

  // addToyData()

  // dropAllTables()
}

// create table/schema for child, bag, toy
const createTables = () => {
  db.run('CREATE TABLE IF NOT EXISTS Child (childId INT, name TEXT, type TEXT, delivered INT) ')
  db.run('CREATE TABLE IF NOT EXISTS BagItem (bagItemId INT, childId INT, toyId INT) ')
  db.run('CREATE TABLE IF NOT EXISTS Toy (toyId INT, name TEXT) ')
}

// // drop all tables
const dropAllTables = () => {
  db.run(`DROP TABLE Child`)
  db.run(`DROP TABLE BagItem`)
  db.run(`DROP TABLE Toy`)
}

const addChildData = () => {
  childData.forEach( obj => {
    console.log(obj)
    db.run(`INSERT INTO Child VALUES (
      ${obj.childId},
      '${obj.name}',
      '${obj.type}',
      ${obj.delivered}
      )`)
  })
}

const addBagItemData = () => {
  bagItemData.forEach( obj => {
    console.log(obj)
    db.run(`INSERT INTO BagItem VALUES (
      ${obj.bagItemId},
      ${obj.childId},
      ${obj.toyId}
      )`)
  })
}

const addToyData = () => {
  toyData.forEach( obj => {
    console.log(obj)
    db.run(`INSERT INTO Toy VALUES (
      ${obj.toyId},
      '${obj.name}'
      )`)
  })
}

// run functions, duh
main()
