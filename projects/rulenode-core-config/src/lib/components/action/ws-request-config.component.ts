import { Component } from '@angular/core';
import { AppState } from '@core/public-api';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tb-action-node-ws-request-config',
  templateUrl: './ws-request-config.component.html',
  styleUrls: []
})
export class WsRequestConfigComponent extends RuleNodeConfigurationComponent {

  wsRequestConfigForm: FormGroup;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.wsRequestConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.wsRequestConfigForm = this.fb.group({
      webSocketUrl: [configuration ? configuration.webSocketUrl : null, [Validators.required]],
      requestTimeout: [configuration ? configuration.requestTimeout : null, [Validators.required]],
      connectionTimeout: [configuration ? configuration.connectionTimeout : null, [Validators.required]],
      port: [configuration ? configuration.port : null, [Validators.required]],
    });
  }
}
