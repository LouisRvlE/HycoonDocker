migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2022-12-01 23:50:30.207Z",
      "updated": "2023-01-19 11:58:16.720Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": null
          }
        },
        {
          "system": false,
          "id": "pz5gz0cy",
          "name": "todoList",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "qtzu4l0hwc9s867",
      "created": "2022-12-05 16:25:51.748Z",
      "updated": "2023-01-19 11:58:16.720Z",
      "name": "produits",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ewpiafyd",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "wi8pikzb",
          "name": "size",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "o1fxcp21",
          "name": "categories",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "xa8s96e223c3no5",
      "created": "2022-12-05 17:07:13.528Z",
      "updated": "2023-01-19 11:58:16.721Z",
      "name": "allTheProducts",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "lhzuthev",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": 20,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "6tprjojn",
          "name": "size",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "trr05ufu",
          "name": "image",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/png",
              "image/jpeg"
            ],
            "thumbs": [
              "250x250"
            ]
          }
        },
        {
          "system": false,
          "id": "tc5begle",
          "name": "categorie",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "01kodgaaa0dt5k5",
      "created": "2022-12-26 17:56:46.194Z",
      "updated": "2023-01-19 11:58:16.721Z",
      "name": "obsidian_vault",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "j1jtm3wu",
          "name": "markdown",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "cg2vncrt",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "tvuqkijh",
          "name": "path",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "fw0fj29u1lh6f1o",
      "created": "2023-01-07 03:09:36.021Z",
      "updated": "2023-01-19 11:58:16.721Z",
      "name": "projects",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "pgkxbn56",
          "name": "description",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "6dbuk3kr",
          "name": "title",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "i0htsxqv",
          "name": "tags",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 99,
            "collectionId": "5l27st39b9gko0a",
            "cascadeDelete": false
          }
        },
        {
          "system": false,
          "id": "l6uxk1ht",
          "name": "difficulty",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": 8
          }
        },
        {
          "system": false,
          "id": "vap2cocx",
          "name": "image",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/png",
              "image/jpeg",
              "image/jpg",
              "image/svg"
            ],
            "thumbs": []
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    },
    {
      "id": "5l27st39b9gko0a",
      "created": "2023-01-14 18:34:23.953Z",
      "updated": "2023-01-19 11:58:16.721Z",
      "name": "project_tags",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "b2bkaoen",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": 1,
            "max": 20,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "e9zvovaj",
          "name": "color",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
          }
        },
        {
          "system": false,
          "id": "8cbufyha",
          "name": "group",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
