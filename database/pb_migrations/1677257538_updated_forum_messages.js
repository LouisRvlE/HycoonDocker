migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  collection.createRule = "@request.auth.verified = true || @request.auth.isAdmin = true"
  collection.updateRule = "@collection.forum_messages.author.id = @request.auth.id || @request.auth.isAdmin = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8pdcb2vbzxjd1ld")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
