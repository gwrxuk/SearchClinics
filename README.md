***\*Search Clinics\****

**----**

  Returns json data about clinics.

  \#Docker Version

`docker-compose up --build`       

  \#Jenkins

  Please refer to Jenkinsfile for CI



\* ***\*URL\****



  /search



\* ***\*Method:\****



  `POST`

  



\* ***\*Data Params\****

 `{ "name": "Scratchpay Official practice", "state": "Tennessee", "availability": { "from": "00:00" } }`



\* ***\*Success Response:\****



  \* ***\*Code:\**** 200 <br />

​    ***\*Content:\**** `{ "msg": "success", "clinics": { "name": "Scratchpay Official practice", "state": "Tennessee", "availability": { "from": "00:00" } } }`

 