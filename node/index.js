var axios = require('axios');
var fs = require('fs-extra');
var AWS = require("aws-sdk");

var s3region = ''; //TODO:
var s3accessKeyId = ''; //TODO:
var s3secretAccessKey = ''; //TODO:
var s3bucket = ''; //TODO:
var runscriptKey = ''; //TODO:
var runscriptSecret = ''; //TODO:
var s3KeyIndd = 'demo/certificate.indd'; //TODO:
var s3KeyJpeg = 'demo/dick jones.jpeg'; //TODO:
var s3KeyPdf = 'demo/certificate.pdf'; // TODO: This is the output file (doesn't have to exist yet)


var s3 = new AWS.S3({ region: s3region, accessKeyId: s3accessKeyId, secretAccessKey: s3secretAccessKey});

runscript = async function(){
    var script = await fs.readFile('./script.jsx', 'utf8');

    // Input files
    var inputFile1 = {};
    inputFile1.href = await s3.getSignedUrl('getObject', {Bucket: s3bucket, Key: s3KeyIndd});
    inputFile1.path = 'certificate.indd';
    var inputFile2 = {};
    inputFile2.href = await s3.getSignedUrl('getObject', {Bucket: s3bucket, Key: s3KeyJpeg});
    inputFile2.path = 'user.jpeg';

    // Output files
    var outputFile1 = {};
    outputFile1.href = await s3.getSignedUrl('putObject', {Bucket: s3bucket, Key: s3KeyPdf, ContentType: 'application/octet-stream'});
    outputFile1.path = 'certificate.pdf';

    // Arguments
    var arg1 = {name: 'name', value: 'Dick Jones'};

    // Request data
    var data = {
        inputs: [
            inputFile1,
            inputFile2
        ],
        outputs: [
            outputFile1,
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




