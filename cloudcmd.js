const cloudcmd = require('cloudcmd');

const port = 8000; // Port number on which Cloud Commander will run

cloudcmd.listen(port, () => {
  console.log(`Cloud Commander started on port ${port}`);
});