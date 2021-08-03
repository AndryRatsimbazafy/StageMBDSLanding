import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  dataLoaded: boolean = false;
  videoStarted: boolean = false;
  stopFunctionLoadedOnce: boolean = false;
  constructor(
    private modalService: BsModalService,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.ngxLoader.start();
  }

  ngAfterViewInit() {
    this.videoPlayer.nativeElement.onloadeddata = (event) => {
      this.dataLoaded = true;
    };

    this.videoPlayer.nativeElement.onplaying = (event) => {
      this.videoStarted = true;
      this.ngxLoader.stopBackground();
      if (this.videoStarted && !this.stopFunctionLoadedOnce) {
        this.ngxLoader.stop();
        this.stopFunctionLoadedOnce = true;
      }
    };

    this.videoPlayer.nativeElement.onwaiting = (event) => {
      this.ngxLoader.startBackground();
    };
  }

  openModal(template: TemplateRef<any>, classValue?: string): void {
    const  modalClass = classValue ? 'customModal' : 'modal-lg';
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  closeAndregister(template: TemplateRef<any>) {
    console.log("template to open", template)
    this.modalRef.hide();
    this.openModal(template);
  }

  onLoad() {
    console.log('video loaded ....');
  }

  redirect() {
    window.location.href = "https://www.w3dsalonvituelreno2021.fr/" ;
  }
}
