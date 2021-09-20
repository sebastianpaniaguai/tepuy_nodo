# SCORM Template for LMS
This project is based on the TEPUY template for SCORM. It adds scss support and allows user to write styling with scss, compile it and it has a public folder which can be zipped and deployed into any LMS.

Styles are being converted to normal CSS using [Gulp](https://gulpjs.com/). The process grabs de SCSS files and got them into a temp folder, after that those files got minified and moved into the public/css folder in order to be part of the basic SCORM package.

**Developers shold only modify scss folders.**

Developers should run next command to watch for changes:
  ```sh
  npm run watch
  ```
Developers should run next command to build the SCORM in public folder:
  ```sh
  npm build
  ```
  
## Deploying into LMS

Developers must zip public folder and upload this to the LMS. **ZIP files should not being included into this repo**
