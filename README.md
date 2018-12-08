NTUEE-ESLab.github.io
====================

The website for [ntuee-eslab](ntuee-eslab.github.io).

## Get Started

The source code of this website is written with React, transpiled by Babel, and bundled by Webpack.

To get started,

1. Install the dependencies with `yarn` or `npm install` command.
2. In `dev` branch, type `npm run start` or `yarn start` to start a hot reloaded server.
3. Make your changes, the web page will be automatically reloaded.

## Development

#### To Add a New "Semester" Section

1. Copy `src/projects/2017fall.yaml` and store it in `src/projects/<name>.yaml`. Update the content. Note that all columns are optional: project name, team member list, short description, path to the banner image, and repo url. The banner image should have the dimension of 900px x 400px.
2. Import it in `src/projects/index.js`.

#### To Add a New Staff Member

Modify the content of `src/components/Staff.js`.

#### Other Notes

###### Public Path

Configure Webpack if the root path is not in `/` (for example,  the root path of `http://foo.com/bar/` is `/bar`).

###### Using React?

TBH, maybe it can be done without React if it's just a static page...

## Deployment

The `.travis.yml` config is read by [Travis](https://travis-ci.com) to build production code and deploy to Github (overwrite the `master` branch) for us. The `github_deploy_key.enc` file  created by Travis CLI gives Travis  `write permission` to access the repository. The deployment script is in `scripts/deploy-to-gh-pages.sh`.

To be more specific about the `github_deploy_key.enc` file, it is a file encrypted with an symmetric encryption algorithm. The key and the initialization vector (IV) have to be set in the setting page of the Travis repo (automatically done if you use Travis CLI), and will be given as environment variables when Travis builds production code. For this particular case, we encrypt the deploy key of our github repo, so Travis can commit code on the master branch.

## Management

* All content are public! Be carefull when you commit code to the remote.
* The members in the [maintainers](https://github.com/orgs/NTUEE-ESLab/teams/maintainters) team can modify the content of NTUEE-ESLab/NTUEE-ESLab.github.io
* Currently the members in the student group and its sub-groups have no special permissions, but you should still add new members to the right groups. If you want to allow fine-grained access control for some repositories, this is the only right way to go.

## Teaching

* Help students understand the concept of version control, and the mindset behind git.
* Convince students that this can be seen as an opportunity to share your efforts with the world.
