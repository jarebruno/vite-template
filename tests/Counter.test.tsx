import { render } from '@testing-library/react';
import { Counter } from '../src/components/Counter'

describe('Counter', () => {

  it('should render', () => {
    const { baseElement } = render(<Counter/>)
    expect(baseElement).toMatchSnapshot()
  });
})