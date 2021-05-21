const { writeFile } = require('fs');
require('dotenv').config();
const targetPath = `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   BACKEND_URL: "${process.env.BACKEND_URL}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, (err: any) => {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
})