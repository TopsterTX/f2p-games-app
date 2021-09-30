import axios from "axios";

export const apiGames = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
