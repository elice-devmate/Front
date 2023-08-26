import styled from 'styled-components';

export const PageHeader = styled.header`
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;

  strong {
    color: var(--blue-regular1);
    font-weight: 600;
    font-size: 18px;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-top: 10px;
  }
`;

export const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const ProfileTop = styled.div`
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 2px 2px var(--box-shadow);
  }

  h3 {
    margin: 15px 0;
    font-size: 20px;
    font-weight: 500;
  }

  button {
    border: none;
    background-color: #ddd;
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #ccc;
  }

  button.blue {
    background-color: var(--blue-regular1);
    color: #fff;
    margin-right: 10px;
  }

  button.blue:hover {
    background-color: var(--blue-regular2);
  }
`;

export const ProfileInfo = styled.dl`
  width: 100%;
  margin-top: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;

  dt {
    width: 120px;
    font-weight: 500;
  }

  dd {
    flex: 1;
    line-height: 1.4;
    display: flex;
    gap: 10px;
  }

  a {
    color: inherit;
  }
`;

export const TechTags = styled.span`
  background-color: #4d4d4d;
  color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
