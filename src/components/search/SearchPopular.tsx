import styled from 'styled-components/macro';
import { getFontStyle, rem } from '@/theme/utils';
import { Link } from 'react-router-dom';

const StPopular = styled.div`
  width: 50%;
  padding-left: ${rem(30)};
  height: fit-content;

  h2 {
    ${getFontStyle('LabelL')};
    color: var(--gray200);
  }

  li:last-child {
    ${getFontStyle('ParagraphS')};
    display: block;
    color: var(--gray500);
    margin-top: ${rem(16)};
  }

  ul {
    padding-top: ${rem(11)};
  }

  @media (min-width: 768px) {
    li:last-child {
      ${getFontStyle('ParagraphM')};
    }
  }

  @media (min-width: 1920px) {
    li:last-child {
      ${getFontStyle('ParagraphL')};
    }

    ul {
      padding-top: ${rem(18)};
    }

    h2 {
      ${getFontStyle('LabelXL')};
    }
  }
`;

const StKeyword = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  height: ${rem(18)};
  margin-top: ${rem(14)};

  span {
    ${getFontStyle('ParagraphM')};
    color: var(--primary);
    width: ${rem(24)};
  }

  a {
    ${getFontStyle('ParagraphM')};
    color: var(--gray300);
    border: 0;
    background-color: transparent;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    &:hover {
      color: var(--white);
    }
  }

  @media (min-width: 1920px) {
    margin-top: ${rem(18)};
    height: ${rem(32)};
    span {
      width: ${rem(34)};
      ${getFontStyle('ParagraphL')};
    }
    a {
      ${getFontStyle('ParagraphL')};
    }
  }
`;

const SearchPopular = () => {
  const popular = [
    '재벌집 막내아들',
    '미스터트롯2: 새로운 전설의 시작',
    '유 퀴즈 온 더 블럭',
    '대행사',
    'SHOW ME THE MONEY 11',
    '미씽: 그들이 있었다2',
    '술꾼도시여자들2',
    '캐나다 체크인',
    '미씽: 그들이 있었다 - 그들을 다만나다',
    '술꾼도시여자들',
  ];

  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = (nowDate.getMonth() + 1 + '').padStart(2, '0');
  const date = (nowDate.getDate() + '').padStart(2, '0');
  const hours = nowDate.getHours();
  const minutes = (nowDate.getMinutes() + '').padStart(2, '0');

  return (
    <StPopular>
      <h2>실시간 인기 검색어</h2>
      <ul>
        {popular.map((title, index) => (
          <StKeyword key={index}>
            <span>{+index + 1}</span>
            <Link to="/main">{title}</Link>
          </StKeyword>
        ))}
        <li>
          {`${year}.${month}.${date} ${hours >= 12 ? '오후' : '오전'} ${
            hours > 12
              ? (hours - 12 + '').padStart(2, '0')
              : (hours + '').padStart(2, '0')
          }:${minutes} 기준`}
        </li>
      </ul>
    </StPopular>
  );
};

export default SearchPopular;
