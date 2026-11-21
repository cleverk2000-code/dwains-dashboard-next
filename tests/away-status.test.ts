import { describe, expect, it } from 'vitest';
import { AWAY_MODE_ENTITY_ID, hasAwayModeChange, isAwayModeActive } from '../src/utils/away-status';
import { entityState, hassWithStates } from './helpers';

describe('away-mode status chip', () => {
  it('uses the existing Home Assistant automation helper', () => {
    expect(AWAY_MODE_ENTITY_ID).toBe('input_boolean.away_active');
  });

  it('is only shown for on and stays hidden for off, unknown, unavailable or missing', () => {
    expect(isAwayModeActive(hassWithStates([entityState(AWAY_MODE_ENTITY_ID, 'on')]))).toBe(true);
    for (const state of ['off', 'unknown', 'unavailable']) {
      expect(isAwayModeActive(hassWithStates([entityState(AWAY_MODE_ENTITY_ID, state)]))).toBe(false);
    }
    expect(isAwayModeActive(hassWithStates([]))).toBe(false);
    expect(isAwayModeActive(undefined)).toBe(false);
  });

  it('updates for away and home transitions without depending on area membership', () => {
    const away = hassWithStates([entityState(AWAY_MODE_ENTITY_ID, 'on')]);
    const home = hassWithStates([entityState(AWAY_MODE_ENTITY_ID, 'off')]);
    expect(hasAwayModeChange(home, away)).toBe(true);
    expect(hasAwayModeChange(away, home)).toBe(true);
    expect(hasAwayModeChange(away, away)).toBe(false);
    expect(hasAwayModeChange(home, home)).toBe(false);
  });
});
