# Git Cheat Sheet

## Understanding Version Control
Version control, also known as source control, is the technique of tracking and managing changes to codes and these are the systems that are software tools that enable software teams to manage modifications to source code as time passes.
## Benefits of Using Git
- ***History Tracking****: Git allows you to track every change made in your project, including: who made the change and when it was made.
- ***Collaboration****: Multiple developers can be able work on the same project at the same time, and Git efficiently manages the merging of changes in code.
- **Branching and Merging**: Git enables developers to create branches to work on new features or bug fixes and later merge them back into the main codebase.
- **Offline Work**: Git works offline, which means you can commit changes and work on your project even without an internet connection.
## Git Configuration & Setup

| Commands                                              | Description                 |
| ----------------------------------------------------- | --------------------------- |
| git config –global user.name “Your Name”              | Set your username globally. |
| git config –global user.email “youremail@example.com” | Set your email globally.    |
## Initialize Repository

| Commands                                         | Description                                                          |
| ------------------------------------------------ | -------------------------------------------------------------------- |
| git  init                                        | Initializes a new Git repository in the current directory.           |
| git init {directory}                             | Creates a new Git repository in the specified directory.             |
| git clone {repo_url}                             | this Clones a repository from a remote server to your local machine. |
| git clone –branch {branch_name} {repository_url} | Clones a specific branch from a repository.                          |
## Basic Git Commands

| Commands                                                 | Description                                                                                                                |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| git add {file}                                           | Adds a specific file to the staging area.                                                                                  |
| git add . or git add –all                                | Adds all modified and new files to the staging area.                                                                       |
| git status                                               | Shows the current state of your repository, including tracked and untracked files, modified files, and branch information. |
| git status –ignored                                      | Displays ignored files in addition to the regular status output.                                                           |
| git commit                                               | Creates a new commit with the changes in the staging area and opens the default text editor for adding a commit message.   |
| git commit -m “message” or git commit –message “message” | Creates a new commit with the changes in the staging area and specifies the commit message inline.                         |
| git restore {file}                                       | Restores the file in the working directory to its state in the last commit.                                                |
| git fetch                                                | Retrieves change from a remote repository, including new branches and commit.                                              |
| git fetch {remote}                                       | Retrieves change from the specified remote repository.                                                                     |
| git pull                                                 | Fetches changes from the remote repository and merges them into the current branch.                                        |
| git pull {remote}                                        | Fetches changes from the specified remote repository and merges them into the current branch.                              |
| git push                                                 | Pushes local commits to the remote repository.                                                                             |
| git push {remote}                                        | Pushes local commits to the specified remote repository.                                                                   |
| git push {remote} {branch}                               | Pushes local commits to the specified branch of the remote repository.                                                     |
### Branching and Merging

| Commands                          | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| git branch                        | Lists all branches in the repository.                |
| git branch {branch-name}          | Creates a new branch with the specified name.        |
| git checkout {branch-name}        | Switches to the specified branch.                    |
| git checkout -b {new-branch-name} | Creates a new branch and switches to it.             |
| git merge {branch}                | Merges the specified branch into the current branch. |


