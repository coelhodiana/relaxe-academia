import { render } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  test('should render title', async () => {
    await render(AppComponent, {})

  })
})
