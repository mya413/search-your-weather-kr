import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

interface DeleteBtnProps {
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function DeleteButton({ setInputSearch }: DeleteBtnProps) {
  const deleteValueHandler = () => {
    setInputSearch("");
  };

  return (
    <DeleteButtonStyle type="button" onClick={deleteValueHandler}>
      <IoMdCloseCircle />
    </DeleteButtonStyle>
  );
}

const DeleteButtonStyle = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    & > svg {
      color: #222;
      transition: all 0.3s;
    }
  }

  & > svg {
    font-size: 20px;
    color: #bbb;
    transition: all 0.3s;
  }
`;
