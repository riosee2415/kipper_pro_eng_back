import { CURRENT_TIME } from "../../../../utils/commonUtils";
import BoardType from "../../../models/BoardType";

export default {
  Query: {
    getBoardType: async (_, args) => {
      try {
        const result = await BoardType.find();

        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },

  Mutation: {
    createBoardType: async (_, args) => {
      const { title, type } = args;

      try {
        const restult = await BoardType.create({
          title,
          type,
        });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateBoardType: async (_, args) => {
      const { id, title, type } = args;

      try {
        const result = await BoardType.updateOne(
          { _id: id },
          {
            $set: {
              title,
              type,
            },
          }
        );

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    deleteBoardType: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME;

        const result = await BoardType.updateOne(
          { _id: id },
          {
            isDelete: true,
            deletedAt: current,
          }
        );
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
