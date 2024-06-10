<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Dynamic Webpage Example</title>
</head>
<body>
    <div class="container mt-5">
        <h1>Greemus Technologies</h1>
        <button id="toggleButton" class="btn btn-primary">Welcome</button>
        <p id="myParagraph" class="mt-3">The greatest challenge in the software development world is to come up with more interactive and high competitive and high quality developments. Greemus software technologies follows a unique process structure that imposed on the software product development Hyderabad.</p>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        const toggleButton = document.getElementById('toggleButton');
        const myParagraph = document.getElementById('myParagraph');
        toggleButton.addEventListener('click', () => {
            myParagraph.classList.toggle('d-none');
        });
    </script>
</body>
</html>