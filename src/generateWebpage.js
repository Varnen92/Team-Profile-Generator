function generateWebpage(teamMembers) {
  const finalTeam = teamMembers.map(item => {
    let role = item.getRole()

    switch (role) {
      case "Manager":
        return genManager(item)
      case "Engineer":
        return genEngineer(item)

      case "Intern":
        return genIntern(item)
    }

  })
  return finalTeam.join("")
}

function genManager(manager) {
  return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title p-3 mb-2">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
  </div>
</div>
    `
}

function genEngineer(engineer) {
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title p-3 mb-2">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}"> ${engineer.github}</a></li>
          </ul>
      </div>
    </div>
        `
}

function genIntern(intern) {
  return `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title p-3 mb-2">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
              </ul>
          </div>
        </div>
            `
}

module.exports = teamMembers => { 
return  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1 class="class=p-3 mb-2 bg-info text-white text-center"> Team Profile </h1>
    </header>

    <main><div class="container"><div class="row"> ${generateWebpage(teamMembers)} </div></div></main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
`
}
