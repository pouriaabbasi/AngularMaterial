import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationComponent } from 'src/app/Components/Common/notification/notification.component';
import { NotificationActionModel } from 'src/app/Models/Common/notification-action.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private defaultActions: NotificationActionModel[] = [
    { caption: 'باشه', icon: 'done', name: 'ok' }
  ];

  constructor(
    private snakBar: MatSnackBar
  ) { }


  public ShowSuccess(message: string, duration?: number, actions?: NotificationActionModel[]) {
    this.showNotification(message, 'check_box', 'success', duration, actions);
  }
  public ShowInfo(message: string, duration?: number, actions?: NotificationActionModel[]) {
    this.showNotification(message, 'notification_important', 'info', duration, actions);
  }
  public ShowWarning(message: string, duration?: number, actions?: NotificationActionModel[]) {
    this.showNotification(message, 'warning', 'warning', duration, actions);
  }
  public ShowError(message: string, duration?: number, actions?: NotificationActionModel[]) {
    this.showNotification(message, 'error', 'error', duration, actions);
  }

  private showNotification(message: string, icon: string, type: string, duration?: number, actions?: NotificationActionModel[]) {
    this.snakBar.openFromComponent(NotificationComponent, {
      duration: duration ? duration : 3000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
      direction: 'rtl',
      panelClass: 'persian',
      data: {
        message: message,
        icon: icon,
        type: type,
        actions: actions// ? actions : this.defaultActions
      }
    });
  }
}
