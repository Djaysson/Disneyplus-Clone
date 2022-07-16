import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin: 40px 0 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  height: 56px;
  background: var(--white);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: var(--grey);
  }
`;
export const TrailerButton = styled(PlayButton)`
  background: var(--transparent-black);
  border: 1px solid var(--white);
  color: var(--white);
`;
export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--white);
  background: var(--transparent-black);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 2rem;
    color: var(--white);
  }
`;
export const GroupWatchButton = styled(AddButton)`
  background: var(--black);
`;
export const SubTitle = styled.div`
  color: var(--white);
  font-size: 1rem;
  min-height: 20px;
  margin-top: 26px;
`;
export const Description = styled.div`
  line-height: 1.4;
  font-size: 1.3rem;
  margin-top: 16px;
  color: var(--white);
  max-width: 38rem;
`;
