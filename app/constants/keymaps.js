'use strict';

/* keymaps must be in lowercase */
import { IS_DEV } from './env';

export const fileExplorerKeymaps = {
  newFolder: ['cmd+n'],
  copy: ['cmd+c'],
  paste: ['cmd+v'],
  delete: ['backspace'],
  refresh: IS_DEV ? ['cmd+alt+r'] : ['cmd+r'],
  up: ['cmd+b'],
  selectAll: ['cmd+a'],
  rename: ['cmd+d'],
  open: ['enter'],
  fileExplorerTabSwitch: ['cmd+1'],
  navigationLeft: ['left'],
  navigationRight: ['right'],
  navigationUp: ['up'],
  navigationDown: ['down'],
  multipleSelectLeft: ['shift+left'],
  multipleSelectRight: ['shift+right'],
  multipleSelectUp: ['shift+up'],
  multipleSelectDown: ['shift+down']
};