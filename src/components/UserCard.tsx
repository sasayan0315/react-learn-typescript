import { VFC } from "react";
import styled from "styled-components";
import { userProfile } from "../types/userProfile";

type Props = {
  user: userProfile;
};

const StyledDiv = styled.div`
  border: solid 5px #ccc;
  border-radius: 10px;
  padding-left: 10px;
  width: 50%;
  background-color: #abd;
  margin: 8px;
`;
export const UserCard: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <>
      <StyledDiv>
        <dl>
          <dt>名前</dt>
          <dd>{user?.name}</dd>
          <dt>住所</dt>
          <dd>{user?.address}</dd>
          <dt>email</dt>
          <dd>{user?.email}</dd>
        </dl>
      </StyledDiv>
    </>
  );
};
