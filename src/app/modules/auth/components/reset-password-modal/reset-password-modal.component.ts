import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../services/auth.service';
import { ResetPasswordServerAnswer } from '../../interfaces/ResetPasswordServerAnswer';

@Component({
  selector: 'app-reset-password-modal',
  templateUrl: './reset-password-modal.component.html',
  styleUrls: ['./reset-password-modal.component.css']
})
export class ResetPasswordModalComponent implements OnInit {
  @Output('modalClose') modalCloseEvent = new EventEmitter();
  resetPasswordForm: FormGroup;

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  closeModal() {
    this.modalCloseEvent.emit();
  }

  onSubmit() {
    if (this.resetPasswordForm.invalid) {
      return console.log('Validation error');
    }

    this.authService.resetPassword(this.resetPasswordForm.value.email).subscribe((res: ResetPasswordServerAnswer) => {
      this.closeModal();
    }, (err) => {
      console.error(err);

      this.messageService.add({
        severity: 'error',
        summary: 'Reset password has failed',
        detail: err.error.message,
      });
    });
  }
}
