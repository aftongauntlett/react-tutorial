/**
 * Git Command Database - All content sourced from official Git documentation
 * https://git-scm.com/docs
 */

export interface GitCommand {
  command: string;
  description: string;
  usage: string[];
  examples: string[];
  commonFlags?: string[];
  relatedCommands?: string[];
}

export interface GitConcept {
  term: string;
  definition: string;
  examples?: string[];
}

export const gitCommands: Record<string, GitCommand> = {
  'git-status': {
    command: 'git status',
    description: 'Show the working tree status',
    usage: ['git status [<options>] [--] [<pathspec>...]'],
    examples: ['git status', 'git status --short', 'git status --porcelain'],
    commonFlags: [
      '-s, --short: Give the output in the short-format',
      '--porcelain: Give the output in an easy-to-parse format',
      '--branch: Show the branch and tracking info',
    ],
    relatedCommands: ['git-add', 'git-commit', 'git-diff'],
  },

  'git-add': {
    command: 'git add',
    description: 'Add file contents to the index',
    usage: ['git add [<options>] [--] <pathspec>...'],
    examples: ['git add .', 'git add file.txt', 'git add -A', 'git add -p'],
    commonFlags: [
      '-A, --all: Add changes from all tracked and untracked files',
      '-p, --patch: Interactively choose hunks to add',
      '-u, --update: Update only files that git already knows about',
    ],
    relatedCommands: ['git-status', 'git-commit', 'git-reset'],
  },

  'git-commit': {
    command: 'git commit',
    description: 'Record changes to the repository',
    usage: ['git commit [<options>] [--] [<pathspec>...]'],
    examples: [
      'git commit -m "Add new feature"',
      'git commit -am "Fix bug in login"',
      'git commit --amend',
    ],
    commonFlags: [
      '-m, --message: Use the given message as the commit message',
      '-a, --all: Automatically stage files that have been modified and deleted',
      '--amend: Replace the tip of the current branch by creating a new commit',
    ],
    relatedCommands: ['git-add', 'git-push', 'git-log'],
  },

  'git-push': {
    command: 'git push',
    description: 'Update remote refs along with associated objects',
    usage: ['git push [<options>] [<repository> [<refspec>...]]'],
    examples: [
      'git push',
      'git push origin main',
      'git push -u origin feature-branch',
      'git push --force-with-lease',
    ],
    commonFlags: [
      '-u, --set-upstream: Set up tracking information',
      '--force-with-lease: Force push, but safer than --force',
      '--dry-run: Show what would be pushed without actually pushing',
    ],
    relatedCommands: ['git-pull', 'git-fetch', 'git-commit'],
  },

  'git-pull': {
    command: 'git pull',
    description: 'Fetch from and integrate with another repository or local branch',
    usage: ['git pull [<options>] [<repository> [<refspec>...]]'],
    examples: ['git pull', 'git pull origin main', 'git pull --rebase'],
    commonFlags: [
      '--rebase: Rebase the current branch on top of the upstream branch',
      '--no-commit: Fetch and merge, but do not commit',
      '--ff-only: Only update if the merge can be resolved as a fast-forward',
    ],
    relatedCommands: ['git-fetch', 'git-merge', 'git-rebase'],
  },

  'git-merge': {
    command: 'git merge',
    description: 'Join two or more development histories together',
    usage: ['git merge [<options>] [<commit>...]'],
    examples: ['git merge feature-branch', 'git merge --no-ff feature-branch', 'git merge --abort'],
    commonFlags: [
      '--no-ff: Create a merge commit even when merge could be fast-forward',
      '--abort: Abort the current conflict resolution process',
      '--continue: Continue the merge after resolving conflicts',
    ],
    relatedCommands: ['git-rebase', 'git-pull', 'git-checkout'],
  },

  'git-diff': {
    command: 'git diff',
    description: 'Show changes between commits, commit and working tree, etc',
    usage: ['git diff [<options>] [<commit>] [--] [<path>...]'],
    examples: ['git diff', 'git diff HEAD~1', 'git diff --staged', 'git diff main..feature-branch'],
    commonFlags: [
      '--staged: Show difference between index and HEAD',
      '--name-only: Show only names of changed files',
      '--stat: Generate a diffstat',
    ],
    relatedCommands: ['git-status', 'git-log', 'git-show'],
  },

  'git-log': {
    command: 'git log',
    description: 'Show commit logs',
    usage: ['git log [<options>] [<revision range>] [[--] <path>...]'],
    examples: ['git log', 'git log --oneline', 'git log --graph --all', 'git log -p filename.txt'],
    commonFlags: [
      '--oneline: Show each commit on a single line',
      '--graph: Draw a text-based graphical representation',
      '-p: Show patch introduced by each commit',
      '--stat: Show stats for files modified in each commit',
    ],
    relatedCommands: ['git-show', 'git-diff', 'git-blame'],
  },

  'git-checkout': {
    command: 'git checkout',
    description: 'Switch branches or restore working tree files',
    usage: [
      'git checkout [<options>] <branch>',
      'git checkout [<options>] [<branch>] -- <file>...',
    ],
    examples: [
      'git checkout main',
      'git checkout -b feature-branch',
      'git checkout -- filename.txt',
      'git checkout HEAD~1 -- filename.txt',
    ],
    commonFlags: [
      '-b: Create and checkout new branch',
      '-f, --force: Force checkout (throw away local changes)',
      '--: Separate branch names from file names',
    ],
    relatedCommands: ['git-switch', 'git-restore', 'git-branch'],
  },

  'git-reset': {
    command: 'git reset',
    description: 'Reset current HEAD to the specified state',
    usage: ['git reset [<mode>] [<commit>]'],
    examples: [
      'git reset HEAD~1',
      'git reset --soft HEAD~1',
      'git reset --hard HEAD~1',
      'git reset filename.txt',
    ],
    commonFlags: [
      '--soft: Reset HEAD only, keep index and working tree',
      '--mixed: Reset HEAD and index, keep working tree (default)',
      '--hard: Reset HEAD, index, and working tree',
    ],
    relatedCommands: ['git-checkout', 'git-revert', 'git-reflog'],
  },

  'git-stash': {
    command: 'git stash',
    description: 'Stash the changes in a dirty working directory away',
    usage: ['git stash [push [<options>]] [<pathspec>...]'],
    examples: [
      'git stash',
      'git stash push -m "Work in progress"',
      'git stash pop',
      'git stash list',
    ],
    commonFlags: [
      'push: Save current changes to stash',
      'pop: Apply stash and remove it from stash list',
      'list: Show all current stashes',
      'drop: Delete a specific stash',
    ],
    relatedCommands: ['git-checkout', 'git-reset', 'git-clean'],
  },
};

