/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import HelloWorld from './HelloWorld';

// describe: 테스트 그룹을 하나로 묶어주는 역할
describe('Hello Component', () => {
  // it: 개별 테스트 케이스 정의 하는데 사용
  it('render', () => {
    // getByText: 컴포넌트에 대한 쿼리함수, HelloWorld라는 컴포넌트에 문자열이 있는지 확인하는 함수
    const { getByText } = render(<HelloWorld />);
    // expect: 특정값이 기대한대로 있는지 확인
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('second test', () => {});
});
