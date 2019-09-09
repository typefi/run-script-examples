# Run a script
Scripts can be run with a **POST** API call using your Run Script API `Key` and `Secret` to authenticate. Use the body of the POST to control input & output files and script arguments.

### Request paramaters
| Key  | Type           | Description  |
| ------------- |----------------|--------------|
| async      | boolean | false will wait for the script to complete before request finishes |

### Request body
| Key  | Type           | Description  |
| ------------- |----------------|--------------|
| inputs      | array of file objects | {`href`: [S3 Presigned getObject URL](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html), `path`: local path to store file} |
| outputs      | array of file objects | {`href`: [S3 Presigned putObject URL](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html), `path`: local path to store file} |
| args      | array of arg objects | {`name`: string, `value`: string} |
| script      | string | InDesign script |
| webhook      | url | url receives a POST with job data every time a job changes status |

### Request example
```javascript
var axios = require('axios');
var data = {
  "inputs": [
    {
      "href": "https://example.s3.us-east-1.amazonaws.com.....", // S3 Presigned getObject URL 
      "path": "jobFolder/input.indd" // Path to store file
    }
	],
  "outputs": [
    {
      "href": "https://example.s3.us-east-1.amazonaws.com....." // S3 Presigned putObject URL 
      "path": "jobFolder/output.pdf", // Path to store file			
    }
  ],
  "args": [
    {
      "name": "count",
      "value": "100"
    }
  ],
  "script": "app.consoleout('test');",
};

var runscriptApiKey = '5d6c6298de22d$$83f5180f4'; // Your API key
var runscriptApiSecret = '2b108tRnVwK2VDG8qJGpLZWRredLmL2dljBaywkOIlPR2YmO9QWq1DwRy'; // Your API Secret
var auth = {username: runscriptApiKey, password: runscriptApiSecret};
var url = 'https://runscript.typefi.com/api/v1/job?async=true'
var response = await axios.post(url, data, {auth: auth});
```

### Response
```json
{
    "_id": "5d71b313eef1c01dcb997s1e",
    "status": "queued",    
    "created": "2019-09-06T01:15:00.007Z",
    "script": "...",
    "inputs": [
        ...
    ],
    "outputs": [
        ...
    ],
    "args": [
        ...
    ],    
}
```

# Get a jobs status
You can manually poll a job to check its status using a **GET** API call with the job id in the url.

| Key  | Type           | Description  |
| ------------- |----------------|--------------|
| status      | string | current status: queued, inProgress, complete, failed or canceled
| result      | string | completed result: success, canceled or failed
| completed      | date | when the job completed
| runTime      | integer | time the job ran for in milliseconds
### Request example
```javascript
var runscriptApiKey = '5d6c6298de22d$$83f5180f4'; // Your API key
var runscriptApiSecret = '2b108tRnVwK2VDG8qJGpLZWRredLmL2dljBaywkOIlPR2YmO9QWq1DwRy'; // Your API Secret
var jobId = '5d71b313eef1c01dcb997s1e';
var auth = {username: runscriptApiKey, password: runscriptApiSecret};
var url = 'https://runscript.typefi.com/api/v1/job/' + jobId;
var response = await axios.get(url, {auth: auth});
```

### Response
```json
{
    "_id": "5d71b313eef1c01dcb997s1e",
    "status": "complete",    
    "created": "2019-09-09T00:09:30.489Z",
    "completed": "2019-09-09T00:09:33.929Z",
    "result": "success",
    "runTime": 2862,
    "script": "...",
    "inputs": [
        ...
    ],
    "outputs": [
        ...
    ],
    "args": [
        ...
    ],    
}
```

# File inputs & outputs
You need to list the files that will be `inputs` from S3 to the InDesignContainer and also the files that will be `outputs` from the InDesignContainer to S3.  This is done using a [S3 Presigned URL](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html).




# Script argumentss
Run Script passes arguments to InDesign Servers `scriptArgs` which can be accessed from your scripts.  *All values are type string
### Request body
```json
{
    "args": [
        {
            "name": "foo",
            "value": "bar"
        },
        {
            "name": "count",
            "value": 123
        }
    ]
}
```

### Script
```javascript
if(app.scriptArgs.isDefined("foo") == true){
    var foo = app.scriptArgs.getValue("foo"); // returns "bar"
}
if(app.scriptArgs.isDefined("count") == true){
    var count = app.scriptArgs.getValue("count"); // returns "123"
}
```