type AchievementKey = 'terminal_exit_keyboard';

const achievements: Record<AchievementKey, boolean> = {
  terminal_exit_keyboard: false,
};

export function unlockAchievement(key: AchievementKey) {
  achievements[key] = true;
  console.log(`Achievement unlocked: ${key}`);
}

export function hasAchievement(key: AchievementKey) {
  return achievements[key] === true;
}
