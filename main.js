const linksSocialMedia = {
  github: 'mauroBem',
  facebook: 'mauroBem',
  instagram: 'mauroBem',
  twitter: 'mauroBem'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia}`
}
getGitHubProfileInfos()