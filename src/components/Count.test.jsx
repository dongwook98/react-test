/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import Count from './Count';
import userEvent from '@testing-library/user-event';

describe('Count Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Count />);
    expect(getByText('Count: 0')).toBeInTheDocument();
  });

  it('should increase when button click', async () => {
    const { getByText } = render(<Count />);
    expect(getByText('Count: 0')).toBeInTheDocument();
    await userEvent.click(getByText('+'));
    expect(getByText('Count: 1')).toBeInTheDocument();
  });

  it('should decrease when button click', async () => {
    const { getByText } = render(<Count />);
    expect(getByText('Count: 0')).toBeInTheDocument();
    await userEvent.click(getByText('-'));
    expect(getByText('Count: -1')).toBeInTheDocument();
  });
});
