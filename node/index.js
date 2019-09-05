var axios = require('axios');
var fs = require('fs-extra');
var AWS = require("aws-sdk");

var s3region = ''; //TODO:
var s3accessKeyId = ''; //TODO:
var s3secretAccessKey = ''; //TODO:
var s3bucket = ''; //TODO:
var runscriptKey = ''; //TODO:
var runscriptSecret = ''; //TODO:

var s3 = new AWS.S3({ region: s3region, accessKeyId: s3accessKeyId, secretAccessKey: s3secretAccessKey});

runscript = async function(){
    var script = await fs.readFile('./script.jsx', 'utf8');

    // Input files
    var inputFile1 = {};
    inputFile1.href = await s3.getSignedUrl('getObject', {Bucket: s3bucket, Key: 'transfer-test/test1.txt'});
    inputFile1.path = 'test1.txt';

    // Output files
    var outputFile1 = {};
    outputFile1.href = await s3.getSignedUrl('putObject', {Bucket: s3bucket, Key: 'transfer-test/test1.txt', ContentType: 'application/octet-stream'});
    outputFile1.path = 'test1.txt';
    var outputFile2 = {};
    outputFile2.href = await s3.getSignedUrl('putObject', {Bucket: s3bucket, Key: 'transfer-test/test2.txt', ContentType: 'application/octet-stream'});
    outputFile2.path = 'test2.txt';

    // Arguments
    var arg1 = {name: 'text', value: 'foobar'};

    // Request data
    var data = {
        inputs: [
            inputFile1
        ],
        outputs: [
            outputFile1,
            outputFile2
        ],
        args: [
            arg1
        ],
        script: script
    };

    var auth = {username: runscriptKey, password: runscriptSecret};
    var url = 'https://runscript.typefi.com/api/v1/job?async=true'
    var response = await axios.post(url, data, {auth: auth});
    return response;
}

runscript()
.then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
});




