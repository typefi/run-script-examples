# Node example

This example creates a "Employee of the month" certificate pdf file.  Using a custom font "Milky Coffee.otf"
The .idml file has been created using the "Milky Coffee" font.
InDesign® Server will look for any missing fonts in a subfolder called Document Fonts.
Make sure your input path starts with "Document Fonts/".
This example will download .idml, .jpg & .otf files from your S3 bucket.  Run a script that passes through an argument.  Then upload the certificate.pdf file to your S3 bucket.


## Setup
* copy files in ../data to your S3 bucket.
* setup the emvironmental variables required.

## Run
* node index.js
