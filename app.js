import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Set the directory for the views (EJS templates)
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index'); // Renders 'index.ejs' from the 'views' directory
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});