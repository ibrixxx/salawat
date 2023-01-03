migrate((db) => {
  const collection = new Collection({
    "id": "g9qcy3ckgpp8xmm",
    "created": "2023-01-03 15:36:08.199Z",
    "updated": "2023-01-03 15:36:08.199Z",
    "name": "numbers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ila0f40r",
        "name": "salawatsPerDay",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "jt3csqur",
        "name": "groupMembers",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g9qcy3ckgpp8xmm");

  return dao.deleteCollection(collection);
})
