import { forwardRef } from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';

const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));
export default upgradeAdapter;