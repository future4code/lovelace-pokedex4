export function damage(power, attack, level) {
    return Math.floor(power * 0.1 * (attack * 0.2 + level * 0.8));
  }
  