export enum ButtonOptions {
  ALLOW_RANDOM_COLORS = 'allow-random-colors', // Allow the buttons to change into various colors
  ALLOW_RANDOM_ICONS = 'allow-random-icons', // Allow the buttons to use various icons
  CHANGE_AFTER_UNLOCK_ALL = 'change-after-unlock-all', // Change the buttons after user clicks unlock all
  CHANGE_AFTER_LOCK = 'change-after-lock', // Change the buttons after user locks a digit
  CHANGE_AFTER_RESTART = 'change-after-restart', // Change the buttons after user clicks restart
  CHANGE_AFTER_SHUFFLE = 'change-after-shuffle', // Change the buttons after user clicks shuffle
  CHANGE_AFTER_UNLOCK = 'change-after-unlock', // Change the buttons after user unlocks a digit
  CHANGE_CONTINUOUSLY = 'change-continuously', // Change the buttons randomly
  UPDATE_COLOR = 'update-color', // Allow the button color to change
  UPDATE_FILL = 'update-fill', // Allow the button fill to change
  UPDATE_ICON = 'update-icon', // Allow the button icon to change
  UPDATE_SIZE = 'update-size', // Allow the button size to change
  UPDATE_TEXT = 'update-text', // Allow the button text to change
  SHUFFLE = 'shuffle', // Toggle state after each shuffle
}
