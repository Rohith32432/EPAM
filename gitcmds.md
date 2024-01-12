

1. **Basic Commands:**
   - `git init`: Initialize a new Git repository.
   - `git clone <repository_url>`: Clone a remote repository to your local machine.
   - `git status`: Show the status of changes as untracked, modified, or staged.
   - `git add <file>`: Add changes in a file to the staging area.
   - `git commit -m "Commit message"`: Commit changes in the staging area.

2. **Branching and Merging:**
   - `git branch`: List all branches in the repository.
   - `git branch <branch_name>`: Create a new branch.
   - `git checkout <branch_name>` or `git switch <branch_name>`: Switch to a different branch.
   - `git merge <branch_name>`: Merge changes from one branch into the current branch.
   - `git pull`: Fetch changes from the remote repository and merge them into the current branch.

3. **Remote Repositories:**
   - `git remote -v`: Show the remote repositories configured for your local repository.
   - `git push <remote> <branch>`: Push local changes to a remote repository.
   - `git pull <remote> <branch>`: Fetch changes from a remote repository and merge them into the current branch.
   - `git fetch`: Fetch changes from remote without merging.

4. **Undoing Changes:**
   - `git reset <file>`: Unstage changes for a file.
   - `git checkout -- <file>`: Discard changes in the working directory for a specific file.
   - `git revert <commit>`: Create a new commit that undoes the changes made in a previous commit.
   - `git reset --hard <commit>`: Discard all changes after a specific commit.

5. **Viewing History:**
   - `git log`: Display the commit history.
   - `git log --oneline`: Display the commit history in a condensed format.
   - `git diff`: Show the changes between the working directory and the last commit.
   - `git blame <file>`: Show who last modified each line of a file.

6. **Tagging:**
   - `git tag -a <tag_name> -m "Tag message"`: Create an annotated tag.
   - `git tag`: List all tags.
   - `git push origin <tag_name>`: Push a specific tag to the remote repository.

7. **Removing:**
   -:Remove Git Repository (Keep Files)
   -:`git rm -r path/to/directory || Remove-Item -Recurse -Force .git` 
