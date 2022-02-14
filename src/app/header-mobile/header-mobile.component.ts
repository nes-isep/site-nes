
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  showFiller: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.showFiller = false;
  }

  openCloseHyperLinks(): void {
    // @ts-ignore
    if (document.getElementById('hyperlinks').style.display === 'block'){
      // @ts-ignore
      document.getElementById('hyperlinks').style.display = 'none';
      // @ts-ignore
      document.getElementById('spacerTop').style.marginTop = '45px';
      // @ts-ignore
      document.getElementById('carouselExampleCaptions').style.marginTop = '22px';
      // @ts-ignore
      document.getElementById("carousel").style.paddingTop = '60px';
    } else {
      // @ts-ignore
      document.getElementById('hyperlinks').style.display = 'block';
      // @ts-ignore
      document.getElementById('spacerTop').style.marginTop = '0px';
      // @ts-ignore
      document.getElementById('carouselExampleCaptions').style.marginTop = '0px';
      // @ts-ignore
      document.getElementById("carousel").style.paddingTop = '0px';
    }
  }

}
