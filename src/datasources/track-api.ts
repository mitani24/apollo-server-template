import { RESTDataSource } from "apollo-datasource-rest";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/";
  }

  getTracks() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    return this.get(`authors/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get(`tracks/${trackId}`);
  }

  incrementTrackViews(trackId: string) {
    return this.patch(`tracks/${trackId}`, {
      numberOfViews: getRandomInt(100),
    });
  }
}

export default TrackAPI;
