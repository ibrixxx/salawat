migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g9qcy3ckgpp8xmm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mqvrrycv",
    "name": "allSalawats",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g9qcy3ckgpp8xmm")

  // remove
  collection.schema.removeField("mqvrrycv")

  return dao.saveCollection(collection)
})
