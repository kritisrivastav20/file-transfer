import { Component, Input } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  fileTransfer: FileTransferObject = this.transfer.create();
  @Input() name?: string;

  constructor(private transfer: FileTransfer, private platform: Platform) {
    console.log('here')
   }
}

