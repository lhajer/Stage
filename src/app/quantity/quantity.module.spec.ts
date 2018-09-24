import { QuantityModule } from './quantity.module';

describe('QuantityModule', () => {
  let quantityModule: QuantityModule;

  beforeEach(() => {
    quantityModule = new QuantityModule();
  });

  it('should create an instance', () => {
    expect(quantityModule).toBeTruthy();
  });
});
