/* eslint-disable no-undef */
import { render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, vi } from 'vitest';
import Profile from './Profile';

describe('Profile Components', () => {
  const mockUser = {
    name: 'Alice',
    email: 'alice@google.com',
  };
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUser),
      })
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly', async () => {
    const { getByText, queryByText } = render(<Profile userId='1' />);

    expect(getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText('Alice')).toBeInTheDocument();
    });

    expect(queryByText('Loading...')).not.toBeInTheDocument();
  });
});
