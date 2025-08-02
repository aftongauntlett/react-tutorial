/**
 * Mock Git Terminal - Simulates git command responses for learning
 */

export interface TerminalCommand {
  command: string;
  output: string;
  type: 'success' | 'error' | 'info';
  nextStep?: string;
}

export interface GitRepository {
  currentBranch: string;
  branches: string[];
  commits: Array<{
    hash: string;
    author: string;
    message: string;
    date: string;
  }>;
  stagedFiles: string[];
  modifiedFiles: string[];
  untrackedFiles: string[];
  conflictedFiles: string[];
  remotes: Array<{
    name: string;
    url: string;
  }>;
}

// Initial repository state for the learning scenario
export const initialRepoState: GitRepository = {
  currentBranch: 'main',
  branches: ['main', 'feature/user-auth'],
  commits: [
    {
      hash: '7f3a8b2',
      author: 'Stanley <stanley@office.com>',
      message: 'Add user authentication system',
      date: '2024-01-15 10:30:00',
    },
    {
      hash: 'a1b2c3d',
      author: 'Developer <dev@company.com>',
      message: 'Update button color to blue for brand consistency',
      date: '2024-01-15 14:45:00',
    },
    {
      hash: '9e8f7g6',
      author: 'Stanley <stanley@office.com>',
      message: 'Initial commit',
      date: '2024-01-10 09:00:00',
    },
  ],
  stagedFiles: [],
  modifiedFiles: ['src/auth.js', 'src/login.js'],
  untrackedFiles: [],
  conflictedFiles: ['src/auth.js'],
  remotes: [
    {
      name: 'origin',
      url: 'https://github.com/stanley/employee-portal.git',
    },
  ],
};

export class MockGitTerminal {
  private repoState: GitRepository;
  private commandHistory: string[] = [];

  constructor(initialState: GitRepository = initialRepoState) {
    this.repoState = { ...initialState };
  }

  executeCommand(input: string): TerminalCommand {
    const trimmedInput = input.trim();
    this.commandHistory.push(trimmedInput);

    // Help command - triggers chatbot
    if (trimmedInput === 'help' || trimmedInput === 'git help') {
      return {
        command: trimmedInput,
        output: 'Opening Git Assistant... Type any Git command or concept you need help with.',
        type: 'info',
        nextStep: 'OPEN_CHATBOT',
      };
    }

    // Git status
    if (trimmedInput === 'git status') {
      return this.handleGitStatus();
    }

    // Git log
    if (trimmedInput.startsWith('git log')) {
      return this.handleGitLog(trimmedInput);
    }

    // Git diff
    if (trimmedInput.startsWith('git diff')) {
      return this.handleGitDiff(trimmedInput);
    }

    // Git add
    if (trimmedInput.startsWith('git add')) {
      return this.handleGitAdd(trimmedInput);
    }

    // Git commit
    if (trimmedInput.startsWith('git commit')) {
      return this.handleGitCommit(trimmedInput);
    }

    // Git merge
    if (trimmedInput.startsWith('git merge')) {
      return this.handleGitMerge(trimmedInput);
    }

    // Git push
    if (trimmedInput.startsWith('git push')) {
      return this.handleGitPush(trimmedInput);
    }

    // Git pull
    if (trimmedInput.startsWith('git pull')) {
      return this.handleGitPull(trimmedInput);
    }

    // Clear command
    if (trimmedInput === 'clear' || trimmedInput === 'cls') {
      return {
        command: trimmedInput,
        output: '',
        type: 'success',
        nextStep: 'CLEAR_TERMINAL',
      };
    }

    // Unknown command
    return {
      command: trimmedInput,
      output: `git: '${trimmedInput.replace('git ', '')}' is not a git command. See 'git help'.`,
      type: 'error',
    };
  }

  private handleGitStatus(): TerminalCommand {
    let output = `On branch ${this.repoState.currentBranch}\n`;

    if (this.repoState.conflictedFiles.length > 0) {
      output += `You have unmerged paths.\n`;
      output += `  (fix conflicts and run "git commit")\n`;
      output += `  (use "git merge --abort" to abort the merge)\n\n`;
      output += `Unmerged paths:\n`;
      output += `  (use "git add <file>..." to mark resolution)\n\n`;
      this.repoState.conflictedFiles.forEach((file) => {
        output += `\tboth modified:   ${file}\n`;
      });
    }

    if (this.repoState.stagedFiles.length > 0) {
      output += `\nChanges to be committed:\n`;
      output += `  (use "git reset HEAD <file>..." to unstage)\n\n`;
      this.repoState.stagedFiles.forEach((file) => {
        output += `\tmodified:   ${file}\n`;
      });
    }

    if (this.repoState.modifiedFiles.length > 0) {
      output += `\nChanges not staged for commit:\n`;
      output += `  (use "git add <file>..." to update what will be committed)\n`;
      output += `  (use "git checkout -- <file>..." to discard changes in working directory)\n\n`;
      this.repoState.modifiedFiles.forEach((file) => {
        output += `\tmodified:   ${file}\n`;
      });
    }

    if (this.repoState.untrackedFiles.length > 0) {
      output += `\nUntracked files:\n`;
      output += `  (use "git add <file>..." to include in what will be committed)\n\n`;
      this.repoState.untrackedFiles.forEach((file) => {
        output += `\t${file}\n`;
      });
    }

    if (
      this.repoState.conflictedFiles.length === 0 &&
      this.repoState.stagedFiles.length === 0 &&
      this.repoState.modifiedFiles.length === 0 &&
      this.repoState.untrackedFiles.length === 0
    ) {
      output += `nothing to commit, working tree clean`;
    }

    return {
      command: 'git status',
      output,
      type: 'success',
    };
  }

