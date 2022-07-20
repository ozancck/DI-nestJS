import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplayPower(watts: number) {
    console.log(`Supplaying ${watts} worth of power`);
  }
}
