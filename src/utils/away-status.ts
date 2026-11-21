import type { HomeAssistant } from '../types/home-assistant';

/** The external Home Assistant automation owns this state; the dashboard only reads it. */
export const AWAY_MODE_ENTITY_ID = 'input_boolean.away_active';

export function isAwayModeActive(hass: HomeAssistant | undefined): boolean {
  return hass?.states?.[AWAY_MODE_ENTITY_ID]?.state === 'on';
}

/** Force the header to repaint even if the helper belongs to no dashboard area. */
export function hasAwayModeChange(oldHass: HomeAssistant, newHass: HomeAssistant): boolean {
  return oldHass.states?.[AWAY_MODE_ENTITY_ID]?.state !== newHass.states?.[AWAY_MODE_ENTITY_ID]?.state;
}