  private handleGitLog(command: string): TerminalCommand {
    const isOneline = command.includes('--oneline');
    let output = '';

    this.repoState.commits.forEach((commit, index) => {
      if (isOneline) {
        output += `${commit.hash} ${commit.message}\n`;
      } else {
        output += `commit ${commit.hash}${commit.hash}${commit.hash}\n`;
        output += `Author: ${commit.author}\n`;
        output += `Date:   ${commit.date}\n\n`;
        output += `    ${commit.message}\n`;
        if (index < this.repoState.commits.length - 1) output += `\n`;
      }
    });

    return {
      command,
      output,
      type: 'success',
    };
  }

  private handleGitDiff(command: string): TerminalCommand {
    // Simulate merge conflict diff
    const conflictDiff = `diff --cc src/components/AdventureButton.js
index 1234567,abcdefg..0000000
--- a/src/components/AdventureButton.js
+++ b/src/components/AdventureButton.js
@@@ -8,7 -8,7 +8,11 @@@ function AdventureButton({ onClick, chi
  export default function AdventureButton({ onClick, children }) {
    return (
      <button 
++<<<<<<< HEAD
 +      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
++=======
+       className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
++>>>>>>> main
        onClick={onClick}
      >
        {children}
      </button>
    );
  }`;

    return {
      command,
      output: conflictDiff,
      type: 'success',
    };
  }

  private handleGitAdd(command: string): TerminalCommand {
    const parts = command.split(' ');
    if (parts.length < 3) {
      return {
        command,
        output: "Nothing specified, nothing added.\nMaybe you wanted to say 'git add .'?",
        type: 'error',
      };
    }

    const file = parts[2];
    if (file === '.' || file === '-A') {
      // Add all files
      this.repoState.stagedFiles = [...this.repoState.modifiedFiles];
      this.repoState.modifiedFiles = [];
      this.repoState.conflictedFiles = [];
      return {
        command,
        output: '',
        type: 'success',
      };
    }

    if (
      this.repoState.modifiedFiles.includes(file) ||
      this.repoState.conflictedFiles.includes(file)
    ) {
      this.repoState.stagedFiles.push(file);
      this.repoState.modifiedFiles = this.repoState.modifiedFiles.filter((f) => f !== file);
      this.repoState.conflictedFiles = this.repoState.conflictedFiles.filter((f) => f !== file);
      return {
        command,
        output: '',
        type: 'success',
      };
    }

    return {
      command,
      output: `pathspec '${file}' did not match any files`,
      type: 'error',
    };
  }

  private handleGitCommit(command: string): TerminalCommand {
    if (this.repoState.stagedFiles.length === 0) {
      return {
        command,
        output: 'no changes added to commit (use "git add" and/or "git commit -a")',
        type: 'error',
      };
    }

    const messageMatch = command.match(/-m "([^"]+)"/);
    const message = messageMatch ? messageMatch[1] : 'Merge conflict resolution';

    // Add new commit
    const newCommit = {
      hash: Math.random().toString(36).substring(2, 9),
      author: 'Stanley <stanley@office.com>',
      message,
      date: new Date().toISOString(),
    };

    this.repoState.commits.unshift(newCommit);
    this.repoState.stagedFiles = [];

    return {
      command,
      output: `[${this.repoState.currentBranch} ${newCommit.hash}] ${message}\n 2 files changed, 8 insertions(+), 3 deletions(-)`,
      type: 'success',
    };
  }

  private handleGitMerge(command: string): TerminalCommand {
    return {
      command,
      output:
        'Auto-merging src/auth.js\\nCONFLICT (content): Merge conflict in src/auth.js\\nAutomatic merge failed; fix conflicts and then commit the result.',
      type: 'error',
    };
  }

  private handleGitPush(command: string): TerminalCommand {
    return {
      command,
      output: `Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 384 bytes | 384.00 KiB/s, done.\nTotal 3 (delta 1), reused 0 (delta 0), pack-reused 0\nTo https://github.com/stanley/employee-portal.git\n   7f3a8b2..${this.repoState.commits[0].hash}  ${this.repoState.currentBranch} -> ${this.repoState.currentBranch}`,
      type: 'success',
    };
  }

  private handleGitPull(command: string): TerminalCommand {
    // Simulate discovering merge conflicts
    return {
      command,
      output:
        'From https://github.com/stanley/employee-portal\n * branch            main       -> FETCH_HEAD\nAuto-merging src/components/AdventureButton.js\nCONFLICT (content): Merge conflict in src/components/AdventureButton.js\nAutomatic merge failed; fix conflicts and then commit the result.',
      type: 'error',
      nextStep: 'SHOW_MERGE_CONFLICT',
    };
  }
  getRepoState(): GitRepository {
    return { ...this.repoState };
  }

  getCommandHistory(): string[] {
    return [...this.commandHistory];
  }
}
