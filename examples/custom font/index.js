var axios = require('axios');
var fs = require('fs-extra');
var AWS = require("aws-sdk");
require('dotenv').config()

var s3accessKeyId = process.env.AWS_KEY_ID;
var s3secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
var s3bucket = process.env.AWS_S3_BUCKET;
var runscriptKey = process.env.RUNSCRIPT_KEY;
var runscriptSecret = process.env.RUNSCRIPT_SECRET;
var s3Folder = process.env.AWS_S3_FOLDER;
var s3KeyIndd = s3Folder + '/certificate.idml';
var s3KeyJpeg = s3Folder + '/dick jones.jpeg';
var s3KeyPdf = s3Folder + '/certificate.pdf';
var s3KeyFont = s3Folder + '/Milky Coffee.otf';


var s3 = new AWS.S3({ accessKeyId: s3accessKeyId, secretAccessKey: s3secretAccessKey});

runscript = async function(){
    var script = await fs.readFile('./script.jsx', 'utf8');

    // Input files
    var inputFile1 = {};
    inputFile1.href = await s3.getSignedUrl('getObject', {Bucket: s3bucket, Key: s3KeyIndd});
    inputFile1.path = 'certificate.idml';
    var inputFile2 = {};
    inputFile2.href = await s3.getSignedUrl('getObject', {Bucket: s3bucket, Key: s3KeyJpeg});
    inputFile2.path = 'user.jpeg';
    var inputFile3 = {};
    inputFile3.href = await s3.getSignedUrl('getObject', {Bucket: s3bucket, Key: s3KeyFont});
    inputFile3.path = 'Document Fonts/Milky Coffee.otf';

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
            inputFile2,
            inputFile3,            
        ],
        outputs: [
            outputFile1,
        ],
        args: [
            arg1
        ],
        script: script,
        webhook: 'https://webhook.site/49eb317c-afbf-4ecc-82bf-87f9ee6bccc9'
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




