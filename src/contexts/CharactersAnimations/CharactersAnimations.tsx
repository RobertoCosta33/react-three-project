import { ReactNode, createContext, useContext, useState } from "react";

interface ICharactersAnimationsContext {
    animationIndex: number;
    setAnimationIndex: React.Dispatch<React.SetStateAction<number>>;
    animations: any;
    setAnimations: React.Dispatch<React.SetStateAction<any>>;
  }
interface ICharactersAnimationsProviderProps {
  children: ReactNode;
}

const CharactersAnimationsContext = createContext<ICharactersAnimationsContext>({
  animationIndex: 0,
  setAnimationIndex: () => {},
  animations: [],
  setAnimations: () => {},
} as ICharactersAnimationsContext);

export const CharactersAnimationsProvider = ({
  children,
}: ICharactersAnimationsProviderProps) => {
  const [animationIndex, setAnimationIndex] = useState<number>(0);
  const [animations, setAnimations] = useState();

  return (
    <CharactersAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {children}
    </CharactersAnimationsContext.Provider>
  );
};

export const useCharactersAnimations = () => {
  return useContext(CharactersAnimationsContext);
};
