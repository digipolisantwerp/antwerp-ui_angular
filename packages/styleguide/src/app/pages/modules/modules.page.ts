import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {APP_ROUTES} from '../../app.routes';

@Component({
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPageComponent implements OnInit {
  public packages: Routes = APP_ROUTES;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    if (this.activatedRoute.snapshot.children.length === 0) {
      this.router.navigate([this.packages[0].path], {relativeTo: this.activatedRoute});
    }
  }
}
