import { Button } from "@mui/material";
import { Html } from "@react-three/drei";

interface ICustomButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  textButton?: string;
}

const CustomButton = ({ onClick, textButton }: ICustomButtonProps) => {
  return (
    <Html>
      <Button onClick={onClick} variant="contained">
        {textButton}
      </Button>
    </Html>
  );
};

export default CustomButton;
