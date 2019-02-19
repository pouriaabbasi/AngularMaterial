import { EventEmitter } from '@angular/core';

export class TableActionModel {
    name: string;
    action?: EventEmitter<any>;
    icon?: string;
    mustSelect?: boolean;
    mustConfirm?: boolean;
}