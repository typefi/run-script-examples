var document = app.open(new File('certificate.idml'));
var page = document.pages[0];
for (var i = 0; i < page.textFrames.length; i++) {
    var textFrame = page.textFrames[i];
    if (textFrame.label === 'name') { // script label
        textFrame.parentStory.contents = app.scriptArgs.get('name'); // name is a variable passed in as parameter somehow
    }  
}
document.links[0].relink(new File("user.jpeg")); //relink the image to user.jpeg

document.exportFile(ExportFormat.PDF_TYPE, new File('certificate.pdf'));
