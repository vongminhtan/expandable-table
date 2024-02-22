import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TableExpandCollapseRoutingModule } from './table-expand-collapse-routing.module';
import { TableExpandCollapseComponent } from './table-expand-collapse.component';
import { MatTableModule } from "@angular/material/table";

@NgModule({
    declarations: [TableExpandCollapseComponent],
    imports: [
        CommonModule,
        TableExpandCollapseRoutingModule,
        HttpClientModule,
        MatTableModule
    ],
    exports: [TableExpandCollapseComponent]
})
export class TableExpandCollapseModule {}
