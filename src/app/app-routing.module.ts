import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaaComponent } from './components/aaa/aaa.component';
import { AboutComponent } from './components/about/about.component';
import { BbbComponent } from './components/bbb/bbb.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
    { path: "about", component: AboutComponent },
    { path: "help", component: HelpComponent, children:[
            { path: "aaa", component: AaaComponent },
            { path: "bbb", component: BbbComponent }
        ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
