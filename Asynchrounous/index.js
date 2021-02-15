
var profiles = [{ "id": 1, "name": "sagar" }, { "id": 2, "name": "Ram" }, { "id": 3, "name": "Hari" }];
var repos = [{ "id": 1, "reposcount": 10 }, { "id": 2, "reposcount": 20 }, { "id": 3, "reposcount": 22 }];
var stars = [{ "id": 1, "star": 2 }, { "id": 2, "star": 5 }, { "id": 3, "star": 1 }];


function getstar(repo) {
    var found2 = stars.find(element => element.id == repo.id)
    console.log("The Number of stars for Repo are"+' '+found2['star']);
}

function getRepositry(profile) {
    var found1 = repos.find(element => element.id == profile.id);
    console.log(found1);
    console.log("The id for Repo is"+' '+found1['id'])
    console.log("The number of RepoCount are"+' '+found1['reposcount'])
    
}

function getProfileInfo(id, getRepositry, getstar) {
    var found = profiles.find(element => element.id == id);
    if (found != null) {
        getRepositry(found);
        getstar(found);
    }
}

getProfileInfo(1, getRepositry, getstar);