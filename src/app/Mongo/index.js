
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.SECRET_URI;
console.log(uri, "is you forget?");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
   
    const database = client.db('basicNotesApp');
    const notes = database.collection('Notes');
  
    const query = {note: 'Wash yo ass.'};
    const note = await notes.findOne(query);
    const allNotes = await notes.find().toArray();
    console.log(note);
    console.log(allNotes);
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
