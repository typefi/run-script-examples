# Run a script
Scripts can be run with a **POST** API call using your RunScript API `Key` and `Secret` to authenticate. Use the body of the POST to control input & output files and script arguments.

### Request paramaters
| Key  | Type           | Description  |
| ------------- |----------------|--------------|
| async      | boolean | false will wait for the script to complete before request finishes |

### Request body
| Key  | Type           | Description  |
| ------------- |----------------|--------------|
| inputs      | array of file objects | {`href`: [S3 Presigned getObject URL](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html), `path`: local path to store file} |
| outputs      | array of file objects | {`href`: [S3 Presigned putObject URL](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html), `path`: local path to store file} |
| args      | array of arg object | {`name`: string, `value`: string} |
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
