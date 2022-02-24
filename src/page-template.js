module.exports = templateData => {
  
    // destructure projects and about data from templateData based on their property key names
    //creates projects as an array of objects from templateData.projects
    //and about as a big string of data from templateData.about
    const { projects, about, ...header } = templateData;
    // rest operator (...) takes the rest of the data that hasn't been accessed and puts it in
    // a new object "header"
    //Different than the spread operator!

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
            <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
            </nav>
        </div>
        </header>
        <main class="container my-5">

        </main>
        <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
        </footer>
    </body>
    </html>
    `;
  };