import { useCharactersAnimations } from "@/contexts/CharactersAnimations/CharactersAnimations";
import Button from "@mui/material/Button";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharactersAnimations();
  if (!animations) return null;

  const animationButtons = animations.map((animation: any, index: number) => {

    return (
      <Button
        onClick={() => setAnimationIndex(index)}
        variant={animationIndex === index ? "contained" : "outlined"}
        key={animation}
        fullWidth
      >
        {animation}
      </Button>
    );
  });

  return (
    <div
      style={{
        width: "300px",
        height: "100%",
        padding: "20px",
        // backgroundColor: "#c4c4c4",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {animationButtons}
    </div>
  );
};

export default Interface;
