import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import s from "./Content.module.css";
import {
  Props,
  IMapStateToProps,
  IMapDispatchToProps,
  IStateContent,
} from "./Content.props";
import {
  getGames,
  getNextGames,
} from "./../../store/reducers/games/gamesActions";
import { Game } from "./../Game/Game";
import { useDispatch } from "react-redux";
import { useTypedDispatch } from "./../../hooks/useTypedDispatch/useTypedDispatch";
import { useTypedSelector } from "./../../hooks/useTypedSelector/useTypedSelector";

export const Content: React.FC<{}> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const { ...games }: IMapStateToProps = useTypedSelector(
    (state) => state.games
  );
  const [isMaxScroll, setIsMaxScroll] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    dispatch(getGames());
  }, []);

  useEffect(() => {
    if (isMaxScroll === true) {
      dispatch(getNextGames(games.next));
    }
  }, [isMaxScroll]);

  const handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      ref.current!.scrollHeight - ref.current!.clientHeight ===
      ref.current!.scrollTop
    ) {
      setIsMaxScroll((state) => {
        return true;
      });
    } else {
      setIsMaxScroll((state) => {
        return false;
      });
    }
  };

  return (
    <section className={s.content} onScroll={handleScroll} ref={ref}>
      <div className={s.container}>
        <div className={s.title}>All Games</div>
        {/*<div className={s.filtered}></div>*/}
        <div className={s.games}>
          {games.games.map((game) => (
            <Game {...game} />
          ))}
          {/*<Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
            platforms={[
              { platform: { name: "PS Vita" } },
              { platform: { name: "Nintendo" } },
              { platform: { name: "Xbox X" } },
              { platform: { name: "PlayStation5" } },
              { platform: { name: "PC" } },
            ]}
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />
          <Game
            name="Grand Theft Auto V"
            background_image="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
          />*/}
        </div>
      </div>
    </section>
  );
};
