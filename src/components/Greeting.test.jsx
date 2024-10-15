/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Greeting name={'Alice'} />);
    expect(getByText('Hello, Alice')).toBeInTheDocument();
  });

  // 스냅샷 테스트: 컴포넌트가 의도대로 렌더링되는지 확인
  // 단축키 u로 스냅샷 업데이트 해줘야함
  it('should render', () => {
    const { asFragment } = render(<Greeting name={'Bob'} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
