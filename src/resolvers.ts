import { ApolloError } from "apollo-server";
import { Resolvers } from "./gen/graphql-resolver-types";
import TrackAPI from "./datasources/track-api";

type ContextType = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};

const resolvers: Resolvers<ContextType> = {
  Query: {
    tracks(_, __, { dataSources }) {
      return dataSources.trackAPI.getTracks();
    },
    track(_, { id }, { dataSources }) {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    async incrementTrackViews(_, { id }, { dataSources }) {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        if (err instanceof ApolloError) {
          return {
            code: err.extensions.response.status,
            success: false,
            message: err.extensions.response.body,
            track: null,
          };
        }
        throw err;
      }
    },
  },
  Track: {
    author({ authorId }, _, { dataSources }) {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export default resolvers;