export const gitConcepts: Record<string, GitConcept> = {
  'merge-conflict': {
    term: 'Merge Conflict',
    definition:
      'Occurs when Git cannot automatically resolve differences in code between two commits. You must manually resolve the conflicts before completing the merge.',
    examples: [
      'Look for conflict markers: <<<<<<<, =======, >>>>>>>',
      'Edit the file to resolve conflicts',
      'Use git add to mark as resolved',
      'Complete with git commit',
    ],
  },

  'staging-area': {
    term: 'Staging Area (Index)',
    definition:
      'A file that stores information about what will go into your next commit. Files must be staged before they can be committed.',
    examples: [
      'git add file.txt (adds to staging area)',
      'git status (shows staged vs unstaged changes)',
      'git reset file.txt (removes from staging area)',
    ],
  },

  'working-directory': {
    term: 'Working Directory',
    definition:
      'The directory where you are currently working. Contains your project files and any modifications you have made.',
    examples: [
      'Modified files appear in git status as "Changes not staged"',
      'Use git add to stage changes',
      'Use git checkout -- file.txt to discard changes',
    ],
  },

  remote: {
    term: 'Remote Repository',
    definition:
      'A version of your project hosted on the internet or network somewhere. Common remotes include origin (your fork) and upstream (original repository).',
    examples: [
      'git remote -v (show all remotes)',
      'git remote add origin <url>',
      'git push origin main',
    ],
  },

  branch: {
    term: 'Branch',
    definition:
      'A movable pointer to a specific commit. Allows you to work on different features independently.',
    examples: [
      'git branch (list branches)',
      'git checkout -b feature-branch (create and switch)',
      'git merge feature-branch (merge into current branch)',
    ],
  },
};

export const gitPatterns = {
  commands: Object.keys(gitCommands),
  concepts: Object.keys(gitConcepts),

  // Pattern matching for natural language queries
  patterns: [
    {
      keywords: ['merge', 'conflict'],
      response: 'merge-conflict',
      type: 'concept' as const,
    },
    {
      keywords: ['stage', 'staging', 'index'],
      response: 'staging-area',
      type: 'concept' as const,
    },
    {
      keywords: ['working', 'directory', 'tree'],
      response: 'working-directory',
      type: 'concept' as const,
    },
    {
      keywords: ['remote', 'origin', 'upstream'],
      response: 'remote',
      type: 'concept' as const,
    },
    {
      keywords: ['branch', 'checkout', 'switch'],
      response: 'branch',
      type: 'concept' as const,
    },
    {
      keywords: ['status', 'check'],
      response: 'git-status',
      type: 'command' as const,
    },
    {
      keywords: ['add', 'stage'],
      response: 'git-add',
      type: 'command' as const,
    },
    {
      keywords: ['commit', 'save'],
      response: 'git-commit',
      type: 'command' as const,
    },
  ],
};
