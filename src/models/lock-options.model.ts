export enum LockOptions {
  DIFFERENT = 'different', // Lock/Unlock the wrong digit
  IGNORE = 'ignore', // Ignore clicks
  LIAR = 'liar', // Show as locked/unlocked when not
  ORDER = 'order', // The digits must be locked in order, left to right
  REVERT = 'revert', // Randomly toggle state after locking/unlocking
  REVERSE = 'reverse', // The digits must be locked in reverse order, right to left
  SHUFFLE = 'shuffle', // Toggle state after each shuffle
}
