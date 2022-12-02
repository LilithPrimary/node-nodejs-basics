const path = require('path');
const fsProm = require('fs/promises');

const rename = async () => {
  const dir = path.join(__dirname, 'files', 'fresh.txt');
  fsProm.createWriteStream(dir);
};

await rename();

// fs.access(path.join(__dirname, 'text.txt'), (err) => {
//   if (err) {
//     fs.createWriteStream(path.join(__dirname, 'text.txt'));
//     addText();
//   } else {
//     rl.question(
//       "text.txt is already exist. Do you want to remove this file? (y/n)\nIn case 'no' your text will be added to existing file ",
//       (ans) => {
//         checkText(ans);
//         switch (ans) {
//           case 'y':
//             fs.unlink(path.join(__dirname, 'text.txt'), (err) => {
//               if (err) {
//                 stdout.write('Something went wrong');
//                 process.exit();
//               } else {
//                 stdout.write('file removed \n');
//                 fs.createWriteStream(path.join(__dirname, 'text.txt'));
//                 addText();
//               }
//             });
//             break;
//           case 'n':
//             addText();
//             break;
//           default:
//             stdout.write('You should input y or n');
//             process.exit();
//         }
//       }
//     );
//   }
// });

// function addText() {
//   stdout.write('Input your text here: \n');
//   rl.on('line', (text) => {
//     checkText(text);
//     fs.appendFile(path.join(__dirname, 'text.txt'), text + '\n', (err) => {
//       if (err) return;
//     });
//   });
// }
