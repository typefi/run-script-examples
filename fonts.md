# Including fonts
InDesign® Server will look for any missing fonts in a subfolder called `Document Fonts`.  To include fonts in a job just add them as an `input` to your job body.
```json
{
  "inputs": [
    {
      "href": "https://example.s3.us-east-1.amazonaws.com.....", 
      "path": "certificate.indd"
    },
    {
      "href": "https://example.s3.us-east-1.amazonaws.com.....", 
      "path": "Document Fonts/custom font.otf"
    }
  ],
  "outputs": [
    {
      "href": "https://example.s3.us-east-1.amazonaws.com.....", 
      "path": "output.pdf",
    }
  ], 
  "script": ...
}
```

# Default fonts
| Font | Styles |
| :--- | :--- |
|8514oem|Regular|
|Arial|Regular; Black; Bold; Bold Italic; Italic|
|Bahnschrift|Light; SemiLight; Regular; SemiBold; Light SemiCondensed; SemiLight SemiCondensed; SemiCondensed; SemiBold SemiCondensed; Light Condensed; SemiLight Condensed; Condensed; SemiBold Condensed; Bold; Bold SemiCondensed; Bold Condensed|
|Calibri|Regular; Light; Bold; Bold Italic; Italic; Light Italic|
|Cambria|Regular; Bold; Bold Italic; Italic|
|Cambria Math|Regular|
|Candara|Regular; Light; Bold; Bold Italic; Italic; Light Italic|
|Comic Sans MS|Regular; Bold; Bold Italic; Italic|
|Consolas|Regular; Bold; Bold Italic; Italic|
|Constantia|Regular; Bold; Bold Italic; Italic|
|Corbel|Regular; Light; Bold; Bold Italic; Italic; Light Italic|
|Courier New|Regular; Bold; Bold Italic; Italic|
|Courier|Regular|
|Ebrima|Regular; Bold|
|Fixedsys|Regular|
|Franklin Gothic|Medium; Medium Italic|
|Gabriola|Regular|
|Gadugi|Regular; Bold|
|Georgia|Regular; Bold; Bold Italic; Italic|
|HoloLens MDL2 Assets|Regular|
|Impact|Regular| s
|Ink Free|Regular|
|Javanese Text|Regular|
|Leelawadee UI|Regular; Semilight; Bold|
|Lucida Console|Regular|
|Lucida Sans Unicode|Regular|
|Malgun Gothic|Regular; Semilight; Bold|
|Microsoft Himalaya|Regular|
|Microsoft JhengHei|Regular; Light; Bold|
|Microsoft JhengHei UI|Regular; Light; Bold|
|Microsoft New Tai Lue|Regular; Bold|
|Microsoft PhagsPa|Regular; Bold|
|Microsoft Sans Serif|Regular|
|Microsoft Tai Le|Regular; Bold|
|Microsoft YaHei|Regular; Light; Bold|
|Microsoft YaHei UI|Regular; Light; Bold|
|Microsoft Yi Baiti|Regular|
|MingLiU_HKSCS-ExtB|Regular|
|MingLiU-ExtB|Regular|
|Modern|Regular|
|Mongolian Baiti|Regular|
|MS Gothic|Regular|
|MS PGothic|Regular|
|MS Sans Serif|Regular|
|MS Serif|Regular|
|MS UI Gothic|Regular|
|MV Boli|Regular|
|Myanmar Text|Regular; Bold|
|Nirmala UI|Regular; Semilight; Bold|
|NSimSun|Regular|
|Palatino Linotype|Regular; Bold; Bold Italic; Italic|
|PMingLiU-ExtB|Regular|
|Roman|Regular|
|Script|Regular|
|Segoe MDL2 Assets|Regular|
|Segoe Print|Regular; Bold|
|Segoe Script|Regular; Bold|
|Segoe UI|Regular; Black; Light; Semibold; Semilight; Bold; Bold Italic; Italic; Black Italic; Light Italic; Semibold Italic; Semilight Italic|
|Segoe UI Emoji|Regular|
|Segoe UI Historic|Regular|
|Segoe UI Symbol|Regular|
|SimSun|Regular|
|SimSun-ExtB|Regular|
|Sitka Banner|Regular; Bold; Bold Italic; Italic| 
|Sitka Display|Regular; Bold; Bold Italic; Italic|
|Sitka Heading|Regular; Bold; Bold Italic; Italic|
|Sitka Small|Regular; Bold; Bold Italic; Italic|
|Sitka Subheading|Regular; Bold; Bold Italic; Italic|
|Sitka Text|Regular; Bold; Bold Italic; Italic|
|Small Fonts|Regular|
|Sylfaen|Regular|
|Symbol|Regular|
|System|Bold|
|Tahoma|Regular; Bold|
|Terminal|Regular; Bold|
|Times New Roman|Regular; Bold; Bold Italic; Italic|
|Trebuchet MS|Regular; Bold; Bold Italic; Italic|
|Verdana|Regular; Bold; Bold Italic; Italic|
|Webdings|Regular|
|Wingdings|Regular|
|Yu Gothic|Regular; Light; Medium; Bold|
|Yu Gothic UI|Regular; Semibold; Light; Semilight; Bold|
