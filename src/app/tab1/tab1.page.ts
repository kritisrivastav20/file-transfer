import { Component, Input } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fileTransfer: FileTransferObject = this.transfer.create();
  @Input() name?: string;

  constructor(private transfer: FileTransfer, private platform: Platform) {
    console.log('here')
   }

  uploadFilesFromDevice() {
    console.log('not available')

    if (this.platform.is('cordova')) {
      let options: FileUploadOptions = {
        chunkedMode: false,
        fileKey: 'file',
        fileName: 'filename.jpg',
      }

      this.fileTransfer.upload('&lt;file path>', '&lt;api endpoint>', options)
        .then((data) => {
          console.log(data)
        }, (err) => {
        })
    } else {
      console.log('not available')
    }

  }
}


