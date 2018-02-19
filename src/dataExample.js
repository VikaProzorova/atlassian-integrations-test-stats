const responseSample = {
  "ok": true,
  "data": {
    "bitbucket": [
      {
        "system": {
          "id": "83d35120-7df8-3657-8d3d-9086421aac0b",
          "baseUrl": "https://dhreben.atlassian.net",
          "createdAt": "2018-02-08T08:37:51.257Z",
          "updatedAt": "2018-02-08T08:37:51.257Z"
        },
        "testsHarvest": [
          {
            "id": "7a0182c0-0ebc-11e8-a08c-39564a52c778",
            "systemId": "83d35120-7df8-3657-8d3d-9086421aac0b",
            "name": "GetProjectsAsUser",
            "passed": true,
            "error": null,
            "createdAt": "2018-02-10T23:45:29.836Z",
            "updatedAt": "2018-02-10T23:45:31.187Z",
            "deletedAt": null,
            "Tests": [
              {
                "id": "7ace96c0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7a0182c0-0ebc-11e8-a08c-39564a52c778",
                "description": "Projects is array",
                "numberInSuite": 3,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:31.180Z",
                "updatedAt": "2018-02-10T23:45:31.180Z",
                "deletedAt": null
              },
              {
                "id": "7acce910-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7a0182c0-0ebc-11e8-a08c-39564a52c778",
                "description": "Get \"admin\" user projects",
                "numberInSuite": 2,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJraWQiOiJtaWNyb3NcL29hdXRoLTItYXV0aG9yaXphdGlvbi1zZXJ2ZXJcL3ByZWY2a3NpOWxxbmFpZ2IiLCJhbGciOiJSUzI1NiJ9.eyJzY3AiOlsiUkVBRCIsIlBST0pFQ1RfQURNSU4iLCJBQ1RfQVNfVVNFUiIsIldSSVRFIl0sInN1YiI6ImFkbWluIiwiYXVkIjoiaHR0cHM6XC9cL2RocmViZW4uYXRsYXNzaWFuLm5ldCIsImFjdCI6eyJzdWIiOiJleUpvYjNOMFMyVjVJam9pT0ROa016VXhNakF0TjJSbU9DMHpOalUzTFRoa00yUXRPVEE0TmpReU1XRmhZekJpSWl3aVlXUmtiMjVMWlhraU9pSmxkbWxzTFdOaGJtRnllUzFrWVc0aWZRPT0ifSwidXJuOmF0bGFzc2lhbjpjb2F0OnZlcnNpb24iOiIxLjAuMCIsImlzcyI6Im1pY3Jvc1wvb2F1dGgtMi1hdXRob3JpemF0aW9uLXNlcnZlciIsInR5cCI6ImF0bGFzc2lhbi1jb2F0IiwiZXhwIjoxNTE4MzA3MjMwLCJpYXQiOjE1MTgzMDYzMzAsImp0aSI6ImJhNWZhNDRiLTM1NTMtNGY1ZC05YmVhLTAxNGVhNjQxYzI2YiJ9.VGHyssGXqptOwYGCfIJoDTwC_zDlOkP4DapMCl7Sl2SyR9nMx-Ec95_8HOyhpJx2KU87cJyKyEb_u0hqAXvhfuniPUf3u85MUQda8pwvznx-KL0iHU-Mw89DwJ4PgeGx8yngHWUBRiV0qsir1Ke-zgbeXMOAVMsN_KnITIEkoN-D8SFARf-IWN6dfPuG79eOmLTbldou0tNefMgAhCKg9eaejzZwsKBX3x5P6uJ0QUHkGLFfhsUR966GjamqeO4shs6lMP74k-Rm3bt37_u5Je7eM_8USbsWim1MKnlkwL8NWlaJSva9Psso98BGq0U_6VGbFjYuy3bIQEzrcTcXQQ",
                    "X-B3-TraceId": "df28ba06286be358",
                    "X-B3-SpanId": "df28ba06286be358",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dhreben.atlassian.net/rest/api/2/project"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "410"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:31 GMT"
                    ],
                    "x-arequestid": [
                      "c07334e8-28f1-43de-b4f1-bbc5cf129381"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "411"
                    ],
                    "x-ausername": [
                      "admin"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=BY3G-SXEO-MR08-AE7V|732cd5363068cf70b0c88f16a4e7debf6a22a35e|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "expand": "description,lead,issueTypes,url,projectKeys",
                      "self": "https://dhreben.atlassian.net/rest/api/2/project/10000",
                      "id": "10000",
                      "key": "DEMO",
                      "name": "DEMO",
                      "avatarUrls": {
                        "48x48": "https://dhreben.atlassian.net/secure/projectavatar?pid=10000&avatarId=10500",
                        "24x24": "https://dhreben.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10500",
                        "16x16": "https://dhreben.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10500",
                        "32x32": "https://dhreben.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10500"
                      },
                      "projectTypeKey": "software",
                      "simplified": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:31.169Z",
                "updatedAt": "2018-02-10T23:45:31.169Z",
                "deletedAt": null
              }
            ]
          }
        ]
      }
    ],
    "jira": [
      {
        "system": {
          "id": "83d35120-7df8-3657-8d3d-9086421aac0b",
          "baseUrl": "https://dhreben.atlassian.net",
          "createdAt": "2018-02-08T08:37:51.257Z",
          "updatedAt": "2018-02-08T08:37:51.257Z"
        },
        "testsHarvest": [
          {
            "id": "7a0182c0-0ebc-11e8-a08c-39564a52c778",
            "systemId": "83d35120-7df8-3657-8d3d-9086421aac0b",
            "name": "GetProjectsAsUser",
            "passed": true,
            "error": null,
            "createdAt": "2018-02-10T23:45:29.836Z",
            "updatedAt": "2018-02-10T23:45:31.187Z",
            "deletedAt": null,
            "Tests": [
              {
                "id": "7ace96c0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7a0182c0-0ebc-11e8-a08c-39564a52c778",
                "description": "Projects is array",
                "numberInSuite": 3,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:31.180Z",
                "updatedAt": "2018-02-10T23:45:31.180Z",
                "deletedAt": null
              },
              {
                "id": "7acce910-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7a0182c0-0ebc-11e8-a08c-39564a52c778",
                "description": "Get \"admin\" user projects",
                "numberInSuite": 2,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJraWQiOiJtaWNyb3NcL29hdXRoLTItYXV0aG9yaXphdGlvbi1zZXJ2ZXJcL3ByZWY2a3NpOWxxbmFpZ2IiLCJhbGciOiJSUzI1NiJ9.eyJzY3AiOlsiUkVBRCIsIlBST0pFQ1RfQURNSU4iLCJBQ1RfQVNfVVNFUiIsIldSSVRFIl0sInN1YiI6ImFkbWluIiwiYXVkIjoiaHR0cHM6XC9cL2RocmViZW4uYXRsYXNzaWFuLm5ldCIsImFjdCI6eyJzdWIiOiJleUpvYjNOMFMyVjVJam9pT0ROa016VXhNakF0TjJSbU9DMHpOalUzTFRoa00yUXRPVEE0TmpReU1XRmhZekJpSWl3aVlXUmtiMjVMWlhraU9pSmxkbWxzTFdOaGJtRnllUzFrWVc0aWZRPT0ifSwidXJuOmF0bGFzc2lhbjpjb2F0OnZlcnNpb24iOiIxLjAuMCIsImlzcyI6Im1pY3Jvc1wvb2F1dGgtMi1hdXRob3JpemF0aW9uLXNlcnZlciIsInR5cCI6ImF0bGFzc2lhbi1jb2F0IiwiZXhwIjoxNTE4MzA3MjMwLCJpYXQiOjE1MTgzMDYzMzAsImp0aSI6ImJhNWZhNDRiLTM1NTMtNGY1ZC05YmVhLTAxNGVhNjQxYzI2YiJ9.VGHyssGXqptOwYGCfIJoDTwC_zDlOkP4DapMCl7Sl2SyR9nMx-Ec95_8HOyhpJx2KU87cJyKyEb_u0hqAXvhfuniPUf3u85MUQda8pwvznx-KL0iHU-Mw89DwJ4PgeGx8yngHWUBRiV0qsir1Ke-zgbeXMOAVMsN_KnITIEkoN-D8SFARf-IWN6dfPuG79eOmLTbldou0tNefMgAhCKg9eaejzZwsKBX3x5P6uJ0QUHkGLFfhsUR966GjamqeO4shs6lMP74k-Rm3bt37_u5Je7eM_8USbsWim1MKnlkwL8NWlaJSva9Psso98BGq0U_6VGbFjYuy3bIQEzrcTcXQQ",
                    "X-B3-TraceId": "df28ba06286be358",
                    "X-B3-SpanId": "df28ba06286be358",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dhreben.atlassian.net/rest/api/2/project"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "410"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:31 GMT"
                    ],
                    "x-arequestid": [
                      "c07334e8-28f1-43de-b4f1-bbc5cf129381"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "411"
                    ],
                    "x-ausername": [
                      "admin"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=BY3G-SXEO-MR08-AE7V|732cd5363068cf70b0c88f16a4e7debf6a22a35e|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "expand": "description,lead,issueTypes,url,projectKeys",
                      "self": "https://dhreben.atlassian.net/rest/api/2/project/10000",
                      "id": "10000",
                      "key": "DEMO",
                      "name": "DEMO",
                      "avatarUrls": {
                        "48x48": "https://dhreben.atlassian.net/secure/projectavatar?pid=10000&avatarId=10500",
                        "24x24": "https://dhreben.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10500",
                        "16x16": "https://dhreben.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10500",
                        "32x32": "https://dhreben.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10500"
                      },
                      "projectTypeKey": "software",
                      "simplified": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:31.169Z",
                "updatedAt": "2018-02-10T23:45:31.169Z",
                "deletedAt": null
              },
              {
                "id": "7a71f7d0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7a0182c0-0ebc-11e8-a08c-39564a52c778",
                "description": "Get \"admin\" user token",
                "numberInSuite": 1,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "POST",
                  "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMjksImV4cCI6MTUxODMwNjM4OSwiYXVkIjpbIjgzZDM1MTIwLTdkZjgtMzY1Ny04ZDNkLTkwODY0MjFhYWMwYiJdLCJxc2giOiI2MGNmMzFmMGQ1OTZlZDE2ZWU4NGFhMTUxYzU3NTRjYzlkNjYwYWE3OWRmNmMxZTc4MTExNTc1Y2VlZGFkOWQ1In0.a0zFyoqx_GCXlkhbJaFkaxsC2lBOChgiY3GJpgruTpI",
                    "X-B3-TraceId": "30d5a11766fcdf87",
                    "X-B3-SpanId": "30d5a11766fcdf87",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://auth.prod.public.atl-paas.net/oauth2/token?grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXRsYXNzaWFuOmNvbm5lY3Q6Y2xpZW50aWQ6ZXlKb2IzTjBTMlY1SWpvaU9ETmtNelV4TWpBdE4yUm1PQzB6TmpVM0xUaGtNMlF0T1RBNE5qUXlNV0ZoWXpCaUlpd2lZV1JrYjI1TFpYa2lPaUpsZG1sc0xXTmhibUZ5ZVMxa1lXNGlmUT09Iiwic3ViIjoidXJuOmF0bGFzc2lhbjpjb25uZWN0OnVzZXJrZXk6YWRtaW4iLCJ0bnQiOiJodHRwczovL2RocmViZW4uYXRsYXNzaWFuLm5ldCIsImF1ZCI6Imh0dHBzOi8vYXV0aC5wcm9kLnB1YmxpYy5hdGwtcGFhcy5uZXQiLCJpYXQiOjE1MTgzMDYzMjksImV4cCI6MTUxODMwNjM4OX0.SThY55BWr78wcTKxe5gL4Ol60gh2D46K5gXnV9O9sf8&scopes=READ"
                },
                "res": {
                  "headers": {
                    "cache-control": [
                      "no-store"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:30 GMT"
                    ],
                    "pragma": [
                      "no-cache"
                    ],
                    "x-application-context": [
                      "OAuth 2 authorization server:prod-east"
                    ],
                    "x-ratelimit-limit": [
                      "500"
                    ],
                    "x-ratelimit-remaining": [
                      "497"
                    ],
                    "x-ratelimit-reset": [
                      "2018-02-10T23:48Z"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "connection": [
                      "Close"
                    ]
                  },
                  "status": 200,
                  "body": {
                    "access_token": "eyJraWQiOiJtaWNyb3NcL29hdXRoLTItYXV0aG9yaXphdGlvbi1zZXJ2ZXJcL3ByZWY2a3NpOWxxbmFpZ2IiLCJhbGciOiJSUzI1NiJ9.eyJzY3AiOlsiUkVBRCIsIlBST0pFQ1RfQURNSU4iLCJBQ1RfQVNfVVNFUiIsIldSSVRFIl0sInN1YiI6ImFkbWluIiwiYXVkIjoiaHR0cHM6XC9cL2RocmViZW4uYXRsYXNzaWFuLm5ldCIsImFjdCI6eyJzdWIiOiJleUpvYjNOMFMyVjVJam9pT0ROa016VXhNakF0TjJSbU9DMHpOalUzTFRoa00yUXRPVEE0TmpReU1XRmhZekJpSWl3aVlXUmtiMjVMWlhraU9pSmxkbWxzTFdOaGJtRnllUzFrWVc0aWZRPT0ifSwidXJuOmF0bGFzc2lhbjpjb2F0OnZlcnNpb24iOiIxLjAuMCIsImlzcyI6Im1pY3Jvc1wvb2F1dGgtMi1hdXRob3JpemF0aW9uLXNlcnZlciIsInR5cCI6ImF0bGFzc2lhbi1jb2F0IiwiZXhwIjoxNTE4MzA3MjMwLCJpYXQiOjE1MTgzMDYzMzAsImp0aSI6ImJhNWZhNDRiLTM1NTMtNGY1ZC05YmVhLTAxNGVhNjQxYzI2YiJ9.VGHyssGXqptOwYGCfIJoDTwC_zDlOkP4DapMCl7Sl2SyR9nMx-Ec95_8HOyhpJx2KU87cJyKyEb_u0hqAXvhfuniPUf3u85MUQda8pwvznx-KL0iHU-Mw89DwJ4PgeGx8yngHWUBRiV0qsir1Ke-zgbeXMOAVMsN_KnITIEkoN-D8SFARf-IWN6dfPuG79eOmLTbldou0tNefMgAhCKg9eaejzZwsKBX3x5P6uJ0QUHkGLFfhsUR966GjamqeO4shs6lMP74k-Rm3bt37_u5Je7eM_8USbsWim1MKnlkwL8NWlaJSva9Psso98BGq0U_6VGbFjYuy3bIQEzrcTcXQQ",
                    "token_type": "Bearer",
                    "expires_in": 900
                  }
                },
                "createdAt": "2018-02-10T23:45:30.573Z",
                "updatedAt": "2018-02-10T23:45:30.573Z",
                "deletedAt": null
              }
            ]
          },
          {
            "id": "7d110cb1-0ebc-11e8-a08c-39564a52c778",
            "systemId": "83d35120-7df8-3657-8d3d-9086421aac0b",
            "name": "IssueWebhooks",
            "passed": true,
            "error": null,
            "createdAt": "2018-02-10T23:45:34.971Z",
            "updatedAt": "2018-02-10T23:45:36.726Z",
            "deletedAt": null,
            "Tests": [
              {
                "id": "7e197c00-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d110cb1-0ebc-11e8-a08c-39564a52c778",
                "description": "Received webhook indicating task was created",
                "numberInSuite": 6,
                "passed": true,
                "type": "WEBHOOK",
                "got": null,
                "expected": null,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:36.704Z",
                "updatedAt": "2018-02-10T23:45:36.720Z",
                "deletedAt": null
              },
              {
                "id": "7e175920-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d110cb1-0ebc-11e8-a08c-39564a52c778",
                "description": "Create sample task",
                "numberInSuite": 5,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "POST",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzUsImV4cCI6MTUxODMwNjM5NSwiYXVkIjpbIjgzZDM1MTIwLTdkZjgtMzY1Ny04ZDNkLTkwODY0MjFhYWMwYiJdLCJxc2giOiI0M2RkMTc3OWUzM2MzNGZhZTAwYzMwOGQ2MmU1ZGQxNTNhMzIxNDdkMWJjYjVkNDBiMzkzNjQ1N2ZkYTBlY2U0In0.oGQ2XVtuKYOpJXes_82P_Ox9d0fwwFyIBfNgv7F7yN8",
                    "X-B3-TraceId": "303422833e84743e",
                    "X-B3-SpanId": "303422833e84743e",
                    "X-B3-Sampled": "1"
                  },
                  "body": "{\"fields\":{\"project\":{\"id\":\"10000\"},\"summary\":\"7d110cb0-0ebc-11e8-a08c-39564a52c778\",\"issuetype\":{\"id\":\"10101\"},\"description\":\"description\"}}",
                  "url": "https://dhreben.atlassian.net/rest/api/2/issue"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "atl-vtm-backend-time": [
                      "411"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:36 GMT"
                    ],
                    "x-arequestid": [
                      "1bb35f0b-20ff-46a7-bf62-250450b62776"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "411"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=BY3G-SXEO-MR08-AE7V|6558e5bbf42727ae2e4f71a35e1d7161e40f7ef8|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 201,
                  "body": {
                    "id": "10224",
                    "key": "DEMO-126",
                    "self": "https://dhreben.atlassian.net/rest/api/2/issue/10224"
                  }
                },
                "createdAt": "2018-02-10T23:45:36.690Z",
                "updatedAt": "2018-02-10T23:45:36.690Z",
                "deletedAt": null
              },
              {
                "id": "7da620c0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d110cb1-0ebc-11e8-a08c-39564a52c778",
                "description": "Something like task found across project types",
                "numberInSuite": 4,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:35.948Z",
                "updatedAt": "2018-02-10T23:45:35.948Z",
                "deletedAt": null
              },
              {
                "id": "7da3d6d0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d110cb1-0ebc-11e8-a08c-39564a52c778",
                "description": "Get issue types",
                "numberInSuite": 3,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzUsImV4cCI6MTUxODMwNjM5NSwiYXVkIjpbIjgzZDM1MTIwLTdkZjgtMzY1Ny04ZDNkLTkwODY0MjFhYWMwYiJdLCJxc2giOiI0N2E1MGJlY2Y5YjI2N2JiYzZkM2U0NGZjZDQzZDRjNTFmOWM1MDMwNThkMzUzZjQ1YTBkOWI3YjdkZTU1ZmYxIn0.XamqKazutu2v5UxTqdWdav9AfZs1W5pYamOcQv-9xDs",
                    "X-B3-TraceId": "b24793012167fcc3",
                    "X-B3-SpanId": "b24793012167fcc3",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dhreben.atlassian.net/rest/api/2/issuetype"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "237"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "x-b3-sampled": [
                      "1"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:35 GMT"
                    ],
                    "atl-traceid": [
                      "5a7f841e8d015bd6"
                    ],
                    "x-arequestid": [
                      "edf5105d-f0f1-4c8f-b522-16dc5c868afd"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "237"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=BY3G-SXEO-MR08-AE7V|56e3af321b2f8cbde2e08bb6bdae2cbe13384114|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "self": "https://dhreben.atlassian.net/rest/api/2/issuetype/10103",
                      "id": "10103",
                      "description": "A problem which impairs or prevents the functions of the product.",
                      "iconUrl": "https://dhreben.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                      "name": "Bug",
                      "subtask": false,
                      "avatarId": 10303
                    },
                    {
                      "self": "https://dhreben.atlassian.net/rest/api/2/issuetype/10102",
                      "id": "10102",
                      "description": "The sub-task of the issue",
                      "iconUrl": "https://dhreben.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10316&avatarType=issuetype",
                      "name": "Sub-task",
                      "subtask": true,
                      "avatarId": 10316
                    },
                    {
                      "self": "https://dhreben.atlassian.net/rest/api/2/issuetype/10101",
                      "id": "10101",
                      "description": "A task that needs to be done.",
                      "iconUrl": "https://dhreben.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                      "name": "Task",
                      "subtask": false,
                      "avatarId": 10318
                    },
                    {
                      "self": "https://dhreben.atlassian.net/rest/api/2/issuetype/10000",
                      "id": "10000",
                      "description": "A big user story that needs to be broken down. Created by JIRA Software - do not edit or delete.",
                      "iconUrl": "https://dhreben.atlassian.net/images/icons/issuetypes/epic.svg",
                      "name": "Epic",
                      "subtask": false
                    },
                    {
                      "self": "https://dhreben.atlassian.net/rest/api/2/issuetype/10100",
                      "id": "10100",
                      "description": "A user story. Created by JIRA Software - do not edit or delete.",
                      "iconUrl": "https://dhreben.atlassian.net/images/icons/issuetypes/story.svg",
                      "name": "Story",
                      "subtask": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:35.934Z",
                "updatedAt": "2018-02-10T23:45:35.934Z",
                "deletedAt": null
              },
              {
                "id": "7d5f53c0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d110cb1-0ebc-11e8-a08c-39564a52c778",
                "description": "At least one project found",
                "numberInSuite": 2,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:35.485Z",
                "updatedAt": "2018-02-10T23:45:35.485Z",
                "deletedAt": null
              },
              {
                "id": "7d5b8330-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d110cb1-0ebc-11e8-a08c-39564a52c778",
                "description": "Get projects",
                "numberInSuite": 1,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzQsImV4cCI6MTUxODMwNjM5NCwiYXVkIjpbIjgzZDM1MTIwLTdkZjgtMzY1Ny04ZDNkLTkwODY0MjFhYWMwYiJdLCJxc2giOiIzNzZiODZiZTIyNmJlNmVkMjIxZjdhNWMxZmY5YmFmZGY0OTUwMzY3NzMyNjRlMjI4MjJkYmZmNjhlOGFlYWZhIn0.r3cDrlZqQKi8G74JTMWQtjkqI5DqHfrrJveC9fK-SG0",
                    "X-B3-TraceId": "1093fd25a4ed8a64",
                    "X-B3-SpanId": "1093fd25a4ed8a64",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dhreben.atlassian.net/rest/api/2/project"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "284"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:35 GMT"
                    ],
                    "x-arequestid": [
                      "46195dad-a4cb-4ed8-ba96-b31def4011f7"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "284"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=BY3G-SXEO-MR08-AE7V|356022926b158ae82c3f947688c8fcf95cbd8a0f|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "expand": "description,lead,issueTypes,url,projectKeys",
                      "self": "https://dhreben.atlassian.net/rest/api/2/project/10000",
                      "id": "10000",
                      "key": "DEMO",
                      "name": "DEMO",
                      "avatarUrls": {
                        "48x48": "https://dhreben.atlassian.net/secure/projectavatar?pid=10000&avatarId=10500",
                        "24x24": "https://dhreben.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10500",
                        "16x16": "https://dhreben.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10500",
                        "32x32": "https://dhreben.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10500"
                      },
                      "projectTypeKey": "software",
                      "simplified": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:35.459Z",
                "updatedAt": "2018-02-10T23:45:35.459Z",
                "deletedAt": null
              }
            ]
          },
          {
            "id": "7efc8901-0ebc-11e8-a08c-39564a52c778",
            "systemId": "83d35120-7df8-3657-8d3d-9086421aac0b",
            "name": "SetProjectProperty",
            "passed": true,
            "error": null,
            "createdAt": "2018-02-10T23:45:38.192Z",
            "updatedAt": "2018-02-10T23:45:39.997Z",
            "deletedAt": null,
            "Tests": [
              {
                "id": "7fcef430-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8901-0ebc-11e8-a08c-39564a52c778",
                "description": "Property value is equal to that was previously set",
                "numberInSuite": 5,
                "passed": true,
                "type": "ASSERT",
                "got": 1,
                "expected": 1,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:39.571Z",
                "updatedAt": "2018-02-10T23:45:39.571Z",
                "deletedAt": null
              },
              {
                "id": "7fcd4680-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8901-0ebc-11e8-a08c-39564a52c778",
                "description": "Get property value",
                "numberInSuite": 4,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzksImV4cCI6MTUxODMwNjM5OSwiYXVkIjpbIjgzZDM1MTIwLTdkZjgtMzY1Ny04ZDNkLTkwODY0MjFhYWMwYiJdLCJxc2giOiJiZDc3MmEzMGEyYTdkZjhlYjM2YWNiYWRlNjNjOTliOWY0ZjIzMzZjNjlhMzg5MjZkMTA2ZmNiMWVhNTFiNzRjIn0.GUthVTRhZFfG5fmZwAf_hW69pFRREbN-l8tdq3JkbVw",
                    "X-B3-TraceId": "6588c62eaf0a76b7",
                    "X-B3-SpanId": "6588c62eaf0a76b7",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dhreben.atlassian.net/rest/api/2/project/DEMO/properties/7efc8900-0ebc-11e8-a08c-39564a52c778"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "263"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:39 GMT"
                    ],
                    "x-arequestid": [
                      "bbaf68bc-6c44-40ca-a00c-bfffc9bbdcc0"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "263"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=BY3G-SXEO-MR08-AE7V|98e5abb86784d597254ba417148f16a43860a3ed|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": {
                    "key": "7efc8900-0ebc-11e8-a08c-39564a52c778",
                    "value": {
                      "ok": 1
                    }
                  }
                },
                "createdAt": "2018-02-10T23:45:39.561Z",
                "updatedAt": "2018-02-10T23:45:39.561Z",
                "deletedAt": null
              },
              {
                "id": "7f889c60-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8901-0ebc-11e8-a08c-39564a52c778",
                "description": "Set property of first found project",
                "numberInSuite": 3,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "PUT",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzgsImV4cCI6MTUxODMwNjM5OCwiYXVkIjpbIjgzZDM1MTIwLTdkZjgtMzY1Ny04ZDNkLTkwODY0MjFhYWMwYiJdLCJxc2giOiJmNDFlYWFlNGQyMGUyMDk5ZDAyMzI2MDVhZTFjMTI3YzgzOGExN2U2Zjg4Y2JiMDljZjViNjBkOGY4ODRhZjJkIn0.ojAM50LrRiklmnYVfvjHVWClXjcNt4gVwGRx9BSPjKM",
                    "X-B3-TraceId": "9cdd8f5ad124603f",
                    "X-B3-SpanId": "9cdd8f5ad124603f",
                    "X-B3-Sampled": "1"
                  },
                  "body": "{\"ok\":1}",
                  "url": "https://dhreben.atlassian.net/rest/api/2/project/DEMO/properties/7efc8900-0ebc-11e8-a08c-39564a52c778"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "atl-vtm-backend-time": [
                      "245"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:39 GMT"
                    ],
                    "x-arequestid": [
                      "3c58df97-6e73-4ec4-85e3-6b5d2445928e"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "245"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=BY3G-SXEO-MR08-AE7V|61cf9f591653db19da137555ea125c969074c5f5|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 201,
                  "body": ""
                },
                "createdAt": "2018-02-10T23:45:39.110Z",
                "updatedAt": "2018-02-10T23:45:39.110Z",
                "deletedAt": null
              },
              {
                "id": "7f46d870-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8901-0ebc-11e8-a08c-39564a52c778",
                "description": "At least one project found",
                "numberInSuite": 2,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:38.679Z",
                "updatedAt": "2018-02-10T23:45:38.679Z",
                "deletedAt": null
              },
              {
                "id": "7f452ac0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8901-0ebc-11e8-a08c-39564a52c778",
                "description": "Get all projects",
                "numberInSuite": 1,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzgsImV4cCI6MTUxODMwNjM5OCwiYXVkIjpbIjgzZDM1MTIwLTdkZjgtMzY1Ny04ZDNkLTkwODY0MjFhYWMwYiJdLCJxc2giOiIzNzZiODZiZTIyNmJlNmVkMjIxZjdhNWMxZmY5YmFmZGY0OTUwMzY3NzMyNjRlMjI4MjJkYmZmNjhlOGFlYWZhIn0.CfUwzn9xlSp_n3jllH7u1M587l2H9ZObSP_ezl3URX4",
                    "X-B3-TraceId": "753fba5f63d96b50",
                    "X-B3-SpanId": "753fba5f63d96b50",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dhreben.atlassian.net/rest/api/2/project"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "290"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:38 GMT"
                    ],
                    "x-arequestid": [
                      "42ad73fa-cc46-4d3c-80f9-a9c14040c191"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "290"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=BY3G-SXEO-MR08-AE7V|19e025b7b0324f90f1d9bd65880ea16a519014bb|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "expand": "description,lead,issueTypes,url,projectKeys",
                      "self": "https://dhreben.atlassian.net/rest/api/2/project/10000",
                      "id": "10000",
                      "key": "DEMO",
                      "name": "DEMO",
                      "avatarUrls": {
                        "48x48": "https://dhreben.atlassian.net/secure/projectavatar?pid=10000&avatarId=10500",
                        "24x24": "https://dhreben.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10500",
                        "16x16": "https://dhreben.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10500",
                        "32x32": "https://dhreben.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10500"
                      },
                      "projectTypeKey": "software",
                      "simplified": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:38.668Z",
                "updatedAt": "2018-02-10T23:45:38.668Z",
                "deletedAt": null
              }
            ]
          }
        ]
      },
      {
        "system": {
          "id": "b7e090af-1b9e-3313-8345-b7af62b08805",
          "baseUrl": "https://dan-tmp.jira-dev.com",
          "createdAt": "2018-02-10T23:45:22.740Z",
          "updatedAt": "2018-02-10T23:45:22.740Z"
        },
        "testsHarvest": [
          {
            "id": "7a0182c1-0ebc-11e8-a08c-39564a52c778",
            "systemId": "b7e090af-1b9e-3313-8345-b7af62b08805",
            "name": "GetProjectsAsUser",
            "passed": true,
            "error": null,
            "createdAt": "2018-02-10T23:45:29.836Z",
            "updatedAt": "2018-02-10T23:45:34.942Z",
            "deletedAt": null,
            "Tests": [
              {
                "id": "7d0b1940-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7a0182c1-0ebc-11e8-a08c-39564a52c778",
                "description": "Projects is array",
                "numberInSuite": 3,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:34.932Z",
                "updatedAt": "2018-02-10T23:45:34.932Z",
                "deletedAt": null
              },
              {
                "id": "7d08f660-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7a0182c1-0ebc-11e8-a08c-39564a52c778",
                "description": "Get \"admin\" user projects",
                "numberInSuite": 2,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJraWQiOiJtaWNyb3NcL29hdXRoLTItYXV0aG9yaXphdGlvbi1zZXJ2ZXJcL3J0OW1yc3ZqbW1oZWtqbjMiLCJhbGciOiJSUzI1NiJ9.eyJzY3AiOlsiUkVBRCIsIlBST0pFQ1RfQURNSU4iLCJBQ1RfQVNfVVNFUiIsIldSSVRFIl0sInN1YiI6ImFkbWluIiwiYXVkIjoiaHR0cHM6XC9cL2Rhbi10bXAuamlyYS1kZXYuY29tIiwiYWN0Ijp7InN1YiI6ImV5Sm9iM04wUzJWNUlqb2lZamRsTURrd1lXWXRNV0k1WlMwek16RXpMVGd6TkRVdFlqZGhaall5WWpBNE9EQTFJaXdpWVdSa2IyNUxaWGtpT2lKbGRtbHNMV05oYm1GeWVTMWtZVzRpZlE9PSJ9LCJ1cm46YXRsYXNzaWFuOmNvYXQ6dmVyc2lvbiI6IjEuMC4wIiwiaXNzIjoibWljcm9zXC9vYXV0aC0yLWF1dGhvcml6YXRpb24tc2VydmVyIiwidHlwIjoiYXRsYXNzaWFuLWNvYXQiLCJleHAiOjE1MTgzMDcyMzMsImlhdCI6MTUxODMwNjMzMywianRpIjoiYzA0NDJjM2QtMDI4Ny00MGY1LTk1ZWUtYTUwMTFhZWEyZDE1In0.Fy7bz929fxf2x1EK5I7m_2ZigO8TjnE5OCwOfSAbeBPCVqYeJgg8d-L7gIrNXU6D6NqTIeuR_QNKGmxdzkCqeOPknxRadIxYgvOylsIq4wbXbnwBsr8z5Kpmqe9OVY426k0VL3tONYLLQ2WdBjj-jn_HGfEimjOJecvLObrqIG-gRQhtp8ZlrFvtJRpOIKQIGpqiDEiQPt-3AemQyScQUdT9hudS3y5Tj8WWEiJM49WA_iCSUe0TO6CRLypWGrrIGlwhPijJDC3hWmvNwDQg6Rk0Rh3IxyKpz7p9xbr2Xstk4ZOdEYDaZFHLfnDSrV1WRv8IcYpbe1nLsbuv-iOXYg",
                    "X-B3-TraceId": "c9561ec6d71594e4",
                    "X-B3-SpanId": "c9561ec6d71594e4",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dan-tmp.jira-dev.com/rest/api/2/project"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "507"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:34 GMT"
                    ],
                    "x-arequestid": [
                      "2c5a8c05-7726-4796-8673-4d806855a9d8"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "507"
                    ],
                    "x-ausername": [
                      "admin"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=e5c016d1-29a8-42c4-b807-6f7950278c24|9a99ad11835fa1c2d7a0bfcfe7990bde812fc3c4|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "expand": "description,lead,issueTypes,url,projectKeys",
                      "self": "https://dan-tmp.jira-dev.com/rest/api/2/project/10000",
                      "id": "10000",
                      "key": "DEM",
                      "name": "DEMO-TMP",
                      "avatarUrls": {
                        "48x48": "https://dan-tmp.jira-dev.com/secure/projectavatar?avatarId=10324",
                        "24x24": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=small&avatarId=10324",
                        "16x16": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=xsmall&avatarId=10324",
                        "32x32": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=medium&avatarId=10324"
                      },
                      "projectTypeKey": "software",
                      "simplified": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:34.918Z",
                "updatedAt": "2018-02-10T23:45:34.918Z",
                "deletedAt": null
              },
              {
                "id": "7c76a170-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7a0182c1-0ebc-11e8-a08c-39564a52c778",
                "description": "Get \"admin\" user token",
                "numberInSuite": 1,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "POST",
                  "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMjksImV4cCI6MTUxODMwNjM4OSwiYXVkIjpbImI3ZTA5MGFmLTFiOWUtMzMxMy04MzQ1LWI3YWY2MmIwODgwNSJdLCJxc2giOiI5MWY1OWU4ODgyM2Q3NTYwZDA0YTBjZTY3YmYyM2RmOWY0NzIzMThhMmE1MTlkMjRhYjYxZDUwNGI2ZjU0MzRhIn0.HsMQ-SpEdW87_jQm47sqX2mrpSSmfLMqNQtkTbnFeHg",
                    "X-B3-TraceId": "37a8a036c059ffbd",
                    "X-B3-SpanId": "37a8a036c059ffbd",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://auth.dev.public.atl-paas.net/oauth2/token?grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXRsYXNzaWFuOmNvbm5lY3Q6Y2xpZW50aWQ6ZXlKb2IzTjBTMlY1SWpvaVlqZGxNRGt3WVdZdE1XSTVaUzB6TXpFekxUZ3pORFV0WWpkaFpqWXlZakE0T0RBMUlpd2lZV1JrYjI1TFpYa2lPaUpsZG1sc0xXTmhibUZ5ZVMxa1lXNGlmUT09Iiwic3ViIjoidXJuOmF0bGFzc2lhbjpjb25uZWN0OnVzZXJrZXk6YWRtaW4iLCJ0bnQiOiJodHRwczovL2Rhbi10bXAuamlyYS1kZXYuY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRoLmRldi5wdWJsaWMuYXRsLXBhYXMubmV0IiwiaWF0IjoxNTE4MzA2MzI5LCJleHAiOjE1MTgzMDYzODl9.NAkZecEFxvp3vem912g73eCSE3dKxVUcbWmOJ8phTQY&scopes=READ"
                },
                "res": {
                  "headers": {
                    "cache-control": [
                      "no-store"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:33 GMT"
                    ],
                    "pragma": [
                      "no-cache"
                    ],
                    "x-application-context": [
                      "OAuth 2 authorization server:ddev"
                    ],
                    "x-ratelimit-limit": [
                      "500"
                    ],
                    "x-ratelimit-remaining": [
                      "500"
                    ],
                    "x-ratelimit-reset": [
                      "2018-02-10T23:50Z"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "connection": [
                      "Close"
                    ]
                  },
                  "status": 200,
                  "body": {
                    "access_token": "eyJraWQiOiJtaWNyb3NcL29hdXRoLTItYXV0aG9yaXphdGlvbi1zZXJ2ZXJcL3J0OW1yc3ZqbW1oZWtqbjMiLCJhbGciOiJSUzI1NiJ9.eyJzY3AiOlsiUkVBRCIsIlBST0pFQ1RfQURNSU4iLCJBQ1RfQVNfVVNFUiIsIldSSVRFIl0sInN1YiI6ImFkbWluIiwiYXVkIjoiaHR0cHM6XC9cL2Rhbi10bXAuamlyYS1kZXYuY29tIiwiYWN0Ijp7InN1YiI6ImV5Sm9iM04wUzJWNUlqb2lZamRsTURrd1lXWXRNV0k1WlMwek16RXpMVGd6TkRVdFlqZGhaall5WWpBNE9EQTFJaXdpWVdSa2IyNUxaWGtpT2lKbGRtbHNMV05oYm1GeWVTMWtZVzRpZlE9PSJ9LCJ1cm46YXRsYXNzaWFuOmNvYXQ6dmVyc2lvbiI6IjEuMC4wIiwiaXNzIjoibWljcm9zXC9vYXV0aC0yLWF1dGhvcml6YXRpb24tc2VydmVyIiwidHlwIjoiYXRsYXNzaWFuLWNvYXQiLCJleHAiOjE1MTgzMDcyMzMsImlhdCI6MTUxODMwNjMzMywianRpIjoiYzA0NDJjM2QtMDI4Ny00MGY1LTk1ZWUtYTUwMTFhZWEyZDE1In0.Fy7bz929fxf2x1EK5I7m_2ZigO8TjnE5OCwOfSAbeBPCVqYeJgg8d-L7gIrNXU6D6NqTIeuR_QNKGmxdzkCqeOPknxRadIxYgvOylsIq4wbXbnwBsr8z5Kpmqe9OVY426k0VL3tONYLLQ2WdBjj-jn_HGfEimjOJecvLObrqIG-gRQhtp8ZlrFvtJRpOIKQIGpqiDEiQPt-3AemQyScQUdT9hudS3y5Tj8WWEiJM49WA_iCSUe0TO6CRLypWGrrIGlwhPijJDC3hWmvNwDQg6Rk0Rh3IxyKpz7p9xbr2Xstk4ZOdEYDaZFHLfnDSrV1WRv8IcYpbe1nLsbuv-iOXYg",
                    "token_type": "Bearer",
                    "expires_in": 900
                  }
                },
                "createdAt": "2018-02-10T23:45:33.960Z",
                "updatedAt": "2018-02-10T23:45:33.960Z",
                "deletedAt": null
              }
            ]
          },
          {
            "id": "7d1133c1-0ebc-11e8-a08c-39564a52c778",
            "systemId": "b7e090af-1b9e-3313-8345-b7af62b08805",
            "name": "IssueWebhooks",
            "passed": true,
            "error": null,
            "createdAt": "2018-02-10T23:45:34.972Z",
            "updatedAt": "2018-02-10T23:45:38.157Z",
            "deletedAt": null,
            "Tests": [
              {
                "id": "7ea58f60-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d1133c1-0ebc-11e8-a08c-39564a52c778",
                "description": "Received webhook indicating task was created",
                "numberInSuite": 6,
                "passed": true,
                "type": "WEBHOOK",
                "got": null,
                "expected": null,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:37.622Z",
                "updatedAt": "2018-02-10T23:45:38.144Z",
                "deletedAt": null
              },
              {
                "id": "7ea39390-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d1133c1-0ebc-11e8-a08c-39564a52c778",
                "description": "Create sample task",
                "numberInSuite": 5,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "POST",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzYsImV4cCI6MTUxODMwNjM5NiwiYXVkIjpbImI3ZTA5MGFmLTFiOWUtMzMxMy04MzQ1LWI3YWY2MmIwODgwNSJdLCJxc2giOiI0M2RkMTc3OWUzM2MzNGZhZTAwYzMwOGQ2MmU1ZGQxNTNhMzIxNDdkMWJjYjVkNDBiMzkzNjQ1N2ZkYTBlY2U0In0.ViohGPmNlVJj4UtEk_23Uu6c4MngnLoG02EHF3hlaNI",
                    "X-B3-TraceId": "98d230b1034650cb",
                    "X-B3-SpanId": "98d230b1034650cb",
                    "X-B3-Sampled": "1"
                  },
                  "body": "{\"fields\":{\"project\":{\"id\":\"10000\"},\"summary\":\"7d1133c0-0ebc-11e8-a08c-39564a52c778\",\"issuetype\":{\"id\":\"10002\"},\"description\":\"description\"}}",
                  "url": "https://dan-tmp.jira-dev.com/rest/api/2/issue"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "atl-vtm-backend-time": [
                      "704"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:37 GMT"
                    ],
                    "x-arequestid": [
                      "5b4d576f-d724-4834-956d-eb49264e31d9"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "704"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=e5c016d1-29a8-42c4-b807-6f7950278c24|0f896e256f1636c449ea227d24b861e461159c67|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 201,
                  "body": {
                    "id": "10025",
                    "key": "DEM-26",
                    "self": "https://dan-tmp.jira-dev.com/rest/api/2/issue/10025"
                  }
                },
                "createdAt": "2018-02-10T23:45:37.609Z",
                "updatedAt": "2018-02-10T23:45:37.609Z",
                "deletedAt": null
              },
              {
                "id": "7dc5ddc0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d1133c1-0ebc-11e8-a08c-39564a52c778",
                "description": "Something like task found across project types",
                "numberInSuite": 4,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:36.156Z",
                "updatedAt": "2018-02-10T23:45:36.156Z",
                "deletedAt": null
              },
              {
                "id": "7dc40900-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d1133c1-0ebc-11e8-a08c-39564a52c778",
                "description": "Get issue types",
                "numberInSuite": 3,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzUsImV4cCI6MTUxODMwNjM5NSwiYXVkIjpbImI3ZTA5MGFmLTFiOWUtMzMxMy04MzQ1LWI3YWY2MmIwODgwNSJdLCJxc2giOiI0N2E1MGJlY2Y5YjI2N2JiYzZkM2U0NGZjZDQzZDRjNTFmOWM1MDMwNThkMzUzZjQ1YTBkOWI3YjdkZTU1ZmYxIn0.eoEEW7Qse6AJ6xXxwl_eRSqk7-2xVKzmJhy6wlB4YkQ",
                    "X-B3-TraceId": "00aa1ab22800160f",
                    "X-B3-SpanId": "00aa1ab22800160f",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dan-tmp.jira-dev.com/rest/api/2/issuetype"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "116"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:36 GMT"
                    ],
                    "x-arequestid": [
                      "c54305fb-b5e2-49ab-b4d4-a2e3a6ddc473"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "116"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=e5c016d1-29a8-42c4-b807-6f7950278c24|b023142f8209a9eaaa5b39f7e16f61d3d70a36a1|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "self": "https://dan-tmp.jira-dev.com/rest/api/2/issuetype/10002",
                      "id": "10002",
                      "description": "A task that needs to be done.",
                      "iconUrl": "https://dan-tmp.jira-dev.com/secure/viewavatar?size=xsmall&avatarId=10318&avatarType=issuetype",
                      "name": "Task",
                      "subtask": false,
                      "avatarId": 10318
                    },
                    {
                      "self": "https://dan-tmp.jira-dev.com/rest/api/2/issuetype/10003",
                      "id": "10003",
                      "description": "The sub-task of the issue",
                      "iconUrl": "https://dan-tmp.jira-dev.com/secure/viewavatar?size=xsmall&avatarId=10316&avatarType=issuetype",
                      "name": "Sub-task",
                      "subtask": true,
                      "avatarId": 10316
                    },
                    {
                      "self": "https://dan-tmp.jira-dev.com/rest/api/2/issuetype/10000",
                      "id": "10000",
                      "description": "A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.",
                      "iconUrl": "https://dan-tmp.jira-dev.com/images/icons/issuetypes/epic.svg",
                      "name": "Epic",
                      "subtask": false
                    },
                    {
                      "self": "https://dan-tmp.jira-dev.com/rest/api/2/issuetype/10004",
                      "id": "10004",
                      "description": "A problem which impairs or prevents the functions of the product.",
                      "iconUrl": "https://dan-tmp.jira-dev.com/secure/viewavatar?size=xsmall&avatarId=10303&avatarType=issuetype",
                      "name": "Bug",
                      "subtask": false,
                      "avatarId": 10303
                    },
                    {
                      "self": "https://dan-tmp.jira-dev.com/rest/api/2/issuetype/10001",
                      "id": "10001",
                      "description": "A user story. Created by Jira Software - do not edit or delete.",
                      "iconUrl": "https://dan-tmp.jira-dev.com/images/icons/issuetypes/story.svg",
                      "name": "Story",
                      "subtask": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:36.144Z",
                "updatedAt": "2018-02-10T23:45:36.144Z",
                "deletedAt": null
              },
              {
                "id": "7d6ebd10-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d1133c1-0ebc-11e8-a08c-39564a52c778",
                "description": "At least one project found",
                "numberInSuite": 2,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:35.585Z",
                "updatedAt": "2018-02-10T23:45:35.585Z",
                "deletedAt": null
              },
              {
                "id": "7d6cc140-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7d1133c1-0ebc-11e8-a08c-39564a52c778",
                "description": "Get projects",
                "numberInSuite": 1,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzQsImV4cCI6MTUxODMwNjM5NCwiYXVkIjpbImI3ZTA5MGFmLTFiOWUtMzMxMy04MzQ1LWI3YWY2MmIwODgwNSJdLCJxc2giOiIzNzZiODZiZTIyNmJlNmVkMjIxZjdhNWMxZmY5YmFmZGY0OTUwMzY3NzMyNjRlMjI4MjJkYmZmNjhlOGFlYWZhIn0.7OlOJWLYwpZpun0b7uBYUV1Tgat0Jzw-U5RpuYYQGlQ",
                    "X-B3-TraceId": "6400c0a910965eda",
                    "X-B3-SpanId": "6400c0a910965eda",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dan-tmp.jira-dev.com/rest/api/2/project"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "148"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:35 GMT"
                    ],
                    "x-arequestid": [
                      "1b11c0d2-50b1-4667-8107-74687cb5ec06"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "148"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=e5c016d1-29a8-42c4-b807-6f7950278c24|f48df1877ea952fcc5a824e85d6632469b9e2ed2|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "expand": "description,lead,issueTypes,url,projectKeys",
                      "self": "https://dan-tmp.jira-dev.com/rest/api/2/project/10000",
                      "id": "10000",
                      "key": "DEM",
                      "name": "DEMO-TMP",
                      "avatarUrls": {
                        "48x48": "https://dan-tmp.jira-dev.com/secure/projectavatar?avatarId=10324",
                        "24x24": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=small&avatarId=10324",
                        "16x16": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=xsmall&avatarId=10324",
                        "32x32": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=medium&avatarId=10324"
                      },
                      "projectTypeKey": "software",
                      "simplified": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:35.572Z",
                "updatedAt": "2018-02-10T23:45:35.572Z",
                "deletedAt": null
              }
            ]
          },
          {
            "id": "7efc8903-0ebc-11e8-a08c-39564a52c778",
            "systemId": "b7e090af-1b9e-3313-8345-b7af62b08805",
            "name": "SetProjectProperty",
            "passed": true,
            "error": null,
            "createdAt": "2018-02-10T23:45:38.193Z",
            "updatedAt": "2018-02-10T23:45:40.622Z",
            "deletedAt": null,
            "Tests": [
              {
                "id": "8019b8d0-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8903-0ebc-11e8-a08c-39564a52c778",
                "description": "Property value is equal to that was previously set",
                "numberInSuite": 5,
                "passed": true,
                "type": "ASSERT",
                "got": 1,
                "expected": 1,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:40.061Z",
                "updatedAt": "2018-02-10T23:45:40.061Z",
                "deletedAt": null
              },
              {
                "id": "80185940-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8903-0ebc-11e8-a08c-39564a52c778",
                "description": "Get property value",
                "numberInSuite": 4,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzksImV4cCI6MTUxODMwNjM5OSwiYXVkIjpbImI3ZTA5MGFmLTFiOWUtMzMxMy04MzQ1LWI3YWY2MmIwODgwNSJdLCJxc2giOiJjMDk0ODQwYjMyODNhZDVlOWYzNzI3Zjc4Njk0NmI4ODRjNjRjNzI5OWM2MmZjZTdhMzk2OTFjYjYyYTZmOTYwIn0.hU1gH5dHCJRx0-zHqk0Wf67NL8OeRg2A4rj51Fc1amc",
                    "X-B3-TraceId": "96ecab244f7ec1d6",
                    "X-B3-SpanId": "96ecab244f7ec1d6",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dan-tmp.jira-dev.com/rest/api/2/project/DEM/properties/7efc8902-0ebc-11e8-a08c-39564a52c778"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "152"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:39 GMT"
                    ],
                    "x-arequestid": [
                      "070a8fff-2f68-43c5-bbec-32dfb76199e2"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "152"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=e5c016d1-29a8-42c4-b807-6f7950278c24|37cd41841ac32d8de22b7cf6d0e93c19ec9b5532|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": {
                    "key": "7efc8902-0ebc-11e8-a08c-39564a52c778",
                    "value": {
                      "ok": 1
                    }
                  }
                },
                "createdAt": "2018-02-10T23:45:40.052Z",
                "updatedAt": "2018-02-10T23:45:40.052Z",
                "deletedAt": null
              },
              {
                "id": "7fb61500-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8903-0ebc-11e8-a08c-39564a52c778",
                "description": "Set property of first found project",
                "numberInSuite": 3,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "PUT",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzgsImV4cCI6MTUxODMwNjM5OCwiYXVkIjpbImI3ZTA5MGFmLTFiOWUtMzMxMy04MzQ1LWI3YWY2MmIwODgwNSJdLCJxc2giOiI2YTk2ZWViMzlhYzIzOWM2MWIxNDA2NjU1Yjg5YmU2MmFkOTU5ODZkYWI1ZjZlMTg4OWQ5YmNjYjU2ZDczYzQzIn0.Rs4L-vyuuOlOQTADPv8YKew--WSPvNZcySrjTi9oz8I",
                    "X-B3-TraceId": "c932baf50beb51a9",
                    "X-B3-SpanId": "c932baf50beb51a9",
                    "X-B3-Sampled": "1"
                  },
                  "body": "{\"ok\":1}",
                  "url": "https://dan-tmp.jira-dev.com/rest/api/2/project/DEM/properties/7efc8902-0ebc-11e8-a08c-39564a52c778"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "atl-vtm-backend-time": [
                      "117"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:39 GMT"
                    ],
                    "x-arequestid": [
                      "c072471a-a4e3-40ca-aa83-81702495df44"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "117"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=e5c016d1-29a8-42c4-b807-6f7950278c24|4c65d4f94a86f86d1df8fca6e04f13753836db65|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 201,
                  "body": ""
                },
                "createdAt": "2018-02-10T23:45:39.408Z",
                "updatedAt": "2018-02-10T23:45:39.408Z",
                "deletedAt": null
              },
              {
                "id": "7f5e5810-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8903-0ebc-11e8-a08c-39564a52c778",
                "description": "At least one project found",
                "numberInSuite": 2,
                "passed": true,
                "type": "ASSERT",
                "got": true,
                "expected": true,
                "req": null,
                "res": null,
                "createdAt": "2018-02-10T23:45:38.833Z",
                "updatedAt": "2018-02-10T23:45:38.833Z",
                "deletedAt": null
              },
              {
                "id": "7f5c8350-0ebc-11e8-a08c-39564a52c778",
                "suiteId": "7efc8903-0ebc-11e8-a08c-39564a52c778",
                "description": "Get all projects",
                "numberInSuite": 1,
                "passed": true,
                "type": "API_CALL",
                "got": null,
                "expected": null,
                "req": {
                  "method": "GET",
                  "headers": {
                    "Content-Type": "application/json",
                    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJldmlsLWNhbmFyeS1kYW4iLCJpYXQiOjE1MTgzMDYzMzgsImV4cCI6MTUxODMwNjM5OCwiYXVkIjpbImI3ZTA5MGFmLTFiOWUtMzMxMy04MzQ1LWI3YWY2MmIwODgwNSJdLCJxc2giOiIzNzZiODZiZTIyNmJlNmVkMjIxZjdhNWMxZmY5YmFmZGY0OTUwMzY3NzMyNjRlMjI4MjJkYmZmNjhlOGFlYWZhIn0.y2IsxrDk9O4QWYYjEXHxtwt_yKURt2T_wXjvrjm0AiE",
                    "X-B3-TraceId": "250c935ec3fbe820",
                    "X-B3-SpanId": "250c935ec3fbe820",
                    "X-B3-Sampled": "1"
                  },
                  "url": "https://dan-tmp.jira-dev.com/rest/api/2/project"
                },
                "res": {
                  "headers": {
                    "server": [
                      "Atlassian Proxy/0.1.174"
                    ],
                    "vary": [
                      "Accept-Encoding"
                    ],
                    "atl-vtm-backend-time": [
                      "174"
                    ],
                    "cache-control": [
                      "no-cache, no-store, no-transform"
                    ],
                    "content-type": [
                      "application/json;charset=UTF-8"
                    ],
                    "content-encoding": [
                      "gzip"
                    ],
                    "strict-transport-security": [
                      "max-age=315360000; includeSubDomains; preload"
                    ],
                    "date": [
                      "Sat, 10 Feb 2018 23:45:38 GMT"
                    ],
                    "x-arequestid": [
                      "53433347-4ab8-4237-a71c-d325146f8e6a"
                    ],
                    "x-xss-protection": [
                      "1; mode=block"
                    ],
                    "transfer-encoding": [
                      "chunked"
                    ],
                    "atl-vtm-time": [
                      "174"
                    ],
                    "x-ausername": [
                      "addon_evil-canary-dan"
                    ],
                    "x-content-type-options": [
                      "nosniff"
                    ],
                    "connection": [
                      "close"
                    ],
                    "set-cookie": [
                      "atlassian.xsrf.token=e5c016d1-29a8-42c4-b807-6f7950278c24|e2ce9fdbdc86ff4dc0607f3eeca0d71add41ef03|lin; Path=/; Secure"
                    ],
                    "atl-vtm-queue-time": [
                      "0"
                    ]
                  },
                  "status": 200,
                  "body": [
                    {
                      "expand": "description,lead,issueTypes,url,projectKeys",
                      "self": "https://dan-tmp.jira-dev.com/rest/api/2/project/10000",
                      "id": "10000",
                      "key": "DEM",
                      "name": "DEMO-TMP",
                      "avatarUrls": {
                        "48x48": "https://dan-tmp.jira-dev.com/secure/projectavatar?avatarId=10324",
                        "24x24": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=small&avatarId=10324",
                        "16x16": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=xsmall&avatarId=10324",
                        "32x32": "https://dan-tmp.jira-dev.com/secure/projectavatar?size=medium&avatarId=10324"
                      },
                      "projectTypeKey": "software",
                      "simplified": false
                    }
                  ]
                },
                "createdAt": "2018-02-10T23:45:38.821Z",
                "updatedAt": "2018-02-10T23:45:38.821Z",
                "deletedAt": null
              }
            ]
          }
        ]
      }
    ]
  }
}

export default responseSample;